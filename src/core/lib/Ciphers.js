/**
 * Cipher functions.
 *
 * @author Matt C [matt@artemisbot.uk]
 * @author n1474335 [n1474335@gmail.com]
 *
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 *
 */

const OperationError = require("../errors/OperationError.js");
const CryptoJS = require("crypto-js");

/**
 * Affine Cipher Encode operation.
 *
 * @author Matt C [matt@artemisbot.uk]
 * @param {string} input
 * @param {Object[]} args
 * @returns {string}
 */
function affineEncode(input, args) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz",
        a = args[0],
        b = args[1];
    let output = "";

    if (!/^\+?(0|[1-9]\d*)$/.test(a) || !/^\+?(0|[1-9]\d*)$/.test(b)) {
        throw new OperationError("The values of a and b can only be integers.");
    }

    for (let i = 0; i < input.length; i++) {
        if (alphabet.indexOf(input[i]) >= 0) {
            // Uses the affine function ax+b % m = y (where m is length of the alphabet)
            output += alphabet[((a * alphabet.indexOf(input[i])) + b) % 26];
        } else if (alphabet.indexOf(input[i].toLowerCase()) >= 0) {
            // Same as above, accounting for uppercase
            output += alphabet[((a * alphabet.indexOf(input[i].toLowerCase())) + b) % 26].toUpperCase();
        } else {
            // Non-alphabetic characters
            output += input[i];
        }
    }
    return output;
};
exports.affineEncode = affineEncode;

/**
 * Generates a polybius square for the given keyword
 *
 * @private
 * @author Matt C [matt@artemisbot.uk]
 * @param {string} keyword - Must be upper case
 * @returns {string}
 */
function genPolybiusSquare (keyword) {
    const alpha = "ABCDEFGHIKLMNOPQRSTUVWXYZ",
        polArray = `${keyword}${alpha}`.split("").unique(),
        polybius = [];

    for (let i = 0; i < 5; i++) {
        polybius[i] = polArray.slice(i*5, i*5 + 5);
    }

    return polybius;
};
exports.genPolybiusSquare  = genPolybiusSquare ;

/**
 * A mapping of string formats to their classes in the CryptoJS library.
 *
 * @private
 * @constant
 */
const format = {
    "Hex":     CryptoJS.enc.Hex,
    "Base64":  CryptoJS.enc.Base64,
    "UTF8":    CryptoJS.enc.Utf8,
    "UTF16":   CryptoJS.enc.Utf16,
    "UTF16LE": CryptoJS.enc.Utf16LE,
    "UTF16BE": CryptoJS.enc.Utf16BE,
    "Latin1":  CryptoJS.enc.Latin1,
};
exports.format = format;
