/**
 * Bundle the generated Node entrypoint (src/node/index.js) into a single-file
 * distributable using @vercel/ncc.
 *
 * Why: installing cyberchef-node pulls in a very large node_modules tree
 * (~16k files). On network-backed disks the per-file round-trips dominate
 * install time. Bundling collapses the pure-JS runtime dependencies into one
 * file, cutting the shipped file count by ~98% while remaining functionally
 * identical.
 *
 * WebAssembly-backed packages cannot be inlined by ncc/webpack, so they are
 * kept external and continue to resolve from node_modules at runtime. They are
 * declared as the package's only runtime `dependencies` in package.json.
 *
 * Output: dist/index.js (plus any ncc-emitted lazy chunks) — this is the
 * package `main`. Source under src/ is retained for development and tests but
 * is not published (see .npmignore).
 *
 * @license Apache-2.0
 */

const ncc = require("@vercel/ncc");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const ENTRY = path.join(ROOT, "src", "node", "index.js");
const OUT_DIR = path.join(ROOT, "dist");

/**
 * Packages that ship WebAssembly and therefore cannot be inlined by ncc.
 * These stay external and must remain declared in package.json `dependencies`.
 * Keep this list in sync with the WASM-backed dependencies in package.json.
 */
const WASM_EXTERNALS = [
    "tesseract.js",
    "tesseract.js-core",
    "libyara-wasm",
    "libbzip2-wasm",
    "argon2-browser"
];

const main = async () => {
    if (!fs.existsSync(ENTRY)) {
        throw new Error(
            `Entrypoint not found: ${ENTRY}. Run the generate step (npm run generate) before bundling.`
        );
    }

    // Clean previous output so stale chunks are never published.
    fs.rmSync(OUT_DIR, { recursive: true, force: true });
    fs.mkdirSync(OUT_DIR, { recursive: true });

    const { code, assets } = await ncc(ENTRY, {
        externals: WASM_EXTERNALS,
        cache: false,
        sourceMap: false,
        quiet: true,
        // Node built-ins and the WASM externals resolve from the environment.
        target: "es2021"
    });

    fs.writeFileSync(path.join(OUT_DIR, "index.js"), code);

    // ncc emits lazy-loaded chunks and static assets as additional files; the
    // bundle requires them as siblings, so they must be written next to index.js.
    for (const [assetPath, asset] of Object.entries(assets || {})) {
        const dest = path.join(OUT_DIR, assetPath);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, asset.source);
    }

    const fileCount = fs.readdirSync(OUT_DIR).length;
    const bytes = fs.statSync(path.join(OUT_DIR, "index.js")).size;
    // eslint-disable-next-line no-console
    console.log(
        `ncc bundle written to dist/ (${fileCount} file(s), index.js ${(bytes / 1e6).toFixed(1)}MB). ` +
            `Externals kept: ${WASM_EXTERNALS.join(", ")}.`
    );
};

main().catch((err) => {
    // eslint-disable-next-line no-console
    console.error("ncc bundling failed:", err);
    process.exit(1);
});
