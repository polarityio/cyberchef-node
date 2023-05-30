/**
 * @author gchq77703 []
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */
const Operation = require("../Operation.js");
const jwt = require("jsonwebtoken");
const OperationError = require("../errors/OperationError.js");
const {JWT_ALGORITHMS} = require("../lib/JWT.js");


/**
 * JWT Sign operation
 */
class JWTSign extends Operation {

    /**
     * JWTSign constructor
     */
    constructor() {
        super();

        this.name = "JWT Sign";
        this.module = "Crypto";
        this.description = "Signs a JSON object as a JSON Web Token using a provided secret / private key.<br><br>The key should be either the secret for HMAC algorithms or the PEM-encoded private key for RSA and ECDSA.";
        this.infoURL = "https://wikipedia.org/wiki/JSON_Web_Token";
        this.inputType = "JSON";
        this.outputType = "string";
        this.args = [
            {
                name: "Private/Secret Key",
                type: "text",
                value: "secret"
            },
            {
                name: "Signing algorithm",
                type: "option",
                value: JWT_ALGORITHMS
            }
        ];
    }

    /**
     * @param {JSON} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const [key, algorithm] = args;

        try {
            return jwt.sign(input, key, {
                algorithm: algorithm === "None" ? "none" : algorithm
            });
        } catch (err) {
            throw new OperationError(`Error: Have you entered the key correctly? The key should be either the secret for HMAC algorithms or the PEM-encoded private key for RSA and ECDSA.

${err}`);
        }
    }

}

module.exports = JWTSign;
