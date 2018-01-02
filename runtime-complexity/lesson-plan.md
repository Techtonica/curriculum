# Title Here

### Projected Time
2 hours


### Prerequisite
Here are links to lessons that should be completed before this lesson.
- JS
- Loops
- Arrays
- Dictionaries


### Motivation
Understanding runtime complexity is important for a few main reasons:
- It is a driving force when choosing which data structures to use
- It is important to know for technical interviews
- It is the basis for many real-world applications, such as database indexes, etc

### Objective
**Students will be able to**:
- Understand O(1), O(log n), O(n), O(n log n), O(n^2), and O(2^n)
- Know the runtime of array and dictionary functions
- Understand the difference between time complexity and real-world runtime
- Determine time complexity for simple functions and algorithms

### Specific Things To Teach


### Materials

- [Explanations of the different common runtimes](https://www.cpp.edu/~ftang/courses/CS240/lectures/analysis.htm)

### Mini Lesson

Here's text about introducing something and how it works.

Build on the first information. Have students guess things, do an activity, etc.

Make sure to mention these things:
- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things

### Things to know:
Indexing into an array (e.g. `array[7]`) is `O(1)`
Looking up a key in a dictionary (e.g. `object["name"]`) is `O(1)`
Sorting an array (with a fast algorithm) is `O(n log n)` -- this isn't simple to prove, but if you're curious you can read more about why [here](https://www.cs.cmu.edu/~15110-f12/Unit05PtC-handout.pdf) and [here](https://en.wikipedia.org/wiki/Comparison_sort)

### Common Mistakes / Misconceptions

This is something that students might not realize or might assume at first.

Make sure they avoid this: thing


### Guided Practice

Have the students work with you as you do something.


### Independent Practice

Exercise 1: Reading code and analyzing runtime

Read these pieces of code (link).  For each function, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run it with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
- Which graph line does it align to?

Exercise 2: Comparing code
Compare 2 pieces of code that do the same thing, and figure out the runtime of each one. Which solution would be faster for large input sizes?
(link)

Exercise 3: Writing code
How would you solve these problems (link)? Can you think of an O(n^2), O(n log n), O(n) solution?

### Challenge

Students can try to do this other thing.


### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.

Discuss with the group and an instructor:
- Which problems were the hardest to guess/understand?
- Which ones were the easiest?
