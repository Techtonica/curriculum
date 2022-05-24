# Deque

### Projected Time

80 minutes

### Prerequisites

- [Intro to Data Structures](/data-structures/intro-to-data-structures.md)
- [JavaScript 1 - Variables, Strings, Numbers](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions](/javascript/javascript-2-array-functions.md)
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

**Implementation of Deque in Javascript:**

```js
class Deque {
  constructor() {
    //To store the data
    this.items = {};

    //To track the elements from back
    this.count = 0;

    //To track the elements from the front
    this.lowestCount = 0;
  }

  // Deque addback method is similar to queue's enqueue method.
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  //Add an item on the front
  addFront(element) {
    // If the Deque is Empty then same as addBack method
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      //Else if there is item on the back
      //then add to its front
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      //Else shift the existing items
      //and add the new to the front
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
    return true;
  }

  //Remove the item from the front
  removeFront() {
    //if empty return null
    if (this.isEmpty()) {
      return null;
    }
    //Get the first item and return it
    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  //Remove the item from the back
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    //Get the last item and return it
    let result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count - this.lowestCount == 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}
```

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
