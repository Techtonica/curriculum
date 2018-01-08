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
- [jQuery (video walkthrough of lesson slides)]
- [jQuery (slides)](https://docs.google.com/presentation/d/1rk4IfcH86swcqFeBV7eHJAvLEN2nbzkjwrnAjYWBt-s/edit?usp=sharing)

### Things to Remember
- **jQuery is not the same as JavaScript.** jQuery is a library written in JavaScript that allows developers to write simpler Javascript and makes JavaScript behave consistently in different browsers.
- **Remember to use ` . ` to select classes and ` # ` to select ids.**
- **There are several jQuery methods that  achieve similar goals but through different means.** You should understand how they're different so you can use them appropriately. 
    - `.remove()` vs `.empty()`
    - `.text()` vs `.val()` vs `.html()`

### Independent Practice

Techtonica staff will assign pairs.

**Activity 1 - Trying Out Simple jQuery Functions**

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_on) for `.on("click")`. Read the code and play around with its functionality. You can refresh the webpage to reset it.

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_hover) for `.("hover")`. Read the code and play around with its functionality. You can refresh the webpage to reset it.

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_hover) for `.("hover")`. Read the code and play around with its functionality. You can refresh the webpage to reset it.

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append_ref) for `.append()`. Read the code and play around with its functionality. You can refresh the webpage to reset it.

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_remove) for `.remove()`. Read the code and play around with its functionality. You can refresh the webpage to reset it.

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_empty) for `.empty()`. Read the code and play around with its functionality. You can refresh the webpage to reset it.


**Activity 2 - jQuery Example**

1. Using your Terminal, navigate to your Desktop.

2. Create a new directory called `jquery-play`.

3. Navigate to `jquery-play`. Open the whole directory in Atom using the Terminal shortcut you learned in the "Local Development with Atom" lesson.

4. Create a file called `index.html`. It should automatically appear in the left sidebar in Atom as an editable file.

5. Read [this example code](https://github.com/Techtonica/curriculum/blob/master/jquery/jquery-programming-fundamentals/index.html) and talk through it with your pair partner. Once you understand what it does, copy it into `index.html` and save the file.

6. Open `index.html` in a new Chrome tab. What do you see? Is this what you expected, based on the code you read?

7. Create a new directory called `static`. Navigate to `static`. (Remember that all CSS and JS files go in this `static` folder.)

8. Create a new directory called `js`. Navigate to `js`.

9. Create a file in the `js` directory called `myScript.js`. It should automatically appear in the left sidebar in Atom as an editable file. 

10. Read [this example code](https://github.com/Techtonica/curriculum/blob/master/jquery/jquery-programming-fundamentals/static/js/myScript.js) and talk through it with your pair partner. Once you understand what it does, copy it into `myScript.js` and save the file.

11. Refresh the Chrome tab that is currently rendering `index.html`. What happens? What do you see? What are you now able to do?

- Add the ability to change a paragraph's font size when it is clicked.
- Add the ability to change an element's color when you hover over it with your mouse.

### Challenge
- Make an element's color switch between two colors when someone clicks on it (with the `.toggle()` method);
