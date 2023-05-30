/**
 * @author bwhitn [brian.m.whitney@outlook.com]
 * @author d98762625 [d98762625@gmailcom]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

const Utils = require("../Utils.js");
const BigNumber = require("bignumber.js");


/**
 * Converts a string array to a number array.
 *
 * @param {string[]} input
 * @param {string} delim
 * @returns {BigNumber[]}
 */
function createNumArray(input, delim) {
    delim = Utils.charRep(delim || "Space");
    const splitNumbers = input.split(delim);
    const numbers = [];
    let num;

    splitNumbers.map((number) => {
        try {
            num = BigNumber(number.trim());
            if (!num.isNaN()) {
                numbers.push(num);
            }
        } catch (err) {
            // This line is not a valid number
        }
    });
    return numbers;
};
exports.createNumArray = createNumArray;


/**
 * Adds an array of numbers and returns the value.
 *
 * @param {BigNumber[]} data
 * @returns {BigNumber}
 */
function sum(data) {
    if (data.length > 0) {
        return data.reduce((acc, curr) => acc.plus(curr));
    }
};
exports.sum = sum;


/**
 * Subtracts an array of numbers and returns the value.
 *
 * @param {BigNumber[]} data
 * @returns {BigNumber}
 */
function sub(data) {
    if (data.length > 0) {
        return data.reduce((acc, curr) => acc.minus(curr));
    }
};
exports.sub = sub;


/**
 * Multiplies an array of numbers and returns the value.
 *
 * @param {BigNumber[]} data
 * @returns {BigNumber}
 */
function multi(data) {
    if (data.length > 0) {
        return data.reduce((acc, curr) => acc.times(curr));
    }
};
exports.multi = multi;


/**
 * Divides an array of numbers and returns the value.
 *
 * @param {BigNumber[]} data
 * @returns {BigNumber}
 */
function div(data) {
    if (data.length > 0) {
        return data.reduce((acc, curr) => acc.div(curr));
    }
};
exports.div = div;


/**
 * Computes mean of a number array and returns the value.
 *
 * @param {BigNumber[]} data
 * @returns {BigNumber}
 */
function mean(data) {
    if (data.length > 0) {
        return sum(data).div(data.length);
    }
};
exports.mean = mean;


/**
 * Computes median of a number array and returns the value.
 *
 * @param {BigNumber[]} data
 * @returns {BigNumber}
 */
function median(data) {
    if ((data.length % 2) === 0 && data.length > 0) {
        data.sort(function(a, b) {
            return a.minus(b);
        });
        const first = data[Math.floor(data.length / 2)];
        const second = data[Math.floor(data.length / 2) - 1];
        return mean([first, second]);
    } else {
        return data[Math.floor(data.length / 2)];
    }
};
exports.median = median;


/**
 * Computes standard deviation of a number array and returns the value.
 *
 * @param {BigNumber[]} data
 * @returns {BigNumber}
 */
function stdDev(data) {
    if (data.length > 0) {
        const avg = mean(data);
        let devSum = new BigNumber(0);
        data.map((datum) => {
            devSum = devSum.plus(datum.minus(avg).pow(2));
        });
        return devSum.div(data.length).sqrt();
    }
};
exports.stdDev = stdDev;
