/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const { Utils } = require("../Utils.js");
const { bitOp, sub, BITWISE_OP_DELIMS } = require("../lib/BitwiseOp.js");

/**
 * SUB operation
 */
class SUB extends Operation {

    /**
     * SUB constructor
     */
    constructor() {
        super();

        this.name = "SUB";
        this.module = "Default";
        this.description = "SUB the input with the given key (e.g. <code>fe023da5</code>), MOD 255";
        this.infoURL = "https://wikipedia.org/wiki/Bitwise_operation#Bitwise_operators";
        this.inputType = "byteArray";
        this.outputType = "byteArray";
        this.args = [
            {
                "name": "Key",
                "type": "toggleString",
                "value": "",
                "toggleValues": BITWISE_OP_DELIMS
            }
        ];
    }

    /**
     * @param {byteArray} input
     * @param {Object[]} args
     * @returns {byteArray}
     */
    run(input, args) {
        const key = Utils.convertToByteArray(args[0].string || "", args[0].option);

        return bitOp(input, key, sub);
    }

    /**
     * Highlight SUB
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlight(pos, args) {
        return pos;
    }

    /**
     * Highlight SUB in reverse
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlightReverse(pos, args) {
        return pos;
    }

}

module.exports = SUB;
