## Ford–Fulkerson Algorithm (Maximum Flow)

## What is Maximum Flow? — Concept Introduction

Maximum Flow is the problem of sending as much "stuff" as possible from a source to a sink through a network of pipes (edges) that each have a capacity limit. The goal is to maximize the total amount leaving the source and arriving at the sink while never exceeding any pipe’s capacity.

Key terms:

- **Source (S)**: where flow starts.
- **Sink (T)**: where flow must end.
- **Capacity**: the maximum amount an edge can carry.
- **Flow**: how much is currently being sent through an edge (must be ≤ capacity).

Real-world analogies:

- Water pushed through pipes from a reservoir (source) to a treatment plant (sink).
- Trucks carrying packages through a roadway network.
- Data packets sent from a server to a client through routers with bandwidth limits.

This page gives an intuitive, story-driven explanation, a small worked example, a visual residual-graph view, a beginner-friendly JavaScript implementation (Edmonds–Karp / BFS), complexity notes, guided and independent practice, and quick checks.

## Interactive Narrative Scenario — The Bakery Delivery Network 🍞

Imagine a bakery (`S`) that sends fresh bread to a city plaza (`T`) through a small distribution network of bike couriers and transfer hubs.

Nodes:

- `S` = Bakery (source)
- `A`, `B`, `C` = Hubs
- `T` = City Plaza (sink)

Capacities (loaves per hour) and a simple ASCII diagram:

Capacity table

| Edge  | Capacity |
| ----- | -------- |
| S → A | 10       |
| S → B | 5        |
| A → B | 15       |
| A → C | 4        |
| B → C | 8        |
| A → T | 5        |
| B → T | 10       |
| C → T | 15       |

ASCII diagram

S = source, T = sink

```
      (10)        (5)
  S --------> A ------> T
  |           | \      ^
  | (5)       |  \     |
  v           v   \    |
  B -----> C ------    |
   \ (10)     \ (15)  /
    \           \    /
     ----------->---
          (8)
```

- Source: `S`
- Sink: `T`
- We'll run the Ford–Fulkerson method (Edmonds–Karp variant using BFS) to find augmenting paths and push flow until no augmenting path exists.

## Step-by-Step Walkthrough (Augmenting Paths)

We start with all flows = 0.

Edge list summary (initial):

| Edge  | Capacity | Flow | Residual capacity |
| ----- | -------: | ---: | ----------------: |
| S → A |       10 |    0 |                10 |
| S → B |        5 |    0 |                 5 |
| A → B |       15 |    0 |                15 |
| A → C |        4 |    0 |                 4 |
| B → C |        8 |    0 |                 8 |
| A → T |        5 |    0 |                 5 |
| B → T |       10 |    0 |                10 |
| C → T |       15 |    0 |                15 |

We find augmenting paths (using BFS to find the shortest path in terms of edges):

1. Augmenting path: S → A → T

- Residual along that path: min(10, 5) = 5 (bottleneck)
- Push 5 units:
  - Flow S→A = 5
  - Flow A→T = 5
- Updated totals: total flow = 5

Updated table (after path 1):

| Edge  | Capacity | Flow | Residual |
| ----- | -------: | ---: | -------: |
| S → A |       10 |    5 |        5 |
| S → B |        5 |    0 |        5 |
| A → B |       15 |    0 |       15 |
| A → C |        4 |    0 |        4 |
| B → C |        8 |    0 |        8 |
| A → T |        5 |    5 |        0 |
| B → T |       10 |    0 |       10 |
| C → T |       15 |    0 |       15 |

2. Augmenting path: S → A → C → T

- Residual: min(S→A:5, A→C:4, C→T:15) = 4
- Push 4 units:
  - Flow S→A increases to 9
  - Flow A→C = 4
  - Flow C→T = 4
- Total flow = 5 + 4 = 9

Updated table (after path 2):

| Edge  | Capacity | Flow | Residual |
| ----- | -------: | ---: | -------: |
| S → A |       10 |    9 |        1 |
| S → B |        5 |    0 |        5 |
| A → B |       15 |    0 |       15 |
| A → C |        4 |    4 |        0 |
| B → C |        8 |    0 |        8 |
| A → T |        5 |    5 |        0 |
| B → T |       10 |    0 |       10 |
| C → T |       15 |    4 |       11 |

3. Augmenting path: S → B → T

- Residual: min(S→B:5, B→T:10) = 5
- Push 5 units:
  - Flow S→B = 5
  - Flow B→T = 5
- Total flow = 9 + 5 = 14

Updated table (after path 3):

| Edge  | Capacity | Flow | Residual |
| ----- | -------: | ---: | -------: |
| S → A |       10 |    9 |        1 |
| S → B |        5 |    5 |        0 |
| A → B |       15 |    0 |       15 |
| A → C |        4 |    4 |        0 |
| B → C |        8 |    0 |        8 |
| A → T |        5 |    5 |        0 |
| B → T |       10 |    5 |        5 |
| C → T |       15 |    4 |       11 |

4. Augmenting path: S → A → B → T

- Note: S→A residual is 1; A→B residual is 15; B→T residual is 5
- Bottleneck = min(1, 15, 5) = 1
- Push 1 unit:
  - Flow S→A = 10 (now full)
  - Flow A→B = 1
  - Flow B→T = 6
- Total flow = 14 + 1 = 15

Updated table (after path 4 - final):

| Edge  | Capacity | Flow | Residual |
| ----- | -------: | ---: | -------: |
| S → A |       10 |   10 |        0 |
| S → B |        5 |    5 |        0 |
| A → B |       15 |    1 |       14 |
| A → C |        4 |    4 |        0 |
| B → C |        8 |    0 |        8 |
| A → T |        5 |    5 |        0 |
| B → T |       10 |    6 |        4 |
| C → T |       15 |    4 |       11 |

Now try to find another augmenting path from `S` to `T` in the residual graph: there is no path from `S` that reaches `T` with positive capacity (both S→A and S→B residuals are 0), so we stop.

Final maximum flow = 15 loaves/hour.

## Residual Graph & Backward Edges — Visual Explanation

Residual graph intuition:

- Every original edge u → v with capacity c and current flow f gives:
  - A **forward residual capacity** of c − f (how much more we can push forward).
  - A **backward residual capacity** of f (how much we could undo / push back).
- The residual graph contains both forward and backward edges. Augmenting paths are found in this residual graph.

Backward edge explanation:

- Backward edges let the algorithm "cancel" earlier choices. For example, if we later discover pushing some flow along an earlier path blocks a better combination, the algorithm can route flow backwards along an edge and reassign it elsewhere.

Why it works (intuitively):

- Each augmenting path strictly increases total flow by at least 1 unit (or more). We stop only when no path from S to T exists in the residual graph — at that point, you've saturated all S→T capacity possibilities.
- The Max-Flow Min-Cut Theorem: the maximum flow value equals the capacity of the minimum S–T cut (a partition of nodes separating S and T). When no augmenting path exists, the set of reachable nodes from S in the residual graph defines a cut whose capacity equals the current flow.

## JavaScript Implementation — Edmonds–Karp (BFS)

This implementation is beginner-friendly and logs each augmenting path, its bottleneck, and the running total flow. Paste into a file like `fordFulkerson.js` and run with `node fordFulkerson.js`.

```javascript
// fordFulkerson.js
// Edmonds-Karp (Ford-Fulkerson with BFS) implementation for teaching purposes.
//
// Graph represented as an adjacency matrix of capacities.
// We maintain a residual graph (capacities that can still be used).
//
// The code logs each augmenting path, the bottleneck, and the updated total flow.

function edmondsKarp(capacity, source, sink) {
  const n = capacity.length;
  // Copy capacity into residual (we'll modify residual)
  const residual = capacity.map((row) => row.slice());
  let totalFlow = 0;

  // Helper: BFS to find shortest augmenting path, returns parent array
  function bfs() {
    const parent = Array(n).fill(-1);
    const visited = Array(n).fill(false);
    const queue = [];
    queue.push(source);
    visited[source] = true;
    parent[source] = -1;

    while (queue.length) {
      const u = queue.shift();
      for (let v = 0; v < n; v++) {
        if (!visited[v] && residual[u][v] > 0) {
          parent[v] = u;
          visited[v] = true;
          queue.push(v);
          if (v === sink) return parent;
        }
      }
    }
    return null; // no path
  }

  while (true) {
    const parent = bfs();
    if (!parent) break; // no augmenting path
    // Reconstruct path and find bottleneck
    const path = [];
    let v = sink;
    let bottleneck = Infinity;
    while (v !== source) {
      const u = parent[v];
      path.push(v);
      bottleneck = Math.min(bottleneck, residual[u][v]);
      v = u;
    }
    path.push(source);
    path.reverse();

    // Log the augmenting path and bottleneck
    console.log('Augmenting path:', path.map((i) => nodeName(i)).join(' -> '));
    console.log('Bottleneck:', bottleneck);

    // Update residual capacities (forward and backward edges)
    v = sink;
    while (v !== source) {
      const u = parent[v];
      residual[u][v] -= bottleneck; // use capacity on forward edge
      residual[v][u] += bottleneck; // add capacity on backward edge
      v = u;
    }

    totalFlow += bottleneck;
    console.log('Total flow now:', totalFlow);
    console.log('---');
  }

  console.log('Max flow (final):', totalFlow);
  return totalFlow;
}

// Helper to map indices to node names for readable logs
function nodeName(i) {
  const labels = ['S', 'A', 'B', 'C', 'T'];
  return labels[i] || String(i);
}

// Example graph matched to the page example:
// node order: 0:S, 1:A, 2:B, 3:C, 4:T
const capacity = [
  //S  A   B   C   T
  [0, 10, 5, 0, 0], // S
  [0, 0, 15, 4, 5], // A
  [0, 0, 0, 8, 10], // B
  [0, 0, 0, 0, 15], // C
  [0, 0, 0, 0, 0] // T
];

// Run Edmonds-Karp
edmondsKarp(capacity, 0, 4);
```

What you should see when running:

- Lines logging each augmenting path found (e.g., `S -> A -> T`), its bottleneck (e.g., `5`), and the running total flow (e.g., `Total flow now: 5`).
- Final output `Max flow (final): 15`.

Notes for students:

- This code uses an adjacency matrix for clarity. For larger graphs, adjacency lists are more memory-efficient.
- The `residual` matrix keeps both forward and backward capacities so we can undo and reroute flow.

## Complexity Analysis

| Operation                              | Complexity                                                     |
| -------------------------------------- | -------------------------------------------------------------- |
| One BFS to find augmenting path        | O(V + E)                                                       |
| Number of augmentations (Edmonds–Karp) | O(V \* E)                                                      |
| Total time (Edmonds–Karp)              | O(V \* E^2) in worst-case bound; often much faster in practice |
| Space                                  | O(V^2) for adjacency matrix, O(V + E) for adjacency list       |

Explanation:

- Edmonds–Karp uses BFS to find the shortest augmenting path (by number of edges). Each BFS is O(V + E).
- Each augmentation increases the shortest-path distance of at least one edge on some path or saturates an edge; theoretical bounds give O(V \* E) augmentations in the worst case.
- Therefore total worst-case time is O(V \* E^2) when using adjacency matrix operations; with adjacency lists and smart implementations the practical performance is often much better.
- Using BFS avoids very deep/long augmenting sequences that naive DFS-based Ford–Fulkerson might fall into (which can be exponential for pathological cases).

## Guided Practice

Try this visualizer: https://cp-algorithms.com/graph/ford_fulkerson.html (contains runnable examples)  
Or try an interactive web visualizer: https://visualgo.net/en/flow (enter the network and watch augmentations).

Instructions for students:

- Open the visualizer and enter the example network (nodes `S, A, B, C, T`) and the capacities listed above.
- Run the Edmonds–Karp simulation step-by-step and observe:
  - Which augmenting path is chosen first (shortest path).
  - The bottleneck for each path.
  - How backward edges appear in the residual view.

Guided questions:

- Which edge became saturated first?
- After the second augmentation, which nodes are still reachable from `S` in the residual graph?

## Independent Practice

1. New problem: Modify the network by adding a new edge `S → C` with capacity 7 and recompute max flow. What changes in the augmenting sequence and final max flow?
2. Modify the JS code to:
   - Use an adjacency list instead of a matrix.
   - Track and print the actual flow per original edge in human-friendly form.
3. Identify the minimum cut for the original example. Which edges separate `S` from `T` when you partition reachable vs non-reachable nodes in the final residual graph?
4. Try swapping BFS for DFS in the code (naive Ford–Fulkerson). Does the number of augmentations change? Does runtime for larger random graphs change?

## Check-for-Understanding (5 Questions)

1. What is an augmenting path and why does it matter?
2. What is a bottleneck capacity on a path and how does it affect flow updates?
3. Why do we need backward edges in the residual graph? Give an example scenario where a backward edge is useful.
4. How does using BFS (Edmonds–Karp) help keep the algorithm efficient compared to arbitrary DFS paths?
5. Explain in plain language the Max-Flow Min-Cut Theorem and how it tells you that the algorithm has finished.

## Quick Tips for Contributors

- Keep the examples small and numerically easy for hand-tracing.
- Include a runnable JS snippet and sample output.
- Prefer BFS for teaching Edmonds–Karp; show DFS as a variant and explain pitfalls.
- When you add images or SVGs, include an accessible text version (ASCII or table) for screen readers.

---

Created for the Techtonica curriculum.
