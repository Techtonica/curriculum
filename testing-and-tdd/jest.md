# Testing with Jest

### Week 8 Questions

- How do you run Jest tests in the command line?
- How do you run test coverage with jest in the command line, and what does the output mean?
- Give an example of a test assertion.

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)

### Motivation

Learn a commonly used testing tool.

Jest is a library for testing JavaScript code. It's an open source project maintained by Facebook, and it's especially well suited for React code testing, although not limited to that: it can test any JavaScript code. [from flaviocopes.com](https://flaviocopes.com/jest/)

It is built to give clear terminal output about why your test failed, and will even tell you what parts of your code still need to be tested (aka it gives you test coverage data). You can easily write snapshot tests that will alert you to how your new code has caused your web page to change, preventing unintended results as you work.

It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more. (from https://jestjs.io/)

**Which companies use Jest testing?**

- Facebook
- Spotify
- AirBnb
- Twitter

### Objectives

_Participants will be able to:_

- Create a testing structure with Jest
- Create assertion functions
- Generate, display and watch tests

### Specific Things to Learn

- create test files in your project
- run Jest commands in the terminal
- write test assertions using Jest

### Materials

> Note: How to use these links is described in the Lesson section.

- Jest Official Site: https://jestjs.io/
- Rithm School Jest tutorial: https://www.rithmschool.com/courses/intermediate-react/testing-with-jest

### Lesson

#### Jest Testing

The nice thing about using Jest with React is that it is already included in projects built with `create-react-app` or a React + Vite project. You should just be able to run `npm test` in both a `create-react-app` and React + Vite project and it should run Jest. If your project was started another way besides CRA or React + Vite, you can still [install jest](https://jestjs.io/docs/getting-started) with `npm install --save-dev jest` or `yarn add --dev jest`.

1. Spend 5 minutes looking at the jest landing page: https://jestjs.io/

2. Spend ~ 30 minutes following [this Rithm School tutorial](https://www.rithmschool.com/courses/intermediate-react/testing-with-jest) for Jest. No need to leave the page for the tutorial, but feel free to click around.

3. Spend ~ 30 minutes following [Jest Tutorial for Beginners: Getting Started With JavaScript Testing](https://www.valentinog.com/blog/jest/). Note that you can skip these sections for now:

   - "Setting up the Project" - you can just add code to your existing project from step 2, so no need to do this part.
   - "How to test React with Jest" - we'll come to that later.
   - "Bonus: ES modules with Jest"

4. Spend ~ 1 hour following this Jest Tutorial: https://flaviocopes.com/jest/. It reviews some of the things you just covered, but moves on to more complex use cases. Try to run the tests described yourself locally, even if it may not make sense yet.

### Common Mistakes / Misconceptions

- File structure: Different testing libraries scan your project for different folder and file names to find your tests.
  - For Jest, you'll need a folder named `__tests__` and files that use the pattern in `button.test.js` or `events.test.ts`. ie: `src/App.js, src/__tests__/App.test.js`
  - If you use a different pattern, jest may not be able to find your file to run it.
  - Another default option is to keep a test next to the file it is testing instead of a `__tests__` folder - this will keep it easy to see and your import statement short. ie: `src/App.js, src/App.test.js`
  - You _can_ change this in your project, but it takes some work, and there's no need to get into that now. ([Jest docs](https://jestjs.io/docs/configuration#testmatch-arraystring))
- Don't make your tests hard to find! In general, try to name your test files after the file that they're testing. When testing `listItem.js`, if you name your test file `listItem.test.js`, it's easy to see what it's supposed to be testing when you or a coworker come back later.
- Remember: you can get "false positives" and "false negatives" in tests. That's why it's good to follow a Red-Green-Refactor pattern, and make sure that your tests fail before implementing the code to make them pass.
- A test with no expectations in it will pass. Don't forget to add at least one `expect` to every `it` function, or you could end up with this false positive.
- Pay attention to when you are writing tests for Asynchronous code. The testing engine might complete before asynchronous code has completed running, giving you unreliable tests. The biggest clue is usually that a test passes sometimes but not others even though you haven't made any changes.

### Supplemental Materials

- 🎦 [Jest with Chris Jaure](https://www.dropbox.com/s/mw13houixd30lf5/video1500769867.mp4?dl=0)
- 🎦 [Jest with Christina](https://www.dropbox.com/s/x64ux3q5kqj8v6l/video1604871754.mp4?dl=0)
