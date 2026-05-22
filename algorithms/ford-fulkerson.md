# Ford-Fulkerson Algorithm (Maximum Flow)

### Projected Time

About 90 minutes

- Lesson: 35 min
- Guided Practice: 25 min
- Independent Practice: 20 min
- Check for Understanding: 10 min

### Prerequisites

- [Intro to Algorithms](/algorithms/intro-to-algorithms)
- [Algorithms: Searching](/algorithms/searching)
- [Data Structures: Queues](/data-structures/queues)
- [Runtime Complexity](/runtime-complexity/runtime-complexity)
- Basic JavaScript arrays, loops, and functions

### Motivation

Maximum flow problems ask: "What is the most we can send from one place to another when every connection has a limit?"

This pattern appears in many real systems:

- Network routing, where links have bandwidth limits
- Transportation planning, where roads or delivery routes have capacity limits
- Scheduling, matching, and resource allocation
- Image segmentation, baseball elimination, and bipartite matching problems

Ford-Fulkerson is worth learning because it connects graphs, greedy choices, search, and optimization. It also introduces the idea of a residual graph, which is a powerful way to represent how an algorithm can undo and improve earlier decisions.

### Objectives

**Participants will be able to:**

- Define source, sink, capacity, flow, residual capacity, augmenting path, and bottleneck.
- Explain the maximum flow problem in plain language.
- Trace the Ford-Fulkerson method on a small graph by hand.
- Describe why backward edges are included in a residual graph.
- Implement the Edmonds-Karp version of Ford-Fulkerson using breadth-first search.
- Explain the relationship between maximum flow and minimum cut at a high level.
- Compare the runtime behavior of arbitrary Ford-Fulkerson path selection and Edmonds-Karp path selection.

### Specific Things To Learn

- Flow network - A directed graph where each edge has a capacity.
- Capacity constraint - Flow on an edge cannot exceed that edge's capacity.
- Flow conservation - Except at the source and sink, total incoming flow equals total outgoing flow.
- Augmenting path - A path from source to sink in the residual graph where every edge has positive residual capacity.
- Bottleneck - The smallest residual capacity on an augmenting path.
- Residual graph - A graph showing where flow can still increase or be reduced.
- Backward edge - An edge in the residual graph that represents the option to cancel or reroute existing flow.
- Edmonds-Karp - Ford-Fulkerson with breadth-first search used to choose augmenting paths.
- Max-flow min-cut theorem - When no augmenting path remains, the current flow equals the capacity of a minimum source-to-sink cut.

### Materials

- [Ford-Fulkerson Algorithm for Maximum Flow Problem](https://www.geeksforgeeks.org/dsa/ford-fulkerson-algorithm-for-maximum-flow-problem/) - Read for another implementation and explanation.
- [Maximum flow - Ford-Fulkerson and Edmonds-Karp](https://cp-algorithms.com/graph/edmonds_karp.html) - Use for a more formal explanation and pseudocode.
- [Visualgo Max Flow](https://visualgo.net/en/maxflow) - Use during guided practice to step through augmenting paths visually.

### Lesson

#### What is Maximum Flow? - Concept Introduction

Maximum flow is the problem of sending as much "stuff" as possible from a source to a sink through a network where each connection has a capacity limit. The goal is to maximize the total amount leaving the source and arriving at the sink while never exceeding any edge's capacity.

Key terms:

- **Source (S)**: where flow starts.
- **Sink (T)**: where flow must end.
- **Capacity**: the maximum amount an edge can carry.
- **Flow**: how much is currently being sent through an edge.
- **Residual capacity**: how much more flow can still be pushed through an edge.

Real-world analogies:

- Water pushed through pipes from a reservoir to a treatment plant
- Packages moving through a delivery network
- Data packets sent through routers with bandwidth limits

#### Interactive Bakery Delivery Network Scenario

Imagine a bakery (`S`) that sends fresh bread to a city plaza (`T`) through a small distribution network of bike couriers and transfer hubs.

Nodes:

- `S` = Bakery (source)
- `A`, `B`, `C` = Hubs
- `T` = City Plaza (sink)

Capacities are measured in loaves per hour.

| Edge | Capacity |
| ---- | -------- |
| S->A | 10       |
| S->B | 5        |
| A->B | 15       |
| A->C | 4        |
| B->C | 8        |
| A->T | 5        |
| B->T | 10       |
| C->T | 15       |

ASCII diagram:

```text
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

The Ford-Fulkerson method repeatedly finds augmenting paths and pushes as much flow as possible through each path. This lesson uses Edmonds-Karp, a version of Ford-Fulkerson that chooses augmenting paths with breadth-first search.

#### Step-by-Step Walkthrough

Start with all flows equal to `0`.

| Edge | Capacity | Flow | Residual capacity |
| ---- | -------: | ---: | ----------------: |
| S->A |       10 |    0 |                10 |
| S->B |        5 |    0 |                 5 |
| A->B |       15 |    0 |                15 |
| A->C |        4 |    0 |                 4 |
| B->C |        8 |    0 |                 8 |
| A->T |        5 |    0 |                 5 |
| B->T |       10 |    0 |                10 |
| C->T |       15 |    0 |                15 |

1. Augmenting path: `S -> A -> T`

- Bottleneck: `min(10, 5) = 5`
- Push 5 units.
- Updated flow: `S->A = 5`, `A->T = 5`
- Total flow: `5`

2. Augmenting path: `S -> B -> T`

- Bottleneck: `min(5, 10) = 5`
- Push 5 units.
- Updated flow: `S->B = 5`, `B->T = 5`
- Total flow: `10`

3. Augmenting path: `S -> A -> B -> T`

- Bottleneck: `min(5, 15, 5) = 5`
- Push 5 units.
- Updated flow: `S->A = 10`, `A->B = 5`, `B->T = 10`
- Total flow: `15`

Final flow table:

| Edge | Capacity | Flow | Residual |
| ---- | -------: | ---: | -------: |
| S->A |       10 |   10 |        0 |
| S->B |        5 |    5 |        0 |
| A->B |       15 |    5 |       10 |
| A->C |        4 |    0 |        4 |
| B->C |        8 |    0 |        8 |
| A->T |        5 |    5 |        0 |
| B->T |       10 |   10 |        0 |
| C->T |       15 |    0 |       15 |

There is no remaining path from `S` to `T` with positive residual capacity because both outgoing source edges are saturated. The final maximum flow is 15 loaves per hour.

#### Residual Graph and Backward Edges

For each original edge `u -> v` with capacity `c` and current flow `f`, the residual graph can include:

- A forward edge `u -> v` with residual capacity `c - f`
- A backward edge `v -> u` with residual capacity `f`

Backward edges let the algorithm cancel earlier choices. If one augmenting path sends flow in a way that blocks a better later route, the residual graph can route flow backward along an edge and reassign that capacity.

The method stops when no augmenting path from `S` to `T` exists in the residual graph. At that point, the reachable nodes from `S` define a cut whose capacity equals the current flow. This is the intuition behind the max-flow min-cut theorem.

#### JavaScript Implementation - Edmonds-Karp (BFS)

Paste this code into a file named `fordFulkerson.js` and run it with `node fordFulkerson.js`.

```javascript
/* fordFulkerson.js
Edmonds-Karp (Ford-Fulkerson with BFS) implementation
- Graph represented as an adjacency matrix of capacities.
- We maintain a residual graph (capacities that can still be used).
- The code logs each augmenting path, the bottleneck, and the updated total flow.
*/

function edmondsKarp(capacity, source, sink) {
  const n = capacity.length;
  const residual = capacity.map((row) => row.slice());
  let totalFlow = 0;

  function bfs() {
    const parent = Array(n).fill(-1);
    const visited = Array(n).fill(false);
    const queue = [source];

    visited[source] = true;

    while (queue.length) {
      const u = queue.shift();

      for (let v = 0; v < n; v++) {
        if (!visited[v] && residual[u][v] > 0) {
          parent[v] = u;
          visited[v] = true;
          queue.push(v);

          if (v === sink) {
            return parent;
          }
        }
      }
    }

    return null;
  }

  while (true) {
    const parent = bfs();

    if (!parent) {
      break;
    }

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

    console.log('Augmenting path:', path.map((i) => nodeName(i)).join(' -> '));
    console.log('Bottleneck:', bottleneck);

    v = sink;

    while (v !== source) {
      const u = parent[v];
      residual[u][v] -= bottleneck;
      residual[v][u] += bottleneck;
      v = u;
    }

    totalFlow += bottleneck;
    console.log('Total flow now:', totalFlow);
    console.log('---');
  }

  console.log('Max flow (final):', totalFlow);
  return totalFlow;
}

function nodeName(i) {
  const labels = ['S', 'A', 'B', 'C', 'T'];
  return labels[i] || String(i);
}

const capacity = [
  // S   A   B   C   T
  [0, 10, 5, 0, 0], // S
  [0, 0, 15, 4, 5], // A
  [0, 0, 0, 8, 10], // B
  [0, 0, 0, 0, 15], // C
  [0, 0, 0, 0, 0] // T
];

edmondsKarp(capacity, 0, 4);
```

Expected final output:

```text
Max flow (final): 15
```

#### Complexity Analysis

| Operation                              | Complexity  |
| -------------------------------------- | ----------- |
| One BFS to find an augmenting path     | O(V + E)    |
| Number of augmentations (Edmonds-Karp) | O(V \* E)   |
| Total time (Edmonds-Karp)              | O(V \* E^2) |
| Space with adjacency matrix            | O(V^2)      |
| Space with adjacency list              | O(V + E)    |

Edmonds-Karp uses BFS to find the shortest augmenting path by number of edges. Arbitrary Ford-Fulkerson path choices can be inefficient on some graphs, but BFS gives Edmonds-Karp a predictable polynomial worst-case bound.

### Common Mistakes & Misconceptions

- Assuming Ford-Fulkerson always chooses the same augmenting paths. The method does not specify how to choose paths; Edmonds-Karp specifically uses BFS.
- Forgetting backward edges. Without backward edges, the algorithm cannot undo or reroute earlier flow decisions.
- Treating capacity and flow as the same thing. Capacity is the limit; flow is the current amount using that limit.
- Ignoring flow conservation. Intermediate nodes should not create or destroy flow.
- Thinking the algorithm is finished just because one route is full. It is finished only when no augmenting path remains in the residual graph.
- Confusing maximum flow with shortest path. Maximum flow optimizes total amount sent, not distance.

### Guided Practice

- Try [this visualizer](https://cp-algorithms.com/graph/edmonds_karp.html) for a formal Edmonds-Karp walkthrough.
- Or try an [interactive web visualizer](https://visualgo.net/en/maxflow) to enter the network and watch augmentations.

Instructions:

- Open the visualizer and enter the example network with nodes `S`, `A`, `B`, `C`, and `T`.
- Add the capacities from the table in the lesson.
- Run the Edmonds-Karp simulation step by step.
- Track each augmenting path, its bottleneck, and the total flow after each augmentation.
- Notice when backward edges appear in the residual graph.

Guided questions:

- Which edge becomes saturated first?
- After the second augmentation, which edges still have residual capacity from `S`?
- Why does the final flow stop at `15`?

### Independent Practice

1. Add a new edge `S -> C` with capacity `7` and recompute the maximum flow. What changes in the augmenting sequence and final maximum flow?
2. Modify the JavaScript code to print the final flow on each original edge.
3. Rewrite the implementation to use an adjacency list instead of an adjacency matrix.
4. Identify the minimum cut for the original example. Which edges cross from reachable nodes to non-reachable nodes in the final residual graph?
5. Replace BFS with DFS and compare the augmenting paths chosen on the original graph.

### Challenge

Use Ford-Fulkerson or Edmonds-Karp to solve a bipartite matching problem:

- Create two groups, such as volunteers and available tasks.
- Add a source connected to each volunteer with capacity `1`.
- Add task nodes connected to a sink with capacity `1`.
- Add edges from volunteers to the tasks they can do.
- Run maximum flow to find the largest possible assignment.

### Check for Understanding

1. What is an augmenting path?
2. How is the bottleneck capacity of a path calculated?
3. Why does the residual graph include backward edges?
4. What makes Edmonds-Karp different from the general Ford-Fulkerson method?
5. How do you know the algorithm has found the maximum flow?
6. In the bakery example, why can the final maximum flow not exceed `15`?

### Supplemental Materials

- [Ford-Fulkerson method - Wikipedia](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm) - Optional reference for definitions, history, and variants.
- [Max-flow min-cut theorem - Brilliant](https://brilliant.org/wiki/max-flow-min-cut-algorithm/) - Optional deeper explanation of why maximum flow and minimum cut are connected.
- [Maximum Bipartite Matching](https://www.geeksforgeeks.org/maximum-bipartite-matching/) - Optional extension showing a common maximum flow application.
