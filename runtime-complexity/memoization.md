# Memoization

### Projected Time

90 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Runtime Complexity](https://github.com/Techtonica/curriculum/blob/master/runtime-complexity/runtime-complexity.md)

### Motivation

Learning memoization will help improve the runtime of your code which is a win for you and a win for your work.
The simple goal of memoization is to not waste time having your code do something is has already done. You can simply re-use the 
part of the code that was already run!

### Objectives

**Participants will be able to:**

- Understand memoization 
- Recognize the benefit in runtime when using momoization
- Write code that uses memoization
- Explain the differences in runtime with memoization, tabulation and regular recursion

### Specific Things To Teach

- Things about the things
- More things about the things
	- This is a sub-thing about the things
- Even more things about the things
- Even more things about the things

### Materials

- [Geeks for Geeks](https://www.geeksforgeeks.org/memoization-1d-2d-and-3d/)
- [Codeburst.io: Understanding Javascript Memoization in 3 Minutes](https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19)

### Lesson
Read through the history of memoization and 'What is memoization' slides and get familiar with the new vocabulary.

Memoization is when your code has a function that returns the same results every time given the same input. The result is stored in a cache in order to be used again without needing to take time to re-run the function. Remember that memoization is all about 
saving time. 

Memoization and tabulation are two strategies used in dynamic programming. Memoization solves the top problem and stores the answer to be used later. Memoization is useful when you do not need to solve all the problems to get to the answer. Tabulation solves all problems starting at the bottom and stores the results in a matrix to be called on later. 

Take a minute to ask yourself if the bolded vocabulary on the first three slides is known or unknown. Take a minute to understand the new vocabulary by talking to a peer or searching online for examples and definitions.

On slide 5, determine if the functions are pure functions. Discuss and select the functions that
are pure functions. On slide 6 reveal the results. State why the other functions are not pure functions. 

The Fibonacci Sequence problem is a well known example of recursion and provides a great way to see many different options for solving the problem and determining the best runtime. The Fibonacci Sequence is created so that each number is the sum of the two preceding numbers. 
[Fibonacci Number Image](https://en.wikipedia.org/wiki/Fibonacci_number#/media/File:34*21-FibonacciBlocks.png)
Pause on slide 9 and write the code to implement the Fibonacci Sequence with a while loop.

View the solution on slide 10 and compare to your own code. 

Next try to implement the Fibonacci Sequence using recursion. Really do this before looking at the solution on slide 12!

Notice the difference in Time Complexity between using recursion and a while loop. 

Finally look at the example code of the Fibonacci Sequence using memoization on slide 13 and again notice the Time Complexity and Space Complexity. 

### Common Mistakes / Misconceptions

List things that apprentices might not realize, might assume at first, or should avoid.

- Example
- Example


### Guided Practice

Have the apprentices work with you as you do something.


### Independent Practice

Class does this thing themselves with specific additional items.


### Challenge

Apprentices can try to do this other thing.


### Check for Understanding

Some ideas: have apprentices summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
