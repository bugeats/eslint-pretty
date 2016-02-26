#!/usr/bin/env node

'use strict';

const api = require('../lib/api');

if (!didInterceptArgs()) {
    getPiped((piped) => {
        process.stdout.write(api.doPretty(piped.toString()));
    });
}

function getPiped(cb) {
    let chunks = [];
    process.stdin.on('data', function (chunk) {
        chunks.push(chunk);
    });
    process.stdin.on('end', function () {
        let buf = Buffer.concat(chunks);
        cb(buf);
    });
}

function didInterceptArgs() {
    let shouldPrintVersion = false;
    process.argv.forEach(arg => {
        if (arg === '--version') {
            shouldPrintVersion = true;
        }
    });
    if (shouldPrintVersion) {
        process.stdout.write(`v${ api.getVersion() }\n`);
        return true;
    }
    return false;
}
