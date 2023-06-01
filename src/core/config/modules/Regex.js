/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
const ExtractDates = require("../../operations/ExtractDates.js")
const ExtractDomains = require("../../operations/ExtractDomains.js")
const ExtractEmailAddresses = require("../../operations/ExtractEmailAddresses.js")
const ExtractFilePaths = require("../../operations/ExtractFilePaths.js")
const ExtractIPAddresses = require("../../operations/ExtractIPAddresses.js")
const ExtractMACAddresses = require("../../operations/ExtractMACAddresses.js")
const ExtractURLs = require("../../operations/ExtractURLs.js")
const Filter = require("../../operations/Filter.js")
const FindReplace = require("../../operations/FindReplace.js")
const Register = require("../../operations/Register.js")
const RegularExpression = require("../../operations/RegularExpression.js")
const Strings = require("../../operations/Strings.js")

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Regex = {
    "Extract dates": ExtractDates,
    "Extract domains": ExtractDomains,
    "Extract email addresses": ExtractEmailAddresses,
    "Extract file paths": ExtractFilePaths,
    "Extract IP addresses": ExtractIPAddresses,
    "Extract MAC addresses": ExtractMACAddresses,
    "Extract URLs": ExtractURLs,
    "Filter": Filter,
    "Find / Replace": FindReplace,
    "Register": Register,
    "Regular expression": RegularExpression,
    "Strings": Strings,
};

module.exports = OpModules;