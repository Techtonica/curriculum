# Approximation Algorithms

## Prerequisites

- [Data Structures](https://github.com/Techtonica/curriculum/tree/main/data-structures)
- [Runtime Complexity](https://github.com/Techtonica/curriculum/tree/main/runtime-complexity)
- [Algorithms](https://github.com/Techtonica/curriculum/tree/main/algorithms)
- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/tree/main/javascript)


## Table of Contents

- [Objectives](#objectives)
- [Motivation](#motivation)
- [Specific Things to Learn](#specific-things-to-learn)
    - [Introduction to Approximation Algorithms](#introduction-to-approximation-algorithms)
    - [Types of Approximation Algorithms](#types-of-approximation-algorithms)
    - [Performance Guarantees](#performance-guarantees)
    - [Common Approximation Techniques](#common-approximation-techniques)
    - [Real-world Applications](#real-world-applications)
- [Lesson Activities](#lesson-activities)
    - [Activity 1: Greedy Approximation for Set Cover](#activity-1-greedy-approximation-for-set-cover)
    - [Activity 2: Implementing a 2-Approximation for Vertex Cover](#activity-2-implementing-a-2-approximation-for-vertex-cover)
    - [Activity 3: Traveling Salesman Problem Approximation](#activity-3-traveling-salesman-problem-approximation)
    - [Activity 4: Performance Analysis of Approximation Algorithms](#activity-4-performance-analysis-of-approximation-algorithms)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)


## Objectives

By the end of this lesson, you should be able to:

- Understand what approximation algorithms are and why they're necessary
- Identify NP-hard problems that require approximation solutions
- Implement basic approximation algorithms in JavaScript
- Analyze the performance guarantees of approximation algorithms
- Apply approximation techniques to solve real-world problems
- Compare different approximation strategies for the same problem


## Motivation

In the real world of software engineering, you'll frequently encounter problems that are computationally difficult to solve optimally. Many important problems in areas like routing, scheduling, resource allocation, and data clustering are NP-hard, meaning that finding the exact optimal solution would take an impractical amount of time as the problem size grows.

Approximation algorithms provide practical solutions to these challenging problems by trading off perfect optimality for reasonable efficiency. As a full stack engineer, understanding these algorithms will enable you to:

- Build scalable systems that can handle computationally difficult problems
- Make intelligent trade-offs between solution quality and performance
- Implement efficient solutions for problems in logistics, networking, machine learning, and more
- Optimize resource usage in web applications and backend systems


## Specific Things to Learn

### Introduction to Approximation Algorithms

Approximation algorithms are algorithms that find approximate solutions to optimization problems. Unlike exact algorithms that guarantee optimal solutions, approximation algorithms aim to find solutions that are "good enough" within a reasonable amount of time.

**Key Concepts:**

- **NP-hard problems**: Problems for which no known polynomial-time algorithm exists that can find the optimal solution. Examples include the Traveling Salesman Problem, Knapsack Problem, and Set Cover Problem.
- **Approximation ratio**: A measure of how close an approximate solution is to the optimal solution. For a minimization problem, if an algorithm has an approximation ratio of α, then the solution it produces is at most α times worse than the optimal solution.


**JavaScript Example: Approximation vs. Exact Solution**

```javascript
// Exact solution for subset sum (exponential time)
function findExactSubsetSum(numbers, target) {
  // This function would need to check all 2^n subsets
  // Exponential time complexity: O(2^n)
  
  function backtrack(index, currentSum, subset) {
    if (currentSum === target) {
      return subset;
    }
    if (index >= numbers.length || currentSum > target) {
      return null;
    }
    
    // Include current number
    const withCurrent = backtrack(
      index + 1, 
      currentSum + numbers[index], 
      [...subset, numbers[index]]
    );
    if (withCurrent) return withCurrent;
    
    // Exclude current number
    return backtrack(index + 1, currentSum, subset);
  }
  
  return backtrack(0, 0, []);
}

// Approximation algorithm for subset sum (polynomial time)
function approximateSubsetSum(numbers, target) {
  // Sort numbers in descending order
  numbers.sort((a, b) => b - a);
  
  let currentSum = 0;
  const subset = [];
  
  // Greedy approach: Take largest numbers first that don't exceed target
  for (const num of numbers) {
    if (currentSum + num <= target) {
      subset.push(num);
      currentSum += num;
    }
  }
  
  return { subset, sum: currentSum };
}

// Example usage
const numbers = [3, 34, 4, 12, 5, 2];
const target = 9;

console.log("Exact solution:", findExactSubsetSum(numbers, target)); // [4, 5]
console.log("Approximate solution:", approximateSubsetSum(numbers, target)); // {subset: [5, 4], sum: 9}
```

### Types of Approximation Algorithms

1. **Constant-factor approximation**: Algorithms that guarantee solutions within a constant factor of the optimal solution, regardless of input size.
2. **Polynomial-time approximation scheme (PTAS)**: Algorithms that can achieve any fixed approximation ratio α > 1 with polynomial runtime, though the polynomial's degree may increase as α approaches 1.
3. **Fully polynomial-time approximation scheme (FPTAS)**: A PTAS where the runtime is polynomial in both the input size and 1/(α-1).


**JavaScript Example: Constant-Factor Approximation for Vertex Cover**

```javascript
// A 2-approximation algorithm for the Vertex Cover problem
function approximateVertexCover(graph) {
  const cover = new Set();
  const edges = [...graph.edges]; // Copy of all edges
  
  while (edges.length > 0) {
    // Pick any edge (u, v)
    const [u, v] = edges.pop();
    
    // Add both endpoints to the cover
    cover.add(u);
    cover.add(v);
    
    // Remove all edges incident to either u or v
    for (let i = edges.length - 1; i >= 0; i--) {
      const [a, b] = edges[i];
      if (a === u || a === v || b === u || b === v) {
        edges.splice(i, 1);
      }
    }
  }
  
  return [...cover];
}

// Example usage
const graph = {
  vertices: ['A', 'B', 'C', 'D', 'E'],
  edges: [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'A']
  ]
};

console.log("Approximate vertex cover:", approximateVertexCover(graph));
// Output might be: ['A', 'B', 'C', 'D', 'E'] or a subset depending on the edge selection order
```

### Performance Guarantees

Performance guarantees are crucial for understanding the quality of solutions provided by approximation algorithms:

1. **Absolute guarantees**: The solution is at most a fixed value away from the optimal solution.
2. **Relative guarantees**: The solution is at most a factor (ratio) away from the optimal solution.
3. **Probabilistic guarantees**: The solution has a high probability of being within some bound of the optimal solution.


**JavaScript Example: Analyzing Approximation Ratio**

```javascript
// Function to analyze the approximation ratio empirically
function analyzeApproximationRatio(instances, exactAlgorithm, approximateAlgorithm) {
  const ratios = [];
  
  for (const instance of instances) {
    const exactSolution = exactAlgorithm(instance);
    const approximateSolution = approximateAlgorithm(instance);
    
    // For minimization problems
    const ratio = approximateSolution.cost / exactSolution.cost;
    ratios.push(ratio);
  }
  
  return {
    averageRatio: ratios.reduce((sum, ratio) => sum + ratio, 0) / ratios.length,
    worstRatio: Math.max(...ratios),
    bestRatio: Math.min(...ratios)
  };
}

// Example usage (simplified)
const instances = [/* problem instances */];
const results = analyzeApproximationRatio(
  instances,
  exactKnapsack,
  approximateKnapsack
);

console.log("Performance analysis:", results);
// Output might be: {averageRatio: 1.2, worstRatio: 1.5, bestRatio: 1.0}
```

### Common Approximation Techniques

1. **Greedy Algorithms**: Make locally optimal choices at each step, hoping to find a globally optimal solution.
2. **Linear Programming Relaxation**: Solve a relaxed version of the problem using linear programming, then round the solution to get a feasible solution to the original problem.
3. **Randomized Rounding**: Use randomization to convert fractional solutions from linear programming to integer solutions.
4. **Local Search**: Start with a feasible solution and iteratively improve it by making small changes.


**JavaScript Example: Greedy Approximation for Knapsack**

```javascript
// Greedy approximation for the Knapsack problem
function greedyKnapsack(items, capacity) {
  // Calculate value-to-weight ratio for each item
  const itemsWithRatio = items.map((item, index) => ({
    index,
    value: item.value,
    weight: item.weight,
    ratio: item.value / item.weight
  }));
  
  // Sort items by value-to-weight ratio in descending order
  itemsWithRatio.sort((a, b) => b.ratio - a.ratio);
  
  let totalValue = 0;
  let totalWeight = 0;
  const selectedItems = [];
  
  for (const item of itemsWithRatio) {
    if (totalWeight + item.weight <= capacity) {
      // Take the whole item
      selectedItems.push(item.index);
      totalValue += item.value;
      totalWeight += item.weight;
    }
  }
  
  return {
    selectedItems,
    totalValue,
    totalWeight
  };
}

// Example usage
const items = [
  { value: 60, weight: 10 },
  { value: 100, weight: 20 },
  { value: 120, weight: 30 }
];
const capacity = 50;

console.log("Greedy knapsack solution:", greedyKnapsack(items, capacity));
// Output: {selectedItems: [0, 1], totalValue: 160, totalWeight: 30}
```

### Real-world Applications

Approximation algorithms are used in numerous real-world applications:

1. **Route Planning**: Delivery services use approximation algorithms for the Traveling Salesman Problem to plan efficient routes.
2. **Network Design**: Telecommunications companies use approximation algorithms to design networks with minimal cost while meeting connectivity requirements.
3. **Resource Allocation**: Cloud providers use approximation algorithms to allocate computing resources efficiently.
4. **Data Clustering**: Machine learning applications use approximation algorithms for clustering large datasets.
5. **Scheduling**: Manufacturing and service industries use approximation algorithms to schedule tasks and resources.


**JavaScript Example: Approximation for Clustering**

```javascript
// K-means clustering (an approximation algorithm for the k-center problem)
function kMeansClustering(points, k, maxIterations = 100) {
  // Randomly initialize k centroids
  let centroids = [];
  for (let i = 0; i < k; i++) {
    centroids.push(points[Math.floor(Math.random() * points.length)]);
  }
  
  for (let iteration = 0; iteration < maxIterations; iteration++) {
    // Assign points to nearest centroid
    const clusters = Array(k).fill().map(() => []);
    
    for (const point of points) {
      let minDistance = Infinity;
      let closestCentroidIndex = 0;
      
      for (let i = 0; i < k; i++) {
        const distance = euclideanDistance(point, centroids[i]);
        if (distance < minDistance) {
          minDistance = distance;
          closestCentroidIndex = i;
        }
      }
      
      clusters[closestCentroidIndex].push(point);
    }
    
    // Update centroids
    const newCentroids = [];
    for (let i = 0; i < k; i++) {
      if (clusters[i].length === 0) {
        // If a cluster is empty, keep the old centroid
        newCentroids.push(centroids[i]);
      } else {
        // Calculate the mean of all points in the cluster
        const centroid = calculateMean(clusters[i]);
        newCentroids.push(centroid);
      }
    }
    
    // Check for convergence
    if (centroidsEqual(centroids, newCentroids)) {
      break;
    }
    
    centroids = newCentroids;
  }
  
  return centroids;
}

function euclideanDistance(point1, point2) {
  return Math.sqrt(
    point1.reduce((sum, value, i) => sum + Math.pow(value - point2[i], 2), 0)
  );
}

function calculateMean(points) {
  const dimensions = points[0].length;
  const mean = Array(dimensions).fill(0);
  
  for (const point of points) {
    for (let i = 0; i < dimensions; i++) {
      mean[i] += point[i];
    }
  }
  
  for (let i = 0; i < dimensions; i++) {
    mean[i] /= points.length;
  }
  
  return mean;
}

function centroidsEqual(centroids1, centroids2) {
  const epsilon = 0.0001; // Small threshold for floating-point comparison
  
  for (let i = 0; i < centroids1.length; i++) {
    if (euclideanDistance(centroids1[i], centroids2[i]) > epsilon) {
      return false;
    }
  }
  
  return true;
}

// Example usage
const points = [
  [1, 2], [2, 1], [2, 4], [1, 3], [3, 2], [5, 7], [6, 8], [7, 5], [8, 6]
];
const k = 2;

console.log("K-means clustering centroids:", kMeansClustering(points, k));
// Output will be two centroids representing the centers of the two clusters
```

## Lesson Activities

### Activity 1: Greedy Approximation for Set Cover

*Estimated time: 45 minutes*

In this activity, you'll implement a greedy approximation algorithm for the Set Cover problem, which is NP-hard.

**Problem Statement:**
Given a universe of elements U and a collection of sets S where each set contains some elements from U, find the minimum number of sets from S that cover all elements in U.

**Instructions:**

1. Implement the greedy algorithm for Set Cover:
   - At each step, choose the set that covers the most uncovered elements
   - Add this set to your solution
   - Mark all elements in this set as covered
   - Repeat until all elements are covered

```javascript
// Your implementation
function greedySetCover(universe, sets) {
  // Create a copy of the universe to track uncovered elements
  const uncovered = new Set(universe);
  const solution = [];
  
  // Continue until all elements are covered
  while (uncovered.size > 0) {
    let bestSet = null;
    let bestCoverage = 0;
    
    // Find the set that covers the most uncovered elements
    for (const set of sets) {
      let coverage = 0;
      for (const element of set) {
        if (uncovered.has(element)) {
          coverage++;
        }
      }
      
      if (coverage > bestCoverage) {
        bestCoverage = coverage;
        bestSet = set;
      }
    }
    
    // If no set covers any remaining elements, we can't cover the universe
    if (bestCoverage === 0) {
      return null; // No solution exists
    }
    
    // Add the best set to our solution
    solution.push(bestSet);
    
    // Mark elements from the best set as covered
    for (const element of bestSet) {
      uncovered.delete(element);
    }
  }
  
  return solution;
}

// Test your implementation
const universe = [1, 2, 3, 4, 5];
const sets = [
  [1, 2, 3],
  [2, 4],
  [3, 4],
  [4, 5]
];

const solution = greedySetCover(universe, sets);
console.log("Sets in the solution:", solution);
console.log("Number of sets used:", solution.length);

// Analyze the approximation ratio
// For Set Cover, the greedy algorithm has an approximation ratio of ln(n)
const n = universe.length;
console.log("Theoretical worst-case approximation ratio:", Math.log(n));
```

2. Answer the following questions:
   - What is the time complexity of your implementation?
   - What is the approximation ratio of the greedy algorithm for Set Cover?
   - Can you construct an example where the greedy algorithm doesn't find the optimal solution?

### Activity 2: Implementing a 2-Approximation for Vertex Cover

*Estimated time: 60 minutes*

In this activity, you'll implement and analyze a 2-approximation algorithm for the Vertex Cover problem.

**Problem Statement:**
Given an undirected graph G = (V, E), find the smallest subset of vertices such that each edge in the graph is incident to at least one vertex in the subset.

**Instructions:**

1. Implement the 2-approximation algorithm for Vertex Cover:
   - Start with an empty vertex cover
   - While there are uncovered edges:
      - Pick any uncovered edge (u, v)
      - Add both endpoints u and v to the vertex cover
      - Mark all edges incident to u or v as covered

```javascript
// Graph representation
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }
  
  getVertices() {
    return [...this.adjacencyList.keys()];
  }
  
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex) || [];
  }
  
  getAllEdges() {
    const edges = [];
    const visited = new Set();
    
    for (const [vertex, neighbors] of this.adjacencyList.entries()) {
      for (const neighbor of neighbors) {
        // Create a unique identifier for the edge
        const edgeId = [vertex, neighbor].sort().join('-');
        
        if (!visited.has(edgeId)) {
          edges.push([vertex, neighbor]);
          visited.add(edgeId);
        }
      }
    }
    
    return edges;
  }
}

// 2-approximation algorithm for Vertex Cover
function approximateVertexCover(graph) {
  const vertexCover = new Set();
  const uncoveredEdges = [...graph.getAllEdges()];
  
  while (uncoveredEdges.length > 0) {
    // Pick any uncovered edge
    const [u, v] = uncoveredEdges.pop();
    
    // Add both endpoints to the vertex cover
    vertexCover.add(u);
    vertexCover.add(v);
    
    // Remove all edges incident to u or v
    for (let i = uncoveredEdges.length - 1; i >= 0; i--) {
      const [a, b] = uncoveredEdges[i];
      if (a === u || a === v || b === u || b === v) {
        uncoveredEdges.splice(i, 1);
      }
    }
  }
  
  return [...vertexCover];
}

// Test your implementation
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'A');
graph.addEdge('A', 'C');

const vertexCover = approximateVertexCover(graph);
console.log("Approximate vertex cover:", vertexCover);
console.log("Size of vertex cover:", vertexCover.length);

// Verify that all edges are covered
function verifyVertexCover(graph, cover) {
  const coverSet = new Set(cover);
  
  for (const [u, v] of graph.getAllEdges()) {
    if (!coverSet.has(u) && !coverSet.has(v)) {
      return false; // Found an uncovered edge
    }
  }
  
  return true;
}

console.log("Is valid vertex cover:", verifyVertexCover(graph, vertexCover));
```

2. Prove that this algorithm has an approximation ratio of 2:
   - Consider the set of edges selected by the algorithm
   - Show that these edges form a matching (no two edges share an endpoint)
   - Argue that any vertex cover must include at least one vertex from each edge in the matching
   - Conclude that the optimal vertex cover has size at least half of your solution
3. Implement a brute-force algorithm to find the optimal vertex cover for small graphs and compare the results with your approximation algorithm.


### Activity 3: Traveling Salesman Problem Approximation

*Estimated time: 75 minutes*

In this activity, you'll implement a 2-approximation algorithm for the metric Traveling Salesman Problem (TSP) using the Minimum Spanning Tree (MST) approach.

**Problem Statement:**
Given a complete graph with distances between every pair of vertices satisfying the triangle inequality, find the shortest possible tour that visits each vertex exactly once and returns to the starting vertex.

**Instructions:**

1. Implement the MST-based approximation algorithm for TSP:
   - Compute a minimum spanning tree (MST) of the graph
   - Perform a preorder traversal of the MST to obtain a tour
   - Return to the starting vertex to complete the tour

```javascript
// Prim's algorithm for Minimum Spanning Tree
function primMST(graph) {
  const vertices = graph.getVertices();
  if (vertices.length === 0) return [];
  
  const startVertex = vertices[0];
  const visited = new Set([startVertex]);
  const mstEdges = [];
  
  // Continue until all vertices are in the MST
  while (visited.size < vertices.length) {
    let minEdge = null;
    let minWeight = Infinity;
    
    // Find the minimum-weight edge connecting a visited vertex to an unvisited vertex
    for (const u of visited) {
      for (const v of vertices) {
        if (!visited.has(v)) {
          const weight = graph.getWeight(u, v);
          if (weight < minWeight) {
            minWeight = weight;
            minEdge = [u, v];
          }
        }
      }
    }
    
    if (minEdge) {
      const [u, v] = minEdge;
      mstEdges.push(minEdge);
      visited.add(v);
    } else {
      // Graph is not connected
      break;
    }
  }
  
  return mstEdges;
}

// Build an adjacency list from MST edges
function buildMSTGraph(vertices, mstEdges) {
  const mstGraph = new Map();
  
  for (const vertex of vertices) {
    mstGraph.set(vertex, []);
  }
  
  for (const [u, v] of mstEdges) {
    mstGraph.get(u).push(v);
    mstGraph.get(v).push(u);
  }
  
  return mstGraph;
}

// Preorder traversal of the MST
function preorderTraversal(mstGraph, startVertex) {
  const visited = new Set();
  const tour = [];
  
  function dfs(vertex) {
    visited.add(vertex);
    tour.push(vertex);
    
    for (const neighbor of mstGraph.get(vertex)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }
  
  dfs(startVertex);
  return tour;
}

// TSP approximation using MST
function approximateTSP(graph) {
  const vertices = graph.getVertices();
  if (vertices.length <= 1) return vertices;
  
  // Compute MST
  const mstEdges = primMST(graph);
  const mstGraph = buildMSTGraph(vertices, mstEdges);
  
  // Perform preorder traversal
  const tour = preorderTraversal(mstGraph, vertices[0]);
  
  // Add the starting vertex to complete the tour
  tour.push(vertices[0]);
  
  return tour;
}

// Complete graph with distances
class CompleteGraph {
  constructor(vertices, getDistance) {
    this.vertices = vertices;
    this.getDistance = getDistance;
  }
  
  getVertices() {
    return this.vertices;
  }
  
  getWeight(u, v) {
    return this.getDistance(u, v);
  }
}

// Example usage with cities and Euclidean distances
const cities = [
  { name: 'A', x: 0, y: 0 },
  { name: 'B', x: 1, y: 3 },
  { name: 'C', x: 4, y: 2 },
  { name: 'D', x: 5, y: 5 },
  { name: 'E', x: 2, y: 7 }
];

function euclideanDistance(city1, city2) {
  return Math.sqrt(
    Math.pow(city1.x - city2.x, 2) + Math.pow(city1.y - city2.y, 2)
  );
}

const tspGraph = new CompleteGraph(
  cities,
  (city1, city2) => euclideanDistance(city1, city2)
);

const tspTour = approximateTSP(tspGraph);

console.log("TSP tour:", tspTour.map(city => city.name));

// Calculate the total distance of the tour
function calculateTourDistance(tour, getDistance) {
  let totalDistance = 0;
  
  for (let i = 0; i < tour.length - 1; i++) {
    totalDistance += getDistance(tour[i], tour[i + 1]);
  }
  
  return totalDistance;
}

const tourDistance = calculateTourDistance(tspTour, euclideanDistance);
console.log("Total tour distance:", tourDistance);
```

2. Analyze the approximation ratio:
   - Prove that the algorithm has an approximation ratio of 2 for metric TSP
   - Explain why the triangle inequality is necessary for this guarantee
3. Implement a simple local improvement heuristic (2-opt) to further optimize the tour:
   - Repeatedly find pairs of edges (a,b) and (c,d) in the tour such that replacing them with (a,c) and (b,d) reduces the total distance
   - Continue until no further improvements can be made

### Activity 4: Performance Analysis of Approximation Algorithms

*Estimated time: 60 minutes*

In this activity, you'll empirically analyze the performance of different approximation algorithms for the Knapsack problem.

**Problem Statement:**
Given a set of items, each with a weight and a value, determine which items to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible.

**Instructions:**

1. Implement three different approximation algorithms for the Knapsack problem:
   - Greedy by value: Select items in decreasing order of value
   - Greedy by weight: Select items in increasing order of weight
   - Greedy by value-to-weight ratio: Select items in decreasing order of value/weight

```javascript
// Item representation
class Item {
  constructor(id, value, weight) {
    this.id = id;
    this.value = value;
    this.weight = weight;
    this.ratio = value / weight;
  }
}

// Greedy by value
function greedyByValue(items, capacity) {
  // Sort items by value in descending order
  const sortedItems = [...items].sort((a, b) => b.value - a.value);
  
  return selectItems(sortedItems, capacity);
}

// Greedy by weight
function greedyByWeight(items, capacity) {
  // Sort items by weight in ascending order
  const sortedItems = [...items].sort((a, b) => a.weight - b.weight);
  
  return selectItems(sortedItems, capacity);
}

// Greedy by value-to-weight ratio
function greedyByRatio(items, capacity) {
  // Sort items by value-to-weight ratio in descending order
  const sortedItems = [...items].sort((a, b) => b.ratio - a.ratio);
  
  return selectItems(sortedItems, capacity);
}

// Helper function to select items based on the given order
function selectItems(sortedItems, capacity) {
  let remainingCapacity = capacity;
  const selectedItems = [];
  let totalValue = 0;
  
  for (const item of sortedItems) {
    if (item.weight <= remainingCapacity) {
      selectedItems.push(item);
      totalValue += item.value;
      remainingCapacity -= item.weight;
    }
  }
  
  return {
    selectedItems,
    totalValue,
    totalWeight: capacity - remainingCapacity
  };
}

// Dynamic programming for optimal solution (for small instances)
function optimalKnapsack(items, capacity) {
  const n = items.length;
  const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    const item = items[i - 1];
    
    for (let w = 0; w <= capacity; w++) {
      if (item.weight <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - item.weight] + item.value
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  
  // Reconstruct the solution
  const selectedItems = [];
  let remainingCapacity = capacity;
  
  for (let i = n; i > 0; i--) {
    if (dp[i][remainingCapacity] !== dp[i - 1][remainingCapacity]) {
      const item = items[i - 1];
      selectedItems.push(item);
      remainingCapacity -= item.weight;
    }
  }
  
  return {
    selectedItems: selectedItems.reverse(),
    totalValue: dp[n][capacity],
    totalWeight: capacity - remainingCapacity
  };
}

// Generate random test instances
function generateRandomInstances(numInstances, maxItems, maxValue, maxWeight, maxCapacity) {
  const instances = [];
  
  for (let i = 0; i < numInstances; i++) {
    const numItems = Math.floor(Math.random() * maxItems) + 5; // At least 5 items
    const items = [];
    
    for (let j = 0; j < numItems; j++) {
      const value = Math.floor(Math.random() * maxValue) + 1;
      const weight = Math.floor(Math.random() * maxWeight) + 1;
      items.push(new Item(j, value, weight));
    }
    
    const capacity = Math.floor(Math.random() * maxCapacity) + Math.max(...items.map(item => item.weight));
    
    instances.push({ items, capacity });
  }
  
  return instances;
}

// Analyze performance
function analyzePerformance(instances) {
  const results = {
    byValue: { ratios: [], avgRatio: 0 },
    byWeight: { ratios: [], avgRatio: 0 },
    byRatio: { ratios: [], avgRatio: 0 }
  };
  
  for (const instance of instances) {
    // Only compute optimal solution for small instances
    const optimal = instance.items.length <= 20 
      ? optimalKnapsack(instance.items, instance.capacity) 
      : null;
    
    const valueResult = greedyByValue(instance.items, instance.capacity);
    const weightResult = greedyByWeight(instance.items, instance.capacity);
    const ratioResult = greedyByRatio(instance.items, instance.capacity);
    
    if (optimal) {
      results.byValue.ratios.push(valueResult.totalValue / optimal.totalValue);
      results.byWeight.ratios.push(weightResult.totalValue / optimal.totalValue);
      results.byRatio.ratios.push(ratioResult.totalValue / optimal.totalValue);
    }
  }
  
  // Calculate average ratios
  results.byValue.avgRatio = results.byValue.ratios.reduce((sum, ratio) => sum + ratio, 0) / results.byValue.ratios.length;
  results.byWeight.avgRatio = results.byWeight.ratios.reduce((sum, ratio) => sum + ratio, 0) / results.byWeight.ratios.length;
  results.byRatio.avgRatio = results.byRatio.ratios.reduce((sum, ratio) => sum + ratio, 0) / results.byRatio.ratios.length;
  
  return results;
}

// Run the analysis
const instances = generateRandomInstances(10, 15, 100, 50, 200);
const performanceResults = analyzePerformance(instances);

console.log("Performance Analysis:");
console.log("Greedy by Value - Average Ratio:", performanceResults.byValue.avgRatio);
console.log("Greedy by Weight - Average Ratio:", performanceResults.byWeight.avgRatio);
console.log("Greedy by Ratio - Average Ratio:", performanceResults.byRatio.avgRatio);
```

2. Compare the performance of these algorithms:
   - Generate random problem instances of various sizes
   - For small instances, compute the optimal solution using dynamic programming
   - Calculate the approximation ratio for each algorithm on each instance
   - Analyze how the approximation ratio varies with problem characteristics
3. Create visualizations to present your findings:
   - Plot the approximation ratios for each algorithm across different problem instances
   - Analyze how the approximation ratio changes with the number of items
   - Identify patterns in the types of problems where each algorithm performs best

## Common Mistakes / Misconceptions

1. **Assuming approximation algorithms always produce poor solutions**
   - While approximation algorithms don't guarantee optimal solutions, they often produce solutions that are very close to optimal in practice.
   - Many approximation algorithms have theoretical worst-case guarantees, but typically perform much better on average.

2. **Confusing approximation algorithms with heuristics**
   - Approximation algorithms have provable performance guarantees.
   - Heuristics may work well in practice but lack formal guarantees.

3. **Overlooking the importance of problem structure**
   - The effectiveness of approximation algorithms often depends on specific problem properties.
   - For example, the 2-approximation for TSP requires the triangle inequality to hold.

4. **Focusing only on the approximation ratio**
   - While the approximation ratio is important, other factors like runtime, memory usage, and implementation complexity also matter.
   - An algorithm with a slightly worse approximation ratio might be preferable if it's significantly faster or easier to implement.

5. **Assuming NP-hard problems are always intractable**
   - Many NP-hard problems can be solved efficiently for small instances or special cases.
   - Approximation algorithms provide a way to handle larger instances with reasonable quality guarantees.

6. **Neglecting to verify the solution quality**
   - Always validate that your approximation algorithm produces feasible solutions.
   - When possible, compare against known bounds or small instances where the optimal solution can be computed.

7. **Implementing approximation algorithms incorrectly**
   - Small implementation errors can lead to solutions that don't satisfy the theoretical guarantees.
   - Test your implementation on simple cases where you know the correct answer.

8. **Applying approximation algorithms to the wrong problems**
   - Not all optimization problems benefit from approximation algorithms.
   - Some problems have efficient exact algorithms, while others may not have good approximation algorithms.
