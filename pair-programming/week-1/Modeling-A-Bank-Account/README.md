# Modeling a bank account

### Why do I need to work on this assignment?

[MDN](https://developer.mozilla.org/en-US/) refers to classes as a “template for creating objects” and since JavaScript is an Object Oriented Programming language, it’s crucial to know how to make object templates and fill them in with different information over and over again. The purpose of this assignment is to solidify your foundational understanding of how to think logically about creating a Class for a specific purpose in JavaScript–Important: HTML and CSS are not expected in this project.

### Why do I need to work on this with my mentor?

Objects and Classes are difficult topics to master, and it’s easy to get frustrated, but trust that getting comfortable navigating objects is worth wrestling with the material early and often. We don’t want you to suffer with the syntax right now, so you’re expected to work on this assignment with your mentor so they can help you translate your ideas into code. Take a glance at classes and constructors to give the meeting a boost. If for some reason your mentor does not meet with you on time, contact the technical assistant for help.

### What should my functions do?

This is just an exercise, so for now, your functions can not modify real data. Think about printing all your statements:
`console.log(${this.name} has been transferred ${amount}. Your current balance is now ${transferAmt})}`

### Project instructions:

Remember, you should include pseudocode with detailed, concise comments about what you plan and do in the code. Well-commented code says a lot about the programmer writing it.

Write a program that creates an `account` object with the following characteristics:
* A `name` property.
* A `balance` property set to 0 
* A `deposit` method adding the (positive or negative) value passed as an argument to the account balance.
* A `describe` method that prints the account description in the console.
* A `transfer` method with two parameters: the name of the account that will receive the transfer, and the amount of money to transfer. 

## Try it Out!

- Create an account for Billy, Rosie, Jack and Jill
- Give each of the accounts a deposit on money
- Print a string describing the current amount of money on each account
- Transfer positive values between Billy and Jack and negative values between Rosie and Jack

# Extra

- How might a `credit` method work?
