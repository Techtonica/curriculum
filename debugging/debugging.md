# Debugging

### Projected Time
30-45 minutes

### Prerequisites
Knowledge of Javascript and the Javascript console in their web browser

### Motivation

Things will go wrong during programming. It's important to learn how to quickly understand why a program is not behaving as expected. Getting back on track as fast as possible is important to stay motivated and to spend programming time productively.

### Objective
After this lecture, students will be able to efficiently find program errors in Javascript programs.

### Specific Things To Teach
- What is debugging?
	- Finding program errors.
- The philosophy of debugging
	- Learn to understand bugs as differences between the programmer's assumptions about a program's results and the program's observed results.
- Effective debugging
	- Brief introduction on how to find bugs quickly and easily.
- printf-debugging
	- Debugging Javascript code through logging statements
- Going beyond printf-debugging
	- The Javascript debugging commands.
	- How to use Chrome for debugging.

### Materials

- [w3schools - Javascript Debugging](https://www.w3schools.com/js/js_debugging.asp)
- [Get Started with Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/)

### Mini Lesson

Imagine you are writing a program to calculate the distance between cities. You write your code and then you run it for the first time. The program output looks weird. You are sure that the distance between San Francisco and Austin is not just 5 miles. There must be a mistake in the code. But where is it and how can you find it? This is what we’re covering in this lesson.

What is debugging?

Debugging is the organized process of finding errors (so called bugs) in computer programs. Every programmer makes mistakes every day and therefore every programmer must find and correct their own mistakes - and those of their coworkers - frequently. In this lesson we take a look at the process of debugging, common tools used for debugging, and how you can debug your own programs.

The philosophy of debugging

A bug is the difference between a programmer’s assumption of what a program does and what the program’s actual behavior is. You thought your city distance program would output something around 1750 miles for the distance between San Francisco and Austin but it did not. Your assumption did not match the program’s result.

Debugging is in that sense the attempt to find what causes the difference between your assumption about a program with the program’s behavior. This difference is not just limited to a program’s output but applies to the state of the program at any time.

An important takeaway from that way of thinking is that bugs are not really errors made by the computer. Rather, they are errors made by you, the programmer. The computer will faithfully execute whatever code you give it, so don’t get mad at the computer. Finding the bug means challenging your own assumptions and finding your own mistakes.

Effective debugging

Effective debugging is about quickly finding the part of the code that executes differently from what you had assumed. Once found that part you can fix it. Finding the piece of wrong code doesn’t mean randomly changing code and hoping for the best. There is a better method for it.

To debug a program, you want to find two parts of the program first: an earlier part of the program where you know that your assumptions about the program state hold true, and a later part of the program where you know that your assumptions about the program state don’t hold true anymore. If you don’t have any immediate idea on how to pick these two parts of the program you can start with the first line of the program and the last line of the program.

When you have these two parts you want to go ahead and pick a third part of the code that is somewhere in the middle between the first two. Then run your program again and check the program state at this third part. If your assumptions about the program state are already wrong at this point, the bug must be in the code in the first half of the program. If your assumptions are still true, the bug must be in the second half of the program. Now repeat the process by picking a line of code in the half of the program you just identified, running the program again, and comparing the program state with your assumptions at that point. In effect you are essentially doing a binary search over your program code. Usually you will have narrowed down the part of the code containing the bug in less than 10 tries.

printf-debugging

The previous section talked a lot about inspecting program state but how do you actually do that? It’s really easy to get started. In Javascript you can just console.log to log the values of variables to your browser’s Javascript console.

This method of debugging is called printf-debugging. The name comes from the C programming language where the printf function is similar to Javascript’s console.log function.

In our example program, you would use console.log throughout the program to find the point where the value of your miles variable goes from a reasonable number like 1750 to the unreasonable number 5.

Going beyond printf-debugging

printf-debugging is quick and easy to use and doesn’t require a lot of thought. Programmers use this way of debugging frequently due to its ease of use. However, sometimes finding errors using only printf-debugging is difficult and time-consuming. To discover these more serious bugs, Javascript provides specific debugging functionality to make it easier to find these more serious errors.

TODO: Talk about Javascript debugging functionality.

### Common Mistakes / Misconceptions

Absolutely do have a structured plan for debugging. Do not randomly change code or add random console.log statements. Without a plan, debugging takes longer than necessary.
When debugging becomes difficult, completely let go of your previous assumptions. You don’t want to spend an hour debugging code because you assumed a function returned 2 when it really returned 5.


### Guided Practice

### Independent Practice

### Challenge

### Check for Understanding
