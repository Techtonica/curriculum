# Week 5 — Code Challenges

Welcome to Week 5 of code challenges! This folder is all about adding and removing
elements from an array. You will practice taking items off one end and putting
them on the other, and you will see how a few small methods combine into bigger
operations like reversing and rotating. Take your time, and remember the goal is
to understand, not to rush.

## Who This Folder Is For

If you are in the program, work through the `.js` challenges. That is your
required track.

The Python versions are there for grads revisiting the material, folks in the
seeker program, and anyone working through the curriculum on their own. If you're
a program participant feel free to skip them.

## What is in this folder

You will find three files here, and two of them contain more than one task:

1. **Pop, Shift and Unshift Elements** (`Pop_Shift_and_Unshift_Elements.js`) asks
   you to take an array of strings and move the first element to the end, using
   `shift` and `push`.
2. **Reverse and Rotate Array Elements** (`Reverse_and_Rotate_Array_Elements.js`)
   has two tasks. First, reverse an array using only `push` and `pop`. Second,
   take a number `n` and move the first `n` elements to the end.
3. **Remove Duplicates and Add Elements** (`Remove_Duplicates_and_Add_Elements.js`)
   also has two tasks. First, find a specific item in an array and move it to the
   end. Second, return a new array with all duplicate numbers removed, using
   `reduce` and `push`.

**Optional:**

- `Pop_Shift_and_Unshift_Elements.py` — the same task, in Python.
- `Reverse_and_Rotate_Array_Elements.py` — the same two tasks, in Python.
- `Remove_Duplicates_and_Add_Elements.py` — the same two tasks, in Python.

## Duplicated Exercises

Every challenge here appears twice, once as a `.js` file and once as a `.py` file.
They are the same challenges, not new ones.

If you are in the program, you only need the JavaScript versions. The Python files
are there for the other readers of this curriculum.

There is also a second kind of repetition inside the JavaScript files themselves,
and this one is worth paying attention to. Four of the five tasks are the same
move in a different costume: take something off one end of the array and put it on
the other. Moving the first element to the end, moving the first `n` elements to
the end, moving one specific item to the end, and reversing an array are all built
out of the same handful of methods. When the fourth one feels obvious, that is the
concept landing.

**The vital concept this week is adding and removing elements at the ends of an
array.** There are only four methods to know: `push` and `pop` work at the end,
`shift` and `unshift` work at the beginning. Almost everything else you do with
arrays is those four combined in some order.

## Prerequisites

A few things that will help you before you start:

1. You know how to write a basic function in JavaScript.
2. You are comfortable with variables, loops, and simple `if` statements.
3. You can run a file from your terminal with `node file.js`.
4. You have worked with arrays and array indexes before.
5. For the optional Python challenges, you can read a little Python and run a file
   with `python3 file.py`.

If any of these feel new, that is fine. You can review them as you go.

## Motivation

Arrays are how programs hold lists of things, and lists are everywhere: users,
messages, search results, items in a cart. Being able to add and remove items
confidently, without accidentally wrecking the original list, is a small skill you
will use constantly.

The last task, removing duplicates with `reduce`, is also your first real taste of
building up a result one element at a time. That pattern comes back often.

## Learning Objectives

After finishing this folder, you will be able to:

1. Use `push`, `pop`, `shift`, and `unshift` and say what each one does.
2. Move elements from the front of an array to the back.
3. Reverse an array by moving elements one at a time.
4. Rotate an array by a given number of positions.
5. Remove duplicate values from an array using `reduce`.

The Python versions do not add new objectives. They are the same tasks written in
Python syntax.

## Sequence and Relation

A gentle order to follow, from easier to harder:

1. Pop, Shift and Unshift Elements (`Pop_Shift_and_Unshift_Elements.js`)
2. Reverse and Rotate Array Elements (`Reverse_and_Rotate_Array_Elements.js`)
3. Remove Duplicates and Add Elements (`Remove_Duplicates_and_Add_Elements.js`)

Start with the first file, which is a single task and the smallest version of the
week's idea: one element, off the front, onto the back. Reverse and Rotate is the
same idea repeated, first over the whole array and then over the first `n`
elements, so it is a natural next step.

Save Remove Duplicates for last. Moving one specific item is comfortable by then,
and the duplicate-removal task introduces `reduce`, which is the hardest new thing
in the folder.

Remember that the Python files are there for practice by folks outside the
program. Feel free to skip them if you're a participant in the program.

## Relevant Materials

Here are some resources you can keep open while you work:

1. [MDN: Array push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
2. [MDN: Array pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
3. [MDN: Array shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
4. [MDN: Array unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
5. [MDN: Array reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
6. [MDN: Array includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
7. [Python: More on Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)
   (for the optional Python challenges)

## Common Mistakes and Misconceptions

Here are a few things that trip people up, so keep an eye out:

1. `push`, `pop`, `shift`, and `unshift` all change the original array. They do not
   hand you back a copy. If the challenge asks for a *new* array, make a copy
   first, for example with `[...arr]` or `arr.slice()`.
2. It is easy to mix up which end each method works on. `push` and `pop` are both
   at the end, `shift` and `unshift` are both at the beginning. Saying it out loud
   before you type helps.
3. `pop` and `shift` return the element they removed, while `push` and `unshift`
   return the new length. Reaching for the wrong return value is a common slip.
4. When you reverse an array by popping in a loop, the array shrinks as you go. A
   loop written as `for (let i = 0; i < arr.length; i++)` will not do what you
   expect, because `arr.length` changes on every pass.
5. If you rotate by `n` and `n` is larger than the array, think about what should
   happen. Deciding that ahead of time is easier than debugging it later.
6. For removing duplicates, `reduce` builds up a result one element at a time.
   Remember to give it a starting value of `[]`, and to check whether the element
   is already in your accumulator before you push it.

Happy coding! You have got this.
