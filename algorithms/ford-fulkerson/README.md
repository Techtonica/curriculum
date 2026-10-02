# Ford-Fulkerson Algorithm

The Ford-Fulkerson algorithm is used to compute the maximum flow in a flow network. It is a greedy approach that repeatedly finds "augmenting paths" from the source to the sink and adds the maximum possible flow along that path until no more paths can be found.

## 📌 Concept

Imagine a system of pipes with different capacities. The goal is to send as much "water" (flow) as possible from a starting point (Source) to an ending point (Sink) without exceeding the capacity of any single pipe.

### Key Terms:
- **Capacity**: The maximum amount of flow a pipe can handle.
- **Flow**: The actual amount of flow currently passing through a pipe.
- **Residual Graph**: A graph that shows the remaining capacity of the edges.
- **Augmenting Path**: A path from source to sink in the residual graph where all edges have available capacity.

## 🛠️ How it Works (Step-by-Step)

1. **Initialize**: Start with the flow of all edges set to 0.
2. **Find Path**: Search for any path from the source to the sink in the **residual graph** (usually using BFS or DFS).
3. **Determine Bottleneck**: Find the edge with the minimum residual capacity along the chosen path. This is the maximum flow we can add to this path.
4. **Update Flow**: 
   - Add the bottleneck value to the flow of each edge in the path.
   - Subtract the bottleneck value from the reverse edges (to allow "undoing" a flow decision).
5. **Repeat**: Repeat steps 2-4 until no more augmenting paths exist.

## 📊 Visual Walkthrough

| Step | Action | Residual Graph State | Total Flow |
| :--- | :--- | :--- | :--- |
| 1 | Find path S $\rightarrow$ A $\rightarrow$ T | Capacity: min(10, 5) = 5 | 5 |
| 2 | Find path S $\rightarrow$ B $\rightarrow$ T | Capacity: min(10, 10) = 10 | 15 |
| 3 | No more paths | Sink unreachable | **Final: 15** |

## 💻 Implementation

Check the `ford-fulkerson.js` file for a complete JavaScript implementation.

### Complexity
- **Time Complexity**: $O(max\_flow \cdot E)$, where $E$ is the number of edges.
- **Space Complexity**: $O(V^2)$ to store the residual graph.
