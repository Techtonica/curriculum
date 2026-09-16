# Week 7 — Code Challenges

## Prerequisites

1. Comfortable with basic `if` statements (Weeks 1–3).
2. Familiar with arrays, including copying vs. mutating them (Week 5).
3. Can run a JavaScript file with `node file.js`.

## Motivation

This week introduces a compact syntax for simple conditionals and array combination (ternary, spread), plus a new tool — Set — for removing duplicates without manually tracking seen values.

## Learning Objectives

After finishing this week's exercises, you will be able to:

1. Write a conditional expression using the ternary operator (`condition ? valueIfTrue : valueIfFalse`).
2. Remove duplicate values from an array using a `Set`.
3. Combine two arrays into a new array using the spread operator (`...`).

## Sequence and Relation

- **Ternary Operator for Conditional** (`Ternary_Operator_for_Conditional.js`)
  - Return the larger of two numbers using a ternary expression instead of an if/else block.
- **Remove Duplicates from Array** (`Remove_Duplicates_from_Array.js`)
  - Revisit deduplication (Week 5) using `Set` — a different tool for the same problem.
- **Spread an Array into Another Array** (`Spread_an_Array_into_Another_Array.js`)
  - Combine two arrays without mutating either original — connects to Week 5's copy-before-mutating guidance.

These can be done in any order.

## Relevant Materials

1. [MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
2. [MDN: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
3. [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Common Mistakes and Misconceptions

1. Nesting multiple ternaries to handle more than two outcomes quickly gets hard to read — an if/else chain is often clearer at that point.
2. `Set` removes duplicates automatically, but it is not an array — convert it back with `[...set]` or `Array.from(set)` if the function needs to return one.
3. The spread operator makes a shallow copy; nested arrays/objects inside the result are still shared references, not independent copies.
