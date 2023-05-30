/**
 * Checksum tests.
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */
const TestRegister = require("../../lib/TestRegister.mjs");

const BASIC_STRING = "The ships hung in the sky in much the same way that bricks don't.";
const UTF8_STR = "ნუ პანიკას";
const ALL_BYTES = [
    "\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f",
    "\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f",
    "\x20\x21\x22\x23\x24\x25\x26\x27\x28\x29\x2a\x2b\x2c\x2d\x2e\x2f",
    "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x3a\x3b\x3c\x3d\x3e\x3f",
    "\x40\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f",
    "\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x5b\x5c\x5d\x5e\x5f",
    "\x60\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f",
    "\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x7b\x7c\x7d\x7e\x7f",
    "\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f",
    "\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f",
    "\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf",
    "\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf",
    "\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf",
    "\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf",
    "\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef",
    "\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff",
].join("");

TestRegister.addTests([
    {
        name: "CRC-8: nothing",
        input: "",
        expectedOutput: "00",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8"]
            }
        ]
    },
    {
        name: "CRC-8: default check",
        input: "123456789",
        expectedOutput: "f4",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8"]
            }
        ]
    },
    {
        name: "CRC-8: CDMA2000",
        input: "123456789",
        expectedOutput: "da",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/CDMA2000"]
            }
        ]
    },
    {
        name: "CRC-8: DARC",
        input: "123456789",
        expectedOutput: "15",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/DARC"]
            }
        ]
    },
    {
        name: "CRC-8: DVB-S2",
        input: "123456789",
        expectedOutput: "bc",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/DVB-S2"]
            }
        ]
    },
    {
        name: "CRC-8: EBU",
        input: "123456789",
        expectedOutput: "97",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/EBU"]
            }
        ]
    },
    {
        name: "CRC-8: I-CODE",
        input: "123456789",
        expectedOutput: "7e",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/I-CODE"]
            }
        ]
    },
    {
        name: "CRC-8: ITU",
        input: "123456789",
        expectedOutput: "a1",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/ITU"]
            }
        ]
    },
    {
        name: "CRC-8: MAXIM",
        input: "123456789",
        expectedOutput: "a1",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/MAXIM"]
            }
        ]
    },
    {
        name: "CRC-8: ROHC",
        input: "123456789",
        expectedOutput: "d0",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/ROHC"]
            }
        ]
    },
    {
        name: "CRC-8: WCDMA",
        input: "123456789",
        expectedOutput: "25",
        recipeConfig: [
            {
                "op": "CRC-8 Checksum",
                "args": ["CRC-8/WCDMA"]
            }
        ]
    },
    {
        name: "CRC-16: nothing",
        input: "",
        expectedOutput: "0000",
        recipeConfig: [
            {
                "op": "CRC-16 Checksum",
                "args": []
            }
        ]
    },
    {
        name: "CRC-16: basic string",
        input: BASIC_STRING,
        expectedOutput: "0c70",
        recipeConfig: [
            {
                "op": "CRC-16 Checksum",
                "args": []
            }
        ]
    },
    {
        name: "CRC-16: UTF-8",
        input: UTF8_STR,
        expectedOutput: "dcf6",
        recipeConfig: [
            {
                "op": "CRC-16 Checksum",
                "args": []
            }
        ]
    },
    {
        name: "CRC-16: all bytes",
        input: ALL_BYTES,
        expectedOutput: "bad3",
        recipeConfig: [
            {
                "op": "CRC-16 Checksum",
                "args": []
            }
        ]
    },
    {
        name: "CRC-32: nothing",
        input: "",
        expectedOutput: "00000000",
        recipeConfig: [
            {
                "op": "CRC-32 Checksum",
                "args": []
            }
        ]
    },
    {
        name: "CRC-32: basic string",
        input: BASIC_STRING,
        expectedOutput: "bf4b739c",
        recipeConfig: [
            {
                "op": "CRC-32 Checksum",
                "args": []
            }
        ]
    },
    {
        name: "CRC-32: UTF-8",
        input: UTF8_STR,
        expectedOutput: "87553290",
        recipeConfig: [
            {
                "op": "CRC-32 Checksum",
                "args": []
            }
        ]
    },
    {
        name: "CRC-32: all bytes",
        input: ALL_BYTES,
        expectedOutput: "29058c73",
        recipeConfig: [
            {
                "op": "CRC-32 Checksum",
                "args": []
            }
        ]
    }
]);
