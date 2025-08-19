# Minimum Spanning Tree (MST)

## Motivation
Have you ever wondered how your GPS connects multiple cities with the least amount of road? How do telephone, elecrical, or computer infrastructures know to set up a network using the least cable? Everything from road or pipeline construction to cluster analysis of machine learning are real-world examples of a **Minimum Spanning Tree**. Understanding MST helps solve problems efficiently for this such as:

## Prerequisites
- [Graph Terminology](https://www.geeksforgeeks.org/dsa/graph-terminology-in-data-structure/)
- [Greedy Algorithms](https://www.geeksforgeeks.org/dsa/greedy-algorithms/)
- [Disjoint Set / Union-Find](https://www.geeksforgeeks.org/dsa/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/)
- [Basic Data Structures (Heaps, Queues)](https://www.geeksforgeeks.org/dsa/priority-queue-set-1-introduction/)

## Time Estimate 
- Reading Time:  30-45 minutes
- Hands-on Activities: 1-2 hours
- Total Learning Time: 2-3 hours

## Terminology
- **Vertex (V)**: A node in the graph
- **Edge (E)**: A connection between two nodes with a weight
- **Cycle**: A path that starts and ends at the same node without repeating edges
- **MST**: A tree that connects all vertices with minimum total edge weight

## Time and Space Complexity Reference

| **Complexity** | **Description** | **Algorithm Context** | **Growth Characteristics** | **Practical Notes** |
|----------------|-----------------|----------------------|---------------------------|-------------------|
| **O(E log V)** | Time complexity involving both edges (E) and logarithm of vertices (V) | Prim's Algorithm with min-heap; Graph algorithms involving both vertices and edges | Grows logarithmically with vertices but scales linearly with edges | Greedy approach using min-heap; Slower than O(E log E) when E > V; Equivalent when E ≈ V |
| **O(E log E)** | Time complexity where both linear and logarithmic factors depend on edges | Kruskal's Algorithm; Graph algorithms with edge-based operations | Similar to O(E log V) but grows faster when E > V | Greedy approach using sorting + union-find; Common in algorithms that primarily operate on edges; Faster than O(E log V) when E > V |
| **O(log N)** | Pure logarithmic complexity in terms of size N | Union-Find operations, Tree operations, General algorithms | Pure logarithmic growth without additional scaling factors | Grows much slower than edge-based complexities; Gap widens significantly as E increases |

**Key Relationships**: Both O(E log V) and O(E log E) scale linearly with E, but O(E log E) grows faster when E > V. Choice between algorithms depends on whether V or E is smaller in your specific graph structure.

## What is a Minimum Spanning Tree?
A **Minimum Spanning Tree (MST)** of a weighted, connected, undirected graph is a subset of the edges that connects all vertices with the minimum total edge weight and **no cycles**.

## Real-World Uses of MST
- Designing road or pipeline networks.
- Creating efficient communication networks.
- Cluster analysis in Machine Learning.

## Prim’s Algorithm
**Strategy**: Start with one vertex and grow the tree by adding the smallest edge connected to it.

### Steps:
1. Start with any node.
2. Add the smallest edge that connects to a new node.
3. Repeat until all nodes are included.

**Data Structure Used**: Min-Heap (Priority Queue)

### Prim's Algorithm Animated Diagram  
![Prim-animation-wikipedia](https://github.com/user-attachments/assets/7317a36a-4a14-4118-b2ab-8d8dce9fcf07)

<details><summary>Python Starter Code</summary>

```python
import heapq

def prim(graph, start):
    visited = set()
    min_heap = [(0, start)]
    total_weight = 0
    
    while min_heap:
        weight, node = heapq.heappop(min_heap)
        if node in visited:
            continue
        visited.add(node)
        total_weight += weight
        for neighbor, edge_weight in graph[node]:
            if neighbor not in visited:
                heapq.heappush(min_heap, (edge_weight, neighbor))
    
    return total_weight 
```
</details>

## Kruskal’s Algorithm
**Strategy:** Add the smallest edge without forming a cycle until all nodes are connected.

### Steps:
1. Sort all edges by weight.
2. Initialize each node as its own tree.
3. Add edges one by one — skip if they create a cycle.
4. Stop when MST has (V-1) edges.

**Data Structure Used:** Disjoint Set (Union-Find)

## Union Find Kruskal Animation
![Union Find Kruskal Demo](https://github.com/user-attachments/assets/a2f02ea7-6a11-48be-a3fe-c1dfee1371ba)

<details><summary>Python Starter Code </summary>

```python
def find(parent, i):
    if parent[i] != i:
        parent[i] = find(parent, parent[i])
    return parent[i]

def union(parent, rank, x, y):
    root_x = find(parent, x)
    root_y = find(parent, y)
    if rank[root_x] < rank[root_y]:
        parent[root_x] = root_y
    elif rank[root_x] > rank[root_y]:
        parent[root_y] = root_x
    else:
        parent[root_y] = root_x
        rank[root_x] += 1

def kruskal(V, edges):
    parent = [i for i in range(V)]
    rank = [0] * V
    result = []
    edges.sort(key=lambda x: x[2])  # Sort by weight

    for u, v, weight in edges:
        if find(parent, u) != find(parent, v):
            union(parent, rank, u, v)
            result.append((u, v, weight))
    
    return result
```
</details>

_⚠️ **Note**: When the graph is dense (many edges), Prim’s is usually faster. When the graph is sparse, both perform similarly._

## Further Learning Resources
- [Prim's Algorithm](https://www.youtube.com/watch?v=oDnlIP5pe5o)
- [Kruskal’s Algorithm Explained](https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/)
- [MST Prim's Algorithm](https://www.geeksforgeeks.org/dsa/prims-minimum-spanning-tree-mst-greedy-algo-5/)
- [Union Find (Disjoint Set)](https://brilliant.org/wiki/disjoint-set-data-structure/)
- [MST Video Lecture – Abdul Bari](https://www.youtube.com/watch?v=4ZlRH0eK-qQ) Explaining all about Prims and Kruskals Algorithms - Greedy Method.
