#!/bin/bash
mkdir -p resources/public/js/compiled
node ./node_modules/browserify/bin/cmd.js deps.js --ig --fast --outfile resources/public/js/compiled/deps.js
