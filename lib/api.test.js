var test = require('tape');

var api = require('./api');

test('api does pretty', function (t) {
    t.plan(2);
    t.ok(api, 'api loaded ok');
    t.ok(api.doPretty('var smoke'), 'smoketest');
});
