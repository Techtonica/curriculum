# JS HTML DOM Methods

### Week 1 Keywords and Questions

- What is the DOM?
- What kind of events are there?
- What is an event listener?
- How do I select something in the DOM using JS?

### Prerequisites

- [Debugging lesson](../debugging/debugging.md)
- [HTML lesson](/web/html.md)
- [CSS lesson](/web/css.md)

### Motivation

Javascript is one of the most popular programming languages. Earlier, Javascript was only used for designing interactive web pages, but now it is used for Full Stack Development. One of many methods to running Javascript is through a web browser, where we interact with elements on the page. When a web page is loaded, the browser creates a Document Object Model of the page.

Prominent companies like Netflix, Walmart, and PayPal have built their entire applications around JavaScript.

### Objectives

**Participants will be able to:**

- Write `HTML` code and make changes with `JavaScript`
- Incorporate methods on the `DOM` to make web pages interactive
- Select `HTML` elements by their element type, class, and ID with `JavaScript`
- Learn ways to link `JavaScript` to `HTML`
- Learn to use element properties like `.insertAdjacentElement()`
- Implement classes & attributes by using `.setAttribute()` & `.getAttribute()`
- Walk through some methods to traverse and delete nodes

### Specific Things to Learn

- How to incorporate `JavaScript` into a webpage
- How to select `HTML` elements
- Common and useful `JavaScript` methods for basic interactivity
- Dynamically add or remove `HTML` elements

### Lesson

- [JS HTML DOM (slides)](https://docs.google.com/presentation/d/1k6gvJ2bO88D8lE4zVyge_SQxO2FBLzJxZeM381OMXhU/edit?usp=sharing)
- [JavaScript and DOM tutorial on Tutorial Republic](https://www.javascripttutorial.net/javascript-dom/) or [How to Create and Manipulate DOM Nodes on Medium](https://javascript.plainenglish.io/working-with-the-dom-in-vanilla-js-apps-part-1-bf8ccc0faaed) (see Guided Practice for how to choose)
- [How To Make Changes to the DOM](https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom) - This tutorial explains how to create new nodes and insert them into the DOM, replace existing nodes, and remove nodes.

### Things to Remember

- **Remember to use `.` to select classes and `#` to select ids.**
- **There are several JavaScript methods that achieve similar goals but through different means.** You should understand how they're different so you can use them appropriately.
  - `.appendChild()` vs `.insertAdjacentText()`

### A Note on jQuery vs. Vanilla JavaScript

It's important to understand the relationship between `HTML`, the `DOM`, `JavaScript`, and libraries like `jQuery`. When a browser loads an `HTML` file, it creates an internal representation of that page called the **Document Object Model (DOM)**. `JavaScript` is the language used to manipulate the `DOM`. `jQuery` is a popular `JavaScript` library that acts as a "wrapper" around native `JavaScript`, providing simpler, shorthand methods for common tasks like `DOM` manipulation, event handling, and `AJAX` requests. To effectively use `jQuery`, one must first understand the `DOM` it manipulates.

**Why was jQuery so popular?** 
In the past, different web browsers (like Internet Explorer, Netscape, and Firefox) had many inconsistencies in how they implemented `JavaScript`. `jQuery` solved this by providing a single, reliable API that worked across all browsers, saving developers from writing complex code to handle these differences.

**Why is jQuery less common today?** 
The web has evolved.

1.  **Browser Standardization**: Modern browsers now follow web standards much more closely. Many of `jQuery`'s most useful features, like easy element selection with `document.querySelector()`, are now built directly into `JavaScript`.
2.  **Performance**: `jQuery` adds extra file size to your project for functionality that browsers now offer natively. Using native `JavaScript` is often more performant.
3.  **Modern Frameworks**: Frameworks like React, Angular, and Vue have their own, more efficient ways of updating the `DOM`, making direct `DOM` manipulation with `jQuery` unnecessary in most new projects.

While you may still encounter `jQuery` in legacy codebases, for new projects, learning and using **vanilla JavaScript** (plain `JavaScript` without libraries) for `DOM` manipulation is the modern, standard practice. This lesson focuses exclusively on vanilla `JavaScript`.

### DOM Event Basics

`DOM` stands for Document Object Model. Each event in the `DOM` has an event handler, aka event listener, where developers can add `JavaScript` to set up any automatic actions they would like to trigger once the event takes place. An example of an event is a button click. An event listener could be given a function that changes the background color of the webpage when the button is clicked.

Some common examples of events are:

- Mouse events (`MouseEvent`): `mousedown`, `mouseup`, `click`, `dblclick`, `mousemove`, `mouseover`, `mousewheel`, `mouseout`, `contextmenu`
- Window events: `scroll`, `resize`, `hashchange`, `load`, `unload`
- Keyboard events (`KeyboardEvent`): `keydown`, `keypress`, `keyup`

### .addEventListener() Function

The `addEventListener()` method allows us to add event listeners on the `HTML DOM` object such as `Document`, `Element`, or `Window`. The first argument in `addEventListener()` should be a string, then the name of the event it should listen for. The second argument in `addEventListener()` is either a function to call when the event is fired or an object that implements `handleEvent`.

Syntax: `target.addEventListener(type, listener [, options]);`

In the previous example, the first argument would be the `'click'` event on the button, and the second argument is a function that changes the page background color when the `'click'` event fires.

Here's an example with a function as the listener:

```js
const button = document.querySelector('button');
button.addEventListener('click', function () {
  document.body.style.backgroundColor = 'blue';
});
```

On button click, the background of the body will be changed to blue.

Here's an example with an object as the listener:

```js
const ColorChangeButton = function (element) {
  this.handleEvent = function (event) {
    switch (event.type) {
      case 'click':
        document.body.style.backgroundColor = 'blue';
        break;
      case 'dblclick':
        document.body.style.backgroundColor = 'orange';
        break;
    }
  };

  // Note that the listeners in this case are |this|, not this.handleEvent
  element.addEventListener('click', this, false);
  element.addEventListener('dblclick', this, false);

  // You can properly remove the listeners this way:
  element.removeEventListener('click', this, false);
  element.removeEventListener('dblclick', this, false);
};
const s = new ColorChangeButton(document.body);
```

Also note in the above example that if you no longer need a particular event listener, you can remove it using `.removeEventListener()`.

### Event Bubbling and Propagation

Event propagation is the flow in which the events propagate to reach its target. It is the process of calling all the listeners for the given event type. We can register several listeners on one node for the same event type. The listeners are called in the order of their registration on reaching the node. The flow of propagation can be to the event target from the window and back, thus making it bi-directional.
The `stopPropagation()` method prevents the further propagation of any other event.

Syntax: `event.stopPropagation()`

Event bubbling is a way of event propagation. It refers to the order in which event handlers are called when an event is nested inside another event and both elements implement a listener for the same event. When an event takes place on an element, first the handlers are run on the inner-most element and then are successively run on its parent till it reaches the outer-most DOM element, like a bubble in water; this is known as event bubbling.

![Event Bubbling](https://www.tutorialrepublic.com/lib/images/event-propagation-illustration.png)

In the above diagram, if we are implementing a listener for a `'click'` event that runs an `alert()` function on the button as well as on the div and body, then first the event handler is run on the button, then on the div and then the body, as the button is nested inside the div, which is again nested inside the body. On clicking the button we get three alerts, one for the button, one for the outer div, and one for the body(button -> div -> body). So here the event "bubbles" from the innermost element to its parents.

### Guided Practice

Work through the [JavaScript Event Propagation on TutorialRepublic](https://www.tutorialrepublic.com/javascript-tutorial/javascript-event-propagation.php)

Or, work through the [JavaScript and DOM tutorial on Treehouse](https://teamtreehouse.com/library/javascript-and-the-dom-2) if you have a SF Public Library card

If you aren't using Treehouse, follow this [How to Create and Manipulate DOM Nodes on Medium](https://javascript.plainenglish.io/working-with-the-dom-in-vanilla-js-apps-part-1-bf8ccc0faaed) tutorial instead.

_Note: Our goal is to only provide free resources, so if you can't get Treehouse for free, don't use it. We have a lot of instances of Treehouse in the curriculum, but now that we’ve expanded beyond the Bay Area not every participant has free or inexpensive access. If you're in the Bay Area you will be able to get Treehouse through the [SF Public Library](https://sfpl.org/articles-databases/new-treehouse-account), but you need a library card._

#### Activity 1 - Trying Out Some important JavaScript DOM methods

For each of the following links, read the code and play around with its functionality. You can refresh the webpage to reset it.

- [Here is some code and a sandbox](https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_method) for `.getElementById()` & `.innerHTML` showing the difference between method and property.
- [Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname_length) for `.getElementsByTagName()`.
- [Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2) for `.createElement()`.
- [Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild) for `.appendChild()`.
- [Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild) for `.removeChild()`.
- [Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_getattribute2) for `.getAttribute()`.... [Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1) for `.setAttribute()`.
- [Here is some code and a sandbox](https://www.w3schools.com/JSREF/tryit.asp?filename=tryjsref_document_addeventlistener2) for `.addEventListener()`.
- [Here is some code and a sandbox](https://www.tutorialrepublic.com/codelab.php?topic=javascript&file=event-bubbling) for `event bubbling`.
- [Here is some code and a sandbox](https://www.w3schools.com/JSREF/tryit.asp?filename=tryjsref_event_stoppropagation) for `.stopPropagation()`.

#### Activity 2 - JavaScript DOM method Example

1. Create a new directory inside your assignments directory and give it the name `js-dom-play`.
2. Navigate into `js-dom-play`. Create a file called `index.html`.
3. Read [this example code](/web/js-dom-methods-walkthrough/index.html) and talk through it with your pair partner. Once you understand what it does, copy it into `index.html` using TextEdit or WordPad and save the file.
4. Open `index.html` in a new Chrome tab. What do you see? Is this what you expected, based on the code you read?
5. Create a new directory also inside `js-dom-play` called `static`. Navigate to `static`. Remember that all `CSS` and `JS` files go in this `static` folder.
6. Create a file in the `static` directory called `script.js`.
7. Read [this example code](/web/js-dom-methods-walkthrough/static/script.js) and talk through it with your pair partner. Once you understand what it does, copy it into `script.js` and save the file.
8. Refresh the Chrome tab that is currently rendering `index.html`. What happens? What do you see? What are you now able to do?

> _Text Editor Note: 'Rich text' is something that is often turned on by default in TextEdit or WordPad, but it does not play nicely with JS. One thing it does, for example, is turn 'quotes' into 'curly quotes'. See if you can dig into settings and make sure it's set to 'plain text' instead, or the rich text may start causing problems. Make sure you re-save your files to use plain text too if you were able to change the setting._

#### Activity 3 - Customize the JS DOM Method Example

1. Using the JavaScript documentation or other resources as your guide, add another div with a class containing an image, a paragraph describing the image, and a button with JavaScript functionality.
2. Using the Javascript documentation or other resources as your guide, add a list in between the two divs using appropriate methods.

### Supplementary Materials

- [Javascript official Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript HTML DOM hands-on experience on w3schools](https://www.w3schools.com/js/js_htmldom.asp)
- [Introduction to DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

### Check for Understanding

1. Where in an `HTML` document do you link an external `JavaScript` file and why?
2. What is the `DOM`?
3. Name at least 5 methods for making changes to the `DOM` you used or saw today.
4. Where would you look to find more `JavaScript` DOM methods?
5. What are different ways of traversing the `DOM`?
