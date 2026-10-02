# Exercise: Implementing SCCs

## Challenge
Given a directed graph representing a network of websites (where an edge from A to B means A links to B), identify all "communities" of websites where every site in the community can reach every other site.

### Requirements
1. Implement the `findSCCs` method using Tarjan's Algorithm.
2. Ensure your implementation handles graphs with multiple disconnected components.
3. Test your code with the following graph:
   - 0 $\rightarrow$ 1
   - 1 $\rightarrow$ 2
   - 2 $\rightarrow$ 0
   - 1 $\rightarrow$ 3
   - 3 $\rightarrow$ 4
   - 4 $\rightarrow$ 3

### Expected Result
The algorithm should identify three SCCs:
- `{0, 1, 2}`
- `{3, 4}`

### Hints
- Use a `stack` to keep track of the current DFS path.
- The `low-link` value is the key to identifying the root of an SCC.
- Remember to mark nodes as `onStack` to avoid updating low-links from nodes in already identified SCCs.
