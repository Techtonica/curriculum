# Comparing Testing Frameworks

### **Prerequisites**

Here are topics that should be understood before this topic:

- HTML/CSS/JavaScript syntax
- Test Driven Development (TDD)
- Node.js

### **Objectives**

**Participants will be able to:**

- Differentiate between testing frameworks (e.g., RTL, Jest, Vitest, Supertest, etc.)
- Understand the various use cases for each testing framework

**Specific Things To Learn**

- What is the difference between unit and integration testing?
- What makes up a test suite?

**Motivation**

Learning testing frameworks is crucial for improving code quality, speeding up development, and ensuring software reliability. Here's why:

- Enhanced Code Quality: Testing frameworks help catch bugs early, making your code more reliable and less prone to errors.

- Faster Development: Frameworks like Jest and Vitest provide fast feedback, reducing time spent debugging and speeding up the development cycle.

- Better Collaboration: Tests act as documentation, making it easier for teams to collaborate and understand the code.

- Adaptability: Knowing various frameworks like React Testing Library, Mocha, and Supertest prepares you for different projects, whether it’s frontend or backend.

- Improved Debugging: Writing tests improves your ability to identify and fix issues quickly, leading to better problem-solving skills.

### Lesson

**What are the differences between unit and integration testing?**

- Unit testing focuses on testing individual units or components of the application in isolation. A "unit" is the smallest testable part of the application, such as a function, method, or class.
  - Used to ensure that each component or function performs as expected on its own.
  - Unit tests are usually written to test a specific feature or logic, verifying that it behaves correctly under various conditions.
- Integration testing focuses on verifying the interactions between multiple units or components to ensure they work together as expected. This could involve testing how functions, modules, or systems collaborate.
  - Used to ensure that integrated components or services work well together.
  - It checks if different parts of the system (like APIs, databases, and external services) are correctly interacting.

**What is a test suite, and what do they consist of?**

A test suite is a group of related tests. Instead of writing one test at a time, you organize them into a collection, called a test suite. Some important aspects of a test suite include:

- Test Suite:
  The `describe` block is the test suite. It groups all the tests related to the "Addition function" together.
- Test Case:
  Each individual test is written using `test()`. These are the actual tests that check the logic of your code.
- Assertions:
  Inside each test, you have assertions (like `expect(add(1, 1)).toBe(2))`, which check if the output of your function matches what you expect.
- Setup: the code that prepares things for the test to run. It could be creating mock data or initializing values before the test starts.
- Teardown: also called cleanup, which happens after a test runs. This could involve resetting values, closing files, or removing data to make sure the next test runs in a clean environment.

Example of a test suite:

```
// Test suite
describe('Addition tests', () => {

// Setup: prepare data before tests
  let num1, num2;
  beforeEach(() => {
    num1 = 1;
    num2 = 1;
  });

// Test case 1: Check if addition works
  test('adds 1 + 1 to equal 2', () => {
    expect(add(num1, num2)).toBe(2);  // Assertion
  });

// Test case 2: Check if addition works with different values
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);  // Assertion
  });

// Teardown: Cleanup after tests
  afterEach(() => {
    num1 = num2 = null;  // Cleanup data
  });
});
```

**When to use unit or integration testing?**

Unit Testing:

- Ideal for ensuring that your individual functions, methods, or classes are working correctly.
- Great for validating small pieces of logic early in development.

Integration Testing:

- Crucial when ensuring that multiple components, systems, or services interact properly.
- Important when testing APIs, database connections, or interactions between front-end and back-end systems.

### **Testing Frameworks Overview**

| Framework | Best Use Cases | Key Features
|-----|-----|-----
| [Jest](https://jestjs.io/docs/getting-started) | Ideal for full-fledged JavaScript testing, especially in React and Node.js projects. <br> Its all-in-one nature makes it perfect for unit, integration, and snapshot testing. | • Built-in test runner, assertion library, and mocking capabilities <br>• Provides utilities for unit testing, integration testing, and snapshot testing <br>• Features watch mode, test coverage, and an easy-to-use API
| [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/) | Best for testing React components in a way that simulates user behavior and interactions. | • Focuses on testing React components by simulating user interactions <br>• Provides utility functions like getBy, findBy, and queryBy <br>• Encourages testing user interactions and behaviors rather than implementation details
| [Supertest](https://github.com/ladjs/supertest#readme) | Perfect for testing APIs and server-side logic. <br> Especially in Node.js applications. | • Designed for testing HTTP APIs by simulating HTTP requests <br>• Checks response codes, headers, and body content <br>• Ideal for testing RESTful APIs and backend services
| [Vitest](https://vitest.dev/guide/) | Suited for Vite-based projects where performance and minimal configuration are key priorities. | • A modern, fast testing framework for Vite-based projects <br>• Optimized for speed with minimal configuration <br>• Works natively with ES Modules
| [Chai](https://www.chaijs.com/guide/) & [Mocha](https://mochajs.org/#getting-started) | Great for unit and integration testing in various JavaScript environments, with flexibility in choosing assertion styles. | • Mocha supports asynchronous code, test structuring, and hooks <br>• Chai offers various assertion styles (expect, should, assert) <br>• Used for general-purpose JavaScript testing
| [Enzyme](https://enzymejs.github.io/enzyme/) | Useful for legacy React code that requires deep component testing. | • React-specific testing utility with deep, shallow, and static rendering <br>• Provides control over component behavior, lifecycle methods, and state <br>• Useful for legacy React code
| [Jasmine](https://jasmine.github.io/pages/docs_home.html) | Best for behavior-driven development (BDD). <br> JavaScript unit testing in a non-React environment. | • Behavior-driven development (BDD) testing framework <br>• Built-in support for spies, mocks, and stubbing <br>• Works without reliance on a browser or DOM

### **Independent Practice**

[Rithm School Tutorial - Writing API tests with Jest](https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest)

**Check for Understanding**

1. What is the main purpose of a testing framework?
2. How does knowing different testing frameworks help you in various projects?
3. What is the difference between unit testing and integration testing?

### **Supplemental Materials**

- 🎦 [Intro to Jest: Object & API Testing](https://www.dropbox.com/scl/fi/anmkgxuntp8uvlyduzpic/IntroToJestObject-ApiTesting.mp4?rlkey=smzcsizwb1legmhml4xolc72h&dl=0)
- 🎦 [Jest Super Test Integration API Request Testing](https://www.dropbox.com/scl/fi/94h7u58t27zj55teusajo/JestSupertestIntegrationApiRequestTesting.mp4?rlkey=bap50gvtjsmxjt0gasczg3d7a&dl=0) with volunteer Cristina Rodriguez (she/her)
