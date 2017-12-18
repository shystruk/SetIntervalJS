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

test.cb('multiple instances', t => {
    const SetInterval_2 = Object.assign({}, SetInterval);
    const SetInterval_3 = Object.assign({}, SetInterval);

    function callback_2() {
        t.true(true);
    }

    function callback_3() {
        t.true(true);
    }

    SetInterval_2.start(callback_2, 1000);
    SetInterval_3.start(callback_3, 1000);

    setTimeout(t.end);
});

