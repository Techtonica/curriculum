# Week 9 Code Challenges

## Overview

This folder contains five JavaScript code challenges designed to reinforce concepts covered in Week 9 of the curriculum. Each challenge focuses on a specific algorithmic or programming concept and includes prerequisites, learning objectives, common mistakes, and related materials.

---

## Challenges

### 1. Add-Digits.js

**Description:** Write a function that takes a non-negative integer and returns the sum of its digits.

**Prerequisites:**
- Understanding of the modulo operator (`%`)
- Basic arithmetic operations
- Loop constructs (`while` or `for`)

**Learning Objectives:**
- Practice digit manipulation using modulo and integer division
- Apply iterative logic to decompose a number

**Common Mistakes & Misconceptions:**
- Forgetting to handle the base case (single-digit numbers)
- Using string conversion instead of mathematical operations
- Off-by-one errors in loop conditions

**Relation to Curriculum:**
Reinforces modular arithmetic and iterative problem-solving, building on early numeric manipulation topics.

**Relevant Materials:**
- Modulo operator fundamentals
- Loop control structures

---

### 2. Find-the-Longest-Word-in-a-String.js

**Description:** Write a function that takes a string and returns the length of the longest word in that string. Words are separated by spaces.

**Prerequisites:**
- String splitting techniques
- Array iteration methods
- Comparing values to find extremes (max)

**Learning Objectives:**
- Split strings into arrays for processing
- Iterate through arrays to find a maximum value
- Handle edge cases like empty strings or single words

**Common Mistakes & Misconceptions:**
- Not accounting for punctuation attached to words
- Returning the longest word string instead of its length
- Failing to handle empty input

**Relation to Curriculum:**
Connects string manipulation with array methods, reinforcing data transformation patterns.

**Relevant Materials:**
- `String.prototype.split()`
- `Array.prototype.reduce()` or `Math.max()`

---

### 3. Move-Zeros.js

**Description:** Write a function that takes an array of numbers and moves all zeros to the end of the array while maintaining the relative order of non-zero elements. The operation should be done in place when possible.

**Prerequisites:**
- Array mutation techniques
- Two-pointer or filtering approaches
- Understanding of reference types in JavaScript

**Learning Objectives:**
- Manipulate arrays in place or return a new array
- Preserve element ordering during transformations
- Evaluate trade-offs between space and time complexity

**Common Mistakes & Misconceptions:**
- Losing the relative order of non-zero elements
- Creating unnecessary copies when in-place mutation is acceptable
- Confusing zero-valued elements with falsy values (`null`, `undefined`, `""`)

**Relation to Curriculum:**
Builds on array manipulation skills and introduces algorithmic thinking around in-place transformations.

**Relevant Materials:**
- `Array.prototype.filter()`
- In-place array swapping patterns

---

### 4. Return-the-Sum-of-Two-Numbers.js

**Description:** Write a function that takes two numbers and returns their sum. Despite its simplicity, consider edge cases such as `NaN`, very large numbers, and type coercion.

**Prerequisites:**
- Basic arithmetic
- Understanding of JavaScript type system
- Awareness of floating-point precision issues

**Learning Objectives:**
- Handle type coercion and unexpected inputs gracefully
- Validate input types before computation
- Recognize edge cases in numerical operations

**Common Mistakes & Misconceptions:**
- Assuming inputs are always numbers without validation
- Overcomplicating a simple task instead of considering robustness
- Ignoring floating-point precision quirks

**Relation to Curriculum:**
Serves as a warm-up challenge emphasizing defensive programming and input validation — skills relevant throughout the course.

**Relevant Materials:**
- JavaScript type checking (`typeof`, `Number.isFinite()`)
- Floating-point behavior in JS

---

### 5. Single-Number.js

**Description:** Given a non-empty array of integers where every element appears twice except for one, find that single element. Solve it with a linear time complexity and constant extra space.

**Prerequisites:**
- Bitwise XOR operation
- Understanding of properties of XOR (`a ^ a = 0`, `a ^ 0 = a`)
- Array iteration patterns

**Learning Objectives:**
- Apply bitwise operations to solve algorithmic problems
- Achieve optimal time and space complexity
- Recognize patterns where XOR can replace hash-based approaches

**Common Mistakes & Misconceptions:**
- Using a hash map or object to track counts (O(n) space)
- Not recognizing the XOR property that makes this solvable in O(1) space
- Misunderstanding how XOR works on binary representations

**Relation to Curriculum:**
Introduces bitwise operations and optimal algorithm design — a key skill for technical interviews and advanced problem solving.

**Relevant Materials:**
- Bitwise operators in JavaScript
- XOR trick for finding unique elements

---

## Motivation

These challenges are curated to progressively build your problem-solving toolkit. They range from foundational (sum of digits) to more advanced (bitwise XOR), ensuring you practice a variety of patterns you'll encounter in coding interviews and real-world development.

Completing these challenges will strengthen your ability to:
- Break down problems into manageable steps
- Recognize recurring algorithmic patterns
- Write clean, efficient, and correct JavaScript code

---

## Sequence / Relation

| Order | Challenge | Focus Area |
|-------|-----------|------------|
| 1 | Add-Digits.js | Numeric decomposition & loops |
| 2 | Return-the-Sum-of-Two-Numbers.js | Input validation & edge cases |
| 3 | Find-the-Longest-Word-in-a-String.js | String & array manipulation |
| 4 | Move-Zeros.js | Array transformation & ordering |
| 5 | Single-Number.js | Bitwise operations & optimization |

Solve in order to build confidence progressively. The final challenge (Single-Number) introduces a novel technique — don't skip ahead without completing the earlier ones.
