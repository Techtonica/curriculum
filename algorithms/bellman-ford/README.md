# Bellman-Ford Algorithm

The Bellman-Ford algorithm is a graph search algorithm that finds the shortest path from a single source vertex to all other vertices in a weighted digraph. Unlike Dijkstra's algorithm, Bellman-Ford can handle graphs containing **negative edge weights**.

## 📌 How it Works

The core idea is **Relaxation**. For a graph with $V$ vertices, the algorithm relaxes all edges $V-1$ times. A relaxation step checks if the distance to a node can be shortened by taking a specific edge.

### The Process:
1. **Initialization**: Set the distance to the source to `0` and all other vertices to `Infinity`.
2. **Relaxation**: Loop $V-1$ times through every edge $(u, v)$ with weight $w$:
   - If `distance[u] + w < distance[v]`, then `distance[v] = distance[u] + w`.
3. **Negative Cycle Detection**: Run the relaxation one more time. If any distance can still be shortened, a **negative cycle** exists in the graph, and a shortest path cannot be defined.

## 🛠️ Complexity
- **Time Complexity**: $O(V \cdot E)$, where $V$ is the number of vertices and $E$ is the number of edges.
- **Space Complexity**: $O(V)$ to store the distances.

## 🚀 Interactive Walkthrough

To visualize how the algorithm updates distances:
1. Open `index.html` in your browser.
2. Observe how the "Relaxation" steps propagate the shortest distance across the graph.
3. Try adding a negative edge to see how it differs from Dijkstra.
4. Try creating a negative cycle to see the error detection in action.

## 💻 Implementation
See `bellmanFord.js` for the complete implementation.
