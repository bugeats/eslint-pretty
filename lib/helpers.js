'use strict';

const Helpers = {};

// given a list of lines, detect and return the space and tab char string fragment
// that is common to the beginning of each line
Helpers.detectCommonLeadingWhitespace = function (lines) {
    return lines.reduce((prev, line) => {
        let lnws = Helpers.detectLeadingWhitespace(line);
        for (let i = 0; i < lnws.length; i++) {
            if (lnws[i] !== prev[i]) {
                return lnws.substr(0, i);
            }
        }
        return lnws;
    }, Helpers.detectLeadingWhitespace(lines[lines.length - 1]));
};


// return actual tab and space chars from beginning of a given line
Helpers.detectLeadingWhitespace = function (line) {
    return (line.match(/^[ \t]*/)[0] || '');
};


// Add text to the beginning of each line
// returns lines of lines
Helpers.prependLines = function (lines, text) {
    return lines.map((line) => {
        return text + line;
    });
};

// removes chars from beginning of lines
// returns lines of lines
Helpers.nibbleLines = function (lines, chars) {
    return lines.map((line) => {
        return line.replace(new RegExp(`^${ chars }`), '');
    });
};

// -----------------------------------------------------------------------------

module.exports = Helpers;

