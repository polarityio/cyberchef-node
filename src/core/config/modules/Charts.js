/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
const Entropy = require("../../operations/Entropy.js")
const HeatmapChart = require("../../operations/HeatmapChart.js")
const HexDensityChart = require("../../operations/HexDensityChart.js")
const ScatterChart = require("../../operations/ScatterChart.js")
const SeriesChart = require("../../operations/SeriesChart.js")

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Charts = {
    "Entropy": Entropy,
    "Heatmap chart": HeatmapChart,
    "Hex Density chart": HexDensityChart,
    "Scatter chart": ScatterChart,
    "Series chart": SeriesChart,
};

module.exports = OpModules;
