# Heavy-Light Decomposition (HLD)

Heavy-Light Decomposition is a technique used to decompose a tree into a set of disjoint paths (chains). This allows us to perform path queries (like sum, max, or min) and updates on a tree in $O(\log^2 n)$ time.

## 📌 Concept

The core idea is to classify edges as either **Heavy** or **Light**:
- **Heavy Edge**: An edge connecting a node to its child that has the largest subtree.
- **Light Edge**: All other edges connecting a node to its children.

By following heavy edges, we form **Heavy Chains**. Any path from the root to a node will cross at most $O(\log n)$ light edges and $O(\log n)$ heavy chains.

### Visual Walkthrough

1. **Subtree Size Calculation**: First, we perform a DFS to calculate the size of the subtree rooted at each node.
2. **Chain Decomposition**: 
   - We identify the "heavy" child (the one with the largest subtree).
   - We assign the node and its heavy child to the same chain.
   - Light children start new chains.
3. **Segment Tree Integration**: Each chain is mapped to a linear array. We can then use a Segment Tree or Fenwick Tree over this array to perform range queries.

## 🚀 Complexity
- **Preprocessing**: $O(n)$
- **Path Query**: $O(\log^2 n)$
- **Path Update**: $O(\log^2 n)$

## 🛠️ Implementation Guide
See the `hld.py` file for a complete implementation including path sums and point updates.
