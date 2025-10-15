# Adding Chai/Mocha Tests to your project
> **Note:** For an overview of how this framework compares to others, see the [General Testing Framework Comparison Chart](testing-and-tdd.md).

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](../testing-and-tdd/testing-and-tdd.md)
- [Jasmine Testing](../testing-and-tdd/jasmine-testing.md)

### Motivation

Learn to use another testing tool for flexibility.

### Objectives

_Participants will be able to:_

- Create a testing structure in Mocha
- Create assertion functions using Mocha / Chai
- Generate, display and watch tests

### Specific Things to Learn

- [Mocha](https://mochajs.org/)
  - install Mocha
  - create tests using assert
- [Chai](https://www.chaijs.com/)
  - install Chai
  - use Chai for assertions

### Lesson

#### Mocha vs. Jasmine

Both Mocha and Jasmine are popular JavaScript testing frameworks for writing BDD (Behavior-Driven Development) tests. So, why might you choose one over the other?

_Jasmine:_ Jasmine attempts to provide everything that a developer would need in a testing framework. It does not need the browser, the DOM, or any JavaScript framework to work, so it's simple to get up and running.

_Mocha:_ Mocha does not claim to be a complete testing framework. It is intended to be extended with other frameworks, such as Chai. People like it for its flexibility. It runs on Node and in the browser.

```javascript
//mocha
expect('bunny').to.not.equal('rabbit');

//jasmine
expect('bunny').not.toEqual('rabbit');
```

At the end of the day, both Jasmine and Mocha are popular testing frameworks that many companies use. There is no wrong answer: the testing framework that you choose for projects is up to you.

#### Mocha Test

Let's get started by setting up a new project with Mocha.

_Create a new project_

- `mkdir mocha-practice` - create a folder for your new project
- `cd mocha-practice` - change directories to that folder
- `npm init --yes` - make the `package.json` file

_Install Mocha_

- `npm install --save-dev mocha`
- Note: remember the discussion of "global" vs. "local" installation in the [Jasmine lesson](../testing-and-tdd/jasmine-testing.md)? In this case, we are opting to install Mocha _locally_ first. This ensures that everyone running the project will use the same version of Mocha. However, you can also install Mocha globally, if you like. [See docs](https://mochajs.org/#installation).

_Create Test Files_

- `mkdir test` - your tests should live in this folder, so that mocha knows where to find them
- `touch test/myTest.js` - add a test file to the `test` directory

_Start Test_

- To run Mocha from the local installation, edit the "test" line in the "package.json" file to say: `"test": "mocha"`
- Run `npm test`! Since you have no tests written yet, you should see something like this:

```
> mocha



  0 passing (1ms)
```

_Syntax_

- `describe` and `it` functions work like Jasmine's similarly named functions:

```javascript
const assert = require('assert');

describe('Mocha String Test', function () {
  it('should return the exact number of characters in a string', function () {
    assert.equal('Hello'.length, 4); // this line will fail
  });

  it('should return first character of the string', function () {
    assert.equal('Hello'.charAt(0), 'H'); // this line will pass
  });
});
```

- Add the above code to your `test.js` file, and run the tests again. You should now see one passing test, and one failing test.

```
Mocha String Test
  1) should return the exact number of characters in a string
  ✓ should return first character of the string


1 passing (8ms)
1 failing

1) Mocha String Test
     should return the exact number of characters in a string:

    AssertionError [ERR_ASSERTION]: 5 == 4
    + expected - actual

    -5
    +4

    at Context.<anonymous> (test/myTest.js:5:16)
```

- When calling `assert.equal(a, b)` mocha expects the values to be equivalent, or else the test will fail.
- If you need to test asynchronous code, Mocha makes it very simple using callbacks. All you need to do is pass a callback function (usually named `done`) to `it` function and invoke the callback function after your test is complete.

```javascript
var assert = require('assert');

function asyncFunction(stringToTest, callback) {
  setTimeout(function () {
    callback(stringToTest.charAt(0) === 'H');
  }, 1);
}

// Note: setTimeout has been used to simulate the async behavior
// Warn: Using setTimeout is not the best practice since it's execution time is unpredictable or unreliable

describe('Mocha String Test', function () {
  it('should return first character of the string', function (done) {
    asyncFunction('Hello', function (isValid) {
      assert.equal(isValid, true);
      done();
    });
  });
});
```

To learn more about testing asynchronous code with Mocha, see the [docs](https://mochajs.org/#asynchronous-code).

- Mocha will allow you, the developer, to use other assert libraries, like Chai! This gives you choice and flexibility.

#### Chai Test

Let's install Chai, an assertion library commonly used with Mocha!

_install Chai_

- `npm install --save-dev chai`

_setting up Chai_

- You can now use Chai within your Mocha tests to make assertions. Chai provides a few different styles for making assertions. Let's take a quick look at each of them!
- [`assert`](https://www.chaijs.com/guide/styles/#assert): These statements typically take two arguments, and "assert" that something is truthful.

```javascript
const assert = require('chai').assert;

const foo = 'foo';

// Passing
assert.typeOf(foo, 'string');

// Failing - note that the third argument is an optional error message
assert.equal(foo, 'bar', 'foo equal `bar`');
```

- [`expect`](https://www.chaijs.com/guide/styles/#expect): "Expect" statements chain together assertions that feel like natural language

```javascript
const expect = require('chai').expect;

const foo = 'foo';

// Passing
expect(foo).to.be.a('string');

// Failing
expect(foo).to.equal('bar');
```

- [`should`](https://www.chaijs.com/guide/styles/#should): "Should" statements are similar to "expect", but start with the start each chain with a `should`

```javascript
const should = require('chai').should();

const foo = 'foo';

// Passing
foo.should.be.a('string');

// Failing
foo.should.equal('bar');
```

Note: If you like this style, you can use the [should library](https://www.npmjs.com/package/should) with Mocha, as that is a common reason to use it over Jasmine.

- As you may have noticed, Chai provides a lot of flexibility in how you structure assertions! For personal projects, choose the style that you prefer. When working in an existing codebase with Chai, use the style of the surrounding code.

### Common Mistakes / Misconceptions

1. Not all testing libraries are created the same. These libraries have different and overlapping functionality.
   - Jasmine is an out-of-the-box library that has test structure, assertions, displays test results, and spies.
   - Mocha is an extensible testing framework that provides a lot of flexibility
   - Chai is an assertion library that can be used with Mocha.

### Guided Practice

_FizzBuzz (again!)_
Within your Mocha project, re-write the FizzBuzz test from the [Jasmine Testing exercises](../testing-and-tdd/jasmine-testing.md#guided-practice), using `assert` syntax. Refer to the [docs](https://www.chaijs.com/api/assert/) as needed to find the matchers you need. Ensure that the test passes.

<details>
<summary>Check your work</summary>
<pre><code>
const fizzBuzz = require('../src/fizzBuzz');
const assert = require('chai').assert;

describe("fizzBuzz", function() {
it("should be defined", function() {
assert.exists(fizzBuzz);
});

it("should return 'fizz' when given a multiple of 3", function() {
assert(fizzBuzz(3), "fizz");
assert(fizzBuzz(6), "fizz");
});

it("should return 'buzz' when given a multiple of 5", function() {
assert(fizzBuzz(5), "buzz");
assert(fizzBuzz(10), "buzz");
});

it("should return 'fizzbuzz' when given a multiple of 3 and 5", function() {
assert(fizzBuzz(15), "fizzbuzz");
assert(fizzBuzz(30), "fizzbuzz");
});
});
</code></pre>

</details>

### Independent Practice

1. Re-implement Challenge 1, "Convert Inches to Meters" from [Basic JS Practice](../javascript/basic-js-practice.md) in a TDD Style. Use Chai's `expect` style assertions, referring to the [docs](https://www.chaijs.com/api/bdd/) as needed. Add assertions that:
   - The values returned by `metersToInches` are floats
   - The values returned by `metersToInches` have the correct results:

| input                | value     |
| -------------------- | --------- |
| metersToInches(0)    | 0         |
| metersToInches(1)    | 39.3701   |
| metersToInches(1.5)  | 59.05515  |
| metersToInches(15.6) | 614.17356 |

2. We're going to define a JavaScript object, TDD style! Use any Chai assertion style. After each new test, make the test pass.
   - In a new test file, define an empty object. We'll add keys and values to the object as we write our tests.
   - Write a test that the object has all keys 'cats', 'dogs', and 'reptiles'.
   - Write a test that the object does not have the property 'rabbits',
   - Write a test that the value at 'cats' is an array
   - Write a test that the 'cats' array contains contains the string "Mr. Snuffalufagus"
   - Write a test that the value at 'dogs' equals `['Fido', 'Fluffy', 'Roxy']` (Hint: if the `equal` assertion fails, take a look at [this article](https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d))
   - Write a test that 'lizards' is an empty array

### Challenge

Do the [Mocha](https://github.com/mochajs/mocha/tree/master/test) and [Chai](https://github.com/chaijs/chai/tree/master/test) projects have their own internal tests? Read them and see how they are used.

### Supplemental Materials

- Chai and Mocha blog post, [link](https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71)

  - Accompanied by this github repo of tests, [Unit Test JS with Mocha](https://github.com/ncpatro/javascript-unit-testing-with-mocha)
  - A quick and complete guide to Mocha testing" by Glad Chinda, [link](https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d)

- Video series by "WebDevJourney"
  - [Node JS - Authentication - Login/Logout Mocha Testing by Web Dev Journey](https://youtu.be/2q62EhBy0sE)
  - github repo with mocha test included, [link](https://github.com/webdevjourneyWDJ/Todo-API).

### Check for Understanding

_Question:_ What are Mocha and Chai, and how do they work in your project? How do they differ from Jasmine?

_Exercise:_ Every student should pick a Chai assertion, like `.to.have.lengthOf`. Describe that matcher to the class and how it should be used.
