const { Utils } = require("../Utils.js");

/**
 * Base85 resources.
 *
 * @author PenguinGeorge [george@penguingeorge.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

/**
 * Base85 alphabet options.
 */
const ALPHABET_OPTIONS = [
    {
        name: "Standard",
        value: "!-u",
    },
    {
        name: "Z85 (ZeroMQ)",
        value: "0-9a-zA-Z.\\-:+=^!/*?&<>()[]{}@%$#",
    },
    {
        name: "IPv6",
        value: "0-9A-Za-z!#$%&()*+\\-;<=>?@^_`{|}~",
    }
];
exports.ALPHABET_OPTIONS = ALPHABET_OPTIONS;

/**
 * Returns the name of the alphabet, when given the alphabet.
 *
 * @param {string} alphabet
 * @returns {string}
 */
function alphabetName(alphabet) {
    alphabet = escape(alphabet);
    let name;

    ALPHABET_OPTIONS.forEach(function(a) {
        const expanded = Utils.expandAlphRange(a.value).join("");
        if (alphabet === escape(expanded)) name = a.name;
    });

    return name;
};
exports.alphabetName = alphabetName;
