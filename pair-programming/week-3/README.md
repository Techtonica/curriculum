# Week 3 — Pair Programming

Welcome to Week 3! This week is mostly about forms, which are how a web page asks a
user for information, and about checking that the information they give you is
actually valid. You will also do some focused practice with loops, objects, and
debugging. Keep the pair programming rhythm going: one person drives (types) while
the other navigates (thinks out loud), and you switch often. Talking through your
reasoning is a big part of the learning, so go slow and enjoy it.

## What is in this folder

There is a lot here, so it is grouped by idea:

**Forms and validation (the heart of the week)**

1. **Practice Forms and CSS Media Queries** (`Practice_Forms_and_CSS_Media_Queries`)
   is a gentle start. You build a form with HTML and style it with CSS, and make
   it responsive with media queries.
2. **Create a Form and Validate an Input** (`How_to_Create_a_Form_and_Validate_an_Input`)
   adds JavaScript so the form checks the email format and password length when
   it is submitted.
3. **Validate Form** (`form-validation`) is focused password validation: the two
   passwords must match, be at least six characters, and contain a digit, with a
   clear message shown on the page.
4. **Media and Forms** (`media-and-forms`) brings it together: an image with media
   queries, plus a button that reads a user's input and shows an error if it is
   empty.

**Smaller focused practice**

5. **Toggle Button** (`toggle-button`) is a tiny exercise where a button flips a
   boolean value each time it is clicked.
6. **Loops and Switch** (`forEach_for_while_and_switch_statements.js`) is drill
   practice for `for`, `while`, `do...while`, `forEach`, and `switch`.
7. **Object Literals, Maps, and Sets** (`Object_Literals_Maps_and_Sets.js`) is
   drill practice for three ways to store data in JavaScript.

**A debugging session**

8. **Error Detective** (`Activity.md`) is a guided 60-minute activity where you
   fix a broken shopping-cart program and learn to read error messages. It is
   marked for Weeks 3 and 4, so it is fine to start it here and continue next
   week.

## Why You Will See Forms More Than Once

You will notice that forms show up in four different exercises this week. That is
completely intentional, and you should do all of them rather than pick just one.

Here is the thinking. Forms are made of several layers stacked together: the HTML
structure, the CSS styling, the responsive media queries, and the JavaScript
validation. If you tried to learn all of that at once, it would be overwhelming.
So instead, the exercises let you add one layer at a time:

- First you build and style a form (`Practice_Forms_and_CSS_Media_Queries`).
- Then you add validation logic (`How_to_Create_a_Form_and_Validate_an_Input`).
- Then you go deeper on one kind of validation (`form-validation`).
- Then you combine forms with images and events (`media-and-forms`).

Each exercise revisits the same idea from a slightly different angle. By the last
one, building a form should feel familiar instead of scary. That is how you know
the concept has landed: not because you did it once, but because you did it several
times and it started to feel easy.

**The vital concept this week is form validation**, which means checking a user's
input *before* your program trusts it. If you understand why and how to validate
input, everything else this week supports that.

## Prerequisites

A few things that will help before you begin:

1. You are comfortable with basic HTML, CSS, and simple JavaScript functions.
2. You have done some DOM manipulation, like finding an element and changing it.
3. You know how to add an event, like reacting to a button click.
4. You can open an HTML file in the browser and use the developer console.

If any of this feels shaky, the DOM work from Week 2 is great to review first.

## Motivation

Almost every app you will ever build asks users for information: a login, a signup,
a search box, a comment. Forms are how you collect that information, and validation
is how you protect your app from bad or missing data. Getting comfortable with both
now means the bigger projects later will feel much more approachable.

## Learning Objectives

After finishing this folder, you will be able to:

1. Build a form in HTML with labels and inputs.
2. Style a form with CSS and make it responsive with media queries.
3. Validate user input with JavaScript, like checking length and format.
4. Show helpful error messages on the page using DOM manipulation.
5. Use loops, `switch`, objects, maps, and sets with more confidence.
6. Read an error message and debug a broken program step by step.

## Sequence and Relation

A gentle order to follow:

1. Loops and Switch, and Object Literals, Maps, and Sets (quick warm-ups)
2. Toggle Button
3. Practice Forms and CSS Media Queries
4. Create a Form and Validate an Input
5. Validate Form
6. Media and Forms
7. Error Detective (can carry into Week 4)

Start with the small drills to warm up your JavaScript. Toggle Button eases you
into events. Then move through the four form exercises in order, since each one
adds a layer. Save Error Detective for when you have some code under your belt, so
the bugs make more sense.

## Relevant Materials

Keep these open while you work:

1. [MDN: Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
2. [MDN: Form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
3. [MDN: preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
4. [MDN: Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
5. [The JS Way: Instant validation](https://github.com/thejsway/thejsway/blob/master/manuscript/chapter17.md#instant-validation)

## Common Mistakes and Misconceptions

A few things that trip people up, so keep an eye out:

1. When a form is submitted, the page tries to reload by default. Use
   `event.preventDefault()` inside your submit handler so your JavaScript can run.
2. To compare two values, use `===`, not `=`. A single `=` assigns instead of
   comparing, and it is a very common validation bug (you can even see this in the
   Error Detective code).
3. Read input values with `.value`, like `input.value`, not just the element.
4. When you show an error message, make sure the element you are writing into
   actually exists on the page, or you will get `null`.
5. Validation is about being helpful, not just blocking. Always tell the user what
   went wrong and how to fix it.
6. Take turns typing. If one person does all the driving, the other misses the
   practice.

## A Closer Look: What Form Validation Really Means

Forms are everywhere this week, so let me slow down and explain what validation is
really about, because it is one of those skills you will use forever.

A form is simply a way for a user to hand your program some information. The
problem is that users are human. They leave fields blank, they mistype their
email, they pick a password that is too short. If your program just trusts
whatever it receives, it will break or store bad data. Validation is the step
where you check the input *before* you accept it.

The pattern almost always looks the same. First, stop the form from reloading the
page so your code can run:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Then read the values the user typed:

```js
const password = document.getElementById("password").value;
```

Then check them against your rules, one by one:

```js
if (password.length < 6) {
  message.textContent = "Password must be at least 6 characters.";
  return;
}
```

Notice two things. First, you use `.value` to get what the user actually typed.
Second, when a rule fails, you show a clear message and stop, so you do not keep
going as if everything were fine.

Good validation is really an act of kindness. You are catching small problems
early and telling the user exactly how to fix them, instead of letting the app
fail in a confusing way later. That is why this week gives you the same idea over
and over, from a plain HTML form all the way to a form that checks emails and
passwords. By the end, you will be able to look at any input and ask the right
question: "what could go wrong here, and how do I check for it kindly?"

Happy coding! Enjoy working together.
