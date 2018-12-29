# Adding Jasmine Chai/Mocha Tests to your project

### Projected Time

Example: 30-45 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)

### Motivation

Learn to use more than one testing tool for flexibility.

### Objectives

**Participants will be able to:**

- create a testing structure
- create assertion functions
- Generate, display and watch tests
- Create mocks, spies, and stubs for their application

### Specific Things To Teach

- [Jasmine](https://jasmine.github.io/index.html) (testing structure, assertion functions, watch test,  and mock)
  - install Jasmine
  - create tests using toBe, beforeEach, afterEach
  - Angular support suggest using jasmine for testing
- [Mocha](https://mochajs.org/)
  - install Mocha
  - create tests using assert
- [Chai](https://www.chaijs.com/)
  - install Chai
  - require library for assertions

### Materials

- [Jasmine Testing Slideshow](https://docs.google.com/presentation/d/1V9WEprK9j61V0S1lYtcJOXNTDMpziVMyUKHuMhpP1W0/edit?usp=sharing)

### Lesson

#### Jasmine Test
Jasmine test are BDD. You should write the test first then construct code to pass the test. If developers don't start with test it can be more time consuming to write them later.

**install jasmine**

`npm install --global jasmine`

**initialize project**

`jasmine init`

`node node_modules/jasmine/bin/jasmine init`

**create test files** in the "./spec" folder create files that end with "spec.js" so that jasmine knows which files are the test files. For example `string-test-spec.js`.

**start test** with `npm test` in the root project directory after including `"test": "jasmine"` to the package.json scripts.

**1st test**, `describe` is function that takes 2 arguments ("STRING", FUNCTION(){}) and multiple `it` statements. Inside describe `it` will contain the test statements. The testing happens in the line `expect(WORD.length == 4).toBe(true);`. Good test in jasmine should read like a sentence. `expect` and `toBe` must be true or the test will fail.

```javascript
describe("Testing string that",function(){
    it("contains 4 letters", function(){
        WORD = "word";
        expect(WORD.length == 4).toBe(true);
    });
});
```

**multiple `it` statements** can use the same variables if they are declared under `describe` scope.

```javascript
describe("Testing string WORD",function(){
	let WORD = "supertestinghasbegun" // failing from the start
	
    it("contains 4 letters", function(){
        WORD = "word";

        expect(WORD.length == 4).toBe(true);
	}); 
	
    it("must be null",function(){
        WORD = '';

        expect(WORD == '').toBe(true);
    })
});
```
#### Mocha Test
**install Mocha**

`npm install --global mocha`

**initialize Mocha file by file**

The `.js` file that will be using mocha must require it at the top like this `const assert = require('assert');` and be placed in the `./test` folder so Mocha can apply the test.

**how to test**

`npm test` after adding `"test":"mocha"` to the package.json scripts.

**1st test**

`describe` and `it` functions work similar to jasmine's same named functions.  
```javascript
var assert = require('assert');

describe('Mocha String Test', function () {
 it('should return the exact number of characters in a string', function () {
        assert.equal("Hello".length, 4);
	});
	
 it('should return first character of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});
```
When calling `assert.equal()` mocha expects the value to be true or else the test will fail.

Mocha will allow you the developer to use other assert libraries. Chai has an assert library that could be used instead, but that does require Chai to be installed. This gives you the developer choice and flexibility.

**setting up Chai assert**
```javascript
const assert = require("chai").assert;
```


### Common Mistakes / Misconceptions

Not all testing libraries are created the same. These libraries have different and overlapping functionality.
- Jasmine has test structure, assertions, displays test results, and spies.
- Mocha displays test results
- Chai is an assertion library that can be used with Mocha.

### Guided Practice

Have the apprentices work with you as you do something.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Apprentices can try to do this other thing.


### Check for Understanding

Some ideas: have apprentices summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
