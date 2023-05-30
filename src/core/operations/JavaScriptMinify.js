/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const OperationError = require(""../errors/OperationError.mjs"");
const Operation = require(""../Operation.mjs"");
const * as terser = require(""terser"");

/**
 * JavaScript Minify operation
 */
class JavaScriptMinify extends Operation {

    /**
     * JavaScriptMinify constructor
     */
    constructor() {
        super();

        this.name = "JavaScript Minify";
        this.module = "Code";
        this.description = "Compresses JavaScript code.";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    async run(input, args) {
        const result = await terser.minify(input);
        if (result.error) {
            throw new OperationError(`Error minifying JavaScript. (${result.error})`);
        }
        return result.code;
    }

}

module.exports = JavaScriptMinify;
