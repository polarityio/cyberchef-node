/**
 * @author bwhitn [brian.m.whitney@outlook.com]
 * @author d98762625 [d98762625@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

const BigNumber = require("bignumber.js");
const Operation = require("../Operation.js");
const { median, createNumArray } = require("../lib/Arithmetic.js");
const { ARITHMETIC_DELIM_OPTIONS } = require("../lib/Delim.js");

/**
 * Median operation
 */
class Median extends Operation {

    /**
     * Median constructor
     */
    constructor() {
        super();

        this.name = "Median";
        this.module = "Default";
        this.description = "Computes the median of a number list. If an item in the string is not a number it is excluded from the list.<br><br>e.g. <code>0x0a 8 1 .5</code> becomes <code>4.5</code>";
        this.infoURL = "https://wikipedia.org/wiki/Median";
        this.inputType = "string";
        this.outputType = "BigNumber";
        this.args = [
            {
                "name": "Delimiter",
                "type": "option",
                "value": ARITHMETIC_DELIM_OPTIONS,
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {BigNumber}
     */
    run(input, args) {
        const val = median(createNumArray(input, args[0]));
        return BigNumber.isBigNumber(val) ? val : new BigNumber(NaN);
    }

}

module.exports = Median;
