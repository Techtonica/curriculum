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
- Score of __15__ or higher at Coding Challege Assesment, Level 1

### Motivation
A __recursive__ function is any function that calls itself. __Recursion__ refers to the process of evaluating a recursive function. Recursion is often contrasted with __iteration__, the process of evaluating loops. Recursive functions describe the solution to a large problem (e.g. `sum([1,2,3])`) in terms of smaller versions of the same problem (e.g. `sum([1,2,3]) = 1 + sum([2,3])`). Recursive functions (typically) are shorter and easier to understand than iterative ones, but require more memory and CPU cycles. Although recursion rarely appears in production code, it is a major topic in most undergraduate Computer Science programs and appears quite frequently in coding interviews.

### Objective
**Apprentices will be able to:**
- Understand the structure and definition of a recursive algorithm
- Distinguish between iterative and recursive functions  
- Recognize problems where recursion would be a good solution
- Solve coding challenges using recursion

### Specific Things To Teach
- Types of problems where a recursive algorithm would be useful
  - Interview Questions!
    - fibonacci sequence
    - factorial
    - tree traversal 
- The structure and definition of a recursive algorithm
	- Base case
	- Recursive case
- How to avoid infinite recursion/stack overflow
- Tail recursion

### Resources to Watch

- [FunFunFunction - Recursion - Part 7 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=k7-N8R0-KY4).  Learn from Matthias about recursion.

### Supplemental Materials
- [Code Academy Course on recursion](https://www.codecademy.com/courses/javascript-lesson-205/0/1)
- [Understand Recursion in Javascript in depth](https://www.thecodingdelight.com/understanding-recursion-javascript/)
- [Recursive Practice Problems](https://www.geeksforgeeks.org/recursion-practice-problems-solutions/)

### Lesson
- [Recursion Mini Slides + Audio](https://www.useloom.com/share/e2ce9f18d8af4fa1a836ce72d873566c)
- [Recursion (slides)](https://docs.google.com/presentation/d/1KQ5bPs839gvH3iO4-v5fdVZ3JOH9_4QP0y5g0_YxxlQ/edit#slide=id.p)
- [Recursion: Russian Nesting Dolls](https://www.youtube.com/watch?v=93_iFq6rBy8)

### Things to Remember
- You can solve all recursion problems with a while loop and vice versa 
	- Recursion solutions are usually simpler to implement and easier to read
- Recursive algorithms are often used to solve problems with the Tree data structures (for example, the DOM is a tree!)

### Demonstration
Instructor demonstrates in the video walkthrough an example of a recursive algorithm in Javascript.

### Independent Practice  
Write a recursive function `isPalindrome(aString)` that returns `true` if `aString` is a [palindrome](https://en.wikipedia.org/wiki/Palindrome). A palindrome is any string that is the same read forwards or backwards:

```
isPalindrome('racecar') -> true
isPalindrome('step on no pets') -> true
isPalindrome('a') -> true
isPalindrome('goat') -> false
```

### Challenges

#### [Challenge] - Factorial
The [factorial](https://en.wikipedia.org/wiki/Factorial#Definition) of a whole number `n` is written `n!` and defined as the product of all positive whole numbers less than or equal to `n`.

For example, the value of `3!` (read: three factorial) is `6` which is calculated by multiplying together all whole numbers less than or equal to `3`:

```
factorial(3) = 3! = 3 * 2 * 1 = 6
```

The value of `10` factorial, for example, can be calculated by:

```
10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
``` 

> Write a function that uses recursion to calculate the factorial of a number.

#### [Challenge] - Fibonacci

The [fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) appears in unexpected places all over mathematics and nature. It is defined by the following three rules: 

* The first Fibonacci number is 1
* The second Fibonacci number is 1
* Every other Fibonacci number is the sum of the previous two Fibonacci numbers

For example, the first few numbers in the Fibonacci sequence are:

```
1, 1, 2, 3, 5, 8, 13, 21, ...
```

The next Fibonacci number is:
```
13 + 21 = 34
```

> Write a method `fib(n)` that calculates the `n`th Fibonacci number (starting from `n = 1`).


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
