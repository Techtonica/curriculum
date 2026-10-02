/**
 * Edmonds-Karp Algorithm implementation to find the maximum flow in a network.
 * 
 * @param {number[][]} capacity - Adjacency matrix representing the capacity of edges.
 * @param {number} source - The starting node.
 * @param {number} sink - The destination node.
 * @returns {number} - The maximum flow from source to sink.
 */
function edmondsKarp(capacity, source, sink) {
  const n = capacity.length;
  const flow = Array.from({ length: n }, () => Array(n).fill(0));
  let maxFlow = 0;

  while (true) {
    const parent = Array(n).fill(-1);
    const queue = [source];
    parent[source] = source;

    // BFS to find the shortest augmenting path
    while (queue.length > 0 && parent[sink] === -1) {
      const u = queue.shift();
      for (let v = 0; v < n; v++) {
        // If not visited and there is residual capacity
        if (parent[v] === -1 && capacity[u][v] - flow[u][v] > 0) {
          parent[v] = u;
          queue.push(v);
        }
      }
    }

    // If no path was found to the sink, we are done
    if (parent[sink] === -1) break;

    // Find the bottleneck capacity along the path found by BFS
    let pathFlow = Infinity;
    for (let v = sink; v !== source; v = parent[v]) {
      const u = parent[v];
      pathFlow = Math.min(pathFlow, capacity[u][v] - flow[u][v]);
    }

    // Update residual capacities of the edges and reverse edges
    for (let v = sink; v !== source; v = parent[v]) {
      const u = parent[v];
      flow[u][v] += pathFlow;
      flow[v][u] -= pathFlow;
    }

    maxFlow += pathFlow;
  }

  return maxFlow;
}

// --- Test Case ---
const graph = [
  [0, 16, 13, 0, 0, 0],
  [0, 0, 10, 12, 0, 0],
  [0, 4, 0, 0, 14, 0],
  [0, 0, 9, 0, 0, 20],
  [0, 0, 0, 7, 0, 4],
  [0, 0, 0, 0, 0, 0],
];

const source = 0;
const sink = 5;
console.log(`The maximum possible flow is ${edmondsKarp(graph, source, sink)}`); // Expected: 23
