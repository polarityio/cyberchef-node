/**
 * @author j433866 [j433866@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const OperationError = require("../errors/OperationError.js");
const { isImage } = require("../lib/FileType.js");
const { toBase64 } = require("../lib/Base64.js");
const { isWorkerEnvironment } = require("../Utils.js");
const jimp = require("jimp");

/**
 * Image Brightness / Contrast operation
 */
class ImageBrightnessContrast extends Operation {

    /**
     * ImageBrightnessContrast constructor
     */
    constructor() {
        super();

        this.name = "Image Brightness / Contrast";
        this.module = "Image";
        this.description = "Adjust the brightness or contrast of an image.";
        this.infoURL = "";
        this.inputType = "ArrayBuffer";
        this.outputType = "ArrayBuffer";
        this.presentType = "html";
        this.args = [
            {
                name: "Brightness",
                type: "number",
                value: 0,
                min: -100,
                max: 100
            },
            {
                name: "Contrast",
                type: "number",
                value: 0,
                min: -100,
                max: 100
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {byteArray}
     */
    async run(input, args) {
        const [brightness, contrast] = args;
        if (!isImage(input)) {
            throw new OperationError("Invalid file type.");
        }

        let image;
        try {
            image = await jimp.read(input);
        } catch (err) {
            throw new OperationError(`Error loading image. (${err})`);
        }
        try {
            if (brightness !== 0) {
                if (isWorkerEnvironment())
                    self.sendStatusMessage("Changing image brightness...");
                image.brightness(brightness / 100);
            }
            if (contrast !== 0) {
                if (isWorkerEnvironment())
                    self.sendStatusMessage("Changing image contrast...");
                image.contrast(contrast / 100);
            }

            let imageBuffer;
            if (image.getMIME() === "image/gif") {
                imageBuffer = await image.getBufferAsync(jimp.MIME_PNG);
            } else {
                imageBuffer = await image.getBufferAsync(jimp.AUTO);
            }
            return imageBuffer.buffer;
        } catch (err) {
            throw new OperationError(`Error adjusting image brightness or contrast. (${err})`);
        }
    }

    /**
     * Displays the image using HTML for web apps
     * @param {ArrayBuffer} data
     * @returns {html}
     */
    present(data) {
        if (!data.byteLength) return "";
        const dataArray = new Uint8Array(data);

        const type = isImage(dataArray);
        if (!type) {
            throw new OperationError("Invalid file type.");
        }

        return `<img src="data:${type};base64,${toBase64(dataArray)}">`;
    }

}

module.exports = ImageBrightnessContrast;
