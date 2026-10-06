# Week 12 — Code Challenges

### Prerequisites

1. Comfortable writing JavaScript functions, conditionals, and loops.
2. Familiar with strings and common string operations.
3. Familiar with JavaScript `Date` objects.

### Motivation

These challenges practice working with dates, pattern matching, and string normalization. As in recent weeks, each problem is provided as a specification with examples but no starter code.

### Learning Objectives

After finishing this folder, you will be able to:

1. Use information from a `Date` object to evaluate a condition.
2. Use a regular expression to find a specified pattern in a string.
3. Normalize a string before evaluating its contents.

### Sequence and Relation

- **Trick or Treat** (`Trick-or-Treat.js`)
  - A short warm-up using JavaScript `Date` objects.
- **Find the Time** (`Find-the-Time.js`)
  - Practice matching a specific text pattern with a regular expression.
- **Valid Palindrome** (`Valid-Palindrome.js`)
  - Normalize a string before determining whether it reads the same forward and backward.

The challenges do not depend on each other and can be completed in any order. The order above moves from a focused `Date` check to increasingly involved string problems.

### Relevant Materials

1. [Date Objects | Date Time](../../datetime/datetime.md) — review for Trick or Treat.
2. [Regular Expressions / RegEx](../../javascript/javascript-8-regex.md) — review or introduction for Find the Time.

### Common Mistakes and Misconceptions

1. JavaScript `Date` month indexes start at `0`, so October has an index of `9`.
2. In Find the Time, a pattern that matches a valid example may also accidentally match part of a longer sequence such as `123:456`.
3. In Valid Palindrome, comparing the original string without first accounting for case and non-alphanumeric characters can produce the wrong result.
