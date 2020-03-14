# jQuery Programming Fundamentals

### Projected Time
Approximately 2.5 hours
  - 6 minutes for video walkthrough of slides
  - 90 minutes for Independent Practice
  - 30 minutes for challenge
  - 10 minutes for Check for Understanding

### Prerequisites
- [Debugging lesson](/debugging/debugging.md)
- [HTML lesson](/html/html.md)
- [Bootstrap lesson](/bootstrap/bootstrap.md)

### Motivation
jQuery is a popular and easy-to-learn JavaScript library that allows you to manipulate HTML elements. jQuery allows developers to quickly make webpages interactive across different browsers. 

A lot of prominent tech companies use jQuery as part of their frontend stack, including [GitHub](http://github.com/) and [Stack Overflow](http://stackoverflow.com/). You can use [wappalyzer.com](https://www.wappalyzer.com/technologies/jquery) to discover more companies that use it.

### Objectives

**Participants will be able to:**
- Link to jQuery in their HTML pages in the correct place
- Incorporate jQuery code in the correct place in their HTML files
- Select HTML elements by their element type, class and ID with jQuery
- Implement the `.on("click")` and `.on("hover")` jQuery methods
- Implement the `.append()` jQuery method
- Implement the `.remove()` and `.empty()` jQuery methods

### Specific Things to Learn
- How to incorporate jQuery into a webpage
- How to select HTML elements
- Common and useful jQuery methods for basic interactivity
- Dynamically add or remove HTML elements

### Lesson
- [jQuery (slides)](https://docs.google.com/presentation/d/1rk4IfcH86swcqFeBV7eHJAvLEN2nbzkjwrnAjYWBt-s/edit?usp=sharing)
- [jQuery tutorial on Treehouse](https://teamtreehouse.com/library/jquery-basics-2)
### Things to Remember
- **jQuery is not the same as JavaScript.** jQuery is a library written in JavaScript that allows developers to write simpler JavaScript and makes JavaScript behave consistently in different browsers.
- **Remember to use ` . ` to select classes and ` # ` to select ids.**
- **There are several jQuery methods that  achieve similar goals but through different means.** You should understand how they're different so you can use them appropriately. 
    - `.remove()` vs `.empty()`
    - `.text()` vs `.val()` vs `.html()`
    
### Guided Practice

Work through the [jQuery tutorial on Treehouse](https://teamtreehouse.com/library/jquery-basics-2).

#### Activity 1 - Trying Out Simple jQuery Functions
For each of the following links, read the code and play around with its functionality. You can refresh the webpage to reset it.

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_on) for `.on("click")`.

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_hover) for `.hover()`. 

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append_ref) for `.append()`. 

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_remove) for `.remove()`.

[Here is some code and a sandbox](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_empty) for `.empty()`. 


#### Activity 2 - jQuery Example

1. Using your Terminal, create a new directory inside your assignments directory and give it the name `jquery-play`.

3. Navigate to `jquery-play`. Open the whole directory in VS Code using the Terminal shortcut you learned in the "Local Development with VS Code" lesson.

4. Create a file called `index.html`. It should automatically appear in the left sidebar in VS Code as an editable file.

5. Read [this example code](https://github.com/Techtonica/curriculum/blob/master/jquery/jquery-programming-fundamentals/index.html) and talk through it with your pair partner. Once you understand what it does, copy it into `index.html` and save the file.

6. Open `index.html` in a new Chrome tab. What do you see? Is this what you expected, based on the code you read?

7. Create a new directory called `static`. Navigate to `static`. Remember that all CSS and JS files go in this `static` folder.

8. Create a new directory called `js`. Navigate to `js`.

9. Create a file in the `js` directory called `myScript.js`. It should automatically appear in the left sidebar in VS Code as an editable file. 

10. Read [this example code](https://github.com/Techtonica/curriculum/blob/master/jquery/jquery-programming-fundamentals/static/js/myScript.js) and talk through it with your pair partner. Once you understand what it does, copy it into `myScript.js` and save the file.

11. Refresh the Chrome tab that is currently rendering `index.html`. What happens? What do you see? What are you now able to do?

#### Activity 3 - Customize the jQuery Example

1. Using the jQuery documentation or other resources as your guide, add the ability to change a paragraph's font size when it is clicked.

2. Using the jQuery documentation or other resources as your guide, add the ability to change an element's color when you hover over it with your mouse.

### Supplemental Materials
- [jQuery official Documentation](https://api.jquery.com/)
- [Code School's jQuery course](https://www.codeschool.com/courses/try-jquery)
- [jQuery tutorial on codecademy](https://www.codecademy.com/learn/learn-jquery).
- Get more practice by working through [this jQuery tutorial on Code School](https://www.codeschool.com/courses/try-jquery).

### Check for Understanding
1. Where in an HTML document do you link to the jQuery CDN?
2. Where in the HTML document do you write your jQuery code?
3. Where in the HTML document would you link to an external JavaScript file if you were using one?
4. What are the 3 ways we can select HTML elements for manipulation using jQuery?
5. Name at least 4 jQuery methods you used or saw today.
6. Where would you look to find more jQuery methods?
