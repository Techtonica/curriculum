# Linked Lists

### Prerequisites

- [Data Structures Overview](/data-structures/intro-to-data-structures.md)
- [JavaScript Arrays, Functions](/javascript/javascript-2-array-functions.md)
- [JavaScript Objects](/javascript/javascript-7-oop.md)
- [Prototypical Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### Motivation

Though you will rarely (if ever) be asked to implement a data structure from scratch, having solid knowledge and understanding of the various data structures and ideal use cases can help you ace a technical interview (and get into your dream tech job).

### Objectives

**Participants will be able to:**

- Implement various types of linked lists.
- Understand which portions of linked lists are already implemented in JavaScript.
- Implement their own linked lists under the correct circumstances.

### Specific Things To Learn

- What is a linked list
- What are the basic characteristics of a linked list
  - Why would a linked list be used instead of an array?
  - What other data structures are similar to linked lists?
  - What is the difference between a singly-linked list and a doubly linked list
  - Why would a singly linked list be used instead of a doubly linked list?
- How to recognize linked lists when you see them
- How to know when to use linked lists to solve a problem.
- Linked lists in different versions of JavaScript.

### Lesson

Create a file named "node.js" and create a Node class like the one below but give each Node a 'text' attribute.

```javascript
// Declare a Node() function that we will use to instantiate new Node objects.
function Node(data) {
  this.data = data;
  this.next = null;
}

// Declare a SinglyLinkedList() function that we will use as a basis for our singly-linked list.
function SinglyLinkedList() {
  this._length = 0;
  this.head = null;
}

// Use JavaScript prototyping to give the SinglyLinkedList class new public methods.
SinglyLinkedList.prototype.add = function (value) {
  let node = new Node(value),
    currentNode = this.head;

  // If the list is empty (has no head value)
  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // Loop over all nodes that have a value in their "next" property.
  // This loop ends when it reaches a node that has no value in the "next" property.
  // We use this to determine the "last" node of the singly linked list.
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  // We can now add our node to the end of the list by storing it in the "next" of the node we determined was last in the list.
  currentNode.next = node;

  // We need to increment the length of the list now that we've added a new node.
  this._length++;

  return node;
};

SinglyLinkedList.prototype.findByPosition = function (position) {
  let currentNode = this.head,
    length = this._length,
    count = 1,
    message = { failure: 'Failure: non-existent node in this list.' };

  // Catch the possibility that a position that doesn't exist was provided.
  if (length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

  // Loop over all nodes until the node before the desired position
  while (count < position) {
    // Pull the "next" node object from the node based on the count
    currentNode = currentNode.next;
    count++;
  }

  // Because our loop stopped at the position before, our "currentNode" value is correctly set.
  return currentNode;
};

SinglyLinkedList.prototype.remove = function (position) {
  let currentNode = this.head,
    length = this._length,
    count = 0,
    message = { failure: 'Failure: non-existent node in this list.' },
    beforeNodeToDelete = null,
    nodeToDelete = null,
    deletedNode = null;

  // Catch the possibility that a position that doesn't exist was provided.
  if (position < 0 || position > length) {
    throw new Error(message.failure);
  }

  // Only run when the first node is being removed.
  if (position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;

    return deletedNode;
  }

  // Remaining logic that is run when any node is being removed.
  while (count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
};
```

---

_Make sure to mention these things:_

- Common data structures in interviews (hash tables, binary search trees, etc.)
- Most blockchains are built on some implementation of the Merkle tree data structure patented by Ralph Merkle (check out his site -> [merkle.com](http://merkle.com/) for more info if you're into cryptography)
  - Different ways of applying and/or updating attributes
- Constructors
- Different ways of applying attributes
- How to define methods on a class in ES6
- Traversing a LinkedList
- How to remove Nodes

### Common Mistakes / Misconceptions

While traversing a singly-linked list, it is imperative that you stop BEFORE the actual node that you want to remove, as there is no going backwards to the "previous" node.

Adding/removing items is usually faster than more complex data structures.

Searching/iteration can be slower/cumbersome since every node only references the "next" node in the list.

The DOM is a kind of Linked List. Our HTML elements are contained within parent elements and there is a last and first element to every HTML document.

Other (tradeoffs when using linked lists)[https://en.wikipedia.org/wiki/Linked_list#Tradeoffs] as detailed by Wikipedia.

### Guided Practice

Create a method to add a node to the end of the Linked List and a method to delete a node with the text attribute matching the given string.

### Independent Practice

Create a method to add a new node after the node with the text attribute matching the given string.

### Challenge

See [Testing and TDD](../testing-and-tdd/testing-and-tdd.md) for a refresher on how to use Mocha and Chai to write tests.

Create a file called "LinkedList_test.js" and write tests for each of your methods using Mocha and Chai be sure to include:

```js
const LinkedList = require('./linkedlist.js');
```

### Check for Understanding

- Summarize what you have learnt about linked lists. What are the basic features of linked lists?
- What are some of the common misconceptions in using linked lists?
- Draw single, double, multiple, and circular linked list diagrams, and compare with a fellow group member.

### Supplemental Materials

- [MDN web docs | Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) (Website)
- [That JS Dude | JS: Interview Questions part -4: Stack, Queue, Linked List](https://www.thatjsdude.com/interview/linkedList.html#singlyLinkedList) (Website)
- [Geeks for Geeks | Linked List | Set 1 (Introduction)](https://www.geeksforgeeks.org/linked-list-set-1-introduction/) (Website)
- [ES6 Implementation](https://gist.github.com/klugjo/a9e9ef98fe879bc2b19b5a2e5947204c) (GitHub Gist Code)
- [Instantiation Patterns in JavaScript](https://medium.com/dailyjs/instantiation-patterns-in-javascript-8fdcf69e8f9b) (Article)
