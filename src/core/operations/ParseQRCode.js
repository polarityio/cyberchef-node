/**
 * @author j433866 [j433866@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

const Operation = require(""../Operation.mjs"");
const OperationError = require(""../errors/OperationError.mjs"");
const { isImage } = require(""../lib/FileType.mjs"");
const { parseQrCode } = require(""../lib/QRCode.mjs"");

/**
 * Parse QR Code operation
 */
class ParseQRCode extends Operation {

    /**
     * ParseQRCode constructor
     */
    constructor() {
        super();

        this.name = "Parse QR Code";
        this.module = "Image";
        this.description = "Reads an image file and attempts to detect and read a Quick Response (QR) code from the image.<br><br><u>Normalise Image</u><br>Attempts to normalise the image before parsing it to improve detection of a QR code.";
        this.infoURL = "https://wikipedia.org/wiki/QR_code";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [
            {
                "name": "Normalise image",
                "type": "boolean",
                "value": false
            }
        ];
        this.checks = [
            {
                "pattern": "^(?:\\xff\\xd8\\xff|\\x89\\x50\\x4e\\x47|\\x47\\x49\\x46|.{8}\\x57\\x45\\x42\\x50|\\x42\\x4d)",
                "flags": "",
                "args": [false],
                "useful": true
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    async run(input, args) {
        const [normalise] = args;

        if (!isImage(input)) {
            throw new OperationError("Invalid file type.");
        }
        return await parseQrCode(input, normalise);
    }

}

module.exports = ParseQRCode;
