# Bitmasking

### Projected Time

About 60-90 minutes

- Lesson: 20 min
- Guided Practice: 20-30 min
- Independent Practice: 15 min
- Check for Understanding: 10-15 min

### Prerequisites

- [Data Structures](../data-structures/intro-to-data-structures.md)
- [JavaScript 8 - Regular Expressions](../javascript/javascript-8-regex.md)
- Basic understanding of binary number representation

### Motivation

Bitmasking is one of the most efficient techniques in computer science for representing and manipulating sets or states. Because modern CPUs process binary operations in a single clock cycle, bitmask-based solutions can be orders of magnitude faster than equivalent array or object-based approaches.

- Used in permission systems (e.g., Unix file permissions: `chmod 755`)
- Essential for competitive programming, especially dynamic programming on subsets
- Appears in graphics (color channels like RGBA), networking (IP subnet masks), and game state engines
- Understanding bitmasking makes you a stronger algorithmic thinker for coding interviews

### Objectives

**Participants will be able to:**

- Explain what a bitmask is and how it represents a set using bits
- Apply the six core bitwise operations: AND, OR, XOR, NOT, left shift, right shift
- Use a bitmask to enumerate all subsets of a set
- Implement a Subset Dynamic Programming solution using bitmasking
- Identify real-world problems that benefit from bitmask-based solutions

### Specific Things To Learn

- What binary representation means for integers and why it matters
- The six bitwise operators: `&`, `|`, `^`, `~`, `<<`, `>>`
- Setting, checking, clearing, and toggling individual bits
- How a bitmask of length `n` represents `2^n` possible subsets
- The Traveling Salesperson Problem (TSP) as a canonical Subset DP example
- Time and space complexity trade-offs of bitmask DP (`O(2^n * n)`)

### Materials

- [Bitwise Operators — MDN Web Docs (15 min read)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators) - Read the bitwise operators section and run each example in your browser console.
- [Bitmask DP — CP-Algorithms (20 min read)](https://cp-algorithms.com/algebra/bit-manipulation.html) - Focus on the "Tricks" section; you'll use these patterns in Guided Practice.
- [Visualgo — Bitmask visualizer (interactive)](https://visualgo.net/en) - Use this to see subset enumeration step-by-step before the Guided Practice section.

### Lesson

#### What is a Bitmask?

A **bitmask** is an integer whose binary representation is used to encode a set or a collection of boolean flags. Each bit position corresponds to one element; if the bit is `1`, the element is "included"; if `0`, it is "excluded."

Consider a set of four items: `{A, B, C, D}`. We can represent any subset using a 4-bit integer:

| Subset     | Binary (DCBA) | Integer Value |
|------------|---------------|---------------|
| `{}`       | `0000`        | 0             |
| `{A}`      | `0001`        | 1             |
| `{B}`      | `0010`        | 2             |
| `{A, B}`   | `0011`        | 3             |
| `{A, C, D}`| `1101`        | 13            |

#### Core Bit Operations

These four operations form the backbone of every bitmask algorithm:

1. **Set bit `i`** (include element `i`): `mask | (1 << i)`
2. **Check bit `i`** (is element `i` included?): `(mask & (1 << i)) !== 0`
3. **Clear bit `i`** (remove element `i`): `mask & ~(1 << i)`
4. **Toggle bit `i`**: `mask ^ (1 << i)`

#### Visualizing Subsets with a Graph

```mermaid
graph TD
    S([Set: {A, B, C}])

    000((000: empty))
    001((001: A))
    010((010: B))
    100((100: C))
    011((011: A B))
    101((101: A C))
    110((110: B C))
    111((111: A B C))

    000 --> 001
    000 --> 010
    000 --> 100

    001 --> 011
    001 --> 101

    010 --> 011
    010 --> 110

    100 --> 101
    100 --> 110

    011 --> 111
    101 --> 111
    110 --> 111
```

#### Subset DP — Traveling Salesperson Problem

One of the most famous applications of bitmasking is the **Traveling Salesperson Problem (TSP)**. Given `n` cities and costs between them, find the minimum-cost tour visiting all cities exactly once.

**State:** `dp[mask][city]` = minimum cost to reach `city` having visited exactly the cities encoded in `mask`.

**Transition:** For each unvisited city `next` where bit `next` is NOT set in `mask`:
```
dp[mask | (1 << next)][next] = min(dp[mask | (1 << next)][next], dp[mask][city] + dist[city][next])
```

**Time complexity:** `O(2^n * n²)` — feasible for `n ≤ 20`.

### Common Mistakes & Misconceptions

- **Forgetting operator precedence:** In JavaScript, `&`, `|`, and `^` have lower precedence than `===`. Always wrap bitwise expressions in parentheses: `(mask & (1 << i)) !== 0`, not `mask & (1 << i) !== 0`.
- **Signed 32-bit limit:** JavaScript bitwise operators work on signed 32-bit integers. For `n > 30`, use BigInt or a language with 64-bit support.
- **Off-by-one on masks:** The full mask for `n` elements is `(1 << n) - 1`, not `1 << n`.
- **Confusing XOR with OR:** XOR (`^`) toggles a bit; OR (`|`) always sets it. Using the wrong one leads to subtle bugs.
- **Thinking bitmask DP is always faster:** The exponential state space `2^n` means bitmask DP is only practical for small `n` (typically ≤ 20). For larger inputs, other algorithms are needed.

### Guided Practice

Work through the following step-by-step with your facilitator or a partner.

**Goal:** Enumerate all subsets of `[1, 2, 3]` using bitmasking and print them.

1. Open your browser's DevTools console (F12).
2. For a set of size `n = 3`, there are `2^3 = 8` total subsets. The masks run from `0` (`000`) to `7` (`111`).
3. For each `mask` from `0` to `7`, loop through bits `0`, `1`, `2`. If bit `i` is set, include `nums[i]` in the current subset.
4. Type and run this code, explaining each line as you go:

```javascript
function enumerateSubsets(nums) {
  const n = nums.length;
  for (let mask = 0; mask < (1 << n); mask++) {
    const subset = [];
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) !== 0) {
        subset.push(nums[i]);
      }
    }
    console.log(`mask=${mask.toString(2).padStart(n, '0')} → [${subset}]`);
  }
}

enumerateSubsets([1, 2, 3]);
```

5. Verify: you should see exactly 8 lines, from `000 → []` to `111 → [1, 2, 3]`.
6. Discuss: What changes if you add a 4th element? What does the output look like?

### Independent Practice

Complete the following on your own:

1. **Subset sum:** Write a function `hasSubsetWithSum(nums, target)` that returns `true` if any subset of `nums` adds up to `target`, using bitmask enumeration.
2. **Permission flags:** Represent Unix-style file permissions (read=4, write=2, execute=1) as a bitmask. Write functions `canRead(perm)`, `canWrite(perm)`, and `canExecute(perm)`.
3. **Maximum XOR subset:** Given an array of integers, find the subset whose XOR value is maximum, using bitmask enumeration.

### Challenge

Implement a solution to the **Traveling Salesperson Problem** for `n = 4` cities using bitmask DP.

- Represent cities as `{0, 1, 2, 3}` with a randomly generated distance matrix.
- Fill the DP table bottom-up.
- Recover the actual tour path (not just the cost) by storing parent pointers alongside the DP array.
- Analyze: how does runtime change as `n` grows from 4 to 8 to 16?

### Check for Understanding

Answer these questions independently (written or verbal), then compare with a partner:

1. What is the bitmask representation of the subset `{B, D}` from a 4-element set `{A, B, C, D}`?
2. Write a one-line JavaScript expression that checks whether element `3` is included in `mask`.
3. Why does bitmask DP for TSP have time complexity `O(2^n * n²)`?
4. Give one real-world system (outside of algorithms) that uses bitmasks. Explain which bits mean what.
5. What happens in JavaScript when `n = 32` and you write `1 << 32`?

### Supplemental Materials

- [Bit Manipulation — HackerEarth Tutorial](https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/) - Additional practice problems with immediate feedback.
- [Bitmask DP Problems on LeetCode](https://leetcode.com/tag/bitmask/) - Filter by "Easy" to start; work up to "Medium" after completing independent practice.
