/**
 * Bacon Cipher resources.
 *
 * @author Karsten Silkenbäumer [github.com/kassi]
 * @copyright Karsten Silkenbäumer 2019
 * @license Apache-2.0
 */

/**
 * Bacon definitions.
 */
const BACON_ALPHABETS = {
    "Standard (I=J and U=V)": {
        alphabet: "ABCDEFGHIKLMNOPQRSTUWXYZ",
        codes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 23]
    },
    "Complete": {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
};
exports.BACON_ALPHABETS = BACON_ALPHABETS;
const BACON_TRANSLATION_01 = "0/1";
exports.BACON_TRANSLATION_01 = BACON_TRANSLATION_01;
const BACON_TRANSLATION_AB = "A/B";
exports.BACON_TRANSLATION_AB = BACON_TRANSLATION_AB;
const BACON_TRANSLATION_CASE = "Case";
exports.BACON_TRANSLATION_CASE = BACON_TRANSLATION_CASE;
const BACON_TRANSLATION_AMNZ = "A-M/N-Z first letter";
exports.BACON_TRANSLATION_AMNZ = BACON_TRANSLATION_AMNZ;
const BACON_TRANSLATIONS = [
    BACON_TRANSLATION_01,
    BACON_TRANSLATION_AB,
    BACON_TRANSLATION_CASE,
    BACON_TRANSLATION_AMNZ,
];
exports.BACON_TRANSLATIONS = BACON_TRANSLATIONS;
const BACON_TRANSLATIONS_FOR_ENCODING = [
    BACON_TRANSLATION_01,
    BACON_TRANSLATION_AB
];
exports.BACON_TRANSLATIONS_FOR_ENCODING = BACON_TRANSLATIONS_FOR_ENCODING;
const BACON_CLEARER_MAP = {
    [BACON_TRANSLATION_01]: /[^01]/g,
    [BACON_TRANSLATION_AB]: /[^ABab]/g,
    [BACON_TRANSLATION_CASE]: /[^A-Za-z]/g,
};
exports.BACON_CLEARER_MAP = BACON_CLEARER_MAP;
const BACON_NORMALIZE_MAP = {
    [BACON_TRANSLATION_AB]: {
        "A": "0",
        "B": "1",
        "a": "0",
        "b": "1"
    },
};
exports.BACON_NORMALIZE_MAP = BACON_NORMALIZE_MAP;

/**
 * Swaps zeros to ones and ones to zeros.
 *
 * @param {string} data
 * @returns {string}
 *
 * @example
 * // returns "11001 01010"
 * swapZeroAndOne("00110 10101");
 */
function swapZeroAndOne(string) {
    return string.replace(/[01]/g, function (c) {
        return {
            "0": "1",
            "1": "0"
        }[c];
    });
};
exports.swapZeroAndOne = swapZeroAndOne;
