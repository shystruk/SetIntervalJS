import test from 'ava';
import SetInterval from './src/SetInterval';

test.cb('start interval', t => {
    function callback() {
        t.true(true);
    }

    SetInterval.start(callback, 1000);

    setTimeout(t.end);
});

test.cb('clear interval', t => {
    function callback() {
        t.true(true);
    }

    SetInterval.start(callback, 1000);
    SetInterval.clear();

    t.is(SetInterval.timer, void 0);

    setTimeout(t.end);
});

