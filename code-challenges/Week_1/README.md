# Week 1 — Code Challenges

Welcome to your first week of code challenges! This folder has a small set of
exercises to help you get comfortable working with strings and arrays. Take your time
with each one and remember that the goal is to practice and learn, so it is
okay to go slow.

## What is in this folder

You will find three challenges here:

1. **Find All Anagrams** (`find_all_anagrams.js` and `Find_All_Anagrams_in_a_String.py`)
2. **Reverse a String** (`reverse_a_string.js` and `Reverse_a_String.py`)
3. **Slice and Splice** (`slice_and_splice.js`)
4. **Slice and Split** (`slice_and_split.js`)

## Prerequisites

Here are a few things that will help you before you start:

1. You know how to write a basic function in JavaScript.
2. You are comfortable with variables, loops, and simple `if` statements.
3. You can run a file from your terminal with `node file.js`.
4. You have seen strings and arrays before.

If any of these feel new, that is fine. You can review them as you go.

## Motivation

Working with text and lists is something you will do all the time as a
developer. These exercises give you a friendly place to practice the small
skills that show up again and again later in the program. Once these feel
natural to you, the bigger projects in the coming weeks will feel much easier.

## Learning Objectives

After finishing this folder, you will be able to:

1. Reverse a string on your own.
2. Break a string into pieces and pull out the part you need.
3. Look at two words and figure out if they are anagrams.
4. Copy items from one array into another while keeping the originals safe.

## Sequence and Relation

A gentle order to follow, from easier to harder:

1. Reverse a String
2. Slice and Split
3. Slice and Splice
4. Find All Anagrams

Reverse a String and Slice and Split help you get used to string methods. Slice
and Splice takes those ideas over to arrays. Find All Anagrams brings everything
together, so it is a nice one to save for last.

## Relevant Materials

Here are some resources you can keep open while you work:

1. [MDN: String slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
2. [MDN: String split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
3. [MDN: Array slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
4. [Python string methods](https://docs.python.org/3/library/string.html)

## Common Mistakes and Misconceptions

Here are a few things that trip people up, so keep an eye out:

1. In Slice and Splice, the challenge asks you to keep the original arrays the
   same after your function runs. Reach for `slice()` when you want a copy so you
   do not change the originals by accident.
2. `slice()` and `split()` do two different jobs. `slice()` gives you back a
   piece of a string, and `split()` breaks a string into an array. It helps to
   say out loud which one you need.
3. Remember that `slice(start, end)` includes the start position and stops right
   before the end position. Testing the edges will save you time.
4. For anagrams, comparing the letters and how many times each one appears is a
   friendly way to check your answer.
5. Think about the empty case too, like when there are no matching anagrams. Your
   function should still return an empty array.

Happy coding! You have got this.