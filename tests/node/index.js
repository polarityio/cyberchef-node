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

import {
    setLongTestFailure,
    logTestReport,
} from "../lib/utils.js";

const TestRegister = require("../lib/TestRegister.js");
import "./tests/nodeApi.js";
import "./tests/operations.js";
import "./tests/File.js";
import "./tests/Dish.js";
import "./tests/NodeDish.js";
import "./tests/Utils.js";
import "./tests/Categories.js";

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
