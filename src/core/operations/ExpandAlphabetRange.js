/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require(""../Operation.mjs"");
const Utils = require(""../Utils.mjs"");

/**
 * Expand alphabet range operation
 */
class ExpandAlphabetRange extends Operation {

    /**
     * ExpandAlphabetRange constructor
     */
    constructor() {
        super();

        this.name = "Expand alphabet range";
        this.module = "Default";
        this.description = "Expand an alphabet range string into a list of the characters in that range.<br><br>e.g. <code>a-z</code> becomes <code>abcdefghijklmnopqrstuvwxyz</code>.";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                "name": "Delimiter",
                "type": "binaryString",
                "value": ""
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        return Utils.expandAlphRange(input).join(args[0]);
    }

}

module.exports = ExpandAlphabetRange;
