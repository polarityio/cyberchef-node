/**
 * @author d98762625 [d98762625@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const DishString = require("./DishString.mjs");
const Utils = require("../Utils.mjs");

/**
 * Translation methods for HTML Dishes
 */
class DishHTML extends DishString {

    /**
     * convert the given value to a ArrayBuffer
     * @param {String} value
     */
    static toArrayBuffer() {
        DishHTML.checkForValue(this.value);
        this.value = this.value ? Utils.strToArrayBuffer(Utils.unescapeHtml(Utils.stripHtmlTags(this.value, true))) : new ArrayBuffer;
    }

}

module.exports = DishHTML;
