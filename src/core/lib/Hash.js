/**
 * Hashing resources.
 *
 * @author n1474335 [n1474335@gmail.com]
 *
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const { Utils } = require("../Utils.js");


/**
 * Generic hash function.
 *
 * @param {string} name
 * @param {ArrayBuffer} input
 * @param {Object} [options={}]
 * @returns {string}
 */
async function runHash(name, input, options={}) {
    const { default: CryptoApi } = await import(
        "crypto-api/src/crypto-api.mjs"
    );
    const msg = Utils.arrayBufferToStr(input, false),
        hasher = CryptoApi.getHasher(name, options);
    hasher.update(msg);
    return CryptoApi.encoder.toHex(hasher.finalize());
};
exports.runHash = runHash;

