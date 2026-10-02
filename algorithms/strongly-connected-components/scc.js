/**
 * Implementation of Tarjan's Algorithm to find Strongly Connected Components
 */

class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.adj = new Array(vertices).fill(0).map(() => []);
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  findSCCs() {
    let index = 0;
    const stack = [];
    const onStack = new Array(this.V).fill(false);
    const indices = new Array(this.V).fill(-1);
    const lowlink = new Array(this.V).fill(-1);
    const sccs = [];

    const strongConnect = (v) => {
      indices[v] = index;
      lowlink[v] = index;
      index++;
      stack.push(v);
      onStack[v] = true;

      for (const w of this.adj[v]) {
        if (indices[w] === -1) {
          strongConnect(w);
          lowlink[v] = Math.min(lowlink[v], lowlink[w]);
        } else if (onStack[w]) {
          lowlink[v] = Math.min(lowlink[v], indices[w]);
        }
      }

      if (lowlink[v] === indices[v]) {
        const component = [];
        let w;
        do {
          w = stack.pop();
          onStack[w] = false;
          component.push(w);
        } while (w !== v);
        sccs.push(component);
      }
    };

    for (let i = 0; i < this.V; i++) {
      if (indices[i] === -1) {
        strongConnect(i);
      }
    }

    return sccs;
  }
}

// --- Interactive Test Case ---
const g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(3, 4);

console.log("Strongly Connected Components:");
console.log(g.findSCCs()); 
// Expected output: [[4], [3], [1, 2, 0]]
