/**
 * OTP HOTP tests.
 *
 * @author bwhitn [brian.m.whitney@outlook.com]
 *
 * @copyright Crown Copyright 2017
 * @license Apache-2.0
 */
const TestRegister = require("../../lib/TestRegister.js");

TestRegister.addTests([
    {
        name: "Generate HOTP",
        input: "12345678901234567890",
        expectedOutput: "URI: otpauth://hotp/OTPAuthentication?secret=GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ\n\nPassword: 755224",
        recipeConfig: [
            {
                op: "Generate HOTP",
                args: ["", 32, 6, 0],
            },
        ],
    },
]);
