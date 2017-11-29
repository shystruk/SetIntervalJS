# SetIntervalJS #
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/set-interval)

SetIntervalJS is a constructor which hide inside reference to setInterval() for cleaner usage. It helps to make your code cleaner and there is no need to have more variables for clearInterval() 👌. SetIntervalJS has two methods `start` and `clear`. `start` method calls a function at specified intervals (in milliseconds) and `clear` clear the interval.

## Getting SetIntervalJS ##
`npm install set-interval` or `yarn add set-interval`

## Examples ##
### Basic example ###
```
import SetInterval from 'set-interval'
```

#### Start interval ####
```
SetInterval.start(callback, 1000)
```
#### Clear interval ####
```
SetInterval.clear()
```

### Multiple instances ###
```
const SetInerval_2 = Object.assign({}, SetInterval)
const SetInerval_3 = Object.assign({}, SetInterval)

SetInterval.start(callback, 1000)
SetInerval_2.start(callback_2, 1000)
SetInerval_3.start(callback_3, 1000)

SetInterval.clear()
SetInterval_2.clear()
SetInterval_3.clear()
```
