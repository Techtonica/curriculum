/**
 * Implementation of the Ford-Fulkerson Algorithm using BFS (Edmonds-Karp variation)
 * to find the maximum flow in a network.
 */

class FordFulkerson {
    constructor(graph) {
        this.graph = graph; // Adjacency matrix representing capacities
        this.nodesCount = graph.length;
    }

    // Helper function to find a path from source to sink using BFS
    bfs(s, t, parent) {
        const visited = new Array(this.nodesCount).fill(false);
        const queue = [s];
        visited[s] = true;
        parent[s] = -1;

        while (queue.length > 0) {
            const u = queue.shift();

            for (let v = 0; v < this.nodesCount; v++) {
                if (!visited[v] && this.graph[u][v] > 0) {
                    if (v === t) {
                        parent[v] = u;
                        return true;
                    }
                    queue.push(v);
                    parent[v] = u;
                    visited[v] = true;
                }
            }
        }
        return false;
    }

    findMaxFlow(source, sink) {
        let maxFlow = 0;
        const parent = new Array(this.nodesCount);

        // Augment the flow while there is a path from source to sink
        while (this.bfs(source, sink, parent)) {
            let pathFlow = Infinity;
            
            // Find the maximum flow through the path found by BFS (bottleneck)
            for (let v = sink; v !== source; v = parent[v]) {
                let u = parent[v];
                pathFlow = Math.min(pathFlow, this.graph[u][v]);
            }

            // Update residual capacities of the edges and reverse edges
            for (let v = sink; v !== source; v = parent[v]) {
                let u = parent[v];
                this.graph[u][v] -= pathFlow;
                this.graph[v][u] += pathFlow;
            }

            maxFlow += pathFlow;
        }

        return maxFlow;
    }
}

// --- Test Case ---
const capacityMatrix = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0]
];

const ff = new FordFulkerson(capacityMatrix);
console.log("The maximum possible flow is " + ff.findMaxFlow(0, 5)); 
// Expected Output: 23
