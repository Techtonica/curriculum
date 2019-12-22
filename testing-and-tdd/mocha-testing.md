# Adding Chai/Mocha Tests to your project

### Projected Time

30 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)
- [Jasmine Testing](jasmine-testing.md)

### Motivation

Learn to use another testing tool for flexibility.

### Objectives

*Participants will be able to:*

- Create a testing structure in Mocha
- Create assertion functions using Mocha / Chai
- Generate, display and watch tests

### Specific Things to Learn

- [Mocha](https://mochajs.org/)
  - install Mocha
  - create tests using assert
- [Chai](https://www.chaijs.com/)
  - install Chai
  - require library for assertions

### Materials

- [Jasmine and Mocha/Chai Testing Slideshow](https://docs.google.com/presentation/d/1jMkVbUkZS40z7kAoC1mPIt8RwfF8-GRL8oeee25UzYw)
    - * Note: skip straight ot the "Mocha / Chai" section of the slideshow, since we went over Jasmine in the previous lesson!

### Lesson

#### Mocha Test
*install Mocha*
- `npm install --global mocha`

*create test files*
- A different `NAME.js` file that will be testing with mocha must be placed in the `./test` folder so Mocha can apply the test.

*start test*
- Add a test script to `package.json` like this `"test":"mocha"`. Now when you run `npm test` from the command line it will run the mocha tests.
- `describe` and `it` functions work similar to jasmine's similarly named functions.  
```javascript
var assert = require('assert');

describe('Mocha String Test', function () {
 it('should return the exact number of characters in a string', function () {
        assert.equal("Hello".length, 4); // this line will fail
	});
	
 it('should return first character of the string', function () {
        assert.equal("Hello".charAt(0), 'H'); // this line will pass
    });
});
```
- When calling `assert.equal()` mocha expects the value to be true or else the test will fail.
- Mocha will allow you, the developer, to use other assert libraries. Chai has an assert library that could be used instead, but that does require Chai to be installed. This gives you the developer choice and flexibility.

#### Chai Test
*install Chai*
- `npm install --save-dev chai`

*setting up Chai*
- `assert` test for truthiness in the statement.

```javascript
const assert = require("chai").assert;

assert('hi' !== 'good-bye', 'Hi is not good-bye');
```

### Common Mistakes / Misconceptions

1. Not all testing libraries are created the same. These libraries have different and overlapping functionality.
   - Jasmine has test structure, assertions, displays test results, and spies.
   - Mocha displays test results
   - Chai is an assertion library that can be used with Mocha.
4. `expect` inside of asynchronous code is ignored, therefore passing. (false positive)
- Mocha also allows you to `return Promise`... inside the function which gives a similar signal to the test engine to wait for async code.

### Guided Practice
1. Create a different project using `npm init`.
2. Install `mocha`, and `chai` as `devDependencies`.
4. Create a function in a `yourFunction.js` file. Same as above do not complete the function.
5. With Mocha/Chai test that `yourFunction.js` returns a value, use chai `assert`.
6. Complete the function so that it returns a value and passes the test.

### Independent Practice

*Instructions:* Write your own test that validates an email address was passed to the function `userEmail(varString)`. The function is passed a string, so create this function and test it.

### Challenge

No challenge yet!

### Supplemental Materials 
- Chai and Mocha blog post, [link](https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71)
  - Accompanied by this github repo of tests, [link](https://github.com/npatro/javascript-unit-testing-with-mocha)
  - A quick and complete guide to Mocha testing" by Glad Chinda, [link]( https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d)
  
- Video series by "WebDevJourney"
  - [Node JS - Authentication - Login/Logout Mocha Testing by Web Dev Journey](https://youtu.be/2q62EhBy0sE)
  - github repo with mocha test included, [link](https://github.com/webdevjourneyWDJ/Todo-API).


### Check for Understanding

*Question:* What are Mocha and Chai, and how do they work in your project? How do they differ from Jasmine?

*Exercise:* Each student must pick a matcher, like `toBeNull()`. Then describe that matcher to the class and how it should be used. Each student must select a different picker.
