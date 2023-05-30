/**
 * @author GCHQ Contributor [3]
 * @copyright Crown Copyright 2021
 * @license Apache-2.0
 */

const Operation = require("../Operation.mjs");
const OperationError = require("../errors/OperationError.mjs");
const Protobuf = require("../lib/Protobuf.mjs");

/**
 * Protobuf Encode operation
 */
class ProtobufEncode extends Operation {

    /**
     * ProtobufEncode constructor
     */
    constructor() {
        super();

        this.name = "Protobuf Encode";
        this.module = "Protobuf";
        this.description = "Encodes a valid JSON object into a protobuf byte array using the input .proto schema.";
        this.infoURL = "https://developers.google.com/protocol-buffers/docs/encoding";
        this.inputType = "JSON";
        this.outputType = "ArrayBuffer";
        this.args = [
            {
                name: "Schema (.proto text)",
                type: "text",
                value: "",
                rows: 8,
                hint: "Drag and drop is enabled on this ingredient"
            }
        ];
    }

    /**
     * @param {Object} input
     * @param {Object[]} args
     * @returns {ArrayBuffer}
     */
    run(input, args) {
        try {
            return Protobuf.encode(input, args);
        } catch (error) {
            throw new OperationError(error);
        }
    }

}

module.exports = ProtobufEncode;
