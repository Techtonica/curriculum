# Red-Black Trees: Mastering Self-Balancing Binary Search Trees

## What You'll Discover
- The fascinating world of self-balancing trees
- How Red-Black Trees maintain perfect balance automatically
- Real-world applications that power your favorite software
- Hands-on implementation and visualization techniques

## ⏰ Time Commitment

**Total Time: 4-6 hours**
- Reading & Theory: 2 hours
- Hands-on Activities: 2-3 hours  
- Practice Problems: 1-2 hours

_**Take breaks! Complex data structures need time to sink in.**_

## 🔗 Prerequisites
- **[Trees](https://github.com/Techtonica/curriculum/blob/main/data-structures/trees.md)**
- **[Recursion](https://github.com/Techtonica/curriculum/tree/main/recursion)**

## 🎯 Motivation
Imagine you're building a contact app. With a regular binary search tree, if users add contacts in alphabetical order, your tree becomes a glorified linked list - searches take forever! 

Red-Black Trees solve this elegantly. They're the secret sauce behind:
- **Java's TreeMap and TreeSet** - Lightning-fast sorted collections
- **C++ STL's map and set** - The backbone of competitive programming
- **Linux's Completely Fair Scheduler** - How your computer decides which programs run when
- **Database indexing systems** - Making your queries blazingly fast

### The Real-World Impact
When Netflix recommends your next binge-watch or when Google Maps finds the fastest route home, balanced trees like Red-Black Trees are working behind the scenes, ensuring operations stay fast even with millions of data points.

## 🎯 Learning Objectives
By the end of this lesson, you'll be able to:

1. **Explain** the five fundamental properties that make a Red-Black Tree special
2. **Visualize** how rotations maintain tree balance during insertions and deletions  
3. **Implement** a working Red-Black Tree with insertion operations
4. **Analyze** why Red-Black Trees guarantee O(log n) performance
5. **Compare** Red-Black Trees with other self-balancing alternatives
6. **Apply** Red-Black Tree concepts to solve real-world problems

## 📖 Specific Things to Learn

### Core Concepts

#### 1. The Five Sacred Rules of Red-Black Trees

Every Red-Black Tree must follow these non-negotiable rules:

1. **Every node is either red or black**
2. **The root is always black**
3. **All leaves (NIL nodes) are black**
4. **Red nodes cannot have red children** (no two red nodes can be adjacent)
5. **Every path from root to leaf contains the same number of black nodes**

#### 2. Understanding Tree Rotations

Rotations are the magic that keeps trees balanced. Think of them as carefully choreographed dance moves:

<details>
<summary>🔄 Left Rotation Implementation</summary>

```javascript
function leftRotate(tree, x) {
    // Store the right child - this will become the new root of this subtree
    let y = x.right;
    
    // Move y's left subtree to become x's right subtree
    x.right = y.left;
    if (y.left !== null) {
        y.left.parent = x;
    }
    
    // Update y's parent to point to x's current parent
    y.parent = x.parent;
    
    // Update x's parent to point to y instead of x
    if (x.parent === null) {
        tree.root = y;  // y becomes the new root
    } else if (x === x.parent.left) {
        x.parent.left = y;
    } else {
        x.parent.right = y;
    }
    
    // Make x the left child of y
    y.left = x;
    x.parent = y;
}
```
</details>

<details>
<summary>🔄 Right Rotation Implementation</summary>

```javascript
function rightRotate(tree, y) {
    // Store the left child - this will become the new root of this subtree
    let x = y.left;
    
    // Move x's right subtree to become y's left subtree
    y.left = x.right;
    if (x.right !== null) {
        x.right.parent = y;
    }
    
    // Update x's parent to point to y's current parent
    x.parent = y.parent;
    
    // Update y's parent to point to x instead of y
    if (y.parent === null) {
        tree.root = x;  // x becomes the new root
    } else if (y === y.parent.left) {
        y.parent.left = x;
    } else {
        y.parent.right = x;
    }
    
    // Make y the right child of x
    x.right = y;
    y.parent = x;
}
```
</details>

#### 3. Node Structure and Basic Operations

<details>
<summary>🏗️ Red-Black Tree Node Class</summary>

```javascript
class RBNode {
    constructor(data) {
        this.data = data;
        this.color = 'RED';  // New nodes start as red
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    
    // Helper method to check if node is red
    isRed() {
        return this.color === 'RED';
    }
    
    // Helper method to check if node is black
    isBlack() {
        return this.color === 'BLACK';
    }
    
    // Get the grandparent of this node
    grandparent() {
        if (this.parent && this.parent.parent) {
            return this.parent.parent;
        }
        return null;
    }
    
    // Get the uncle of this node (parent's sibling)
    uncle() {
        const gp = this.grandparent();
        if (!gp) return null;
        
        if (this.parent === gp.left) {
            return gp.right;
        } else {
            return gp.left;
        }
    }
}
```
</details>

#### 4. The Insertion Algorithm

Insertion in Red-Black Trees happens in two phases:
1. **Standard BST insertion** (insert as red node)
2. **Fix any violations** of Red-Black properties

<details>
<summary>🔧 Complete Insertion Implementation</summary>

```javascript
class RedBlackTree {
    constructor() {
        this.root = null;
    }
    
    insert(data) {
        // Phase 1: Standard BST insertion
        const newNode = new RBNode(data);
        
        if (!this.root) {
            this.root = newNode;
            newNode.color = 'BLACK';  // Root must be black
            return;
        }
        
        // Find the correct position
        let current = this.root;
        let parent = null;
        
        while (current) {
            parent = current;
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return; // Duplicate values not allowed
            }
        }
        
        // Insert the new node
        newNode.parent = parent;
        if (data < parent.data) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
        
        // Phase 2: Fix any Red-Black violations
        this.fixInsertViolations(newNode);
    }
    
    fixInsertViolations(node) {
        // Continue until we reach root or parent is black
        while (node !== this.root && node.parent.isRed()) {
            const parent = node.parent;
            const grandparent = node.grandparent();
            const uncle = node.uncle();
            
            if (parent === grandparent.left) {
                // Parent is left child of grandparent
                if (uncle && uncle.isRed()) {
                    // Case 1: Uncle is red - recolor
                    parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    grandparent.color = 'RED';
                    node = grandparent;
                } else {
                    // Uncle is black or null
                    if (node === parent.right) {
                        // Case 2: Node is right child - left rotate
                        node = parent;
                        this.leftRotate(node);
                    }
                    // Case 3: Node is left child - recolor and right rotate
                    node.parent.color = 'BLACK';
                    node.grandparent().color = 'RED';
                    this.rightRotate(node.grandparent());
                }
            } else {
                // Parent is right child of grandparent (mirror cases)
                if (uncle && uncle.isRed()) {
                    parent.color = 'BLACK';
                    uncle.color = 'BLACK';
                    grandparent.color = 'RED';
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        node = parent;
                        this.rightRotate(node);
                    }
                    node.parent.color = 'BLACK';
                    node.grandparent().color = 'RED';
                    this.leftRotate(node.grandparent());
                }
            }
        }
        
        // Ensure root is always black
        this.root.color = 'BLACK';
    }
}
```
</details>

## 🎮 Hands-On Activities

### Activity 1: Visualizing Red-Black Properties (30 minutes)

**Goal**: Build intuition for what makes a tree "Red-Black compliant"

1. **Draw these trees and identify which ones are valid Red-Black Trees:**

   Tree A:
   ```
        8(B)
       /    \
     4(R)   12(R)
    /   \   /    \
   2(B) 6(B) 10(B) 14(B)
   ```

   Tree B:
   ```
        10(B)
       /     \
     5(R)   15(B)
    /   \      \
   3(R) 7(R)   18(R)
   ```

   Tree C:
   ```
        20(B)
       /     \
     10(R)   30(R)
    /   \    /    \
   5(R) 15(B) 25(R) 35(B)
   ```

2. **For invalid trees, explain which rule they violate**
3. **Practice counting black-height for each path**

**Answer Key** (for instructors):
- Tree A: ✅ Valid - follows all Red-Black properties
- Tree B: ❌ Invalid - violates Rule 4 (red node 5 has red children 3 and 7)
- Tree C: ❌ Invalid - violates Rule 4 (red node 10 has red child 5, red node 30 has red child 25)


### Activity 2: Step-by-Step Insertion Walkthrough (45 minutes)

**Goal**: Master the insertion algorithm by tracing through examples

Start with an empty Red-Black Tree and insert these values in order: `10, 5, 15, 3, 7, 12, 18, 1`

For each insertion:

1. Show the tree after standard BST insertion
2. Identify any Red-Black violations
3. Apply the appropriate fix (recoloring or rotation)
4. Draw the final tree state


<details>
<summary>💡 Insertion Walkthrough Helper Code</summary>

```javascript
// Helper function to visualize tree state
function printTree(node, prefix = "", isLast = true) {
if (node === null) return;

console.log(prefix + (isLast ? "└── " : "├── ") + 
            node.data + "(" + node.color[0] + ")");

const children = [];
if (node.left) children.push([node.left, false]);
if (node.right) children.push([node.right, true]);

children.forEach(([child, isLastChild], index) => {
    const isLastInGroup = index === children.length - 1;
    printTree(child, 
             prefix + (isLast ? "    " : "│   "), 
             isLastChild && isLastInGroup);
  });
}

// Usage after each insertion
const tree = new RedBlackTree();
tree.insert(10);
console.log("After inserting 10:");
printTree(tree.root);
```
</details>

### Activity 3: Build a Red-Black Tree Validator (60 minutes)

**Goal**: Implement a function that checks if a tree satisfies all Red-Black properties

<details>
<summary>🔍 Tree Validator Implementation</summary>

```javascript
class RBTreeValidator {
static validate(tree) {
if (!tree.root) return { valid: true, message: "Empty tree is valid" };
    const results = {
        rule1: this.checkRule1(tree.root),
        rule2: this.checkRule2(tree.root),
        rule3: this.checkRule3(tree.root),
        rule4: this.checkRule4(tree.root),
        rule5: this.checkRule5(tree.root)
    };
    
    const allValid = Object.values(results).every(r => r.valid);
    
    return {
        valid: allValid,
        details: results,
        message: allValid ? "Tree is a valid Red-Black Tree!" : "Tree violates Red-Black properties"
    };
}

// Rule 1: Every node is either red or black
static checkRule1(node) {
    if (!node) return { valid: true };
    
    const validColor = node.color === 'RED' || node.color === 'BLACK';
    if (!validColor) {
        return { valid: false, message: \`Node \${node.data} has invalid color: \${node.color}\` };
    }
    
    const leftCheck = this.checkRule1(node.left);
    const rightCheck = this.checkRule1(node.right);
    
    return {
        valid: leftCheck.valid && rightCheck.valid,
        message: leftCheck.message || rightCheck.message
    };
}

// Rule 2: Root is black
static checkRule2(root) {
    return {
        valid: root.color === 'BLACK',
        message: root.color === 'BLACK' ? null : "Root must be black"
    };
}

// Rule 4: Red nodes cannot have red children
static checkRule4(node) {
    if (!node) return { valid: true };
    
    if (node.color === 'RED') {
        const leftRed = node.left && node.left.color === 'RED';
        const rightRed = node.right && node.right.color === 'RED';
        
        if (leftRed || rightRed) {
            return { 
                valid: false, 
                message: \`Red node \${node.data} has red child\` 
            };
        }
    }
    
    const leftCheck = this.checkRule4(node.left);
    const rightCheck = this.checkRule4(node.right);
    
    return {
        valid: leftCheck.valid && rightCheck.valid,
        message: leftCheck.message || rightCheck.message
    };
}

// Rule 5: All paths have same black height
static checkRule5(node) {
    const getBlackHeight = (n) => {
        if (!n) return 1; // NIL nodes are black
        
        const leftHeight = getBlackHeight(n.left);
        const rightHeight = getBlackHeight(n.right);
        
        if (leftHeight === -1 || rightHeight === -1 || leftHeight !== rightHeight) {
            return -1; // Invalid
        }
        
        return leftHeight + (n.color === 'BLACK' ? 1 : 0);
    };
    
    const height = getBlackHeight(node);
    return {
        valid: height !== -1,
        message: height === -1 ? "Black heights are not equal on all paths" : null
    };
  }
}
```
</details>

### Activity 4: Performance Comparison Lab (45 minutes)

**Goal**: See the performance benefits of Red-Black Trees in action

Create a performance testing suite that compares:

- Regular BST with sorted input (worst case)
- Red-Black Tree with sorted input
- Both trees with random input


<details>
<summary>⚡ Performance Testing Code</summary>

```javascript
class PerformanceTester {
static testInsertion(TreeClass, data, label) {
const tree = new TreeClass();
const startTime = performance.now();

    data.forEach(value => tree.insert(value));
    
    const endTime = performance.now();
    const height = this.getHeight(tree.root);
    
    console.log(\`\${label}:\`);
    console.log(\`  Time: \${(endTime - startTime).toFixed(2)}ms\`);
    console.log(\`  Height: \${height}\`);
    console.log(\`  Nodes: \${data.length}\`);
    console.log(\`  Efficiency: \${(height / Math.log2(data.length)).toFixed(2)}x optimal\`);
    console.log('');
    
    return { time: endTime - startTime, height, nodes: data.length };
}

static getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
}

static runComparison() {
    const sortedData = Array.from({length: 1000}, (_, i) => i + 1);
    const randomData = [...sortedData].sort(() => Math.random() - 0.5);
    
    console.log("=== PERFORMANCE COMPARISON ===\n");
    
    console.log("📈 SORTED INPUT (Worst Case for Regular BST):");
    this.testInsertion(BinarySearchTree, sortedData, "Regular BST");
    this.testInsertion(RedBlackTree, sortedData, "Red-Black Tree");
    
    console.log("🎲 RANDOM INPUT:");
    this.testInsertion(BinarySearchTree, randomData, "Regular BST");
    this.testInsertion(RedBlackTree, randomData, "Red-Black Tree");
  }

}

// Run the comparison
PerformanceTester.runComparison();
```
</details>

## 🧠 Practice Problems

### Problem 1: Red-Black Tree Detective

Given a tree representation, determine if it's a valid Red-Black Tree and explain your reasoning.

### Problem 2: Insertion Sequence Reconstruction

Given a final Red-Black Tree, determine a possible insertion sequence that could have created it.

### Problem 3: Rotation Counter

Implement a modified Red-Black Tree that counts the total number of rotations performed during a series of insertions.

## 🎯 Key Takeaways

- **Red-Black Trees guarantee O(log n) operations** even in worst-case scenarios
- **The five rules work together** to maintain balance automatically
- **Rotations and recoloring** are the tools that fix violations
- **Real-world applications** make Red-Black Trees incredibly valuable
- **Understanding the "why"** behind each rule helps with implementation


## 🚀 Next Steps

Ready to level up? Explore these advanced topics:

- **Red-Black Tree Deletion** - More complex but follows similar patterns
- **AVL Trees** - Another self-balancing approach with stricter balance
- **B-Trees** - The database world's favorite balanced tree
- **Splay Trees** - Self-adjusting trees that bring frequently accessed items to the top


*Remember: Data structures are tools to solve problems. Focus on understanding when and why to use Red-Black Trees, not just how to implement them!*
