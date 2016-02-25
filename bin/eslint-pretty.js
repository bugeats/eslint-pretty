#!/usr/bin/env node

'use strict';

const api = require('../lib/api');

getPiped((piped) => {
    process.stdout.write(api.doPretty(piped.toString()));
});

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

