'use strict';

const test = require('tape');

const api = require('./api');

test('api does pretty', (t) => {
    t.plan(2);
    t.ok(api, 'api loaded ok');
    t.ok(api.doPretty('var smoke'), 'smoketest');
});
