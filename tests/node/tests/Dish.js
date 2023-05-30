const TestRegister = require("../../lib/TestRegister.mjs");
const Dish = require("../../../src/core/Dish.mjs");
const it = require("../../node/assertionHandler.mjs");
const assert = require("assert");

TestRegister.addApiTests([
    it("Dish - presentAs: should exist", () => {
        const dish = new Dish();
        assert(dish.presentAs);
    }),

]);
