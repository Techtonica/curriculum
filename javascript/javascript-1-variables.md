# JavaScript 1 - Variables, Strings, Numbers

### Projected Time

About 2 hours

- 45 minutes for the video walkthrough of the slides
- 60 minutes for the Independent Practice
- 20 minutes for the Group Practice
- 10 minutes for Check for Understanding

### Prerequisites

- Techtonica's JS workshop
- [Asking Good Questions lesson](/onboarding/asking-good-questions.md)
- [Writing Readable Code lesson](/writing-readable-code/writing-readable-code.md)
- [Debugging lesson](/debugging/debugging.md)

### Motivation

JavaScript is used on the frontend of almost every website. It's also a widely-used scripting language that be used on the backend as well. Because of its ubiquity JavaScript is a must know language for any full-stack developer at all [b2b or b2c](https://www.pacificcommunityventures.org/2017/05/17/5-differences-b2b-b2c-marketing/?gclid=Cj0KCQiAg_HhBRDNARIsAGHLV51RW8N0nJmvZRmBq-4NbywQnskSo4dj2aS1qGh_6f2A00WlhlTQjmgaAlSOEALw_wcB) companies. The JavaScript lessons set a solid foundation in JavaScript basics so we can use the language in more robust ways in later lessons.

**Which companies use JavaScript variables and operators?** Any company with an interactive website: [Spotify](https://www.spotify.com/us/), [YouTube](https://www.youtube.com/), [meetup](https://www.meetup.com/)

### Objectives

**Participants will be able to:**

- Create descriptive variable names
- Store numbers and strings in variables
- Perform math operations on numbers
- Increment and decrement variables
- Obtain a random number
- Find the length of a string
- Index into a string

### Supplemental Materials

- [MDN has tons of info](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [Math Operators Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
- [JavaScript for Cats for foundational concepts (and cats)](http://jsforcats.com/)
- [Eloquent JavaScript is a free online book](http://eloquentjavascript.net/)
- [JavaScript Garden has more advanced topics](https://bonsaiden.github.io/JavaScript-Garden/)

### Lesson

[JavaScript I - Variables, Strings, Numbers (video walkthrough of slides)](https://drive.google.com/file/d/173Mr4ZNKdIPbYnNNfT3eoIajPpttIeMp/view?usp=sharing)

- Please watch the video the first time without working along with the demonstration. Just absorb the concepts. Then, you can watch the demonstration a second time and code with the instructor if you like.

[JavaScript I - Variables, Strings, Numbers (slides)](https://drive.google.com/open?id=1WIm5UCQL9TOsmW5X6suapBhyEqtk8Y2oLKb5gUqbzus)

### Things to Remember

- **Strings are immutable**, which means you can't get inside them and change the characters. The only way you can change the string that's associated with a particular variable name is to re-bind that variable name to an entirely new string.

- **In computer science, we usually begin counting with 0 instead of 1.** When you are indexing into a string, JavaScript begins counting at 0. When you are finding the length of a string, JavaScript begins counting at 1.

### Demonstration

Instructor demonstrates in the video walkthrough how to work with numbers and strings in JavaScript.

### Independent Practice

**Activity: Basic Calculator**

Concepts you've seen in this lesson that appear in this activity:

- Numbers
- Math operations
- Strings

Concepts you've seen at Techtonica's JS workshop that appear in this activity:

- if/else
- defining functions
- calling functions
- comparison operators

Using [REPL.it](https://www.repl.it), write a function called `calculate` that takes in 3 arguments. You can choose the parameter names for the arguments.

- The first argument should be a number
- The second argument should be a string that contains one math operator (eg: '+' or '-' or '\*' or '/' or '%')
- The third argument should be a number

The `calculate` function should return the result of the math expression that you've specified using the arguments. You'll need to code the logic so the function knows how to handle all the various math operators.

For example, the function call might look like this: `calculate(3, '+', 7)`
And in this example, the function should return `10`.

Feel free to use any resource you like if you get stuck, including [Codecademy's JavaScript course](https://www.codecademy.com/learn/introduction-to-javascript).

### Group Practice

Swap pairs, read your new pair partner's code, and do code reviews for each other.
Did your second pair partner take a different approach than you did with your first pair partner? If so, how?

Swap pairs once more and repeat.

### Challenge

Here are some other ways you can extend your calculator. Choose whichever one(s) sound most interesting to you!

1. Add the ability to use a square root.
2. Add the ability to use exponents.
3. Add the ability to use constants, such as pi (3.14).
4. Add the ability to operate on a third number.
5. Incorporate a function from the Math library.

### Check for Understanding

Form small groups and discuss:

- What are some rules for declaring variables in JavaScript?
- What are some math operations that can be performed on number variables in JavaScript?
- How do you define and call a function in JavaScript?
- How do you find the length of a string?
- What is the first index of a string?
