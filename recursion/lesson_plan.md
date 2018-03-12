# Recursion

### Projected Time
About 4.5 hours
- 11 minutes for video walkthrough of slides
- 30 minutes for Independent Practice
- 240 minutes for Independent Practice & Challenge

### Prerequisites
- JS 1 lesson
- JS 2 lesson
- JS 3 lesson
- JS 4 lesson
- Score of __15__or higher at Coding Challege Assesment, Level 1

### Motivation

- Recursion helps you break down large problems into much smaller sub problems.  It also allows for more elegant (less lines of code) solutions than would be possible with a normal loop.

- Recursion is a programming concept that allows you to call an original function from within the same function.  This concept is leveraged heavily in _functional programming languages_.

- Why is this worth knowing?

* Recursion allows programmers to leverage the speed and memory capacity of modern computers to write elegant algorithms.  This can be leveraged extensively in distributed programming languages like `go`, `erlang` and `elixir` to be remarkably fast on machines with a lot of computing power.
* Recursion is covered in most undergraduate Computer Science majors, and it happens to come up quite freqently in technical interviews.

What not to expect.

It's not uncommon to use recursion _very_ infrequently in production code.


### Objective
**Students will be able to**
- Recognize problems where recursion would be a good solution
- Understand the structure of a recursive algorithm
- Solve coding challenges using recursion

definition: the process of defining a function or calculating a number by the repeated application of an algorithm.

### Specific Things To Teach
- Types of problems where a recursive algorithm would be useful
  - Interview Questions!
    - fibonacci sequence
    - factorial
    - tree traversal 
- The structure of a recursive algorithm
	- Base case
	- Recursive case
- How to avoid infinite recursion/stack overflow
- Tail recursion

### Resources to Watch

- [FunFunFunction - Recursion - Part 7 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=k7-N8R0-KY4).  Learn from Matthias about recursion.

### Supplemental Materials
- [Code Academy Course on recursion](https://www.codecademy.com/courses/javascript-lesson-205/0/1)
- [Understand Recursion in Javascript in depth](https://www.thecodingdelight.com/understanding-recursion-javascript/)

### Mini Lesson
[Recursion Mini Slides + Audio](https://www.useloom.com/share/e2ce9f18d8af4fa1a836ce72d873566c)
[Recursion (slides)](https://docs.google.com/presentation/d/1KQ5bPs839gvH3iO4-v5fdVZ3JOH9_4QP0y5g0_YxxlQ/edit#slide=id.p)
[Recursion: Russian Nesting Dolls](https://www.youtube.com/watch?v=93_iFq6rBy8)

### Things to Remember
- You can solve all recursion problems with a while loop and vice versa 
	- Recursion solutions are usually simpler to implement and easier to read
- Recursive algorithms are often used to solve problems with the Tree data structures (for example, the DOM is a tree!)

### Demonstration
Instructor demonstrates in the video walkthrough an example of a recursive algorithm in Javascript.

### Independent Practice  
Write a recursive function that computes the factorial of a number. A factorial is is the product of all positive integers less than or equal to n. For example:

`factorial(5) == 5 * 4 * 3 * 2 * 1 == 120`

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

Given the following code:

```
int fun1(int x, int y) 
{
  if(x == 0)
    return y;
  else
    return fun1(x - 1,  x + y);
}
```

What do these function calls return?

`fun1(1, 1)`
`fun1(2, 1)`
`fun1(2, 2)`
`fun1(0, 2)`
