# Week 3 — Code Challenges

Welcome to Week 3 of code challenges! This folder is all about loops and working
with user input. You will practice repeating actions with different kinds of
loops, and you will build up strings from the pieces the user gives you. Take your
time, and remember the goal is to understand, not to rush.

## Who This Folder Is For

If you are in the program, work through the `.js` challenges. That is your
required track.

The Python versions are there for grads revisiting the material, folks in the
seeker program, and anyone working through the curriculum on their own. If you're
a program participant feel free to skip them.

## What is in this folder

You will find these challenges here:

1. **HackerRank Loops** (`HackerRank_Loops.js`) is a set of small loop problems:
   print numbers from 1 to N, print even numbers from N down to 1, and count down
   and up with a jump. You practice `for`, `while`, and `do...while` loops.
2. **Display User Name in Greeting** (`Display_User_Name_in_Greeting.js`) asks the
   user for their name and a number, then builds a greeting that repeats the name
   that many times. You practice joining pieces of text together with methods like
   `concat` and `join`.

**Optional:**

- `HackerRank_Loops.py` — the same loop problems, in Python.
- `Display_User_Name_in_Greeting.py` — the same greeting task, in Python.

## Duplicated Exercises

Both challenges in this folder appear twice, once in JavaScript (`.js`) and once
in Python (`.py`). They are the same challenge, not two different ones.

If you are in the program, you only need the JavaScript versions. The Python
files are there for the other readers of this curriculum.

**The vital concept this week is loops**, along with safely reading user input
(turning what the user typed into a number you can trust). If you understand those
two things, everything else here supports them.

## Prerequisites

A few things that will help you before you start:

1. You can write a basic function in JavaScript.
2. You are comfortable with variables and simple `if` statements.
3. You can run a file from your terminal with `node file.js`.
4. You have seen strings and arrays before.
5. For the optional Python challenges, you can read a little Python and run a
   file with `python3 file.py`.

If any of these feel new, that is fine. You can review them as you go.

## Motivation

Loops are how programs handle repetition, and repetition is everywhere: going
through a list of users, counting items, building up a message. These challenges
give you a friendly place to practice the loop shapes you will reach for again and
again, in this program and long after it.

## Learning Objectives

After finishing this folder, you will be able to:

1. Write `for`, `while`, and `do...while` loops with confidence.
2. Count up and down, and skip by steps using a jump value.
3. Read a value from the user and turn it into a number you can use.
4. Build a string by repeating and joining pieces together.

The Python versions do not add new objectives. They are the same tasks written in
Python syntax.

## Sequence and Relation

A gentle order to follow, from easier to harder:

1. HackerRank Loops (`HackerRank_Loops.js`)
2. Display User Name in Greeting (`Display_User_Name_in_Greeting.js`)

Start with the pure loop problems so you get comfortable with the loop shapes.
Then move on to the greeting challenge, which combines a loop with reading user
input and joining strings.

The optional Python files can be done in any order, or not at all.

## Relevant Materials

Here are some resources you can keep open while you work:

1. [MDN: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
2. [MDN: Array join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
3. [MDN: parseInt() and isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
4. [Python: for statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
   (for the optional Python challenges)

## Common Mistakes and Misconceptions

Here are a few things that trip people up, so keep an eye out:

1. Watch your loop's start and end. Whether it starts at `0` or `1`, and whether
   it stops before or at the end, changes your answer. Test the very first and
   very last number to be sure.
2. An off-by-one error is when your loop runs one time too many or too few. Using
   `<` versus `<=` is often the cause, so read that condition carefully.
3. Input from the user usually comes in as text, even when it looks like a number.
   Use `parseInt` to convert it before you count with it.
4. After converting, check that you actually got a number. `isNaN(value)` tells
   you when the conversion failed.
5. If you are doing the optional Python versions: Python does not have a
   `do...while` loop. You can get the same behavior with a `while` loop that
   checks its condition at the bottom instead of the top.

Happy coding! You have got this.
