/**
 * @author tlwr [toby@toby.codes]
 * @author Matt C [me@mitt.dev]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const OperationError = require("../errors/OperationError.js");
const { Utils } = require("../Utils.js");

/**
 * @constant
 * @default
 */
const RECORD_DELIMITER_OPTIONS = ["Line feed", "CRLF"];
exports.RECORD_DELIMITER_OPTIONS = RECORD_DELIMITER_OPTIONS;


/**
 * @constant
 * @default
 */
const FIELD_DELIMITER_OPTIONS = ["Space", "Comma", "Semi-colon", "Colon", "Tab"];
exports.FIELD_DELIMITER_OPTIONS = FIELD_DELIMITER_OPTIONS;


/**
 * Default from colour
 *
 * @constant
 * @default
 */
const COLOURS = {
    min: "white",
    max: "black"
};
exports.COLOURS = COLOURS;


/**
 * Gets values from input for a plot.
 *
 * @param {string} input
 * @param {string} recordDelimiter
 * @param {string} fieldDelimiter
 * @param {boolean} columnHeadingsAreIncluded - whether we should skip the first record
 * @param {number} length
 * @returns {Object[]}
 */
function getValues(input, recordDelimiter, fieldDelimiter, columnHeadingsAreIncluded, length) {
    let headings;
    const values = [];

    input
        .split(recordDelimiter)
        .forEach((row, rowIndex) => {
            const split = row.split(fieldDelimiter);
            if (split.length !== length) throw new OperationError(`Each row must have length ${length}.`);

            if (columnHeadingsAreIncluded && rowIndex === 0) {
                headings = split;
            } else {
                values.push(split);
            }
        });
    return { headings, values };
};
exports.getValues = getValues;


/**
 * Gets values from input for a scatter plot.
 *
 * @param {string} input
 * @param {string} recordDelimiter
 * @param {string} fieldDelimiter
 * @param {boolean} columnHeadingsAreIncluded - whether we should skip the first record
 * @returns {Object[]}
 */
function getScatterValues(input, recordDelimiter, fieldDelimiter, columnHeadingsAreIncluded) {
    let { headings, values } = getValues(
        input,
        recordDelimiter,
        fieldDelimiter,
        columnHeadingsAreIncluded,
        2
    );

    if (headings) {
        headings = {x: headings[0], y: headings[1]};
    }

    values = values.map(row => {
        const x = parseFloat(row[0]),
            y = parseFloat(row[1]);

        if (Number.isNaN(x)) throw new OperationError("Values must be numbers in base 10.");
        if (Number.isNaN(y)) throw new OperationError("Values must be numbers in base 10.");

        return [x, y];
    });

    return { headings, values };
};
exports.getScatterValues = getScatterValues;


/**
 * Gets values from input for a scatter plot with colour from the third column.
 *
 * @param {string} input
 * @param {string} recordDelimiter
 * @param {string} fieldDelimiter
 * @param {boolean} columnHeadingsAreIncluded - whether we should skip the first record
 * @returns {Object[]}
 */
function getScatterValuesWithColour(input, recordDelimiter, fieldDelimiter, columnHeadingsAreIncluded) {
    let { headings, values } = getValues(
        input,
        recordDelimiter, fieldDelimiter,
        columnHeadingsAreIncluded,
        3
    );

    if (headings) {
        headings = {x: headings[0], y: headings[1]};
    }

    values = values.map(row => {
        const x = parseFloat(row[0]),
            y = parseFloat(row[1]),
            colour = row[2];

        if (Number.isNaN(x)) throw new OperationError("Values must be numbers in base 10.");
        if (Number.isNaN(y)) throw new OperationError("Values must be numbers in base 10.");

        return [x, y, Utils.escapeHtml(colour)];
    });

    return { headings, values };
};
exports.getScatterValuesWithColour = getScatterValuesWithColour;

/**
 * Gets values from input for a time series plot.
 *
 * @param {string} input
 * @param {string} recordDelimiter
 * @param {string} fieldDelimiter
 * @param {boolean} columnHeadingsAreIncluded - whether we should skip the first record
 * @returns {Object[]}
 */
function getSeriesValues(input, recordDelimiter, fieldDelimiter, columnHeadingsAreIncluded) {
    const { values } = getValues(
        input,
        recordDelimiter, fieldDelimiter,
        false,
        3
    );

    let xValues = new Set();
    const series = {};

    values.forEach(row => {
        const serie = row[0],
            xVal = row[1],
            val = parseFloat(row[2]);

        if (Number.isNaN(val)) throw new OperationError("Values must be numbers in base 10.");

        xValues.add(xVal);
        if (typeof series[serie] === "undefined") series[serie] = {};
        series[serie][xVal] = val;
    });

    xValues = new Array(...xValues);

    const seriesList = [];
    for (const seriesName in series) {
        const serie = series[seriesName];
        seriesList.push({name: seriesName, data: serie});
    }

    return { xValues, series: seriesList };
};
exports.getSeriesValues = getSeriesValues;
