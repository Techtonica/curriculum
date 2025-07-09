# Solving Coding Challenges

## Motivation

Solving coding challenges is an effective way to practice the concepts you learn.

While learning a new coding language, solving challenges in that language is helpful for learning syntax, how to represent data structures, and how to debug.

When learning a new algorithm, a new coding concept, or data structure, applying it to a coding problem is a great way to apply what you've learned and check your understanding.

Solving coding challenges is also an important skill for job hunting because it shows companies your technical and non-technical skills. They can see how familiar you are with coding, algorithms, etc and they can see how you think, debug, and communicate.

## Objectives

**Participants will be able to:**

- Solve an online coding challenge

## Specific Things To Learn

At the end of the lesson you will be able to understand how to solve problems:

- Understanding the prompt
- Think of a high level approach
- Code your solution
- Test your solution

## Materials

- [How to think like a programmer](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/) - High level overview on how to approach coding problems (5-10 min)
- [10 Steps to Solving a Programming Problem](https://codeburst.io/10-steps-to-solving-a-programming-problem-8a32d1e96d74) - Another article with steps on how to solve programming problems, with an example (12-20 min)

## Lesson: Solving the Problem

### 1. **Understand the prompt**

Take time to read the problem and understand what the goals are. If test cases are given, look at each one and understand them.

### 2. **Think of a high level approach**

Based on your learning style, you might work to understand the problem in different ways. For example, drawing a diagram might help some people. Talking and explaining out loud might help other people. At the end of this step, you should be able to explain your solution (without using code).

### 3. **Code your solution**

Begin coding! Debugging and console logging along the way can help you catch errors early, and understand how your code is working. Try to break down the problem into sub problems, and tackle those one at a time. Some things to think about are: - What format is the input in? What format do I want the output to be? - What information do I need to store? What information do I need to calculate?

### 4. **Test your solution**

See [Testing lesson](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/testing-mindset.md).

### Getting Stuck

**Debugging**

Testing along the way can make debugging easier. See [Debugging Lesson](https://github.com/Techtonica/curriculum/blob/main/debugging/debugging.md) for more info.

**Using Google/StackOverflow**

If you're stuck, Google and StackOverflow have a ton of information, which has pros and cons. For any question or topic, there will usually be a snippet of code or example somewhere. While it is tempting to copy and paste these into coding challenges, there are disadvantages such as:

- By copy-pasting, you lose the chance to problem solve yourself.
- Often these code snippets might not be 100% what you're looking for, so they could introduce more bugs.

When you do Google, try to have a specific goal in mind. ie, "I want to look up the syntax for arrays", or "I want to see an example of recursion".

## Common Mistakes & Misconceptions

- **I can't test until I finish**
  Testing and running your code along the way is important because it can tell you if errors or bugs pop up along the way. If you wait until finishing it to test, you might have to go back and redo things that you could have caught earlier on.

- **I can't ask for help**
  Being able to ask for help effectively is an important and crucial skill. In software engineering no one knows everything, so knowing how to problem solve yourself and when and how to ask for help is important.

## Guided Practice

(note: you don't have to write this all out when you solve the problem. This represents an example inner thought process for solving the problem)

### Example Problem

Complete the `isEven(number)` function. It has one parameter: a number n. It returns `"Your number is even!"` if n is even, and `"Sorry, your number is odd!"` if n is odd.

```
function isEven(n){
/** your code here **/
}
```

See Repl [here](https://repl.it/@dpenny330/demo-danielle).

## Working through the steps

### **1. Understanding the prompt**

The function has an input parameter which is a number. I want to figure out if the number is even or odd. If it's even, I want to return the string "Your number is even!". If it is odd, I want to return the string "Sorry, your number is odd!".

### **2. Think of a high level approach**

My solution will need to do two things:

1.  It will determine if the number is even or odd.
2.  It will return a string depending if the number is even or odd.

### **3. Code your solution**

When I begin to code, I am not sure how to check if a number is even or odd. I know in math, I can do this by checking if the remainder of number divided by 2 is 0.

If I do not know about the [modulo](https://www.w3schools.com/js/js_arithmetic.asp) operator, I can google or ask for help. If I am unsure of how to do this in Javascript, I can also google the syntax.

A complete solution could look something like this. Note there are a lot of different ways to solve this. In coding there is rarely one "right" answer.

**Option 1:**

```
function isEven(n){
 if (n%2 === 0) {
   return "Your number is even!"
  }
 else {
 return "Your number is odd!"
 }
}
```

**Option 2:**

```
function isEven(n){
 const iAmEven = n%2 === 0
 if (iAmEven === true) {
   return "Your number is even!"
  }
 else {
 return "Your number is odd!"
 }
}
```

### **4. Test your solution**

This example did not come with test cases. I can add test cases to the bottom of my file by calling the function with some parameters, and printing the output to see if this is what I expect. For example, at the bottom of my file I can add:

```
console.log(isEven(2))
console.log(isEven(3))
console.log(isEven(-1))
```

## Independent Practice

1.  Find a partner.
2.  Have each person find a previous morning challenge they found challenging.
3.  For each challenge, have both people try and solve each problem again while talking out loud with their partner.

- What was tricky about the problem? How did we work through it?
- Did we use test cases? How did those help us solve the problem?
- Did my partner and I solve the problem differently?
- Did I learn anything new from hearing how the other person thinks?

## Challenge

In a Repl It, implement a function named `squareMax` that has two parameters: an integer `n` and an integer `m`. It must return the max of `n` squared and `m` squared. For example `squareMax(2, 5)` would return 25 because 2 _ 2 is 4 and 5 _ 5 is 25. 25 is the bigger number.

```
function squareMax(n, m){
/** your code here **/
}
```

Before starting, write down 3 test cases. Make sure to consider all types of integers.

## Check for Understanding

- What are the steps to follow to solve a coding challenge?
- What can you do if you are stuck?
- How do you test?
- What skills do you gain from solving coding challenges?

## Supplemental Materials

- [Benefits of applied learning](https://www.suny.edu/applied-learning/about/) - Solving coding challenges is a form of applied learning - applying concepts such as algorithms to real life questions. This page from SUNY explains the importance of applied learning.
