/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const { Utils } = require("../Utils.js");
const {INPUT_DELIM_OPTIONS} = require("../lib/Delim.js");

/**
 * Head operation
 */
class Head extends Operation {

    /**
     * Head constructor
     */
    constructor() {
        super();

        this.name = "Head";
        this.module = "Default";
        this.description = "Like the UNIX head utility.<br>Gets the first n lines.<br>You can select all but the last n lines by entering a negative value for n.<br>The delimiter can be changed so that instead of lines, fields (i.e. commas) are selected instead.";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                "name": "Delimiter",
                "type": "option",
                "value": INPUT_DELIM_OPTIONS
            },
            {
                "name": "Number",
                "type": "number",
                "value": 10
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        let delimiter = args[0];
        const number = args[1];

        delimiter = Utils.charRep(delimiter);
        const splitInput = input.split(delimiter);

        return splitInput
            .filter((line, lineIndex) => {
                lineIndex += 1;

                if (number < 0) {
                    return lineIndex <= splitInput.length + number;
                } else {
                    return lineIndex <= number;
                }
            })
            .join(delimiter);
    }

}

module.exports = Head;
