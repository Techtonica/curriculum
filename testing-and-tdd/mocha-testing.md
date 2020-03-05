# Adding Chai/Mocha Tests to your project

### Projected Time

45 minutes

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
  - use Chai for assertions

### Materials

- [Mocha/Chai Testing Slideshow](https://docs.google.com/presentation/d/1JGpTdQaYuBxbH3QTnZvTW4-ozYD_jf9OTifUzv-MIOg/edit?usp=sharing)

### Lesson

#### Mocha vs. Jasmine

Both Mocha and Jasmine are popular JavaScript testing frameworks for writing BDD (Behavior-Driven Development) tests. So, why might you choose one other the other?

*Jasmine:* Jasmine attempts to provide everything that a developer would need in a testing framework. It does not need the browser, the DOM, or any JavaScript framework to work, so it's simple to get up and running.

*Mocha:* Mocha does not claim to be a complete testing framework. It is intended to be extended with other frameworks, such as Chai. People like it for its flexibility. It runs on Node and in the browser.

```javascript
//mocha
expect('bunny').to.not.equal('rabbit')

//jasmine
expect('bunny').not.toEqual('rabbit')
```

At the end of the day, both Jasmine and Mocha are popular testing frameworks that many companies use. There is no wrong answer: the testing framework that you choose for projects is up to you.


#### Mocha Test

Let's get started by setting up a new project with Mocha.

*Create a new project*
- `mkdir mocha-practice` - create a folder for your new project
- `cd mocha-practice` - change directories to that folder
- `npm init --yes` - make the `package.json` file

*Install Mocha*
- `npm install --save-dev mocha`
- Note: remember the discussion of "global" vs. "local" installation in the [Jasmine lesson](./jasmine-testing.md)? In this case, we are opting to install Mocha *locally* first. This ensures that everyone running the project will use the same version of Mocha. However, you can also install Mocha globally, if you like. [See docs](https://mochajs.org/#installation).

*Create Test Files*
- `mkdir test` - your tests should live in this folder, so that mocha knows where to find them
- `touch test/myTest.js` - add a test file to the `test` directory

*Start Test*
- To run Mocha from the local installation, edit the "test" line in the "package.json" file to say: `"test": "mocha"`
- Run `npm test`! Since you have no tests written yet, you should see something like this:
```
> mocha



  0 passing (1ms)
```

*Syntax*
- `describe` and `it` functions work like Jasmine's similarly named functions:
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
- Mocha will allow you, the developer, to use other assert libraries, like Chai! This gives you choice and flexibility.

#### Chai Test

Let's install Chai, an assertion library commonly used with Mocha!

*install Chai*
- `npm install --save-dev chai`

*setting up Chai*
- You can now use Chai within your Mocha tests to make assertions. Chai provides a few different styles for making assertions. Let's take a quick look at each of them!
- [`assert`](https://www.chaijs.com/guide/styles/#assert): These statements typically take two arguments, and "assert" that something is truthful.

```javascript
const assert = require("chai").assert;

const foo = "foo";

// Passing
assert.typeOf(foo, 'string');

// Failing - note that the third argument is an optional error message
assert.equal(foo, 'bar', 'foo equal `bar`');
```
- [`expect`](https://www.chaijs.com/guide/styles/#expect): "Expect" statements chain together assertions that feel like natural language
```javascript
const expect = require("chai").expect;

const foo = "foo";

// Passing
expect(foo).to.be.a('string');

// Failing
expect(foo).to.equal('bar');
```
- [`should`](https://www.chaijs.com/guide/styles/#should): "Should" statements are similar to "expect", but start with the start each chain with a `should`
```javascript
const should = require("chai").should();

const foo = "foo";

// Passing
foo.should.be.a('string');

// Failing
foo.should.equal('bar');
```

- As you may have noticed, Chai provides a lot of flexibility in how you structure assertions! For personal projects, choose the style that you prefer. When working in an existing codebase with Chai, use the style of the surrounding code.

### Common Mistakes / Misconceptions

1. Not all testing libraries are created the same. These libraries have different and overlapping functionality.
   - Jasmine is an out-of-the-box library that has test structure, assertions, displays test results, and spies.
   - Mocha is an extensible testing framework that provides a lot of flexibility
   - Chai is an assertion library that can be used with Mocha.
2. Assertions inside of asynchronous code is ignored, therefore passing. This can lead to a false positive.
   - Mocha also allows you to `return Promise` inside the function which gives a similar signal to the test engine to wait for async code.

### Guided Practice

*FizzBuzz (again!)*
Within your Mocha project, re-write the FizzBuzz test from the [Jasmine Testing exercises](./jasmine-testing.md#guided-practice), using `assert` syntax. Refer to the [docs](https://www.chaijs.com/api/assert/) as needed to find the matchers you need. Ensure that the test passes.

<details>
<summary>Check your work</summary>
<pre><code>
const fizzBuzz = require('../src/fizzBuzz');
const assert = require('chai').assert;

describe("fizzBuzz", function(){
  it("should be defined", function(){
    assert.exists(fizzBuzz);
  });

  it("should return 'fizz' when given a multiple of 3", function(){
    assert(fizzBuzz(3), "fizz");
    assert(fizzBuzz(6), "fizz");
  });

  it("should return 'buzz' when given a multiple of 5", function(){
    assert(fizzBuzz(5), "buzz");
    assert(fizzBuzz(10), "buzz");
  });

  it("should return 'fizzbuzz' when given a multiple of 3 and 5", function(){
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

| input | value |
|---|---|
| metersToInches(0) | 0 |
| metersToInches(1) | 39.3701 |
| metersToInches(1.5) | 59.05515 |
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

*Exercise:* Every student should pick a Chai assertion, like `.to.have.lengthOf`. Describe that matcher to the class and how it should be used.
