# Floyd-Warshall Algorithm

## Overview
The **Floyd-Warshall algorithm** is a dynamic programming algorithm used to find the **shortest paths between all pairs of vertices** in a weighted, directed graph. 

Unlike algorithms such as Dijkstra's (which finds shortest paths from a single source vertex to all other vertices), Floyd-Warshall computes the shortest path between *every single pair* of nodes in a single execution.

### Key Features
* **All-Pairs Shortest Path (APSP):** Solves the shortest path problem for all source-destination pairs simultaneously.
* **Handles Negative Weights:** Works correctly with negative edge weights, unlike standard Dijkstra.
* **Detects Negative Cycles:** If the distance from any vertex to itself becomes negative (e.g., `dist[i][i] < 0`), the graph contains a negative cycle.
* **Dynamic Programming:** Builds solutions to larger subproblems by considering intermediate vertices step-by-step.

---

## Real-World Analogy
Imagine a network of flight routes connecting multiple cities. You want to build a master table showing the fastest flight time between *any* two cities:

1. Initially, you record only direct flights between City A and City B.
2. Next, you check: *"Can I get from City A to City B faster by stopping over in City C?"*
3. You systematically test every possible intermediate city for every route pair until all optimal paths are discovered.

---

## How It Works

Floyd-Warshall uses a $V \times V$ matrix (where $V$ is the number of vertices) to track shortest distances.

1. **Initialization:** 
   * Set `dist[i][j]` to the edge weight between $i$ and $j$ if a direct edge exists.
   * Set `dist[i][i] = 0` (distance from a vertex to itself).
   * Set all other `dist[i][j]` entries to `Infinity` ($\infty$).
2. **Intermediate Vertex Relaxation:**
   * Iterate through every node $k$ as a potential intermediate vertex.
   * For every pair of source ($i$) and destination ($j$) vertices, check if routing through $k$ offers a shorter path:
     $$\text{dist}[i][j] = \min(\text{dist}[i][j],\, \text{dist}[i][k] + \text{dist}[k][j])$$

---

## Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $\mathcal{O}(V^3)$ | Three nested loops iterate over all $V$ vertices. |
| **Space Complexity** | $\mathcal{O}(V^2)$ | Requires a 2D matrix of size $V \times V$ to store distances. |

---

## Code Example (JavaScript)

```javascript
/**
 * Computes all-pairs shortest paths using the Floyd-Warshall algorithm.
 * @param {number[][]} graph - Adjacency matrix where graph[i][j] represents edge weight.
 *                             Use Infinity if no edge exists.
 * @returns {number[][]} - Matrix of shortest distances between all pairs.
 */
function floydWarshall(graph) {
  const V = graph.length;
  
  // Create a deep copy of the graph matrix to hold distances
  const dist = graph.map(row => [...row]);

  // Outer loop: Consider each vertex k as an intermediate node
  for (let k = 0; k < V; k++) {
    // Middle loop: Source vertex i
    for (let i = 0; i < V; i++) {
      // Inner loop: Destination vertex j
      for (let j = 0; j < V; j++) {
        // If vertex k can bridge i and j, check for a shorter path
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  }

  // Check for negative weight cycles
  for (let i = 0; i < V; i++) {
    if (dist[i][i] < 0) {
      throw new Error("Graph contains a negative weight cycle!");
    }
  }

  return dist;
}

// Example usage:
const INF = Infinity;
const graph = [
  [0,   5,   INF, 10],
  [INF, 0,   3,   INF],
  [INF, INF, 0,   1],
  [INF, INF, INF, 0]
];

console.log(floydWarshall(graph));