# Utils Project

Every project of any size grows a utils module that contains random helpers. Many of these outgrow their origins and become a shared general-purpose library, such as [Lodash](https://lodash.com/docs/4.17.15) in JS or ActiveSupport in Ruby.

## Objective

Create your own mini utils file and implement the following functions from lodash:

### Array

- [intersection](https://lodash.com/docs/4.17.15#intersection)
- [difference](https://lodash.com/docs/4.17.15#difference)
- [uniq](https://lodash.com/docs/4.17.15#uniq)

### Map

- [mapValues](https://lodash.com/docs/4.17.15#mapValues): their impl uses plain objects. I suggest you use the JS Map

### String

- [template](https://lodash.com/docs/4.17.15#template) - similar to the built-in backtick strings of ES6

In addition, choose **three more functions** from the (long) list in the [lodash docs](https://lodash.com/docs/4.17.15).

## Additional Requirements

- Each function should have a set of Jest unit tests to demonstrate it's correct
- Don't forget about edgecases like someone passing in `undefined` or empty input

### Bonus

- Measure your testing coverage with an open source tool so you can see if you missed any test coverage
- Publish it as a real NPM package, with a unique package name such as `yourname-utils` and nice README so it looks nice on NPM
