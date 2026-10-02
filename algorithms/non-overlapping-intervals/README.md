# Maximum Number of Non-Overlapping Intervals

## Problem Statement
Given a set of intervals on a 1D axis, each defined by a start time and an end time, find the maximum number of intervals that do not overlap with each other.

This is a classic problem that can be solved using a **Greedy Algorithm**.

## Visual Walkthrough

Imagine the following intervals:
- A: [1, 4]
- B: [2, 3]
- C: [3, 6]
- D: [5, 8]
- E: [7, 9]

**Step-by-step Greedy Approach:**
1. **Sort** all intervals by their **end times**.
   - Sorted: B [2, 3], A [1, 4], C [3, 6], D [5, 8], E [7, 9]
2. **Pick** the first interval (the one that ends earliest). This leaves the most room for subsequent intervals.
   - Selected: **B [2, 3]**
3. **Skip** all intervals that start before the current interval ends.
   - A [1, 4] starts at 1 (1 < 3) $\rightarrow$ Skip.
4. **Pick** the next available interval.
   - Selected: **C [3, 6]** (Starts at 3, which is $\ge$ end of B).
5. **Skip** intervals that overlap with C.
   - D [5, 8] starts at 5 (5 < 6) $\rightarrow$ Skip.
6. **Pick** the next available interval.
   - Selected: **E [7, 9]** (Starts at 7, which is $\ge$ end of C).

**Result:** 3 intervals (B, C, E).

## Complexity Analysis
- **Time Complexity:** $O(n \log n)$ due to the sorting step. The subsequent linear scan takes $O(n)$.
- **Space Complexity:** $O(1)$ or $O(n)$ depending on the sorting implementation.

## Implementation
See `solution.js` for the JavaScript implementation.
