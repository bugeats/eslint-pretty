'use strict';

const test = require('tape');

const Helpers = require('./helpers');

test('helper to detect common leading whitespace', (t) => {
    t.plan(4);

    t.equal(
        Helpers.detectCommonLeadingWhitespace([
            '\t \t \t \t\t var foo = "bar";',
            '\t \t \tvar foo = "baz";',
            '\t \t \t  \t var foo = "bit";',
            '\t \t \t\t var foo = "bum";'
        ]),
        '\t \t \t',
        'a mix of tabs and spaces'
    );

    t.equal(
        Helpers.detectCommonLeadingWhitespace([
            '      var foo = "bar";',
            '   var foo = "baz";',
            '    var foo = "bit";',
            '     var foo = "bum";'
        ]),
        '   ',
        'three spaces'
    );

    t.equal(
        Helpers.detectCommonLeadingWhitespace([
            'var foo = "bar";',
            '   var foo = "baz";',
            '    var foo = "bit";',
            '     var foo = "bum";'
        ]),
        '',
        'no spaces'
    );

    t.equal(
        Helpers.detectCommonLeadingWhitespace([
            'var foo = "bar";',
            'var foo = "baz";',
            'var foo = "bit";',
            'var foo = "bum";'
        ]),
        '',
        'no spaces even for common prefix'
    );
});

