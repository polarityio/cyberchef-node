#!/bin/sh

NODE_VERSION=$(node --version)

if [[ $NODE_VERSION = v18* ]]
then
    node --experimental-modules --experimental-json-modules --experimental-specifier-resolution=node --no-experimental-fetch --openssl-legacy-provider --trace-uncaught --no-warnings --no-deprecation tests/node/index.js
else
    node --experimental-modules --experimental-json-modules --experimental-specifier-resolution=node --trace-uncaught --no-warnings --no-deprecation tests/node/index.js
fi