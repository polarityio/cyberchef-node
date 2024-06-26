/**
 * Zlib exports.
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const zlibAndGzip = require("zlibjs/bin/zlib_and_gzip.min.js");

const Zlib = zlibAndGzip.Zlib;

const COMPRESSION_TYPE = ["Dynamic Huffman Coding", "Fixed Huffman Coding", "None (Store)"];
exports.COMPRESSION_TYPE = COMPRESSION_TYPE;
const INFLATE_BUFFER_TYPE = ["Adaptive", "Block"];
exports.INFLATE_BUFFER_TYPE = INFLATE_BUFFER_TYPE;
const ZLIB_COMPRESSION_TYPE_LOOKUP = {
    "Fixed Huffman Coding":   Zlib.Deflate.CompressionType.FIXED,
    "Dynamic Huffman Coding": Zlib.Deflate.CompressionType.DYNAMIC,
    "None (Store)":           Zlib.Deflate.CompressionType.NONE,
};
exports.ZLIB_COMPRESSION_TYPE_LOOKUP = ZLIB_COMPRESSION_TYPE_LOOKUP;
