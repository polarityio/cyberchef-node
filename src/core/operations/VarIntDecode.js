/**
 * @author GCHQ Contributor [3]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const Operation = require("../Operation.js");
const OperationError = require("../errors/OperationError.js");
const Protobuf = require("../lib/Protobuf.js");

/**
 * VarInt Decode operation
 */
class VarIntDecode extends Operation {

    /**
     * VarIntDecode constructor
     */
    constructor() {
        super();

        this.name = "VarInt Decode";
        this.module = "Default";
        this.description = "Decodes a VarInt encoded integer. VarInt is an efficient way of encoding variable length integers and is commonly used with Protobuf.";
        this.infoURL = "https://developers.google.com/protocol-buffers/docs/encoding#varints";
        this.inputType = "byteArray";
        this.outputType = "number";
        this.args = [];
    }

    /**
     * @param {byteArray} input
     * @param {Object[]} args
     * @returns {number}
     */
    run(input, args) {
        try {
            return Protobuf.varIntDecode(input);
        } catch (err) {
            throw new OperationError(err);
        }
    }

}

module.exports = VarIntDecode;
