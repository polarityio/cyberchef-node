/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const cptable = require("codepage");
const {CHR_ENC_CODE_PAGES} = require("../lib/ChrEnc.js");

/**
 * Decode text operation
 */
class DecodeText extends Operation {

    /**
     * DecodeText constructor
     */
    constructor() {
        super();

        this.name = "Decode text";
        this.module = "Encodings";
        this.description = [
            "Decodes text from the chosen character encoding.",
            "<br><br>",
            "Supported charsets are:",
            "<ul>",
            Object.keys(CHR_ENC_CODE_PAGES).map(e => `<li>${e}</li>`).join("\n"),
            "</ul>",
        ].join("\n");
        this.infoURL = "https://wikipedia.org/wiki/Character_encoding";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [
            {
                "name": "Encoding",
                "type": "option",
                "value": Object.keys(CHR_ENC_CODE_PAGES)
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const format = CHR_ENC_CODE_PAGES[args[0]];
        return cptable.utils.decode(format, new Uint8Array(input));
    }

}

module.exports = DecodeText;
