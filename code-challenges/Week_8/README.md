# Week 8 — Code Challenges

### Prerequisites

1. Comfortable with arrays of objects and higher-order methods like `filter` (Week 4) and `.sort()`/`.some()`/`.every()` (Week 6).
2. Familiar with promises and `async`/`await` (Week 6) — used throughout the Jest exercise's mocked `fetch` calls.
3. Built a basic React component before (Week 4's Hello Component) — used in the React Testing Library exercise.
4. Can run a JavaScript file with `node file.js`, and install/run npm packages with `npm install`/`npm run <script>`.

### Motivation

Week 8 introduces testing: writing Jest tests for a small Node module, and Vitest + React Testing Library tests for React components. You will practice ensuring that code behaves correctly, automatically and repeatably, rather than checking manually. The two remaining exercises continue practicing arrays and objects, applying built-in Math methods and a more general filtering pattern.

### Learning Objectives

After finishing this folder, you will be able to:

1. Write Jest unit tests for a module's functions, including mocking a dependency like `fetch` so no real network call is made.
2. Write a React Testing Library test that renders a component and queries it from a user's perspective, using `screen` and `user-event` to simulate typing and clicking. `user-event` simulates user actions such as typing and clicking. Because these interactions may involve asynchronous browser behavior, its methods are typically used with await.
3. Use `Math.floor()`, `Math.ceil()`, `Math.min()`, and `Math.max()` to round and compare a set of numbers.
4. Filter an array of objects by a property whose name is passed in as a variable.

**Bonus:**

5. Write a Jest integration test that exercises two real modules together, mocking only the actual external dependency (the network call).

### Sequence and Relation

Part 1: Testing

1. **Jest Unit & Integration Testing** (`Jest_Integration_and_Unit_Testing/`)
   - Write unit tests for a service and controller module, mocking `fetch` so no real network call happens. Introduced first since Jest is the more widely used general-purpose testing framework.
2. **Working with React Testing Library** (`Working_with_React_Testing_Library/`)
   - Build a component with an add-item interaction, then test it with Vitest and React Testing Library. Vitest's `describe`/`test`/`expect` API is intentionally near-identical to Jest's, so the previous exercise's patterns carry over directly, even though the two use different underlying tools.

Part 2: JavaScript Practice

3. **Math Methods: Floor, Ceil, Min, Max** (`Math_methods_floor_ceil_min_max.js`)

- Generate a set of random numbers, round half down and half up, then find the minimum and maximum among the results.

4. **Working with Arrays and Objects** (`Working_with_Arrays_and_Objects.js`)
   - Extends Week 4's `filter()` practice to a reusable function that filters by a property name given as a variable.

Exercises 3 and 4 are independent of the testing pair above, and of each other — can be done in any order.

### Relevant Materials

1. [Jest: Getting Started](https://jestjs.io/docs/getting-started)
2. [Testing Library: React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
3. [Vitest: Getting Started](https://vitest.dev/guide/)
4. [MDN: Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
5. [MDN: Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
6. [MDN: Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
7. [MDN: Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

### Common Mistakes and Misconceptions

1. In tests, forgetting to mock `fetch` means a test can make a real network call — slow, unreliable, and not what unit testing is for.
2. `screen.getByText()` throws on its own if the text isn't found (or is found more than once) — it doesn't need an extra matcher to act as an assertion.
3. `Math.floor()`/`Math.ceil()` do nothing to a number that's already a whole number — test with actual decimals to see the rounding happen.
4. Accessing an object property by a variable name (like `propertyName`) requires bracket notation (`obj[propertyName]`), not dot notation.
5. In the RTL exercise, `test`/`expect`/`describe` work without an import only because `globals: true` is set in `vite.config.js` — without it, they'd need to be imported from `'vitest'` explicitly.
