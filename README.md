# eslint-pretty

Wrap eslint and esformatter to format and pretty-print javascript via stdio.


## Installation

```shell
npm install -g eslint-pretty

```


## Usage

```shell
cat uglylinty.js | eslint-pretty > uglylinty_pretty.js
```


## Why

After carefully building your `.eslintrc.js` file, wouldn't it be nice to quickly format code according to those rules?


## How

This project is merely a thin wrapper around two very excellent projects: [esformatter](https://github.com/millermedeiros/esformatter) and [https://github.com/eslint/eslint](https://github.com/eslint/eslint).

It does a couple of passes over the linty code. First it uses esformatter to fix the basic stuff like indenting.  Then it uses eslint to apply any rules that are "fixable". It may pass through eslint a few times. This can be slow.

All the rules detected from your local `.eslintrc.js` and `.esformatter` will apply.

