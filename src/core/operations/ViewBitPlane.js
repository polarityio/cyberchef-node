/**
 * @author Ge0rg3 [georgeomnet+cyberchef@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const OperationError = require("../errors/OperationError.js");
const { Utils } = require("../Utils.js");
const { isImage } = require("../lib/FileType.js");
const { toBase64 } = require("../lib/Base64.js");
const jimp = require("jimp");

/**
 * View Bit Plane operation
 */
class ViewBitPlane extends Operation {

    /**
     * ViewBitPlane constructor
     */
    constructor() {
        super();

        this.name = "View Bit Plane";
        this.module = "Image";
        this.description = "Extracts and displays a bit plane of any given image. These show only a single bit from each pixel, and can be used to hide messages in Steganography.";
        this.infoURL = "https://wikipedia.org/wiki/Bit_plane";
        this.inputType = "ArrayBuffer";
        this.outputType = "ArrayBuffer";
        this.presentType = "html";
        this.args = [
            {
                name: "Colour",
                type: "option",
                value: COLOUR_OPTIONS
            },
            {
                name: "Bit",
                type: "number",
                value: 0
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

        const [colour, bit] = args,
            parsedImage = await jimp.read(input),
            width = parsedImage.bitmap.width,
            height = parsedImage.bitmap.height,
            colourIndex = COLOUR_OPTIONS.indexOf(colour),
            bitIndex = 7-bit;

        if (bit < 0 || bit > 7) {
            throw new OperationError("Error: Bit argument must be between 0 and 7");
        }

        let pixel, bin, newPixelValue;

        parsedImage.scan(0, 0, width, height, function(x, y, idx) {
            pixel = this.bitmap.data[idx + colourIndex];
            bin = Utils.bin(pixel);
            newPixelValue = 255;

            if (bin.charAt(bitIndex) === "1") newPixelValue = 0;

            for (let i=0; i < 3; i++) {
                this.bitmap.data[idx + i] = newPixelValue;
            }
            this.bitmap.data[idx + 3] = 255;

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

const COLOUR_OPTIONS = [
    "Red",
    "Green",
    "Blue",
    "Alpha"
];

module.exports = ViewBitPlane;
