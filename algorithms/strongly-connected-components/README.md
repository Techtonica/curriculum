# Strongly Connected Components (SCC)

## What are Strongly Connected Components?

In a **directed graph**, a Strongly Connected Component (SCC) is a maximal subtree where every node is reachable from every other node in that subtree. 

In simpler terms: if you are at any node in an SCC, there is a path to every other node in that same SCC.

### Key Concepts
- **Directed Graph**: A graph where edges have a direction (arrows).
- **Reachability**: Node A can reach Node B if there is a path from A to B.
- **Strongly Connected**: A graph is strongly connected if every vertex is reachable from every other vertex.

## Visualizing SCCs

Imagine a graph with three clusters of nodes. Within each cluster, the nodes are tightly connected in loops. However, the clusters are connected to each other by one-way streets.
- Cluster A $\rightarrow$ Cluster B $\rightarrow$ Cluster C.
- You can go from A to C, but you can never go back from C to A.
- Each cluster is an **SCC**.

## Algorithms to find SCCs

There are two primary algorithms used to find SCCs:
1. **Kosaraju's Algorithm**: Uses two passes of Depth First Search (DFS).
2. **Tarjan's Algorithm**: Uses a single pass of DFS and a stack to track nodes.

### Tarjan's Algorithm Walkthrough
Tarjan's algorithm is generally more efficient as it only requires one DFS traversal. It uses two values for each node:
- **Index**: The order in which the node was discovered.
- **Low Link**: The smallest index reachable from that node (including itself) in the DFS tree.

**The Process:**
1. Start a DFS. Assign an index and low-link value to the node.
2. Push the node onto a stack.
3. For each neighbor:
   - If not visited, recurse and update the current node's low-link.
   - If already on the stack, update the low-link based on the neighbor's index.
4. If `low-link == index`, you've found the root of an SCC. Pop all nodes from the stack until you reach the current node.

## Complexity Analysis
- **Time Complexity**: $O(V + E)$, where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity**: $O(V)$ to store the indices, low-links, and the stack.
