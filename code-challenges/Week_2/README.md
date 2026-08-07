# Week 2 — Code Challenges

Welcome to Week 2 of code challenges! This folder keeps building your string and
array skills, with a focus on searching, meaning finding where something lives
inside a list or a piece of text. Take your time with each one. The goal is to
practice and understand, so it is okay to go slow.

## Who This Folder Is For

If you are in the program, work through the `.js` challenges. That is your
required track.

The Python version is there for grads revisiting the material, folks in the
seeker program, and anyone working through the curriculum on their own. If you're
a program participant feel free to skip it.

## What is in this folder

You will find these challenges here:

1. **Find Last Index** (`array_search.js`) asks you to return the last position
   where a target number appears in an array, or `-1` if it is not there at all.
2. **Find Target Index** (`string_manipulation.js`) asks you to return the
   starting position of a substring inside a string, or `-1` if it is not found.
3. **Search and Replace** (`search_and_replace.js`) asks you to swap one word in
   a sentence for another, while keeping the capitalization of the first letter.

**Optional:**

- `string_manipulation.py` — the same Find Target Index task, in Python.

## Duplicated Exercises

Find Target Index appears twice, once as a `.js` file and once as a `.py` file.
It is the same challenge, not two different ones.

If you are in the program, you only need the JavaScript version. The Python file
is there for the other readers of this curriculum.

**The vital concept this week is searching and the `-1` "not found" pattern.** In
lots of languages, functions that look for something return the index when they
find it, and a special value like `-1` when they do not. Getting comfortable
checking for that `-1` will help you far beyond these exercises.

You will see this shape twice in a row, and that is worth noticing. Find Last
Index searches an array and Find Target Index searches a string, so the data is
different, but the answer has the same form: return where you found it, or return
`-1` when you did not. Searching is one idea you can apply to many kinds of data.

## Prerequisites

A few things that will help you before you start:

1. You know how to write a basic function in JavaScript.
2. You are comfortable with variables, loops, and simple `if` statements.
3. You can run a file from your terminal with `node file.js`.
4. You have seen strings and arrays before.
5. For the optional Python challenge, you can read a little Python and run a file
   with `python3 file.py`.

If any of these feel new, that is fine. You can review them as you go.

## Motivation

Searching through data is something you will do constantly as a developer, whether
you are looking for a user in a list or a word in a message. These challenges give
you a friendly place to practice that exact skill, and to get used to the `-1`
answer that so many built-in search functions hand back.

## Learning Objectives

After finishing this folder, you will be able to:

1. Search an array and return the position of an element, or `-1` if it is absent.
2. Search a string and return where a substring starts, or `-1` if it is absent.
3. Replace a word in a sentence while preserving its capitalization.

The Python version does not add a new objective. It is the same task written in
Python syntax.

## Sequence and Relation

A gentle order to follow, from easier to harder:

1. Find Last Index (`array_search.js`)
2. Find Target Index (`string_manipulation.js`)
3. Search and Replace (`search_and_replace.js`)

Start with the array search to warm up. Then do the string search, which is the
same idea pointed at a different kind of data. Save Search and Replace for last,
since it adds the extra twist of matching capitalization.

Remember that the Python file is there for practice by folks outside the program.
Feel free to skip it if you're a participant in the program.

## Relevant Materials

Here are some resources you can keep open while you work:

1. [MDN: Array indexOf() and lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
2. [MDN: String indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
3. [MDN: String replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
4. [Python: str.find()](https://docs.python.org/3/library/stdtypes.html#str.find)
   (for the optional Python challenge)

## Common Mistakes and Misconceptions

Here are a few things that trip people up, so keep an eye out:

1. Remember what "last" means in Find Last Index. If the target appears more than
   once, you want the highest index, not the first one you bump into.
2. The "not found" answer is `-1`, not `0` and not `null`. Index `0` is a real,
   valid position (the very first item), so returning `0` by mistake will look
   like a match that is not really there.
3. In Search and Replace, only the first letter's case needs to be preserved. If
   the original word starts with a capital letter, your replacement should too.
4. Reading the position of a substring is a little different from checking if it
   exists. These challenges want the actual index back, so return the number.
5. If you are doing the optional Python version: indexes still start at `0`, just
   like in JavaScript, so the expected answers line up between the two files.

Happy coding! You have got this.
