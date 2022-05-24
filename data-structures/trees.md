# Trees

### Projected Time

about 2 hours

- Lesson Materials - 30-50 minutes
- Independent Practice - 60-90 minutes

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

- Trees are the type of data structure that will allow you to store and process objects and tasks dealing with numbers, strings and everything in between. The motivation here is to understand that a tree is a type of data structure that represents data in a top down arrangement, similar to a hierarchy.

- https://google.com uses a type of tree called a 'trie' to auto-complete what you are typing into the search bar. By seeing the first few letters you've typed, it can check it's record tree of possible letters that can come after. So if you type "how do I", their record tree for "how do I" has child nodes each contain a possible following set of characters, like "learn to draw" or "tie a tie" or "build a shelf". The same can be said for auto-complete in many texting apps.

- When records are kept in order in a binary search tree (or BST), everything on one side of any branch is a lower value, and everything on the other side is a higher value, so finding something again is extremely efficient.

- Companies that care about spacial positioning are likely to use something called quadtrees or octrees which are the 2d & 3d parallels of a BST (so you may see this used for optimizing physics simulations e.g. in game engines like [Unity](https://unity3d.com/) and [Unreal](https://www.unrealengine.com/en-US/what-is-unreal-engine-4).)

- [Agari](https://www.agari.com/) used [Radix tries](https://en.wikipedia.org/wiki/Radix_tree) to optimize their IP address search engine - their efficiency went from 0(n) (searching an array) to O(log n).

### Objectives

**Participants will be able to:**
identify, implement and differentiate: trees, binary tree traversal, binary heaps, & tries.

### Specific Things to Learn

- Trees
- Binary Search Trees
- B Trees
- Tries
- Heaps

### Materials

- [Techtonica: Trees Slides](https://docs.google.com/presentation/d/1O_mK6z7q69RLvqVFmoqfmEr4XKFSYVibgf-E08hxApw/edit?usp=sharing)
- [binary search trees (video)](https://www.youtube.com/watch?v=7vw2iIdqHlM) - 7 minutes
- [B trees](https://www.geeksforgeeks.org/b-tree-set-1-introduction-2/) -5 min read
- [tries (video)](https://youtu.be/zIjfhVPRZCg)- 5 minutes
- [tries explained (video)](https://youtu.be/-urNrIAQnNo) - 9 minutes
- [heaps (video)](https://youtu.be/t0Cq6tVNRBA) - 10 minutes
- [Data Structures: Crash Course Computer Science #14 (video)](https://youtu.be/DuDz6B4cqVc) (Trees are explained 8 minutes into the video - 1 min total)
- [Tree Implementation in an Array](https://webdocs.cs.ualberta.ca/~holte/T26/tree-as-array.html)(5 min read)
- [Data Structures: Trees (video)](https://www.youtube.com/watch?v=oSWTXtMglKE)(10 min video)

### Lesson

Work through the materials provided in 'materials'. This should take 30-50 minutes.

#### Notes:

- **Trees** associate every object to a node in a tree, and the number of children stemming from that node are referred to as its degree. There are several types of trees, including Binary Search Trees (BST) and with Binary Search Trees you can perform insertions, deletions, and retrievals.

- **Trees are a common interview question**. They can be used when you want to store data that takes the shape of a hierarchy. Unlike arrays, and linked lists, trees are a non-linear data structure. Organizing keys in the form of a tree allows us to search for a given key quicker than a linked list, but slower than searching through an array.

- **Self-balancing search trees** and **Red-Black trees** produce an upper bound of O(Log n)for search. Trees also provide a faster key insertion and deletion time than arrays, but slightly slower than unordered linked lists.

- The common uses of trees include manipulating hierarchical data, making information easy to search (tree traversal), manipulating sorted lists of data, compositing digital images for visual effects, and router algorithms.

### Independent Practice

[Cracking the Coding Interview 6th Ed.](https://www.pdfdrive.com/cracking-the-coding-interview-e52072841.html), Ch.4 | Trees & Graphs pages 100 - 107

- Read pages 100 - 107
- Implement 3 of the Interview Challenges found on pages 109 - 111

### Challenge

Ask a mentor, volunteer, or other learner for a code review of your Tree implementation.

### Check for Understanding

Create a cheat sheet about the types of trees, binary tree traversal, binary heaps, tries, graphs, and graph search.
