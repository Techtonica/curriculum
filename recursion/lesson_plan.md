# Recursion

### Projected Time
About ___ hours
- ___ minutes for video walkthrough of slides
- 30 minutes for Independent Practice
- ___ minutes for ___

### Prerequisites
- JS 1 lesson
- JS 2 lesson
- JS 3 lesson
- JS 4 lesson

### Motivation
- Recursion allows programmers to leverage the speed and memory capacity of modern computers to write elegant algorithms

### Objective
**Students will be able to**
- Recognize a repetition-type problem
- Understand the structure of a recursive algorithm
- Use the structure of a recursive algorithm to break down the problem

### Specific Things To Teach
- Types of problems where a recursive algorithm would be great
- The structure of a recursive algorithm
	- Base case
	- Recursive case
- How to avoid infinite recursion/stack overflow

### Supplemental Materials
- [Code Academy Course on recursion)](https://www.codecademy.com/courses/javascript-lesson-205/0/1)
- [Understand Recursion in Javascript in depth](https://www.thecodingdelight.com/understanding-recursion-javascript/)

### Mini Lesson
[Recursion (video walkthrough of slides)]
[Recursion (slides)](https://docs.google.com/presentation/d/1KQ5bPs839gvH3iO4-v5fdVZ3JOH9_4QP0y5g0_YxxlQ/edit#slide=id.p)
[Recursion: Russian Nesting Dolls](https://www.youtube.com/watch?v=93_iFq6rBy8)

### Things to Remember
- You can solve all recursion problems with a while loop and vice versa 
        - While loop solutions usually run faster and take up less computer memory
	- Recursion solutions are usually simpler to implement and easier to read
- Recursive algorithms are often used to solve problems with the Tree data structure (for example, the DOM is a tree!)

### Demonstration
Instructor demonstrates in the video walkthrough an example of a recursive algorith in Javascript.

### Independent Practice  
Write a recursive function that computes the factorial of a number. A factorial is is the product of all positive integers less than or equal to n. For example:

`factorial(5) == 5 * 4 * 3 * 2 * 1 == 120`

### Challenge
Look at this solution to the [Tower of Hanoi](https://stackoverflow.com/questions/6947653/how-does-recursive-algorithm-work-for-towers-of-hanoi) problem and explain what's happening in the code.

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
