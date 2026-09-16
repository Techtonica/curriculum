# Week 6 - Code Challenges

### Prerequisites

1. Comfortable writing functions, loops, and conditionals (Weeks 1–3).
2. Familiar working with arrays of objects, including `filter()`, `reduce()`, and `map()` (Week 4).
3. Comfortable mutating arrays with `push`, `pop`, and `shift` (Week 5) — may be useful for the Async Queue bonus task.
4. Can run a JavaScript file with `node file.js`.

### Motivation

This week covers more ways to read, sort, and check data in objects and arrays — skills you'll frequently use with API responses or form data.

Promises are used for asynchronous JavaScript code, including operations such as network requests. A promise represents the eventual success or failure of an asynchronous operation.

### Learning Objectives

After finishing this week's exercises, you will be able to:

1. Use `Object.keys()` and `Object.values()` to access an object's properties, then use `for...of` to iterate over the resulting arrays.
2. Sort an array of objects by a property, and check whether some or all elements in an array meet a condition, using `.sort()`, `.some()`, and `.every()`.
3. Create a promise that resolves or rejects based on a condition.

**Bonus**:

4. Build a queue that limits how many asynchronous tasks run at once.

### Sequence and Relation

1. **Object Keys, Values, and For...Of** (`Object_Keys_Values_For-Of.js`)
   - Practice accessing object keys and values and iterating over the resulting arrays.
2. **Sort, Some, and Every** (`Sort_Some_and_Every.js`)
   - Builds on Week 4's array methods by introducing sorting and methods that test whether elements meet a certain condition.
3. **Working with Promises** (`Working_With_Promises/`)
   - Create promises that resolve or reject based on a condition.
   - The bonus exercise applies promises to limit how many tasks run at once.

### Relevant Materials

1. [MDN: Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
2. [MDN: Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
3. [MDN: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
4. [MDN: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
5. [MDN: Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
6. [MDN: Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
7. [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

### Common Mistakes and Misconceptions

1. `.sort()` mutates the original array in place and returns that same array without creating a new one.
2. Sorting objects by a property needs an explicit compare function; without one, `.sort()` falls back to comparing default string conversions, which won't give the order you expect.
3. `.every()` returns `true` on an empty array, and `.some()` returns `false` — worth testing that case deliberately rather than assuming it works.
4. A promise remains pending if its executor calls neither `resolve` nor `reject`; anything awaiting that promise can then wait indefinitely. An exception thrown inside the executor automatically rejects the promise.
5. For the Async Queue bonus: Never start more tasks than the concurrency limit allows, and whenever a task finishes, check whether waiting tasks can now start; otherwise the queue can stall after the first batch.
