/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require("../Operation.mjs");
const Utils = require("../Utils.mjs");
const {BIN_DELIM_OPTIONS} = require("../lib/Delim.mjs");
const {toBinary} = require("../lib/Binary.mjs");

/**
 * To Binary operation
 */
class ToBinary extends Operation {

    /**
     * ToBinary constructor
     */
    constructor() {
        super();

        this.name = "To Binary";
        this.module = "Default";
        this.description = "Displays the input data as a binary string.<br><br>e.g. <code>Hi</code> becomes <code>01001000 01101001</code>";
        this.infoURL = "https://wikipedia.org/wiki/Binary_code";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [
            {
                "name": "Delimiter",
                "type": "option",
                "value": BIN_DELIM_OPTIONS
            },
            {
                "name": "Byte Length",
                "type": "number",
                "value": 8
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        input = new Uint8Array(input);
        const padding = args[1] ? args[1] : 8;
        return toBinary(input, args[0], padding);
    }

    /**
     * Highlight To Binary
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlight(pos, args) {
        const delim = Utils.charRep(args[0] || "Space");
        pos[0].start = pos[0].start * (8 + delim.length);
        pos[0].end = pos[0].end * (8 + delim.length) - delim.length;
        return pos;
    }

    /**
     * Highlight To Binary in reverse
     *
     * @param {Object[]} pos
     * @param {number} pos[].start
     * @param {number} pos[].end
     * @param {Object[]} args
     * @returns {Object[]} pos
     */
    highlightReverse(pos, args) {
        const delim = Utils.charRep(args[0] || "Space");
        pos[0].start = pos[0].start === 0 ? 0 : Math.floor(pos[0].start / (8 + delim.length));
        pos[0].end = pos[0].end === 0 ? 0 : Math.ceil(pos[0].end / (8 + delim.length));
        return pos;
    }

}

module.exports = ToBinary;
