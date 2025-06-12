### Articulation Points in Graph Theory

## Time Estimate

| **Content** | **Time Estimate**
|-----|-----
| Reading Materials | 30 minutes
| Understanding the Concept | 20 minutes
| Algorithm Walkthrough | 30 minutes
| Coding Implementation | 45 minutes
| Practice Problems | 60 minutes
| **Total** | **3 hours 5 minutes**


## Prerequisites

Before diving into Articulation Points, you should be comfortable with:

- [Graph Representation](https://github.com/Techtonica/curriculum/blob/main/data-structures/graph.md)
- [Depth-First Search](https://github.com/Techtonica/curriculum/blob/main/algorithms/searching.md)
- [Basic Time Complexity Analysis](https://github.com/Techtonica/curriculum/blob/main/runtime-complexity/runtime-complexity.md)


## Motivation

Have you ever wondered how to identify critical points in a network? Imagine you're designing a computer network, and you need to know which connections are absolutely vital. If one of these critical connections fails, parts of your network could become isolated!

Articulation points (or cut vertices) help us identify these critical nodes in a graph whose removal would increase the number of connected components. Understanding this concept is crucial for:

- Network reliability analysis
- Infrastructure planning
- Social network analysis
- Circuit design


## Objectives

After completing this lesson, you'll be able to:

1. Define what articulation points are in a graph
2. Understand the importance of articulation points in real-world applications
3. Implement an algorithm to find articulation points in a graph
4. Analyze the time and space complexity of the algorithm
5. Apply the concept to solve practical problems


## Specific Things to Learn

- Definition of articulation points
- Properties of articulation points
- Tarjan's algorithm for finding articulation points
- Implementation using DFS
- Time and space complexity analysis
- Real-world applications


## Activities

### 1. Understanding Articulation Points

An articulation point (or cut vertex) in a graph is a vertex that, when removed along with its associated edges, increases the number of connected components in the graph.

<details>`<summary>`Example Visualization`</summary>`

```plaintext
    A
   / \
  B   C
 / \   \
D   E---F
```

In this graph, vertices A and E are articulation points:

- If A is removed, B (and its children D and E) would be disconnected from C and F
- If E is removed, D and B would be disconnected from F and C


</details>### 2. Tarjan's Algorithm Walkthrough

Tarjan's algorithm uses Depth-First Search (DFS) to find articulation points in O(V+E) time.

Key concepts:

- **Discovery time**: When a vertex is first visited during DFS
- **Low value**: Earliest visited vertex reachable from the subtree rooted at current vertex


<details>`<summary>`Step-by-Step Algorithm`</summary>`

1. Start DFS from any vertex in the graph
2. For each vertex, keep track of:

1. Discovery time
2. Lowest discovery time reachable from its subtree



3. A vertex is an articulation point if either:

1. It is the root of the DFS tree and has more than one child
2. It is not the root, and there exists a child such that no vertex in the child's subtree has a back edge to any ancestor of the current vertex





</details>### 3. Implementation

Let's implement the algorithm to find articulation points:

<details>`<summary>`Code Implementation`</summary>`

```python
def find_articulation_points(graph):
    """
    Find all articulation points in an undirected graph.
    
    Args:
        graph: Dictionary representing an adjacency list
        
    Returns:
        List of articulation points
    """
    n = len(graph)
    visited = [False] * n
    disc = [float("inf")] * n
    low = [float("inf")] * n
    parent = [-1] * n
    articulation_points = [False] * n
    time = [0]  # Using list as mutable integer
    
    def dfs(u):
        # Count of children in DFS tree
        children = 0
        
        # Mark current node as visited
        visited[u] = True
        
        # Initialize discovery time and low value
        disc[u] = low[u] = time[0]
        time[0] += 1
        
        # Go through all vertices adjacent to this
        for v in graph[u]:
            # If v is not visited yet, make it a child of u in DFS tree and recur for it
            if not visited[v]:
                parent[v] = u
                children += 1
                dfs(v)
                
                # Check if the subtree rooted with v has a connection to one of the ancestors of u
                low[u] = min(low[u], low[v])
                
                # u is an articulation point in following cases:
                # (1) u is root of DFS tree and has two or more children
                if parent[u] == -1 and children > 1:
                    articulation_points[u] = True
                
                # (2) If u is not root and low value of one of its children is more than or equal to discovery value of u
                if parent[u] != -1 and low[v] >= disc[u]:
                    articulation_points[u] = True
            
            # Update low value of u for parent function calls
            elif v != parent[u]:
                low[u] = min(low[u], disc[v])
    
    # Call the recursive helper function for all vertices
    for i in range(n):
        if not visited[i]:
            dfs(i)
    
    # Return the articulation points
    return [i for i in range(n) if articulation_points[i]]
```

</details>### 4. Hands-on Exercise: Finding Articulation Points

Let's work through an example together:

Consider the following graph:

```plaintext
    0
   / \
  1   2
 / \   \
3   4---5
```

<details>`<summary>`Step-by-Step Solution`</summary>`

1. Start DFS from vertex 0
2. Visit vertices in order: 0, 1, 3, 4, 5, 2
3. Calculate discovery and low times:

1. disc[0] = 0, low[0] = 0
2. disc[1] = 1, low[1] = 1
3. disc[3] = 2, low[3] = 2
4. disc[4] = 3, low[4] = 1 (due to back edge to 1)
5. disc[5] = 4, low[5] = 1 (via 4)
6. disc[2] = 5, low[2] = 0 (due to back edge to 0)



4. Check articulation point conditions:

1. Vertex 0: Root with 2 children, so it's an articulation point
2. Vertex 1: Has child 3 with low[3] >= disc[1], so it's an articulation point
3. Other vertices: Not articulation points





Result: Vertices 0 and 1 are articulation points.

</details>### 5. Practice Problems

Try solving these problems to reinforce your understanding:

1. **Network Reliability**: Given a computer network represented as a graph, identify the most critical servers (articulation points).
2. **Bridge Detection**: Modify the articulation points algorithm to find bridges (critical edges) in a graph.


<details>`<summary>`Bridge Detection Code`</summary>`

```python
def find_bridges(graph):
    """
    Find all bridges in an undirected graph.
    
    Args:
        graph: Dictionary representing an adjacency list
        
    Returns:
        List of bridges (pairs of vertices)
    """
    n = len(graph)
    visited = [False] * n
    disc = [float("inf")] * n
    low = [float("inf")] * n
    parent = [-1] * n
    bridges = []
    time = [0]  # Using list as mutable integer
    
    def dfs(u):
        # Mark current node as visited
        visited[u] = True
        
        # Initialize discovery time and low value
        disc[u] = low[u] = time[0]
        time[0] += 1
        
        # Go through all vertices adjacent to this
        for v in graph[u]:
            # If v is not visited yet, make it a child of u in DFS tree and recur for it
            if not visited[v]:
                parent[v] = u
                dfs(v)
                
                # Check if the subtree rooted with v has a connection to one of the ancestors of u
                low[u] = min(low[u], low[v])
                
                # If the lowest vertex reachable from subtree under v is below u in DFS tree, then u-v is a bridge
                if low[v] > disc[u]:
                    bridges.append((u, v))
            
            # Update low value of u for parent function calls
            elif v != parent[u]:
                low[u] = min(low[u], disc[v])
    
    # Call the recursive helper function for all vertices
    for i in range(n):
        if not visited[i]:
            dfs(i)
    
    return bridges
```

</details>3. **Biconnected Components**: Research and implement an algorithm to find biconnected components in a graph using articulation points.


### 6. Real-world Applications Discussion

Discuss how articulation points are used in:

- Network infrastructure planning
- Social network analysis
- Circuit design and fault tolerance
- Transportation systems


## Additional Resources

- [Tarjan's Original Paper](https://epubs.siam.org/doi/10.1137/0201010)
- [Visualizing Graph Algorithms](https://visualgo.net/en/dfsbfs)
- [GeeksforGeeks: Articulation Points](https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/)
