/**
 * JWT Sign tests
 *
 * @author gchq77703 []
 *
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */
const TestRegister = require("../../lib/TestRegister.js");

const inputObject = JSON.stringify({
    String: "SomeString",
    Number: 42,
    iat: 1
}, null, 4);

const hsKey = "secret_cat";
const rsKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpgIBAAKCAQEAyFxBMuPJ3FHSQbpKazHwQ5M2QmWTyNwq7BWjBk926ngJZ8gY
eKwXFbbZJgJ1bWLUirB0yGAl2jT/SaAtzIqrqe1GzaqQ9eAmf4A0vjmWVtxbbwt1
gRjatVKtQh1MoW5GBGZK5xh4AeVgQgDnTN6lLAwrFrx7Zqa/Qmt7ddKAtavnUuaA
lF9bWpw0JyYgkvwdA1Tp9xki2gLQmJVD9Hr7uDD1lCOD6ciLdA4iB4Pdc+7XG8v/
zG7zs0K9OZ9FY7RNlRWMEsuYG/IPrqopD894c4+fYLE1zPzuQBz5TWejHFxbZ/wm
y/BbTYjQDzmTl1u5AguHVx/uOZUX7a/lGHxw0QIDAQABAoIBAQCnNgbbl6sRid91
JymQSH8BhkwUIX2ydbwEhxIk5BCUIVWIHT//BW/GmXCj/g1OGtrSW+06hLNSZkRf
h6RxPZGCIRmj7qNH76dxZOefkaPcHc7Y37FS6hEsnjEmKhmX59XbOhtsvcj5nBo3
O1XNm0oxdn5HXUmHI8YegmDotaLg+XhleKs/BIYsmjh46Dd4THtXUydMPQVI2Puz
HFtzdHTi6iCHcBXndJo/dJVE9nKaNVy67t5QtS/Fy7nfOsdobmbkJlvmF+n2wViD
nS7J9HwYnZw/Ua5OEKL+KCic1u5J8W161aD7xNx9bI8VPpDIXNltZUY5bJVnpeWW
lPYz0oLZAoGBAPfn/qZqo64GMHNJzFVw2drEJCidqTPgUH9NA3rtwdXggpDyr6Jf
ztYggt/bWrl1fiYA/RXtZb2eBObKNOeEabHD3KdtqgN7hW6pmLQIJe81Gsg3XJPx
dmNXCf3VZCDfDVflHUT581qPjZlWBfMe/pfz6fHrq/9Au0t/cw4Z28n3AoGBAM7m
3uZJhlTe6ukX/GUydb5PtepATQ5V/xhoKudBHmDBXARyWCgDFBuzKhrWx118tpZZ
XvBQTvpTdVBBzgg4oEHYLlyRpF/mwg/99IKxIYcCx8H5BvureGIx6ttRX3e2o+Ad
ikRvBc+AQhgdAxuVf1rEA/d5iaNewoCOWm+pjyl3AoGBANFcULfUaYUHXxWOJo2l
r6ZMbUkL1SClePX5YU4IyuFIKJwnCGL1zKUTcdOB2b20VyPbQ+Gnynt3nyYVcNZx
Ah4JjiiruaAVShuqCPdJxledHpAmCP48NsIweJSxCU2lcgxfxvdAq984StpLRt0K
uPI1IMaZRHld/o8FBHLNLcwDAoGBAJH3CIvYlR9tALcfR92w4qY3n/Q6FuKlQsla
O+JX63GBGES+0niv61C7blnu6kmHAV1CgZryXTV3CY1sT0k3gb/SHqsJyLgrmP8l
P4mwIyIXkQvEfuuwBcboxnKhjsNrI2OqE3DCDoxcRMS0OwwLxQQow0+k+7g40ulV
BHJAYhJzAoGBAPPf7ND47NsVVz+tzQbhi76dHg4Ydp0Gp/7osItwTwO1EKrWH9zR
YIqFjH/YPVaDZTyPTIWMa3erez5EvZ3SJYgcQMYTo7zDNmZAuvb/r08BxMjV7qp5
6BDUO+WPKbSsST8+oRJYH3J3ZI4dIJb4fnYyz6C6yds3TezPL3wvRhdv
-----END RSA PRIVATE KEY-----`;
const es256Key = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgevZzL1gdAFr88hb2
OF/2NxApJCzGCEDdfSp6VQO30hyhRANCAAQRWz+jn65BtOMvdyHKcvjBeBSDZH2r
1RTwjmYSi9R/zpBnuQ4EiMnCqfMPWiZqB4QdbAd0E7oH50VpuZ1P087G
-----END PRIVATE KEY-----`;
const es384Key = `-----BEGIN PRIVATE KEY-----
MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDDc/KYrLYjypkPsjB+0
XyqZXSOL9YytKyIB03co8IBqCGEJ6zsB2oxacj8sTctDS1qhZANiAASkZ2SQZMiI
hi/OeH+qAarnLAFd0fuUqKI47YHXA+QhAZfnBfoLh73RNakg1lta7VN0xik7eujH
EQw9prtxIiXTLUxZkwYUjODNujr1HHQtM/HER15rkKHWx8J9ZthIItE=
-----END PRIVATE KEY-----`;
const es512Key = `-----BEGIN PRIVATE KEY-----
MIHuAgEAMBAGByqGSM49AgEGBSuBBAAjBIHWMIHTAgEBBEIBSiJibOMpB9SOtDN7
lCtU8E9mCkPPYAzCW5RBMSkNKwjT6MILl+JvcLX4Qn0hlhQxYPgnRpv0ohorb49+
XRBD6S+hgYkDgYYABABZrMh5h9B3JsI8VsBAjvg6lY3visG0P7AHiwhzNIeh+Ucs
oC2xa6CCYKAyBF8VJSwH+eg8RtMArRyTlYuMnoj6RAFhVx6mI2ck/SuJfNekMXDy
TRvJBgN7OBdO3IdPKldpas+wmMhwiiq/2yx+D4gExpclM9j5CWcHcQj6NTpUkCoF
/Q==
-----END PRIVATE KEY-----`;

TestRegister.addTests([
    {
        name: "JWT Sign: HS256",
        input: inputObject,
        expectedOutput: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdHJpbmciOiJTb21lU3RyaW5nIiwiTnVtYmVyIjo0MiwiaWF0IjoxfQ.0ha6-j4FwvEIKPVZ-hf3S_R9Hy_UtXzq4dnedXcUrXk",
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [hsKey, "HS256"],
            }
        ],
    },
    {
        name: "JWT Sign: HS384",
        input: inputObject,
        expectedOutput: "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJTdHJpbmciOiJTb21lU3RyaW5nIiwiTnVtYmVyIjo0MiwiaWF0IjoxfQ._bPK-Y3mIACConbJqkGFMQ_L3vbxgKXy9gSxtL9hA5XTganozTSXxD0vX0N1yT5s",
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [hsKey, "HS384"],
            }
        ],
    },
    {
        name: "JWT Sign: HS512",
        input: inputObject,
        expectedOutput: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJTdHJpbmciOiJTb21lU3RyaW5nIiwiTnVtYmVyIjo0MiwiaWF0IjoxfQ.vZIJU4XYMFt3FLE1V_RZOxEetmV4RvxtPZQGzJthK_d47pjwlEb6pQE23YxHFmOj8H5RLEdqqLPw4jNsOyHRzA",
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [hsKey, "HS512"],
            }
        ],
    },
    {
        name: "JWT Sign: ES256",
        input: inputObject,
        expectedOutput: inputObject,
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [es256Key, "ES256"],
            },
            {
                op: "JWT Decode",
                args: []
            }
        ],
    },
    {
        name: "JWT Sign: ES384",
        input: inputObject,
        expectedOutput: inputObject,
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [es384Key, "ES384"],
            },
            {
                op: "JWT Decode",
                args: []
            }
        ],
    },
    {
        name: "JWT Sign: ES512",
        input: inputObject,
        expectedOutput: inputObject,
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [es512Key, "ES512"],
            },
            {
                op: "JWT Decode",
                args: []
            }
        ],
    },
    {
        name: "JWT Sign: RS256",
        input: inputObject,
        expectedOutput: inputObject,
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [rsKey, "RS256"],
            },
            {
                op: "JWT Decode",
                args: []
            }
        ],
    },
    {
        name: "JWT Sign: RS384",
        input: inputObject,
        expectedOutput: inputObject,
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [rsKey, "RS384"],
            },
            {
                op: "JWT Decode",
                args: []
            }
        ],
    },
    {
        name: "JWT Sign: RS512",
        input: inputObject,
        expectedOutput: inputObject,
        recipeConfig: [
            {
                op: "JWT Sign",
                args: [rsKey, "RS512"],
            },
            {
                op: "JWT Decode",
                args: []
            }
        ],
    }
]);
