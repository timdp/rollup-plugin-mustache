# rollup-plugin-mustache

[![npm](https://img.shields.io/npm/v/rollup-plugin-mustache.svg)](https://www.npmjs.com/package/rollup-plugin-mustache) [![Dependencies](https://img.shields.io/david/timdp/rollup-plugin-mustache.svg)](https://david-dm.org/timdp/rollup-plugin-mustache) [![Build Status](https://img.shields.io/circleci/project/github/timdp/rollup-plugin-mustache/master.svg?label=build)](https://circleci.com/gh/timdp/rollup-plugin-mustache) [![Coverage Status](https://img.shields.io/coveralls/timdp/rollup-plugin-mustache/master.svg)](https://coveralls.io/r/timdp/rollup-plugin-mustache) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Precompiles [Mustache](https://mustache.github.io/) templates using
[Hogan.js](http://twitter.github.io/hogan.js/).

## Installation

```bash
npm install --save-dev rollup-plugin-mustache
```

## Usage

First, configure Rollup:

```js
import mustache from 'rollup-plugin-mustache'
import commonjs from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  dest: 'dist/my-lib.js',
  plugins: [
    // ... other plugins here ...
    mustache({
      include: '**/*.mustache'
    }),
    commonjs() // Needed to import Hogan.js
  ]
}
```

Then, import a template and render it:

```js
import mainTemplate from './main.mustache'

const html = mainTemplate.render({
  foo: 'bar',
  baz: 'quux'
})
console.log(html)
```

## Options

### `hoganKey`

By default, this plugin will import Hogan.js into your build. If you already
have it imported some other way, you should most likely override the `hoganKey`
option with just `'hogan.js'` and let Rollup resolve it. Alternatively, you can
specify the full path to the main file.

### `include` and `exclude`

From [rollup-pluginutils](https://github.com/rollup/rollup-pluginutils#createfilter).

## Author

[Tim De Pauw](https://github.com/timdp)

## License

MIT
