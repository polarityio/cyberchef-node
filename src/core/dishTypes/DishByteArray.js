/**
 * @author d98762625 [d98762625@gmail.com]
 * @copyright Crown Copyright 2019
 * @license Apache-2.0
 */

const DishType = require("./DishType.js");

/**
 * Translation methods for ArrayBuffer Dishes
 */
class DishByteArray extends DishType {

    /**
     * convert the given value to a ArrayBuffer
     */
    static toArrayBuffer() {
        DishByteArray.checkForValue(this.value);
        this.value = new Uint8Array(this.value).buffer;
    }

    /**
     * convert the given value from a ArrayBuffer
     */
    static fromArrayBuffer() {
        DishByteArray.checkForValue(this.value);
        this.value = Array.prototype.slice.call(new Uint8Array(this.value));
    }
}

module.exports = DishByteArray;
