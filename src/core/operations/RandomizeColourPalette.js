/**
 * @author Ge0rg3 [georgeomnet+cyberchef@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const OperationError = require("../errors/OperationError.js");
const { Utils } = require("../Utils.js");
const { isImage } = require("../lib/FileType.js");
const { runHash } = require("../lib/Hash.js");
const { toBase64 } = require("../lib/Base64.js");
const jimp = require("jimp");

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
        this.description =
            "Randomizes each colour in an image's colour palette. This can often reveal text or symbols that were previously a very similar colour to their surroundings, a technique sometimes used in Steganography.";
        this.infoURL = "https://wikipedia.org/wiki/Indexed_color";
        this.inputType = "ArrayBuffer";
        this.outputType = "ArrayBuffer";
        this.presentType = "html";
        this.args = [
            {
                name: "Seed",
                type: "string",
                value: "",
            },
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {ArrayBuffer}
     */
    async run(input, args) {
        if (!isImage(input))
            throw new OperationError("Please enter a valid image file.");

        const seed = args[0] || Math.random().toString().substr(2),
            parsedImage = await jimp.read(input),
            width = parsedImage.bitmap.width,
            height = parsedImage.bitmap.height;

        const parsedImageScan = async (x, y, w, h) =>
            new Promise((resolve, reject) => {
                parsedImage.scan(x, y, w, h, function (x, y, idx) {
                    resolve({ x, y, idx, bitmap: this.bitmap });
                });
            });
        const { x, y, idx, bitmap } = await parsedImageScan(
            0,
            0,
            width,
            height
        );
        const rgbString = bitmap.data.slice(idx, idx + 3).join(".");
        const rgbHash = await runHash(
            "md5",
            Utils.strToArrayBuffer(seed + rgbString)
        );
        const rgbHex = rgbHash.substr(0, 6) + "ff";
        parsedImage.setPixelColor(parseInt(rgbHex, 16), x, y);

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
