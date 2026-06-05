# Bitmasking: An Interactive Walkthrough

## Introduction
Bitmasking is a powerful technique that uses the bits of an integer to represent a subset or a combination of elements. Since integers are represented as binary in memory, bitwise operations on them are extremely fast. This makes bitmasking particularly useful for algorithmic problems involving subsets, permissions, or state representation, such as Subset DP (Dynamic Programming).

## Visualizing Bitmasks
Consider a set of items: `{A, B, C, D}`. We can represent any subset of this set using a 4-bit integer, where the $i$-th bit is `1` if the $i$-th element is included in the subset, and `0` otherwise.

| Subset | Binary (DCBA) | Integer Value |
|--------|---------------|---------------|
| `{}` | `0000` | 0 |
| `{A}` | `0001` | 1 |
| `{B}` | `0010` | 2 |
| `{A, B}` | `0011` | 3 |
| `{A, C, D}` | `1101` | 13 |

```mermaid
graph TD
    S([Set: {A, B, C}])
    
    000((000: {}))
    001((001: {A}))
    010((010: {B}))
    100((100: {C}))
    011((011: {A, B}))
    101((101: {A, C}))
    110((110: {B, C}))
    111((111: {A, B, C}))

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

## Interactive Walkthrough: Subset DP
Let's apply bitmasking to a common scenario: The Traveling Salesperson Problem (TSP) on a small number of cities. We need to visit $N$ cities, and we use a bitmask to keep track of which cities have been visited.

### Core Operations
1. **Setting a bit (Include element $i$)**: `mask | (1 << i)`
2. **Checking a bit (Is element $i$ included?)**: `(mask & (1 << i)) != 0`
3. **Clearing a bit (Remove element $i$)**: `mask & ~(1 << i)`
4. **Toggling a bit**: `mask ^ (1 << i)`

### DP State Representation
We define our state as `dp(mask, current_city)`.
- `mask`: The set of visited cities.
- `current_city`: The city we are currently at.

The transition involves iterating over all unvisited cities `next_city` (where `(mask & (1 << next_city)) == 0`), and updating our minimum cost:
`cost = dp(mask | (1 << next_city), next_city) + distance(current_city, next_city)`

## Practice Problem
Try to implement a function that generates all possible subsets of an array `[1, 2, 3]` using bitmasking!

<details>
<summary>Click here for a solution</summary>

```javascript
function generateSubsets(nums) {
    const n = nums.length;
    const subsets = [];
    // 1 << n is 2^n, the total number of subsets
    for (let mask = 0; mask < (1 << n); mask++) {
        const currentSubset = [];
        for (let i = 0; i < n; i++) {
            // Check if the i-th bit is set in the mask
            if ((mask & (1 << i)) !== 0) {
                currentSubset.push(nums[i]);
            }
        }
        subsets.push(currentSubset);
    }
    return subsets;
}
console.log(generateSubsets([1, 2, 3]));
```
</details>
