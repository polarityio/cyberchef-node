/**
 * Operations to exclude from the Node API
 *
 * @author d98762656 [d98762625@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */
module.exports = [
    // This functionality can be done more easily using JavaScript
    "Fork",
    "Merge",
    "Jump",
    "ConditionalJump",
    "Label",
    "Comment",

    // esprima doesn't work in .js
    "JavaScriptBeautify",
    "JavaScriptMinify",
    "JavaScriptParser",

    // Irrelevant in Node console
    "SyntaxHighlighter",
];