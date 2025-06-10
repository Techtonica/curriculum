# Longest Common Subsequence

## Topic Outline Time
- Reading: 25 minutes
- Activities: 45 minutes
- Total: ~70 minutes

## Prerequisites
Before starting this lesson, you should have:
- Basic understanding of [Arrays and Basic Algorithms](https://github.com/Techtonica/curriculum/blob/main/algorithms/intro-to-algorithms.md)
- Familiarity with [Recursion](https://github.com/Techtonica/curriculum/blob/main/recursion/recursion.md)
- Knowledge of [Dynamic Programming Basics](https://github.com/Techtonica/curriculum/blob/main/algorithms/dynamic-programming.md)

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

## Activities

### Activity 1: Understanding Subsequences (10 minutes)
Let's start by understanding what a subsequence is:

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

**Example:**
For the string "ABCDE":
- "ACE" is a subsequence (we kept A, C, and E in the same order)
- "AEC" is NOT a subsequence (the order changed)
- "ABCDE" is a subsequence (the entire string)
- "" (empty string) is a subsequence

**Exercise:** List three valid subsequences of "PROGRAMMING".

### Activity 2: LCS Problem Visualization (15 minutes)

Let's visualize the Longest Common Subsequence problem:

Given two strings, find the longest subsequence present in both of them.

**Example:**
- String 1: "ABCDGH"
- String 2: "AEDFHR"

Let's trace through these strings to find common characters that appear in the same order:

![LCS Visualization](https://placeholder.svg?height=300&width=600&query=Visualization+of+Longest+Common+Subsequence+between+ABCDGH+and+AEDFHR+showing+ADH+as+the+result)

The LCS is "ADH" with length 3.

**Exercise:** Try finding the LCS of "AGGTAB" and "GXTXAYB" by hand.

### Activity 3: Recursive Approach (10 minutes)

Let's understand the recursive approach to LCS:

1. If the last characters of both sequences match, include this character in LCS and recursively find LCS of the remaining sequences.
2. If the last characters don't match, find the maximum of:
   - LCS when we exclude the last character of the first string
   - LCS when we exclude the last character of the second string

```
function LCS(X, Y, m, n):
    if m == 0 or n == 0:
        return 0
    if X[m-1] == Y[n-1]:
        return 1 + LCS(X, Y, m-1, n-1)
    else:
        return max(LCS(X, Y, m-1, n), LCS(X, Y, m, n-1))
```

**Exercise:** Trace through the recursive calls for finding the LCS of "AB" and "AC".

### Activity 4: Dynamic Programming Solution (20 minutes)

The recursive solution has exponential time complexity due to overlapping subproblems. Let's optimize it using dynamic programming:

1. Create a 2D table to store results of subproblems
2. Fill the table in a bottom-up manner

![DP Table for LCS](https://placeholder.svg?height=350&width=500&query=Dynamic+Programming+table+for+LCS+of+ABCDGH+and+AEDFHR+showing+step+by+step+filling)

```
function LCS_DP(X, Y):
    m = length of X
    n = length of Y
    
    // Create a table to store results of subproblems
    L[0...m][0...n]
    
    // Fill L[i][j] in bottom-up fashion
    for i from 0 to m:
        for j from 0 to n:
            if i == 0 or j == 0:
                L[i][j] = 0
            else if X[i-1] == Y[j-1]:
                L[i][j] = L[i-1][j-1] + 1
            else:
                L[i][j] = max(L[i-1][j], L[i][j-1])
    
    // L[m][n] contains the length of LCS
    return L[m][n]
```

**Exercise:** Complete the DP table for finding the LCS of "ACE" and "ABCDE".

### Activity 5: Reconstructing the LCS (15 minutes)

Now that we know the length of the LCS, let's see how to reconstruct the actual subsequence:

1. Start from the bottom-right cell of the DP table
2. If characters match, include the character and move diagonally up-left
3. If characters don't match, move in the direction of the larger value (up or left)

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

**Exercise:** Use the DP table from the previous exercise to reconstruct the LCS of "ACE" and "ABCDE".

### Activity 6: Real-world Application (10 minutes)

Let's apply LCS to a real-world scenario: comparing two versions of a text file.

**Version 1:**
```
The quick brown fox jumps over the lazy dog.
```

**Version 2:**
```
The brown fox quickly jumps over the sleeping dog.
```

The LCS helps identify what parts remained unchanged between versions.

**Exercise:** Identify (approximately) what the LCS would be between these two sentences.

## Check for Understanding
1. What is the difference between a subsequence and a substring?
2. Why is the recursive approach to LCS inefficient?
3. How does dynamic programming improve the LCS algorithm?
4. What is the time complexity of the dynamic programming solution for LCS?
5. Name two real-world applications of the LCS algorithm.

## Additional Resources
- [GeeksforGeeks: Longest Common Subsequence](https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/)
- [Visualizing Dynamic Programming: LCS](https://www.cs.usfca.edu/~galles/visualization/DPLCS.html)
- [MIT OpenCourseWare: Introduction to Algorithms - Dynamic Programming](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/)

