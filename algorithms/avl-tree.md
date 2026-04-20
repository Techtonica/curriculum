# Self-Balancing Adelson-Velsky and Landis (AVL) Tree

## Projected Time

- **Reading Time:** 30-45 minutes
- **Activities Time:** 60-90 minutes
- **Total Time:** 2-2.5 hours

- Lesson: 30 min
- Guided Practice: 20-30 min
- Independent Practice: 20 min
- Check for Understanding: 10-15 min

## Prerequisites

Here are topics that should be understood before this topic:

- **Binary Search Trees (BST):** Understanding how nodes are inserted, deleted, and searched in a BST.
  - [Data Structures: Trees](/data-structures/trees.md)
- **Recursion:** AVL rotations and traversals rely heavily on recursive thinking.
  - [Recursion](/recursion/recursion.md)
- **Time and Space Complexity (Big O Notation):** Understanding why balanced trees outperform unbalanced ones.
  - [Runtime Complexity](/runtime-complexity/runtime-complexity.md)

## Motivation

Imagine you're building a dictionary app that needs to look up words instantly. You choose a Binary Search Tree because insertions and lookups are O(log n), which is fast. But what happens if your words are inserted in alphabetical order? Your tree degrades into a linked list, and every lookup becomes O(n). Your app slows to a crawl.

This is exactly the problem AVL Trees solve. Named after inventors Georgy **A**delson-**V**elsky and Evgenii **L**andis (1962), an AVL tree is a self-balancing BST that automatically restructures itself to guarantee O(log n) performance for every operation, no matter what order data arrives.

In the real world, AVL trees (and their descendants) power:

- **Database indexing:** Fast record lookups even as data grows
- **Memory allocators:** Tracking free memory blocks efficiently
- **Network routers:** Maintaining fast routing tables

As a developer, understanding AVL trees gives you insight into how nearly every high-performance data retrieval system works under the hood.

## Objectives

**Participants will be able to:**

- Explain what a balance factor is and how it is calculated
- Identify when an AVL tree is unbalanced and which rotation to apply
- Implement the four AVL rotation types: Left, Right, Left-Right, and Right-Left
- Perform insertion and deletion on an AVL tree while maintaining balance
- Analyze why AVL trees guarantee O(log n) time complexity

## Specific Things to Learn

### Core Concepts

- **Height of a Node:** The number of edges on the longest path from a node to a leaf
- **Balance Factor:** `height(left subtree) - height(right subtree)`; must be -1, 0, or 1 for every node
- **AVL Property:** The invariant that every node in the tree must satisfy
- **Rotations:** The restructuring operations used to restore balance

### The Four Rotation Types

- **Left Rotation (LL):** Applied when the right subtree is too tall
- **Right Rotation (RR):** Applied when the left subtree is too tall
- **Left-Right Rotation (LR):** A double rotation for left-right imbalance
- **Right-Left Rotation (RL):** A double rotation for right-left imbalance

### Operations

- **Insertion:** Insert as in a BST, then walk back up and rebalance
- **Deletion:** Delete as in a BST, then walk back up and rebalance
- **Search:** Identical to BST search; benefits from the guaranteed balance

### Analysis Skills

- **Time Complexity:** Why O(log n) is guaranteed for insert, delete, and search
- **Space Complexity:** Understanding the overhead of storing height metadata
- **Trade-offs:** When to prefer AVL trees over Red-Black trees or other structures

## Materials

- [AVL Tree Visualizer - USFCA](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html) - Use this interactive tool during the Lesson and Guided Practice sections to watch rotations happen in real time.
- [AVL Trees - Programiz](https://www.programiz.com/dsa/avl-tree) - Read this before the Independent Practice. Pay special attention to the rotation diagrams.

### Video Resources

- [AVL Tree Rotations (YouTube)](https://youtu.be/u3OVSkuOdqI?si=u2RRmrLk4EjNABLi) - Watch this first to understand how all four rotation types work visually before reading the Lesson.
- [AVL Tree Insertion (YouTube)](https://youtu.be/f0BplF93TIA?si=VguD9gKsUlW1i3u4) - Watch this alongside Part A of the Guided Practice to see insertions and rotations animated step by step.
- [AVL Tree Deletion (YouTube)](https://youtu.be/237XbN_FBfQ?si=uLcc1-qClcUljIdS) - Watch this alongside Part B of the Guided Practice to see all three deletion cases explained with visuals.

## Lesson

A Binary Search Tree stores each node such that all values in the left subtree are smaller and all values in the right subtree are larger. Lookups are fast when the tree is short and bushy, but slow when it grows tall and thin.

An AVL tree maintains a **balance factor** at every node:

```
balance_factor = height(left_child) - height(right_child)
```

A balance factor of -1, 0, or 1 means the node is balanced. Anything outside this range triggers a **rotation**.

### The Four Rotations

**Left Rotation** - the right child takes the place of the unbalanced node:

```
    z                y
     \             / \
      y    →      z   x
       \
        x
```

**Right Rotation** - the left child takes the place of the unbalanced node:

```
      z            y
     /           /   \
    y    →      x     z
   /
  x
```

**Left-Right Rotation** - first rotate the left child left, then rotate the node right:

```
    z              z            x
   /              /           /   \
  y      →       x    →      y     z
   \            /
    x          y
```

**Right-Left Rotation** - first rotate the right child right, then rotate the node left:

```
  z              z               x
   \              \            /   \
    y     →        x    →     z     y
   /                \
  x                  y
```

> Rotation diagrams adapted from [Programiz - AVL Tree](https://www.programiz.com/dsa/avl-tree).

### Insertion

Insertion follows BST rules, then rebalances on the way back up the recursion:

```javascript
function insert(node, value) {
  // Step 1: Standard BST insert
  if (node === null) return new Node(value);
  if (value < node.value) node.left = insert(node.left, value);
  else if (value > node.value) node.right = insert(node.right, value);
  else return node; // duplicates not allowed

  // Step 2: Update height
  node.height = 1 + Math.max(height(node.left), height(node.right));

  // Step 3: Get balance factor
  const balance = getBalance(node);

  // Step 4: Apply the correct rotation
  if (balance > 1 && value < node.left.value) return rightRotate(node);       // Left-Left
  if (balance < -1 && value > node.right.value) return leftRotate(node);      // Right-Right
  if (balance > 1 && value > node.left.value) {                               // Left-Right
    node.left = leftRotate(node.left);
    return rightRotate(node);
  }
  if (balance < -1 && value < node.right.value) {                             // Right-Left
    node.right = rightRotate(node.right);
    return leftRotate(node);
  }

  return node;
}
```

### Helper Functions

```javascript
function height(node) {
  return node === null ? 0 : node.height;
}

function getBalance(node) {
  return node === null ? 0 : height(node.left) - height(node.right);
}

function rightRotate(z) {
  const y = z.left;
  const T3 = y.right;
  y.right = z;
  z.left = T3;
  z.height = 1 + Math.max(height(z.left), height(z.right));
  y.height = 1 + Math.max(height(y.left), height(y.right));
  return y;
}

function leftRotate(z) {
  const y = z.right;
  const T2 = y.left;
  y.left = z;
  z.right = T2;
  z.height = 1 + Math.max(height(z.left), height(z.right));
  y.height = 1 + Math.max(height(y.left), height(y.right));
  return y;
}
```
> Program borrowed from [Github](https://gist.github.com/helabenkhalfallah/f75853baf3196e8674cefa54695ee1cd//).

Be sure to use the [AVL Tree Visualizer](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html) to confirm your understanding of each rotation before moving on.

## Common Mistakes & Misconceptions

- **Forgetting to update height before checking balance.** Height must be recalculated bottom-up after every insertion or deletion; checking balance with a stale height produces wrong rotation decisions.
- **Applying only one rotation when two are needed.** Left-Right and Right-Left imbalances always require two rotations. Applying only one leaves the tree still unbalanced.
- **Confusing the different rotation cases.** LL/RR refer to the imbalance case; the actual rotation performed is the opposite direction 
    
    (LL imbalance is fixed by a Right Rotation, RR imbalance is fixed by a Left Rotation).
- **Assuming AVL trees and Red-Black trees are interchangeable.** AVL trees are more strictly balanced, making lookups slightly faster. Red-Black trees do fewer rotations on insert/delete, making writes slightly faster. Neither is universally better.
- **Thinking search changes.** AVL search is identical to BST search; the only difference is that balance is guaranteed, so worst-case depth is O(log n) instead of O(n).

## Guided Practice

Work through the following operations step by step. Each entry shows what happens after the operation, the resulting tree shape, and any rotation applied. Confirm each step using the [AVL Tree Visualizer](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html).


### Part A: Insertion: 
Given sequence: `[3, 2, 1, 4, 5, 6, 7, 16, 15, 14]`

This sequence is designed to trigger all four rotation types.

**Insert 3** → BST insert, root node. No rotation needed.
```
  3
```
Balance factors - 3: 0 ✓

**Insert 2** → BST insert to the left of 3. No rotation needed.
```
  3
 /
2
```
Balance factors - 3: +1 ✓, 2: 0 ✓

**Insert 1** → BST insert to the left of 2. Node 3 becomes unbalanced (BF = +2) and the imbalance is on the left of the left child. **LL case → Right Rotation on 3.**
```
Before:       After RR (Right Rotation):
  3                 2
 /                 / \
2                 1   3
/
1
```
Balance factors - 2: 0 ✓, 1: 0 ✓, 3: 0 ✓

**Insert 4** → BST insert to the right of 3. No rotation needed.
```
    2
   / \
  1   3
       \
        4
```
Balance factors - 2: 0 ✓, 1: 0 ✓, 3: -1 ✓, 4: 0 ✓

**Insert 5** → BST insert to the right of 4. Node 3 becomes unbalanced (BF = -2) and the imbalance is on the right of the right child. **RR case → Left Rotation on 3.**
```
Before:         After LR (Left Rotation):
    2                 2
   / \               / \
  1   3             1   4
       \               / \
        4             3   5
         \
          5
```
Balance factors - 2: 0 ✓, 1: 0 ✓, 4: 0 ✓, 3: 0 ✓, 5: 0 ✓

**Insert 6** → BST insert to the right of 5. Node 2 becomes unbalanced (BF = -2) and the imbalance is on the right of the right child. **RR case → Left Rotation on 2.**
```
Before:           After LR (Left Rotation):
    2                   4
   / \                 / \
  1   4               2   5
     / \             / \   \
    3   5           1   3   6
         \
          6
```
Balance factors - 4: 0 ✓, 2: 0 ✓, 5: -1 ✓, 1: 0 ✓, 3: 0 ✓, 6: 0 ✓

**Insert 7** → BST insert to the right of 6. Node 5 becomes unbalanced (BF = -2), imbalance on the right of the right child. **RR case → Left Rotation on 5.**
```
Before:               After LR (Left Rotation):
      4                     4
     / \                   / \
    2   5                 2   6
   / \   \               / \ / \
  1   3   6             1  3 5  7
           \
            7
```
Balance factors - 4: 0 ✓, 2: 0 ✓, 6: 0 ✓, 1: 0 ✓, 3: 0 ✓, 5: 0 ✓, 7: 0 ✓

**Insert 16** → BST insert to the right of 7. No rotation needed.
```
        4
       / \
      2   6
     / \ / \
    1  3 5  7
              \
              16
```
Balance factors - 4: 0 ✓, 6: -1 ✓, 7: -1 ✓, all others 0 ✓

**Insert 15** → BST insert to the left of 16. Node 7 becomes unbalanced (BF = -2) and the imbalance is on the left of the right child (16 has BF = +1). **RL case → Right Rotation on 16, then Left Rotation on 7.**
```
Before:       Step 1 - Right Rotate 16:    Step 2 - Left Rotate 7:
  7               7                             15
   \               \                           /  \
   16              15                         7   16
  /                  \
 15                  16
```
Balance factors - 15: 0 ✓, 7: 0 ✓, 16: 0 ✓

Full tree after inserting 15:
```
        4
       / \
      2   6
     / \ / \
    1  3 5  15
           /  \
          7   16
```
Balance factors - 4: 0 ✓, 6: -1 ✓, 15: 0 ✓, 7: 0 ✓, 16: 0 ✓

**Insert 14** → BST insert to the right of 7. Node 6 becomes unbalanced (BF = -2) and the imbalance is on the left of the right child **RL case → Right Rotation on 15, then Left Rotation on 6.**
```
Before:         Step 1: Right rotate 15     Step 2: Left rotate 6
        4                   4                       4
       / \                 / \                     / \
      2   6               2   6                   2   7
     / \ / \             / \ / \                 / \ / \
    1  3 5  15          1  3 5  7               1  3 6 15        
           /  \                  \                  /  / \
          7   16                 15                5  14  16
           \                     / \
            14                  14  16
```
Balance factors - 4: 0 ✓, 6: -1 ✓, 15: 0 ✓, 7: 0 ✓, 16: 0 ✓

And we are done!! :)

---

### Part B: Deletion

Deletion in AVL trees uses standard BST deletion rules, then walks back up and rebalances. There are three cases depending on the node being deleted.

**Case 1: Leaf Node (no children)**

Simply remove the node. Check ancestors for balance.

Starting tree:
```
        10
       /  \
      7    14
     / \  /  \
    5   8 12  17
   /    / \  /  \
  3   11  13 15  20
```
Delete 11 (leaf node, no children):
```
        10
       /  \
      7    14
     / \  /  \
    5   8 12  17
   /      \  /  \
  3       13 15  20
```
Balance factors all remain within -1 to +1. No rotation needed.

**Case 2: One Child (exactly one child)**

Replace the node with its only child.

Delete 12 (has one child: 13):
```
Before:               After delete(12):
        10                    10
       /  \                  /  \
      7    14               7    14
     / \  /  \             / \  /  \
    5   8 12  17          5   8 13  17
   /      \  /  \        /        /  \
  3       13 15  20     3        15  20
```
Node 13 takes 12's place. No rotation needed.

**Case 3: Two Children**

Replace the node's value with its in-order successor (smallest value in its right subtree), then delete that successor node instead.

Starting tree (back to original with all nodes):
```
        10
       /  \
      7    14
     / \  /  \
    5   8 12  17
   /   / \  /  \
  3  11  13 15  20
```
Delete 14 (has two children: 12 and 17). In-order successor of 14 is 15 (leftmost node in right subtree rooted at 17).

Step 1: Replace 14's value with 15. Step 2: Delete the original 15 node (a leaf).
```
After replacing and deleting:
        10
       /  \
      7    15
     / \  /  \
    5   8 12  17
   /   / \      \
  3  11  13     20
```
Now check balance factors. Node 7 has BF = +1 (left height 2, right height 1). Node 15 has BF = +1 (left h=3, right h=2). Node 10 has BF = 0. All valid, no rotation needed.

> If after deletion any node's BF becomes +2 or -2, apply the same rotation rules as insertion. Deletion can trigger rebalancing at multiple levels up to the root.

**Key difference between insertion and deletion:** A single insertion triggers at most one rotation. Deletion can trigger rotations all the way up to the root, so every ancestor must be checked.

## Independent Practice

Implement a complete AVL tree class in JavaScript with the following methods:

```javascript
class AVLTree {
  insert(value) { /* ... */ }
  delete(value) { /* ... */ }
  search(value) { /* returns true/false */ }
  inOrder()     { /* returns sorted array of all values */ }
}
```

**Requirements:**
1. `insert` and `delete` must maintain the AVL property after every operation
2. `inOrder` must return a sorted array, which you can use to verify your tree is a valid BST
3. Test insertion with at least these two sequences and confirm the tree stays balanced:
   - Sequential: `[1, 2, 3, 4, 5, 6, 7]`
   - Mixed: `[50, 20, 70, 10, 30, 60, 80, 5, 15]`
4. Test deletion on the Mixed sequence above by deleting `[20, 50, 10]` one at a time. After each deletion, call `inOrder()` to confirm the remaining values are still sorted and check that no node has a balance factor outside -1, 0, or 1.

## Challenge

You now have a working AVL tree. Try one of the following extensions, or explore the next topic listed at the end.

**Option A: Find the depth of the AVL tree**

- Implement a method `countNodesAtDepth(d)` that returns how many nodes exist at a given depth in the AVL tree.
Here 

**Option B: Go deeper with Red-Black Trees**

AVL trees are one family of self-balancing BSTs. Red-Black Trees are another, and they are what most standard libraries (like `std::map` in C++ and `TreeMap` in Java) actually use under the hood. They use a different balancing rule based on node color (red or black) instead of height, which allows fewer rotations on insert and delete at the cost of a slightly less strict balance. Read the [Red-Black Tree lesson](/data-structures/red-black-tree.md) to see how the two compare and when you would reach for one over the other.


## Check for Understanding

Answer the following questions in your own words:

1. What is a balance factor, and what values are valid in an AVL tree?
2. You insert the value 40 into this subtree:

   ```
       30
      /  \
    10    20
   ```

   Is this a valid AVL tree? If not, which rotation restores balance?

3. A classmate says "AVL trees are always faster than regular BSTs." Do you agree? Explain when AVL trees help and when the overhead might not be worth it.
4. What is the worst-case time complexity for search in an AVL tree, and why is it better than a regular BST?

## Supplemental Materials

- [AVL Tree - Wikipedia](https://en.wikipedia.org/wiki/AVL_tree) - Good reference for the formal proofs behind height guarantees and rotation correctness.
- [AVL Trees vs. Red-Black Trees - Stack Overflow](https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree) - A practical discussion of when to prefer one self-balancing strategy over the other.