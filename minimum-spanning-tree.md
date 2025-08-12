# 🌲 Minimum Spanning Tree (MST) – Interactive Guide



## 🎯 Motivation

Have you ever needed to connect multiple cities with the least amount of road? Or set up a network using the least cable? These are real-world examples of a **Minimum Spanning Tree**. Understanding MST helps solve problems efficiently for this such as:
- Network design (telephone, electrical, computer)
- Road or pipeline construction
- Cluster analysis in Machine Learning



## 📚 Prerequisites

Before learning MST, you should be familiar with:

- [Graph Terminology](../graphs/introduction-to-graphs.md)
- [Greedy Algorithms](./greedy-intro.md)
- [Disjoint Set / Union-Find](./disjoint-set.md)
- [Basic Data Structures (Heaps, Queues)](../data-structures/priority-queue.md)



## 🗓️ Project Timeline

| Week | Milestone                            |
|------|---------------------------------------|
| 1    | Learn graph basics, edge weights     |
| 2    | Study Prim's and Kruskal’s algorithms |
| 3    | Implement MST in code                |
| 4    | Build or explore visualizations      |



## 🔑 Terminology

| Term       | Description                                                           |
|------------|-----------------------------------------------------------------------|
| Vertex (V) | A node in the graph                                                   |
| Edge (E)   | A connection between two nodes with a weight                          |
| Cycle      | A path that starts and ends at the same node without repeating edges  |
| MST        | A tree that connects all vertices with minimum total edge weight      |



## 🚀 What is a Minimum Spanning Tree?
A **Minimum Spanning Tree (MST)** of a weighted, connected, undirected graph is a subset of the edges that connects all vertices with the minimum total edge weight and **no cycles**.



## 🌐 Real-World Uses of MST

- Designing road or pipeline networks.
- Creating efficient communication networks.
- Cluster analysis in Machine Learning.



## ⚙️ Prim’s Algorithm

**Strategy**: Start with one vertex and grow the tree by adding the smallest edge connected to it.

### 🔄 Steps:
1. Start with any node.
2. Add the smallest edge that connects to a new node.
3. Repeat until all nodes are included.

**Data Structure Used**: Min-Heap (Priority Queue)

### 📊 Visual Example  
![Prim’s Algorithm](https://en.wikipedia.org/wiki/File:Prim-animation.gif)

### 🧪 Starter Code (Python)

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


⚒️ Kruskal’s Algorithm
Strategy: Add the smallest edge without forming a cycle until all nodes are connected.

🔄 Steps:
Sort all edges by weight.

Initialize each node as its own tree.

Add edges one by one — skip if they create a cycle.

Stop when MST has (V-1) edges.

Data Structure Used: Disjoint Set (Union-Find)

📊 Visual Example

🧪 Starter Code (Python)
python
Copy code
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
⏱️ Time Complexity Overview
Algorithm	Description	Time Complexity
Prim’s	Greedy with min-heap	O(E log V)
Kruskal’s	Greedy with sorting + union-find	O(E log E)

📈 Time Complexity Details
Complexity	Growth Description	When Used
O(E log V)	Depends on edges and log vertices	Prim’s with heap
O(E log E)	Depends on edges (from sorting)	Kruskal’s
O(log N)	Logarithmic growth	Union-Find / Tree ops

💡 Note:

When the graph is dense (many edges), Prim’s is usually faster.

When the graph is sparse, both perform similarly.

🌐 Further Learning Resources
Prim's Algorithm – Visual Go

Kruskal’s Algorithm Explained – GeeksforGeeks

MST Interactive Demo – CS Academy

Union Find (Disjoint Set) – Brilliant

MST Video Lecture – Abdul Bari (YouTube)
