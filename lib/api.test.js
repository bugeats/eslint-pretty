'use strict';

const test = require('tape');

const api = require('./api');

test('api does pretty', (t) => {
    t.plan(2);
    t.ok(api, 'api loaded ok');
    t.ok(api.doPretty('var smoke'), 'smoketest');
});

test('api get version', (t) => {
    t.plan(1);
    t.ok(api.getVersion(), 'get version ok');
});

test('api preserves indent whitespace', (t) => {
    t.plan(4);

    let testWhitespace = function (lines, msg) {
        let joined = lines.join('\n');
        t.equal(api.doPretty(joined), joined, msg);
    };

    testWhitespace([
        '    function testFn() {',
        '        return null;',
        '    }'
    ], 'preserves four spaces');

    testWhitespace([
        '   function testFn() {',
        '       return null;',
        '   }'
    ], 'preserves three spaces');

    testWhitespace([
        '\tfunction testFn() {',
        '\t    return null;',
        '\t}'
    ], 'preserves tabs');

    testWhitespace([
        '\t \t function testFn() {',
        '\t \t     return null;',
        '\t \t }'
    ], 'preserves mixture of tabs and spaces');
});

