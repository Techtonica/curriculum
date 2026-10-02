# Disjoint Set Union (DSU) / Union-Find

Disjoint Set Union (DSU), also known as Union-Find, is a data structure that stores a collection of disjoint (non-overlapping) sets. It is particularly useful for solving connectivity problems, such as finding connected components in a graph or implementing Kruskal's algorithm for Minimum Spanning Trees.

## 🚀 Core Concepts

The DSU structure supports two primary operations:
1. **Find**: Determine which set a particular element belongs to. This can be used to check if two elements are in the same set.
2. **Union**: Merge two separate sets into a single set.

### Visual Walkthrough

Imagine elements as nodes in a forest. Each set is a tree, and the root of the tree is the "representative" of the set.

- **Initial State**: Every element is its own parent (each is a separate set).
- **Union(A, B)**: Find the root of A and the root of B. If they are different, make one root the parent of the other.
- **Find(A)**: Traverse up the parent pointers until you reach the root.

## 🛠️ Optimizations

To ensure the operations are nearly constant time, we use two main optimizations:

### 1. Path Compression (Find Optimization)
During a `find` operation, we make every node visited point directly to the root. This flattens the structure of the tree.

### 2. Union by Rank/Size (Union Optimization)
Always attach the smaller tree under the root of the larger tree. This prevents the tree from becoming too deep (keeping it balanced).

**Time Complexity:** With both optimizations, the time complexity per operation is $O(\alpha(n))$, where $\alpha$ is the Inverse Ackermann function, which grows so slowly that it is effectively $O(1)$ for all practical purposes.

## 💻 Implementation

See the `dsu.js` file for a complete implementation.

### Example Usage:
```javascript
const dsu = new DisjointSetUnion(5);
dsu.union(0, 2);
dsu.union(4, 6);
dsu.union(6, 5);
console.log(dsu.find(0) === dsu.find(2)); // true
console.log(dsu.find(0) === dsu.find(5)); // false
