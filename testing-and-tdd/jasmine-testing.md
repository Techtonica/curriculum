# Adding Jasmine Tests to your project

### Projected Time

30 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)

### Motivation

Learn a commonly used testing tool.

Jasmine is a Behavior Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.[(stackshare.io)](https://stackshare.io/jasmine)

**Which companies use Jasmine testing?**
- [Coderus](https://www.coderus.com/)
- [GrowthHackers](https://growthhackers.com/)
[(stackshare.io)](https://stackshare.io/jasmine)

### Objectives

*Participants will be able to:*

- Create a testing structure with Jasmine
- Create assertion functions
- Generate, display and watch tests

### Specific Things to Learn

- [Jasmine](https://jasmine.github.io/index.html)
  - install Jasmine
  - create tests using `toBe`, `beforeEach`, `afterEach`

### Materials

- [Jasmine Testing Slideshow](https://docs.google.com/presentation/d/1V9WEprK9j61V0S1lYtcJOXNTDMpziVMyUKHuMhpP1W0/edit?usp=sharing)

### Lesson

#### Jasmine Test
Jasmine is a behavior-driven development (BDD) for testing JavaScript code. Jasmine has no external dependencies and does not require a DOM. 

You should write the test first then construct code to pass the test. If developers don't start with test it can be more time consuming to write them later.

*install jasmine*
- `npm install --global jasmine` will install jasmine globally.
- `npm install --save-dev jasmine` for testing in your future projects. This saves Jasmine in the project you are using so that it can be shared with others when they clone the repository.

*initialize project*
- `jasmine init` will work if jasmine was installed globably.
- `node node_modules/jasmine/bin/jasmine init` will work if jasmine was installed locally.

*create files* 
- In the "./spec" folder create test files that end with "spec.js" so that jasmine knows which files are the test files. For example `string.test.spec.js`.

*start test* 
- Use `npm test` on the command line. Make sure to run it from the root project directory after including `"test": "jasmine"` to the `package.json` scripts.

- `describe` is a function that takes 2 arguments ("STRING", FUNCTION(){}) and multiple `it` statements. Inside `describe` `it` will contain the test statements (also known as "specs"). The testing happens in the line `expect(WORD.length == 4).toBe(true);`. Good test in jasmine should read like a sentence. `expect` and `toBe` must be true or the test will fail.
```javascript
describe("Testing string that",function(){
    it("contains 4 letters", function(){
        WORD = "word";
        expect(WORD.length == 4).toBe(true);
    });
});
```
- *multiple `it` statements* can use the same variables if they are declared under the `describe` scope.
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
*including packages in jasmine test* 
- Require packages you need in your test at the top of the spec file. Files/modules that are being tested need to have a `module.exports` in them. Then they can be required in the spec file.
```javascript
// ...spec.js
const app = require('./server');
const config = require('./config');
// Test app.post or something that must pass test
``` 

### Common Mistakes / Misconceptions

1. You can get "false positives" and "false negatives" in tests.
2. A test with no exceptions in it will pass. (false positive)
3. Pay attention when writing test for Synchronous vs Asynchronous code. The testing engine might complete before the code has completed running, giving you unreliable tests.
4. Expect inside of asynchronous code is ignored, therefore passing. (false positive)
- Solve this problem ( in jasmine and mocha ) with a parameter like `done`. Signaling to the test engine this is asynchronous code and it must wait. Mocha will also allow `return Promise`... inside the function which gives a similar signal to the test engine to wait for async code.

### Guided Practice
1. Create a project using `npm init`.
2. Install `jasmine` as `devDependencies`
3. Create a function in a `myFunction.js` file. Do not complete the function. We will start with the function failing our test.
4. Setup a test file that will test `myFunction.js` returns the expected value.
5. Complete the function so that it returns a value and passes the test.

### Independent Practice

*Instructions:* Write your own test that validates an email address was passed to the function `userEmail(varString)`. The function is passed a string, so create this function and test it.

### Challenge

*Instructions:* Make your independent practice test run in the browser. The challenge is the environment must be modified for this test to run in the browser instead of the command line.

### Supplemental Materials 
- [Automated Testing with Jasmine](https://atom-morgan.github.io/automated-testing/)
- JS testing with Jasmine blog post, [link](https://automationpanda.com/2018/01/26/javascript-testing-with-jasmine/#project_structure)
- Video by Dylan C. Israel [Unit Testing in JavaScript and Jasmine](https://www.youtube.com/watch?v=h2eWfvcAOTI) *starts at 12:00 minutes to show mocha test.*


### Check for Understanding

*Question:* What is Jasmine and how does it work in your project?

*Exercise:* Each student must pick a matcher, like `toBeNull()`. Then describe that matcher to the class and how it should be used. Each student must select a different picker.
