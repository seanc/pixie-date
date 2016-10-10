# pixie-date [![NPM version](https://badge.fury.io/js/pixie-date.svg)](https://npmjs.org/package/pixie-date) [![Build Status](https://travis-ci.org/seanc/pixie-date.svg?branch=master)](https://travis-ci.org/seanc/pixie-date)

> Pixie date/time format as per ISO 8601

## Installation

```sh
$ npm install --save pixie-date
```

## Usage

```js
pixie.render('{{ddd MMM DD YYYY}}', {}, {engines: [date(new Date())]});
```

## License

MIT © [Sean Wilson](https://imsean.me)
