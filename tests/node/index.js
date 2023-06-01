/* eslint no-console: 0 */

/**
 * Node API Test Runner
 *
 * @author d98762625 [d98762625@gmail.com]
 * @author tlwr [toby@toby.codes]
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

const {
    setLongTestFailure,
    logTestReport,
} = require("../lib/utils.js");

const TestRegister = require("../lib/TestRegister.js");
require("./tests/nodeApi.js");
require("./tests/operations.js");
require("./tests/File.js");
require("./tests/Dish.js");
require("./tests/NodeDish.js");
require("./tests/Utils.js");
require("./tests/Categories.js");

const testStatus = {
    allTestsPassing: true,
    counts: {
        total: 0,
    }
};

setLongTestFailure();

const logOpsTestReport = logTestReport.bind(null, testStatus);

(async function() {
    const results = await TestRegister.runApiTests();
    logOpsTestReport(results);
})();
