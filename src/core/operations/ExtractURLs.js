/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const { search, URL_REGEX } = require("../lib/Extract.js");
const { caseInsensitiveSort } = require("../lib/Sort.js");

/**
 * Extract URLs operation
 */
class ExtractURLs extends Operation {

    /**
     * ExtractURLs constructor
     */
    constructor() {
        super();

        this.name = "Extract URLs";
        this.module = "Regex";
        this.description = "Extracts Uniform Resource Locators (URLs) from the input. The protocol (http, ftp etc.) is required otherwise there will be far too many false positives.";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                name: "Display total",
                type: "boolean",
                value: false
            },
            {
                name: "Sort",
                type: "boolean",
                value: false
            },
            {
                name: "Unique",
                type: "boolean",
                value: false
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const [displayTotal, sort, unique] = args;
        const results = search(
            input,
            URL_REGEX,
            null,
            sort ? caseInsensitiveSort : null,
            unique
        );

        if (displayTotal) {
            return `Total found: ${results.length}\n\n${results.join("\n")}`;
        } else {
            return results.join("\n");
        }
    }

}

module.exports = ExtractURLs;
