# CyberChef

[![](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](https://github.com/gchq/CyberChef/blob/master/LICENSE)
#### *The Cyber Swiss Army Knife*

CyberChef is a simple, intuitive web app for carrying out all manner of "cyber" operations within a web browser. These operations include simple encoding like XOR and Base64, more complex encryption like AES, DES and Blowfish, creating binary and hexdumps, compression and decompression of data, calculating hashes and checksums, IPv6 and X.509 parsing, changing character encodings, and much more.

The tool is designed to enable both technical and non-technical analysts to manipulate data in complex ways without having to deal with complex tools or algorithms. It was conceived, designed, built and incrementally improved by an analyst in their 10% innovation time over several years.

>***NOTE:*** The standard cyberchef library has a npm installable version that technically allows for the same thing as this project, and this is a mimic of that project, but with one key difference... We removed grunt, simplfied it to a commonjs module, and made it combatable with multiple node version, to be more easily installed using npm.  If you've ever had an issue with the standard cyberchef library, this is the project for you.


## How it works
```bash
npm install --save cyberchef-node
```

## Node.js support

CyberChef is built to fully support Node.js `v12` & `v18`. For more information, see the Node API page in the project [wiki pages](https://github.com/gchq/CyberChef/wiki/Node-API)


## Licencing

CyberChef is released under the [Apache 2.0 Licence](https://www.apache.org/licenses/LICENSE-2.0) and is covered by [Crown Copyright](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/).