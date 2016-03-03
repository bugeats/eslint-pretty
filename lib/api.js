'use strict';

const eslint = require('eslint');
const esformatter = require('esformatter');

const thisPackage = require('../package');
const Helpers = require('./helpers');

const MAX_ESLINT_ITERATIONS = 10;
const MAX_INDENT_CHARS = 120;

const engine = new eslint.CLIEngine({
    fix: true
});

module.exports = {
    doPretty: doPretty,
    getVersion: getVersion
};

function doPretty(codeText) {
    let pretty = codeText;
    try {
        let lines = codeText.split('\n');
        let leadingWhitespace = Helpers.detectCommonLeadingWhitespace(lines);
        let nibbledLines = Helpers.nibbleLines(lines, leadingWhitespace);
        let formattedCodeText = fixWithEsformatter(nibbledLines.join('\n'));
        let lintedCodeText = fixWithEslint(formattedCodeText);
        let prependedLines = Helpers.prependLines(lintedCodeText.split('\n'), leadingWhitespace);
        pretty = prependedLines.join('\n');
    } catch(err) {
        // TODO naughty error swallowing
    } finally {
        return pretty;
    }
}

function getVersion() {
    return thisPackage['version'];
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
    let formatted = esformatter.format(codeText, {});
    // esformatter has a habit of adding extra newlines at beginning of string, remove them.
    if (formatted[0] === '\n' && codeText[0] !== '\n') {
        return formatted.substr(1);
    }
    return formatted;
}

