# Graphs, Breadth-First Search (BFS), & Depth-First Search (DFS)

## 📚 Topic Outline
1. **Graph Fundamentals** - Build graphs step-by-step with code
2. **Breadth-First Search (BFS)** - Interactive implementation walkthrough
3. **Depth-First Search (DFS)** - Live coding both recursive and iterative versions
4. **Practical Applications** - Real problem-solving with working code

## ⏰ Time Commitment
- **Reading & Concept Review** (30 minutes)
- **Interactive Code Walkthroughs** (90 minutes)
- **Hands-on Coding Practice** (120 minutes)
- **Problem Solving Exercises** (60 minutes)
- **Total Module Time** (**5 hours**)

## 📋 Prerequisites

- [Arrays & Functions](/javascript/javascript-2-array-functions.md)
- [Variables, Strings, & Numbers](/javascript/javascript-1-variables.md)
- [Objects](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-6-object-literals.md)
- [Hash Maps](https://github.com/Techtonica/curriculum/blob/main/data-structures/hash-tables.md)
- [Recursion Basics](https://github.com/Techtonica/curriculum/blob/main/recursion/recursion.md)
- [Queue Data Structure](https://github.com/Techtonica/curriculum/blob/main/data-structures/queues.md)
- [Stack Data Structure](https://github.com/Techtonica/curriculum/blob/main/data-structures/stack.md)

### Quick Self-Check
- [ ] Can you create and manipulate JavaScript objects?
- [ ] Do you understand how arrays work?
- [ ] Have you written a recursive function before?
- [ ] Do you know what queues and stacks do?

## 🎯 Motivation: Why This Matters

Every day you use applications powered by graph algorithms:
**🌐 Social Media**: Friend suggestions analyze your connection network
**🗺️ Navigation**: GPS finds shortest routes through road networks  
**🎵 Streaming**: Music recommendations use listening pattern graphs
**🛒 Shopping**: "People also bought" comes from purchase relationship graphs
**🎮 Gaming**: Character AI and pathfinding rely on graph traversal

Learning these algorithms means understanding how the digital world actually works under the hood.


## 🎯 Learning Objectives

#### 🧠 Knowledge Goals
- **Explain** graphs using real-world examples
- **Identify** when problems need BFS vs DFS
- **Understand** how graph algorithms power everyday apps

#### 👩🏽‍💻 Skill Goals  
- **Build** graph data structures from scratch
- **Implement** BFS and DFS algorithms step-by-step
- **Debug** common graph algorithm issues
- **Trace** algorithm execution by hand

#### 🌐 Application Goals
- **Solve** pathfinding and connectivity problems
- **Recognize** graph patterns in technical interviews
- **Design** solutions using appropriate graph algorithms

## 📖 Specific Things to Learn

#### 1. Graph Fundamentals
- **Vertices** (nodes) and **Edges** (connections)
- **Directed** vs **Undirected** graphs
- **Adjacency Lists** vs **Adjacency Matrices**
- **Weighted** vs **Unweighted** edges

#### 2. Breadth-First Search (BFS)
- **Queue-based** exploration pattern
- **Level-by-level** traversal
- **Shortest path** properties in unweighted graphs
- **Implementation** with visited tracking

#### 3. Depth-First Search (DFS)
- **Stack-based** (or recursive) exploration
- **Go deep first** then backtrack
- **Cycle detection** capabilities
- **Recursive vs Iterative** implementations

#### 4. Algorithm Selection
- **When to use BFS**: shortest paths, level traversal
- **When to use DFS**: cycle detection, topological sorting
- **Performance comparison**: time and space complexity

---

## 🎮 Interactive Code Walkthroughs

<details><summary>
  Walkthrough 1: Building Your First Graph (20 minutes)
  Let's start by creating a simple graph representing a social network:
</summary>

```javascript
// Step 1: Create an empty graph using adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  // Step 2: Add a vertex (person) to our network
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  // Step 3: Add an edge (friendship) between two people
  addEdge(vertex1, vertex2) {
    // Add vertex2 to vertex1's friend list
    this.adjacencyList[vertex1].push(vertex2);
    // Add vertex1 to vertex2's friend list (undirected)
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  // Step 4: Display our graph
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
    }
  }
}

// Let's build a friend network!
const socialNetwork = new Graph();

// Add people to our network
socialNetwork.addVertex("Alice");
socialNetwork.addVertex("Bob");
socialNetwork.addVertex("Charlie");
socialNetwork.addVertex("Diana");

// Add friendships
socialNetwork.addEdge("Alice", "Bob");
socialNetwork.addEdge("Bob", "Charlie");
socialNetwork.addEdge("Charlie", "Diana");
socialNetwork.addEdge("Alice", "Diana");

// See the network
socialNetwork.display();
// Output:
// Alice -> Bob, Diana
// Bob -> Alice, Charlie  
// Charlie -> Bob, Diana
// Diana -> Charlie, Alice
```
</details>

**Try This**: Modify the code above to add yourself and your friends. What does your social network look like?

<details><summary>
  Walkthrough 2: Breadth-First Search Implementation (30 minutes)
  Now let's implement BFS to explore our graph level by level:
</summary>

```javascript
// BFS: Explore all neighbors before going deeper
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  // BFS Implementation - Step by Step
  breadthFirstSearch(startingVertex) {
    // Step 1: Create a queue and add starting vertex
    const queue = [startingVertex];
    
    // Step 2: Keep track of visited vertices
    const visited = {};
    visited[startingVertex] = true;
    
    // Step 3: Store the order we visit vertices
    const result = [];
    
    console.log("Starting BFS from:", startingVertex);
    
    // Step 4: Continue until queue is empty
    while (queue.length > 0) {
      // Remove first vertex from queue
      const currentVertex = queue.shift();
      result.push(currentVertex);
      
      console.log("Visiting:", currentVertex);
      console.log("Queue before processing neighbors:", [...queue]);
      
      // Step 5: Look at all neighbors
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          console.log("  Added neighbor to queue:", neighbor);
        }
      });
      
      console.log("Queue after processing neighbors:", [...queue]);
      console.log("---");
    }
    
    return result;
  }
}

// Test BFS on our social network
const graph = new Graph();
["Alice", "Bob", "Charlie", "Diana", "Eve"].forEach(person => {
  graph.addVertex(person);
});

graph.addEdge("Alice", "Bob");
graph.addEdge("Alice", "Charlie");
graph.addEdge("Bob", "Diana");
graph.addEdge("Charlie", "Eve");

console.log("BFS Traversal Order:", graph.breadthFirstSearch("Alice"));
```
</details>

**Expected Output Walkthrough**:
1. Start with Alice in queue: `["Alice"]`
2. Visit Alice, add her neighbors Bob and Charlie: `["Bob", "Charlie"]`
3. Visit Bob, add his unvisited neighbor Diana: `["Charlie", "Diana"]`
4. Visit Charlie, add his unvisited neighbor Eve: `["Diana", "Eve"]`
5. Visit Diana (no new neighbors): `["Eve"]`
6. Visit Eve (no new neighbors): `[]`
7. Queue empty - done!

<details><summary>
  Walkthrough 3: Depth-First Search - Recursive Version (25 minutes)
  DFS goes as deep as possible before backtracking:
</summary>

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  // DFS Recursive Implementation
  depthFirstSearchRecursive(startingVertex) {
    const result = [];
    const visited = {};
    
    // Helper function that does the actual recursion
    const dfsHelper = (vertex) => {
      // Base case: mark as visited and add to result
      visited[vertex] = true;
      result.push(vertex);
      console.log("Visiting:", vertex);
      
      // Recursive case: visit all unvisited neighbors
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          console.log("  Going deeper to:", neighbor);
          dfsHelper(neighbor); // Recursive call!
        }
      });
      
      console.log("Backtracking from:", vertex);
    };
    
    // Start the recursion
    dfsHelper(startingVertex);
    return result;
  }
}

// Test DFS on the same graph
const graph2 = new Graph();
["Alice", "Bob", "Charlie", "Diana", "Eve"].forEach(person => {
  graph2.addVertex(person);
});

graph2.addEdge("Alice", "Bob");
graph2.addEdge("Alice", "Charlie");
graph2.addEdge("Bob", "Diana");
graph2.addEdge("Charlie", "Eve");

console.log("DFS Recursive Order:", graph2.depthFirstSearchRecursive("Alice"));
```
</details>

**Trace the Recursion**:
1. Start at Alice → visit Alice
2. Alice's first neighbor is Bob → go to Bob
3. Bob's unvisited neighbor is Diana → go to Diana  
4. Diana has no unvisited neighbors → backtrack to Bob
5. Bob has no more unvisited neighbors → backtrack to Alice
6. Alice's next neighbor is Charlie → go to Charlie
7. Charlie's unvisited neighbor is Eve → go to Eve
8. Eve has no unvisited neighbors → backtrack all the way up

<details><summary>
  Walkthrough 4: DFS Iterative Version (25 minutes)
  Same algorithm, but using an explicit stack instead of recursion:
</summary>

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  // DFS Iterative Implementation using Stack
  depthFirstSearchIterative(startingVertex) {
    // Step 1: Create a stack and add starting vertex
    const stack = [startingVertex];
    const visited = {};
    const result = [];
    
    console.log("Starting DFS Iterative from:", startingVertex);
    
    // Step 2: Continue until stack is empty
    while (stack.length > 0) {
      // Remove last vertex from stack (LIFO)
      const currentVertex = stack.pop();
      
      // Only process if not visited yet
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
        console.log("Visiting:", currentVertex);
        console.log("Stack before adding neighbors:", [...stack]);
        
        // Add all neighbors to stack
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            stack.push(neighbor);
            console.log("  Added to stack:", neighbor);
          }
        });
        
        console.log("Stack after adding neighbors:", [...stack]);
        console.log("---");
      }
    }
    
    return result;
  }
}

// Test iterative DFS
const graph3 = new Graph();
["Alice", "Bob", "Charlie", "Diana", "Eve"].forEach(person => {
  graph3.addVertex(person);
});

graph3.addEdge("Alice", "Bob");
graph3.addEdge("Alice", "Charlie");
graph3.addEdge("Bob", "Diana");
graph3.addEdge("Charlie", "Eve");

console.log("DFS Iterative Order:", graph3.depthFirstSearchIterative("Alice"));
```
</details>

**Stack Trace**:
1. Stack starts: `["Alice"]`
2. Pop Alice, add neighbors: `["Bob", "Charlie"]`
3. Pop Charlie, add Eve: `["Bob", "Eve"]`
4. Pop Eve (no neighbors): `["Bob"]`
5. Pop Bob, add Diana: `["Diana"]`
6. Pop Diana (no neighbors): `[]`
7. Stack empty - done!

<details><summary>
  Walkthrough 5: Finding Shortest Path with BFS (30 minutes)
  BFS naturally finds the shortest path in unweighted graphs:
</summary>

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  // BFS to find shortest path between two vertices
  shortestPath(start, end) {
    // Special case: start and end are the same
    if (start === end) return [start];
    
    const queue = [start];
    const visited = { [start]: true };
    
    // Keep track of how we got to each vertex
    const previous = {};
    
    console.log(`Finding shortest path from ${start} to ${end}`);
    
    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log("Exploring from:", currentVertex);
      
      // Check all neighbors
      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          previous[neighbor] = currentVertex; // Remember how we got here
          queue.push(neighbor);
          
          console.log(`  Found ${neighbor} via ${currentVertex}`);
          
          // If we found our target, reconstruct the path
          if (neighbor === end) {
            console.log("Target found! Reconstructing path...");
            return this.reconstructPath(previous, start, end);
          }
        }
      }
    }
    
    // No path found
    return null;
  }
  
  // Helper function to rebuild the path
  reconstructPath(previous, start, end) {
    const path = [];
    let currentVertex = end;
    
    // Work backwards from end to start
    while (currentVertex !== undefined) {
      path.unshift(currentVertex); // Add to beginning of array
      currentVertex = previous[currentVertex];
    }
    
    console.log("Reconstructed path:", path);
    return path;
  }
}

// Test shortest path finding
const cityGraph = new Graph();
const cities = ["New York", "Chicago", "Denver", "Los Angeles", "Miami"];
cities.forEach(city => cityGraph.addVertex(city));

// Add connections (flights between cities)
cityGraph.addEdge("New York", "Chicago");
cityGraph.addEdge("New York", "Miami");
cityGraph.addEdge("Chicago", "Denver");
cityGraph.addEdge("Denver", "Los Angeles");
cityGraph.addEdge("Miami", "Los Angeles");

// Find shortest path
const shortestRoute = cityGraph.shortestPath("New York", "Los Angeles");
console.log("Shortest route:", shortestRoute);
// Expected: ["New York", "Miami", "Los Angeles"] or ["New York", "Chicago", "Denver", "Los Angeles"]
```
</details>

<details><summary>
  Walkthrough 6: Cycle Detection with DFS (25 minutes)
  DFS is perfect for detecting cycles in graphs:
</summary>

```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  // Detect if graph has a cycle using DFS
  hasCycle() {
    const visited = {};
    
    // Check each unvisited vertex (handles disconnected components)
    for (let vertex in this.adjacencyList) {
      if (!visited[vertex]) {
        if (this.dfsHasCycle(vertex, visited, null)) {
          return true;
        }
      }
    }
    
    return false;
  }
  
  // DFS helper for cycle detection
  dfsHasCycle(vertex, visited, parent) {
    visited[vertex] = true;
    console.log(`Visiting ${vertex} (parent: ${parent})`);
    
    // Check all neighbors
    for (let neighbor of this.adjacencyList[vertex]) {
      console.log(`  Checking neighbor: ${neighbor}`);
      
      if (!visited[neighbor]) {
        // Recursively check unvisited neighbor
        if (this.dfsHasCycle(neighbor, visited, vertex)) {
          return true;
        }
      } else if (neighbor !== parent) {
        // Found a visited vertex that's not our parent = cycle!
        console.log(`  CYCLE DETECTED: ${vertex} -> ${neighbor} (not parent)`);
        return true;
      }
    }
    
    console.log(`  No cycle found from ${vertex}`);
    return false;
  }
}

// Test cycle detection
console.log("=== Testing Graph WITHOUT Cycle ===");
const noCycleGraph = new Graph();
["A", "B", "C", "D"].forEach(v => noCycleGraph.addVertex(v));
noCycleGraph.addEdge("A", "B");
noCycleGraph.addEdge("B", "C");
noCycleGraph.addEdge("C", "D");

console.log("Has cycle:", noCycleGraph.hasCycle()); // Should be false

console.log("\n=== Testing Graph WITH Cycle ===");
const cycleGraph = new Graph();
["A", "B", "C", "D"].forEach(v => cycleGraph.addVertex(v));
cycleGraph.addEdge("A", "B");
cycleGraph.addEdge("B", "C");
cycleGraph.addEdge("C", "D");
cycleGraph.addEdge("D", "A"); // This creates a cycle!

console.log("Has cycle:", cycleGraph.hasCycle()); // Should be true
```
</details>

---

## 🎮 Hands-On Practice Activities

### Activity 1: Build a Maze Solver (30 minutes)

<details><summary>
  Create a simple maze and use BFS to find the shortest path:
</summary>

```javascript
// Represent maze as 2D array: 0 = path, 1 = wall
const maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0]
];

class MazeSolver {
  constructor(maze) {
    this.maze = maze;
    this.rows = maze.length;
    this.cols = maze[0].length;
  }
  
  // Find shortest path from start to end using BFS
  solveMaze(start, end) {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    
    // Check if start or end is a wall
    if (this.maze[startRow][startCol] === 1 || this.maze[endRow][endCol] === 1) {
      return null;
    }
    
    const queue = [[startRow, startCol, 0]]; // [row, col, distance]
    const visited = new Set();
    visited.add(`${startRow},${startCol}`);
    
    // Directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while (queue.length > 0) {
      const [row, col, distance] = queue.shift();
      
      // Found the end!
      if (row === endRow && col === endCol) {
        return distance;
      }
      
      // Try all four directions
      for (let [dRow, dCol] of directions) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        const key = `${newRow},${newCol}`;
        
        // Check bounds and if it's a valid path
        if (this.isValidMove(newRow, newCol) && !visited.has(key)) {
          visited.add(key);
          queue.push([newRow, newCol, distance + 1]);
        }
      }
    }
    
    return -1; // No path found
  }
  
  isValidMove(row, col) {
    return row >= 0 && row < this.rows && 
           col >= 0 && col < this.cols && 
           this.maze[row][col] === 0;
  }
}

// Test the maze solver
const solver = new MazeSolver(maze);
const shortestDistance = solver.solveMaze([0, 0], [4, 2]);
console.log("Shortest path length:", shortestDistance);
```
</details>

**Your Turn**: Modify the maze and try different start/end points. Can you make the maze unsolvable?

### Activity 2: Social Network Analysis (25 minutes)

<details><summary>
  Use graph algorithms to analyze social connections:
</summary>

```javascript
class SocialNetwork {
  constructor() {
    this.friendships = {};
  }
  
  addPerson(name) {
    if (!this.friendships[name]) {
      this.friendships[name] = [];
    }
  }
  
  addFriendship(person1, person2) {
    this.friendships[person1].push(person2);
    this.friendships[person2].push(person1);
  }
  
  // Find mutual friends between two people
  findMutualFriends(person1, person2) {
    const friends1 = new Set(this.friendships[person1]);
    const friends2 = new Set(this.friendships[person2]);
    
    const mutual = [];
    for (let friend of friends1) {
      if (friends2.has(friend)) {
        mutual.push(friend);
      }
    }
    
    return mutual;
  }
  
  // Find degrees of separation using BFS
  degreesOfSeparation(person1, person2) {
    if (person1 === person2) return 0;
    
    const queue = [[person1, 0]]; // [person, degree]
    const visited = new Set([person1]);
    
    while (queue.length > 0) {
      const [currentPerson, degree] = queue.shift();
      
      for (let friend of this.friendships[currentPerson]) {
        if (friend === person2) {
          return degree + 1;
        }
        
        if (!visited.has(friend)) {
          visited.add(friend);
          queue.push([friend, degree + 1]);
        }
      }
    }
    
    return -1; // Not connected
  }
  
  // Find all people within N degrees using BFS
  findPeopleWithinDegrees(person, maxDegrees) {
    const result = {};
    const queue = [[person, 0]];
    const visited = new Set([person]);
    
    while (queue.length > 0) {
      const [currentPerson, degree] = queue.shift();
      
      if (degree <= maxDegrees) {
        if (!result[degree]) result[degree] = [];
        result[degree].push(currentPerson);
        
        for (let friend of this.friendships[currentPerson]) {
          if (!visited.has(friend) && degree < maxDegrees) {
            visited.add(friend);
            queue.push([friend, degree + 1]);
          }
        }
      }
    }
    
    return result;
  }
}

// Build a social network
const network = new SocialNetwork();
const people = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"];
people.forEach(person => network.addPerson(person));

// Add friendships
network.addFriendship("Alice", "Bob");
network.addFriendship("Bob", "Charlie");
network.addFriendship("Charlie", "Diana");
network.addFriendship("Alice", "Eve");
network.addFriendship("Eve", "Frank");
network.addFriendship("Diana", "Frank");

// Analyze the network
console.log("Mutual friends of Alice and Charlie:", 
  network.findMutualFriends("Alice", "Charlie"));

console.log("Degrees of separation between Alice and Diana:", 
  network.degreesOfSeparation("Alice", "Diana"));

console.log("People within 2 degrees of Alice:", 
  network.findPeopleWithinDegrees("Alice", 2));
```
</details>

### Activity 3: Dependency Resolution (20 minutes)

<details><summary>
  Use DFS to handle task dependencies (like build systems):
</summary>

```javascript
class TaskManager {
  constructor() {
    this.dependencies = {};
    this.tasks = new Set();
  }
  
  addTask(task) {
    this.tasks.add(task);
    if (!this.dependencies[task]) {
      this.dependencies[task] = [];
    }
  }
  
  addDependency(task, dependsOn) {
    this.dependencies[task].push(dependsOn);
  }
  
  // Use DFS to detect circular dependencies
  hasCircularDependency() {
    const visited = new Set();
    const recursionStack = new Set();
    
    for (let task of this.tasks) {
      if (this.dfsHasCycle(task, visited, recursionStack)) {
        return true;
      }
    }
    
    return false;
  }
  
  dfsHasCycle(task, visited, recursionStack) {
    if (recursionStack.has(task)) {
      console.log("Circular dependency detected involving:", task);
      return true;
    }
    
    if (visited.has(task)) {
      return false;
    }
    
    visited.add(task);
    recursionStack.add(task);
    
    for (let dependency of this.dependencies[task]) {
      if (this.dfsHasCycle(dependency, visited, recursionStack)) {
        return true;
      }
    }
    
    recursionStack.delete(task);
    return false;
  }
  
  // Get valid execution order using topological sort
  getExecutionOrder() {
    if (this.hasCircularDependency()) {
      return null; // Can't order tasks with circular dependencies
    }
    
    const visited = new Set();
    const stack = [];
    
    for (let task of this.tasks) {
      if (!visited.has(task)) {
        this.topologicalSort(task, visited, stack);
      }
    }
    
    return stack.reverse();
  }
  
  topologicalSort(task, visited, stack) {
    visited.add(task);
    
    for (let dependency of this.dependencies[task]) {
      if (!visited.has(dependency)) {
        this.topologicalSort(dependency, visited, stack);
      }
    }
    
    stack.push(task);
  }
}

// Example: Software build process
const buildSystem = new TaskManager();

// Add build tasks
["compile", "test", "package", "deploy", "install-deps"].forEach(task => {
  buildSystem.addTask(task);
});

// Add dependencies
buildSystem.addDependency("compile", "install-deps");
buildSystem.addDependency("test", "compile");
buildSystem.addDependency("package", "test");
buildSystem.addDependency("deploy", "package");

console.log("Has circular dependencies:", buildSystem.hasCircularDependency());
console.log("Execution order:", buildSystem.getExecutionOrder());

// Test with circular dependency
buildSystem.addDependency("install-deps", "deploy"); // Creates cycle!
console.log("After adding circular dependency:");
console.log("Has circular dependencies:", buildSystem.hasCircularDependency());
```
</details>

---

## 🏆 Assessment and Next Steps

#### Knowledge Check Questions

1. **When would you use BFS over DFS?**
   - Finding shortest paths in unweighted graphs
   - Level-order traversal
   - Finding minimum spanning trees
   - All of the above

2. **What data structure does BFS primarily use?**
   - Stack
   - Queue  
   - Array
   - Linked List

3. **Which algorithm is better for detecting cycles?**
   - BFS
   - DFS
   - Both are equally good
   - Neither can detect cycles

#### Coding Challenges

**Beginner**: Implement a function to count connected components in a graph
**Intermediate**: Find the shortest path in a weighted graph (hint: you'll need Dijkstra's algorithm)
**Advanced**: Implement A* search for pathfinding with heuristics

#### Real-World Projects

1. **Friend Recommendation System**: Build a feature that suggests mutual friends
2. **Route Planner**: Create a simple GPS-like shortest path finder
3. **Dependency Tracker**: Build a tool to manage project dependencies
4. **Social Network Analyzer**: Analyze influence and connectivity in networks

---

## 🚀 What's Next?

After mastering BFS and DFS, you're ready for:

#### Advanced Graph Algorithms
- Dijkstra's Algorithm: Shortest paths in weighted graphs
- A* Search: Intelligent pathfinding with heuristics  
- Minimum Spanning Trees: Kruskal's and Prim's algorithms
- Network Flow: Maximum flow and minimum cut problems

#### Related Topics
- Dynamic Programming: Optimizing recursive solutions
- Greedy Algorithms: Making locally optimal choices
- Advanced Data Structures: Heaps, tries, and segment trees

Remember: The best way to learn algorithms is by coding them yourself. Start with the simple examples, then gradually work up to more complex problems. Every expert was once a beginner!
