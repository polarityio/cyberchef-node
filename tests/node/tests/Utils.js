const TestRegister = require("../../lib/TestRegister.js");
const Utils = require("../../../src/core/Utils.js");
const it = require("../assertionHandler.js");
const assert = require("assert");

TestRegister.addApiTests([
    it("Utils: should parse six backslashes correctly", () => {
        assert.equal(Utils.parseEscapedChars("\\\\\\\\\\\\"), "\\\\\\");
    }),

    it("Utils: should parse escaped quotes correctly", () => {
        assert.equal(Utils.parseEscapedChars("\\'"), "'");
    }),

    it("Utils: should parse escaped quotes and backslashes correctly", () => {
        assert.equal(Utils.parseEscapedChars("\\\\'"), "\\'");
    }),

    it("Utils: should parse escaped quotes and escaped backslashes correctly", () => {
        assert.equal(Utils.parseEscapedChars("\\\\\\'"), "\\'");
    }),

]);
