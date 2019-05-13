# JavaScript 4

### Projected Time
About 2 hours
- 40 minutes minutes for lesson slides
- 40 minutes for Guided Practice
- 40 minutes for Independent Practice
- 20 minutes for Check for Understanding

### Prerequisites

- [JavaScript 3 lesson](/javascript/javascript-3.md)

### Motivation
JavaScript is used on the frontend of almost every website. It's also a widely-used scripting language that be used on the backend as well. The JavaScript lessons set a solid foundation in JavaScript basics so we can use the language in more robust ways in later lessons.

### Objectives
**Participants will be able to:**
- Write proper JavaScript for loop syntax
- Iterate through an array using a for loop
- Write proper JavaScript while loop syntax
- Increment a counter variable properly inside a while loop

### Specific Things To Teach
- For loop syntax
- Reasons to use a for loop
- While loop syntax
- Reasons to use a while loop

### Supplemental Materials

**For Loops**

- [JavaScript For Loops (YouTube video)](https://www.youtube.com/watch?v=24Wpg6njlYI)
- [For Loop docs (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [For Loops (w3schools)](https://www.w3schools.com/js/js_loop_for.asp)

**While Loops**

- [JavaScript While Loops (YouTube video)](https://www.youtube.com/watch?v=PpbFyLTtpWI)
- [While Loop docs (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [While Loops (w3schools)](https://www.w3schools.com/js/js_loop_while.asp)

### Lesson

[JavaScript 4 (20 min video)](https://drive.google.com/file/d/1YL8rU9wY3fh0g4mZM223b7g-PDgk_X5P/view?usp=sharing)

[JavaScript 4 (slides)](https://docs.google.com/presentation/d/1-TEyN4TTjP9c9WGcThS1jQmVoY4pG-xt9gjbDhJkUTc/edit?usp=sharing)


### Things to Remember

- **You'll get stuck in an infinite while loop if you don't increment or decrement the counter variable.**

- **When using a for loop, remember that list indexing starts at zero!**


### Guided Practice
 Work through this lesson on JS loops (about 30 min):
https://www.codecademy.com/courses/introduction-to-javascript/lessons/loops/exercises/loops?action=resume_content_item


### Independent Practice
Techtonica staff will assign pairs.

Open [REPL.it](https://www.repl.it). 

**Activity 1 - Vacation Time!**

Write a function called `printVacations` whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array, like so:

`[ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]`  

Your function should print each person's name and desired destination in a complete sentence, like this:

`Tammy really wants to go to Tahiti.`  
`Erin really wants to go to Banff, Alberta, Canada.`  
`Janet really wants to go to London.`  

**Activity 2 - Vacation Choices**

Follow the prompt for Activity #1, but use this format for the input array instead:

`[ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]` 

The output should look similar to this:

`Tammy is willing to go to Tahiti, Bali or Hawaii.`  
`Erin is willing to go to Banff, Alberta, Canada or Iceland.`  
`Janet is willing to go to London or Hogwarts.`  

#### Challenge

- Write a program in JavaScript to print Multiplication table of given number using for loop. Also try the program using while loop.

### Check for Understanding

- Differentiate between for loop and while loop.
- Write down the syntax of a Nested for loop in JavaScript.
- Convert the given while loop to a for loop:
```
let ourArray = [];
let i = 0;
while(i < 5) {
ourArray.push(i);
i++;
}
console.log(ourArray)
```
