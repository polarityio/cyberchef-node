/**
 * @author n1474335 [n1474335@gmail.com]
 * @author john19696 [john19696@protonmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const Utils = require("../Utils.js");
const MD2 = require("./MD2.js");
const MD4 = require("./MD4.js");
const MD5 = require("./MD5.js");
const MD6 = require("./MD6.js");
const SHA0 = require("./SHA0.js");
const SHA1 = require("./SHA1.js");
const SHA2 = require("./SHA2.js");
const SHA3 = require("./SHA3.js");
const Keccak = require("./Keccak.js");
const Shake = require("./Shake.js");
const RIPEMD = require("./RIPEMD.js");
const HAS160 = require("./HAS160.js");
const Whirlpool = require("./Whirlpool.js");
const SSDEEP = require("./SSDEEP.js");
const CTPH = require("./CTPH.js");
const Fletcher8Checksum = require("./Fletcher8Checksum.js");
const Fletcher16Checksum = require("./Fletcher16Checksum.js");
const Fletcher32Checksum = require("./Fletcher32Checksum.js");
const Fletcher64Checksum = require("./Fletcher64Checksum.js");
const Adler32Checksum = require("./Adler32Checksum.js");
const CRC8Checksum = require("./CRC8Checksum.js");
const CRC16Checksum = require("./CRC16Checksum.js");
const CRC32Checksum = require("./CRC32Checksum.js");
const BLAKE2b = require("./BLAKE2b.js");
const BLAKE2s = require("./BLAKE2s.js");
const Streebog = require("./Streebog.js");
const GOSTHash = require("./GOSTHash.js");
const LMHash = require("./LMHash.js");
const NTHash = require("./NTHash.js");
const OperationError = require("../errors/OperationError.js");

/**
 * Generate all hashes operation
 */
class GenerateAllHashes extends Operation {

    /**
     * GenerateAllHashes constructor
     */
    constructor() {
        super();

        this.name = "Generate all hashes";
        this.module = "Crypto";
        this.description = "Generates all available hashes and checksums for the input.";
        this.infoURL = "https://wikipedia.org/wiki/Comparison_of_cryptographic_hash_functions";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [
            {
                name: "Length (bits)",
                type: "option",
                value: [
                    "All", "128", "160", "224", "256", "320", "384", "512"
                ]
            },
            {
                name: "Include names",
                type: "boolean",
                value: true
            },
        ];
        this.hashes = [
            {name: "MD2", algo: (new MD2()), inputType: "arrayBuffer", params: []},
            {name: "MD4", algo: (new MD4()), inputType: "arrayBuffer", params: []},
            {name: "MD5", algo: (new MD5()), inputType: "arrayBuffer", params: []},
            {name: "MD6", algo: (new MD6()), inputType: "str", params: []},
            {name: "SHA0", algo: (new SHA0()), inputType: "arrayBuffer", params: []},
            {name: "SHA1", algo: (new SHA1()), inputType: "arrayBuffer", params: []},
            {name: "SHA2 224", algo: (new SHA2()), inputType: "arrayBuffer", params: ["224"]},
            {name: "SHA2 256", algo: (new SHA2()), inputType: "arrayBuffer", params: ["256"]},
            {name: "SHA2 384", algo: (new SHA2()), inputType: "arrayBuffer", params: ["384"]},
            {name: "SHA2 512", algo: (new SHA2()), inputType: "arrayBuffer", params: ["512"]},
            {name: "SHA3 224", algo: (new SHA3()), inputType: "arrayBuffer", params: ["224"]},
            {name: "SHA3 256", algo: (new SHA3()), inputType: "arrayBuffer", params: ["256"]},
            {name: "SHA3 384", algo: (new SHA3()), inputType: "arrayBuffer", params: ["384"]},
            {name: "SHA3 512", algo: (new SHA3()), inputType: "arrayBuffer", params: ["512"]},
            {name: "Keccak 224", algo: (new Keccak()), inputType: "arrayBuffer", params: ["224"]},
            {name: "Keccak 256", algo: (new Keccak()), inputType: "arrayBuffer", params: ["256"]},
            {name: "Keccak 384", algo: (new Keccak()), inputType: "arrayBuffer", params: ["384"]},
            {name: "Keccak 512", algo: (new Keccak()), inputType: "arrayBuffer", params: ["512"]},
            {name: "Shake 128", algo: (new Shake()), inputType: "arrayBuffer", params: ["128", 256]},
            {name: "Shake 256", algo: (new Shake()), inputType: "arrayBuffer", params: ["256", 512]},
            {name: "RIPEMD-128", algo: (new RIPEMD()), inputType: "arrayBuffer", params: ["128"]},
            {name: "RIPEMD-160", algo: (new RIPEMD()), inputType: "arrayBuffer", params: ["160"]},
            {name: "RIPEMD-256", algo: (new RIPEMD()), inputType: "arrayBuffer", params: ["256"]},
            {name: "RIPEMD-320", algo: (new RIPEMD()), inputType: "arrayBuffer", params: ["320"]},
            {name: "HAS-160", algo: (new HAS160()), inputType: "arrayBuffer", params: []},
            {name: "Whirlpool-0", algo: (new Whirlpool()), inputType: "arrayBuffer", params: ["Whirlpool-0"]},
            {name: "Whirlpool-T", algo: (new Whirlpool()), inputType: "arrayBuffer", params: ["Whirlpool-T"]},
            {name: "Whirlpool", algo: (new Whirlpool()), inputType: "arrayBuffer", params: ["Whirlpool"]},
            {name: "BLAKE2b-128", algo: (new BLAKE2b), inputType: "arrayBuffer", params: ["128", "Hex", {string: "", option: "UTF8"}]},
            {name: "BLAKE2b-160", algo: (new BLAKE2b), inputType: "arrayBuffer", params: ["160", "Hex", {string: "", option: "UTF8"}]},
            {name: "BLAKE2b-256", algo: (new BLAKE2b), inputType: "arrayBuffer", params: ["256", "Hex", {string: "", option: "UTF8"}]},
            {name: "BLAKE2b-384", algo: (new BLAKE2b), inputType: "arrayBuffer", params: ["384", "Hex", {string: "", option: "UTF8"}]},
            {name: "BLAKE2b-512", algo: (new BLAKE2b), inputType: "arrayBuffer", params: ["512", "Hex", {string: "", option: "UTF8"}]},
            {name: "BLAKE2s-128", algo: (new BLAKE2s), inputType: "arrayBuffer", params: ["128", "Hex", {string: "", option: "UTF8"}]},
            {name: "BLAKE2s-160", algo: (new BLAKE2s), inputType: "arrayBuffer", params: ["160", "Hex", {string: "", option: "UTF8"}]},
            {name: "BLAKE2s-256", algo: (new BLAKE2s), inputType: "arrayBuffer", params: ["256", "Hex", {string: "", option: "UTF8"}]},
            {name: "Streebog-256", algo: (new Streebog), inputType: "arrayBuffer", params: ["256"]},
            {name: "Streebog-512", algo: (new Streebog), inputType: "arrayBuffer", params: ["512"]},
            {name: "GOST", algo: (new GOSTHash), inputType: "arrayBuffer", params: ["D-A"]},
            {name: "LM Hash", algo: (new LMHash), inputType: "str", params: []},
            {name: "NT Hash", algo: (new NTHash), inputType: "str", params: []},
            {name: "SSDEEP", algo: (new SSDEEP()), inputType: "str"},
            {name: "CTPH", algo: (new CTPH()), inputType: "str"}
        ];
        this.checksums = [
            {name: "Fletcher-8", algo: (new Fletcher8Checksum), inputType: "byteArray", params: []},
            {name: "Fletcher-16", algo: (new Fletcher16Checksum), inputType: "byteArray", params: []},
            {name: "Fletcher-32", algo: (new Fletcher32Checksum), inputType: "byteArray", params: []},
            {name: "Fletcher-64", algo: (new Fletcher64Checksum), inputType: "byteArray", params: []},
            {name: "Adler-32", algo: (new Adler32Checksum), inputType: "byteArray", params: []},
            {name: "CRC-8", algo: (new CRC8Checksum), inputType: "arrayBuffer", params: ["CRC-8"]},
            {name: "CRC-16", algo: (new CRC16Checksum), inputType: "arrayBuffer", params: []},
            {name: "CRC-32", algo: (new CRC32Checksum), inputType: "arrayBuffer", params: []}
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const [length, includeNames] = args;
        this.inputArrayBuffer = input;
        this.inputStr = Utils.arrayBufferToStr(input, false);
        this.inputByteArray = new Uint8Array(input);

        let digest, output = "";
        // iterate over each of the hashes
        this.hashes.forEach(hash => {
            digest = this.executeAlgo(hash.algo, hash.inputType, hash.params || []);
            output += this.formatDigest(digest, length, includeNames, hash.name);
        });

        if (length === "All") {
            output += "\nChecksums:\n";
            this.checksums.forEach(checksum => {
                digest = this.executeAlgo(checksum.algo, checksum.inputType, checksum.params || []);
                output += this.formatDigest(digest, length, includeNames, checksum.name);
            });
        }

        return output;
    }

    /**
     * Executes a hash or checksum algorithm
     *
     * @param {Function} algo - The hash or checksum algorithm
     * @param {string} inputType
     * @param {Object[]} [params=[]]
     * @returns {string}
     */
    executeAlgo(algo, inputType, params=[]) {
        let digest = null;
        switch (inputType) {
            case "arrayBuffer":
                digest = algo.run(this.inputArrayBuffer, params);
                break;
            case "str":
                digest = algo.run(this.inputStr, params);
                break;
            case "byteArray":
                digest = algo.run(this.inputByteArray, params);
                break;
            default:
                throw new OperationError("Unknown hash input type: " + inputType);
        }

        return digest;
    }

    /**
     * Formats the digest depending on user-specified arguments
     * @param {string} digest
     * @param {string} length
     * @param {boolean} includeNames
     * @param {string} name
     * @returns {string}
     */
    formatDigest(digest, length, includeNames, name) {
        if (length !== "All" && (digest.length * 4) !== parseInt(length, 10))
            return "";

        if (!includeNames)
            return digest + "\n";

        return `${name}:${" ".repeat(13-name.length)}${digest}\n`;
    }

}

module.exports = GenerateAllHashes;
