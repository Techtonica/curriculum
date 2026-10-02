# Bitmasking and Subset Dynamic Programming (DP)

## 📌 Overview
Bitmasking is a technique used to represent a set of elements using a binary number. When combined with Dynamic Programming, it allows us to solve problems involving subsets or permutations efficiently, typically when the input size $N$ is small (usually $N \le 20$).

## 🚀 Interactive Walkthrough

### 1. What is a Bitmask?
Imagine you have a set of 4 items: `{🍎, 🍌, 🍇, 🍊}`.
Instead of using a list of booleans `[true, false, true, false]`, we use a binary number: `1010`.
- Bit 0 (rightmost): 0 (No 🍎)
- Bit 1: 1 (Yes 🍌)
- Bit 2: 0 (No 🍇)
- Bit 3: 1 (Yes 🍊)

**Integer Value:** $1010_2 = 10_{10}$

### 2. Essential Bitwise Operations
| Operation | Code | Description |
| :--- | :--- | :--- |
| **Check if $i$-th bit is set** | `(mask & (1 << i)) != 0` | Returns true if the $i$-th element is in the set. |
| **Set $i$-th bit** | `mask \| (1 << i)` | Adds the $i$-th element to the set. |
| **Unset $i$-th bit** | `mask & ~(1 << i)` | Removes the $i$-th element from the set. |
| **Toggle $i$-th bit** | `mask ^ (1 << i)` | Flips the state of the $i$-th element. |
| **All subsets of size $N$** | `(1 << N) - 1` | A mask where all $N$ bits are set to 1. |

### 3. Subset DP Logic
Subset DP is used when the state of a problem depends on "which elements have already been visited/used".

**Common State:** `dp[mask][last_element]`
- `mask`: A bitmask representing the set of visited elements.
- `last_element`: The last element added to the set (crucial for TSP-like problems).

---

## 🛠️ Visual Example: The Traveling Salesperson Problem (TSP)
**Goal:** Find the shortest path that visits all cities exactly once and returns to the start.

**Visualizing the State Transition:**
`dp[mask][i]` $\rightarrow$ The minimum cost to visit cities in `mask`, ending at city `i`.

**Transition:**
$dp[mask | (1 \ll j)][j] = \min(dp[mask | (1 \ll j)][j], dp[mask][i] + dist[i][j])$
*Where $j$ is a city not yet in the mask.*

---

## 💻 Implementation Example (Python)

```python
def solve_tsp(dist):
    n = len(dist)
    # dp[mask][i] stores the min distance to visit cities in mask, ending at i
    dp = [[float('inf')] * n for _ in range(1 << n)]
    
    # Base case: start at city 0
    dp[1][0] = 0
    
    for mask in range(1, 1 << n):
        for i in range(n):
            if dp[mask][i] == float('inf'): continue
            
            # Try to visit city j
            for j in range(n):
                if not (mask & (1 << j)): # If j is not visited
                    new_mask = mask | (1 << j)
                    dp[new_mask][j] = min(dp[new_mask][j], dp[mask][i] + dist[i][j])
    
    # Return to start city 0 from all possible last cities
    full_mask = (1 << n) - 1
    return min(dp[full_mask][i] + dist[i][0] for i in range(1, n))

# Example Distance Matrix
graph = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
]
print(f"Minimum TSP Path: {solve_tsp(graph)}")
```

## 📝 Exercises
1. **Easy:** Implement a function to count the number of set bits (1s) in an integer.
2. **Medium:** Solve the "Assignment Problem" using Bitmask DP.
3. **Hard:** Solve the "Hamiltonian Path" problem for a given graph.

## 📚 Resources
- [CP-Algorithms: Bitmasks](https://cp-algorithms.com/)
- [LeetCode: Problems tagged with Bitmask](https://leetcode.com/tag/bitmask/)
