#!/usr/bin/env node

var eslint = require('eslint');
var esformatter = require('esformatter');

var MAX_ESLINT_ITERATIONS = 10;

var engine = new eslint.CLIEngine({
    fix: true
});

module.exports = {
    doPretty: doPretty
};

function doPretty(codeText) {
    var pretty = codeText;
    try {
        var formatted = fixWithEsformatter(codeText);
        var pretty = fixWithEslint(formatted);
    } catch(err) {
        // TODO naughty error swallowing
    } finally {
        return pretty;
    }
}

function fixWithEslint(codeText) {
    var i = MAX_ESLINT_ITERATIONS;
    var fixedCodeText = codeText;
    var report;
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

