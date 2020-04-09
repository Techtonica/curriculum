# Stacks

### Projected Time

About 1 hour

### Prerequisites

- [JavaScript](/javascript)
- [Functional programming](/functional-programming/FP.md)

### Motivation

Stack is one of the most commonly used data structure along with its opposite relative, queue. Understanding how to implement stack helps you better understand and describe insertion, removal, and organization of data in a sequential order.

Applications of stack includes:

- An "undo" mechanism in text editors; this operation is accomplished by keeping all text changes in a stack.
- Undo/Redo stacks in Excel or Word.
- Language processing :
  - space for parameters and local variables is created internally using a stack.
  - compiler's syntax check for matching braces is implemented by using stack.
- Back/Forward stacks on browsers.
  [(by Siddhart Mahapatra)](https://www.quora.com/What-are-the-real-life-applications-of-stack-data-structure)

### Objectives

Explain what a stack data structure is and show how it is implemented.

### Specific Things to Learn

- Definition of stack
- Show an example of stack data structure
- JavaScript methods used to implement stack

### Lesson

[Lesson slides](https://docs.google.com/presentation/d/1lOqqqXF-NYzFw0Cu3vIa-dLZeERGhcg1SFmOgW4Y62w/edit#slide=id.p)  
[Lesson video](https://drive.google.com/open?id=1ioFhuH4I0J5gAnwyw6SJxWzioAWKNrZp)

Make sure to mention these things:

- Explain what LIFO and FILO means.
- Differentiate stack and queue.

### Common Mistakes / Misconceptions

- Array and stack seem similar at first glance. While stack can be implemented using array, the data in array can be accessed randomly, whereas stack must be accessed according to order.

### Guided Practice

Explain and discuss as a class the steps involved in writing a stack structure, including:

- Constructor
- Push/Enqueue
- Pop/Dequeue
- Size control

### Independent Practice

Try to write a Stack class with the steps discussed as methods:

```
const Stack = function() {}
  // Constructor

  // Push

  // Pop

  // Size management of stack

  // Output of stack
}
```

### Challenge / Check for Understanding

Find a partner and show each other your own Stack class. Explain how the class you wrote works.

Next, ask each other the following questions:

- What is difference between a stack and a simple array?
- Which method uses LIFO?
- Which methods are used in the stack data structure?
- What is the runtime complexity of a stack?
- How to make simple class as a stack class?
- What is the meaning of '\_' (_underscore_) in the beginning of the variable name? Refer [Playing with data structures in JavaScript — Stack](https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d)
- Give some day-to-day examples where stack is used.
- What is difference between stack and queue?

### Supplemental Resources

- [GeeksforGeeks: Implementation of Stack in JavaScript](https://www.geeksforgeeks.org/implementation-stack-javascript/)
- [InitJS: Implement a Stack in JavaScript](https://initjs.org/data-structure-stack-in-javascript-714f45dbf889)
