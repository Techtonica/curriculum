# Recursion

### Projected Time
About ___ hours
- ___ minutes for video walkthrough of slides
- ___ minutes for Independent Practice
- ___ minutes for ___

### Prerequisites
- JS 1 lesson
- JS 2 lesson
- JS 3 lesson
- JS 4 lesson

### Motivation

Recursion is a programming concept that allows you to call an original function from within the same function.  This concept is leveraged heavily in _functional programming languages_.

Why is this worth knowing?

* Recursion allows programmers to leverage the speed and memory capacity of modern computers to write elegant algorithms.  This can be leveraged extensively in distributed programming languages like `go`, `erlang` and `elixir` to be remarkably fast on machines with a lot of computing power.
* Recursion is covered in most undergraduate Computer Science majors, and it happens to come up quite freqently in technical interviews.

What not to expect.

It's not uncommon to use recursion _very_ infrequently in production code.

### Objective
**Students will be able to**
- Recognize a repetition-type problem
- Understand the structure of a recursive algorithm
- Solve coding challenges using recursion

### Specific Things To Teach
- Types of problems where a recursive algorithm would be great
- The structure of a recursive algorithm
	- Base case
	- Recursive case
- How to avoid infinite recursion/stack overflow

### Resources to Watch

- [FunFunFunction - Recursion - Part 7 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=k7-N8R0-KY4).  Learn from Matthias about recursion.

### Supplemental Materials
- [Code Academy Course on recursion)](https://www.codecademy.com/courses/javascript-lesson-205/0/1)
- [Understand Recursion in Javascript in depth](https://www.thecodingdelight.com/understanding-recursion-javascript/)

### Mini Lesson
[Recursion (video walkthrough of slides)]
[Recursion (slides)](https://docs.google.com/presentation/d/1KQ5bPs839gvH3iO4-v5fdVZ3JOH9_4QP0y5g0_YxxlQ/edit#slide=id.p)

### Things to Remember
- You can solve all recursion problems with a while loop and vice versa 
	- Recursion solutions are usually simpler to implement and easier to read
- Recursive algorithms are often used to solve problems with the Tree data structures (for example, the DOM is a tree!)

### Demonstration
Instructor demonstrates in the video walkthrough an example of a recursive algorith in Javascript.

### Independent Practice  

### Challenges


#### [Challenge] - Factorial

A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number. 

For example, the value of `3` factorial, is `6`, which can be calculated by:

```
3 * 2 * 1
```

The value of `10` factorial, for example, can be calculated by:

```
10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
``` 

> Write a function that uses recursion to calculate the factorial of a number.

#### [Challenge] - Fibonacci

The fibonacci sequence is calculated by first starting with the sequence of:

* 1
* 1

Future values in the sequence are the sum of the previous two entities added together.    

> Write a method `fib` that calculates the value at a particular sequence for the fibonacci number at that sequence.





### Check for Understanding
