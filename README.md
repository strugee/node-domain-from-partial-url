# `domain-from-partial-url`

[![Build Status](https://travis-ci.org/strugee/node-domain-from-partial-url.svg?branch=master)](http://travis-ci.org/strugee/node-domain-from-partial-url)
[![Coverage Status](https://coveralls.io/repos/github/strugee/node-domain-from-partial-url/badge.svg?branch=master)](https://coveralls.io/github/strugee/node-domain-from-partial-url?branch=master)
[![npm](https://img.shields.io/npm/v/domain-from-partial-url.svg)](https://npmjs.com/package/domain-from-partial-url)
[![Greenkeeper badge](https://badges.greenkeeper.io/strugee/node-domain-from-partial-url.svg)](https://greenkeeper.io/)

Turn a URL, no matter how incomplete, into its domain name

## Installation

    npm install domain-from-partial-url

## Usage

The module exports a single function which will take a vaguely URL-like thing and spit out a domain. For example:

```js
var domainFromPartialUrl = require('domain-from-partial-url');

domainFromPartialUrl('example.com'); // example.com
domainFromPartialUrl('http://example.com'); // example.com
domainFromPartialUrl('example.com/someinfo.html'); // example.com
domainFromPartialUrl('https://example.com/lots/of/stuff/index.html'); // example.com
```

## Limitations

This module does not handle _all_ URLs, only what users are likely to often give as input (because that's what I happened to need this module for). In particular this means it does not handle:

* Ports
* Schemes other than `http://` or `https://`
* Username/passwords

I will gladly take patches to add code to handle these.

## License

LGPL 3.0+

## Author

AJ Jordan <alex@strugee.net>
