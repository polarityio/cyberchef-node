const TestRegister = require("../../lib/TestRegister.js");
const Categories = require("../../../src/core/config/Categories.json");
const OperationConfig = require("../../../src/core/config/OperationConfig.json");
const it = require("../assertionHandler.js");
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
