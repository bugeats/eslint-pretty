module.exports = {
    'parserOptions': {
        'ecmaFeatures': {
            'arrowFunctions': true,
            'classes': true,
            'templateStrings': true
        }
    },
    'rules': {
        'brace-style': [2, '1tbs'],
        'camelcase': 1,
        'comma-dangle': [2, 'never'],
        'comma-spacing': [2, { 'before': false, 'after': true }],
        'comma-style': [2, 'last'],
        'consistent-return': 2,
        'eqeqeq': 2,
        'no-var': 2,
        'indent': [2, 4],
        'linebreak-style': [2, 'unix'],
        'no-console': 0,
        'no-else-return': 2,
        'no-redeclare': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': 0,
        'object-curly-spacing': [2, 'always'],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'semi-spacing': [2, { 'before': false, 'after': true }],
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],
        'space-in-parens': [2, 'never'],
        'strict': 0
    },
    'env': {
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended'
};
