# Longest Common Subsequence (LCS)

## Topic Outline Time

- Reading: 30 minutes
- Activities: 60 minutes
- Total: ~90 minutes

## Prerequisites

- **Basic Programming Concepts, Arrays, and Strings:** Variables, data types, conditional statements, loops (for, while). How to access elements, iterate, and basic operations
  - [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-array-functions.md)
  - [JavaScript 1 - Variables, Strings, Numbers lesson](/javascript/javascript-1-variables.md)
- **Time and Space Complexity (Big O Notation):** A basic understanding of how to analyze algorithm efficiency.
  - [Runtime Complexity](/runtime-complexity/runtime-complexity.md)
  - [Intro to Algorithms](/algorithms/intro-to-algorithms.md)

## Materials Needed

- Paper and pencil for drawing tables and diagrams
- Colored pens (optional) to highlight matching characters

# Table of Contents

1. [Topic Outline Time](#topic-outline-time)
2. [Prerequisites](#prerequisites)
3. [Materials Needed](#materials-needed)
4. [Motivation](#motivation)
5. [Objectives](#objectives)
6. [Specific Things to Learn](#specific-things-to-learn)
   - [Activity 1: Understanding Subsequences (10 minutes)](#activity-1-understanding-subsequences-10-minutes)
   - [Activity 2: LCS Problem Visualization (15 minutes)](#activity-2-lcs-problem-visualization-15-minutes)
   - [Activity 3: Recursive Approach (20 minutes)](#activity-3-recursive-approach-20-minutes)
   - [Activity 4: Dynamic Programming Solution (25 minutes)](#activity-4-dynamic-programming-solution-25-minutes)
   - [Activity 5: Reconstructing the LCS (15 minutes)](#activity-5-reconstructing-the-lcs-15-minutes)
   - [Activity 6: Real-world Application (10 minutes)](#activity-6-real-world-application-10-minutes)
   - [Activity 7: Complexity Analysis (10 minutes)](#activity-7-complexity-analysis-10-minutes)
7. [Check for Understanding](#check-for-understanding)
8. [Additional Resources](#additional-resources)
9. [Practice Problems](#practice-problems)

## Motivation

The Longest Common Subsequence (LCS) algorithm is a fundamental problem in computer science with applications in:

- DNA sequence analysis in bioinformatics
- File comparison tools like `diff`
- Spell checking and autocorrect features
- Version control systems
- Plagiarism detection

Understanding LCS will strengthen your problem-solving skills and introduce you to dynamic programming techniques that are valuable in technical interviews and real-world applications.

## Objectives

By the end of this lesson, you will be able to:

1. Understand what a subsequence is and how it differs from a substring
2. Explain the Longest Common Subsequence problem
3. Implement a recursive solution for finding LCS
4. Optimize the solution using dynamic programming
5. Analyze the time and space complexity of different LCS implementations
6. Apply the LCS algorithm to solve practical problems

## Specific Things to Learn

- Definition of subsequence vs. substring
- Brute force approach to LCS
- Recursive formulation of LCS
- Memoization technique to avoid redundant calculations
- Bottom-up dynamic programming solution
- Backtracking to reconstruct the actual subsequence
- Time and space complexity analysis
- Common variations and applications of LCS

## Activity 1: Understanding Subsequences (10 minutes)

Let's start by understanding what a subsequence is:

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

**Example:**
For the string "ABCDE":

- "ACE" is a subsequence (we kept A, C, and E in the same order)
- "AEC" is NOT a subsequence (the order changed)
- "ABCDE" is a subsequence (the entire string)
- "" (empty string) is a subsequence

**Exercise:** List three valid subsequences of "PROGRAMMING".

## Activity 2: LCS Problem Visualization (15 minutes)

Let's visualize the Longest Common Subsequence problem:

Given two strings, find the longest subsequence present in both of them.

**Example:**

- String 1: "ABCDGH"
- String 2: "AEDFHR"

**Visual Representation (draw this out on paper):**

```
String 1: A B C D G H
String 2: A E D F H R
```

Let's trace through these strings to find common characters that appear in the same order:

**Step-by-step comparison:**

1. A appears in both strings at the beginning ✓
2. B appears in string 1 but not in string 2 at this position
3. C appears in string 1 but not in string 2 at this position
4. D appears in both strings ✓
5. G appears in string 1 but not in string 2 at this position
6. H appears in both strings ✓

**Common characters in order:**

- A (position 1 in both)
- D (position 4 in first, position 3 in second)
- H (position 6 in first, position 5 in second)

The LCS is "ADH" with length 3.

**Exercise:** Draw out the comparison between "AGGTAB" and "GXTXAYB" on paper to find their LCS.

### Activity 3: Recursive Approach (20 minutes)

Let's break down the recursive approach to LCS step by step. The key insight is that we can solve the problem by looking at the last characters of both strings.

#### The Recursive Logic

**Case 1: If either string is empty**

- LCS length = 0 (no characters to match)

**Case 2: If the last characters match**

- Include this character in our LCS
- Find LCS of the remaining parts (without the last characters)
- Total LCS length = 1 + LCS of remaining parts

**Case 3: If the last characters don't match**

- Try two options and pick the better one:
  - Option A: Remove last character from first string, keep second string
  - Option B: Remove last character from second string, keep first string
- Take the maximum of these two options

<details><summary>
    Detailed Code with Explanations
</summary>

```
function LCS(X, Y, m, n):
    // Base case: if either string is empty, LCS is 0
    if m == 0 or n == 0:
        return 0

    // Case 2: Last characters match
    if X[m-1] == Y[n-1]:
        // Include this character and solve for remaining strings
        return 1 + LCS(X, Y, m-1, n-1)

    // Case 3: Last characters don't match
    else:
        // Try both possibilities and return the maximum
        option_A = LCS(X, Y, m-1, n)    // Remove last char from X
        option_B = LCS(X, Y, m, n-1)    // Remove last char from Y
        return max(option_A, option_B)
```

</details>

#### Step-by-Step Example: LCS("AB", "AC")

Let's trace through this example completely:

**Initial Call: LCS("AB", "AC", 2, 2)**

```
Step 1: Compare last characters
- X[1] = 'B', Y[1] = 'C'
- 'B' ≠ 'C', so we go to Case 3

Step 2: Try both options
- Option A: LCS("A", "AC", 1, 2)  // Remove 'B' from "AB"
- Option B: LCS("AB", "A", 2, 1)  // Remove 'C' from "AC"
- Return max(Option A, Option B)
```

**Let's solve Option A: LCS("A", "AC", 1, 2)**

```
Step 1: Compare last characters
- X[0] = 'A', Y[1] = 'C'
- 'A' ≠ 'C', so Case 3 again

Step 2: Try both options
- Option A1: LCS("", "AC", 0, 2)   // Remove 'A' from "A"
- Option A2: LCS("A", "A", 1, 1)   // Remove 'C' from "AC"
```

**Solve Option A1: LCS("", "AC", 0, 2)**

- Base case: m = 0, so return 0

**Solve Option A2: LCS("A", "A", 1, 1)**

```
Step 1: Compare last characters
- X[0] = 'A', Y[0] = 'A'
- 'A' = 'A', so Case 2!

Step 2: Characters match
- Return 1 + LCS("", "", 0, 0)
- LCS("", "", 0, 0) = 0 (base case)
- So return 1 + 0 = 1
```

**Back to Option A: max(0, 1) = 1**

**Now let's solve Option B: LCS("AB", "A", 2, 1)**

```
Step 1: Compare last characters
- X[1] = 'B', Y[0] = 'A'
- 'B' ≠ 'A', so Case 3

Step 2: Try both options
- Option B1: LCS("A", "A", 1, 1)   // Remove 'B' from "AB"
- Option B2: LCS("AB", "", 2, 0)   // Remove 'A' from "A"
```

**Solve Option B1: LCS("A", "A", 1, 1)**

- We already solved this above: returns 1

**Solve Option B2: LCS("AB", "", 2, 0)**

- Base case: n = 0, so return 0

**Back to Option B: max(1, 0) = 1**

**Final Result: max(Option A, Option B) = max(1, 1) = 1**

<details><summary>
    Visual Representation of the Recursive Call Tree
</summary>

```
                    LCS("AB", "AC", 2, 2)
                           |
                    B ≠ C, so split
                          / \
                         /   \
               LCS("A","AC",1,2)   LCS("AB","A",2,1)
                      |                    |
                 A ≠ C, split         B ≠ A, split
                    / \                   / \
                   /   \                 /   \
          LCS("","AC",0,2) LCS("A","A",1,1) LCS("A","A",1,1) LCS("AB","",2,0)
               |              |              |              |
            return 0      A = A, so      A = A, so      return 0
                         1+LCS("","",0,0) 1+LCS("","",0,0)
                              |              |
                          return 0       return 0
                              |              |
                          return 1       return 1

Final: max(max(0,1), max(1,0)) = max(1,1) = 1
```

</details>

#### Another Example: LCS("CAT", "DOG")

Let's trace through a case where there's no common subsequence:

**LCS("CAT", "DOG", 3, 3)**

<details><summary>
    Step By Step Trace
</summary>

```
T ≠ G, so:
├── LCS("CA", "DOG", 2, 3)
│   A ≠ G, so:
│   ├── LCS("C", "DOG", 1, 3)
│   │   C ≠ G, so:
│   │   ├── LCS("", "DOG", 0, 3) → 0
│   │   └── LCS("C", "DO", 1, 2)
│   │       C ≠ O, so:
│   │       ├── LCS("", "DO", 0, 2) → 0
│   │       └── LCS("C", "D", 1, 1)
│   │           C ≠ D, so:
│   │           ├── LCS("", "D", 0, 1) → 0
│   │           └── LCS("C", "", 1, 0) → 0
│   │           max(0, 0) = 0
│   │       max(0, 0) = 0
│   │   max(0, 0) = 0
│   └── LCS("CA", "DO", 2, 2)
│       A ≠ O, so:
│       ├── LCS("C", "DO", 1, 2) → 0 (calculated above)
│       └── LCS("CA", "D", 2, 1)
│           A ≠ D, so:
│           ├── LCS("C", "D", 1, 1) → 0 (calculated above)
│           └── LCS("CA", "", 2, 0) → 0
│           max(0, 0) = 0
│       max(0, 0) = 0
│   max(0, 0) = 0
└── LCS("CAT", "DO", 3, 2)
    T ≠ O, so:
    ├── LCS("CA", "DO", 2, 2) → 0 (calculated above)
    └── LCS("CAT", "D", 3, 1)
        T ≠ D, so:
        ├── LCS("CA", "D", 2, 1) → 0 (calculated above)
        └── LCS("CAT", "", 3, 0) → 0
        max(0, 0) = 0
    max(0, 0) = 0

Final result: max(0, 0) = 0
```

</details>

#### Why This Approach is Inefficient

Notice how we calculated LCS("C", "D", 1, 1) multiple times? This is the problem with the recursive approach - it has **overlapping subproblems**.

For strings of length m and n, the time complexity is O(2^(m+n)) because each call can branch into two more calls.

#### Practice Exercises

**Exercise 1:** Trace through LCS("ABC", "AC", 3, 2) step by step.
**Exercise 2:** Draw the recursive call tree for LCS("XY", "XZ", 2, 2).
**Exercise 3:** Count how many times LCS("A", "A", 1, 1) would be called when computing LCS("AAA", "AAA", 3, 3).

## Activity 4: Dynamic Programming Solution (25 minutes)

#### The Problem with Recursion

In Activity 3, we saw that the recursive solution has a major drawback: it recalculates the same subproblems multiple times. For example, when finding LCS("ABCD", "ACBD"), the subproblem LCS("AB", "AC") would be solved repeatedly.

Dynamic Programming solves this by:

1. Breaking down the problem into smaller subproblems
2. Storing the results of these subproblems in a table
3. Reusing these results instead of recalculating them

#### The DP Approach: Bottom-Up Table Filling

We'll create a 2D table L where:

- L[i][j] represents the length of LCS of X[0...i-1] and Y[0...j-1]
- Rows represent characters of the first string (plus an empty string)
- Columns represent characters of the second string (plus an empty string)

#### Step-by-Step Table Construction

Let's work through a complete example with strings "ABC" and "AC":

**Step 1: Initialize the table**
Create a table with (m+1) rows and (n+1) columns, where m and n are the lengths of the strings.

- First row and column represent empty strings, so fill with 0s

```
       ""  A  C
    "" 0   0  0
    A  0   ?  ?
    B  0   ?  ?
    C  0   ?  ?
```

**Step 2: Fill the table using our recursive logic**

For each cell L[i][j]:

- If X[i-1] == Y[j-1]: L[i][j] = L[i-1][j-1] + 1
- Else: L[i][j] = max(L[i-1][j], L[i][j-1])

Let's fill the table cell by cell:

**Cell L[1][1]**: Compare A with A

- X[0] = 'A', Y[0] = 'A'
- They match, so L[1][1] = L[0][0] + 1 = 0 + 1 = 1

```
       ""  A  C
    "" 0   0  0
    A  0   1  ?
    B  0   ?  ?
    C  0   ?  ?
```

**Cell L[1][2]**: Compare A with C

- X[0] = 'A', Y[1] = 'C'
- They don't match, so L[1][2] = max(L[0][2], L[1][1]) = max(0, 1) = 1

```
       ""  A  C
    "" 0   0  0
    A  0   1  1
    B  0   ?  ?
    C  0   ?  ?
```

**Cell L[2][1]**: Compare B with A

- X[1] = 'B', Y[0] = 'A'
- They don't match, so L[2][1] = max(L[1][1], L[2][0]) = max(1, 0) = 1

```
       ""  A  C
    "" 0   0  0
    A  0   1  1
    B  0   1  ?
    C  0   ?  ?
```

**Cell L[2][2]**: Compare B with C

- X[1] = 'B', Y[1] = 'C'
- They don't match, so L[2][2] = max(L[1][2], L[2][1]) = max(1, 1) = 1

```
       ""  A  C
    "" 0   0  0
    A  0   1  1
    B  0   1  1
    C  0   ?  ?
```

**Cell L[3][1]**: Compare C with A

- X[2] = 'C', Y[0] = 'A'
- They don't match, so L[3][1] = max(L[2][1], L[3][0]) = max(1, 0) = 1

```
       ""  A  C
    "" 0   0  0
    A  0   1  1
    B  0   1  1
    C  0   1  ?
```

**Cell L[3][2]**: Compare C with C

- X[2] = 'C', Y[1] = 'C'
- They match, so L[3][2] = L[2][1] + 1 = 1 + 1 = 2

```
       ""  A  C
    "" 0   0  0
    A  0   1  1
    B  0   1  1
    C  0   1  2
```

**Final Result**: L[3][2] = 2, so the length of the LCS is 2.

#### Understanding the Table

Let's analyze what each cell in our completed table means:

```
       ""  A  C
    "" 0   0  0
    A  0   1  1
    B  0   1  1
    C  0   1  2
```

- L[1][1] = 1: LCS of "A" and "A" is "A" (length 1)
- L[1][2] = 1: LCS of "A" and "AC" is "A" (length 1)
- L[2][1] = 1: LCS of "AB" and "A" is "A" (length 1)
- L[2][2] = 1: LCS of "AB" and "AC" is "A" (length 1)
- L[3][1] = 1: LCS of "ABC" and "A" is "A" (length 1)
- L[3][2] = 2: LCS of "ABC" and "AC" is "AC" (length 2)

#### Visual Patterns in the Table

Notice these patterns in the table:

1. When characters match, we get a diagonal arrow (↖) and add 1
2. When characters don't match, we take the maximum value from above (↑) or left (←)

```
       ""  A  C
    "" 0   0  0
    A  0   1→ 1
           ↓  ↓
    B  0   1→ 1
           ↓  ↘
    C  0   1   2
```

<details><summary>
    Complete DP Algorithm
</summary>

```
function LCS_DP(X, Y):
    m = length of X
    n = length of Y

    // Create a table to store results of subproblems
    // L[i][j] will store the length of LCS of X[0...i-1] and Y[0...j-1]
    L[0...m][0...n]

    // Fill L[i][j] in bottom-up fashion
    for i from 0 to m:
        for j from 0 to n:
            // Base case: empty string has LCS of length 0
            if i == 0 or j == 0:
                L[i][j] = 0

            // If characters match, we add 1 to the LCS of the strings without these characters
            else if X[i-1] == Y[j-1]:
                L[i][j] = L[i-1][j-1] + 1

            // If characters don't match, take the maximum of two cases:
            // 1. Exclude current character of first string
            // 2. Exclude current character of second string
            else:
                L[i][j] = max(L[i-1][j], L[i][j-1])

    // L[m][n] contains the length of LCS
    return L[m][n]
```

</details>

#### Another Example: "AGGTAB" and "GXTXAYB"

Let's start filling the table for these strings:

```
       ""  G  X  T  X  A  Y  B
    "" 0   0  0  0  0  0  0  0
    A  0   0  0  0  0  1  1  1
    G  0   1  1  1  1  1  1  1
    G  0   1  1  1  1  1  1  1
    T  0   1  1  2  2  2  2  2
    A  0   1  1  2  2  3  3  3
    B  0   1  1  2  2  3  3  4
```

The LCS length is 4, and the subsequence is "GTAB".

#### Why DP is More Efficient

1. **No Redundant Calculations**: Each subproblem is solved exactly once
2. **Time Complexity**: O(m×n) - much better than O(2^(m+n))
3. **Space Complexity**: O(m×n) for the table

#### Tracing Through the Table

Let's trace through our example of "ABC" and "AC" again, but this time focusing on what each cell calculation means:

<details><summary>
    Step By Step Trace
</summary>

```
Cell L[1][1]: LCS("A", "A")
- Characters match: A = A
- Take diagonal value (0) and add 1
- Result: 1 (LCS is "A")

Cell L[1][2]: LCS("A", "AC")
- Characters don't match: A ≠ C
- Take max of left (1) and above (0)
- Result: 1 (LCS is still "A")

Cell L[2][1]: LCS("AB", "A")
- Characters don't match: B ≠ A
- Take max of left (0) and above (1)
- Result: 1 (LCS is still "A")

Cell L[2][2]: LCS("AB", "AC")
- Characters don't match: B ≠ C
- Take max of left (1) and above (1)
- Result: 1 (LCS is still "A")

Cell L[3][1]: LCS("ABC", "A")
- Characters don't match: C ≠ A
- Take max of left (0) and above (1)
- Result: 1 (LCS is still "A")

Cell L[3][2]: LCS("ABC", "AC")
- Characters match: C = C
- Take diagonal value (1) and add 1
- Result: 2 (LCS is "AC")
```

</details>

#### Practice Exercises

**Exercise 1:** Draw and fill the complete DP table for LCS("XYZ", "XZ").
**Exercise 2:** Trace through the table filling process for LCS("HELLO", "HOLA").
**Exercise 3:** What is the time and space complexity if we want to find the LCS of three strings using DP?
**Exercise 4:** Modify the DP table to not only find the length but also keep track of which direction (↖, ↑, or ←) was chosen for each cell. This will help in reconstructing the actual LCS.

## Activity 5: Reconstructing the LCS (15 minutes)

Now that we know the length of the LCS, let's see how to reconstruct the actual subsequence:

<details><summary>
    Backtracking Algorithm:
        1. Start from the bottom-right cell of the DP table
        2. If characters match, include the character and move diagonally up-left
        3. If characters don't match, move in the direction of the larger value (up or left)

</summary>

```
function printLCS(X, Y):
    m = length of X
    n = length of Y
    L = LCS_DP_Table(X, Y)  // Get the filled DP table

    // Create a character array to store the LCS
    lcs = empty string

    // Start from the bottom-right corner and move up and left
    i = m, j = n
    while i > 0 and j > 0:
        if X[i-1] == Y[j-1]:
            lcs = X[i-1] + lcs  // Add current character to result
            i--
            j--
        else if L[i-1][j] > L[i][j-1]:
            i--
        else:
            j--

    return lcs
```

**Tracing the Backtrack:**
Using our example table for "ABCDGH" and "AEDFHR":

1. Start at L[6][6] = 3
2. H matches H → include 'H', move to L[5][5]
3. G doesn't match R → move to larger value (up to L[5][6])
4. Continue until we reconstruct "ADH"

**Exercise:** Use the DP table from the previous exercise to manually trace back and reconstruct the LCS of "ACE" and "ABCDE".

## Activity 6: Real-world Application (10 minutes)

Let's apply LCS to a real-world scenario: comparing two versions of a text file.

**Version 1:**

```
The quick brown fox jumps over the lazy dog.
```

**Version 2:**

```
The brown fox quickly jumps over the sleeping dog.
```

**Manual Analysis:**
Break down into words and find common subsequence:

- "The" appears in both ✓
- "quick" vs "brown" - different
- "brown" appears in both ✓
- "fox" appears in both ✓
- And so on...

The LCS helps identify what parts remained unchanged between versions, which is exactly how tools like `git diff` work!

**Exercise:** On paper, identify approximately what the LCS would be between these two sentences by comparing word by word.

## Activity 7: Complexity Analysis (10 minutes)

Let's analyze the time and space complexity of our solutions:

**Recursive Solution:**

- Time Complexity: O(2^(m+n)) - exponential due to overlapping subproblems
- Space Complexity: O(m+n) - recursion stack depth

**Dynamic Programming Solution:**

- Time Complexity: O(m×n) - we fill each cell once
- Space Complexity: O(m×n) - for the DP table

**Space Optimization:**
Since we only need the previous row to compute the current row, we can optimize space to O(min(m,n)).

**Exercise:** Calculate how many operations the recursive solution would need for strings of length 10 each, versus the DP solution.

## Check for Understanding

1. What is the difference between a subsequence and a substring?
2. Why is the recursive approach to LCS inefficient?
3. How does dynamic programming improve the LCS algorithm?
4. What is the time complexity of the dynamic programming solution for LCS?
5. Name two real-world applications of the LCS algorithm.
6. How would you modify the algorithm to find the shortest common supersequence?

## Additional Resources

- [GeeksforGeeks: Longest Common Subsequence](https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/)
- [Visualizing Dynamic Programming: LCS](https://www.cs.usfca.edu/~galles/visualization/DPLCS.html)
- [MIT OpenCourseWare: Introduction to Algorithms - Dynamic Programming](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/)

## Practice Problems

1. Find LCS of "ABCDGH" and "AEDFHR"
2. Find LCS of "AGGTAB" and "GXTXAYB"
3. Find LCS of "programming" and "algorithm"
4. Implement the space-optimized version using only O(min(m,n)) space
