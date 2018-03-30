# Hash Tables

### Projected Time
4 hours

### Prerequisites
JavaScript prototypal inheritance
Runtime complexity

### Motivation
Hash tables are one of the most frequestly used data structures. You'll use them in your code a lot, so knowing how and when to use hash tables is important.

Knowing how hash tables work will give you a deeper understanding of why hash tables are used and what they're good for. Hash tables are also often used in the solution to interview questions.

### Objective
**Students will be able to:** 
- Learn about hashing algorithms
- Know the runtime of hash table operations
- Be able to identify problems where hash tables could be used
- Be able to write code that uses hash tables to solve problems
- Understand how hash tables are implemented and how this implementation leads to the runtime properties

### Specific Things To Teach
- A hash table is used to store key-value pairs or tuples.
- Why is this called a hash table? Values are stored as a hash of the key.
- All objects in JavaScript are hash tables.
- Look-up in a hash table is on average O(1). Worst case look-up is O(n).
- Using different hashing algorithms on the keys will affect the hash table's performance.

### Materials

- [Hash Tables in JavaScript](http://www.mojavelinux.com/articles/javascript_hashes.html)
- [Objects and Hash Tables in JavaScript](https://codeburst.io/objects-and-hash-tables-in-javascript-a472ad1940d9)
- [Javascript implementation of Java's String.hashCode() method](http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/)

### Mini Lesson

- TODO: [Understanding and Using Hash Tables](https://docs.google.com/presentation/d/1V9liCnncXJDXZ0CK_MbXfFrWz6cwGucTYdIkHdkJ9_8/edit#slide=id.p)
- TODO: [Implementing Hash Tables](https://docs.google.com/presentation/d/1-zCx1fc5cUP6rklL-CrYzmO8ibcXztsOZxJUv3Fpd-s/edit#slide=id.g2f6e14aaa5_0_0)

### Common Mistakes / Misconceptions

What is [the difference](https://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable) between a hash map and a hash table?

When should I use an array instead of a hash table? If your keys are sequential integers.

When does a hash table stop being a hash table? When a property is added as a function.


### Guided Practice

Have the students work with you as you do something.


### Independent Practice

#### Coding questions that use hash tables
1. A person is represented in a JSON string, and the person's `name` is specified. Say hello to this person.


#### Implement a hash table
Basics: put(), get(), hash()

Challenge 1: Handle collisions with chaining

Challenge 2: Make the table larger when enough items are added to the table


### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
