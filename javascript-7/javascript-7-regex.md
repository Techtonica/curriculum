# Javascript 7 - Regular Expressions / RegExp

### Projected Time
About 4 hours
- 30 minutes for video walkthrough of slides
- 180 minutes for Independent Practice
- 30 minutes for checking understanding

### Prerequisites
- JS 1 lesson
- JS 2 lesson
- JS 3 lesson
- JS 4 lesson

### Motivation
- Regular Expressions allow you to search and modify strings using a special language. They are very powerful and can enable writing significantly less code.

### Objective
**Apprentices will be able to**
- Read and write RegExps in Javascript
- Use RegExps to test and replace strings
- Understand basic regular expression special characters, `.*+?\w\d`

### Specific Things To Teach
- JavaScript's RegExp syntax/structure
- Basic regular expression characters
- How RegExp modifiers work
- The 4 string methods and 2 RegExp methods that work with RegExps

### Supplemental Materials
- [Regular Interactive Visualizer and Tester](https://regexr.com/)
- [Javascript Regular Expressions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Javascript Regular Expressions (W3 Schools)](https://www.w3schools.com/js/js_regexp.asp)
- [JavaScript RegExp Reference (W3 Schools)](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
- [RegExp (Eloquent Javascript)](https://eloquentjavascript.net/09_regexp.html)

### Mini Lesson

[JavaScript VII (video)](https://drive.google.com/a/techtonica.org/file/d/1upD9R_qe7YvZjRd6l_wM0s1UpvHdo1C8/view?usp=drive_web)

[JavaScript VII (slides)](https://docs.google.com/presentation/d/16X4u-tyy_Vdo7lp3jUEXAsi24lpkQ6H5GYVxqWI0s3c/edit#slide=id.p)

### Things to Remember
- There are two ways to use RegExps: 
	- RegExp as input to 4 String methods: `String.replace()`, `String.match()`, `String.search()`, `String.split()`
	- String as input to 2 RegExp methods: `RegExp.test()`, `RegExp.exec()`
- You can add modifiers to RegExps
- The pattern goes between the two forward slashes, and you can use back slashes to escape special characters
- There are a lot of complex RegExp patterns. We'll teach the basic ones, but there are many more you can learn as you go.  

### Demonstration
Instructor demonstrates in the video walk through how to work with Regular Expressions in JavaScript.

### Independent Practice
- Go through the tutorial at https://regexone.com. Do at least lessons 1-10. This isn't Javascript specific, but it will help you understand how to match text with regular expressions.
- Write a function that takes a word and returns true if the word ends with `tonica`
- Write a function expression that takes a string replaces all instances of `symantec` with `semantic`?
- Write a function that takes a string and deletes all words that end in `ing`?
- Write a function that takes a string and returns true if it is an email address? Compare your answer with your neighbor.
- Write a function that takes a string containing names separated by commas like `"Leah, Russell, Michelle"` and returns an array of names, `["Leah", "Russell", "Michelle"]`
### Challenge
- Write a regular expression that matches any of the Techontica participants names but not the instructors
- What about a regular expression for all even-length strings?
- Do lessons 11+ on https://regexone.com
### Check for Understanding
- Make a cheat sheet to remind yourself about the different regular expression characters and how to use them.
