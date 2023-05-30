/**
 * @author crespyl [peter@crespyl.net]
 * @copyright Peter Jacobs 2021
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const OperationError = require("../errors/OperationError.js");

const {COMPRESSION_OUTPUT_FORMATS, DECOMPRESSION_FUNCTIONS} = require("../lib/LZString.js");

/**
 * LZString Decompress operation
 */
class LZStringDecompress extends Operation {

    /**
     * LZStringDecompress constructor
     */
    constructor() {
        super();

        this.name = "LZString Decompress";
        this.module = "Compression";
        this.description = "Decompresses data that was compressed with lz-string.";
        this.infoURL = "https://pieroxy.net/blog/pages/lz-string/index.html";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                name: "Compression Format",
                type: "option",
                defaultIndex: 0,
                value: COMPRESSION_OUTPUT_FORMATS
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const decompress = DECOMPRESSION_FUNCTIONS[args[0]];
        if (decompress) {
            return decompress(input);
        } else {
            throw new OperationError("Unable to find decompression function");
        }
    }


}

module.exports = LZStringDecompress;
