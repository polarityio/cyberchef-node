/**
 * JA3Fingerprint tests.
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2021
 * @license Apache-2.0
 */
const TestRegister = require("../../lib/TestRegister.js");

TestRegister.addTests([
    {
        name: "JA3 Fingerprint: TLS 1.0",
        input: "16030100a4010000a00301543dd2dd48f517ca9a93b1e599f019fdece704a23e86c1dcac588427abbaddf200005cc014c00a0039003800880087c00fc00500350084c012c00800160013c00dc003000ac013c00900330032009a009900450044c00ec004002f009600410007c011c007c00cc002000500040015001200090014001100080006000300ff0100001b000b000403000102000a000600040018001700230000000f000101",
        expectedOutput: "503053a0c5b2bd9b9334bf7f3d3b8852",
        recipeConfig: [
            {
                "op": "JA3 Fingerprint",
                "args": ["Hex", "Hash digest"]
            }
        ],
    },
    {
        name: "JA3 Fingerprint: TLS 1.1",
        input: "16030100a4010000a00302543dd2ed907e47d0086f34bee2c52dd6ccd8de63ba9387f5e810b09d9d49b38000005cc014c00a0039003800880087c00fc00500350084c012c00800160013c00dc003000ac013c00900330032009a009900450044c00ec004002f009600410007c011c007c00cc002000500040015001200090014001100080006000300ff0100001b000b000403000102000a000600040018001700230000000f000101",
        expectedOutput: "a314eb64cee6cb832aaaa372c8295bab",
        recipeConfig: [
            {
                "op": "JA3 Fingerprint",
                "args": ["Hex", "Hash digest"]
            }
        ],
    },
    {
        name: "JA3 Fingerprint: TLS 1.2",
        input: "1603010102010000fe0303543dd3283283692d85f9416b5ccc65d2aafca45c6530b3c6eafbf6d371b6a015000094c030c02cc028c024c014c00a00a3009f006b006a0039003800880087c032c02ec02ac026c00fc005009d003d00350084c012c00800160013c00dc003000ac02fc02bc027c023c013c00900a2009e0067004000330032009a009900450044c031c02dc029c025c00ec004009c003c002f009600410007c011c007c00cc002000500040015001200090014001100080006000300ff01000041000b000403000102000a000600040018001700230000000d002200200601060206030501050205030401040204030301030203030201020202030101000f000101",
        expectedOutput: "c1a36e1a870786cc75edddc0009eaf3a",
        recipeConfig: [
            {
                "op": "JA3 Fingerprint",
                "args": ["Hex", "Hash digest"]
            }
        ],
    },
    {
        name: "JA3 Fingerprint: TLS 1.3",
        input: "1603010200010001fc03034355d402c132771a9386b6e9994ae37069e0621af504c26673b1343843c21d8d0000264a4a130113021303c02bc02fc02cc030cca9cca8cc14cc13c013c014009c009d002f0035000a010001addada0000ff01000100000000180016000013626c6f672e636c6f7564666c6172652e636f6d0017000000230000000d00140012040308040401050308050501080606010201000500050100000000001200000010000e000c02683208687474702f312e3175500000000b000201000028002b00295a5a000100001d0020cf78b9167af054b922a96752b43973107b2a57766357dd288b2b42ab5df30e08002d00020101002b000b0acaca7f12030303020301000a000a00085a5a001d001700180a0a000100001500e4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        expectedOutput: "4826a90ec2daf4f7b4b64cc1c8bd343b",
        recipeConfig: [
            {
                "op": "JA3 Fingerprint",
                "args": ["Hex", "Hash digest"]
            }
        ],
    },
]);