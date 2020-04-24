# SetIntervalJS [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?hashtags=javascript&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&text=No%20more%20variable%20needed%20for%20clearInterval()%20%F0%9F%91%8C%F0%9F%98%80&tw_p=tweetbutton&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fset-interval&via=shystrukk) #
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![Build Status](https://travis-ci.org/shystruk/SetIntervalJS.svg?branch=master)](https://travis-ci.org/shystruk/SetIntervalJS) [![npm version](https://badge.fury.io/js/set-interval.svg)](https://badge.fury.io/js/set-interval) [![Known Vulnerabilities](https://snyk.io/test/github/shystruk/SetIntervalJS/badge.svg?targetFile=package.json)](https://snyk.io/test/github/shystruk/SetIntervalJS?targetFile=package.json)

SetIntervalJS is a constructor which hide inside reference to setInterval() for cleaner usage. It helps to make your code cleaner and there is no need to have more variables for clearInterval() and you can clear interval anywhere you want👌.

## Getting SetIntervalJS ##
#### npm
`npm install --save set-interval`

#### yarn
`yarn add set-interval --save`

## Examples ##
```javascript
SetInterval.start(function, milliseconds, key_string)
```

### Basic example ###
```javascript
import SetInterval from 'set-interval'

SetInterval.start(callback, 1000, 'test')
SetInterval.clear('test')
```

### Multiple instances ###
```javascript
// -> ./start.js
import SetInterval from 'set-interval'

SetInterval.start(callback, 1000, 'test')
SetInterval.start(callback_2, 1000, 'test_2')
SetInterval.start(callback_3, 1000, 'test_3')


// -> ./clear.js
import SetInterval from 'set-interval'

SetInterval.clear('test')
SetInterval.clear('test_2')
SetInterval.clear('test_3')
```


## API ##
### SetInterval.start(callback, milliseconds, key_string) ###

#### callback ####
Type: `function` <br>
Function that gets called in each milliseconds interval

#### milliseconds ####
Type: `number` <br>
Interval time in which callback function gets called

#### key_string ####
Type: `string` <br>
Key name for which interval will be referenced


### SetInterval.clear(key_string) ###
#### key_string ####
Type: `string` <br>
Key name which was passed to .start method


## Contributing

Any contributions you make **are greatly appreciated**.

Please read the [Contributions Guidelines](CONTRIBUTING.md) before submitting a PR.

## License

MIT © [Vasyl Stokolosa](https://about.me/shystruk)
