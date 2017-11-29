/*
 Copyright (c) 2017 Vasyl Stokolosa https://github.com/shystruk
 License: MIT - https://opensource.org/licenses/MIT
 https://github.com/shystruk/SetIntervalJS
 */
(function(f) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = f();
    } else if (typeof define === 'function' && define.amd) {
        define([],f);
    } else {
        var g;

        if (typeof window !== 'undefined') {
            g = window;
        } else if(typeof global !== 'undefined') {
            g = global;
        } else if(typeof self !== 'undefined') {
            g = self;
        } else {
            g = this;
        }

        g.myModule = f();
    }
})(function() {
    var define,module,exports;

    function SetInterval() {
        this.start = function (fn, interval) {
            if (!this.timer) {
                this.timer = setInterval(function () {
                    fn();
                }, interval);
            }
        };

        this.clear = function () {
            clearInterval(this.timer);
            this.timer = void 0;
        }
    }

    return new SetInterval();
});
