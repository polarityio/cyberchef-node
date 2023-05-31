/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
const AMFDecode = require("../../operations/AMFDecode.js")
const AMFEncode = require("../../operations/AMFEncode.js")
const CitrixCTX1Decode = require("../../operations/CitrixCTX1Decode.js")
const CitrixCTX1Encode = require("../../operations/CitrixCTX1Encode.js")
const DecodeText = require("../../operations/DecodeText.js")
const EncodeText = require("../../operations/EncodeText.js")
const FromHTMLEntity = require("../../operations/FromHTMLEntity.js")
const FromPunycode = require("../../operations/FromPunycode.js")
const NormaliseUnicode = require("../../operations/NormaliseUnicode.js")
const TextEncodingBruteForce = require("../../operations/TextEncodingBruteForce.js")
const ToHTMLEntity = require("../../operations/ToHTMLEntity.js")
const ToPunycode = require("../../operations/ToPunycode.js")

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Encodings = {
    "AMF Decode": AMFDecode,
    "AMF Encode": AMFEncode,
    "Citrix CTX1 Decode": CitrixCTX1Decode,
    "Citrix CTX1 Encode": CitrixCTX1Encode,
    "Decode text": DecodeText,
    "Encode text": EncodeText,
    "From HTML Entity": FromHTMLEntity,
    "From Punycode": FromPunycode,
    "Normalise Unicode": NormaliseUnicode,
    "Text Encoding Brute Force": TextEncodingBruteForce,
    "To HTML Entity": ToHTMLEntity,
    "To Punycode": ToPunycode,
};

module.exports = OpModules;
