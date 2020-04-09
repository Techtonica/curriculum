# Deque

### Projected Time

80 minutes

### Prerequisites

- [Intro to Data Structures](/data-structures/intro-to-data-structures.md)
- [JavaScript 1 - Variables, Strings, Numbers](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-arrays-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops](/javascript/javascript-4-loops.md)
- [JavaScript 5 - Switch Statements](/javascript/javascript-5-switch.md)
- [JavaScript 6 - Object Literals](/javascript/javascript-6-object-literals.md)
- [JavaScript 7 - Object-Oriented Programming](/javascript/javascript-7-oop.md)
- [Runtime Complexity](/runtime-complexity/runtime-complexity.md)

### Motivation

Deque is used as an abstract data type, also referenced as a double-ended queue.
Similar to a queue, deques exist as an ordered collection of items. A deque's nature is unrestrictive, meaning that it easily allows for adding and removing items at either end. Deques are a unique hybrid linear structure that provide the capabilities of stacks and queues in a unique data structure. Deques can be implemented with a dynamic array or with a doubly-linked list and they do not require Last In First Out (LIFO) or First In First Out (FIFO)orderings that are required by both stacks and queues. The homophone "dequeue" is used as a verb, meaning to remove from a queue.

Examples that use Deque:

- A nice application of the deque is storing a web browser's history. Recently visited URLs are added to the front of the deque, and the URL at the back of the deque is removed after some specified number of insertions at the front.
- Another common application of the deque is storing a software application's list of undo operations.
- One example where a deque can be used is the A-Steal job scheduling algorithm. This algorithm implements task scheduling for several processors. A separate deque with threads to be executed is maintained for each processor.
  [(by Atishay Jain)](https://www.quora.com/What-are-some-of-the-real-life-application-of-Deque)

### Objectives

**Participants will be able to:**

- Understand when to use a deque
- Be familiar with common methods
- Implement a deque
- Find and use a deque library
- Discern performance tradeoffs for different implementations of a deque

### Specific Things to Learn

- Properties of a deque
- Common use cases for deque
- Review of common implementation(s)

### Materials

- [Deque Geeks for Geeks](https://www.geeksforgeeks.org/deque-set-1-introduction-applications/)
- [Deque Data Structure](https://www.youtube.com/watch?v=kLBuJ1Hle8g) - 7 minute video
- [Stacks, Queues, & Double Ended Queues](https://youtu.be/IITnvmnfi_Y) - 6 minute video

### Lesson

Review content from slides (TODO: add link here when available).

### Common Mistakes / Misconceptions

- There may be an implementation that is very simple, but untenable for larger deques.

### Guided Practice

Discuss as a group how a deque differs from other data structures already reviewed. Some suggested questions to consider:

- What are the methods a deque must have?
- What can be tracked in a deque?
- When would a deque be used?
- What other data structures are used to make a deque?

### Independent Practice

Implement a deque in JavaScript, keeping in mind all methods and helper methods that define a deque. Consider performance -- what happens as you call specific methods you've defined?

### Challenge

There are many different ways to implement a deque in any language. Implement a deque a different way from what you did before, then consider how it differs. Is this second implementation better? If you get stuck, check out StackOverflow comments!

### Check for Understanding

Find another person in the cohort and discuss:

- What are some of the of the advantages/ disadvantages of using deques?
- In a language of your choice, can you implement some of the basic operations a deque must perform?
- Having implemented queues and stacks, can you identify situations where deques are a better data structure to use?

### Additional Reading

A-Steal Job Scheduling was briefly mentioned in the lesson as a use of deques. You can [read more here](http://supertech.csail.mit.edu/papers/steal.pdf).
