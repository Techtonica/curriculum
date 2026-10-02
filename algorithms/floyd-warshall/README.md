# Floyd-Warshall Algorithm

The Floyd-Warshall algorithm is a powerful dynamic programming approach used to find the **shortest paths between all pairs of vertices** in a weighted graph. Unlike Dijkstra's algorithm, which finds the shortest path from a single source, Floyd-Warshall computes the shortest distance between every single pair of nodes in the graph.

## How it Works

The core idea is to iteratively improve the estimate of the shortest path between two vertices $i$ and $j$ by considering an intermediate vertex $k$.

For every pair of vertices $(i, j)$, the algorithm checks if passing through vertex $k$ provides a shorter path than the current known path:
`distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j])`

### Complexity
- **Time Complexity:** $O(V^3)$, where $V$ is the number of vertices.
- **Space Complexity:** $O(V^2)$ to store the distance matrix.

## Interactive Walkthrough

Imagine a graph with 4 nodes. The algorithm maintains a matrix of distances.
1. **Initialization:** The matrix is filled with the weights of the direct edges. If no edge exists, the distance is $\infty$.
2. **Iteration 1 (k=0):** Can we get from $i$ to $j$ faster by going through node 0?
3. **Iteration 2 (k=1):** Can we get from $i$ to $j$ faster by going through node 1?
... and so on for all $V$ nodes.

## Visual Representation

```text
Initial Matrix (D0)      Step 1 (k=0)      Final Matrix (Dn)
[ 0, 3, INF, 5 ]  -->   [ 0, 3, 7, 5 ]  -->   [ 0, 3, 6, 5 ]
[ 2, 0, 2, INF]        [ 2, 0, 2, 8 ]        [ 2, 0, 2, 7 ]
[ INF, 1, 0, 1]        [ INF, 1, 0, 1]        [ 4, 1, 0, 1 ]
[ 7, INF, 3, 0]        [ 7, 6, 3, 0 ]        [ 7, 6, 3, 0 ]
```

## Implementation
See `solution.js` for the full implementation.
