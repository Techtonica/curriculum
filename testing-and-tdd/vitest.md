# Testing with Vitest

### Week 8 Questions

- How do you run Vitest tests in the command line?
- How do you run test coverage with Vitest in the command line, and what does the output mean?
- Give an example of a test assertion.

### Prerequisites

Before starting this lesson, complete:

- [Intro to Testing and TDD](testing-and-tdd.md)

### Motivation

Testing is essential in development, and knowing the latest tools is helpful for keeping up with modern frameworks. Vitest is a fast, efficient testing framework tailored for Vite-based applications, which makes it ideal for React + Vite projects. By learning Vitest, participants can write reliable, maintainable tests that integrate smoothly into their development workflow.

**Why use Vitest?**

- Vitest is designed with Vite in mind, offering faster, lighter testing for applications.
- It is ideal for React and other frameworks compatible with Vite.
- Key features include native ES module support, efficient mocking, and real-time feedback during development.

### Objectives

_Participants will be able to:_

- Set up and configure Vitest in a Vite-based React project.
- Run tests and test coverage reports using Vitest.
- Write basic test assertions and understand the output format.

### Specific Things to Learn

- Configure Vitest in a Vite project
- Run tests in the command line with Vitest
- Understand test coverage reports in Vitest
- Write simple test assertions

### Materials

> Follow these resources to get comfortable with Vitest testing:

- [Vitest Official Site](https://vitest.dev/)
- [Vitest Docs - Getting Started](https://vitest.dev/guide/)
- [Testing in Vite with Vitest](https://dev.to/open-sauced/setting-up-vite-vitest-and-react-testing-library-2i49)

### Lesson

#### Setting up and Running Vitest

1. **Install Vitest**:
   To add Vitest to a Vite-based project, use:
   ```bash
   npm install -D vitest
   ```
2. **Configure Vitest**:
   Add the following to your Vite config file to support Vitest:

   ```javascript
   // vite.config.js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     test: {
       // vitest options here
     }
   });
   ```

3. **Running Vitest Tests**:

   - To run tests, use the command:
     ```bash
     npx vitest
     ```
   - For watch mode:
     ```bash
     npx vitest --watch
     ```

4. **Generating Test Coverage**:

   - To generate a coverage report, run:
     ```bash
     npx vitest --coverage
     ```
   - The output will provide an overview of which files and lines were covered by tests, allowing developers to identify gaps in testing.

5. **Writing Basic Assertions**:

   - Below is a simple test using Vitest:

     ```javascript
     import { describe, it, expect } from 'vitest';

     describe('Basic Math Functions', () => {
       it('should add numbers correctly', () => {
         expect(1 + 1).toBe(2);
       });

       it('should subtract numbers correctly', () => {
         expect(5 - 3).toBe(2);
       });
     });
     ```

### Common Mistakes / Misconceptions

- **File structure**: Vitest expects test files with `.test.js` or `.spec.js` suffixes. Keep test files organized and easy to locate.
- **Watch Mode**: Remember to use watch mode during development, so changes trigger tests automatically.
- **Async Testing**: Ensure asynchronous tests are awaited to avoid unreliable results. Use `async` functions and `await` for async assertions in tests.

### Supplemental Materials

- 🎦 [Vitest Testing - Video Overview](<[https://vitest.dev/guide/](https://vitest.dev/guide/#adding-vitest-to-your-project)>)
- 🌐 [Mocking with Vitest](https://vitest.dev/guide/mocking.html)
- 🎦 [Vitest Component Testing](https://www.dropbox.com/scl/fi/vh7es1xn156uyh51mt1px/VitestComponentTesting.mp4?rlkey=w4r38hs0e3v72x6wv4sgmw740&st=yzjc6zva&dl=0)
