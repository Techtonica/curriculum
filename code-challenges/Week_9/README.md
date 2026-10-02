# Week 9 — Code Challenges

### Prerequisites

1. Comfortable writing functions, loops, and conditionals.
2. Familiar with arrays and strings — indexing, iterating, and basic mutation.
3. Can run a JavaScript file with `node file.js`.

### Motivation

This week is a shift in format: five standalone problems, each given only as a written spec with examples but no starter code or function stub. The goal is practicing translating a written specification into working code without scaffolding, then reviewing your solution for correctness and efficiency. Several problems also include an optional "Challenge": an additional constraint or optimization to attempt once your first solution works.

### Learning Objectives

After finishing this folder, you will be able to:

1. Write a complete function, including its signature, from a written specification with no provided scaffolding.
2. Solve problems involving digit/number manipulation, string parsing, and array mutation.
3. Distinguish between returning a new array and modifying an existing array in place.
4. Analyze a solution's time complexity, and where relevant, its use of extra space, identifying opportunities to improve either.

### Sequence and Relation

- **Return the Sum of Two Numbers** (`Return-the-Sum-of-Two-Numbers.js`)
  - Basic function writing: parameters, numeric operations, and returning a result.
- **Find the Longest Word in a String** (`Find-the-Longest-Word-in-a-String.js`)
  - Parse a sentence into words and find the longest one.
- **Move Zeros** (`Move-Zeros.js`)
  - Move all zeros to the end while preserving the relative order of the non-zero elements. Challenge: modify the original array without making a copy, while minimizing unnecessary operations.
- **Single Number** (`Single-Number.js`)
  - Find the one element in an array that doesn't appear twice. Challenge: solve it in linear time.
- **Add Digits** (`Add-Digits.js`)
  - Repeatedly sum a number's digits down to one digit. Challenge: solve it in O(1), without any loop or recursion.

These five have no strict dependencies, so they can be completed in any order. The order above is a recommended progression, moving roughly from basic function-writing toward array manipulation and algorithmic optimization, with Add Digits saved for last since its O(1) challenge asks for a different kind of insight than the rest.

### Relevant Materials

1. [MDN: String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
2. [Wikipedia: Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) — background for understanding terms such as O(1) and linear runtime, and for comparing the efficiency of different solutions.

### Common Mistakes and Misconceptions

1. There's no starter code this week. You'll need to write your own function signature and your own test calls to check your work. Try including at least one edge case beyond the given examples.
2. In Move Zeros, removing or inserting elements while iterating forward over an array by index can skip elements, since removing an item shifts everything after it down one position.
3. In Add Digits, a solution should still return the input correctly when it's already a single digit (like `0`), not just when it takes multiple passes to reduce.
4. In Single Number, a solution that scans the entire array to find a match for each value can work, but it doesn't meet the linear-time challenge; its running time grows quadratically as the input gets larger.
