/**
 * HASSH tests.
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2021
 * @license Apache-2.0
 */
const TestRegister = require("../../lib/TestRegister.mjs");

TestRegister.addTests([
    {
        name: "HASSH Client Fingerprint",
        input: "000003140814c639665f5425dcb80bf9f0a048380a410000007e6469666669652d68656c6c6d616e2d67726f75702d65786368616e67652d7368613235362c6469666669652d68656c6c6d616e2d67726f75702d65786368616e67652d736861312c6469666669652d68656c6c6d616e2d67726f757031342d736861312c6469666669652d68656c6c6d616e2d67726f7570312d736861310000000f7373682d7273612c7373682d6473730000009d6165733132382d6374722c6165733139322d6374722c6165733235362d6374722c617263666f75723235362c617263666f75723132382c6165733132382d6362632c336465732d6362632c626c6f77666973682d6362632c636173743132382d6362632c6165733139322d6362632c6165733235362d6362632c617263666f75722c72696a6e6461656c2d636263406c797361746f722e6c69752e73650000009d6165733132382d6374722c6165733139322d6374722c6165733235362d6374722c617263666f75723235362c617263666f75723132382c6165733132382d6362632c336465732d6362632c626c6f77666973682d6362632c636173743132382d6362632c6165733139322d6362632c6165733235362d6362632c617263666f75722c72696a6e6461656c2d636263406c797361746f722e6c69752e736500000069686d61632d6d64352c686d61632d736861312c756d61632d3634406f70656e7373682e636f6d2c686d61632d726970656d643136302c686d61632d726970656d64313630406f70656e7373682e636f6d2c686d61632d736861312d39362c686d61632d6d64352d393600000069686d61632d6d64352c686d61632d736861312c756d61632d3634406f70656e7373682e636f6d2c686d61632d726970656d643136302c686d61632d726970656d64313630406f70656e7373682e636f6d2c686d61632d736861312d39362c686d61632d6d64352d39360000001a6e6f6e652c7a6c6962406f70656e7373682e636f6d2c7a6c69620000001a6e6f6e652c7a6c6962406f70656e7373682e636f6d2c7a6c6962000000000000000000000000000000000000000000",
        expectedOutput: "21b457a327ce7a2d4fce5ef2c42400bd",
        recipeConfig: [
            {
                "op": "HASSH Client Fingerprint",
                "args": ["Hex", "Hash digest"]
            }
        ],
    },
    {
        name: "HASSH Server Fingerprint",
        input: "0000027c0b142c7bb93a1da21c9e54f5862e60a5597c000000596469666669652d68656c6c6d616e2d67726f75702d65786368616e67652d736861312c6469666669652d68656c6c6d616e2d67726f757031342d736861312c6469666669652d68656c6c6d616e2d67726f7570312d736861310000000f7373682d7273612c7373682d647373000000876165733132382d6362632c336465732d6362632c626c6f77666973682d6362632c636173743132382d6362632c617263666f75722c6165733139322d6362632c6165733235362d6362632c72696a6e6461656c2d636263406c797361746f722e6c69752e73652c6165733132382d6374722c6165733139322d6374722c6165733235362d637472000000876165733132382d6362632c336465732d6362632c626c6f77666973682d6362632c636173743132382d6362632c617263666f75722c6165733139322d6362632c6165733235362d6362632c72696a6e6461656c2d636263406c797361746f722e6c69752e73652c6165733132382d6374722c6165733139322d6374722c6165733235362d63747200000055686d61632d6d64352c686d61632d736861312c686d61632d726970656d643136302c686d61632d726970656d64313630406f70656e7373682e636f6d2c686d61632d736861312d39362c686d61632d6d64352d393600000055686d61632d6d64352c686d61632d736861312c686d61632d726970656d643136302c686d61632d726970656d64313630406f70656e7373682e636f6d2c686d61632d736861312d39362c686d61632d6d64352d3936000000096e6f6e652c7a6c6962000000096e6f6e652c7a6c6962000000000000000000000000000000000000000000000000",
        expectedOutput: "f430cd6761697a6a658ee1d45ed22e49",
        recipeConfig: [
            {
                "op": "HASSH Server Fingerprint",
                "args": ["Hex", "Hash digest"]
            }
        ],
    }
]);
