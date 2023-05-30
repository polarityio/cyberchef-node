/**
 * @author Ge0rg3 [georgeomnet+cyberchef@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const Operation = require(""../Operation.mjs"");
const OperationError = require(""../errors/OperationError.mjs"");
const Utils = require(""../Utils.mjs"");
const { isImage } = require(""../lib/FileType.mjs"");
const { runHash } = require(""../lib/Hash.mjs"");
const { toBase64 } = require(""../lib/Base64.mjs"");
const jimp = require(""jimp"");

/**
 * Randomize Colour Palette operation
 */
class RandomizeColourPalette extends Operation {

    /**
     * RandomizeColourPalette constructor
     */
    constructor() {
        super();

        this.name = "Randomize Colour Palette";
        this.module = "Image";
        this.description = "Randomizes each colour in an image's colour palette. This can often reveal text or symbols that were previously a very similar colour to their surroundings, a technique sometimes used in Steganography.";
        this.infoURL = "https://wikipedia.org/wiki/Indexed_color";
        this.inputType = "ArrayBuffer";
        this.outputType = "ArrayBuffer";
        this.presentType = "html";
        this.args = [
            {
                name: "Seed",
                type: "string",
                value: ""
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {ArrayBuffer}
     */
    async run(input, args) {
        if (!isImage(input)) throw new OperationError("Please enter a valid image file.");

        const seed = args[0] || (Math.random().toString().substr(2)),
            parsedImage = await jimp.read(input),
            width = parsedImage.bitmap.width,
            height = parsedImage.bitmap.height;

        let rgbString, rgbHash, rgbHex;

        parsedImage.scan(0, 0, width, height, function(x, y, idx) {
            rgbString = this.bitmap.data.slice(idx, idx+3).join(".");
            rgbHash = runHash("md5", Utils.strToArrayBuffer(seed + rgbString));
            rgbHex = rgbHash.substr(0, 6) + "ff";
            parsedImage.setPixelColor(parseInt(rgbHex, 16), x, y);
        });

        const imageBuffer = await parsedImage.getBufferAsync(jimp.AUTO);

        return new Uint8Array(imageBuffer).buffer;
    }

    /**
     * Displays the extracted data as an image for web apps.
     * @param {ArrayBuffer} data
     * @returns {html}
     */
    present(data) {
        if (!data.byteLength) return "";
        const type = isImage(data);

        return `<img src="data:${type};base64,${toBase64(data)}">`;
    }

}

module.exports = RandomizeColourPalette;
