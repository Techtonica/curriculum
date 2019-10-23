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

### Materials

- [HTML (cheatsheet)](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/reference)
- [CSS Glossary](https://www.codecademy.com/articles/glossary-css)
- [JavaScript I (slides)](https://drive.google.com/open?id=1WIm5UCQL9TOsmW5X6suapBhyEqtk8Y2oLKb5gUqbzus)


### Common Mistakes & Misconceptions

- HTML, CSS, and JavaScript can go in CodePen's HTML box, but they are different languages, so they'll need to be identified as those languages using HTML tags (`<style>` or `<script>`).


### Practice

In pairs, explore HTML, CSS, and JavaScript:


HTML
- Sign in to your CodePen account and start a new pen. Title it, "Workshop 1—My Name—Full Date" (for example, "Workshop 1—Jane Doe—10/22/2019")
- Type "Hello World" into the HTML box. See how it shows up? "HTML" stands for Hyper-text Markup Language. HTML is the special language your web browser (like Chrome) understands.
- HTML comes in "tags" that are surrounded by angle brackets, which look like this: < >. Most tags have a matching closing tag with a forward slash, like this: </ >.
- Make your "Hello World" into a header 1 (`<h1>`) HTML tag. Add a sentence introducing yourself using `<p>` (paragraph) tags.
- Figure out how to make a numbered list of your five favorite crayon colors in order of preference. Change up the list so it has bullet points instead of numbers.
- Can you figure out how to make one of your colors a link to a website?
- Look up some other HTML tags and try them out.
- Check your indentation so your code is easy to read!

CSS
- What if you want to make your page look better? CSS is how you do it!
- Take a look at the CSS Glossary linked above. Using CSS in the CSS box that applies to the HTML in the HTML box, figure out how to change the text size, text color (so it's different between the header and the paragraph), as well as the border color, style, and thickness.
- IDs and classes are specific types of attributes that let us give names to our elements. What is the difference between ID and class selectors? Can you figure out how to use a class to change two parts of in your HTML and an ID to change style in one part?
- Identify selectors, attributes, properties, and values in your CSS.
- Check your indentation so your code is easy to read!

JavaScript
- JavaScript makes web pages interactive and it's everywhere online.
- Look over the JavaScript I slides linked above. 
- Make two camelCase variables that describe what that variable is—one should be a number and one should be a string.
- Comment out a line in your JS box.
- Test out performing math operations on numbers and saving the result in a variable.
- Use console.log(“Hi”) to print "Hi" to your JavaScript console (see it by pressing Command/Control, Option, and J). You can use console.log to debug your code.
- Can you use JavaScript to figure out how many letters are in a string?
- Check your indentation so your code is easy to read!


### Challenge

- Can you change your name on the page using code like the following?
	function replaceName() {
    	var myNewName = window.prompt('Pick a new name!');
    	document.getElementById('user-name').innerHTML = myNewName;
  	}
  	document.onclick = replaceName;


### Check for Understanding 

- Summarize to each other.
- Make a cheat sheet.
- Try making a new CodePen and doing it all again without looking at any resources.

### Supplemental Materials
- [RailsBridge Frontend](https://curriculum.railsbridge.org/frontend/)
