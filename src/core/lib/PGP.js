/**
 * PGP functions.
 *
 * @author tlwr [toby@toby.codes]
 * @author Matt C [matt@artemisbot.uk]
 * @author n1474335 [n1474335@gmail.com]
 *
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 *
 */

const OperationError = require("../errors/OperationError.js");
const { isWorkerEnvironment } = require("../Utils.js");
const kbpgp = require("kbpgp");
const { promisify } = require("util");

/**
 * Progress callback
 */
const ASP = kbpgp.ASP({
    progress_hook: (info) => {
        let msg = "";

        switch (info.what) {
            case "guess":
                msg = "Guessing a prime";
                break;
            case "fermat":
                msg = "Factoring prime using Fermat's factorization method";
                break;
            case "mr":
                msg = "Performing Miller-Rabin primality test";
                break;
            case "passed_mr":
                msg = "Passed Miller-Rabin primality test";
                break;
            case "failed_mr":
                msg = "Failed Miller-Rabin primality test";
                break;
            case "found":
                msg = "Prime found";
                break;
            default:
                msg = `Stage: ${info.what}`;
        }
    },
});

exports.ASP = ASP;

/**
 * Get size of subkey
 *
 * @param {number} keySize
 * @returns {number}
 */
function getSubkeySize(keySize) {
    return {
        1024: 1024,
        2048: 1024,
        4096: 2048,
        256: 256,
        384: 256,
    }[keySize];
}
exports.getSubkeySize = getSubkeySize;

/**
 * Import private key and unlock if necessary
 *
 * @param {string} privateKey
 * @param {string} [passphrase]
 * @returns {Object}
 */
async function importPrivateKey(privateKey, passphrase) {
    try {
        const key = await promisify(kbpgp.KeyManager.import_from_armored_pgp)({
            armored: privateKey,
            opts: {
                no_check_keys: true,
            },
        });
        if (key.is_pgp_locked()) {
            if (passphrase) {
                await promisify(key.unlock_pgp.bind(key))({
                    passphrase,
                });
            } else {
                throw new OperationError(
                    "Did not provide passphrase with locked private key."
                );
            }
        }
        return key;
    } catch (err) {
        throw new OperationError(`Could not import private key: ${err}`);
    }
}
exports.importPrivateKey = importPrivateKey;

/**
 * Import public key
 *
 * @param {string} publicKey
 * @returns {Object}
 */
async function importPublicKey(publicKey) {
    try {
        const key = await promisify(kbpgp.KeyManager.import_from_armored_pgp)({
            armored: publicKey,
            opts: {
                no_check_keys: true,
            },
        });
        return key;
    } catch (err) {
        const parseErrorToReadableJson = (error) =>
            JSON.parse(
                JSON.stringify(error, Object.getOwnPropertyNames(error))
            );
        console.log(parseErrorToReadableJson(err));
        throw new OperationError(`Could not import public key: ${err}`);
    }
}
exports.importPublicKey = importPublicKey;
