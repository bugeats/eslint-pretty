#!/usr/bin/env node

var api = require('../lib/api');

getPiped(function (piped) {
    process.stdout.write(api.doPretty(piped.toString()));
});

function getPiped(cb) {
    var chunks = [];
    process.stdin.on('data', function (chunk) {
        chunks.push(chunk);
    });
    process.stdin.on('end', function () {
        var buf = Buffer.concat(chunks);
        cb(buf);
    });
}

