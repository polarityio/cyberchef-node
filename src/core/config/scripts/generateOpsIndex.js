/**
 * This script automatically generates src/core/operations/index.js, containing
 * imports for all operations in src/core/operations.
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

/* eslint no-console: ["off"] */
const path = require("path");
const fs = require("fs");
const process = require("process");

const dir = path.join(process.cwd() + "/src/core/config/");
if (!fs.existsSync(dir)) {
    console.log("\nCWD: " + process.cwd());
    console.log(
        "Error: generateOpsIndex.js should be run from the project root"
    );
    console.log(
        "Example> node --experimental-modules src/core/config/scripts/generateOpsIndex.js"
    );
    process.exit(1);
}

// Find all operation files
const opObjs = [];
fs.readdirSync(path.join(dir, "../operations")).forEach((file) => {
    if (!file.endsWith(".js") || file === "index.js") return;
    opObjs.push(file.split(".js")[0]);
});

// Construct index file
let code = `/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateOpsIndex.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright ${new Date().getUTCFullYear()}
* @license Apache-2.0
*/
`;

opObjs.forEach((obj) => {
    code += `const ${obj} = require("./${obj}.js")\n`;
});

code += `
module.exports = {
`;

opObjs.forEach((obj) => {
    code += `    ${obj},\n`;
});

code += "};\n";

// Write file
fs.writeFileSync(path.join(dir, "../operations/index.js"), code);
console.log("Written operation index.");
