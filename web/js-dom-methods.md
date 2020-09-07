# JS HTML DOM Methods

### Projected Time

Approximately 2 hours

- 6 minutes for video walkthrough of slides
- 65 minutes for Independent Practice
- 30 minutes for challenge
- 10 minutes for Check for Understanding

### Prerequisites

- [Debugging lesson](../debugging/debugging.md)
- [HTML lesson](/web/html.md)
- [CSS lesson](/web/css.md)

### Motivation

Javascript is one of most popular programming languages. Earlier Javascript was only used for designing interactive web pages but now it is used for Full Stack Development. Out of number of methods of running Javascript is through web browser, in which we interact with elements of the page.When a web page is loaded, the browser creates a Document Object Model of the page.

Prominent companies like Netflix, Walmart, Paypal built their entire applications around javascript. You may check [ironhack.com](https://blog.ironhack.com/2018/11/30/10-major-companies-using-javascript/) to check other leading companies using javascript.

### Objectives

**Participants will be able to:**

- Able to write HTML code and making changes through JavaScript
- Incorporate methods on DOM thereby making web pages interactive
- Select HTML elements by their element type, class and ID with JavaScript
- Learn ways to link JavaScript to HTML 
- Learn to use element properties like `.insertAdjacentElement()`
- Implementation of classes & attributes by using `.setAttribute()` & `.getAttribute()`
- Walk through some methods to traverse and delete nodes

### Specific Things to Learn

- How to incorporate JavaScript into a webpage
- How to select HTML elements
- Common and useful JavaScript methods for basic interactivity
- Dynamically add or remove HTML elements

### Lesson

- [JS HTML DOM (slides)](https://docs.google.com/presentation/d/1k6gvJ2bO88D8lE4zVyge_SQxO2FBLzJxZeM381OMXhU/edit?usp=sharing)
- [JavaScript and DOM tutorial on Treehouse](https://teamtreehouse.com/library/javascript-and-the-dom-2)

### Things to Remember

- **Remember to use `.` to select classes and `#` to select ids.**
- **There are several JavaScript methods that achieve similar goals but through different means.** You should understand how they're different so you can use them appropriately.
  - `.appendChild()` vs `.insertAdjacentText()`

### Guided Practice

Work through the [JavaScript and DOM tutorial on Treehouse](https://teamtreehouse.com/library/javascript-and-the-dom-2).

#### Activity 1 - Trying Out Some important JavaScript DOM methods

For each of the following links, read the code and play around with its functionality. You can refresh the webpage to reset it.

[Here is some code and a sandbox](https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_method) for `.getElementById()` & `.innerHTML` showing difference between method and property.

[Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname_length) for `.getElementsByTagName()`.

[Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2) for `.createElement()`.

[Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild) for `.appendChild()`.

[Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild) for `.removeChild()`.

[Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_getattribute2) for `.getAttribute()`.

[Here is some code and a sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1) for `.setAttribute()`.

#### Activity 2 - JavaScript DOM method Example

1. Using your Terminal, create a new directory inside your assignments directory and give it the name `js-dom-play`.

2. Navigate to `js-dom-play`. Open the whole directory in VS Code using the Terminal shortcut you learned in the "Local Development with VS Code" lesson.

3. Create a file called `index.html`. It should automatically appear in the left sidebar in VS Code as an editable file.

4. Read [this example code](/web/js-dom-methods-walkthrough/index.html) and talk through it with your pair partner. Once you understand what it does, copy it into `index.html` and save the file.

5. Open `index.html` in a new Chrome tab. What do you see? Is this what you expected, based on the code you read?

6. Create a new directory called `static`. Navigate to `static`. Remember that all CSS and JS files go in this `static` folder.

7. Create a new directory called `js-dom`. Navigate to `js-dom`.

8. Create a file in the `js-dom` directory called `myScript.js`. It should automatically appear in the left sidebar in VS Code as an editable file.

9. Read [this example code](/web/js-dom-methods-walkthrough/static/script.js) and talk through it with your pair partner. Once you understand what it does, copy it into `myScript.js` and save the file.

10. Refresh the Chrome tab that is currently rendering `index.html`. What happens? What do you see? What are you now able to do?

#### Activity 3 - Customize the JS DOM Method Example

1. Using the JavaScript documentation or other resources as your guide, add another div with class having an image, a paragraph describing the image and a button through javaScript.

2. Using the Javascript documentation or other resources as your guide, add a list in between the two divs using appropriate methods.

### Supplementary Materials

- [Javascript official Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript HTML DOM hands on experience on w3schools](https://www.w3schools.com/js/js_htmldom.asp)
- [Introduction to DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

### Check for Understanding

1. Where in an HTML document do you link external JavaScript file and Why?
2. What is DOM?
3. Name at least 5 methods for making changes to the DOM you used or saw today.
4. Where would you look to find more JavaScript DOM methods?
5. What are different ways of traversing the DOM? 
