/**
 * Hashing resources.
 *
 * @author n1474335 [n1474335@gmail.com]
 *
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Utils = require("../Utils.js");
const CryptoApi = require("crypto-api/src/crypto-api.js");


/**
 * Generic hash function.
 *
 * @param {string} name
 * @param {ArrayBuffer} input
 * @param {Object} [options={}]
 * @returns {string}
 */
function runHash(name, input, options={}) {
    const msg = Utils.arrayBufferToStr(input, false),
        hasher = CryptoApi.getHasher(name, options);
    hasher.update(msg);
    return CryptoApi.encoder.toHex(hasher.finalize());
};
exports.runHash = runHash;

