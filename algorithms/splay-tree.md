# Splay Tree Data Structure

### Time Estimate
- **Reading Time**: 45-60 minutes
- **Completing Activities**: 2-3 hours
- **Total Time**: 3-4 hours

### Prerequisites
Before diving into Splay Trees, you should be comfortable with:
- [Binary Search Trees](https://github.com/Techtonica/curriculum/blob/main/data-structures/trees.md#binary-search-trees-bsts)
- [Tree Traversal](https://github.com/Techtonica/curriculum/blob/main/data-structures/trees.md#what-are-trees)
- [Recursion](https://github.com/Techtonica/curriculum/tree/main/recursion)
- [Big O Notation](https://github.com/Techtonica/curriculum/blob/main/runtime-complexity/runtime-complexity.md)

### Motivation

Imagine you're building a music streaming app. Some songs get played way more often than others - think of that one song everyone's obsessed with this month. Wouldn't it be great if your data structure could automatically keep the most popular songs easy to access?

That's exactly what Splay Trees do! They're like having a smart librarian who automatically moves the books you use most to the front shelf. Every time you access a piece of data, the Splay Tree reorganizes itself to make that data faster to find next time.

Real-world applications include:
- **Caching systems** - Frequently accessed data stays at the top
- **Compiler optimization** - Recently used variables get priority
- **Network routing** - Popular routes become more efficient
- **Database indexing** - Hot data gets faster access

### Objectives

By the end of this lesson, you will be able to:

1. **Explain** what makes Splay Trees unique compared to regular Binary Search Trees
2. **Implement** the three types of splay operations (Zig, Zig-Zig, Zig-Zag)
3. **Code** insertion, deletion, and search operations for Splay Trees
4. **Analyze** the amortized time complexity and understand why it matters
5. **Decide** when Splay Trees are the right choice for a problem

### Specific Things to Learn

#### Core Concepts
- **Self-adjusting property**: How trees reorganize automatically
- **Splaying operation**: The heart of how Splay Trees work
- **Amortized analysis**: Why average performance matters more than worst-case

#### Technical Skills
- **Tree rotations**: Left and right rotations for restructuring
- **Splay cases**: Zig, Zig-Zig, and Zig-Zag scenarios
- **Implementation patterns**: Recursive vs iterative approaches

#### Problem-Solving Applications
- **Locality of reference**: When recent access predicts future access
- **Cache-friendly algorithms**: Designing for real-world performance
- **Trade-off analysis**: Balancing simplicity vs guaranteed performance

## What is a Splay Tree?

A Splay Tree is a self-adjusting binary search tree where recently accessed elements are moved to the root through a process called "splaying." Think of it as a tree that learns from your usage patterns and adapts to make your most common operations faster.

### Key Characteristics

```javascript
// Basic Splay Tree Node
class SplayNode {
    constructor(key, value = null) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
```

**What makes Splay Trees special:**

- No explicit balancing information (no height or color fields)
- Every access operation triggers a splay
- Recently accessed nodes bubble up to the root
- Simple to implement compared to AVL or Red-Black trees


## The Splaying Operation

Splaying is the magic that makes Splay Trees work. It's a series of tree rotations that moves a target node to the root position.

### Three Splay Cases

#### 1. Zig (Terminal Case)

When the target node is a direct child of the root.

```javascript
// Simple rotation when node is child of root
function zig(node) {
    if (node.parent.left === node) {
        return rotateRight(node.parent);
    } else {
        return rotateLeft(node.parent);
    }
}
```

#### 2. Zig-Zig (Same Direction)

When node and parent are both left children or both right children.

<details><summary>Zig-Zig Implementation</summary>

```javascript
function zigZig(node) {
    // Both node and parent are left children
    if (node.parent.left === node && 
        node.parent.parent.left === node.parent) {
        
        // First rotate grandparent with parent
        rotateRight(node.parent.parent);
        // Then rotate parent with node
        return rotateRight(node.parent);
    }
    // Both node and parent are right children
    else if (node.parent.right === node && 
             node.parent.parent.right === node.parent) {
        
        // First rotate grandparent with parent
        rotateLeft(node.parent.parent);
        // Then rotate parent with node
        return rotateLeft(node.parent);
    }
}
```

</details>

#### 3. Zig-Zag (Opposite Directions)

When node and parent are in opposite directions (one left, one right).

<details><summary>Zig-Zag Implementation</summary>

```javascript
function zigZag(node) {
    // Node is right child, parent is left child
    if (node.parent.right === node && 
        node.parent.parent.left === node.parent) {
        
        // First rotate parent with node
        rotateLeft(node.parent);
        // Then rotate grandparent with node
        return rotateRight(node.parent);
    }
    // Node is left child, parent is right child
    else if (node.parent.left === node && 
             node.parent.parent.right === node.parent) {
        
        // First rotate parent with node
        rotateRight(node.parent);
        // Then rotate grandparent with node
        return rotateLeft(node.parent);
    }
}
```

</details>

## Core Operations

### Search Operation

The search operation in a Splay Tree is unique because it modifies the tree structure.

<details><summary>Complete Search Implementation</summary>

```javascript
class SplayTree {
    constructor() {
        this.root = null;
    }
    
    search(key) {
        if (!this.root) return null;
        
        // First, perform standard BST search
        let current = this.root;
        let lastNode = null;
        
        while (current) {
            lastNode = current;
            if (key === current.key) {
                // Found the key, splay it to root
                this.root = this.splay(current);
                return current;
            } else if (key &lt; current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        
        // Key not found, splay the last accessed node
        if (lastNode) {
            this.root = this.splay(lastNode);
        }
        return null;
    }
    
    splay(node) {
        while (node.parent) {
            if (!node.parent.parent) {
                // Zig case
                node = this.zig(node);
            } else if ((node.parent.left === node) === 
                      (node.parent.parent.left === node.parent)) {
                // Zig-Zig case
                node = this.zigZig(node);
            } else {
                // Zig-Zag case
                node = this.zigZag(node);
            }
        }
        return node;
    }
}
```

</details>

### Insert Operation

Insertion combines standard BST insertion with splaying.

```javascript
insert(key, value = null) {
    if (!this.root) {
        this.root = new SplayNode(key, value);
        return;
    }
    
    // Standard BST insertion
    let current = this.root;
    let parent = null;
    
    while (current) {
        parent = current;
        if (key &lt; current.key) {
            current = current.left;
        } else if (key > current.key) {
            current = current.right;
        } else {
            // Key already exists, update and splay
            current.value = value;
            this.root = this.splay(current);
            return;
        }
    }
    
    // Create new node and link it
    const newNode = new SplayNode(key, value);
    newNode.parent = parent;
    
    if (key &lt; parent.key) {
        parent.left = newNode;
    } else {
        parent.right = newNode;
    }
    
    // Splay the new node to root
    this.root = this.splay(newNode);
}
```

### Delete Operation

<details><summary>Complete Delete Implementation</summary>

```javascript
delete(key) {
    const node = this.search(key);
    if (!node) return false;
    
    // Node is now at root due to search operation
    if (!node.left && !node.right) {
        // No children
        this.root = null;
    } else if (!node.left) {
        // Only right child
        this.root = node.right;
        this.root.parent = null;
    } else if (!node.right) {
        // Only left child
        this.root = node.left;
        this.root.parent = null;
    } else {
        // Two children - use predecessor
        const predecessor = this.findMax(node.left);
        
        // Replace node's key and value with predecessor's
        node.key = predecessor.key;
        node.value = predecessor.value;
        
        // Delete the predecessor (which has at most one child)
        this.deleteNode(predecessor);
    }
    
    return true;
}

findMax(node) {
    while (node.right) {
        node = node.right;
    }
    return node;
}

deleteNode(node) {
    const parent = node.parent;
    const child = node.left || node.right;
    
    if (child) {
        child.parent = parent;
    }
    
    if (parent) {
        if (parent.left === node) {
            parent.left = child;
        } else {
            parent.right = child;
        }
    }
}
```

</details>

## Time Complexity Analysis

### Amortized Analysis

Splay Trees don't guarantee O(log n) for individual operations, but they guarantee O(log n) **amortized** time complexity.

**What does "amortized" mean?**

- Individual operations might take O(n) time in worst case
- But over a sequence of m operations, total time is O(m log n)
- Average time per operation is O(log n)


### Why Amortized Analysis Matters

```javascript
// Example: Accessing elements in order
const tree = new SplayTree();
// Insert 1, 2, 3, 4, 5 (creates a linear tree)
for (let i = 1; i &lt;= 5; i++) {
    tree.insert(i);
}

// First access of 1 takes O(n) time
tree.search(1); // Expensive - travels down linear tree

// But subsequent accesses of 1 are O(1)
tree.search(1); // Fast - already at root
tree.search(1); // Fast - still at root
```

## Practical Applications

### 1. Caching System

<details><summary>Least Recently Used (LRU) Cache using Splay Tree</summary>

```javascript
class SplayCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.tree = new SplayTree();
        this.size = 0;
    }
    
    get(key) {
        const result = this.tree.search(key);
        if (result) {
            // Update access time
            result.value.lastAccessed = Date.now();
            return result.value.data;
        }
        return null;
    }
    
    put(key, data) {
        const existing = this.tree.search(key);
        if (existing) {
            existing.value.data = data;
            existing.value.lastAccessed = Date.now();
        } else {
            if (this.size >= this.capacity) {
                this.evictLeastRecentlyUsed();
            }
            
            this.tree.insert(key, {
                data: data,
                lastAccessed: Date.now()
            });
            this.size++;
        }
    }
    
    evictLeastRecentlyUsed() {
        // Find node with oldest lastAccessed time
        const oldest = this.findOldestNode(this.tree.root);
        if (oldest) {
            this.tree.delete(oldest.key);
            this.size--;
        }
    }
}
```

</details>

### 2. Compiler Symbol Table

```javascript
class SymbolTable {
    constructor() {
        this.tree = new SplayTree();
    }
    
    declareVariable(name, type, scope) {
        this.tree.insert(name, { type, scope, line: getCurrentLine() });
    }
    
    lookupVariable(name) {
        // Recently used variables get faster access
        return this.tree.search(name);
    }
}
```

## Activities

### Activity 1: Trace Through Splaying

**Time: 20 minutes**

Given this tree, trace through splaying node 1 to the root:

```plaintext
      5
     / \
    3   7
   / \   \
  2   4   8
 /
1
```

**Your task:**

1. Identify the splay operations needed
2. Draw the tree after each rotation
3. Verify that node 1 ends up at the root


<details><summary>Solution</summary>

**Step 1:** Node 1 needs Zig-Zig (both 1 and 2 are left children)

- First rotate 3 with 2
- Then rotate 2 with 1


**Step 2:** Continue splaying until 1 reaches root

- Apply Zig-Zag operations as needed


**Final tree:**

```plaintext
    1
     \
      2
       \
        3
       / \
      4   5
           \
            7
             \
              8
```

</details>

### Activity 2: Implement Basic Rotations

**Time: 30 minutes**

Implement the `rotateLeft` and `rotateRight` functions:

```javascript
function rotateLeft(node) {
    // Your implementation here
    // Remember to update parent pointers!
}

function rotateRight(node) {
    // Your implementation here
    // Remember to update parent pointers!
}
```

<details><summary>Solution</summary>

```javascript
function rotateLeft(node) {
    const rightChild = node.right;
    const parent = node.parent;
    
    // Rotate
    node.right = rightChild.left;
    if (rightChild.left) {
        rightChild.left.parent = node;
    }
    
    rightChild.left = node;
    node.parent = rightChild;
    
    // Update parent connection
    rightChild.parent = parent;
    if (parent) {
        if (parent.left === node) {
            parent.left = rightChild;
        } else {
            parent.right = rightChild;
        }
    }
    
    return rightChild;
}

function rotateRight(node) {
    const leftChild = node.left;
    const parent = node.parent;
    
    // Rotate
    node.left = leftChild.right;
    if (leftChild.right) {
        leftChild.right.parent = node;
    }
    
    leftChild.right = node;
    node.parent = leftChild;
    
    // Update parent connection
    leftChild.parent = parent;
    if (parent) {
        if (parent.left === node) {
            parent.left = leftChild;
        } else {
            parent.right = leftChild;
        }
    }
    
    return leftChild;
}
```

</details>

### Activity 3: Performance Comparison

**Time: 45 minutes**

Compare Splay Tree performance with regular BST:

<details><summary>Performance Test Framework</summary>

```javascript
function performanceTest() {
    const splayTree = new SplayTree();
    const bst = new BST();
    
    // Test data: some keys accessed frequently
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const hotKeys = [3, 7, 2]; // These will be accessed often
    
    // Insert all keys
    keys.forEach(key => {
        splayTree.insert(key);
        bst.insert(key);
    });
    
    // Simulate workload with locality of reference
    console.time('Splay Tree Hot Access');
    for (let i = 0; i &lt; 1000; i++) {
        const key = hotKeys[i % hotKeys.length];
        splayTree.search(key);
    }
    console.timeEnd('Splay Tree Hot Access');
    
    console.time('BST Hot Access');
    for (let i = 0; i &lt; 1000; i++) {
        const key = hotKeys[i % hotKeys.length];
        bst.search(key);
    }
    console.timeEnd('BST Hot Access');
    
    // Test random access
    console.time('Splay Tree Random Access');
    for (let i = 0; i &lt; 1000; i++) {
        const key = keys[Math.floor(Math.random() * keys.length)];
        splayTree.search(key);
    }
    console.timeEnd('Splay Tree Random Access');
    
    console.time('BST Random Access');
    for (let i = 0; i &lt; 1000; i++) {
        const key = keys[Math.floor(Math.random() * keys.length)];
        bst.search(key);
    }
    console.timeEnd('BST Random Access');
}
```

</details>**Questions to explore:**

1. When does the Splay Tree outperform regular BST?
2. What happens with random access patterns?
3. How does tree shape affect performance?


### Activity 4: Build a Word Frequency Counter

**Time: 60 minutes**

Create a program that counts word frequencies and automatically prioritizes common words:

```javascript
class WordCounter {
    constructor() {
        this.tree = new SplayTree();
    }
    
    addWord(word) {
        // Your implementation here
        // Hint: Use search to check if word exists
        // If it exists, increment count
        // If not, insert with count = 1
    }
    
    getCount(word) {
        // Your implementation here
        // This should be fast for frequently accessed words!
    }
    
    processText(text) {
        const words = text.toLowerCase().split(/\W+/);
        words.forEach(word => {
            if (word) this.addWord(word);
        });
    }
}
```

**Test your implementation:**

```javascript
const counter = new WordCounter();
counter.processText("the quick brown fox jumps over the lazy dog the fox is quick");

// These should be fast (recently accessed)
console.log(counter.getCount("the")); // 3
console.log(counter.getCount("fox")); // 2
console.log(counter.getCount("quick")); // 2
```


## When to Use Splay Trees

### ✅ Good Use Cases

- **Temporal locality**: Recent accesses predict future accesses
- **Caching systems**: LRU-style behavior wanted
- **Simple implementation**: Don't want complexity of balanced trees
- **Amortized performance**: Can tolerate occasional slow operations


### ❌ Avoid When

- **Worst-case guarantees needed**: Real-time systems
- **Uniform access patterns**: All keys accessed equally
- **Memory constraints**: Parent pointers add overhead
- **Concurrent access**: Not thread-safe without additional synchronization


### Decision Framework

Ask yourself:

1. Do I have locality of reference in my access patterns?
2. Can I tolerate occasional O(n) operations?
3. Is implementation simplicity important?
4. Do I need the tree to adapt to usage patterns?


If you answered "yes" to most questions, Splay Trees might be perfect for your use case!


## Summary

Splay Trees are fascinating data structures that blur the line between data structure and algorithm. They teach us that sometimes the best approach isn't to prevent worst-case scenarios, but to make them rare and recover from them quickly.

**Key takeaways:**

- Self-adjusting trees adapt to usage patterns
- Amortized analysis often matters more than worst-case
- Simple implementations can have sophisticated behavior
- Real-world performance depends on access patterns

The beauty of Splay Trees lies in their simplicity and adaptability - they're like having a data structure that learns from experience and gets better at what you use it for most.
