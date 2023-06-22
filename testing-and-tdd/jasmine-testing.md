# Adding Jasmine Tests to your project

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)

### Motivation

Learn a commonly used testing tool.

Jasmine is a Behavior-Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.[(stackshare.io)](https://stackshare.io/jasmine)

**Which companies use Jasmine testing?**

- [Coderus](https://www.coderus.com/)
- [GrowthHackers](https://growthhackers.com/)
  [(stackshare.io)](https://stackshare.io/jasmine)

### Objectives

_Participants will be able to:_

- Create a testing structure with Jasmine
- Create assertion functions
- Generate, display and watch tests

### Specific Things to Learn

- [Jasmine](https://jasmine.github.io/index.html)
  - install Jasmine
  - create tests using `expect` & matchers like `toBe`, `toContain`, and `toBeDefined`

### Lesson

#### Jasmine Test

Jasmine is a behavior-driven development (BDD) framework for testing JavaScript code. (Note: BDD is a specific style of testing that tests the behavior of the code from the user's perspective, rather than testing implementation details. It is often used with TDD! [Learn more.](https://www.agilealliance.org/glossary/bdd/)) Jasmine has no external dependencies and does not require a DOM, which means that it's good for getting tests up and running quickly.

As we learned in the last lesson on test-driven development (TDD), one way to ensure that your code is well-tested is to start by writing a test for the behavior you want, watch it fail, and finally write the code to make it pass (the Red-Green-Refactor pattern). Though working in a TDD style may feel slower at first, it can save you time in the long run by ensuring that your code won't break. We'll be working in a TDD style through this lesson.

Let's get started by setting up a new project with Jasmine tests.

_Create a new project_

- `mkdir jasmine-practice` - create a folder for your new project
- `cd jasmine-practice` - change directories to that folder

_Install Jasmine_

- Install Jasmine using: `npm install --global jasmine`
- Note: we are installing Jasmine _globally_ because there is little setup and it's a fast way to get tests up and running. However, when working on bigger projects, prefer a _local installation_ so that when others clone the repository, they will be using the same version of Jasmine that you used (this is not guaranteed with a global installation). We'll learn more about this later.

_Initialize Project_

- Run `jasmine init`
- Notice that initializing Jasmine created a `/spec` directory in your project! This is where your tests will go.

_Create Files_

- To add tests, create files in the `/spec` folder that end with ".spec.js" so that Jasmine knows which files are the test files.
- Create a file that we'll add some tests to: `spec/string.spec.js`.
- Note: we named our file `string.spec.js`, because we'll be testing some string functionality! In general, try to name your test files for the behavior that they're testing.

_Start Test_

- Run `jasmine` from the command line to run your tests! Since we haven't added any tests yet, you'll see something like this:

```
Started


No specs found
Finished in 0.004 seconds
Incomplete: No specs found
```

- Congrats! We're all set up to write some tests.

_Jasmine Syntax_

- Let's look at a complete example. Add the following code to your `string.spec.js` file:

```javascript
describe('A string', function () {
  it('containing 4 letters should have length 4', function () {
    WORD = 'word';
    expect(WORD.length == 4).toBe(true);
  });
});
```

- `describe`, provides context for a group of tests. `describe` is a function that takes 2 arguments ("STRING", FUNCTION(){}). The "STRING" should describe the context for what we are testing, and the "FUNCTION" will contain one or more tests.
- Inside the `describe`, you can add multiple `it` statements. Each `it` will contain tests for a specific behavior (also known as "specs").
- To add an actual test, we add an `expect` statement within the `it`.
  - In the above example, we are testing that the length of the string "word" is 4.
  - This test passess, because `"word".length == 4` evaluates to `true`!
- Notice that if you read the `describe` and `it` statements together, they form the sentence "A string that contains 4 letters should have length 4". It's good practice to write Jasmine tests that read like sentences and clearly state what they are trying to test.
- Now, run the new test by typing in `jasmine` in the command line outside of your spec folder. You should see something like this:

```
Started
.


1 spec, 0 failures
Finished in 0.006 seconds
```

- This means that all your specs are passing. Hooray!
- To see what Jasmine prints when a test fails, try changing `WORD` to something with 5 letters, e.g. `WORD = "words"`. You'll now see something like this:

```
Started
F

Failures:
1) A string containing 4 letters should have length 4
  Message:
    Expected false to be true.
  Stack:
    Error: Expected false to be true.
        at <Jasmine>
        at UserContext.<anonymous> (/path_to_project/jasmine-practice/spec/string.spec.js:4:34)
        at <Jasmine>

1 spec, 1 failure
```

- We now see the failing test printed to the terminal. Notice that the error message "Expected false to be true" isn't super helpful yet - we'll make the error message more helpful later by using more specific matchers than `toBe`.

_Adding more tests_

- Right now, we only have one spec in our file. Let's add another by adding an additional `it` statement.

```javascript
describe('A string', function () {
  it('containing 4 letters should have length 4', function () {
    WORD = 'word';

    expect(WORD.length == 4).toBe(true);
  });

  // New spec!
  it('should be equal to an identical string', function () {
    WORD = 'word';

    expect(WORD == 'word').toBe(true);
  });
});
```

- When you run the specs again, you should now see 2 specs passing!
- Notice that we used the same value for `WORD` twice. Multiple `it` statements can use the same variables if they are declared under the `describe` scope.

```javascript
describe('A string', function () {
  let WORD = 'word';

  it('containing 4 letters should have length 4', function () {
    expect(WORD.length == 4).toBe(true);
  });

  it('should be equal to an identical string', function () {
    expect(WORD == 'word').toBe(true);
  });
});
```

- The test now looks a little bit nicer and, should still pass!

_Other matchers_

- So far, the only matcher that we've looked at is `toBe`, which tests that the actual value in the `expect` evaluates to the expected value. However, Jasmine provides [a lot of different matchers](https://jasmine.github.io/api/3.5/matchers) that can help us test different behaviors. These matchers can also help by printing out more specific error messages when tests fail. Check out the documentation: https://jasmine.github.io/api/3.5/matchers
- Let's add a (failing) test using the `toBeGreaterThan` matcher.

```javascript
describe('A string', function () {
  let WORD = 'word';

  // ... previous tests

  // New test
  it('should be more than 5 characters long', function () {
    expect(WORD.length).toBeGreaterThan(5);
  });
});
```

- When you run `jasmine`, we now get the failure message:

```
Failures:
1) A string should have a length greater than 5
  Message:
    Expected 4 to be greater than 5.
  Stack:
    Error: Expected 4 to be greater than 5.
        at <Jasmine>
        at UserContext.<anonymous> (/Users/brookeangel/Code/jasmine-practice/spec/string.spec.js:13:27)
        at <Jasmine>
```

- Remember our last failing test? This one has a more helpful error message, because it tells us exactly what's wrong: "Expected 4 to be greater than 5." Oops! `WORD.length` is 4 - let's provide a different value so that our test passes:

```javascript
describe('A string', function () {
  // ... previous tests

  it('should have a length greater than 5', function () {
    expect('elephant'.length).toBeGreaterThan(5);
  });
});
```

- As a general rule, use the matcher that best fits the behavior that you're trying to test. This will provide you with good documentation for the code you're trying to test, as well as helpful error messages.

_Including modules in Jasmine tests_

- In a typical project, the code that you're testing won't live in the `.spec.js` file, so you'll want to import it modules into your spec file.
- Require the packages you need in your test at the top of the spec file. Modules that are being tested need to have a `module.exports` in them.

```javascript
// src/myFunction.js
function myFunction() {}

module.exports = myFunction;

// spec/myFunction.spec.js
const myFunction = require('../src/myFunction');
```

_Local Installation_

- Remember how we installed Jasmine _globally_? When managing multiple projects and collaborating with others, you should install Jasmine _locally_ on a per-project basis. This ensures that everyone running your project will use the same version of Jasmine. Let's make the following changes to add Jasmine as a local dependency to our practice project:
- `npm init --yes` - Makes a `package.json` file, for projects that don't already have one.
- `npm install --save-dev jasmine` will save Jasmine locally in your current project. Notice that this creates a `package-lock.json` file in the project. You don't need to understand everything in this file - just know that it specifies exactly which verion of Jasmine you downloaded to the project.
- When we initialized Jasmine before, we ran `jasmine init`. With a local installation, you can initialize Jasmine by running `node node_modules/jasmine/bin/jasmine init`. (We don't have to run this for our project, since Jasmine is already initialized.)
- To run Jasmine from the local installation, edit the "test" line in the "package.json" file to say: `"test": "jasmine"`
- Now, rather than running `jasmine` from the command line, run `npm test` to run all the specs.

### Common Mistakes / Misconceptions

1. Remember: you can get "false positives" and "false negatives" in tests. That's why it's good to follow a Red-Green-Refactor pattern, and make sure that your tests fail before implementing the code to make them pass.
2. A test with no expectations in it will pass. Don't forget to add at least one `expect` to every `it` function, or you could end up with this false positive.
3. Pay attention to when you are writing tests for Asynchronous code. The testing engine might complete before asynchronous code has completed running, giving you unreliable tests.
4. `expect` inside of asynchronous code is ignored, therefore passing. (false positive)
   - Solve this problem in Jasmine with a parameter like `done` - this signals to the test engine this is asynchronous code and it must wait. [Learn more](https://jasmine.github.io/tutorials/async).

### Guided Practice

Remember the [Basic JavaScript practice](../javascript/basic-js-practice.md) that we completed a few lessons ago? We're going to rewrite a few of those functions, TDD style!

_FizzBuzz_ (from basic JS practice, challenge 4)

We're going to TDD a slight twist on `fizzBuzz`. The function will:

- Return "fizz" when given a multiple of 3
- Return "buzz" when given a multiple of 5
- Return "fizzbuzz" when given a multiple of 3 and 5
- Otherwise, return the input number

1. Within your existing project, create a new test file in the `/spec` directory named `fizzBuzz.spec.js`. Our tests will go here.
2. Within `fizzBuzz.spec.js`, add a `describe` to add some context.
3. Let's add our first test: test that `fizzBuzz` is defined.
   - Hint 1: you'll need to add an `it` within the describe. Make sure it states what you are testing.
   - Hint 2: there's a new matcher that will help with this - `toBeDefined`. [See documentation.](https://jasmine.github.io/api/2.7/matchers.html)
4. Run the test using `npm test`. If all goes well, you should see the following failure:

```
1) fizzBuzz should be defined
  Message:
    ReferenceError: fizzBuzz is not defined
```

<details>
<summary>Check your work so far</summary>
<pre>
<code>
// spec/fizzBuzz.spec.js
describe("fizzBuzz", function(){
  it("should be defined", function(){
    expect(fizzBuzz).toBeDefined();
  });
});
</code>
</pre>
</details>
5. Let's make the test pass! Create a new directory `/src` in the project, and make a `fizzBuzz.js` file within the directory. Add a fizzBuzz function to the file, and export it from the file so that we can import it in our test. Don't add any functionality to `fizzBuzz` just yet! All that our function has to do to make the test pass is "be defined".
6. Now, import your `fizzBuzz` function into the spec file. (Hint: see the "Including modules in Jasmine tests" section above.)
7. The first test should now pass!
<details>
<summary>Check your work so far</summary>
<pre><code>
// src/fizzBuzz.js
function fizzBuzz() {};

module.exports = fizzBuzz;

// spec/fizzBuzz.spec.js
const fizzBuzz = require('../src/fizzBuzz');

describe("fizzBuzz", function(){
it("should be defined", function(){
expect(fizzBuzz).toBeDefined();
});
});
</code></pre>

</details>

8. Great! Our test is passing. Add another test that checks that calling fizzBuzz with a multiple of 3 returns "fizz". Make sure that your test fails.
9. Now, make your test pass in the simplest way possible by adding functionality to the `fizzBuzz` function.
   <details>
   <summary>Check your work so far</summary>
   <pre><code>
   // src/fizzBuzz.js
   function fizzBuzz(num) {
     return "fizz";
   };

module.exports = fizzBuzz;

// spec/fizzBuzz.spec.js
describe("fizzBuzz", function(){
// older tests

it("should return 'fizz' when given a multiple of 3", function(){
expect(fizzBuzz(3)).toBe("fizz");
expect(fizzBuzz(6)).toBe("fizz");
});
});
</code></pre>
Notice that we haven't implemented all the functionality for `fizzBuzz` yet - we don't have to for the test to pass. That means we should add more tests!

  </details>

10. Let's add the complete functionality for `fizzBuzz`.
    - Test that when given a multiple of 5, it returns "buzz", then make your test pass.
    - Test that when given a multiple of 3 AND 5, it returns "fizzbuzz", then make your test pass.
    - Test that when given any other number, it returns the input number, then make your test pass.

<details>
<summary>Check your work</summary>
<pre><code>
// src/fizzBuzz.js
function fizzBuzz(num) {
  if (num % 15 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return num;
  }
};

module.exports = fizzBuzz;

// spec/fizzBuzz.spec.js
const fizzBuzz = require('../src/fizzBuzz');

describe("fizzBuzz", function(){
it("should be defined", function(){
expect(fizzBuzz).toBeDefined();
});

it("should return 'fizz' when given a multiple of 3", function(){
expect(fizzBuzz(3)).toBe("fizz");
expect(fizzBuzz(6)).toBe("fizz");
});

it("should return 'buzz' when given a multiple of 5", function(){
expect(fizzBuzz(5)).toBe("buzz");
expect(fizzBuzz(10)).toBe("buzz");
});

it("should return 'fizzbuzz' when given a multiple of 3 and 5", function(){
expect(fizzBuzz(15)).toBe("fizzbuzz");
expect(fizzBuzz(30)).toBe("fizzbuzz");
});
});
</code></pre>

</details>

### Independent Practice

Exploring new matchers:

1. Re-implement Challenge 6, "Sleeping In", from the basic JavaScript practice linked above, using TDD. Since this function returns a boolean, use the matchers `toBeTruthy` and `toBeFalsy` in your tests.
2. Write a function `mySplit` that takes a string, and returns an array of its letters, using TDD. Use the matcher `toContain` in your test.
   - e.g. `mySplit("dog") => ["d","o","g"]`

### Challenge

_Challenge 1:_ Read the docs on [`beforeEach`](https://jasmine.github.io/api/edge/global.html#beforeEach) and [`afterEach`](https://jasmine.github.io/api/edge/global.html#afterEach). Try to write a test that uses `beforeEach` to set up tests. There's a good example in the [Jasmine Tutorial](https://jasmine.github.io/tutorials/your_first_suite).

_Challenge 2:_ You can also run Jasmine tests in the browser for a nicer UI! Follow the [installation instructions on Jasmine's github repo](https://github.com/jasmine/jasmine) to make your tests run in the browser instead of the command line.

### Supplemental Materials

- JS testing with Jasmine blog post, [link](https://automationpanda.com/2018/01/26/javascript-testing-with-jasmine/#project_structure)
- Video by Dylan C. Israel [Unit Testing in JavaScript and Jasmine](https://www.youtube.com/watch?v=h2eWfvcAOTI) _starts at 12:00 minutes to show mocha test._

### Check for Understanding

_Question:_ What is Jasmine and how does it work in your project?

_Exercise:_ Each student should pick a matcher, like `toBeNull()`. Then describe that matcher to the class and how it should be used.
