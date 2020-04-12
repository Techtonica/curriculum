# JavaScript 8 - Regular Expressions / RegEx

### Projected Time

About 2 hours

- 20 minutes for video walkthrough of slides
- 80 minutes for Independent Practice
- 20 minutes for checking understanding

### Prerequisites

- [JavaScript 1 - Variables, Strings, Numbers Lesson](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions Lesson](/javascript/javascript-2-arrays-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans Lesson](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops Lesson](/javascript/javascript-4-loops.md)

### Motivation

- Regular Expressions allow you to search and modify strings using a special language. They are very powerful and can enable writing significantly less code.

- Most online registration forms use RegEx to verify that the information entered is in the right format

- Build/test tools match file names and extensions using regexes. For example, Jasmine uses regex to find test files ending in "spec.js".

### Objectives

**Apprentices will be able to:**

- Read and write RegEx in JavaScript
- Use RegEx to test and replace strings
- Understand basic regular expression special characters: `.*+?\w\d`

### Specific Things to Learn

- JavaScript's RegExp syntax/structure
- Basic regular expression characters
- How RegExp modifiers work
- The 4 string methods and 2 RegExp methods that work with RegExps

### Lesson

Instructor demonstrates in the video walk through how to work with Regular Expressions in JavaScript.

[JavaScript VII (video)](https://drive.google.com/file/d/1PD6DsnHn2PdSdI_HoDyWY-HuNeb3P7Ub/view?usp=sharing)

[JavaScript VII (slides)](https://docs.google.com/presentation/d/16X4u-tyy_Vdo7lp3jUEXAsi24lpkQ6H5GYVxqWI0s3c/edit#slide=id.p)

### Things to Remember

- There are two ways to use RegEx: - RegEx as input to 4 String methods: `String.replace()`, `String.match()`, `String.search()`, `String.split()` - String as input to 2 RegEx methods: `RegExp.test()`, `RegExp.exec()`
- You can add modifiers to RegEx
- The pattern goes between the two forward slashes, and you can use back slashes to escape special characters
- There are a lot of complex RegEx patterns. We'll teach the basic ones, but there are many more you can learn as you go.

### Supplemental Materials

- [Regular Interactive Visualizer and Tester](https://regexr.com/)
- [Regex Testing Tool](https://www.regextester.com/)
- [JavaScript Regular Expressions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [JavaScript regexp object(TutorialsPoint)](https://www.tutorialspoint.com/javascript/javascript_regexp_object.htm)
- [RegExp (Eloquent JavaScript)](https://eloquentjavascript.net/09_regexp.html)

### Independent Practice

- Go through the tutorial at https://regexone.com. Do at least lessons 1-10. This isn't JavaScript specific, but it will help you understand how to match text with regular expressions.
- Write a JavaScript function that takes a word and returns true if the word ends with `tonica`
- Write a function expression that takes a string replaces all instances of `symantec` with `semantic`
- Write a function that takes a string and deletes all words that end in `ing`
- Write a function that takes a string and returns true if it is an email address. Compare your answer with your neighbor.
- Write a function that takes a string containing names separated by commas like `"Leah, Russell, Michelle"` and returns an array of names, `["Leah", "Russell", "Michelle"]`

### Challenges

- Write a regular expression that matches any Techtonica apprentice's first name, but not any staff members' first name.
- Write a regular expression that matches all even-length strings but not odd-length ones.
- Do lessons 11+ on https://regexone.com

### Check for Understanding

- Make a cheat sheet to remind yourself about the different regular expression characters and how to use them.
- What character matches the beginning of the line?
- What does the 'i' flag mean and what is it used for?
- What does the dot ( . ) represent in Regex?
- What are the advantages and disadvantages of using regex?
