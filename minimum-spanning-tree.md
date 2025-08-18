# Minimum Spanning Tree (MST) – Interactive Guide

## Motivation
Have you ever needed to connect multiple cities with the least amount of road? Or set up a network using the least cable? These are real-world examples of a **Minimum Spanning Tree**. Understanding MST helps solve problems efficiently for this such as:
- Network design (telephone, electrical, computer)
- Road or pipeline construction
- Cluster analysis in Machine Learning

## Prerequisites

Before learning MST, you should be familiar with:

- [Graph Terminology](https://www.geeksforgeeks.org/dsa/graph-terminology-in-data-structure/)
- [Greedy Algorithms](https://www.geeksforgeeks.org/dsa/greedy-algorithms/)
- [Disjoint Set / Union-Find](https://www.geeksforgeeks.org/dsa/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/)
- [Basic Data Structures (Heaps, Queues)](https://www.geeksforgeeks.org/dsa/priority-queue-set-1-introduction/)

## Time Estimate 
- Reading Time:  30-45 minutes
- Hands-on Activities: 1-2 hours
- Total Learning Time: 2-3 hours

## Terminology

| Term       | Description                                                           |
|------------|-----------------------------------------------------------------------|
| Vertex (V) | A node in the graph                                                   |
| Edge (E)   | A connection between two nodes with a weight                          |
| Cycle      | A path that starts and ends at the same node without repeating edges  |
| MST        | A tree that connects all vertices with minimum total edge weight      |


## Time and Space Complexity
This section explains how the execution time and memory usage scale with the size of the input graph.

| Complexity     | Description                                                                | Context                                    |   Growth Rate                                                 |
| -------------- | -------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------
| **O(E log V)** | Time complexity involving both edges (E) and the logarithm of vertices (V) | Graph algorithms                            | Grows logarithmically with vertices but                        scales linearly with edges |
| **O(log N)**   | Pure logarithmic complexity in terms of size N                             | General algorithms                          | Pure logarithmic growth without additional scaling factors         |
| **O(E log E)** | Time complexity where both linear and logarithmic factors depend on edges  | Graph algorithms with edge-based operations | Similar to O(E log V) but grows faster when E > V                  |


## Key Relationships

| Complexity Comparison  | Observation                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **O(E log V) vs O(E log E)** | Both scale linearly with **E**.                                       |
|                        | **O(E log E)** grows faster than **O(E log V)** when **E > V**.             |
|                        | They are equivalent when **E ≈ V** (e.g., in complete graphs).              |
| **O(log N)**           | Grows much slower than the others.                                          |
|                        | As **E** increases, the gap between **O(log N)** and the others widens.     |
| **Practical Implications** | **O(E log E)** → common in algorithms that primarily operate on edges (e.g., **Kruskal’s**). |
|                        | **O(E log V)** → common in algorithms involving both vertices and edges (e.g., **Prim’s with heap**). |
|                        | Choice depends on whether **V** or **E** is smaller in your graph.          |


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

##  Visual Example  
![Prim’s Algorithm](https://en.wikipedia.org/wiki/File:Prim-animation.gif)
### Prim's Algorithm Animated Diagram  
![Prim-animation-wikipedia](https://github.com/user-attachments/assets/7317a36a-4a14-4118-b2ab-8d8dce9fcf07)

### Starter Code (Python)

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
## Kruskal’s Algorithm
Strategy: Add the smallest edge without forming a cycle until all nodes are connected.

### Steps:
1. Sort all edges by weight.
2. Initialize each node as its own tree.
3. Add edges one by one — skip if they create a cycle.
4. Stop when MST has (V-1) edges.

**Data Structure Used:** Disjoint Set (Union-Find)

## Union Find Kruskal Animation
![Union Find Kruskal Demo](https://github.com/user-attachments/assets/a2f02ea7-6a11-48be-a3fe-c1dfee1371ba)

 Starter Code (Python)
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
### Time Complexity Overview
| **Algorithm** | **Description**                                | **Time Complexity** |
| ------------- | ---------------------------------------------- | ------------------- |
| **Prim’s**    | Greedy approach using **min-heap**             | **O(E log V)**      |
| **Kruskal’s** | Greedy approach using **sorting + union-find** | **O(E log E)**      |


### Time Complexity Details
| **Complexity** | **Growth Description**                           | **When Used**                           |
| -------------- | ------------------------------------------------ | --------------------------------------- |
| **O(E log V)** | Depends on number of edges and log of vertices   | Prim’s Algorithm with heap              |
| **O(E log E)** | Depends mainly on number of edges (from sorting) | Kruskal’s Algorithm                     |
| **O(log N)**   | Logarithmic growth                               | Union-Find operations / Tree operations |


### Note:

-When the graph is dense (many edges), Prim’s is usually faster.

-When the graph is sparse, both perform similarly.


## Further Learning Resources

[Prim's Algorithm](https://www.youtube.com/watch?v=oDnlIP5pe5o)

[Kruskal’s Algorithm Explained](https://www.geeksforgeeks.org/dsa/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/)

[MST Prim's Algorithm](https://www.geeksforgeeks.org/dsa/prims-minimum-spanning-tree-mst-greedy-algo-5/)

[Union Find (Disjoint Set)](https://brilliant.org/wiki/disjoint-set-data-structure/)

[MST Video Lecture – Abdul Bari](https://www.youtube.com/watch?v=4ZlRH0eK-qQ) Explaining all about Prims and Kruskals Algorithms - Greedy Method.

