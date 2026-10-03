# Week 10 Code Challenges

This folder contains four code challenges designed to reinforce key programming concepts covered in Week 10.

---

## 1. Boolean-to-String-Conversion.js

**What it does:** Converts boolean values (`true` / `false`) into their string equivalents (`"true"` / `"false"`) and vice versa, exploring type coercion and explicit conversion methods in JavaScript.

**Relation to curriculum:** Connects to Week 3 (data types) and Week 7 (type coercion). Understanding explicit vs. implicit type conversion is critical for writing predictable code.

**Prerequisites:**
- Basic knowledge of JavaScript data types (booleans, strings)
- Familiarity with `String()` and `.toString()` methods

**Motivation:**
Type coercion is a common source of bugs. This challenge helps learners understand how JavaScript handles boolean-to-string conversion explicitly versus implicitly.

**Learning Objectives:**
- Use `String(boolean)` and `boolean.toString()` correctly
- Understand the difference between implicit and explicit conversion
- Write reusable conversion functions

**Sequence / Relation:**
This challenge naturally follows lessons on data types and precedes challenges involving more complex serialization. It serves as a bridge between basic type awareness and manipulation.

**Relevant Materials:**
- [MDN: Boolean object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [MDN: Type Conversion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

**Common Mistakes & Misconceptions:**
- Confusing `true` with `"true"` in strict equality checks (`===`)
- Assuming all environments handle boolean string conversion identically without testing
- Overlooking the return type when chaining methods

---

## 2. Climbing-Stairs.js

**What it does:** Solves the classic dynamic programming problem of finding the number of distinct ways to climb a staircase of `n` steps, where you can take either 1 or 2 steps at a time.

**Relation to curriculum:** Connects to Week 8 (recursion) and introduces the foundational concept of dynamic programming. Builds on combinatorial reasoning introduced earlier.

**Prerequisites:**
- Understanding of recursion and base cases
- Familiarity with iterative approaches and memoization basics

**Motivation:**
The climbing stairs problem is a gateway to dynamic programming. It illustrates how brute-force recursion leads to redundant calculations and how memoization or iteration can optimize performance dramatically.

**Learning Objectives:**
- Recognize overlapping subproblems
- Implement a recursive solution with memoization
- Implement an optimized iterative (bottom-up) solution
- Analyze time and space complexity differences

**Sequence / Relation:**
This challenge should follow recursion lessons and serve as an introduction to optimization techniques. It sets up later challenges on paths and grid-based problems.

**Relevant Materials:**
- [GeeksforGeeks: Count ways to reach the nth stair](https://www.geeksforgeeks.org/count-ways-reach-nth-stair/)
- [LeetCode 70: Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)

**Common Mistakes & Misconceptions:**
- Forgetting base cases (`n === 0` or `n === 1`)
- Implementing pure recursion without memoization, leading to exponential time
- Confusing this problem with permutations — order matters here (1+2 ≠ 2+1 in step sequence but both count)

---

## 3. Largest-Swap.js

**What it does:** Given a non-negative integer, swap at most two digits to produce the largest possible value. For example, `2736` → `7236`.

**Relation to curriculum:** Connects to Week 5 (arrays and string manipulation) and Week 9 (greedy algorithms). Develops analytical thinking about digit positions and value impact.

**Prerequisites:**
- Comfortable converting between numbers and digit arrays
- Understanding of place value in base-10 numbers
- Basic familiarity with greedy algorithm strategies

**Motivation:**
This challenge teaches greedy thinking: finding the optimal local decision (swap the rightmost digit that can improve the number) to achieve a global maximum. It reinforces the idea that not all problems require exhaustive search.

**Learning Objectives:**
- Convert a number to an array of digits for manipulation
- Identify the leftmost digit that is smaller than a digit to its right
- Perform a single optimal swap to maximize the result
- Handle edge cases (already sorted descending, single digit)

**Sequence / Relation:**
This challenge fits after lessons on greedy strategies and number manipulation. It pairs well with Climbing-Stairs as a contrast: one uses DP, the other uses a greedy approach.

**Relevant Materials:**
- [LeetCode 657: Maximum Swap](https://leetcode.com/problems/maximum-swap/)
- [freeCodeCamp: Greedy Algorithms](https://www.freecodecamp.org/news/greedy-algorithm/)

**Common Mistakes & Misconceptions:**
- Swapping the first occurrence instead of the rightmost larger digit
- Modifying the number in-place without preserving original digits
- Assuming the largest digit should always be moved to the front without considering position
- Returning a string instead of a number when the output is expected as an integer

---

## 4. Nested-Array.js

**What it does:** Flattens a nested array of arbitrary depth into a single flat array. For example, `[1, [2, [3, [4]]]]` → `[1, 2, 3, 4]`.

**Relation to curriculum:** Connects to Week 6 (arrays and iteration) and Week 9 (recursion). A core skill for data transformation and handling complex data structures.

**Prerequisites:**
- Familiarity with array methods (`push`, `concat`, `flat`)
- Understanding of recursive function calls and termination conditions
- Knowledge of `Array.isArray()`

**Motivation:**
Real-world data (JSON APIs, configuration files) is often nested. The ability to flatten arbitrary-depth structures is a fundamental skill in data processing and algorithm design.

**Learning Objectives:**
- Implement flattening using recursion
- Implement flattening using an iterative stack-based approach
- Compare `Array.prototype.flat()` with custom implementations
- Handle edge cases like empty arrays and mixed-type nesting

**Sequence / Relation:**
This challenge should follow recursion and array iteration topics. It serves as a practical application of both recursive and iterative thinking and prepares learners for working with hierarchical data.

**Relevant Materials:**
- [MDN: Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [YouTube: Flatten a Nested Array (JavaScript)](https://www.youtube.com/watch?v=Li7DGMtQq2w)

**Common Mistakes & Misconceptions:**
- Using `.flat(Infinity)` as the only solution without understanding the underlying algorithm
- Forgetting to check `Array.isArray()` before recursing, causing `TypeError` on non-array elements
- Infinite recursion when encountering circular references (out of scope but worth noting)
- Modifying the original array in-place instead of returning a new one

---

## Dependencies Between Challenges

| Challenge | Depends On |
|---|---|
| Boolean-to-String-Conversion | None (standalone) |
| Climbing-Stairs | Boolean-to-String-Conversion (foundational thinking) |
| Largest-Swap | Climbing-Stairs (algorithmic thinking progression) |
| Nested-Array | Largest-Swap (array manipulation practice) |

> **Note:** Each challenge is independently solvable. The sequence above is recommended for pedagogical progression, building from simple type conversion through recursion, greedy algorithms, and finally nested data structures.
