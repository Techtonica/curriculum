# jQuery Programming Fundamentals

### Projected Time
About ___ hours
  - ___ for video walkthrough of slides
  - ___ for Independent 

### Prerequisites
- "Debugging" lesson
- "HTML" lesson
- "Bootstrap" lesson

### Motivation
jQuery is a popular and easy-to-learn JavaScript library that allows you to manipulate HTML elements. jQuery allows developers to quickly make their webpages interactive across different browsers.  

### Objective
**Students will be able to** 
- Link to jQuery in their HTML pages in the correct place
- Incorporate jQuery code in the correct place in their HTML files
- Select HTML elements by their element type, class and ID with jQuery
- Impelement the `.on("click")` and `.on("hover")` jQuery methods
- Impelement the `.append()` jQuery method
- Implement the `.remove()` and `.empty()` jQuery methods

### Specific Things To Teach
- How to incorporate jQuery into a webpage
- How to select HTML elements
- Common and useful jQuery methods for basic interactivity
- Dynamically add or remove HTML elements

### Supplemental Materials
- `index.html` and `myScript.js` in the `jquery-programming-fundaments` directory
- Students' own webpages for Guided Practice, Independent Practice, and the Challenge
- [jQuery official Documentation (you don't need to know all these methods!)](https://api.jquery.com/)
- [Code School jQuery course (it's interactive and free!)](https://www.codeschool.com/courses/try-jquery)
- ([W3 School page on jQuery Selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)

### Mini Lesson
- [jQuery lecture slides](https://docs.google.com/presentation/d/1rk4IfcH86swcqFeBV7eHJAvLEN2nbzkjwrnAjYWBt-s/edit?usp=sharing)

### Common Mistakes / Misconceptions
- jQuery is not the same as JavaScript.  jQuery is a library written in JavaScript that allows developers to write simpler Javascript and makes JavaScript behave consistently in different browsers
- it is common to forget the "." for class selector or the "#" for ID selector
- jQuery accepts multiple selectors in many manners 
- There are several jQuery methods that can achieve similar goals but through different means, so care is needed to understand how they're different.  Example: ".remove()" vs ".empty()"; ".text()" vs ".val()" vs ".html()"

### Guided Practice
- Students add jQuery to their own webpages.  
- Add the ability to change an element's color when it is clicked.  This can be a copy of the `myScript.js` example code.

### Independent Practice
- Add the ability to change a paragraph's font size when it is clicked.
- Add the ability to change an element's color when you hover over it with your mouse.

### Challenge
- Make an element's color switch between two colors when someone clicks on it (with the `.toggle()` method);
