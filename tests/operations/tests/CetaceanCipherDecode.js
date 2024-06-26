/**
 * CetaceanCipher Encode tests
 *
 * @author dolphinOnKeys
 * @copyright Crown Copyright 2022
 * @licence Apache-2.0
 */
const TestRegister = require("../../lib/TestRegister.js");

TestRegister.addTests([
    {
        name: "Cetacean Cipher Decode",
        input: "EEEEEEEEEeeEEEEe EEEEEEEEEeeEEEeE EEEEEEEEEeeEEEee EEeeEEEEEeeEEeee",
        expectedOutput: "a b c で",
        recipeConfig: [
            {
                op: "Cetacean Cipher Decode",
                args: []
            },
        ],
    }
]);
