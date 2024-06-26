/**
 * Bitwise operation resources.
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

/**
 * Runs bitwise operations across the input data.
 *
 * @param {byteArray|Uint8Array} input
 * @param {byteArray} key
 * @param {function} func - The bitwise calculation to carry out
 * @param {boolean} nullPreserving
 * @param {string} scheme
 * @returns {byteArray}
 */
function bitOp (input, key, func, nullPreserving, scheme) {
    if (!key || !key.length) key = [0];
    const result = [];
    let x = null,
        k = null,
        o = null;

    for (let i = 0; i < input.length; i++) {
        k = key[i % key.length];
        if (scheme === "Cascade") k = input[i + 1] || 0;
        o = input[i];
        x = nullPreserving && (o === 0 || o === k) ? o : func(o, k);
        result.push(x);
        if (scheme &&
            scheme !== "Standard" &&
            !(nullPreserving && (o === 0 || o === k))) {
            switch (scheme) {
                case "Input differential":
                    key[i % key.length] = o;
                    break;
                case "Output differential":
                    key[i % key.length] = x;
                    break;
            }
        }
    }

    return result;
};
exports.bitOp  = bitOp ;

/**
 * XOR bitwise calculation.
 *
 * @param {number} operand
 * @param {number} key
 * @returns {number}
 */
function xor(operand, key) {
    return operand ^ key;
};
exports.xor = xor;


/**
 * NOT bitwise calculation.
 *
 * @param {number} operand
 * @returns {number}
 */
function not(operand, _) {
    return ~operand & 0xff;
};
exports.not = not;


/**
 * AND bitwise calculation.
 *
 * @param {number} operand
 * @param {number} key
 * @returns {number}
 */
function and(operand, key) {
    return operand & key;
};
exports.and = and;


/**
 * OR bitwise calculation.
 *
 * @param {number} operand
 * @param {number} key
 * @returns {number}
 */
function or(operand, key) {
    return operand | key;
};
exports.or = or;


/**
 * ADD bitwise calculation.
 *
 * @param {number} operand
 * @param {number} key
 * @returns {number}
 */
function add(operand, key) {
    return (operand + key) % 256;
};
exports.add = add;


/**
 * SUB bitwise calculation.
 *
 * @param {number} operand
 * @param {number} key
 * @returns {number}
 */
function sub(operand, key) {
    const result = operand - key;
    return (result < 0) ? 256 + result : result;
};
exports.sub = sub;


/**
 * Delimiter options for bitwise operations
 */
const BITWISE_OP_DELIMS = ["Hex", "Decimal", "Binary", "Base64", "UTF8", "Latin1"];
exports.BITWISE_OP_DELIMS = BITWISE_OP_DELIMS;
