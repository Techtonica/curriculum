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

- Imagine trying to find a specific file on your computer if all your folders were just one long list. Or think about how a search engine quickly suggests words as you type. These kinds of problems are incredibly difficult with simple lists, but they become efficient and manageable with a data structure called a **Tree**.

- Trees are everywhere in computer science:

  - **File Systems:** How your operating system organizes folders and files.
  - **Databases:** How information is indexed and retrieved quickly.
  - **Web Development:** Representing the structure of HTML documents (DOM tree).
  - **Networking:** Routing decisions.
  - **Artificial Intelligence:** Decision trees.
  - **Compilers:** Representing code structure.

- Trees are the type of data structure that will allow you to store and process objects and tasks dealing with numbers, strings and everything in between. The motivation here is to understand that a tree is a type of data structure that represents data in a top down arrangement, similar to a hierarchy.

- https://google.com uses a type of tree called a 'trie' to auto-complete what you are typing into the search bar. By seeing the first few letters you've typed, it can check it's record tree of possible letters that can come after. So if you type "how do I", their record tree for "how do I" has child nodes each containing a possible following set of characters, like "learn to draw" or "tie a tie" or "build a shelf". The same can be said for auto-complete in many texting apps.

- When records are kept in order in a binary search tree (or BST), everything on one side of any branch is a lower value, and everything on the other side is a higher value, so finding something again is extremely efficient.

- Companies that care about spacial positioning are likely to use something called quadtrees or octrees which are the 2d & 3d parallels of a BST (so you may see this used for optimizing physics simulations e.g. in game engines like [Unity](https://unity3d.com/) and [Unreal](https://www.unrealengine.com/en-US/unreal-engine-5).)

- [Agari](https://www.agari.com/) used [Radix tries](https://en.wikipedia.org/wiki/Radix_tree) to optimize their IP address search engine - their efficiency went from 0(n) (searching an array) to O(log n).

Understanding trees is key to building efficient and scalable applications, and it's a fundamental concept that will deepen your understanding of how many complex systems work under the hood.

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

### What are Trees?

A tree data structure is a way to organize data in a hierarchical (parent-child) manner, unlike linear structures like arrays or linked lists. It's like a family tree or the folder structure on your computer.

- The very first item is the "grandparent" or "root."
- Each item can have "children" (items below it).
- Each item has only one "parent" (the item directly above it), except for the root.

### Basic Tree Terminology

Before we dive into specific types of trees, let's get familiar with some common terms:

- **Node:** Each individual item or element in the tree.
- **Root:** The topmost node in a tree. It has no parent.
- **Child:** A node directly connected to another node when moving away from the root.
- **Parent:** A node that has one or more children directly connected to it.
- **Sibling:** Nodes that share the same parent.
- **Leaf (or External Node):** A node that has no children. It's at the "end" of a branch.
- **Internal Node:** A node that has at least one child.
- **Edge:** The link or connection between two nodes.
- **Path:** A sequence of connected nodes from one node to another.
- **Depth of a Node:** The number of edges from the root to that node. The root has a depth of 0.
- **Height of a Node:** The number of edges on the longest path from that node to a leaf.
- **Height of a Tree:** The height of its root node.
- **Subtree:** A tree formed by a node and all its descendants.

### Binary Trees

A **Binary Tree** is a special type of tree where each node can have at most two children, typically referred to as the "left child" and the "right child."

![binary-tree](https://github.com/user-attachments/assets/28959f8a-3c87-4943-b79b-8eff5da42d67)

Animation Credit: [4 Ways To Traverse Binary Trees](https://dev.to/abdisalan_js/4-ways-to-traverse-binary-trees-with-animations-5bi5)

#### Types of Binary Trees:

- **Full Binary Tree:** Every node has either 0 or 2 children. No node has only one child.
- **Complete Binary Tree:** All levels are completely filled, except possibly the last level, which is filled from left to right.
- **Perfect Binary Tree:** All internal nodes have two children, and all leaf nodes are at the same level. It's both full and complete.
- **Skewed Binary Tree:** All nodes have only one child, forming a single long chain (either left-skewed or right-skewed).

#### Tree Traversal Methods:

How do we visit every node in a tree? There are a few common ways:

- **In-order Traversal (Left -> Root -> Right):**
  - Visit the left subtree.
  - Visit the current node (root).
  - Visit the right subtree.
  - _Useful for Binary Search Trees to get sorted output._
- **Pre-order Traversal (Root -> Left -> Right):**
  - Visit the current node (root).
  - Visit the left subtree.
  - Visit the right subtree.
  - _Useful for creating a copy of the tree._
- **Post-order Traversal (Left -> Right -> Root):**
  - Visit the left subtree.
  - Visit the right subtree.
  - Visit the current node (root).
  - _Useful for deleting a tree._
- **Level-order Traversal (Breadth-First Search - BFS):**
  - Visit nodes level by level, from left to right.
  - _Often implemented using a queue._

### Binary Search Trees (BSTs)

A **Binary Search Tree (BST)** is a special kind of binary tree that keeps its nodes in a specific order, making searching, insertion, and deletion operations very efficient.

#### Key Property of a BST:

For every node in a BST:

- All values in its **left subtree** are **less than** the node's value.
- All values in its **right subtree** are **greater than** the node's value.
- There are no duplicate values.

#### Why are BSTs useful?

Imagine looking up a word in a dictionary. You don't start from 'A' every time; you open it roughly where the word should be. BSTs work similarly, allowing you to quickly narrow down your search.

![binary-search-tree-sorted-array-animation (1)](https://github.com/user-attachments/assets/5a7e5213-8067-448c-a8fe-06195c23d73f)

Animation Credit: [Math Warehouse](https://www.mathwarehouse.com/programming/gifs/binary-search-tree.php)

#### Basic Operations:

- **Insertion:** To insert a new value, you start at the root and compare the new value with the current node's value. If it's smaller, go left; if larger, go right. Repeat until you find an empty spot (a `null` child pointer) and insert the new node there.
- **Search:** To find a value, you follow the same comparison logic as insertion. If the value matches the current node, you found it! If it's smaller, go left; if larger, go right. If you hit a `null` pointer, the value isn't in the tree.
- **Deletion:** This is the trickiest operation, as you need to maintain the BST property. There are three main cases:
  1.  **Deleting a Leaf Node:** Simply remove it.
  2.  **Deleting a Node with One Child:** Replace the node with its child.
  3.  **Deleting a Node with Two Children:** Find the "in-order successor" (the smallest value in the right subtree) or "in-order predecessor" (the largest value in the left subtree), replace the node's value with it, and then delete the successor/predecessor node (which will fall into case 1 or 2).

#### Time Complexity:

- **Average Case (for balanced BSTs):** O(log n) for search, insertion, and deletion. This is very fast!
- **Worst Case (for skewed BSTs):** O(n). If you insert elements in strictly increasing or decreasing order, the BST can become a linked list, losing its efficiency.

#### Self-Balancing BSTs:

To avoid the worst-case O(n) scenario, there are advanced BSTs that automatically "balance" themselves after insertions or deletions. Examples include:

- **AVL Trees:** Ensure that the height difference between the left and right subtrees of any node is at most 1.
- **Red-Black Trees:** Use "coloring" rules to maintain balance, guaranteeing O(log n) operations.

### Heaps

A **Heap** is a specialized tree-based data structure that satisfies the "heap property." It's typically implemented as a **complete binary tree**.

#### Heap Property:

- **Max-Heap:** For any given node `i`, the value of node `i` is greater than or equal to the value of its children. The largest element is always at the root.
- **Min-Heap:** For any given node `i`, the value of node `i` is less than or equal to the value of its children. The smallest element is always at the root.

#### Why are Heaps useful?

Heaps are fantastic for quickly finding the minimum or maximum element, and they're the backbone of **Priority Queues** (where elements are retrieved based on priority, not just insertion order) and the **Heap Sort** algorithm.

![Heap_sort_example](https://github.com/user-attachments/assets/ac7ec786-7b45-4d03-a3d6-3f807328f8a1)

Animation Credit: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Heap_sort_example.gif)

#### Key Operations:

- **Insertion:** Add a new element to the end of the heap (maintaining completeness), then "heapify-up" (bubble up) the element by swapping it with its parent until the heap property is restored.
- **Deletion (of Root):** Remove the root element (the max/min). Replace it with the last element in the heap, then "heapify-down" (bubble down) the new root by swapping it with its largest/smallest child until the heap property is restored.
- **`buildHeap`:** Convert an arbitrary array into a heap.

### Tries (Prefix Trees / Retrieval Trees)

A **Trie** (pronounced "try," from "retrieval") is a tree-like data structure used for efficient retrieval of keys in a dataset of strings. It's particularly good for problems involving prefixes.

#### How it Works:

- Each node in a Trie represents a character.
- The path from the root to a node represents a prefix or a complete word.
- Children of a node share a common prefix (the path from the root to their parent).
- Nodes often have a boolean flag indicating if they mark the end of a valid word.

#### Why are Tries useful?

Think about features like:

- **Autocomplete:** As you type, a Trie can quickly suggest words based on your prefix.
- **Spell Checker:** Efficiently check if a word exists in a dictionary.
- **IP Routing:** Used in networking to find the longest prefix match for an IP address.

![trie_gif](https://github.com/user-attachments/assets/2468b257-d346-4e1f-8cfb-6dad28fceabc)

#### Basic Operations:

- **Insertion:** To insert a word, you traverse the Trie character by character. If a character's node doesn't exist, you create it. Mark the last character's node as the end of a word.
- **Search:** To search for a word, you traverse the Trie character by character. If you can't find a character's node along the path, the word doesn't exist. If you reach the end of the word's path and the node is marked as a word end, the word exists.
- **Prefix Search:** Similar to search, but you just check if the prefix path exists in the Trie.

### B-Trees

**B-Trees** are self-balancing tree data structures that are optimized for systems that read and write large blocks of data, like disk storage. Unlike binary trees, B-tree nodes can have many children (more than two).

#### Why are B-Trees important?

- **Databases:** They are the most common data structure for database indexes (e.g., in SQL databases like PostgreSQL, MySQL).
- **File Systems:** Used in file systems (like NTFS, HFS+) to organize files and directories.

The key idea is to minimize the number of disk I/O operations. Since reading from disk is much slower than reading from memory, B-trees are designed to store a lot of keys in each node, reducing the "height" of the tree and thus the number of disk reads needed to find data.

![B-Tree](https://github.com/user-attachments/assets/ba2f06f2-4827-4701-a558-8f1359d65978)

#### Key Properties:

- **Order (m):** Each node can have up to `m` children.
- **Many Keys per Node:** Each node can store a large number of keys (and pointers to children).
- **Self-Balancing:** Like AVL or Red-Black trees, B-trees automatically adjust their structure to remain balanced after insertions and deletions.
- **All Leaves at Same Level:** All leaf nodes are at the same depth, ensuring that all searches take roughly the same amount of time.

When you search for data in a database, the database system uses a B-tree index to quickly locate the disk block where your data resides, minimizing slow disk access.

### When to Use Which Tree?

- **Binary Search Tree (BST):** Good for in-memory data where you need fast search, insert, delete, and sorted traversal. Be mindful of balance!
- **Heap:** Perfect for implementing priority queues, finding min/max elements quickly, and sorting (Heap Sort).
- **Trie:** Ideal for string-based operations like autocomplete, spell checking, and dictionary lookups where prefixes are important.
- **B-Tree:** The go-to for disk-based data storage, like database indexes and file systems, where minimizing disk I/O is critical.

### Independent Practice

- [Cracking the Coding Interview 6th Ed.](https://www.pdfdrive.com/cracking-the-coding-interview-e52072841.html), Ch.4 | Trees & Graphs pages 100 - 107
  - Read pages 100 - 107
  - Implement 3 of the Interview Challenges found on pages 109 - 111
- **Visualize:** Use online tools like VisuAlgo or Data Structure Visualizations by David Galles to see how different tree operations (insertion, deletion, traversal) work in real-time. This is incredibly helpful for understanding.
- **Implement a Basic BST:** Try to code a simple Binary Search Tree from scratch in your chosen programming language. Focus on insertion, search, and the three deletion cases.
- **Implement a Min/Max Heap:** Build a basic heap and practice inserting elements and extracting the min/max.
- **Solve Problems:** Look for tree-related problems on platforms like LeetCode (e.g., "Validate Binary Search Tree," "Binary Tree Inorder Traversal," "Kth Largest Element in a Stream" for heaps, "Implement Trie (Prefix Tree)").
- **Explore Self-Balancing Trees:** Once you're comfortable with basic BSTs, research AVL Trees or Red-Black Trees to understand how they maintain balance. You don't necessarily need to implement them from scratch right away, but understanding the concepts is valuable.
- **Read More:** Dive deeper into specific tree types that pique your interest. There are many great articles and videos online.

### Challenge

Ask a mentor, volunteer, or other learner for a code review of your Tree implementation.

### Check for Understanding

Create a cheat sheet about the types of trees, binary tree traversal, binary heaps, tries, graphs, and graph search.
