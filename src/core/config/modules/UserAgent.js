/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
const ParseUserAgent = require("../../operations/ParseUserAgent.js")

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.UserAgent = {
    "Parse User Agent": ParseUserAgent,
};

module.exports = OpModules;
