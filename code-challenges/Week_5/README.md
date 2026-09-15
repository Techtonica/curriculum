# Week 5 — Code Challenges

This folder covers one idea across six tasks: adding and removing elements at the ends of an array.

## Prerequisites

1. Comfortable writing functions, loops, and conditionals in JavaScript (Weeks 1-3).
2. Familiar with arrays and array indexes.
3. Have used `reduce` at least once (Week 4).
4. Can run a JavaScript file with `node file.js`.
5. For optional Python exercises, can read a little Python and run a file with `python3 file.py`.

## Motivation

Every task this week is built from the same two operations: take an element off one end of an array, put an element on the other end. `shift` and `pop` remove, `unshift` and `push` add. Reversing an array, rotating it, and moving one item to the back are all combinations of those four methods rather than four separate techniques.

There are two practical reasons this is worth slowing down on. `push` and `pop` work at the end while `shift` and `unshift` work at the beginning, and mixing them up is the single most common bug in this folder. All four also modify the array in place, so a challenge asking for a *new* array needs a copy made first.

## Learning Objectives

After finishing the required exercises, you will be able to:

1. Move an element from the front of an array to the back using `shift` and `push`.
2. Add several elements to the front of an array, in a given order, using `unshift`.
3. Reverse an array by moving elements one at a time with `push` and `pop`.
4. Rotate an array by moving its first `n` elements to the end.
5. Remove duplicate values from an array using `reduce` and `push`.

**_Optional_ — Additional Practice**

If you also complete the optional Python exercises, you will additionally be able to:

6. Remove duplicates from a list with `set()` and `list()`, a different approach from the `reduce` version in objective 5.
7. Handle edge cases — an empty list, or a list with fewer than two elements — when moving the first element to the end.

`Reverse_and_Rotate_List_Elements.py` adds no new objectives; it is the same two tasks in Python syntax.

## Sequence and Relation

**JavaScript**:

1. **Pop, Shift and Unshift Elements** (`Pop_Shift_and_Unshift_Elements.js`)
   - Two tasks: move the first element to the end with `shift` and `push`, then add a list of items to the front, in order, with `unshift`. Start here — these are the moves the rest of the week rearranges.
2. **Reverse and Rotate Array Elements** (`Reverse_and_Rotate_Array_Elements.js`)
   - Two tasks: reverse an array with `push` and `pop`, then move the first `n` elements to the end. The same moves as the first file, now run inside a loop.
3. **Remove Duplicates and Add Elements** (`Remove_Duplicates_and_Add_Elements.js`)
   - Two tasks: move one named item to the end, then strip duplicate numbers with `reduce` and `push`. Save it for last. `reduce` is the only method here that is not a simple add-or-remove, and the duplicate task is the hardest of the six.

**_Optional_ - Python**:

The Python file names do not all match their JavaScript counterparts, so pair them using this list rather than by name.

- `Pop_Append_and_Insert_Elements.py` — the same two tasks as `Pop_Shift_and_Unshift_Elements.js`, using `pop`, `append`, and `insert()`. This one also asks you to handle empty lists and lists with fewer than two elements, which the JavaScript version does not require.
- `Reverse_and_Rotate_List_Elements.py` — the same two tasks as `Reverse_and_Rotate_Array_Elements.js`, using `append`, `pop`, and `remove`.
- `Remove_Duplicates_and_Add_Elements.py` — the same first task as its JavaScript twin, but the duplicate removal asks for `set()` and `list()` instead of `reduce`.

## Relevant Materials

1. [MDN: Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
2. [MDN: Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
3. [MDN: Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
4. [MDN: Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
5. [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
6. [Python: More on Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)
7. [Python: set()](https://docs.python.org/3/library/stdtypes.html#set)

## Common Mistakes and Misconceptions

1. All four methods change the original array rather than returning a copy. If the challenge asks for a *new* array, copy it first with `[...arr]` or `arr.slice()`.
2. `pop` and `shift` return the element they removed; `push` and `unshift` return the array's new length. Returning the wrong one hands back a number instead of an array.
3. Adding several items to the front one at a time with `unshift` reverses their order. `unshift(...items)` in a single call keeps it.
4. When you reverse by popping in a loop, the array shrinks as you go, so `for (let i = 0; i < arr.length; i++)` stops halfway. Capture the length before the loop starts.
5. `reduce` needs a starting value as its second argument. Without one, an empty array throws `TypeError: Reduce of empty array with no initial value`.
6. Decide what rotating by an `n` larger than the array length should do before you write the loop, rather than debugging it afterwards.
7. In Python, `list.remove(x)` removes the first element matching a *value* while `list.pop(i)` removes by *index*. Passing an index to `remove` deletes the wrong element, or raises `ValueError` when no element matches.
8. In Python, `set()` does not preserve order. If the surviving numbers need to stay in their original order, `set()` alone will not do it.
