# Floyd-Warshall Algorithm

## Overview

The **Floyd-Warshall Algorithm** is a classic dynamic programming algorithm used to find the **shortest paths between all pairs of vertices** in a weighted, directed graph.

Unlike single-source algorithms (such as Dijkstra's algorithm, which finds shortest paths from _one_ starting point to all other nodes), Floyd-Warshall computes the shortest paths for _every possible pair_ of start and end nodes in a single execution.

### Key Features

- **Graph Type:** Works on directed or undirected weighted graphs.
- **Negative Weights:** Can handle edges with negative weights.
- **Negative Cycles:** Detects negative cycles (cycles where the sum of edge weights is less than zero). If a negative cycle exists, shortest path distances become undefined.

---

## Real-World Analogy

Imagine a flight network connecting major cities worldwide.

- **Dijkstra's Algorithm** is like asking: _"What is the fastest route from San Francisco to every other city on the map?"_
- **Floyd-Warshall Algorithm** is like generating a complete lookup grid for the airline's website showing: _"What is the absolute fastest flight path between EVERY pair of cities in our network?"_

To figure this out, the algorithm systematically asks: _"If I allow an layover/intermediate stop at City $K$, does that make the trip from City $I$ to City $J$ shorter than the direct route we currently know?"_

---

## How It Works (Step-by-Step Logic)

Floyd-Warshall maintains a 2D matrix `dist[i][j]` representing the shortest distance from node `i` to node `j`.

1. **Initialization:**

   - `dist[i][i] = 0` (distance to self is zero).
   - `dist[i][j] = weight(i, j)` if a direct edge exists.
   - `dist[i][j] = Infinity` if no direct edge exists.

2. **Dynamic Programming State Transition:**
   Iterate through every intermediate vertex $K$, and check if routing through $K$ offers a shorter path between vertex $I$ and vertex $J$:

   $$\text{dist}[i][j] = \min(\text{dist}[i][j], \text{dist}[i][k] + \text{dist}[k][j])$$

3. **Triple Loop Execution:**
   Repeat this calculation using 3 nested loops:
   - **Outer Loop ($k$):** The intermediate node being considered.
   - **Middle Loop ($i$):** The starting node.
   - **Inner Loop ($j$):** The destination node.

---

## Complexity Analysis

| Metric               | Complexity | Explanation                                                  |
| :------------------- | :--------- | :----------------------------------------------------------- |
| **Time Complexity**  | $O(V^3)$   | Requires 3 nested loops iterating over all $V$ vertices.     |
| **Space Complexity** | $O(V^2)$   | Requires a $V \times V$ matrix to store pair-wise distances. |

> **When to use:** Ideal for dense graphs with a small number of vertices ($V \le 400$) where you need all-pairs shortest paths. For larger sparse graphs, running Dijkstra's algorithm from each vertex ($V$ times) is often faster.

---

## Visual & Interactive Resources

- [VisuAlgo - All-Pairs Shortest Paths](https://visualgo.net/en/sssp) _(Interactive step-by-step matrix updates)_
- [USFCA Graph Algorithms Visualizer](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html) _(Step through graph state transitions visually)_

---

## Code Example (JavaScript)

````javascript
/**
 * Computes all-pairs shortest paths using the Floyd-Warshall Algorithm.
 * @param {number[][]} graph - Adjacency matrix where graph[i][j] is edge weight (Infinity if no edge).
 * @returns {number[][]} Distance matrix containing shortest paths between all pairs.
 */
function floydWarshall(graph) {
  const numVertices = graph.length;

  // Create a deep copy of the graph matrix to hold distances
  const dist = Array.from({ length: numVertices }, (_, i) =>
    Array.from({ length: numVertices }, (_, j) => graph[i][j])
  );

  // Consider each vertex as an intermediate node (k)
  for (let k = 0; k < numVertices; k++) {
    // Iterate over all source vertices (i)
    for (let i = 0; i < numVertices; i++) {
      // Iterate over all destination vertices (j)
      for (let j = 0; j < numVertices; j++) {
        // If vertex k is on the shortest path from i to j, update dist[i][j]
        if (
          dist[i][k] !== Infinity &&
          dist[k][j] !== Infinity &&
          dist[i][k] + dist[k][j] < dist[i][j]
        ) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  // Check for negative weight cycles
  for (let i = 0; i < numVertices; i++) {
    if (dist```markdown
# Floyd-Warshall Algorithm

## Overview
The **Floyd-Warshall algorithm** is an algorithm for finding the **shortest paths between all pairs of vertices** in a weighted, directed graph.

Unlike algorithms such as Dijkstra's (which finds shortest paths from a single source vertex to all other vertices), Floyd-Warshall computes the shortest path between *every single pair* of nodes in a single run.

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

  // Optional: Check for negative weight cycles
  for (let i = 0; i < V; i++) {
    if (dist[i][i] < 0) {
      throw new Error("Graph contains a negative weight cycle!");
    }
  }

  return dist;
}

// --- Example Usage ---
const INF = Infinity;
const graph = [
  [0,   5,   INF, 10],
  [INF, 0,   3,   INF],
  [INF, INF, 0,   1],
  [INF, INF, INF, 0]
];

console.log(floydWarshall(graph));
````
