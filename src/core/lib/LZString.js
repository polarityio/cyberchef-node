/**
 * lz-string exports.
 *
 * @author crespyl [peter@crespyl.net]
 * @copyright Peter Jacobs 2021
 * @license Apache-2.0
 */

const LZString = require("lz-string");

const COMPRESSION_OUTPUT_FORMATS = ["default", "UTF16", "Base64"];
exports.COMPRESSION_OUTPUT_FORMATS = COMPRESSION_OUTPUT_FORMATS;
const COMPRESSION_FUNCTIONS = {
    "default": LZString.compress,
    "UTF16":   LZString.compressToUTF16,
    "Base64":  LZString.compressToBase64,
};
exports.COMPRESSION_FUNCTIONS = COMPRESSION_FUNCTIONS;
const DECOMPRESSION_FUNCTIONS = {
    "default": LZString.decompress,
    "UTF16":   LZString.decompressFromUTF16,
    "Base64":  LZString.decompressFromBase64,
};
exports.DECOMPRESSION_FUNCTIONS = DECOMPRESSION_FUNCTIONS;
