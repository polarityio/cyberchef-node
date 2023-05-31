/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const {runHash} = require("../lib/Hash.js");

/**
 * MD5 operation
 */
class MD5 extends Operation {

    /**
     * MD5 constructor
     */
    constructor() {
        super();

        this.name = "MD5";
        this.module = "Crypto";
        this.description = "MD5 (Message-Digest 5) is a widely used hash function. It has been used in a variety of security applications and is also commonly used to check the integrity of files.<br><br>However, MD5 is not collision resistant and it isn't suitable for applications like SSL/TLS certificates or digital signatures that rely on this property.";
        this.infoURL = "https://wikipedia.org/wiki/MD5";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    async run(input, args) {
        return await runHash("md5", input);
    }

}

module.exports = MD5;
