/**
 * Floyd-Warshall Algorithm Implementation
 * Finds the shortest paths between all pairs of vertices.
 */

function floydWarshall(graph) {
  const dist = [];
  const V = graph.length;

  // Initialize the distance matrix with the input graph values
  for (let i = 0; i < V; i++) {
    dist[i] = [];
    for (let j = 0; j < V; j++) {
      dist[i][j] = graph[i][j];
    }
  }

  // Main loop: iterate through each vertex as an intermediate point
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        // If vertex k is on the shortest path from i to j, update the value
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  }

  return dist;
}

// Test Case
const INF = Infinity;
const graph = [
  [0, 3, INF, 5],
  [2, 0, 2, INF],
  [INF, 1, 0, 1],
  [7, INF, 3, 0],
];

const result = floydWarshall(graph);
console.log("Shortest distance matrix:");
console.table(result);

module.exports = floydWarshall;
