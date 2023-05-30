/**
 * @author Klaxon [klaxon@veyr.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

const Operation = require("../Operation.mjs");

/**
 * Remove Diacritics operation
 */
class RemoveDiacritics extends Operation {

    /**
     * RemoveDiacritics constructor
     */
    constructor() {
        super();

        this.name = "Remove Diacritics";
        this.module = "Default";
        this.description = "Replaces accented characters with their latin character equivalent. Accented characters are made up of Unicode combining characters, so unicode text formatting such as strikethroughs and underlines will also be removed.";
        this.infoURL = "https://wikipedia.org/wiki/Diacritic";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        // reference: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463
        return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

}

module.exports = RemoveDiacritics;
