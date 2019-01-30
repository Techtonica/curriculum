# JavaScript 3

### Projected Time
About 2 hours
- 20 minutes for the video walkthrough
- 90 minutes for Independent Practice
- 20 minutes for Group Practice

### Prerequisites
"JavaScript 2" lesson

### Motivation
JavaScript is used on the frontend of almost every website. It's also a widely-used scripting language that be used on the backend as well. The JavaScript lessons set a solid foundation in JavaScript basics so we can use the language in more robust ways in later lessons.

### Objectives
**Participants will be able to:**
- Make comparisons of equality and value
- Determine the Boolean value of a given comparison
- Write a conditional control flow using `if`, `else if` and `else` statements
- Implement logical operators `&&`, `||` and `!`

### Specific Things To Teach
- Comparison Operators (`<`, `<=`, `>`, `>=`, `==`, `!=`, `===`, `!==`)
- Boolean values (`true`/`false`)
- Conditional (`if`/`else if`/`else`) statements
- Logical operators (`&&`, `||`, `!`)

### Supplemental Materials

**JavaScript Comparison Operators**
- [JavaScript Equality Docs (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [JavaScript Comparison Operators (W3schools)](https://www.w3schools.com/js/js_comparisons.asp)

**JavaScript Boolean Values**
- [JavaScript Boolean Docs (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [JavaScript Boolean Values (W3schools)](https://www.w3schools.com/js/js_booleans.asp)
- [JavaScript Comparisons (downloadable .docx file) (code.org)](https://curriculum.code.org/csp/unit5/8/)

**JavaScript Conditional Statements**
- [JavaScript Conditional Statements Docs (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [JavaScript Conditional Statements (W3schools)](https://www.w3schools.com/js/js_if_else.asp)
- [JavaScript Conditionals (code.org)](https://code.org/curriculum/algebra/18/Teacher)

**JavaScript Logical Operators**
- [JavaScript Logical Operators Docs (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
- [JavaScript Logical Operators (W3schools)](https://www.w3schools.com/js/js_comparisons.asp)

**General JavaScript**
- [W3schools has tons of info](https://www.w3schools.com/js/)
- [JavaScript for Cats for foundational concepts (and cats)](http://jsforcats.com/)
- [Eloquent JavaScript is a free online book](http://eloquentjavascript.net/)
- [JavaScript Garden has more advanced topics](https://bonsaiden.github.io/JavaScript-Garden/)

### Lesson

- [JavaScript 3 (video walkthrough of slides)](https://drive.google.com/file/d/1mytiE4zy9YLLKgvLAAhShis1hj0BKzxu/view?usp=sharing)

- [JavaScript 3 (slides)](https://docs.google.com/presentation/d/1yjSpOpwPbVtl5K8QbQvtK5t6bn5wtmZDpBgX9v_vkD4/edit?usp=sharing)


### Things to Remember

- **Booleans are not strings.** Booleans (`true` and `false`) are their own data type. If you wrap quotes around a Boolean (`"true"` and `"false"`), it is no longer a Boolean, it is a string.

- **In JS, almost always use `===` when assessing equality.** Using `==` will sometimes cause problems because JS can force a data type to be changed.

- **Pseudocode is incredibly helpful for organizing your thoughts and planning what code you will write.** Use it freely!


### Demonstration

Instructor demonstrates in the video walkthrough how to work with comparison operators, Booleans, if/else and logical operators in JavaScript.


### Independent Practice

Techtonica staff will assign pairs.

**Activity: Movie Night**
Suppose 5 classmates are interested in going to see a movie together. There are some interesting dynamics between the people in this group, as described below:

- Priya is shy in groups and will only go to the movies if it's just her and one other person
- David loves popcorn and will go to the movies under any circumstance
- Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
- Ming will not attend if David has already said he is attending
- Breanna loves to be around people and will only go if there are at least 2 others going

Write a function called `movieNight` that takes in an array. The array must contain 3 strings, and each string must be one of the names shown above who are interested in going to the movies. Write a body for the `movieNight` function, based on the "rules" associated with each of the names above, that returns an array of the people who will attend the movie. Your function should account for the logic necessary for all 5 people, so that no matter which names are given, the result will always be correct. (ie: Don't just code the logic for 3 of the names and pass those names in all the time.)

**Example**
For example, `movieNight(['Priya', 'David', 'Breanna'])` should return `['David', 'Alex', 'Breanna']` because:
1. Alex gets added automatically because David is going
2. Priya doesn't go because there is more than 1 other person attending
3. Breanna will go because there are at least 2 others going

**Things to Consider**
- What information about each person will you need to turn into code? What "tools" do you have in JavaScript that can help you code that logic?
- What information do you need to store throughout your program? How will you store it? Does this information need to be updated at some point during the program, or will it remain fixed?
- This is a tricky challenge because there is a lot of logic in it, and some people's logic is tied to other people's logic. But, this challenge is not designed to trick you or to be impossibly hard. Break it down into very small pieces, and then fit those small pieces together.

### Group Practice

Techtonica staff will assign new pairs. With your new pair, share your code with one another. It's OK if you didn't finish! Your new pair might be able to give you some suggestions, or you might get some ideas from their code. Discuss what you found challenging about this activity.

### Check for Understanding

Create your own coding challenge similar to this one, but change the setting (going to a restaurant or the beach?) and the logic for each person. In fact, you can use almost the exact same wording. See if you can code the solution on your own. Or, find another pair that has also written their own version of this coding challenge, swap challenges, and see if you can solve theirs!


### Extensions

Solve this challenge on HackerRank:
- [Conditional Statements: If-Else](https://www.hackerrank.com/challenges/js10-if-else)
