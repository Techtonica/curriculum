# Week 1 — Pair Programming

Welcome to your first week of pair programming! These exercises are meant to be
done together with a pair programming partner or your mentor. Pair programming means two people
work on the same problem, one person types (drives) while the other thinks out loud (navigates), and
you switch often. Talking through your ideas is a big part of the learning here,
so go slow and enjoy the conversation.

## What is in this folder

You will find four exercises this week:

1. **Divs and DOM Manipulation** (`Divs_and_DOM_Manipulation`) is a little
   webpage where you practice HTML, CSS, and changing the page with JavaScript.
2. **Modeling a Bank Account** (`Modeling-A-Bank-Account`) is where you build a
   JavaScript object with methods like deposit and transfer.
3. **Substring and Repeat** (`substring-and-repeat`) is string practice using
   `substring()` and `repeat()`.
4. **Slice and Split** (`Week-1-PP-Slice-and-Split`) is string practice using
   `slice()` and `split()`.

## Prerequisites

Here are a few things that will help before you begin:

1. You can write basic HTML tags like `div`, `h2`, `p`, and `ul`.
2. You know a little CSS for styling.
3. You can write a simple function in JavaScript.
4. You have seen objects in JavaScript, meaning keys and values.
5. You can run a JavaScript file with `node index.js`.

If some of these feel new, that is okay. The bank account exercise is a great
one to do with your mentor so you can learn objects together.

## Motivation

This week gives you a friendly first taste of the main pieces you will use as a
web developer. You get to build something you can see in the browser, you start
thinking in objects, and you keep practicing string skills. Doing it in pairs
also helps you get comfortable explaining your code, which is a skill you will
use every single day in tech.

## Learning Objectives

After finishing this folder, you will be able to:

1. Build a small webpage with divs, lists, and links.
2. Change the content of a page using DOM manipulation.
3. Create a JavaScript object with properties and methods.
4. Use string methods like `substring`, `repeat`, `slice`, and `split`.
5. Work through a problem out loud with a partner.

## Sequence and Relation

A gentle order to follow:

1. Divs and DOM Manipulation
2. Substring and Repeat
3. Slice and Split
4. Modeling a Bank Account

The DOM exercise is a fun and visual place to start. The two string exercises
keep building your JavaScript basics. The bank account is the biggest step
because it introduces objects, so it is a good one to save for last and do
together with your mentor.

## Relevant Materials

Here are some resources to keep open while you work:

1. [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
2. [MDN: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
3. [MDN: String substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
4. [MDN: String repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
5. [MDN: String slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
6. [MDN: String split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

## Common Mistakes and Misconceptions

Here are a few things that trip people up, so keep an eye out:

1. In the DOM exercise, remember to link your `script.js` and `style.css` inside
   your `index.html`, or your changes will not show up.
2. When you change the page with JavaScript, make sure the element exists first.
   Selecting something that is not there gives you `null`.
3. In the bank account exercise, `this` refers to the object you are working on.
   It helps to say the word "this account" in your head when you read it.
4. `substring` and `slice` look similar, so read each prompt carefully and check
   which indexes it wants.
5. Take turns typing. If one person does all the typing, the other person misses
   out on the practice.

## A Closer Look: The Bank Account and Objects as Data

The bank account exercise is the heart of this week, so let me explain what it
is really about. Up until now you have mostly worked with single pieces of data,
like one string or one number. An object lets you gather many related pieces of
data into one neat package.

Think about a real bank account. It has a name on it, and it has a balance. In
JavaScript we can hold both of those together in one object:

```js
const account = {
  name: "Rosie",
  balance: 0,
};
```

Here `name` and `balance` are called properties. Each property has a label on
the left and a value on the right. So this one `account` object carries all the
information about Rosie in a single place. That is what people mean when they say
objects are a way to model data. You are making a small version of a real thing
inside your code.

Objects can also hold actions, and those actions are called methods. A method is
just a function that lives inside the object and can work with that object's own
data. For the bank account you will write methods like `deposit` and `transfer`.
When you are inside a method, the word `this` means "the object I belong to". So
`this.balance` means "the balance of this account".

```js
const account = {
  name: "Rosie",
  balance: 0,
  deposit(amount) {
    this.balance = this.balance + amount;
  },
};
```

When you call `account.deposit(50)`, the method reaches into its own object,
finds `this.balance`, and updates it. The object now remembers the new balance
for you.

This idea is a big deal because almost everything you build later will be made of
objects. A user, a product, a blog post, a message, all of these become objects
with their own properties and methods. Getting comfortable here will make the
rest of the program feel much friendlier, so take your time, say your steps out
loud with your partner, and let the account object hold your data for you.

Happy coding! Enjoy working together.