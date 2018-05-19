/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

const vows = require('perjury'),
      assert = vows.assert;

function domainCheck(str) {
	return {
		topic: function(domainFromPartialUrl) {
			debugger;
			return domainFromPartialUrl(str);
		},
		'it returns a bare domain': function(err, domain) {
			assert.isString(domain);
			assert.equal(domain, 'example.com');
		}
	};
}

vows.describe('domain-from-partial-url module').addBatch({
	'when we require the module': {
		topic: function() {
			return require('./index');
		},
		'it works': function(err, domainFromPartialUrl) {
			assert.ifError(err);
			assert.isFunction(domainFromPartialUrl);
		},
		'and we pass it just a domain': domainCheck('example.com'),
		'and we pass it a bare domain plus username and password': domainCheck('user:pass@example.com'),
		'and we pass it a URL with an HTTP scheme': domainCheck('http://example.com'),
		'and we pass it a URL with an HTTPS scheme': domainCheck('https://example.com'),
		'and we pass it a URL with a non-HTTP scheme': domainCheck('irc://example.com'),
		'and we pass it a URL with a scheme that doesn\'t use ://': domainCheck('xmpp:example.com'),
		'and we pass it a URL with a scheme that doesn\'t use :// with a query string at the end': domainCheck('xmpp:example.com?room=muc@conference.example.com'),
		'and we pass it a URL with a username': domainCheck('http://user@example.com'),
		'and we pass it a URL with a username and password': domainCheck('http://user:password@example.com'),
		'and we pass it a URL with a trailing slash': domainCheck('example.com/'),
		'and we pass it a URL with a trailing slash and an HTTP scheme': domainCheck('http://example.com/'),
		'and we pass it a URL with a path': domainCheck('example.com/index.html'),
		'and we pass it a URL with a path and an HTTP scheme': domainCheck('http://example.com/index.html'),
		'and we pass it a URL with a longer path': domainCheck('example.com/someinfo/index.html'),
		'and we pass it a URL with a longer path and an HTTP scheme': domainCheck('http://example.com/someinfo/index.html'),
		'and we pass it a domain plus a port': domainCheck('example.com:1337'),
		'and we pass it a domain plus a username, password and port': domainCheck('user:pass@example.com:1337'),
		'and we pass it a URL with an HTTP scheme and a port': domainCheck('http://example.com:1337'),
		'and we pass it a URL with an HTTPS scheme and a port': domainCheck('https://example.com:1337'),
		'and we pass it a URL with a username and a port': domainCheck('http://user@example.com:1337'),
		'and we pass it a URL with a username and password and a port': domainCheck('http://user:password@example.com:1337'),
		'and we pass it a URL with a trailing slash and a port': domainCheck('example.com:1337/'),
		'and we pass it a URL with a trailing slash, an HTTP scheme and a port': domainCheck('http://example.com:1337/'),
		'and we pass it a URL with a path and a port': domainCheck('example.com:1337/index.html'),
		'and we pass it a URL with a path, an HTTP scheme and a port': domainCheck('http://example.com:1337/index.html'),
		'and we pass it a URL with a longer path and a port': domainCheck('example.com:1337/someinfo/index.html'),
		'and we pass it a URL with a longer path, an HTTP scheme and a port': domainCheck('http://example.com:1337/someinfo/index.html')
	}
}).export(module);
