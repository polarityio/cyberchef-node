/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
const Bombe = require("../../operations/Bombe.js")
const Colossus = require("../../operations/Colossus.js")
const Enigma = require("../../operations/Enigma.js")
const Lorenz = require("../../operations/Lorenz.js")
const MultipleBombe = require("../../operations/MultipleBombe.js")
const SIGABA = require("../../operations/SIGABA.js")
const Typex = require("../../operations/Typex.js")

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Bletchley = {
    "Bombe": Bombe,
    "Colossus": Colossus,
    "Enigma": Enigma,
    "Lorenz": Lorenz,
    "Multiple Bombe": MultipleBombe,
    "SIGABA": SIGABA,
    "Typex": Typex,
};

module.exports = OpModules;