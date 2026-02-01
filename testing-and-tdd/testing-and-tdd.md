# Intro to Testing

### Prerequisites

- [Command Line](/dev-tools/command-line-interface.md)
- [JavaScript Lessons 1-7](/javascript)

### Motivation

Testing makes your code better, lets you work faster, and can actually be fun!

**Which companies use automated testing?**

- Testbytes: The enviable track record of [providing test solutions](https://www.testbytes.net/software-testing-services/) and services on time has helped them to be one of the leading testing companies in India.
  [(testbytes.net)](https://www.testbytes.net/blog/top-test-automation-companies-india/)

### Objectives

**Participants will be able to:**

- Add automated tests to validate their website.

### Outline

- Why test?
  - [QA](https://www.techopedia.com/definition/9038/quality-assurance-qa)
- Test methodologies
  - Test-Driven Development
- Types of tests
  - Unit tests
  - Integration tests
  - Acceptance tests

### Materials

- [Testing/TDD slideshow](https://docs.google.com/presentation/d/1viDJyLHXVs-VioUEatvWHDZeOCCmPxZNPHzH0C393rg/edit?usp=sharing)
- [Testing Pyramid](https://martinfowler.com/bliki/images/testPyramid/test-pyramid.png)
- [Just Say No to End-to-End Testing - Google Engineering](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html) (Contrary to the title, this article does not advocate completely against end-to-end tests: it advocates for developers to prefer unit and integration tests over end-to-end-tests, in general.)

## Lesson

[This slideshow](https://docs.google.com/presentation/d/1viDJyLHXVs-VioUEatvWHDZeOCCmPxZNPHzH0C393rg/edit?usp=sharing) follows along with this Testing/TDD lesson.

### Why Test?

Everyone probably tests their code manually as they write it. But this lesson is about automated testing where you write some special code, **the test code**, that verifies the behavior of your "regular code" aka **production code**.

#### QA

Isn't testing the QA's job? Some organizations might have dedicated QA staff. However, who wants to wait until they test your code to find bugs? Wouldn't it be great to find them yourself first?

And there are other advantages too...

#### Pros

- Tests **protect against regression**.

  - For example, you write some code that uses the _SuperDuperStringUtils_ npm package and it works fine now but what happens if six months later someone upgrades that library? How will you know if the code is okay? Can you manually check every single behavior of your app every time you do an upgrade?
  - When you fix a user-reported bug, you can add a new test to make sure it doesn't come back when someone else changes the code unknowingly.
  - If you have to modify one part of the code, how do you know that it does not change the behavior of other pieces of code? This is why you need regression testing, to make sure that everything that worked before continues to work as it should.

- Tests provide **living documentation** where correct behavior is described, hopefully using the user's terminology.

  - What is the system supposed to do when the user does something? At least some of the tests might have the definitive answer.

- Tested code is **better code**

  - The tests exercise your functions and provide feedback on how easy (or annoying) they are to use and help shape them for the better.
  - Example: if in your test you have to provide arguments over and over, maybe some default arguments would help. You can also test edge cases that could possibly break your code.

#### Cons

- A user doesn't directly care about test code.
  - It takes time away from writing the production code that they use directly.
  - You can expect to have **more lines of test code than production code**.
  - Whether it saves time overall in helping prevent problems is something you'll have to decide for yourself.
- Changing a small piece of code may require changing lots of tests (for no good reason).
  - There are techniques to help with this but some amount of it is inevitable.
- It's sometimes easy to write tests that give false confidence.
  - **Writing tests can sometimes be more challenging than writing the original code.**
  - Getting around dependencies like databases, API requests, etc sometimes results in boilerplate/noise.
- Can be really tough and expensive to retroactively add to an existing codebase.
  - But there are [some](https://danlimerick.wordpress.com/2012/04/25/tdd-when-up-to-your-neck-in-legacy-code/) [techniques](https://www.goodreads.com/book/show/19898424-working-effectively-with-legacy-code) to make this more feasible.
  - Takes a culture change to introduce and we all know people are hard to influence!

### Types of Tests

Naming can get tricky so here are some helpful starting point definitions.

#### Unit Tests

This term has reasonable consensus. These tests exercise the smallest pieces of your code, ideally in total isolation from the rest. In an object-oriented language, it might test a `class`. In a functional language, it will likely test a `function`.

But what if your `class` uses another `class`? And what if your `function` calls another function? We won't cover them today but **mocking** can help with these issues.

- Speed: **super fast**
  - Done with care, you can run all your system's unit tests in a few minutes, which lets you be a nice person and run them before merging your code / opening a pull request.
- Flakiness (likelihood of tests failing on their own): low.
  - Since it's all isolated it shouldn't suffer from weird effects.
  - You can even mock the system clock to remove time dependencies! :-O
- Realism: **low**.
  - It's been said that a 'unit test' tests that the code does what the developer intended - not necessarily what the user wants.
  - Just because your `SuperDuperStringUtils` works doesn't mean its usage in your login page to, say, format user's custom gender will do what you _really_ want.

#### Integration Tests

This term does not have much consensus on its meaning, but it generally refers to tests that test two (or more) units working together. It could be two classes/objects or a function that calls another function. It can also mean having your API call another real API, which is quite different from (and slower than) a unit test. But some of the ideas are the same.

- Speed: moderate
- Flakiness: moderate
- Realism: moderate

As you might notice, these attributes aren't that specific. That's because they are highly dependent on what flavor of integration test you're writing. Is it almost like a unit test against two or more units with mocking, etc? Or is it closer to UI Test below, such as an API calling another real API which can go down for lots of reasons.

However, this balance makes them a good place to start if you don't know what kind of test to write.

#### UI Tests / User Acceptance Tests / Browser Tests / End-to-End Tests

Sadly, these go by even more names than listed but, in general, these are the highest level of all tests and test an entire page in a real browser or real mobile app. They can even imitate a user journey as a flow through several pages (e.g. login, create profile).

- Speed: slowest
  - UIs are slow and require you to wait after a click for pages to load, etc.
- Flakiness: high
  - Tests will fail in ways that cannot be reproduced.
- Realism: high
  - It's really exercising what the user does! Can't beat that.

#### Load Testing

We won't go into these much here, but load testing is essentially testing that your code can handle an increased amount of input or activity. Lets say you have a website that works when you have one user, what happens when you have 10,000 users? If you have a database that is working with three rows, what happens when you have thousands? You want to make sure that your program still works reliably regardless of user volume.

#### How to choose?

There is no right answer. You should try them all and see which ones you prefer.

![The Testing Pyramid](https://ardalis.com/img/ui-integration-unit.png)
[source](https://ardalis.com/unit-test-or-integration-test-and-why-you-should-care)

A lot of people think having more unit tests is cheaper, easier, and gives a better return on investment in the long run. See for yourself.

### Methodologies

Automated testing is relatively new compared to many practices and, as such, habits vary widely across teams and organizations. People can be quite opinionated about the practices that they follow. Try not to get hung up on all the disagreements.

Just remember that **some tests are infinitely better than no tests**. The rest is details.

#### Test-Driven Development (TDD)

If tests are helpful and help make your code stronger, some developers like to start with the tests first, before any code exists. That way they know they have testable code from the start.

```javascript
const sum = function (a, b) {};

// this test will fail since the function doesn't even do anything yet!
describe('sum()', function () {
  it('adds the input numbers together', function () {
    expect(sum(1, 2)).toBe(3);
  });
});
```

#### Red-Green-Refactor

Even if you're adding tests to existing code, it's a great idea to write a **failing test first**. This can avoid the pitfall of false confidence. It's sometimes easy to accidentally write a test that will _never fail_ without realizing it.

![Red Green Refactor](http://hanwax.github.io/assets/tdd_flow.png)
[source](http://hanwax.github.io/)

This practice is nicknamed **Red-Green-Refactor**

- Red: failing test
- Green: write enough code to make it pass
- Refactor: cleanup code while keeping tests green
- Repeat!

##### No Code Exists

This is easy since you don't have any code yet.

```javascript
// implement this function to make the test pass:
// const sum = ...;

describe('sum()', function () {
  it('should add two numbers together', function () {
    expect(sum(1, 2)).toBe(3);
  });
});
```

##### Code Already Exists

You can do this if the code already exists by, say, commenting out the line doing the work you're testing.

```javascript
const sum = function (a, b) {
  return a + b; // TODO: comment this to make the test fail
};

describe('sum()', function () {
  it('should add two numbers together', function () {
    expect(sum(1, 2)).toBe(3);
  });
});
```

#### Outside-In vs. Inside-Out

Q: Where do you start adding tests? At the highest level (requesting a whole page) or at a tiny level, e.g. a single function?
A: Neither way is better. You should try both and see.

### Common Mistakes / Misconceptions

Read about these common [antipatterns](https://medium.com/written-in-code/testing-anti-patterns-b5ffc1612b8b) so you can avoid them.

- If you are confident in your code, it will save time to skip testing. - In the long run, testing will always save time. Even if you can't measure the time saved, you will understand your code better, which will make you a better, faster developer moving forward. Plus, you never know what might change in the future. Maybe your code will fall into the hands of another developer, and they won't realize they're breaking it. Maybe you will want to reuse a function in the future and you'll find you've forgotten exactly how it works. Looking at tests can help future you understand what past you was trying to accomplish.

### Guided Practice

#### Let's Write a Test!

Add some additional tests for this function:

```javascript
const countWords = function (sentence) {
  return sentence.split(' ').length;
};

describe('countWords', function () {
  it('should count a single word', function () {
    expect(countWords('a')).toBe(1);
  });

  it('???', function () {});
});
```

##### Challenge

Try to find some input where the function gives the wrong result.

### Independent Practice

What if instead of requirements for your code to be in written form, someone gave you a test spec that defined its exact behavior?

Try some JavaScript examples at https://www.codewars.com/

### Challenge

#### Ping Pong Pairing

Ping Pong Pairing is a common technique when using TDD where each developer switches roles between test writer and code implementer. The first developer writes a test, then the second developer writes _just enough_ code to make the test pass. Then the first developer writes another test, and so on.

- Use the spec listed in [String Calculator Kata](http://osherove.com/tdd-kata-1/)
- Flip a coin, use Rock Paper Scissors, or something to choose roles.
- Winner (**Test Writer**) begins by writing a simple single test case.
- Other pair member (**Code Implementer**) implements _just enough_ code to make the test pass.
  - It's really tempting to write more than _just enough_. Resist the urge!
- **Test Writer** writes a second failing test.
- **Code Implementer** writes _just enough_ code to make both tests still pass.
- Repeat until you believe the spec is fully implemented!

_Hints_

- Try switching roles halfway through
- **Test Writer** Try thinking of tricky input to test, which will force the **Code Implementer** to make the code more robust
  - What if you pass empty string `""`, empty array `[]`, empty object `{}`, `0`, `null`, or nothing at all to the function
  - Be DEVIOUS: Your job is to break the code to make it stronger }:-)
- **Code Implementer**
  - The hardest part is to resist the temptation to write more code than you need, anticipating future test cases.
  - Be LAZY: Force the **Test Writer** to make a failing test for each behavior they want.

#### Acceptance Testing

Users may be on many different web browsers so we need to test webpages for browser compatibility.

- These will show how different websites look on multiple browsers to different users.
  [browserling](https://www.browserling.com/)
  [browser sandbox](https://www.browserstack.com/guide/what-is-browser-sandboxing)

Other tests
[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) Free tool by Google to test the speed of your website
[10 Free UI Testing Tools](http://smashinghub.com/10-free-web-ui-testing-tools.htm) Numerous online tools that you can use to test your website.

### Check for Understanding

Form small groups and discuss:

- What is an automated test?
- What is TDD?
- What are some advantages of TDD?
- What are some disadvantages of TDD?
- Where should your tests live in your project?
- How do you run your tests?

### Supplemental Materials

- [TDD &amp; Debugging with Russ Harmon](https://www.dropbox.com/scl/fi/0tm0hobs3a0gpnstm5un9/GMT20231013-210435_Recording_gallery_2560x1440.mp4?rlkey=vquxs6lust77ggzw6imidtu6e&dl=0)
- For an overview of how this framework compares to others, see the [General Testing Framework Comparison Chart](/testing-and-tdd/compared-testing-frameworks.md#testing-frameworks-overview).
