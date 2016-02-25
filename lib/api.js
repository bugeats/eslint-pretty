'use strict';

const eslint = require('eslint');
const esformatter = require('esformatter');

const MAX_ESLINT_ITERATIONS = 10;

const engine = new eslint.CLIEngine({
    fix: true
});

module.exports = {
    doPretty: doPretty
};

function doPretty(codeText) {
    let pretty = codeText;
    try {
        let formatted = fixWithEsformatter(codeText);
        pretty = fixWithEslint(formatted);
    } catch(err) {
        // TODO naughty error swallowing
    } finally {
        return pretty;
    }
}

function fixWithEslint(codeText) {
    let i = MAX_ESLINT_ITERATIONS;
    let fixedCodeText = codeText;
    let report;
    while (i) {
        report = engine.executeOnText(fixedCodeText);
        if (report && report.results && report.results[0] && report.results[0].output) {
            fixedCodeText = report.results[0].output;
        } else {
            break;
        }
        i--;
    }
    return fixedCodeText;
}

function fixWithEsformatter(codeText) {
    // TODO would be cool to translate a few eslint rules over to esformatter config?
    return esformatter.format(codeText, {});
}

