# Techtonica Application Workshop Day 1

### Projected Time

2.5 hours

- You should spend the most time on JavaScript

### Prerequisites

- You should be digitally literate before doing this workshop—we define that as being able to use the mouse, keyboard, browser, and email easily.

### Motivation

Doing this workshop is part of the Techtonica application process. It will give you a good idea of what it's like to learn technical concepts in pairs.

### Objectives

**Participants will be able to:**

- Explain what HTML, CSS, and JavaScript do
- Use some HTML tags
- Indent code correctly
- Apply some CSS to HTML
- Write some beginner JavaScript
- Collaborate with others

### Specific Things To Learn

- Using HTML syntax and basic HTML tags: `<!DOCTYPE html>, <head>, <body>, <h1>, <p>, <ul>, <ol>, <li>, <a>`
- Using CSS selectors, attributes, properties, values, and syntax
- Creating JavaScript number and string variables
- Printing JavaScript to the console
- Doing math operations in JavaScript
- Using .length
- Putting code into a function

### Materials

- [HTML (cheatsheet)](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/reference)
- [CSS Glossary](https://www.codecademy.com/articles/glossary-css)
- [JavaScript I (slides)](https://drive.google.com/open?id=1WIm5UCQL9TOsmW5X6suapBhyEqtk8Y2oLKb5gUqbzus)

### Common Mistakes & Misconceptions

- HTML, CSS, and JavaScript can go in CodePen's HTML box, but they are different languages, so they'll need to be identified as those languages using HTML tags (`<style>` or `<script>`).
- JavaScript and Java are not the same thing. They are entirely different programming languages.

### Practice

In pairs, explore HTML, CSS, and JavaScript:

##### HTML

Feel free to use the materials linked above or Google to move quickly through the other steps. You should complete the HTML and CSS sections during the first 30 minutes. There's not a lot of time, so try to stick to accomplishing what's in here for now:

1. Sign in to your CodePen account and start a new pen. Title it, "Workshop 1—My Name—Full Date" (for example, "Workshop 1—Jane Doe—10/22/2019"). Delete the existing code in the boxes.
2. Type "Hello World" into the HTML box. See how it shows up? "HTML" stands for Hyper-text Markup Language. HTML is the special language your web browser (like Chrome) understands.
3. HTML comes in "tags" that are surrounded by angle brackets, which look like this: < >. Most tags have a matching closing tag with a forward slash, like this: </ >.
4. Make your "Hello World" into a header 1 (`<h1>`) HTML tag. Add a sentence introducing yourself using `<p>` (paragraph) tags.
5. Figure out how to make a numbered list of your three favorite crayon colors in order of preference. Change up the list so it has bullet points instead of numbers.
6. Can you figure out how to make one of your colors a link to a website?
7. Look up two other HTML tags and try them out.
8. Check your indentation so your code is easy to read!

##### CSS

1. What if you want to make your page look better? CSS is how you do it!
2. Take a look at the CSS Glossary linked above. Using CSS in the CSS box that applies to the HTML in the HTML box, figure out how to change the text size and text color (so it's different between the header and the paragraph).
3. IDs and classes are specific types of attributes that let us assign styles to elements via the names we give them. What is the difference between ID and class selectors? Can you figure out how to use a class and an ID to change the appearance of two HTML elements?
4. Check your indentation so your code is easy to read!

##### JavaScript

1. JavaScript makes web pages interactive and it's everywhere online.
2. Google JavaScript variables. In the JS box, create two camelCase variables that describe what that variable is—one should be your favorite number and one should be a name you like (as a JavaScript string). Don't forget to end each line with a semicolon.
3. Use `console.log(“Hi”)` to print "Hi" to your JavaScript console (see it by clicking on "Console" in the bottom left corner of CodePen or by pressing Command/Control, Option, and J). You can use console.log to debug your code.
4. Figure out how to print the number variable you created earlier to the console.
5. Change the value of your number variable to be a math operation that equals your favorite number. (If 5 is your favorite number, you could add 2 and 3.)
6. Create a function that figures out how many characters are in your name string and print that to the console.
7. Check your indentation so your code is easy to read!

### Challenge

- Can you change your name on the page using code like the following?
  `function replaceName() { let myNewName = window.prompt('Pick a new name!'); document.getElementById('user-name').innerHTML = myNewName; } document.onclick = replaceName();`
- How would you change the above code to replace the name on the page with the favorite name variable you created earlier?
- Identify selectors, attributes, properties, and values in your HTML and CSS.

### Check for Understanding

- Summarize to each other.
- Make a cheat sheet.
- Try making a new CodePen and doing it all again without looking at any resources.

### Supplemental Materials

- [RailsBridge Frontend](https://curriculum.railsbridge.org/frontend/)
