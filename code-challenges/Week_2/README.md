# Week 2 — Code Challenges

Welcome to Week 2 of code challenges! This folder keeps building your string and
array skills, with a focus on searching, meaning finding where something lives
inside a list or a piece of text. Take your time with each one. The goal is to
practice and understand, so it is okay to go slow.

## What is in this folder

You will find these challenges here:

1. **Find Last Index** (`array_search.js`) asks you to return the last position
   where a target number appears in an array, or `-1` if it is not there at all.
2. **Search and Replace** (`search_and_replace.js`) asks you to swap one word in
   a sentence for another, while keeping the capitalization of the first letter.
3. **Find Target Index** (`string_manipulation.js` and `string_manipulation.py`)
   asks you to return the starting position of a substring inside a string, or
   `-1` if it is not found. The same challenge is given in both JavaScript and
   Python on purpose. The next section explains why.

## Why You Solve Some Challenges Twice

You will notice that Find Target Index shows up two times, once as a `.js` file
and once as a `.py` file. This is not an accident, and both are worth doing.

Solving the same problem in two languages is a powerful way to learn, because it
separates the *idea* from the *syntax*. The idea, "walk through the text and find
where the substring starts," is the same in every language. Only the words change.
When you solve it in JavaScript and then again in Python, you stop memorizing exact
lines and you start understanding the actual logic underneath.

There is a similar overlap between Find Last Index and Find Target Index. One
searches an array and one searches a string, but the shape of the answer is the
same: return where you found it, or return `-1` when you did not. Doing both lets
you see that searching is one idea you can apply to many kinds of data.

So treat the repeats as a way to check yourself. If the second version feels
clearer than the first, that is a great sign the concept has landed.

**The vital concept this week is searching and the `-1` "not found" pattern.** In
lots of languages, functions that look for something return the index when they
find it, and a special value like `-1` when they do not. Getting comfortable
checking for that `-1` will help you far beyond these exercises.

## Prerequisites

A few things that will help you before you start:

1. You know how to write a basic function in JavaScript, and you can read a little
   Python.
2. You are comfortable with variables, loops, and simple `if` statements.
3. You can run a file from your terminal with `node file.js` or `python3 file.py`.
4. You have seen strings and arrays before.

If any of these feel new, that is fine. You can review them as you go.

## Motivation

Searching through data is something you will do constantly as a developer, whether
you are looking for a user in a list or a word in a message. These challenges give
you a friendly place to practice the exact skill, and solving them in two languages
builds the kind of understanding that sticks.

## Learning Objectives

After finishing this folder, you will be able to:

1. Search an array and return the position of an element, or `-1` if it is absent.
2. Search a string and return where a substring starts, or `-1` if it is absent.
3. Replace a word in a sentence while preserving its capitalization.
4. Explain the same searching idea in both JavaScript and Python.

## Sequence and Relation

A gentle order to follow, from easier to harder:

1. Find Last Index (`array_search.js`)
2. Find Target Index (`string_manipulation.js`)
3. Find Target Index again (`string_manipulation.py`)
4. Search and Replace (`search_and_replace.js`)

Start with the array search to warm up. Then do the string search in JavaScript,
and right after, try the same thing in Python while the idea is fresh. Save Search
and Replace for last, since it adds the extra twist of matching capitalization.

## Relevant Materials

Here are some resources you can keep open while you work:

1. [MDN: Array indexOf() and lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
2. [MDN: String indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
3. [MDN: String replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
4. [Python: str.find()](https://docs.python.org/3/library/stdtypes.html#str.find)

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
5. When you test in Python, remember indexes still start at `0`, just like in
   JavaScript, so the expected answers line up between the two files.

Happy coding! You have got this.
