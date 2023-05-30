/**
 * @author d98762625 [d98762625@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */


const DishType = require("./DishType.mjs");
const Utils = require("../Utils.mjs");

/**
 * Translation methods for string dishes
 */
class DishString extends DishType {

    /**
     * convert the given value to a ArrayBuffer
     */
    static toArrayBuffer() {
        DishString.checkForValue(this.value);
        this.value = this.value ? Utils.strToArrayBuffer(this.value) : new ArrayBuffer;
    }

    /**
     * convert the given value from a ArrayBuffer
     */
    static fromArrayBuffer() {
        DishString.checkForValue(this.value);
        this.value = this.value ? Utils.arrayBufferToStr(this.value) : "";
    }
}

module.exports = DishString;
