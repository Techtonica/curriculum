# Edmonds-Karp Algorithm

The Edmonds-Karp algorithm is an implementation of the Ford-Fulkerson method for computing the maximum flow in a flow network. It specifically uses **Breadth-First Search (BFS)** to find the shortest augmenting path from the source to the sink in each iteration.

## 📌 Concept

In a flow network, we want to find the maximum amount of "flow" that can move from a source node $S$ to a sink node $T$, given that each edge has a maximum capacity.

### How it works:
1. **Residual Graph**: Start with a residual graph that initially has the same capacities as the original graph.
2. **BFS for Augmenting Path**: Use BFS to find the shortest path (in terms of number of edges) from source to sink that still has available capacity.
3. **Bottleneck Capacity**: Find the minimum capacity along this path (the "bottleneck").
4. **Update Flow**: 
   - Subtract the bottleneck capacity from the edges along the path in the residual graph.
   - Add the bottleneck capacity to the reverse edges (to allow for "undoing" flow).
5. **Repeat**: Repeat steps 2-4 until no more augmenting paths can be found.

## 🛠️ Complexity
- **Time Complexity**: $O(V E^2)$, where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity**: $O(V^2)$ to store the residual capacity matrix.

## 🖼️ Visual Walkthrough
Imagine a network of pipes with different diameters (capacities). 
1. **Search**: BFS finds the "shortest" route to the destination.
2. **Push**: We push as much water as the narrowest pipe in that route allows.
3. **Residuals**: We create "virtual" reverse pipes to allow the algorithm to redirect flow if a better path is found later.

## 🚀 Implementation
See `index.js` for the full implementation.
