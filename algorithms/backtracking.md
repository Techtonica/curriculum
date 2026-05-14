# Backtracking

## ⏱️ Projected Time

- **Reading & Understanding:** Approximately 45-60 minutes
- **Completing Activities:** Approximately 1.5-2.5 hours (depending on practice and problem-solving speed)

## 📚 Prerequisites

- **Basic Programming Concepts, Arrays, and Strings:** Variables, data types, conditional statements, loops (for, while). How to access elements, iterate, and basic operations
  - [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-array-functions.md)
  - [JavaScript 1 - Variables, Strings, Numbers lesson](/javascript/javascript-1-variables.md)
- **Recursion:** A solid understanding of recursive functions, base cases, and the call stack
  - [Recursion](/recursion/recursion.md)
- **Time and Space Complexity (Big O Notation):** A basic understanding of how to analyze algorithm efficiency
  - [Runtime Complexity](/runtime-complexity/runtime-complexity.md)
  - [Intro to Algorithms](/algorithms/intro-to-algorithms.md)

## 🎯 Motivation: Why Learn This?

Imagine you're standing in a corn maze. You reach a fork and choose the left path, then another fork where you go right, then another where you go left again — and you hit a dead end. What do you do? You **backtrack** to the last fork and try a different direction. You don't restart the maze from scratch — you undo just the last choice and try again.

This is exactly what the **Backtracking** algorithm does. It builds a solution one step at a time, and whenever it realizes that the current step can't possibly lead to a valid solution, it **backs up** and tries something else. It's like having a GPS for problem-solving that says, "Nope, this route is blocked — let's reroute."

In the real world, backtracking shows up everywhere:

- **Puzzle Solving:** How Sudoku apps generate and solve puzzles
- **Route Planning:** Finding all possible paths through a network
- **Scheduling:** Assigning people to shifts while satisfying everyone's constraints
- **Game AI:** How chess and checkers engines explore possible moves
- **Auto-Complete and Spell Checkers:** Searching through possible word combinations efficiently

As a developer, backtracking teaches you a powerful way to search through all possibilities systematically without brute-forcing every single one. It's one of the most commonly tested algorithm patterns in technical interviews.

## 💡 Objectives

By the end of this topic, you should be able to:

1. **Define** what backtracking is and explain how it differs from brute force
2. **Identify** problems where backtracking is an appropriate solution
3. **Trace through** a backtracking decision tree step by step
4. **Implement** the standard backtracking template in JavaScript
5. **Apply** pruning to eliminate invalid branches early and improve performance
6. **Solve** classic backtracking problems such as generating permutations, the N-Queens problem, and Sudoku

## 📖 Specific Things to Learn

- Three core pillars of every backtracking problem:
  - **Choice:** What decisions can you make at each step? Pick a candidate for the current step.
  - **Constraint:** What rules must be followed? Recurse to try to build the rest of the solution.
  - **Goal:** When have you found a complete, valid solution? If it didn't work out, undo that choice and try the next one
- **State-Space Tree:** The conceptual tree of all possible choices
- **Recursive Exploration:** How the algorithm walks down the tree
- **Backtracking (Undo):** How the algorithm retreats when it hits a dead end
- **Pruning:** Skipping branches that can't possibly lead to a valid solution
- The general recursive pattern used in nearly all backtracking problems
- How to track the "current state" and "remaining choices"
- When and how to mark choices as "used" and "unused"
- **Generate Permutations:** All orderings of a set of elements
- **Generate Combinations/Subsets:** Selecting items from a set
- **N-Queens:** Placing queens on a chessboard so none attack each other
- **Sudoku Solver:** Filling in a 9×9 grid following Sudoku rules
- **Time Complexity:** Why backtracking can be exponential in the worst case
- **Space Complexity:** Understanding the recursion stack depth
- **Pruning Effectiveness:** How constraints reduce the search space

## 📺 Materials

- [Video: Backtracking — The Concept Explained Simply (7 min)](https://www.youtube.com/watch?v=Zq4upTEaQyM) — Watch this first for a high-level overview of how backtracking works.
- [Video: Solve Coding Interview Backtracking Problems — Crash Course (14 min)](https://www.youtube.com/watch?v=A80YzvNwqXA) — A deeper walkthrough with visual examples and LeetCode problems.
- [Article: Backtracking Algorithms Explained — freeCodeCamp (15 min read)](https://www.freecodecamp.org/news/backtracking-algorithms-explained/) — A thorough written introduction explaining recursive search and backtracking loops.

## 📝 Lesson

### What Is Backtracking?

Backtracking is a **systematic way to search for solutions** by trying possibilities one at a time and **undoing** choices that don't work out. Think of it as "organized trial and error."

Here's how it compares to brute force:

| Approach | What It Does | Efficiency |
|---|---|---|
| **Brute Force** | Tries every possible combination, even obviously wrong ones | Very slow |
| **Backtracking** | Tries a choice, checks if it's valid, and **prunes** entire branches of invalid paths early | Much faster in practice |



### The General Backtracking Template

Almost every backtracking problem in JavaScript can be solved with this structure:

<details><summary>Click to view the Backtracking Template</summary>

```javascript
function backtrack(currentState, choices, results) {
  // BASE CASE: Have we reached a complete solution?
  if (isSolution(currentState)) {
    results.push([...currentState]); // Save a copy of the solution
    return;
  }

  for (let choice of choices) {
    // CONSTRAINT: Is this choice valid in the current state?
    if (!isValid(choice, currentState)) {
      continue; // Prune: skip invalid choices
    }

    // CHOOSE: Make the choice
    currentState.push(choice);

    // EXPLORE: Recurse with the updated state
    backtrack(currentState, remainingChoices, results);

    // UNCHOOSE: Undo the choice (backtrack!)
    currentState.pop();
  }
}
```

</details>

### Visualizing the Decision Tree

Let's visualize how backtracking works by generating all permutations of `[1, 2, 3]`. The algorithm builds a **state-space tree** where each level represents a decision:

```
                        []
                /        |        \
             [1]        [2]       [3]
            /   \      /   \     /   \
         [1,2] [1,3] [2,1] [2,3] [3,1] [3,2]
          |      |     |     |     |      |
       [1,2,3][1,3,2][2,1,3][2,3,1][3,1,2][3,2,1]
            ^      ^      ^      ^       ^      ^
```

Each leaf node is a complete permutation. The algorithm:
1. Starts at the root `[]`
2. Picks `1` → goes left → picks `2` → picks `3` → found `[1,2,3]` ✅
3. **Backtracks** to `[1]`, picks `3` instead → picks `2` → found `[1,3,2]` ✅
4. **Backtracks** all the way up, picks `2` at the top → continues exploring...

### 🔍 Interactive Walkthrough: Generating Permutations

Let's trace through the code step by step:

<details><summary>Click to view Permutations Code</summary>

```javascript
function getPermutations(nums) {
  const results = [];

  function backtrack(current, remaining) {
    // Base case: no more numbers to place
    if (remaining.length === 0) {
      results.push([...current]);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      // CHOOSE: pick remaining[i]
      current.push(remaining[i]);
      const nextRemaining = remaining.filter((_, index) => index !== i);

      // EXPLORE: recurse with the choice made
      backtrack(current, nextRemaining);

      // UNCHOOSE: remove the last choice
      current.pop();
    }
  }

  backtrack([], nums);
  return results;
}

console.log(getPermutations([1, 2, 3]));
// Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
```

</details>

<details><summary>🔬 Click to see the detailed step-by-step trace</summary>

```
Call: backtrack([], [1, 2, 3])
 ├─ Choose 1 → backtrack([1], [2, 3])
 │   ├─ Choose 2 → backtrack([1, 2], [3])
 │   │   ├─ Choose 3 → backtrack([1, 2, 3], [])
 │   │   │   └─ BASE CASE → save [1, 2, 3] ✅
 │   │   └─ Unchoose 3 → back to [1, 2]
 │   ├─ Unchoose 2 → back to [1]
 │   ├─ Choose 3 → backtrack([1, 3], [2])
 │   │   ├─ Choose 2 → backtrack([1, 3, 2], [])
 │   │   │   └─ BASE CASE → save [1, 3, 2] ✅
 │   │   └─ Unchoose 2 → back to [1, 3]
 │   └─ Unchoose 3 → back to [1]
 ├─ Unchoose 1 → back to []
 ├─ Choose 2 → backtrack([2], [1, 3])
 │   ├─ ... (continues similarly)
 │   └─ Finds [2, 1, 3] and [2, 3, 1]
 ├─ Unchoose 2 → back to []
 ├─ Choose 3 → backtrack([3], [1, 2])
 │   ├─ ... (continues similarly)
 │   └─ Finds [3, 1, 2] and [3, 2, 1]
 └─ Unchoose 3 → done!
```

</details>

### 🔍 Interactive Walkthrough: The N-Queens Problem

The N-Queens problem is one of the most famous backtracking examples. Place N queens on an N×N chessboard so that **no two queens attack each other** (no same row, column, or diagonal).

Let's solve it for a 4×4 board.

**Visual: The decision tree with pruning**

```
Placing queens row by row on a 4×4 board:
(Q = Queen, . = empty, ✗ = attacked square)

Row 0: Try column 0          Row 0: Try column 1
┌───┬───┬───┬───┐           ┌───┬───┬───┬───┐
│ Q │ ✗ │ ✗ │ ✗ │           │ ✗ │ Q │ ✗ │ ✗ │
├───┼───┼───┼───┤           ├───┼───┼───┼───┤
│ ✗ │ ✗ │   │   │           │   │ ✗ │ ✗ │   │
├───┼───┼───┼───┤           ├───┼───┼───┼───┤
│ ✗ │   │ ✗ │   │           │   │ ✗ │   │ ✗ │
├───┼───┼───┼───┤           ├───┼───┼───┼───┤
│ ✗ │   │   │ ✗ │           │   │ ✗ │   │   │
└───┴───┴───┴───┘           └───┴───┴───┴───┘

Starting with Q at (0,1):
Step 1: Place Q at row 0, col 1
Step 2: Try row 1 → col 0 is attacked, try col 3 ✓
Step 3: Try row 2 → col 0 ✓
Step 4: Try row 3 → col 2 ✓ → Solution found!

Solution 1:                 Solution 2:
┌───┬───┬───┬───┐           ┌───┬───┬───┬───┐
│ . │ Q │ . │ . │           │ . │ . │ Q │ . │
├───┼───┼───┼───┤           ├───┼───┼───┼───┤
│ . │ . │ . │ Q │           │ Q │ . │ . │ . │
├───┼───┼───┼───┤           ├───┼───┼───┼───┤
│ Q │ . │ . │ . │           │ . │ . │ . │ Q │
├───┼───┼───┼───┤           ├───┼───┼───┼───┤
│ . │ . │ Q │ . │           │ . │ Q │ . │ . │
└───┴───┴───┴───┘           └───┴───┴───┴───┘
```

Here's the JavaScript implementation:

<details><summary>Click to view N-Queens Code</summary>

```javascript
function solveNQueens(n) {
  const results = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  function isValid(row, col) {
    // Check column above
    for (let r = 0; r < row; r++) {
      if (board[r][col] === 'Q') return false;
    }

    // Check upper-left diagonal
    for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
      if (board[r][c] === 'Q') return false;
    }

    // Check upper-right diagonal
    for (let r = row - 1, c = col + 1; r >= 0 && c < n; r--, c++) {
      if (board[r][c] === 'Q') return false;
    }

    return true;
  }

  function backtrack(row) {
    // Base case: all queens are placed
    if (row === n) {
      results.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(row, col)) {
        continue; // PRUNE: skip columns under attack
      }

      // CHOOSE: place a queen
      board[row][col] = 'Q';

      // EXPLORE: move to the next row
      backtrack(row + 1);

      // UNCHOOSE: remove the queen (backtrack)
      board[row][col] = '.';
    }
  }

  backtrack(0);
  return results;
}

const solutions = solveNQueens(4);
console.log(`Found ${solutions.length} solutions for 4-Queens:`);
solutions.forEach((solution, i) => {
  console.log(`\nSolution ${i + 1}:`);
  solution.forEach(row => console.log(row));
});
```

</details>

**Why pruning matters here:**

Without pruning, a 4×4 board would require checking 4⁴ = 256 possible arrangements. With pruning, the algorithm checks only about 16 partial arrangements before finding both solutions. That's a **16× speedup** — and the savings grow exponentially for larger boards!

```
Without pruning:  4⁴ =   256 checks (4-Queens)
                  8⁸ = ~16.7 million checks (8-Queens)

With pruning:     ~16 checks (4-Queens)
                  ~114 checks (8-Queens)   ← massive savings!
```

## 🤔 When to Use Backtracking: Spotting the Clues

Look for these hints in problem statements:

- "Find **all** possible..." (permutations, combinations, arrangements)
- "Generate **every valid**..." (configuration, path, assignment)
- "Can you place/assign/arrange X such that **constraints** are satisfied?"
- "Count the number of ways to..."
- "Solve this puzzle" (Sudoku, crossword, N-Queens)
- Problems where choices at each step depend on previous choices

**Backtracking is NOT ideal for:**

- Problems with overlapping subproblems → Use **Dynamic Programming** instead
- Problems that can be solved greedily → Use a **Greedy algorithm** instead
- Problems where you only need one optimal solution and there's a clear formula

## 🚫 Common Mistakes & Misconceptions

1. **"Backtracking is the same as brute force."**
   Not true! Brute force tries _every_ possible combination blindly. Backtracking prunes invalid branches early, often skipping huge portions of the search space. Think of it as brute force with intelligence.

2. **Forgetting to undo the choice (the "unchoose" step).**
   This is the #1 bug in backtracking code. If you don't undo your choice after exploring, your state gets corrupted and you'll get wrong or duplicate results.

3. **Not copying the solution before saving it.**
   In JavaScript, arrays are passed by reference. If you do `results.push(current)` instead of `results.push([...current])`, all your saved solutions will point to the same (empty) array after backtracking completes.

4. **Confusing backtracking with DFS (Depth-First Search).**
   DFS is a graph traversal technique. Backtracking uses DFS-like recursion but adds constraint checking and pruning. Every backtracking algorithm uses DFS, but not every DFS is backtracking.

5. **Not pruning enough (or pruning too aggressively).**
   Too little pruning makes the algorithm slow. Too much pruning (incorrect constraints) can cause you to skip valid solutions. Always verify your constraint logic.

## 🚶 Guided Practice

Work through this problem with a partner or follow along step by step.

### Problem: Generate All Subsets

Given a set of distinct integers `[1, 2, 3]`, generate all possible subsets (the power set).

**Expected output:** `[[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]`

**Step 1: Identify the Choice, Constraint, and Goal**

- **Choice:** For each number, include it or skip it
- **Constraint:** None (all subsets are valid)
- **Goal:** We've considered every number

**Step 2: Draw the decision tree**

```
                          []
                   /              \
               [1]                 []
             /     \             /     \
          [1,2]    [1]        [2]       []
          /  \     /  \       /  \     /  \
      [1,2,3][1,2][1,3][1] [2,3] [2] [3]  []
           ^    ^    ^   ^     ^   ^   ^   ^
```

**Step 3: Implement it**

<details><summary>Click to view Subsets Code</summary>

```javascript
function generateSubsets(nums) {
  const results = [];

  function backtrack(start, current) {
    // Every state is a valid subset — save it!
    results.push([...current]);

    for (let i = start; i < nums.length; i++) {
      // CHOOSE: include nums[i]
      current.push(nums[i]);

      // EXPLORE: move to the next index (not 0, to avoid duplicates)
      backtrack(i + 1, current);

      // UNCHOOSE: exclude nums[i]
      current.pop();
    }
  }

  backtrack(0, []);
  return results;
}

console.log(generateSubsets([1, 2, 3]));
// Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
```

</details>

**Step 4: Trace it**

Walk through the first few recursive calls with your partner. Use a whiteboard or paper to draw the state of `current` and `start` at each step.

<details><summary>📋 Click to see the full trace</summary>

```
backtrack(0, [])           → save []
├─ i=0: push 1 → backtrack(1, [1])        → save [1]
│  ├─ i=1: push 2 → backtrack(2, [1,2])   → save [1,2]
│  │  └─ i=2: push 3 → backtrack(3, [1,2,3]) → save [1,2,3]
│  │     └─ (loop ends, return)
│  │     pop 3 → back to [1,2]
│  ├─ pop 2 → back to [1]
│  ├─ i=2: push 3 → backtrack(3, [1,3])   → save [1,3]
│  │  └─ (loop ends, return)
│  │  pop 3 → back to [1]
│  └─ (loop ends, return)
├─ pop 1 → back to []
├─ i=1: push 2 → backtrack(2, [2])        → save [2]
│  └─ i=2: push 3 → backtrack(3, [2,3])   → save [2,3]
│     └─ (loop ends, return)
│     pop 3 → back to [2]
├─ pop 2 → back to []
├─ i=2: push 3 → backtrack(3, [3])        → save [3]
│  └─ (loop ends, return)
│  pop 3 → back to []
└─ done!
```

</details>

## 💻 Independent Practice

Try these problems on your own. Start with the easier ones and work your way up.

### Problem 1: Combination Sum (Medium)

Given an array of distinct integers `candidates` and a target integer `target`, find all unique combinations of candidates where the chosen numbers sum to target. You may reuse the same number unlimited times.

<details><summary>Click to view Combination Sum starter code</summary>

```javascript
// Example:
// candidates = [2, 3, 6, 7], target = 7
// Output: [[2, 2, 3], [7]]

function combinationSum(candidates, target) {
  // Your code here!
  // Hint: Track the "remaining target" as you recurse.
  // Hint: Use a start index to avoid duplicate combinations.
}
```

</details>

<details><summary>💡 Click for hints</summary>

1. At each step, your "choice" is which candidate number to add
2. Your "constraint" is that the running sum can't exceed the target
3. Your "goal" is when the running sum exactly equals the target
4. Pass `i` (not `i + 1`) as the start index since numbers can be reused

</details>

### Problem 2: Valid Parentheses Generator (Medium)

Generate all combinations of `n` pairs of well-formed parentheses.

<details><summary>Click to view Parentheses Generator starter code</summary>

```javascript
// Example:
// n = 3
// Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

function generateParentheses(n) {
  // Your code here!
  // Hint: Track how many open and close parens you've used.
  // Hint: You can add "(" if openCount < n
  // Hint: You can add ")" if closeCount < openCount
}
```

</details>

<details><summary>💡 Click for hints</summary>

1. **Choice:** Add `(` or `)` at each position
2. **Constraint:** Can't add `)` unless there's a matching `(` to close. Can't add `(` if you've used all `n` opening parens.
3. **Goal:** The string length is `2 * n`

</details>

### Problem 3: Sudoku Solver (Hard)

Write a function that solves a Sudoku puzzle.

<details><summary>Click to view Sudoku Solver starter code</summary>

```javascript
// The board is a 9x9 grid where '.' represents empty cells
function solveSudoku(board) {
  // Your code here!
  // Hint: Find the next empty cell
  // Hint: Try digits 1-9 and check row, column, and 3x3 box constraints
  // Hint: If no digit works, backtrack (return false)
}
```

</details>

<details><summary>💡 Click for hints</summary>

1. Find the first empty cell (`.`)
2. Try placing digits `'1'` through `'9'`
3. For each digit, check if it's valid (not in the same row, column, or 3×3 box)
4. If valid, place it and recurse to the next empty cell
5. If recursion returns false, **undo** the placement and try the next digit
6. If no digit works, return `false` (triggering backtracking)
7. If no empty cells remain, return `true` (puzzle solved!)

</details>

## 🏆 Challenge

### The Word Search Problem

Given a 2D grid of characters and a word, determine if the word exists in the grid. The word can be formed by sequentially adjacent cells (horizontal or vertical neighbors). Each cell may only be used once per word.

<details><summary>Click to view Word Search starter code</summary>

```javascript
// Example:
// board = [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// word = "ABCCED" → true
// word = "SEE"    → true
// word = "ABCB"   → false (can't reuse the 'B')

function wordSearch(board, word) {
  // Think about:
  // 1. How do you track which cells are already used?
  // 2. What are the choices at each step? (4 directions)
  // 3. What is the base case?
  // 4. How do you backtrack? (unmark the cell)
}
```

</details>

This problem combines backtracking with 2D grid traversal — a very common pattern in interviews!

## ✅ Check for Understanding

1. **In your own words**, explain the difference between backtracking and brute force. Give a real-life analogy.

2. **Identify the bug** in this backtracking code:
   <details><summary>Click to view the buggy code</summary>

   ```javascript
   function permute(nums) {
     const results = [];
     function backtrack(current, remaining) {
       if (remaining.length === 0) {
         results.push(current); // Bug is here — can you spot it?
         return;
       }
       for (let i = 0; i < remaining.length; i++) {
         current.push(remaining[i]);
         backtrack(current, remaining.filter((_, idx) => idx !== i));
         current.pop();
       }
     }
     backtrack([], nums);
     return results;
   }
   ```

   </details>

3. **Draw the state-space tree** for generating all subsets of `[A, B]`. Label each node with the current state and mark which branches get pruned (if any).

4. **True or False:** Backtracking always finds the _optimal_ solution to a problem. Explain your answer.

5. **Complexity Question:** For the N-Queens problem on an N×N board, what is the worst-case time complexity? Why is the actual runtime much better than this worst case?

## 📚 Supplemental Materials

- [Backtracking — Visualgo Interactive Visualization](https://visualgo.net/en/recursion) — Watch backtracking algorithms execute step by step with animations.
- [LeetCode Backtracking Problem Set](https://leetcode.com/tag/backtracking/) — Practice problems sorted by difficulty.
- [Video: Recursion in Software Engineering - Full Course — freeCodeCamp (2 hours)](https://www.youtube.com/watch?v=IJDJ0kBx2LM) — A comprehensive tutorial covering recursion principles and backtracking with practical code examples.
