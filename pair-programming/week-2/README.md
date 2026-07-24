# Week 2 — Pair Programming

Welcome back! This week you keep building on Week 1. You will spend some time in
the terminal, and you will do a lot of DOM manipulation, which means using
JavaScript to change what shows up on a web page. Remember the pair programming
rhythm: one person drives (types) while the other navigates (thinks out loud),
and you switch often. Saying your ideas out loud is where a lot of the learning
happens, so go slow and talk it through.

## What is in this folder

You will find these exercises this week:

1. **Command Line Interface** (`Command_Line_Interface`) is terminal practice.
   You make folders and files and move them around using commands like `mkdir`,
   `cd`, `ls`, `touch`, `cp`, `mv`, and `rm`.
2. **Modify the DOM** (`modify-dom`) is a gentle first DOM exercise. You change
   the background and text color with JavaScript and build a list of fruits.
3. **DOM Manipulation with Events** (`JS_DOM_Manipulation`) is the next step up.
   You ask the user for a color with a prompt, use it to change the background,
   and add mouse-enter and mouse-leave events that change text on hover.
4. **Newspaper List** (`newspaper-list` and `Manipulating_HTML_with_JS`) is where
   you take an array of newspaper links and show them on the page as clickable
   links. You will notice these two folders describe the same exercise. That is
   on purpose, and the next section explains why.
5. **Media Queries** (`Media_Queries_Exercise`) is CSS practice for making a page
   look good on phones, tablets, and desktops using `min-width` and `max-width`.

## Why You Will See Some Ideas More Than Once

If you look closely, a few exercises this week ask you to do very similar things.
`modify-dom` and `JS_DOM_Manipulation` are both about changing the page with
JavaScript. `newspaper-list` and `Manipulating_HTML_with_JS` are the same
newspaper exercise written twice.

This is not a mistake, and you should not skip the repeats. Here is the idea:

- The **first time** you solve a problem, you are often just copying steps and
  hoping it works.
- The **second time**, you already have a picture in your head, so you get to
  focus on *understanding why* each line does what it does.

Doing something twice is one of the best ways to check whether a concept really
landed. If the second attempt feels easy and you can explain it to your partner
without looking, that is proof you have it. If it still feels shaky, that is
useful information too, and it tells you exactly what to review.

So treat the repeats as a friendly quiz, not busywork. Try the second version
without peeking at your first answer, and talk through each step out loud.

**The vital concept this week is DOM manipulation.** Everything else supports it.
If you walk away truly understanding how to find an element and change it with
JavaScript, this week did its job.

## Prerequisites

A few things that will help before you begin:

1. You finished Week 1, or you are comfortable with basic HTML, CSS, and simple
   JavaScript functions.
2. You can open a terminal on your computer.
3. You can link a `script.js` and a `style.css` file inside an `index.html`.
4. You know how to open an HTML file in the browser to see your work.

If the terminal feels scary, that is normal. The Command Line exercise is a safe
place to practice, and nothing bad happens if you type a command and it just says
"command not found."

## Motivation

This week is about making web pages come alive. In Week 1 you got a first taste of
the DOM. This week you really lean into it, because changing the page with
JavaScript is one of the most common things a front-end developer does every day.
You also get comfortable in the terminal, which is where you will run almost every
tool from now on, and you learn media queries so your pages work on any screen.

## Learning Objectives

After finishing this folder, you will be able to:

1. Move around your computer using the command line.
2. Change a page's colors, text, and structure using DOM manipulation.
3. React to a user with events like clicks and hovers.
4. Build HTML elements from a JavaScript array and add them to the page.
5. Make a layout responsive with CSS media queries.

## Sequence and Relation

A gentle order to follow:

1. Command Line Interface
2. Modify the DOM
3. Newspaper List (try both folders)
4. DOM Manipulation with Events
5. Media Queries

Start with the command line so you are comfortable moving around. Then do the two
simpler DOM exercises (Modify the DOM and Newspaper List) to get the basics of
changing a page. DOM Manipulation with Events adds user input and hover events, so
it fits nicely after those. Media Queries is a change of pace into CSS, and it is a
good one to end on.

## Relevant Materials

Keep these open while you work:

1. [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
2. [MDN: Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
3. [MDN: EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
4. [MDN: Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
5. [MDN: Command line crash course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

## Common Mistakes and Misconceptions

A few things that trip people up, so keep an eye out:

1. `rm -rf` deletes things for good, with no trash can to recover from. Read the
   folder name twice before you run it in the Command Line exercise.
2. If your JavaScript does not seem to run, check that `script.js` is actually
   linked in your `index.html`, usually right before the closing `</body>` tag.
3. When you select an element that does not exist, JavaScript gives you `null`.
   Double-check your `id` and class names match between the HTML and the JS.
4. To set a color you change a style property, like
   `element.style.background = "blue"`. Forgetting `.style` is a common slip.
5. Media queries use `min-width` and `max-width`. It is easy to mix them up, so
   resize your browser window and watch the layout change to check your work.
6. Take turns typing. If one person does all the driving, the other misses the
   practice.

## A Closer Look: What DOM Manipulation Really Means

Most of this week is DOM manipulation, so let me slow down and explain what that
phrase actually means, because it sounds fancier than it is.

When the browser loads your HTML, it does not just keep it as text. It builds a
living model of your page in memory, shaped like a tree, where every tag becomes a
node. That model is called the DOM, which stands for Document Object Model. The
important idea is this: the DOM is a set of objects, and JavaScript can reach in
and change those objects while the page is running.

So "manipulating the DOM" simply means using JavaScript to find a part of the page
and change it. First you find the element you want:

```js
const body = document.querySelector("body");
const content = document.getElementById("content");
```

Then you change it. You can change how it looks:

```js
body.style.background = "blue";
body.style.color = "white";
```

Or you can add brand new elements. This is the pattern you use in the Newspaper
List and the fruit list. You create an element, put something inside it, and
attach it to the page:

```js
const li = document.createElement("li");
li.textContent = "Apple";
content.appendChild(li);
```

The moment you call `appendChild`, the browser updates the tree and you see the new
item appear on the screen. Nothing reloaded, the page just changed. That is the
magic of the DOM.

The last piece this week is events. An event is the page telling you that something
happened, like a click or the mouse entering an element. You "listen" for the event
and run a function when it happens:

```js
const element = document.getElementById("element");
element.addEventListener("mouseenter", () => {
  element.textContent = "You are hovering!";
});
```

Put these three ideas together, find an element, change or add elements, and react
to events, and you can build almost any interactive page. Everything you do later
in React is built on top of exactly this. This is why the week gives you more than
one chance to practice it. So take your time, point at the screen with your
partner, and say out loud what you expect to change before you run it. When the
page does the thing you predicted, that is a great feeling.

Happy coding! Enjoy working together.
