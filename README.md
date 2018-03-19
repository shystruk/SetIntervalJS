# SetIntervalJS [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?hashtags=javascript&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&text=No%20more%20variable%20needed%20for%20clearInterval()%20%F0%9F%91%8C%F0%9F%98%80&tw_p=tweetbutton&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fset-interval&via=shystrukk) #
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![Gemnasium](https://img.shields.io/gemnasium/mathiasbynens/he.svg)](https://github.com/shystruk/SetIntervalJS) [![Build Status](https://travis-ci.org/shystruk/SetIntervalJS.svg?branch=master)](https://travis-ci.org/shystruk/SetIntervalJS) [![npm version](https://badge.fury.io/js/set-interval.svg)](https://badge.fury.io/js/set-interval)

SetIntervalJS is a constructor which hide inside reference to setInterval() for cleaner usage. It helps to make your code cleaner and there is no need to have more variables for clearInterval() 👌. SetIntervalJS has two methods `start` and `clear`. `start` method calls a function at specified intervals (in milliseconds) and `clear` clear the interval.

## Getting SetIntervalJS ##
#### npm
`npm install --save set-interval`

#### yarn
`yarn add set-interval --save`

## Examples ##
```javascript
SetInterval.start(function, milliseconds)
```

### Basic example ###
```javascript
import SetInterval from 'set-interval'

SetInterval.start(callback, 1000)
SetInterval.clear()
```

### Multiple instances ###
```javascript
import SetInterval from 'set-interval'

const [SetInterval_2, SetInterval_3] = Object.assign({}, SetInterval)


SetInterval.start(callback, 1000)
SetInterval_2.start(callback_2, 1000)
SetInterval_3.start(callback_3, 1000)

SetInterval.clear()
SetInterval_2.clear()
SetInterval_3.clear()
```

## Contributing

Any contributions you make **are greatly appreciated**.

Please read the [Contributions Guidelines](CONTRIBUTING.md) before submitting a PR.

## License

MIT © [Vasyl Stokolosa](https://about.me/shystruk)
