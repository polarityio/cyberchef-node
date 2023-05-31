/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
const GeneratePGPKeyPair = require("../../operations/GeneratePGPKeyPair.js")
const PGPDecrypt = require("../../operations/PGPDecrypt.js")
const PGPDecryptAndVerify = require("../../operations/PGPDecryptAndVerify.js")
const PGPEncrypt = require("../../operations/PGPEncrypt.js")
const PGPEncryptAndSign = require("../../operations/PGPEncryptAndSign.js")
const PGPVerify = require("../../operations/PGPVerify.js")

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.PGP = {
    "Generate PGP Key Pair": GeneratePGPKeyPair,
    "PGP Decrypt": PGPDecrypt,
    "PGP Decrypt and Verify": PGPDecryptAndVerify,
    "PGP Encrypt": PGPEncrypt,
    "PGP Encrypt and Sign": PGPEncryptAndSign,
    "PGP Verify": PGPVerify,
};

module.exports = OpModules;
