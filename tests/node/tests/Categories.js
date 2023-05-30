const TestRegister = require("../../lib/TestRegister.mjs");
const Categories = require(""../../../src/core/config/Categories.json" assert {type: "json"}");
const OperationConfig = require(""../../../src/core/config/OperationConfig.json" assert {type: "json"}");
const it = require("../assertionHandler.mjs");
const assert = require("assert");

TestRegister.addApiTests([
    it("Categories: operations should be in a category", () => {
        const catOps = [];
        Categories.forEach(cat => {
            catOps.push(...cat.ops);
        });

        for (const op in OperationConfig) {
            assert(catOps.includes(op), `'${op}' operation is not present in any category`);
        }
    }),

]);
