# Longest Increasing Subsequence

## Projected Time

- Reading: 35 minutes
- Activities: 75-105 minutes
- Total: 110-140 minutes

## Prerequisites

- **Basic Programming Concepts, Arrays, and Strings:** Variables, data types, conditional statements, loops (for, while). How to access elements, iterate, and basic operations
  - [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-array-functions.md)
  - [JavaScript 1 - Variables, Strings, Numbers lesson](/javascript/javascript-1-variables.md)
- **Time and Space Complexity (Big O Notation):** A basic understanding of how to analyze algorithm efficiency.
  - [Runtime Complexity](/runtime-complexity/runtime-complexity.md)
  - [Intro to Algorithms](/algorithms/intro-to-algorithms.md)

## Motivation

The Longest Increasing Subsequence (LIS) problem is a classic algorithm challenge that appears frequently in technical interviews. Beyond interviews, understanding this problem helps develop critical thinking skills for solving complex optimization problems. The techniques used in LIS are foundational to many dynamic programming solutions and have real-world applications in:

- Sequence alignment in computational biology
- Text comparison and version control systems
- Stock price trend analysis
- Network packet ordering

Learning this algorithm will strengthen your problem-solving toolkit and prepare you for more advanced algorithm challenges.

## Objectives

By the end of this lesson, you will be able to:

- Understand what a subsequence is and how it differs from a substring
- Identify increasing subsequences within an array
- Implement multiple approaches to find the longest increasing subsequence
- Analyze the time and space complexity of different LIS solutions
- Apply the LIS algorithm to solve related problems

## Specific Things to Learn

- Definition of a subsequence vs. subarray
- Brute force approach to finding LIS
- Dynamic programming solution
  - Bottom-up tabulation method
  - State representation and transition
- Binary search optimization
- Common variations of the LIS problem
- Backtracking to reconstruct the actual subsequence

## Activities

### Activity 1: Understanding Subsequences (20 minutes)

Let's start by understanding what makes a subsequence different from other array patterns.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

**Think of it like this:** Imagine you have a line of people, and you want to select some of them to form a smaller line. The people you select must maintain their original relative positions - you can't rearrange them.

**Example:**
For the array `[3, 1, 8, 2, 5]`:

```
Original: [3, 1, 8, 2, 5]
Positions: 0  1  2  3  4

Valid subsequences:
- [3, 8, 5] (positions 0, 2, 4) ✓
- [1, 2, 5] (positions 1, 3, 4) ✓
- [3, 1, 2] (positions 0, 1, 3) ✓
- [8, 2, 1] (would need positions 2, 3, 1) ✗ - violates order!
```

**Key Rule:** In a subsequence, if element A comes before element B in the original array, then A must come before B in the subsequence (if both are included).

**Exercise:** For the array `[10, 9, 2, 5, 3, 7, 101, 18]`, determine which of these are valid subsequences:

1. `[10, 2, 3, 101]`
2. `[9, 5, 7, 18]`
3. `[2, 7, 5, 101]`
4. `[10, 9, 7, 18]`

**Manual Check Process:**
For each proposed subsequence, write down the positions of elements in the original array and verify they're in increasing order.

<details><summary>Click here for the answer</summary>Answer: 1, 2, and 4 are all valid subsequences</details>

### Activity 2: Identifying Increasing Subsequences (20 minutes)

An **increasing subsequence** is a subsequence where each element is greater than the previous one.

**Real-world analogy:** Think of climbing a mountain where you can only step on rocks that are higher than your current position. An increasing subsequence is like finding a valid path up the mountain.

**Example Analysis:**
For the array `[10, 9, 2, 5, 3, 7, 101, 18]`:

<details><summary>
    Step By Step Trace:
</summary>

```
Array:     [10, 9, 2, 5, 3, 7, 101, 18]
Positions:  0  1  2  3  4  5   6   7

Let's trace some increasing subsequences:

Path 1: Start at position 2 (value 2)
- Can go to position 3 (5 > 2) ✓
- Can go to position 5 (7 > 5) ✓
- Can go to position 6 (101 > 7) ✓
Result: [2, 5, 7, 101]

Path 2: Start at position 1 (value 9)
- Can go to position 6 (101 > 9) ✓
- Can go to position 7? (18 < 101) ✗
Result: [9, 101]

Path 3: Start at position 4 (value 3)
- Can go to position 5 (7 > 3) ✓
- Can go to position 7 (18 > 7) ✓
Result: [3, 7, 18]
```

</details>

**Interactive Exercise:**
For the array `[3, 1, 8, 2, 5, 6]`, manually find all increasing subsequences of length 3 or more by following this process:

1. Start at each position
2. Look ahead for the next larger number
3. Continue building the chain
4. Record all chains of length 3+

<details><summary>
    Step By Step Trace:
</summary>

```
Array: [3, 1, 8, 2, 5, 6]
Index:  0  1  2  3  4  5

Starting from position 0 (value 3):
- Next larger: position 2 (value 8)
- From 8, next larger: none directly, but we can use 5,6
- Chains: [3, 8], [3, 5, 6] (wait, 3 comes before 5?)

Let me be more systematic:
Position 0 (3) → Position 4 (5) → Position 5 (6) = [3, 5, 6] ✓
Position 1 (1) → Position 2 (8) → none larger = [1, 8]
Position 1 (1) → Position 3 (2) → Position 4 (5) → Position 5 (6) = [1, 2, 5, 6] ✓
Position 1 (1) → Position 4 (5) → Position 5 (6) = [1, 5, 6] ✓
```

</details>

### Activity 3: Brute Force Approach (25 minutes)

Let's start with the simplest approach: generate all possible subsequences and find the longest one that is increasing.

**The Brute Force Strategy:**

1. Generate every possible subsequence (there are 2^n of them)
2. Check if each subsequence is increasing
3. Keep track of the longest increasing one

**Mental Model:** Imagine you have a light switch for each element in the array. Each combination of on/off switches represents a different subsequence.

**Example Walkthrough:**
For array `[10, 22, 9, 33]`, let's enumerate some subsequences:

<details><summary>
    Step By Step Trace:
</summary>

```
Switches: [OFF, OFF, OFF, OFF] → [] (empty)
Switches: [ON,  OFF, OFF, OFF] → [10]
Switches: [OFF, ON,  OFF, OFF] → [22]
Switches: [OFF, OFF, ON,  OFF] → [9]
Switches: [OFF, OFF, OFF, ON ] → [33]
Switches: [ON,  ON,  OFF, OFF] → [10, 22] ← increasing ✓
Switches: [ON,  OFF, ON,  OFF] → [10, 9]  ← not increasing ✗
Switches: [ON,  OFF, OFF, ON ] → [10, 33] ← increasing ✓
Switches: [OFF, ON,  ON,  OFF] → [22, 9]  ← not increasing ✗
Switches: [OFF, ON,  OFF, ON ] → [22, 33] ← increasing ✓
Switches: [OFF, OFF, ON,  ON ] → [9, 33]  ← increasing ✓
Switches: [ON,  ON,  ON,  OFF] → [10, 22, 9] ← not increasing ✗
Switches: [ON,  ON,  OFF, ON ] → [10, 22, 33] ← increasing ✓ (length 3)
Switches: [ON,  OFF, ON,  ON ] → [10, 9, 33] ← not increasing ✗
Switches: [OFF, ON,  ON,  ON ] → [22, 9, 33] ← not increasing ✗
Switches: [ON,  ON,  ON,  ON ] → [10, 22, 9, 33] ← not increasing ✗
```

</details>

**Longest increasing subsequence:** `[10, 22, 33]` with length 3.

**Problem Analysis:**

- For n elements, we have 2^n possible subsequences
- For each subsequence, we need O(k) time to check if it's increasing (where k is the length)
- Total time complexity: O(k × 2^n) which is exponential and impractical for large arrays

**Exercise:** Manually trace through the brute force approach for the array `[5, 2, 8, 6, 3, 6, 9, 7]`. How many subsequences do you need to check? What's the longest increasing subsequence?

<details><summary>Answer</summary>
There are 256 possible subsequences, the longest of which is `[2, 3, 6, 9]`

</details>

### Activity 4: Dynamic Programming Solution (35 minutes)

We can solve this much more efficiently using dynamic programming by breaking the problem into smaller subproblems.

**Key Insight:** If we know the longest increasing subsequence ending at each position, we can build up to the final answer.

**DP State Definition:**
`dp[i]` = length of the longest increasing subsequence ending exactly at position i

**Recurrence Relation:**
For each position i, look at all previous positions j where `nums[j] < nums[i]`, and:
`dp[i] = max(dp[i], dp[j] + 1)`

**Step-by-Step Example:**
Array: `[10, 22, 9, 33, 21, 50, 41, 60]`

```
Initial state:
Position: 0   1   2   3   4   5   6   7
Value:   [10, 22,  9, 33, 21, 50, 41, 60]
dp:      [ 1,  1,  1,  1,  1,  1,  1,  1]
```

**Building the DP table:**

**Position 1 (value 22):**

- Check position 0: 22 > 10 ✓, so dp[1] = max(1, dp[0] + 1) = max(1, 2) = 2
- dp: [1, 2, 1, 1, 1, 1, 1, 1]

**Position 2 (value 9):**

- Check position 0: 9 > 10 ✗
- Check position 1: 9 > 22 ✗
- dp[2] remains 1
- dp: [1, 2, 1, 1, 1, 1, 1, 1]

**Position 3 (value 33):**

- Check position 0: 33 > 10 ✓, dp[3] = max(1, 1 + 1) = 2
- Check position 1: 33 > 22 ✓, dp[3] = max(2, 2 + 1) = 3
- Check position 2: 33 > 9 ✓, dp[3] = max(3, 1 + 1) = 3
- dp: [1, 2, 1, 3, 1, 1, 1, 1]

**Position 4 (value 21):**

- Check position 0: 21 > 10 ✓, dp[4] = max(1, 1 + 1) = 2
- Check position 1: 21 > 22 ✗
- Check position 2: 21 > 9 ✓, dp[4] = max(2, 1 + 1) = 2
- Check position 3: 21 > 33 ✗
- dp: [1, 2, 1, 3, 2, 1, 1, 1]

**Position 5 (value 50):**

- Check all previous positions where value < 50:
- Position 0: 50 > 10 ✓, dp[5] = max(1, 1 + 1) = 2
- Position 1: 50 > 22 ✓, dp[5] = max(2, 2 + 1) = 3
- Position 2: 50 > 9 ✓, dp[5] = max(3, 1 + 1) = 3
- Position 3: 50 > 33 ✓, dp[5] = max(3, 3 + 1) = 4
- Position 4: 50 > 21 ✓, dp[5] = max(4, 2 + 1) = 4
- dp: [1, 2, 1, 3, 2, 4, 1, 1]

**Continue this process...**

**Final dp array:** [1, 2, 1, 3, 2, 4, 4, 5]
**Answer:** max(dp) = 5

<details><summary>
    Code Implementation:
</summary>

```javascript
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    // Initialize dp array - each position can form LIS of length 1
    const dp = new Array(nums.length).fill(1);

    // Fill dp array using the recurrence relation
    for (let i = 1; i &lt; nums.length; i++) {
        for (let j = 0; j &lt; i; j++) {
            // If we can extend the LIS ending at j
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // The answer is the maximum value in dp array
    return Math.max(...dp);
}
```

</details>

**Complexity Analysis:**

- Time Complexity: O(n²) - nested loops through the array
- Space Complexity: O(n) - for the dp array

**Exercise:** Trace through the DP approach for the array `[3, 1, 8, 2, 5, 6]`. Fill in the dp array step by step and identify which positions contribute to the final answer.

### Activity 5: Binary Search Optimization (25 minutes)

We can optimize our solution to O(n log n) using a clever approach with binary search.

**Key Insight:** Instead of storing the length of LIS ending at each position, we'll maintain an array where `tails[i]` represents the smallest ending value of all increasing subsequences of length i+1.

**Why this works:** If we want to extend subsequences of the same length, we prefer the one with the smaller ending value because it gives us more options for future extensions.

**Algorithm:**

1. Maintain a `tails` array
2. For each number in the input:

3. If it's larger than all elements in `tails`, append it
4. Otherwise, find the smallest element in `tails` that's ≥ current number and replace it

**Detailed Example:**
Array: `[10, 22, 9, 33, 21, 50, 41, 60]`

<details><summary>
    Step By Step Trace:
</summary>

```plaintext
Process 10:
tails = [10]
Meaning: The best LIS of length 1 ends with 10

Process 22:
22 > 10, so append
tails = [10, 22]
Meaning: Best LIS of length 1 ends with 10, best LIS of length 2 ends with 22

Process 9:
9 &lt; 10, so replace 10 with 9
tails = [9, 22]
Meaning: Best LIS of length 1 ends with 9 (better than 10!), best LIS of length 2 ends with 22

Process 33:
33 > 22, so append
tails = [9, 22, 33]
Meaning: Best LIS of length 1 ends with 9, length 2 ends with 22, length 3 ends with 33

Process 21:
21 is between 9 and 22, so replace 22 with 21
tails = [9, 21, 33]
Meaning: Now the best LIS of length 2 ends with 21 (better than 22!)

Process 50:
50 > 33, so append
tails = [9, 21, 33, 50]

Process 41:
41 is between 33 and 50, so replace 50 with 41
tails = [9, 21, 33, 41]

Process 60:
60 > 41, so append
tails = [9, 21, 33, 41, 60]

Final length: 5
```

</details>

<details><summary>
    Binary Search Implementation:
</summary>

```javascript
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    const tails = [];

    for (let num of nums) {
        // Binary search to find the position to insert/replace
        let left = 0;
        let right = tails.length;

        while (left &lt; right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] &lt; num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // If left === tails.length, we're appending
        if (left === tails.length) {
            tails.push(num);
        } else {
            // Otherwise, we're replacing
            tails[left] = num;
        }
    }

    return tails.length;
}
```

<details><summary>
    Manual Binary Search Trace:
    For the number 21 in tails = [9, 22, 33]:
</summary>

```plaintext
Initial: left = 0, right = 3
tails = [9, 22, 33]
         ↑      ↑
       left   right

Iteration 1:
mid = (0 + 3) / 2 = 1
tails[1] = 22
22 &lt; 21? No, so right = mid = 1

Current: left = 0, right = 1
tails = [9, 22, 33]
         ↑  ↑
       left right

Iteration 2:
mid = (0 + 1) / 2 = 0
tails[0] = 9
9 &lt; 21? Yes, so left = mid + 1 = 1

Current: left = 1, right = 1
Loop ends because left === right

Replace tails[1] with 21: [9, 21, 33]
```

</details>

**Complexity Analysis:**

- Time Complexity: O(n log n) - n iterations, each with O(log n) binary search
- Space Complexity: O(n) - for the tails array

**Exercise:** Trace through the binary search approach for the array `[2, 6, 3, 4, 1, 2, 9, 5, 8]`. Show the tails array after processing each element and demonstrate the binary search for at least two replacements.

### Activity 6: Reconstructing the Actual Subsequence (20 minutes)

So far, we've only calculated the length of the LIS. Let's modify our DP solution to reconstruct the actual subsequence.

**Strategy:** Keep track of the "parent" of each position - which previous position led to the optimal LIS ending at the current position.

**Enhanced Algorithm:**

1. Maintain the dp array as before
2. Keep a `prev` array where `prev[i]` stores the index of the previous element in the LIS ending at position i
3. After filling both arrays, backtrack from the position with maximum dp value

**Detailed Example:**
Array: `[10, 9, 2, 5, 3, 7, 101, 18]`

```plaintext
Building dp and prev arrays:

Position: 0   1   2   3   4   5    6    7
Value:   [10,  9,  2,  5,  3,  7, 101,  18]
dp:      [ 1,  1,  1,  2,  2,  3,   4,   4]
prev:    [-1, -1, -1,  2,  2,  3,   5,   5]

Explanation of prev array:
- prev[3] = 2: The LIS ending at position 3 came from extending position 2
- prev[4] = 2: The LIS ending at position 4 came from extending position 2
- prev[5] = 3: The LIS ending at position 5 came from extending position 3
- prev[6] = 5: The LIS ending at position 6 came from extending position 5
- prev[7] = 5: The LIS ending at position 7 came from extending position 5
```

**Backtracking Process:**

1. Find the position with maximum dp value: position 6 (dp[6] = 4)
2. Start backtracking from position 6:

```plaintext
Current position: 6, value: 101, prev: 5
Subsequence so far: [101]

Current position: 5, value: 7, prev: 3
Subsequence so far: [7, 101]

Current position: 3, value: 5, prev: 2
Subsequence so far: [5, 7, 101]

Current position: 2, value: 2, prev: -1
Subsequence so far: [2, 5, 7, 101]

prev = -1 means we've reached the start
Final LIS: [2, 5, 7, 101]
```

<details><summary>
    Code Implementation:
</summary>

```javascript
function findLIS(nums) {
    if (nums.length === 0) return [];

    const dp = new Array(nums.length).fill(1);
    const prev = new Array(nums.length).fill(-1);

    let maxLength = 1;
    let endIndex = 0;

    // Fill dp and prev arrays
    for (let i = 1; i &lt; nums.length; i++) {
        for (let j = 0; j &lt; i; j++) {
            if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;  // Remember where this came from
            }
        }

        // Track the position with maximum LIS length
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            endIndex = i;
        }
    }

    // Reconstruct the subsequence by backtracking
    const result = [];
    let current = endIndex;

    while (current !== -1) {
        result.unshift(nums[current]);  // Add to front
        current = prev[current];        // Move to previous element
    }

    return result;
}
```

</details>

**Manual Trace Exercise:** Use the above algorithm to find and reconstruct the LIS for `[3, 1, 8, 2, 5, 6]`. Show:

1. The final dp array
2. The final prev array
3. The backtracking steps
4. The reconstructed subsequence

### Activity 7: Real-World Application (15 minutes)

**Scenario:** You're a financial analyst tracking stock prices over several days. You want to identify the longest period where the stock price was consistently increasing to understand growth trends.

**Problem Setup:**
Stock prices over 15 days: `[100, 113, 110, 85, 105, 102, 86, 63, 81, 101, 94, 106, 101, 79, 94, 90, 97]`

**Analysis Process:**

1. Apply the LIS algorithm to find the longest increasing price sequence
2. Identify the actual days when this trend occurred
3. Calculate the total growth during this period

**Manual Analysis:**

```plaintext
Day:   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
Price:[100,113,110, 85,105,102, 86, 63, 81,101, 94,106,101, 79, 94, 90, 97]

Let's trace some increasing sequences:
- Starting day 8 (price 63): 63 → 81 → 101 → 106 (days 8,9,10,12)
- Starting day 4 (price 85): 85 → 105 (days 4,5)
- Starting day 14 (price 79): 79 → 94 → 97 (days 14,15,17)

Using our DP algorithm:
dp array: [1,2,2,1,2,2,1,1,2,3,2,4,4,1,2,2,3]

Maximum LIS length: 4
One possible LIS: [63, 81, 101, 106] occurring on days 8, 9, 10, 12
```

**Business Interpretation:**

- The longest consistent growth period lasted 4 trading sessions
- The stock grew from $63 to $106 during this trend
- This represents a 68% increase over the trend period
- Days 8-12 would be identified as a strong bullish period

**Exercise:** Apply the LIS algorithm to this cryptocurrency price data and interpret the results:
`[50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 100, 110, 105, 120]`

Find:

1. The length of the longest increasing trend
2. The actual price sequence of this trend
3. The percentage growth during this period
4. Which days this trend occurred

## Check for Understanding

**Conceptual Questions:**

1. What is the difference between a subsequence and a subarray? Give an example of each.
2. Why is the brute force approach impractical for large arrays?
3. In the DP solution, what does dp[i] represent?
4. How does the binary search optimization improve the time complexity?
5. Can you have multiple valid longest increasing subsequences in an array? Give an example.

**Practical Questions:** 6. For the array [4, 2, 1, 3, 5, 4, 7, 2], manually calculate the dp array using the DP approach. 7. Trace through the binary search approach for [1, 3, 2, 4] and show the tails array after each step. 8. If you needed to find the longest decreasing subsequence, how would you modify the DP algorithm?

**Application Questions:** 9. Describe a real-world scenario where you might use the LIS algorithm. 10. How would you modify the algorithm to find the longest non-decreasing subsequence (allowing equal values)?

## Additional Resources

- [GeeksforGeeks: Longest Increasing Subsequence](https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/)
- [LeetCode Problem: Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [YouTube: Back to Back SWE - Longest Increasing Subsequence](https://www.youtube.com/watch?v=fV-TF4OvZpk)
- [Topcoder: Dynamic Programming - From Novice to Advanced](https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/)
- [MIT OpenCourseWare: Dynamic Programming](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/)
