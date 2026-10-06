# Week 11 — Code Challenges

### Prerequisites

1. Comfortable writing functions, loops, and conditionals.
2. Familiar with numbers, arrays, and strings, including iterating over their values.
3. Familiar with the modulus (%) operator and basic array/string operations.
4. Can run a JavaScript file with `node file.js`.

### Motivation

This week continues the spec-only format used in Weeks 9 and 10: four standalone problems are provided as written specifications with examples but no starter code.

These challenges give you an opportunity to recognize repeated problem-solving patterns and consider solution efficiency.

### Learning Objectives

After finishing this folder, you will be able to:

1. Apply similar logic to related problems while changing what the program produces.
2. Work with an unsorted array to identify a missing value and consider the efficiency of different approaches.

### Sequence and Relation

- **Fizz Buzz** (`Fizz-Buzz.js`)
  - A good warm-up that emphasizes the order in which overlapping conditions are checked.
- **How Many Vowels** (`How-Many-Vowels.js`)
  - The optional recursive challenge is a chance to compare iterative and recursive approaches to the same problem.
- **Remove Vowels from a String** (`Remove-Vowels-from-a-String.js`)
  - Practice applying the same underlying idea to a different output.
- **Find the Missing Number** (`Find-the-Missing-Number.js`)
  - There are several reasonable ways to approach it.

Although the challenges do not depend on each other and can be completed in any order, completing How Many Vowels before Remove Vowels makes it easier to see how the same character-classification logic can be reused for a different task.

### Relevant Materials

1. [Runtime Complexity](../../runtime-complexity/) — optional background on reasoning about solution efficiency.
2. [Recursion](../../recursion/) — optional background for the recursive How Many Vowels challenge.
3. [Algorithms](../../algorithms/) — broader curriculum material on algorithms and data structures, if you want to go further.

### Common Mistakes and Misconceptions

1. In Fizz Buzz, checking divisibility by 3 or 5 before checking divisibility by both can prevent `"FizzBuzz"` from being returned.
2. In the vowel challenges, checking only lowercase characters will miss uppercase vowels.
3. In Remove Vowels from a String, remember that JavaScript strings are immutable — you'll need to produce a new string rather than modify the original in place.
4. In the recursive How Many Vowels challenge, a missing or incorrect base case can cause the recursion to continue until the call stack limit is reached.
