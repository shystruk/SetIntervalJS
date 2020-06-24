declare module 'set-interval' {
    class setInterval {
        /**
         * Start an interval.
         * @param fn Function to call every `interval`.
         * @param interval Interval to call `fn` in miliseconds
         * @param key Key of this interval. Pass this to `setInterval#end` to stop the interval.
         */
        start(fn: () => any, interval: number, key: string) : void
        /**
         * Stop an interval
         * @param key Key that maps to an interval.
         */
        stop(key: string): void
    }
    var out : setInterval;
    export default out;
}