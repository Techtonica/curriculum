# Hash Tables

### Projected Time

About 2 hours and 30 minutes

- 60 mins Lesson
- 30 mins Independent Practice
- 30 mins Check for Understanding

### Prerequisites

- [JavaScript prototypal inheritance](../javascript/javascript-7-oop.md)
- [Runtime complexity](../runtime-complexity/runtime-complexity.md)

### Motivation

Hash tables are one of the most frequently used data structures. You'll use them in your code a lot, so knowing how and when to use hash tables is important.

Knowing how hash tables work will give you a deeper understanding of why hash tables are used and what they're good for. Hash tables are also often used in the solution to interview questions.

Uses of Hashing:

- Authentication - Cryptographic hash functions let you log in to a system without storing your password anywhere vulnerable.
- Search - Hashing is useful for indexing large storage spaces, so that you can look things up in them without reading their entire contents every time. Developers usually do the indexing of big data sets to reduce the time of processing operations over them.
- Programming languages - Hash tables are a convenient way to implement the mechanism that connects a variable's name to its memory location.
  [(quora.com)](https://www.quora.com/What-are-the-real-world-examples-for-hashing)

### Objectives

- Understand basic hashing algorithms
- Know the runtime of hash table operations
- Be able to identify problems where hash tables could be used
- Be able to write code that uses hash tables to solve problems
- Understand how hash tables are implemented and how this implementation leads to the runtime properties

### Specific Things to Learn

- A hash table is used to store key-value pairs or tuples.
- Why is this called a hash table? The hash of the key determines where the value is stored.
- All objects in JavaScript are hash tables.
- Look-up in a hash table is on average O(1). Worst case look-up is O(n).
- Using different hashing algorithms on the keys will affect the hash table's performance.

### Materials

- [Understanding and Using Hash Tables Slides](https://docs.google.com/presentation/d/1V9liCnncXJDXZ0CK_MbXfFrWz6cwGucTYdIkHdkJ9_8/edit#slide=id.p)
- [Implementing Hash Tables Slides](https://docs.google.com/presentation/d/1-zCx1fc5cUP6rklL-CrYzmO8ibcXztsOZxJUv3Fpd-s/edit#slide=id.g2f6e14aaa5_0_0)

### Lesson

- Read through lesson slides [Understanding and Using Hash Tables](https://docs.google.com/presentation/d/1V9liCnncXJDXZ0CK_MbXfFrWz6cwGucTYdIkHdkJ9_8/edit#slide=id.p)
- Read through lesson slides [Implementing Hash Tables](https://docs.google.com/presentation/d/1-zCx1fc5cUP6rklL-CrYzmO8ibcXztsOZxJUv3Fpd-s/edit#slide=id.g2f6e14aaa5_0_0)

### Common Mistakes / Misconceptions

- When should I use an array instead of a hash table? If your keys are sequential integers.

### Understanding the Differences and Similarities
In many contexts, the terms "hash map" and "hash table" are used interchangeably to refer to the same concept. The distinctions often come from specific language implementations rather than fundamental conceptual differences.:
- ES2015 JS calls it a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) but historically, since all Objects allow lookup by property name, folks just used plain `Object`
- Python calls it a [`Dict`](https://realpython.com/python-dicts/) for Dictionary since you look it up by a key, just like a dictionary's have an index for each letter
- Java calls is a [`HashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) or `Hashtable`
- Ruby calls it a [`Hash`](https://ruby-doc.org/core-2.7.0/Hash.html)

Hashing, hash maps, and hash tables are fundamental concepts in computer science that are often used interchangeably, but they have distinct meanings and applications. Understanding these differences is crucial for efficient data structure selection and algorithm design.
<img width="683" alt="Screenshot 2025-04-08 at 3 39 03 PM" src="https://github.com/user-attachments/assets/fb0c886c-4e22-4e49-bc40-6fe13a9d55b1" />

- Hashing is the process of converting data into a fixed-size value using a hash function.
- Hash Maps and Hash Tables are data structures that use hash functions to map keys to values, providing efficient lookup, insertion, and deletion operations.
- The terms "hash map" and "hash table" are often used interchangeably, with differences typically coming from specific language implementations rather than fundamental concepts.
- Both hash maps and hash tables must handle collisions when different keys hash to the same index.
- These data structures offer O(1) average-case time complexity for basic operations, making them extremely efficient for many applications.

### Hash Tables
Hash Tables are data structures that use a hash function to **map keys to values**, similar to hash maps. The term is often used interchangeably with hash map, but there can be implementation differences.

<img width="291" alt="Screenshot 2025-04-08 at 3 43 45 PM" src="https://github.com/user-attachments/assets/3684c595-2eca-4d3f-bd1b-7f94b79a3ce3" />

Key characteristics of hash tables:
- Store key-value pairs
- Use hashing to map keys to array indices
- Provide O(1) average time complexity for basic operations
- Must handle collisions through techniques like chaining or open addressing
- In some languages (like C#), Hashtable is a specific implementation

### Hash Maps
Hash Maps are data structures that implement an **associative array** abstract data type, a structure that can map keys to values using a hash function to compute an index into an array of buckets or slots.

<img width="303" alt="Screenshot 2025-04-08 at 3 43 29 PM" src="https://github.com/user-attachments/assets/99b6a251-6c9d-4bb2-8c1e-a17ef04c7608" />

Key characteristics of hash maps:
- Store key-value pairs
- Use hashing to convert keys into array indices
- Provide average O(1) time complexity for search, insert, and delete operations
- Often implemented as a dynamic array of linked lists or other data structures
- In some languages (like Java), HashMap is a specific implementation

### Hashing
Hashing is a process or function that *converts an input of any size into a fixed-size value*, typically a string of characters or a number. The output is called a hash value, hash code, or simply a hash.

Key characteristics of hashing:
- Converts data of arbitrary size to fixed-size values
- Should be deterministic (same input always produces same output)
- Ideally minimizes collisions (different inputs producing same output)
- Used in cryptography, data retrieval, and data structures


### Collision Resolution
Collisions occur when two different keys hash to the same index. There are several strategies to handle collisions:

<img width="842" alt="Screenshot 2025-04-08 at 3 41 45 PM" src="https://github.com/user-attachments/assets/a060f702-37cd-4af3-a8cf-a79244d00224" />

### Common Applications 
- **Database Indexing:** Hash tables are used to create indexes for database systems, allowing for quick data retrieval.
- **Caching:** Web browsers and web servers use hash tables to implement caches for faster content delivery.
- **Symbol Tables:** Compilers and interpreters use hash tables to keep track of variables, functions, and their attributes.

### Guided Practice

Let's understand how to make hash maps using JavaScript.

- [How to implement hash table in javascript](https://reactgo.com/hashtable-javascript/)
- Here is the link for the video on [how to make hash tables using JavaScripts](https://www.youtube.com/watch?v=VundFD_ccgE).
- The another link for what hash tables are and how to implement them is [Basics of Hash Tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/). It contains the code for how _different types of hashing_ can be done by _coding_ in JS. You should be able to code different type of hashtables like linear probing, quadratic probing etc. They can start tutorial where coding begins provided that they know the basics of hashing.

### Independent Practice

#### Coding questions that use hash tables

- A person is represented in a JSON string, and the person's `name` is specified. Say hello to this person.

#### Implement a hash table

Basics: set(), get(), print()  
Challenge 1: Handle collisions with chaining  
Challenge 2: Make the table larger when enough items are added to the table

### Challenge

Compare implementations of bucket collisions with a peer. Brainstorm different data structures one can use for implementing buckets. Code review others' hash table implementations: Are clear parameter and method names used? Is the code DRY? Compare hashing algorithm choices with a peer.

### Check for Understanding

- Explain how a hash table uses hashing.
- What is a real-world use case for a hash table? What are the advantages?

### Supplemental Materials

- [How to implement simple hash table?](https://medium.freecodecamp.org/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997)
- [Hash Tables in JavaScript](http://www.mojavelinux.com/articles/javascript_hashes.html)
- [Objects and Hash Tables in JavaScript](https://codeburst.io/objects-and-hash-tables-in-javascript-a472ad1940d9)
- [JavaScript Hash Table – Associative Array Hashing in JS](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/)
