/*
 Copyright (c) Vasyl Stokolosa https://github.com/shystruk
 License: MIT - https://opensource.org/licenses/MIT
 https://github.com/shystruk/SetIntervalJS
 */
(function (f) {
	if (typeof exports === 'object' && typeof module !== 'undefined') {
		module.exports = f();
	} else if (typeof define === 'function' && define.amd) {
		define([], f);
	} else {
		var g;

		if (typeof window !== 'undefined') {
			g = window;
		} else if (typeof global !== 'undefined') {
			g = global;
		} else if (typeof self !== 'undefined') {
			g = self;
		} else {
			g = this;
		}

		g.myModule = f();
	}
})(function () {
	function SetInterval() {
		this.key = {};

		/**
		 * @param {Function} fn
		 * @param {Number} interval
		 * @param {String} key
		 */
		this.start = function start(fn, interval, key) {
			if (!this.key[key]) {
				this.key[key] = setInterval(function () {
					fn();
				}, interval);
			}
		}

		/**
		 * @param {String} key
		 */
		this.clear = function clear(key) {
			if (this.key[key]) {
				clearInterval(this.key[key]);
				delete this.key[key];
			}
		}
	}

	return new SetInterval();
});
