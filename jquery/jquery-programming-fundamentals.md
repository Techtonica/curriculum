# jQuery Programming Fundamentals

### Projected Time
45 minutes

### Prerequisites


### Motivation
I want my website to be interactive.

### Objective
**Students will be able to** add jQuery to their webpage and use the jQuery click event to change elements styles.

### Specific Things To Teach
- The `<script>` tag
- Add JavaScript to a webpage
- Selecting a DOM element
- Loading Our Own Script
- Basic debugging in the Developer Console


### Materials
- `index.html` and `myScript.js` in the `jquery-programming-fundaments` directory
- Students' own webpages for Guided Practice, Independent Practice, and the Challenge


### Mini Lesson
- The `<script>` tag
  - Where does it go in the HTML document?
    - The bottom of the body tag.  
  - Why?
    - If we put it in the HEAD tag, the browser will go get the JS file and won't draw the HTML or CSS until it finishes downloading.  We don't want to show our users a blank screen while they wait so we tell the browser to draw the HTML and CSS first before it tries to load any JavaScript.
  - What are some of the `<script>` tag's attributes?
    - `type` identifies the language of the code embedded within the script tag.  Ex: type="text/javascript", "application/javascript"
    - `src` tells the browser where to find the file
  - Add JavaScript to a webpage
    - Create a script tag to load jQuery in a webpage.
    - `<script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>`
    - The `integrity` and `crossorigin` attributes are used for Subresource Integrity (SRI) checking. This allows browsers to ensure that resources hosted on third-party servers have not been tampered with. Use of SRI is recommended as a best-practice, whenever libraries are loaded from a third-party source. Read more at srihash.org
- Selecting a DOM element
  - We can select elements to change with the syntax `$('.class')` and `$('#id')`
  - Demonstrate by using `console.log($('.someClass'));`
  - What did jQuery give us?
    - One (or more) matching elements and any of its child elements.
  - The DOM: Document Object Module
    - A *model* of our HTML *document* in a programming language called javascript.  Because our HTML is represented in JavaScript, we can write JavaScript code to change our web page.
    - The structure of that model is a like a tree.  HTML elements are sometimes called `nodes` when we talk about them using in their DOM or JavaScript representation.
      - Ex: "This HTML element is missing a closing tag." vs "I want to select the second paragraph node." or "I want to add a new paragraph node."
- Loading Our Own Script
  - `<script type="text/javascript" src="/static/js/myScript.js"></script>`
  - Scripts can load at different times.  We want to wait until jQuery has loaded before we try to use it.
    - $(document).ready()
- Basic debugging in the Developer Console
  - How do we know that jQuery is loaded?
    - Open the developer console and type in $
  - How can we tell that our own script loaded?
    - Try adding a console.log statement.


### Common Mistakes / Misconceptions
- jQuery is not the same as JavaScript.  jQuery is a library written in JavaScript that makes JavaScript behave consistently in different browsers.


### Guided Practice

- Students add jQuery to their own webpages.  
- Add the ability to change an element's color when it is clicked.  This can be a copy of the `myScript.js` example code.

### Independent Practice

- Add the ability to change a paragraph's font size when it is clicked.
- Add the ability to change an element's color when you hover over it with your mouse.


### Challenge
- Make an element's color switch between two colors when someone clicks on it (with the `.toggle()` method);
