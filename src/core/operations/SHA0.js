/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const {runHash} = require("../lib/Hash.js");

/**
 * SHA0 operation
 */
class SHA0 extends Operation {

    /**
     * SHA0 constructor
     */
    constructor() {
        super();

        this.name = "SHA0";
        this.module = "Crypto";
        this.description = "SHA-0 is a retronym applied to the original version of the 160-bit hash function published in 1993 under the name 'SHA'. It was withdrawn shortly after publication due to an undisclosed 'significant flaw' and replaced by the slightly revised version SHA-1. The message digest algorithm consists, by default, of 80 rounds.";
        this.infoURL = "https://wikipedia.org/wiki/SHA-1#SHA-0";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [
            {
                name: "Rounds",
                type: "number",
                value: 80,
                min: 16
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    async run(input, args) {
        return await runHash("sha0", input, {rounds: args[0]});
    }

}

module.exports = SHA0;
