/**
 * This script generates the exports functionality for the node API.
 *
 * it exports chef as default, but all the wrapped operations as
 * other top level exports.
 *
 * @author d98762656 [d98762625@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

/* eslint no-console: 0 */

const fs = require("fs");
const path = require("path");
const { decapitalise } = require("../../apiUtils.js");
const excludedOperations = require("../excludedOperations.js");

const operations = require("../../../core/operations/index.js");
const includedOperations = Object.keys(operations).filter(
    (op) => excludedOperations.indexOf(op) === -1
);

const dir = path.join(`${process.cwd()}/src/node`);
if (!fs.existsSync(dir)) {
    console.log("\nCWD: " + process.cwd());
    console.log(
        "Error: generateNodeIndex.js should be run from the project root"
    );
    console.log(
        "Example> node --experimental-modules src/core/config/scripts/generateNodeIndex.js"
    );
    process.exit(1);
}

let code = `/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/node/config/scripts/generateNodeIndex.js
*
* @author d98762625 [d98762625@gmail.com]
* @copyright Crown Copyright 2019
* @license Apache-2.0
*/

/* eslint camelcase: 0 */


const NodeDish = require("./NodeDish.js")
const { _wrap, help, bake, _explainExcludedFunction } = require("./api.js")
const File = require("./File.js")
const { OperationError, DishError, ExcludedOperationError } = require("../core/errors/index.js")
const {
    // import as core_ to avoid name clashes after wrap.
`;

includedOperations.forEach((op) => {
    // prepend with core_ to avoid name collision later.
    code += `    ${op}: core_${op},\n`;
});

code += `
} = require("../core/operations/index.js");

global.File = File;

/**
 * generateChef
 *
 * Creates decapitalised, wrapped ops in chef object for default export.
 */
function generateChef() {
    return {
`;

includedOperations.forEach((op) => {
    code += `        "${decapitalise(op)}": _wrap(core_${op}),\n`;
});

excludedOperations.forEach((op) => {
    code += `        "${decapitalise(
        op
    )}": _explainExcludedFunction("${op}"),\n`;
});

code += `    };
}

const chef = generateChef();
// Add some additional features to chef object.
chef.help = help;
chef.Dish = NodeDish;

// Define consts here so we can add to top-level export - wont allow
// export of chef property.
`;

Object.keys(operations).forEach((op) => {
    code += `const ${decapitalise(op)} = chef.${decapitalise(op)};\n`;
});

code += `

// Define array of all operations to create register for bake.
const operations = [\n`;

Object.keys(operations).forEach((op) => {
    code += `    ${decapitalise(op)},\n`;
});

code += `];

chef.bake = bake;
module.exports = chef;

// Operations as top level exports.
const _operations = {
    operations,
`;

Object.keys(operations).forEach((op) => {
    code += `    ${decapitalise(op)},\n`;
});

code += `    Dish: NodeDish,
    bake,
    help,
    OperationError,
    ExcludedOperationError,
    DishError
};

exports.operations = _operations;
`
fs.writeFileSync(path.join(dir, "./index.js"), code);
