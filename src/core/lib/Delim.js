/**
 * Various delimiters
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

/**
 * Generic sequence delimiters.
 */
const DELIM_OPTIONS = ["Space", "Comma", "Semi-colon", "Colon", "Line feed", "CRLF"];
exports.DELIM_OPTIONS = DELIM_OPTIONS;

/**
 * Binary sequence delimiters.
 */
const BIN_DELIM_OPTIONS = ["Space", "Comma", "Semi-colon", "Colon", "Line feed", "CRLF", "None"];
exports.BIN_DELIM_OPTIONS = BIN_DELIM_OPTIONS;

/**
 * Letter sequence delimiters.
 */
const LETTER_DELIM_OPTIONS = ["Space", "Line feed", "CRLF", "Forward slash", "Backslash", "Comma", "Semi-colon", "Colon"];
exports.LETTER_DELIM_OPTIONS = LETTER_DELIM_OPTIONS;

/**
 * Word sequence delimiters.
 */
const WORD_DELIM_OPTIONS = ["Line feed", "CRLF", "Forward slash", "Backslash", "Comma", "Semi-colon", "Colon"];
exports.WORD_DELIM_OPTIONS = WORD_DELIM_OPTIONS;

/**
 * Input sequence delimiters.
 */
const INPUT_DELIM_OPTIONS = ["Line feed", "CRLF", "Space", "Comma", "Semi-colon", "Colon", "Nothing (separate chars)"];
exports.INPUT_DELIM_OPTIONS = INPUT_DELIM_OPTIONS;

/**
 * Arithmetic sequence delimiters
 */
const ARITHMETIC_DELIM_OPTIONS = ["Line feed", "Space", "Comma", "Semi-colon", "Colon", "CRLF"];
exports.ARITHMETIC_DELIM_OPTIONS = ARITHMETIC_DELIM_OPTIONS;

/**
 * Hash delimiters
 */
const HASH_DELIM_OPTIONS = ["Line feed", "CRLF", "Space", "Comma"];
exports.HASH_DELIM_OPTIONS = HASH_DELIM_OPTIONS;

/**
 * IP delimiters
 */
const IP_DELIM_OPTIONS = ["Line feed", "CRLF", "Space", "Comma", "Semi-colon"];
exports.IP_DELIM_OPTIONS = IP_DELIM_OPTIONS;

/**
 * Split delimiters.
 */
const SPLIT_DELIM_OPTIONS = [
    {name: "Comma", value: ","},
    {name: "Space", value: " "},
    {name: "Line feed", value: "\\n"},
    {name: "CRLF", value: "\\r\\n"},
    {name: "Semi-colon", value: ";"},
    {name: "Colon", value: ":"},
    {name: "Nothing (separate chars)", value: ""}
];
exports.SPLIT_DELIM_OPTIONS = SPLIT_DELIM_OPTIONS;


/**
 * Join delimiters.
 */
const JOIN_DELIM_OPTIONS = [
    {name: "Line feed", value: "\\n"},
    {name: "CRLF", value: "\\r\\n"},
    {name: "Space", value: " "},
    {name: "Comma", value: ","},
    {name: "Semi-colon", value: ";"},
    {name: "Colon", value: ":"},
    {name: "Nothing (join chars)", value: ""}
];
exports.JOIN_DELIM_OPTIONS = JOIN_DELIM_OPTIONS;

/**
 * RGBA list delimiters.
 */
const RGBA_DELIM_OPTIONS = [
    {name: "Comma", value: ","},
    {name: "Space", value: " "},
    {name: "CRLF", value: "\\r\\n"},
    {name: "Line Feed", value: "\n"}
];
exports.RGBA_DELIM_OPTIONS = RGBA_DELIM_OPTIONS;
