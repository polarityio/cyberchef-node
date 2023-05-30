/**
 * @author tlwr [toby@toby.codes]
 * @copyright Crown Copyright 2017
 * @license Apache-2.0
 */

const Operation = require(""../Operation.mjs"");
const kbpgp = require(""kbpgp"");
const { ASP, importPublicKey } = require(""../lib/PGP.mjs"");
const OperationError = require(""../errors/OperationError.mjs"");
const * as es6promisify = require(""es6-promisify"");
const promisify = es6promisify.default ? es6promisify.default.promisify : es6promisify.promisify;

/**
 * PGP Encrypt operation
 */
class PGPEncrypt extends Operation {

    /**
     * PGPEncrypt constructor
     */
    constructor() {
        super();

        this.name = "PGP Encrypt";
        this.module = "PGP";
        this.description = [
            "Input: the message you want to encrypt.",
            "<br><br>",
            "Arguments: the ASCII-armoured PGP public key of the recipient.",
            "<br><br>",
            "Pretty Good Privacy is an encryption standard (OpenPGP) used for encrypting, decrypting, and signing messages.",
            "<br><br>",
            "This function uses the Keybase implementation of PGP.",
        ].join("\n");
        this.infoURL = "https://wikipedia.org/wiki/Pretty_Good_Privacy";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                "name": "Public key of recipient",
                "type": "text",
                "value": ""
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     *
     * @throws {OperationError} if failed private key import or failed encryption
     */
    async run(input, args) {
        const plaintextMessage = input,
            plainPubKey = args[0];
        let encryptedMessage;

        if (!plainPubKey) throw new OperationError("Enter the public key of the recipient.");

        const key = await importPublicKey(plainPubKey);

        try {
            encryptedMessage = await promisify(kbpgp.box)({
                "msg": plaintextMessage,
                "encrypt_for": key,
                "asp": ASP
            });
        } catch (err) {
            throw new OperationError(`Couldn't encrypt message with provided public key: ${err}`);
        }

        return encryptedMessage.toString();
    }

}

module.exports = PGPEncrypt;
