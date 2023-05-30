/**
 * @author Ge0rg3 [georgeomnet+cyberchef@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const OperationError = require("../errors/OperationError.js");
const { isImage } = require("../lib/FileType.js");
const jimp = require("jimp");

const {RGBA_DELIM_OPTIONS} = require("../lib/Delim.js");

/**
 * Extract RGBA operation
 */
class ExtractRGBA extends Operation {

    /**
     * ExtractRGBA constructor
     */
    constructor() {
        super();

        this.name = "Extract RGBA";
        this.module = "Image";
        this.description = "Extracts each pixel's RGBA value in an image. These are sometimes used in Steganography to hide text or data.";
        this.infoURL = "https://wikipedia.org/wiki/RGBA_color_space";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [
            {
                name: "Delimiter",
                type: "editableOption",
                value: RGBA_DELIM_OPTIONS
            },
            {
                name: "Include Alpha",
                type: "boolean",
                value: true
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    async run(input, args) {
        if (!isImage(input)) throw new OperationError("Please enter a valid image file.");

        const delimiter = args[0],
            includeAlpha = args[1],
            parsedImage = await jimp.read(input);

        let bitmap = parsedImage.bitmap.data;
        bitmap = includeAlpha ? bitmap : bitmap.filter((val, idx) => idx % 4 !== 3);

        return bitmap.join(delimiter);
    }

}

module.exports = ExtractRGBA;
