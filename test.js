import test from 'ava';
import SetInterval from './src/SetInterval';

test.cb('start interval', t => {
	function callback() {
		t.true(true);
		t.is(typeof SetInterval.key['test'], number);
	}

	SetInterval.start(callback, 1000, 'test');

	setTimeout(t.end);
});

test.cb('clear interval', t => {
	function callback() {
		t.true(true);
	}

	SetInterval.start(callback, 1000, 'test');
	SetInterval.clear('test');

	t.is(SetInterval.key['test'], void 0);

	setTimeout(t.end);
});

test.cb('multiple instances', t => {
	function callback() {
		t.true(true);
	}

	function callback_2() {
		t.true(true);
	}

	function callback_3() {
		t.true(true);
		t.is(typeof SetInterval.key['test'], number);
		t.is(typeof SetInterval.key['test_2'], number);
		t.is(typeof SetInterval.key['test_3'], number);
	}

	SetInterval.start(callback, 1000, 'test');
	SetInterval.start(callback_2, 2000, 'test_2');
	SetInterval.start(callback_3, 3000, 'test_3');

	SetInterval.clear('test');
	SetInterval.clear('test_2');
	SetInterval.clear('test_3');

	t.is(SetInterval.key['test'], void 0);
	t.is(SetInterval.key['test_2'], void 0);
	t.is(SetInterval.key['test_3'], void 0);

	setTimeout(t.end);
});
