#!/bin/sh

NODE_VERSION=$(node --version)

case "$NODE_VERSION" in
v18*)
    node --experimental-modules --experimental-json-modules --experimental-specifier-resolution=node --no-experimental-fetch --openssl-legacy-provider --trace-uncaught --no-warnings --no-deprecation tests/node/index.js
    ;;
*)
    node --experimental-modules --experimental-json-modules --experimental-specifier-resolution=node --trace-uncaught --no-warnings --no-deprecation tests/node/index.js
    ;;
esac