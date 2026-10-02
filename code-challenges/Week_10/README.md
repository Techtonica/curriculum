# Week 10 — Code Challenges

### Prerequisites

1. Comfortable writing functions, loops, and conditionals.
2. Familiar with numbers, arrays, strings, and basic type conversion.
3. Can run a JavaScript file with `node file.js`.

### Motivation

This week continues last week's format: four more standalone problems, each given only as a written spec with no starter code. This set spans type conversion, digit manipulation, counting the number of ways to reach a result, and comparing ranges between two arrays.

### Learning Objectives

After finishing this folder, you will be able to:

1. Convert a boolean value into its string representation.
2. Count the number of distinct ways to reach a target through a sequence of smaller choices.
3. Manipulate the individual digits of a number to produce a new, larger number.
4. Compare the minimum and maximum values of two arrays to determine whether one range fits inside another.

### Sequence and Relation

- **Boolean to String Conversion** (`Boolean-to-String-Conversion.js`)
  - Convert a boolean to its string representation — the simplest of the four, a good warm-up.
- **Nested Array** (`Nested-Array.js`)
  - Compare two arrays' minimum and maximum values to determine whether one range fits inside another — connects to Week 8's Math methods exercise.
- **Largest Swap** (`Largest-Swap.js`)
  - Swap two digits of a number, at most once, to produce the largest possible result — digit manipulation, continuing from Week 9's Add Digits.
- **Climbing Stairs** (`Climbing-Stairs.js`)
  - Count the distinct ways to climb a staircase taking 1 or 2 steps at a time — saved for last, since this kind of counting problem asks for a different style of reasoning than the other three.

These four have no strict dependencies, so they can be completed in any order. The order above is a recommended progression.

### Relevant Materials

1. [MDN: String()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) — converting values to their string representation, relevant to Boolean to String Conversion.

### Common Mistakes and Misconceptions

1. In Boolean to String Conversion, the result needs to actually be a string — a boolean that happens to print as `true`/`false` isn't the same as the string `"true"`/`"false"`.
2. In Largest Swap, at most one swap is allowed — the second example (`432`) shows that sometimes the best answer is no swap at all.
3. In Nested Array, matching bounds don't count as nested — the `[9,9,8]`/`[8,9]` example fails because its minimum (8) isn't strictly greater than the second array's minimum (8).
4. In Climbing Stairs, the order of the steps matters: 1 + 2 and 2 + 1 count as different ways to reach the top.
