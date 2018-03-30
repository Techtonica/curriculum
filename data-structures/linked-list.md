# Linked Lists

### Projected Time
30-45 minutes

### Prerequisites

 - [Data Structures Overview](https://github.com/Techtonica/curriculum/edit/master/data-structures/linked-list.md)
 - [Javascript Arrays](https://github.com/Techtonica/curriculum/edit/master/data-structures/linked-list.md)
 - [Javascript Objects](https://github.com/Techtonica/curriculum/edit/master/data-structures/linked-list.md)
 - [Prototypical Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### Motivation
Though on the job, you will rarely (if ever) asked to implement a data structure from scratch, having a solid knowledge and understanding of the various data structures and ideal use cases can help you ace a technical interview (and get into your dream job working in tech).

### Objective
**Apprentices will be able to** implement various different types of linked lists. They should understand which portions of linked lists are already implemented in javascript and how to implement their own linked lists under the correct circumstances.

### Specific Things To Learn
- What is a data structure
- What are the basic characteristics of a linked list
  - Why would a linked-list be used instead of an array?
  - What is the difference between a singly-linked list and a doubly linked-list
  - Why would a singly linked-list be used instead of a doubly linked list?
- How to recognize linked lists when you see them
- How to know when to use linked lists to solve a problem.
- Linked lists in different versions of javascript.

### Supplemental Materials
- [MDN web docs | Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [THat JS Dude | JS: Interview Questions part -4: Stack, Queue, Linked List](https://www.thatjsdude.com/interview/linkedList.html#singlyLinkedList)
- [Geeks for Geeks | Linked List | Set 1 (Introduction)](https://www.geeksforgeeks.org/linked-list-set-1-introduction/)
- [ES6 Implementation](https://gist.github.com/klugjo/a9e9ef98fe879bc2b19b5a2e5947204c)

### Mini Lesson

Create a file named "node.js" and create a Node class like the one below but give each Node a 'text' attribute.

<code>
export default class Node {
  constructor (){
  
  }
 }
</code>

Next, create a file named "linkedlist.js" and create a LinkedList class object like the following but add any attributes that you deem necessary to create a linked list (based on your research (see links above)).
<code>
  const Node = require('./node.js');
  export default class LinkedList {
    constructor(head, text){
    this.head = head || new Node(text)
    
  }
}  
</code>

___

*Make sure to mention these things:*
- Common data structures in interviews (hash tables, binary search trees, etc.)
- Most blockchains are built on some implementation of the merkle tree data structure patented by Ralph Merkle (check out his site -> merkle.com for more info if you're into cryptograpghy)
  - Different ways of applying and/or updating attributes 
- Constructors
- Different ways of applying attributes
- How to define methods on a class in ES6
- Traversing a LinkedList
- How to remove Nodes

### Common Mistakes / Misconceptions

While traversing a singly-linked list, it is imperative that you stop BEFORE the actual node that you want to remove, as there is no going backwards... 

Adding/removing items is usually faster

Searching/iteration can be slower/cubersome

The DOM is a Linked List

Other (tradeoffs when using linked lists)[https://en.wikipedia.org/wiki/Linked_list#Tradeoffs] as detailed by wikipedia.


### Guided Practice

Create a method to add a node to the end of the Linked List and a methed to delete a node with the text attribute matching the given string.

### Independent Practice

Create a method to add a new node after the node with the text attribute matching the given string.

### Challenge

See [Testing and TDD](https://github.com/Techtonica/curriculum/blob/master/testing-and-tdd/testing-and-tdd.md) for a refresher on how to use Mocha and Chai to write tests.

Create a file called "LinkedList_test.js" and write tests for each of your methods using Mocha and Chai be sure to include:
<code>
  const LinkedList = require('./linkedlist.js');
</code>

### Check for Understanding

Have apprentices summarize linked-lists to each other. Ask eachother to take turns trying to name some of the common misconceptions in using linked lists.

Have apprentices make a doubly-linked list (with matching tests) in pairs/threes, or something else that helps assess their understanding.

Help eachother understand how to use Doubly/Multiply/Circularly Linked Lists.

(http://blog.millermedeiros.com/linked-lists/)
