const TestRegister = require("../../lib/TestRegister.js");
const Dish = require("../../../src/core/Dish.js");
const it = require("../../node/assertionHandler.js");
const assert = require("assert");

TestRegister.addApiTests([
    it("Dish - presentAs: should exist", () => {
        const dish = new Dish();
        assert(dish.presentAs);
    }),

]);
