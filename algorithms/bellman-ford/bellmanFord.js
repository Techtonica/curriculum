/**
 * Bellman-Ford Algorithm Implementation
 * Finds the shortest path from source to all other vertices.
 * Handles negative weights and detects negative cycles.
 */

function bellmanFord(vertices, edges, source) {
    const distances = {};

    // Step 1: Initialize distances
    for (let vertex of vertices) {
        distances[vertex] = Infinity;
    }
    distances[source] = 0;

    // Step 2: Relax edges |V| - 1 times
    for (let i = 0; i < vertices.length - 1; i++) {
        for (let { from, to, weight } of edges) {
            if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
                distances[to] = distances[from] + weight;
            }
        }
    }

    // Step 3: Check for negative-weight cycles
    for (let { from, to, weight } of edges) {
        if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
            throw new Error("Graph contains a negative-weight cycle");
        }
    }

    return distances;
}

// --- Test Case ---
const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
    { from: 'A', to: 'B', weight: -1 },
    { from: 'A', to: 'C', weight: 4 },
    { from: 'B', to: 'C', weight: 3 },
    { from: 'B', to: 'D', weight: 2 },
    { from: 'B', to: 'E', weight: 2 },
    { from: 'D', to: 'B', weight: 1 },
    { from: 'D', to: 'C', weight: 5 },
    { from: 'E', to: 'D', weight: -3 },
];

try {
    const result = bellmanFord(vertices, edges, 'A');
    console.log("Shortest distances from source A:", result);
} catch (e) {
    console.error(e.message);
}

module.exports = bellmanFord;
