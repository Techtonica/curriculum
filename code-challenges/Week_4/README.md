# Week 4 — Code Challenges

This folder covers two topics: higher-order array methods (`filter`, `reduce`, `map`), and a first React component.

## What is in this folder

**Required:**

1. **Filter and Reduce** (`Filter_and_Reduce.js`) — four tasks using `filter` to extract elements matching a condition, and `reduce` to aggregate an array into a single value or a new structure.
2. **Map Practice** (`Map_Practice.js`) — tasks using `map` and other array methods on an array of objects (a list of friends), including deriving new values (initials, average age) and filtering based on those derived values.
3. **Getting Started with React: Hello Component** (`Getting_Started_with_React_Hello_Component/`) — starting from a provided Vite + React + TypeScript project, create a `Hello.tsx` component and render it from `App.jsx`.

**Optional:**

- `Filter_and_Reduce.py` — the same tasks as #1, in Python.
- `Map_Practice.py` — the same tasks as #2, in Python.
- **Getting Started with HTML, CSS, and Python** (`Getting_Started_with_HTML_CSS_Python/`) — build a small project with an HTML file, a CSS file, and a Python script that reads and writes files.

## Prerequisites

1. Comfortable writing functions, loops, and conditionals in JavaScript (Weeks 1-3).
2. Familiar with arrays of primitives.
3. Can run a JavaScript file with `node file.js`.
4. For optional Python exercises, can read a little Python, and can run a Python file with `python3 file.py`.

## Motivation

`filter`, `reduce`, and `map` replace the manual loops from Week 3 with built-in methods that express the same intent (keep some elements, combine elements, transform elements). These methods are used constantly when working with API responses, form data, and lists of records.

The React exercise is a first, minimal look at components: a small, reusable piece of UI defined in its own file and used inside another.

## Learning Objectives

After finishing the required exercises, you will be able to:

1. Use `filter` to extract elements from an array that match a condition.
2. Use `reduce` to combine elements of an array into a single value or a new structure.
3. Use `map` and related array methods to derive new values from an array of objects.
4. Create a React component in its own file and render it from a parent component.

**Optional — Additional Practice**

If you also complete the optional exercises, you will additionally be able to:

5. Organize a small project's HTML, CSS, and Python files as separate, related files.
6. Read and write files from a Python script.

The Python versions of Filter and Reduce and Map Practice do not add new objectives — they reinforce objectives 1-3 above in Python syntax.

## Sequence and Relation

**JavaScript:**

1. Filter and Reduce (`Filter_and_Reduce.js`)
2. Map Practice (`Map_Practice.js`)
3. Getting Started with React: Hello Component

Start with Filter and Reduce and Map Practice — both replace the manual loops from Week 3 with built-in array methods, and Map Practice is the harder of the two since it works with objects instead of plain numbers. Finish with the React project, where you will practice component-based structure.

**Python**, in any order relative to the required sequence:

- `Filter_and_Reduce.py` and `Map_Practice.py` — same tasks in Python, for comparison.
- Getting Started with HTML, CSS, and Python — a separate exercise in building a small multi-file project by hand. It does not depend on, or lead into, the React exercise.

## Relevant Materials

1. [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
2. [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
3. [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
4. [React: Your First Component](https://react.dev/learn/your-first-component)
5. [Python: built-in filter()](https://docs.python.org/3/library/functions.html#filter)
6. [Python: functools.reduce()](https://docs.python.org/3/library/functools.html#functools.reduce)
7. [Python: Reading and Writing Files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files)

## Common Mistakes and Misconceptions

1. `reduce` needs a starting value (the second argument) when you're building something other than a running total from the first element — without it, the result can be wrong or the function can error on an empty array.
2. A React component file must be exported (`export default function Hello() {...}`) and imported by name in the file that uses it (`import Hello from "./Hello"`) — a missing or mismatched import/export is the most common reason a component fails to render.
3. In Python, `filter()` and `map()` return iterator objects, not lists. Wrap the result in `list()` if you need a list back.
4. When reading or writing files in Python, the file path is relative to where you run the script from, not where the script file is located — run from the project's root folder to avoid "file not found" errors.
