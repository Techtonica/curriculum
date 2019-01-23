# Hash Tables

### Projected Time
2 hours

### Prerequisites
JavaScript prototypal inheritance
Runtime complexity

### Motivation
Hash tables are one of the most frequently used data structures. You'll use them in your code a lot, so knowing how and when to use hash tables is important.

Knowing how hash tables work will give you a deeper understanding of why hash tables are used and what they're good for. Hash tables are also often used in the solution to interview questions.

### Objectives
- Understand basic hashing algorithms
- Know the runtime of hash table operations
- Be able to identify problems where hash tables could be used
- Be able to write code that uses hash tables to solve problems
- Understand how hash tables are implemented and how this implementation leads to the runtime properties

### Specific Things To Teach
- A hash table is used to store key-value pairs or tuples.
- Why is this called a hash table? The hash of the key determines where the value is stored.
- All objects in JavaScript are hash tables.
- Look-up in a hash table is on average O(1). Worst case look-up is O(n).
- Using different hashing algorithms on the keys will affect the hash table's performance.

### Materials

- [Hash Tables in JavaScript](http://www.mojavelinux.com/articles/javascript_hashes.html)
- [Objects and Hash Tables in JavaScript](https://codeburst.io/objects-and-hash-tables-in-javascript-a472ad1940d9)
- [Javascript implementation of Java's String.hashCode() method](http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/)

### Lesson

- [Understanding and Using Hash Tables](https://docs.google.com/presentation/d/1V9liCnncXJDXZ0CK_MbXfFrWz6cwGucTYdIkHdkJ9_8/edit#slide=id.p)
- [Implementing Hash Tables](https://docs.google.com/presentation/d/1-zCx1fc5cUP6rklL-CrYzmO8ibcXztsOZxJUv3Fpd-s/edit#slide=id.g2f6e14aaa5_0_0)

### Common Mistakes / Misconceptions

What is the difference between a hash map and a hash table? The two are used interchangeably.

When should I use an array instead of a hash table? If your keys are sequential integers.

When does a JavaScript object stop being a hash table? When a property is added as a function.

### Independent Practice

#### Coding questions that use hash tables
1. A person is represented in a JSON string, and the person's `name` is specified. Say hello to this person.

#### Implement a hash table
Basics: put(), get(), hash(), print()

Challenge 1: Handle collisions with chaining

Challenge 2: Make the table larger when enough items are added to the table

### Check for Understanding

Compare implementations of bucket collisions with a peer. Brainstorm different data structures one can use for implementing buckets. Code review others' hash table implementations: Are clear parameter and method names used? Is the code DRY? Compare hashing algorithm choices with a peer.
