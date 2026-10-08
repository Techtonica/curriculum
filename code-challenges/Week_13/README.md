# Week 13 — Code Challenges

### Prerequisites

1. Comfortable working with arrays and strings.
2. Familiar with loops, conditionals, and basic array methods.
3. Familiar with regular expressions and palindrome checks.

### Motivation

These challenges build on earlier string and array problems with sorting, frequency counting, regular expressions, and palindromic substrings.

### Learning Objectives

After finishing this folder, you will be able to:

1. Use frequency counts to identify values that meet a condition.
2. Sort strings by a property other than alphabetical order.
3. Normalize strings into a consistent form before comparison.
4. Find and compare palindromic substrings within a larger string.

### Sequence and Relation

- **Sort by String Length** (`Sort-by-String-Length.js`)
  - A warm-up using string lengths as the basis for sorting.
- **Find Lucky Integer in Array** (`Find-Lucky-Integer-in-Array.js`)
  - Count how often values occur, then use those counts to determine the result.
- **Palindrome Regex** (`Palindrome-Regex.js`)
  - Builds on the palindrome and regular expression practice from Week 12.
- **Longest Palindrome Substring** (`Longest-Palindrome-Substring.js`)
  - Extends palindrome reasoning from checking a whole string to finding the longest palindromic portion of one.

The challenges can be completed in any order. The sequence above moves from shorter array problems to the related palindrome challenges.

### Relevant Materials

1. [Regular Expressions / RegEx](../../javascript/javascript-8-regex.md) — review for Palindrome Regex.

### Common Mistakes and Misconceptions

1. In Sort by String Length, using the default string sort will not sort by length; the comparison needs to use each string's length.
2. In Find Lucky Integer, a number is lucky only when its value equals its frequency, not simply because it appears more than once.
3. In Longest Palindrome Substring, the result must be a contiguous substring, not characters selected from different parts of the string.
