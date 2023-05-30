/**
 * @author bwhitn [brian.m.whitney@outlook.com]
 * @author d98762625 [d98762625@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

const Operation = require("../Operation.mjs");
const { mean, createNumArray } = require("../lib/Arithmetic.mjs");
const { ARITHMETIC_DELIM_OPTIONS } = require("../lib/Delim.mjs");
const BigNumber = require("bignumber.js");

/**
 * Mean operation
 */
class Mean extends Operation {

    /**
     * Mean constructor
     */
    constructor() {
        super();

        this.name = "Mean";
        this.module = "Default";
        this.description = "Computes the mean (average) of a number list. If an item in the string is not a number it is excluded from the list.<br><br>e.g. <code>0x0a 8 .5 .5</code> becomes <code>4.75</code>";
        this.infoURL = "https://wikipedia.org/wiki/Arithmetic_mean";
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
        const val = mean(createNumArray(input, args[0]));
        return BigNumber.isBigNumber(val) ? val : new BigNumber(NaN);
    }

}

module.exports = Mean;
