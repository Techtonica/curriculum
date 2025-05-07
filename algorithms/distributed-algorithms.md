### Distributed Algorithms

## Prerequisites
- [Data Structures & Algorithms](https://github.com/Techtonica/curriculum/tree/main/algorithms)
- [Computer Networks](https://github.com/Techtonica/curriculum/tree/main/networking)
- [Operating Systems Basics](https://github.com/Techtonica/curriculum/tree/main/dev-tools/operating-systems)
- [Databases](https://github.com/Techtonica/curriculum/tree/main/databases)
- [API Development](https://github.com/Techtonica/curriculum/tree/main/api)

## Table of Contents
- [Objectives](#objectives)
- [Motivation](#motivation)
- [Specific Things to Learn](#specific-things-to-learn)
    - [Fundamentals of Distributed Systems](#fundamentals-of-distributed-systems)
    - [Consensus Algorithms](#consensus-algorithms)
    - [Distributed Data Storage](#distributed-data-storage)
    - [Fault Tolerance and Recovery](#fault-tolerance-and-recovery)
    - [Distributed Transactions](#distributed-transactions)
    - [Scalability Patterns](#scalability-patterns)
    - [Implementing Distributed Algorithms in JavaScript](#implementing-distributed-algorithms-in-javascript)
- [Lesson Activities](#lesson-activities)
    - [Activity 1: Implementing a Distributed Counter](#activity-1-implementing-a-distributed-counter)
    - [Activity 2: Building a Distributed Key-Value Store](#activity-2-building-a-distributed-key-value-store)
    - [Activity 3: Implementing a Heartbeat Failure Detector](#activity-3-implementing-a-heartbeat-failure-detector)
    - [Activity 4: Implementing Leader Election](#activity-4-implementing-leader-election)
    - [Activity 5: Exploring the CAP Theorem](#activity-5-exploring-the-cap-theorem)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)


## Objectives

By the end of this lesson, you should be able to:
1. Explain the core principles of distributed systems and algorithms
2. Understand consensus mechanisms and their importance in distributed systems
3. Analyze trade-offs in distributed system design using the CAP theorem
4. Implement basic fault tolerance strategies
5. Design scalable distributed applications with appropriate consistency models
6. Troubleshoot common issues in distributed systems


## Motivation

### Why Learn Distributed Algorithms?
In today's technology landscape, distributed systems are everywhere. From the apps on your phone to enterprise software, modern applications rarely run on a single machine. As a full stack engineer, understanding distributed algorithms is crucial because:
- **Scale**: Modern applications need to handle millions of users and petabytes of data
- **Reliability**: Users expect services to be available 24/7 with minimal downtime
- **Performance**: Distributed systems can process tasks in parallel, reducing response times
- **Career Growth**: Expertise in distributed systems is highly valued and well-compensated in the industry


### Real-World Applications
- **E-commerce platforms** like Amazon use distributed systems to handle millions of concurrent users during peak shopping seasons
- **Social media apps** like Instagram process and store billions of photos across distributed databases
- **Financial systems** use distributed algorithms to ensure transaction consistency across global networks
- **Streaming services** like Netflix use distributed content delivery networks to provide seamless video streaming
- **Cloud platforms** like AWS, Google Cloud, and Azure are built entirely on distributed system principles


## Specific Things to Learn

### Fundamentals of Distributed Systems
Distributed systems consist of multiple computers working together as a unified system. Unlike traditional monolithic applications, distributed systems introduce unique challenges:

**Key Concepts:**
- **Node**: An individual computer or process in a distributed system
- **Communication**: How nodes exchange information (typically via message passing)
- **Coordination**: How nodes work together to achieve a common goal
- **Partial Failure**: When some components fail while others continue working

**Time and Ordering:**
- **Physical Clock Synchronization**: Techniques like Network Time Protocol (NTP)
- **Logical Clocks**: Lamport timestamps and vector clocks for event ordering
- **Causality**: Tracking cause-and-effect relationships between events

**Real-World Example:**
Google's Spanner database uses GPS and atomic clocks (TrueTime API) to synchronize time across global data centers, enabling consistent transactions worldwide.

**Benefits:**
- Enables horizontal scaling across multiple machines
- Provides geographic distribution for lower latency
- Increases fault tolerance through redundancy

**Tradeoffs:**
- Introduces complexity in system design and debugging
- Creates network-related performance bottlenecks
- Makes it harder to reason about system behavior

### Consensus Algorithms
Consensus algorithms allow distributed systems to agree on values or states, which is fundamental for coordination.

**Popular Consensus Algorithms:**
- **Paxos**: The first provably correct consensus algorithm (but complex to implement)
- **Raft**: Designed to be more understandable than Paxos with leader election and log replication
- **Practical Byzantine Fault Tolerance (PBFT)**: Handles malicious nodes (Byzantine faults)
- **Proof of Work/Stake**: Used in blockchain systems like Bitcoin and Ethereum

**Real-World Example:**
Etcd, the distributed key-value store that powers Kubernetes, uses the Raft consensus algorithm to maintain a consistent state across cluster nodes.

**Benefits:**
- Enables reliable decision-making in distributed environments
- Provides guarantees about system consistency
- Forms the foundation for distributed databases and blockchains

**Tradeoffs:**
- Consensus algorithms typically sacrifice performance for consistency
- Most algorithms require majority agreement (limiting fault tolerance)
- Complex to implement correctly and efficiently

### Distributed Data Storage
Distributed storage systems spread data across multiple machines to achieve scalability and reliability.

**Key Concepts:**
- **Partitioning/Sharding**: Dividing data across nodes based on keys or ranges
- **Replication**: Storing copies of data on multiple nodes
- **Consistency Models**: Strong, eventual, causal, and other consistency guarantees
- **CAP Theorem**: The fundamental trade-off between Consistency, Availability, and Partition tolerance

**Popular Distributed Databases:**
- **NoSQL**: MongoDB (document), Cassandra (wide-column), Redis (key-value)
- **NewSQL**: Google Spanner, CockroachDB, Amazon Aurora
- **Distributed File Systems**: HDFS, GFS, S3

**Real-World Example:**
Netflix uses Cassandra as their primary database, storing user profiles, viewing history, and recommendations across a globally distributed cluster that handles millions of operations per second.

**Benefits:**
- Scales horizontally by adding more machines
- Provides geographic distribution for lower access latency
- Increases data durability through replication

**Tradeoffs:**
- Introduces consistency challenges (CAP theorem constraints)
- Increases operational complexity
- May require application-level compensation for weaker consistency models

### Fault Tolerance and Recovery
Distributed systems must continue functioning despite partial failures, which are inevitable at scale.

**Key Techniques:**
- **Replication**: Maintaining multiple copies of data and services
- **Failure Detection**: Heartbeats, gossip protocols, and failure detectors
- **State Transfer**: Bringing recovered nodes up to date
- **Checkpointing**: Saving system state for faster recovery
- **Circuit Breakers**: Preventing cascading failures

**Real-World Example:**
Netflix's Chaos Monkey deliberately terminates instances in production to ensure their systems can withstand failures gracefully.

**Benefits:**
- Increases system reliability and uptime
- Reduces data loss during failures
- Enables maintenance without service disruption

**Tradeoffs:**
- Increases resource usage (for redundancy)
- Adds complexity to system design
- May impact performance during normal operation

### Distributed Transactions
Transactions in distributed systems require special protocols to maintain ACID properties across multiple nodes.

**Key Concepts:**
- **Two-Phase Commit (2PC)**: Prepare and commit phases for atomic transactions
- **Three-Phase Commit (3PC)**: Adds a pre-commit phase to handle coordinator failures
- **Saga Pattern**: Breaking long-running transactions into smaller, compensating transactions
- **Distributed Deadlock Detection**: Identifying and resolving deadlocks across nodes

**Real-World Example:**
Payment processors like PayPal use distributed transactions to ensure money is correctly transferred between accounts, even when different account databases are on separate systems.

**Benefits:**
- Maintains data integrity across distributed systems
- Provides familiar transaction semantics for developers
- Enables complex business operations across services

**Tradeoffs:**
- Traditional distributed transactions (2PC) block during coordinator failures
- Performance impact due to coordination overhead
- May limit system scalability

### Scalability Patterns
Patterns and techniques for building systems that can handle growing loads.

**Key Patterns:**
- **Load Balancing**: Distributing requests across multiple servers
- **Caching**: Reducing load by storing frequently accessed data in memory
- **Database Sharding**: Horizontal partitioning of databases
- **Microservices**: Breaking applications into smaller, independently scalable services
- **Event-Driven Architecture**: Using message queues for asynchronous processing

**Real-World Example:**
Twitter's architecture uses a combination of these patterns—sharded databases, distributed caching with Redis, and microservices—to handle over 500 million tweets per day.

**Benefits:**
- Enables handling increasing user loads
- Improves resource utilization
- Allows for targeted scaling of bottlenecked components

**Tradeoffs:**
- Increases system complexity
- Requires more sophisticated monitoring and operations
- May introduce new failure modes

### Implementing Distributed Algorithms in JavaScript

Understanding how to implement distributed algorithms in JavaScript is valuable for web developers transitioning to distributed systems. Below is an implementation of the Bully Algorithm for leader election, a fundamental building block for many distributed systems:

#### Bully Algorithm Implementation

```javascript
class Node {
  constructor(id, nodes = []) {
    this.id = id;
    this.nodes = nodes;
    this.leaderId = null;
    this.isLeader = false;
    this.electionInProgress = false;
    this.timeout = null;
  }

  // Start an election
  startElection() {
    console.log(`Node ${this.id} starting election`);
    this.electionInProgress = true;
    
    // Get nodes with higher IDs
    const higherNodes = this.nodes.filter(node => node.id > this.id);
    
    if (higherNodes.length === 0) {
      // No higher nodes, become leader
      this.becomeLeader();
    } else {
      // Send election messages to higher nodes
      higherNodes.forEach(node => {
        this.sendElectionMessage(node);
      });
      
      // Set timeout for responses
      this.timeout = setTimeout(() => {
        if (this.electionInProgress) {
          this.becomeLeader();
        }
      }, 1000);
    }
  }

  // Send election message to another node
  sendElectionMessage(node) {
    console.log(`Node ${this.id} sending ELECTION to ${node.id}`);
    // In a real system, this would be a network call
    node.receiveElectionMessage(this);
  }

  // Receive election message from another node
  receiveElectionMessage(sender) {
    console.log(`Node ${this.id} received ELECTION from ${sender.id}`);
    
    // Send OK response
    this.sendOkMessage(sender);
    
    // Start own election if not already in progress
    if (!this.electionInProgress) {
      this.startElection();
    }
  }

  // Send OK message in response to election
  sendOkMessage(node) {
    console.log(`Node ${this.id} sending OK to ${node.id}`);
    // In a real system, this would be a network call
    node.receiveOkMessage(this);
  }

  // Receive OK message
  receiveOkMessage(sender) {
    console.log(`Node ${this.id} received OK from ${sender.id}`);
    // Cancel leadership claim
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.electionInProgress = false;
  }

  // Become the leader
  becomeLeader() {
    console.log(`Node ${this.id} becoming leader`);
    this.isLeader = true;
    this.leaderId = this.id;
    this.electionInProgress = false;
    
    // Announce leadership to all nodes
    this.nodes.forEach(node => {
      if (node.id !== this.id) {
        this.sendLeaderMessage(node);
      }
    });
  }

  // Send leader announcement
  sendLeaderMessage(node) {
    console.log(`Node ${this.id} announcing leadership to ${node.id}`);
    // In a real system, this would be a network call
    node.receiveLeaderMessage(this);
  }

  // Receive leader announcement
  receiveLeaderMessage(leader) {
    console.log(`Node ${this.id} accepting ${leader.id} as leader`);
    this.isLeader = false;
    this.leaderId = leader.id;
    this.electionInProgress = false;
  }

  // Detect leader failure
  detectLeaderFailure() {
    console.log(`Node ${this.id} detected leader failure`);
    this.leaderId = null;
    this.startElection();
  }
}
```

#### Vector Clocks for Causality Tracking
Vector clocks are essential for tracking causality in distributed systems. This implementation demonstrates how to maintain and compare logical timestamps across distributed nodes:

```javascript
class VectorClock {
  constructor(nodeId, totalNodes) {
    this.nodeId = nodeId;
    // Initialize vector with zeros for all nodes
    this.vector = new Array(totalNodes).fill(0);
  }

  // Increment local counter for an event
  increment() {
    this.vector[this.nodeId]++;
    return this.clone();
  }

  // Update vector when receiving a message
  update(otherClock) {
    // Take the maximum of each position
    for (let i = 0; i &lt; this.vector.length; i++) {
      this.vector[i] = Math.max(this.vector[i], otherClock.vector[i]);
    }
    // Increment local counter
    this.vector[this.nodeId]++;
    return this.clone();
  }

  // Compare with another vector clock
  compare(otherClock) {
    let isGreater = false;
    let isLess = false;

    for (let i = 0; i &lt; this.vector.length; i++) {
      if (this.vector[i] > otherClock.vector[i]) {
        isGreater = true;
      } else if (this.vector[i] &lt; otherClock.vector[i]) {
        isLess = true;
      }
    }

    if (isGreater && !isLess) return 1;      // Happened after
    if (!isGreater && isLess) return -1;     // Happened before
    if (!isGreater && !isLess) return 0;     // Same time
    return null;                             // Concurrent events
  }

  // Create a copy of this clock
  clone() {
    const copy = new VectorClock(this.nodeId, this.vector.length);
    copy.vector = [...this.vector];
    return copy;
  }

  toString() {
    return `[${this.vector.join(', ')}]`;
  }
}

// Example usage
function demonstrateVectorClocks() {
  console.log("Vector Clock Demonstration");
  
  // Create three nodes with their vector clocks
  const clockA = new VectorClock(0, 3);
  const clockB = new VectorClock(1, 3);
  const clockC = new VectorClock(2, 3);
  
  console.log("Initial state:");
  console.log(`Node A: ${clockA}`);
  console.log(`Node B: ${clockB}`);
  console.log(`Node C: ${clockC}`);
  
  // Node A performs an event
  clockA.increment();
  console.log("\nNode A performs an event:");
  console.log(`Node A: ${clockA}`);
  
  // Node A sends a message to Node B
  const messageClockAB = clockA.clone();
  console.log("\nNode A sends a message to Node B");
  
  // Node B receives the message and updates its clock
  clockB.update(messageClockAB);
  console.log("Node B receives the message:");
  console.log(`Node A: ${clockA}`);
  console.log(`Node B: ${clockB}`);
  
  // Node B performs an event
  clockB.increment();
  console.log("\nNode B performs an event:");
  console.log(`Node B: ${clockB}`);
  
  // Node C performs two events
  clockC.increment();
  clockC.increment();
  console.log("\nNode C performs two events:");
  console.log(`Node C: ${clockC}`);
  
  // Node C sends a message to Node A
  const messageClockCA = clockC.clone();
  console.log("\nNode C sends a message to Node A");
  
  // Node A receives the message and updates its clock
  clockA.update(messageClockCA);
  console.log("Node A receives the message:");
  console.log(`Node A: ${clockA}`);
  console.log(`Node C: ${clockC}`);
  
  // Compare events
  console.log("\nCausality relationships:");
  const comparisonAB = clockA.compare(clockB);
  const comparisonAC = clockA.compare(clockC);
  const comparisonBC = clockB.compare(clockC);
  
  console.log(`A compared to B: ${interpretComparison(comparisonAB)}`);
  console.log(`A compared to C: ${interpretComparison(comparisonAC)}`);
  console.log(`B compared to C: ${interpretComparison(comparisonBC)}`);
}

function interpretComparison(result) {
  if (result === 1) return "happened after";
  if (result === -1) return "happened before";
  if (result === 0) return "same time";
  return "concurrent with";
}

demonstrateVectorClocks();
```

**Relevance**: Vector clocks directly connect to the "Time and Event Ordering" topic in this outline. They demonstrate how distributed systems track causality without perfect clock synchronization, which is essential for maintaining consistency in distributed databases and messaging systems.

#### Consistent Hashing for Data Partitioning
Consistent hashing is a technique used for distributing data across multiple nodes while minimizing redistribution when nodes are added or removed:

```javascript
class ConsistentHashing {
  constructor(numberOfReplicas = 3) {
    this.numberOfReplicas = numberOfReplicas;
    this.ring = {};  // Hash ring
    this.sortedKeys = [];  // Sorted keys for binary search
    this.nodes = new Set();  // Track active nodes
  }

  // Add a node to the hash ring
  addNode(node) {
    if (this.nodes.has(node)) return;
    
    this.nodes.add(node);
    
    // Add virtual nodes (replicas) to the ring
    for (let i = 0; i &lt; this.numberOfReplicas; i++) {
      const key = this.hash(`${node}:${i}`);
      this.ring[key] = node;
    }
    
    // Update sorted keys
    this.sortedKeys = Object.keys(this.ring).map(Number).sort((a, b) => a - b);
    
    console.log(`Added node ${node} with ${this.numberOfReplicas} replicas`);
  }
  
  // Remove a node from the hash ring
  removeNode(node) {
    if (!this.nodes.has(node)) return;
    
    this.nodes.delete(node);
    
    // Remove virtual nodes from the ring
    for (let i = 0; i &lt; this.numberOfReplicas; i++) {
      const key = this.hash(`${node}:${i}`);
      delete this.ring[key];
    }
    
    // Update sorted keys
    this.sortedKeys = Object.keys(this.ring).map(Number).sort((a, b) => a - b);
    
    console.log(`Removed node ${node}`);
  }
  
  // Get the node responsible for a key
  getNode(key) {
    if (this.sortedKeys.length === 0) return null;
    
    const hash = this.hash(key);
    
    // Find the first point in the ring with a hash >= the key's hash
    let idx = this.findClosestNodeIdx(hash);
    
    // Return the node at that position
    return this.ring[this.sortedKeys[idx]];
  }
  
  // Find the index of the closest node in the ring
  findClosestNodeIdx(hash) {
    // Binary search to find the closest node
    let left = 0;
    let right = this.sortedKeys.length - 1;
    
    if (hash > this.sortedKeys[right]) {
      // Wrap around to the first node if hash is greater than all nodes
      return 0;
    }
    
    while (left &lt;= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (this.sortedKeys[mid] === hash) {
        return mid;
      }
      
      if (this.sortedKeys[mid] > hash) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    
    // If we didn't find an exact match, left is the insertion point
    // which is the index of the first element greater than hash
    return left % this.sortedKeys.length;
  }
  
  // Simple hash function (for demonstration purposes)
  hash(key) {
    let hash = 0;
    for (let i = 0; i &lt; key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % 1000;
    }
    return hash;
  }
  
  // Get distribution statistics
  getDistribution(keys) {
    const distribution = {};
    
    // Initialize counters for each node
    for (const node of this.nodes) {
      distribution[node] = 0;
    }
    
    // Count keys per node
    for (const key of keys) {
      const node = this.getNode(key);
      if (node) {
        distribution[node]++;
      }
    }
    
    return distribution;
  }
}

// Example usage
function demonstrateConsistentHashing() {
  console.log("Consistent Hashing Demonstration");
  
  const ch = new ConsistentHashing(3);
  
  // Add initial nodes
  ch.addNode("node1");
  ch.addNode("node2");
  ch.addNode("node3");
  
  // Generate some keys
  const keys = Array.from({ length: 100 }, (_, i) => `key${i}`);
  
  // Show initial distribution
  console.log("\nInitial distribution:");
  console.log(ch.getDistribution(keys));
  
  // Add a new node
  console.log("\nAdding node4:");
  ch.addNode("node4");
  
  // Show new distribution
  console.log("\nNew distribution:");
  console.log(ch.getDistribution(keys));
  
  // Remove a node
  console.log("\nRemoving node2:");
  ch.removeNode("node2");
  
  // Show final distribution
  console.log("\nFinal distribution:");
  console.log(ch.getDistribution(keys));
  
  // Show some key assignments
  console.log("\nSample key assignments:");
  for (let i = 0; i &lt; 5; i++) {
    const key = `key${i}`;
    console.log(`${key} -> ${ch.getNode(key)}`);
  }
}

demonstrateConsistentHashing();
```

**Relevance**: This implementation directly relates to the "Distributed Data Storage" and "Scalability Patterns" sections of this outline. It demonstrates how to distribute data across nodes while minimizing redistribution when the cluster topology changes, which is crucial for horizontal scaling in distributed databases and caches.

#### Simple Gossip Protocol for Information Dissemination
Gossip protocols enable efficient information sharing across distributed nodes. This implementation shows how nodes can spread information without centralized coordination:

```javascript
class Node {
  constructor(id, network) {
    this.id = id;
    this.network = network;
    this.data = new Map();  // Local key-value store
    this.version = new Map();  // Version numbers for each key
    this.gossipInterval = null;
  }
  
  // Start gossiping
  startGossiping(intervalMs = 1000) {
    this.gossipInterval = setInterval(() => this.gossip(), intervalMs);
    console.log(`Node ${this.id} started gossiping`);
  }
  
  // Stop gossiping
  stopGossiping() {
    if (this.gossipInterval) {
      clearInterval(this.gossipInterval);
      this.gossipInterval = null;
      console.log(`Node ${this.id} stopped gossiping`);
    }
  }
  
  // Perform a single round of gossip
  gossip() {
    // Select a random peer
    const peers = this.network.getNodes().filter(node => node.id !== this.id);
    if (peers.length === 0) return;
    
    const randomPeer = peers[Math.floor(Math.random() * peers.length)];
    
    // Send our data to the peer
    console.log(`Node ${this.id} gossiping with Node ${randomPeer.id}`);
    randomPeer.receiveGossip(this.getSummary());
  }
  
  // Get a summary of our data
  getSummary() {
    const summary = new Map();
    for (const [key, version] of this.version.entries()) {
      summary.set(key, {
        version,
        value: this.data.get(key)
      });
    }
    return summary;
  }
  
  // Receive gossip from another node
  receiveGossip(summary) {
    let updates = 0;
    
    // Process each key in the received summary
    for (const [key, { version, value }] of summary.entries()) {
      // If we don't have this key or our version is older
      if (!this.version.has(key) || this.version.get(key) &lt; version) {
        this.data.set(key, value);
        this.version.set(key, version);
        updates++;
      }
    }
    
    if (updates > 0) {
      console.log(`Node ${this.id} updated ${updates} keys from gossip`);
    }
  }
  
  // Update a value locally
  setValue(key, value) {
    // Increment version or start at 1
    const newVersion = (this.version.get(key) || 0) + 1;
    
    this.data.set(key, value);
    this.version.set(key, newVersion);
    
    console.log(`Node ${this.id} set ${key}=${value} (version ${newVersion})`);
  }
  
  // Get a value
  getValue(key) {
    return this.data.get(key);
  }
  
  // Get all data
  getAllData() {
    const result = {};
    for (const [key, value] of this.data.entries()) {
      result[key] = {
        value,
        version: this.version.get(key)
      };
    }
    return result;
  }
}

class Network {
  constructor() {
    this.nodes = [];
  }
  
  // Add a node to the network
  addNode(nodeId) {
    const node = new Node(nodeId, this);
    this.nodes.push(node);
    return node;
  }
  
  // Get all nodes
  getNodes() {
    return this.nodes;
  }
}

// Example usage
function demonstrateGossipProtocol() {
  console.log("Gossip Protocol Demonstration");
  
  // Create a network with 5 nodes
  const network = new Network();
  const nodes = [];
  
  for (let i = 0; i &lt; 5; i++) {
    nodes.push(network.addNode(i));
  }
  
  // Start gossiping on all nodes
  nodes.forEach(node => node.startGossiping(1000));
  
  // Set some initial values on different nodes
  nodes[0].setValue("color", "red");
  nodes[2].setValue("size", "large");
  nodes[4].setValue("shape", "circle");
  
  // After some time, check the propagation
  setTimeout(() => {
    console.log("\nData after 3 seconds of gossiping:");
    nodes.forEach(node => {
      console.log(`Node ${node.id} data:`, node.getAllData());
    });
    
    // Update a value
    console.log("\nUpdating a value on Node 1");
    nodes[1].setValue("color", "blue");
    
    // Check again after more gossiping
    setTimeout(() => {
      console.log("\nData after 3 more seconds of gossiping:");
      nodes.forEach(node => {
        console.log(`Node ${node.id} data:`, node.getAllData());
      });
      
      // Stop all nodes
      nodes.forEach(node => node.stopGossiping());
    }, 3000);
  }, 3000);
}

demonstrateGossipProtocol();
```

**Relevance**: This implementation connects to the "Fault Tolerance" and "Distributed Data Storage" sections of this outline. Gossip protocols are used for failure detection, metadata dissemination, and eventual consistency in distributed systems. They demonstrate how information can spread efficiently through a system without centralized coordination.

#### Why These Implementations Are Important
1. **Vector Clocks** address the challenge of time and causality in distributed systems, showing how to track "happens-before" relationships without perfect clock synchronization.
2. **Consistent Hashing** demonstrates a practical solution to data partitioning and rebalancing, which is essential for horizontal scaling in distributed databases and caches.
3. **Gossip Protocol** shows how information can spread efficiently through a distributed system without centralized coordination, which is fundamental to many fault detection and eventual consistency mechanisms.
Together with the Bully Algorithm, these implementations give a well-rounded introduction to implementing distributed algorithms in JavaScript, covering consensus, time ordering, data distribution, and information dissemination.

## Lesson Activities
The following activities provide hands-on experience with distributed algorithms through JavaScript implementations. Each activity builds on concepts from the previous ones, creating a progressive learning path.

### Activity 1: Implementing a Distributed Counter

**Objective:** Understand the challenges of maintaining consistent state across distributed nodes. (60 minutes)

#### Background
A distributed counter is one of the simplest distributed systems, yet it demonstrates fundamental challenges in distributed computing. Each node maintains its own counter, but the system needs to track the global count across all nodes.

#### Instructions
1. Review the following implementation of a distributed counter:

```javascript
class DistributedCounter {
  constructor(nodeId) {
    this.nodeId = nodeId;
    this.localCount = 0;
    this.lastSeen = {}; // Track last seen count from each node
  }

  // Increment local counter
  increment() {
    this.localCount++;
    console.log(`Node ${this.nodeId}: Incremented counter to ${this.localCount}`);
    return this.localCount;
  }

  // Receive update from another node
  receiveUpdate(nodeId, count) {
    console.log(`Node ${this.nodeId}: Received count ${count} from Node ${nodeId}`);
    
    // Update last seen value for this node
    this.lastSeen[nodeId] = count;
    
    // Log current state
    console.log(`Node ${this.nodeId}: Current state:`, {
      localCount: this.localCount,
      lastSeen: this.lastSeen
    });
  }

  // Get the total count across all nodes we know about
  getTotalCount() {
    // Sum our count and all last seen counts
    const total = this.localCount + 
      Object.values(this.lastSeen).reduce((sum, count) => sum + count, 0);
    
    console.log(`Node ${this.nodeId}: Total count is ${total}`);
    return total;
  }
}

// Example usage
function demonstrateDistributedCounter() {
  console.log("Distributed Counter Example");
  
  // Create three nodes
  const node1 = new DistributedCounter(1);
  const node2 = new DistributedCounter(2);
  const node3 = new DistributedCounter(3);
  
  // Each node increments its counter
  node1.increment();
  node2.increment();
  node2.increment();
  node3.increment();
  
  // Nodes share their counts (simulating network messages)
  node1.receiveUpdate(2, node2.localCount);
  node1.receiveUpdate(3, node3.localCount);
  
  node2.receiveUpdate(1, node1.localCount);
  node2.receiveUpdate(3, node3.localCount);
  
  node3.receiveUpdate(1, node1.localCount);
  node3.receiveUpdate(2, node2.localCount);
  
  // Get total counts from each node's perspective
  node1.getTotalCount();
  node2.getTotalCount();
  node3.getTotalCount();
}

demonstrateDistributedCounter();
```

2. Copy the code into a JavaScript file and run it to observe the behavior.
3. Modify the code to handle the following scenarios:
   - Add a method to decrement the counter
   - Implement a mechanism to handle out-of-order updates
   - Add a timestamp to each update to track recency

4. Experiment with different communication patterns:
   - What happens if node3 never receives updates from node1?
   - What if nodes only communicate with their immediate neighbors?
   - How would you handle a node that joins the system later?


#### Analysis Questions
1. What challenges did you encounter in maintaining a consistent global count?
2. How would this system behave if network messages were delayed or lost?
3. What strategies could you implement to make the counter more consistent?
4. How does this simple example relate to the concept of "eventual consistency"?
5. In what real-world applications would a distributed counter be useful?


### Activity 2: Building a Distributed Key-Value Store

**Objective:** Implement a basic distributed data store with replication to understand data consistency challenges. (90 minutes)

#### Background
Distributed key-value stores are fundamental building blocks for many distributed systems. They demonstrate how data can be replicated across multiple nodes while handling consistency challenges.

#### Instructions

1. Review the following implementation of a distributed key-value store:

```javascript
class DistributedStore {
  constructor(nodeId) {
    this.nodeId = nodeId;
    this.data = {};
    this.peers = [];
  }

  // Add a peer node
  addPeer(node) {
    this.peers.push(node);
    console.log(`Node ${this.nodeId}: Added peer Node ${node.nodeId}`);
  }

  // Set a value and replicate to peers
  set(key, value) {
    console.log(`Node ${this.nodeId}: Setting ${key}=${value}`);
    
    // Update local data
    this.data[key] = value;
    
    // Replicate to peers
    this.peers.forEach(peer => {
      console.log(`Node ${this.nodeId}: Replicating ${key}=${value} to Node ${peer.nodeId}`);
      peer.replicate(key, value, this.nodeId);
    });
  }

  // Receive replicated data from a peer
  replicate(key, value, fromNodeId) {
    console.log(`Node ${this.nodeId}: Received replication of ${key}=${value} from Node ${fromNodeId}`);
    this.data[key] = value;
  }

  // Get a value
  get(key) {
    const value = this.data[key];
    console.log(`Node ${this.nodeId}: Getting ${key}=${value}`);
    return value;
  }

  // Show all data
  showData() {
    console.log(`Node ${this.nodeId}: Current data:`, this.data);
  }
}

// Example usage
function demonstrateDistributedStore() {
  console.log("Distributed Key-Value Store Example");
  
  // Create three nodes
  const node1 = new DistributedStore(1);
  const node2 = new DistributedStore(2);
  const node3 = new DistributedStore(3);
  
  // Connect the nodes
  node1.addPeer(node2);
  node1.addPeer(node3);
  node2.addPeer(node1);
  node2.addPeer(node3);
  node3.addPeer(node1);
  node3.addPeer(node2);
  
  // Set some values on different nodes
  node1.set("color", "red");
  node2.set("size", "large");
  node3.set("shape", "circle");
  
  // Check that values have replicated
  console.log("\nFinal state of all nodes:");
  node1.showData();
  node2.showData();
  node3.showData();
  
  // Demonstrate reading values
  console.log("\nReading values from Node 1:");
  node1.get("color");
  node1.get("size");
  node1.get("shape");
}

demonstrateDistributedStore();
```

2. Copy the code into a JavaScript file and run it to observe the behavior.
3. Enhance the implementation with the following features:
   - Add versioning to detect conflicts (using a simple counter or timestamp)
   - Implement a conflict resolution strategy when the same key is updated on different nodes
   - Add a method to synchronize data when a new node joins the system

4. Simulate network partitions:
   - Modify the code to simulate a network partition where node3 can't communicate with node1
   - Implement a mechanism to detect and resolve inconsistencies after the partition heals


#### Analysis Questions
1. What happens when two nodes update the same key simultaneously?
2. How does your versioning system help with conflict detection?
3. What are the trade-offs between different conflict resolution strategies?
4. How would this system behave under the CAP theorem? Is it CP or AP?
5. What real-world distributed databases use similar replication strategies?


### Activity 3: Implementing a Heartbeat Failure Detector

**Objective:** Build a failure detection mechanism to understand how distributed systems handle node failures. (75 minutes)

#### Background
Failure detection is critical in distributed systems. Heartbeat mechanisms are a common approach where nodes periodically send "I'm alive" messages to detect when other nodes have failed.

#### Instructions

1. Review the following implementation of a heartbeat failure detector:

```javascript
class HeartbeatDetector {
  constructor(nodeId, timeoutMs = 3000) {
    this.nodeId = nodeId;
    this.timeoutMs = timeoutMs;
    this.lastHeartbeat = {};
    this.peers = [];
    this.alive = {};
    this.heartbeatInterval = null;
    this.checkInterval = null;
  }

  // Add a peer node
  addPeer(node) {
    this.peers.push(node);
    this.alive[node.nodeId] = true; // Assume alive initially
    console.log(`Node ${this.nodeId}: Added peer Node ${node.nodeId}`);
  }

  // Start sending heartbeats and checking for failures
  start() {
    // Send heartbeats every 1 second
    this.heartbeatInterval = setInterval(() => {
      this.sendHeartbeats();
    }, 1000);
    
    // Check for failures every 2 seconds
    this.checkInterval = setInterval(() => {
      this.checkFailures();
    }, 2000);
    
    console.log(`Node ${this.nodeId}: Started heartbeat detector`);
  }

  // Stop the detector
  stop() {
    clearInterval(this.heartbeatInterval);
    clearInterval(this.checkInterval);
    console.log(`Node ${this.nodeId}: Stopped heartbeat detector`);
  }

  // Send heartbeats to all peers
  sendHeartbeats() {
    console.log(`Node ${this.nodeId}: Sending heartbeats to peers`);
    this.peers.forEach(peer => {
      peer.receiveHeartbeat(this.nodeId);
    });
  }

  // Receive a heartbeat from another node
  receiveHeartbeat(fromNodeId) {
    this.lastHeartbeat[fromNodeId] = Date.now();
    
    // If node was previously marked as failed, mark it as recovered
    if (!this.alive[fromNodeId]) {
      this.alive[fromNodeId] = true;
      console.log(`Node ${this.nodeId}: Node ${fromNodeId} has recovered`);
    }
  }

  // Check for failed nodes
  checkFailures() {
    const now = Date.now();
    
    Object.keys(this.lastHeartbeat).forEach(nodeId => {
      const timeSinceLastHeartbeat = now - this.lastHeartbeat[nodeId];
      
      // If we haven't received a heartbeat within the timeout period
      if (timeSinceLastHeartbeat > this.timeoutMs) {
        if (this.alive[nodeId]) {
          this.alive[nodeId] = false;
          console.log(`Node ${this.nodeId}: Detected failure of Node ${nodeId}`);
        }
      }
    });
    
    console.log(`Node ${this.nodeId}: Current status:`, this.alive);
  }

  // Simulate this node failing (stops sending heartbeats)
  simulateFailure() {
    clearInterval(this.heartbeatInterval);
    console.log(`Node ${this.nodeId}: Simulating failure (stopped sending heartbeats)`);
  }

  // Simulate this node recovering
  simulateRecovery() {
    this.heartbeatInterval = setInterval(() => {
      this.sendHeartbeats();
    }, 1000);
    console.log(`Node ${this.nodeId}: Simulating recovery (resumed sending heartbeats)`);
  }
}

// Example usage
function demonstrateHeartbeatDetector() {
  console.log("Heartbeat Failure Detector Example");
  
  // Create three nodes
  const node1 = new HeartbeatDetector(1);
  const node2 = new HeartbeatDetector(2);
  const node3 = new HeartbeatDetector(3);
  
  // Connect the nodes
  node1.addPeer(node2);
  node1.addPeer(node3);
  node2.addPeer(node1);
  node2.addPeer(node3);
  node3.addPeer(node1);
  node3.addPeer(node2);
  
  // Start all detectors
  node1.start();
  node2.start();
  node3.start();
  
  // After 5 seconds, simulate node 2 failing
  setTimeout(() => {
    console.log("\nSimulating failure of Node 2");
    node2.simulateFailure();
  }, 5000);
  
  // After 10 seconds, simulate node 2 recovering
  setTimeout(() => {
    console.log("\nSimulating recovery of Node 2");
    node2.simulateRecovery();
  }, 10000);
  
  // After 15 seconds, stop all detectors
  setTimeout(() => {
    console.log("\nStopping all detectors");
    node1.stop();
    node2.stop();
    node3.stop();
  }, 15000);
}

demonstrateHeartbeatDetector();
```

2. Copy the code into a JavaScript file and run it to observe the behavior.
3. Enhance the implementation with the following features:
   - Add a suspicion level mechanism that increases with each missed heartbeat
   - Implement a quorum-based failure detection (a node is considered failed only if a majority of nodes detect it)
   - Add a mechanism to handle network delays (e.g., adaptive timeout based on historical heartbeat times)

4. Experiment with different failure scenarios:
   - What happens if the network is slow but nodes are still alive?
   - How does the system behave if multiple nodes fail simultaneously?
   - What if a node is "flaky" (alternating between working and failing)?

#### Analysis Questions
1. What are the challenges in distinguishing between node failures and network issues?
2. How does the timeout duration affect the accuracy of failure detection?
3. What are the trade-offs between quick failure detection and avoiding false positives?
4. How would you implement a more sophisticated failure detector that adapts to network conditions?
5. How is failure detection used in real-world distributed systems like Kubernetes or Cassandra?


### Activity 4: Implementing Leader Election
**Objective:** Build a leader election algorithm to understand how distributed systems reach consensus on a coordinator. (90 minutes)

#### Background
Leader election is a fundamental building block for many distributed algorithms. It allows a group of nodes to select a single coordinator, which is essential for tasks that require centralized decision-making.

#### Instructions
1. Review the following implementation of the Bully Algorithm for leader election:

```javascript
class Node {
  constructor(id) {
    this.id = id;
    this.leaderId = null;
    this.nodes = [];
  }

  // Add other nodes that this node can communicate with
  addNodes(nodes) {
    this.nodes = nodes.filter(node => node.id !== this.id);
    console.log(`Node ${this.id}: Added ${this.nodes.length} peers`);
  }

  // Start an election
  startElection() {
    console.log(`Node ${this.id}: Starting election`);
    
    // Find nodes with higher IDs
    const higherNodes = this.nodes.filter(node => node.id > this.id);
    
    if (higherNodes.length === 0) {
      // No higher nodes, become leader
      this.becomeLeader();
    } else {
      // Send election messages to higher nodes
      console.log(`Node ${this.id}: Sending election message to higher nodes`);
      let receivedResponse = false;
      
      higherNodes.forEach(node => {
        // In a real system, this would be asynchronous
        const response = node.receiveElection(this.id);
        if (response) receivedResponse = true;
      });
      
      // If no response from higher nodes, become leader
      if (!receivedResponse) {
        this.becomeLeader();
      }
    }
  }

  // Receive election message from another node
  receiveElection(senderId) {
    console.log(`Node ${this.id}: Received election message from Node ${senderId}`);
    
    // Reply to sender
    console.log(`Node ${this.id}: Sending OK to Node ${senderId}`);
    
    // Start our own election
    setTimeout(() => this.startElection(), 100);
    
    return true; // Acknowledge receipt
  }

  // Become the leader
  becomeLeader() {
    console.log(`Node ${this.id}: Becoming leader`);
    this.leaderId = this.id;
    
    // Announce leadership to all nodes
    this.nodes.forEach(node => {
      node.receiveLeaderAnnouncement(this.id);
    });
  }

  // Receive leader announcement
  receiveLeaderAnnouncement(leaderId) {
    console.log(`Node ${this.id}: Received announcement that Node ${leaderId} is the leader`);
    this.leaderId = leaderId;
  }
}

// Example usage
function demonstrateLeaderElection() {
  console.log("Leader Election Example");
  
  // Create nodes with IDs 1-5
  const nodes = [];
  for (let i = 1; i <= 5; i++) {
    nodes.push(new Node(i));
  }
  
  // Connect nodes to each other
  nodes.forEach(node => {
    node.addNodes(nodes);
  });
  
  // Start an election from node 2
  console.log("\nStarting election from Node 2:");
  nodes[1].startElection();
  
  // After the election completes, check the results
  setTimeout(() => {
    console.log("\nElection results:");
    nodes.forEach(node => {
      console.log(`Node ${node.id}: Leader is Node ${node.leaderId}`);
    });
  }, 1000);
}

demonstrateLeaderElection();
```

2. Copy the code into a JavaScript file and run it to observe the behavior.
3. Enhance the implementation with the following features:
   - Add a mechanism to detect leader failures and automatically start a new election
   - Implement a term-based leadership system (similar to Raft) where each election has a term number
   - Add a timeout mechanism to handle cases where higher-ID nodes don't respond

4. Experiment with different scenarios:
   - What happens if the node with the highest ID fails?
   - How does the system behave if multiple nodes start an election simultaneously?
   - What if the network is partitioned, creating two separate groups of nodes?

#### Analysis Questions
1. What are the advantages and disadvantages of using node IDs to determine leadership?
2. How does the Bully Algorithm compare to other leader election algorithms like Ring-based election?
3. What happens if a network partition creates a "split-brain" scenario with two leaders?
4. How would you modify the algorithm to minimize the number of messages sent during an election?
5. How is leader election used in real-world systems like distributed databases or message brokers?


### Activity 5: Exploring the CAP Theorem
**Objective:** Understand the trade-offs between consistency, availability, and partition tolerance through a practical demonstration. (60 minutes)

#### Background
The CAP theorem states that a distributed system can only provide two of three guarantees: Consistency, Availability, and Partition tolerance. This activity demonstrates these trade-offs through a simple implementation.

#### Instructions
1. Review the following implementation that demonstrates CAP theorem trade-offs:

```javascript
class CAPNode {
  constructor(id, preferConsistency = true) {
    this.id = id;
    this.preferConsistency = preferConsistency; // CP vs AP mode
    this.data = {};
    this.version = {};
    this.peers = [];
    this.partitioned = false; // Network partition simulation
  }

  // Add a peer node
  addPeer(node) {
    this.peers.push(node);
    console.log(`Node ${this.id}: Added peer Node ${node.id}`);
  }

  // Set a value locally and replicate to peers
  set(key, value) {
    console.log(`Node ${this.id}: Setting ${key}=${value}`);
    
    // Update local version
    this.version[key] = (this.version[key] || 0) + 1;
    
    // Update local data
    this.data[key] = value;
    
    // Try to replicate to peers
    let replicatedCount = 0;
    this.peers.forEach(peer => {
      if (!this.partitioned && !peer.partitioned) {
        peer.replicate(key, value, this.version[key], this.id);
        replicatedCount++;
      }
    });
    
    // In CP mode, if we couldn't replicate to majority, revert
    if (this.preferConsistency && replicatedCount < this.peers.length / 2) {
      console.log(`Node ${this.id}: CONSISTENCY VIOLATION - couldn't replicate to majority, reverting`);
      delete this.data[key];
      return false;
    }
    
    return true;
  }

  // Receive replicated data from a peer
  replicate(key, value, version, fromNodeId) {
    // If we're partitioned, we can't receive replications
    if (this.partitioned) return false;
    
    console.log(`Node ${this.id}: Received replication of ${key}=${value} (v${version}) from Node ${fromNodeId}`);
    
    // Check if our version is older
    if (!this.version[key] || this.version[key] < version) {
      this.data[key] = value;
      this.version[key] = version;
      return true;
    } else {
      console.log(`Node ${this.id}: Ignoring replication, have newer version`);
      return false;
    }
  }

  // Get a value
  get(key) {
    // In CP mode, if partitioned, refuse reads for consistency
    if (this.preferConsistency && this.partitioned) {
      console.log(`Node ${this.id}: REFUSING READ in CP mode during partition`);
      return null;
    }
    
    const value = this.data[key];
    console.log(`Node ${this.id}: Getting ${key}=${value}`);
    return value;
  }

  // Simulate a network partition
  simulatePartition() {
    this.partitioned = true;
    console.log(`Node ${this.id}: NETWORK PARTITION - disconnected from cluster`);
  }

  // Heal a network partition
  healPartition() {
    this.partitioned = false;
    console.log(`Node ${this.id}: PARTITION HEALED - reconnected to cluster`);
  }

  // Show current state
  showState() {
    console.log(`Node ${this.id}: Current state:`, {
      mode: this.preferConsistency ? "CP" : "AP",
      partitioned: this.partitioned,
      data: this.data,
      versions: this.version
    });
  }
}

// Example usage
function demonstrateCAP() {
  console.log("CAP Theorem Demonstration");
  
  // Create CP and AP nodes
  const cpNode1 = new CAPNode(1, true);  // Consistency preferred
  const cpNode2 = new CAPNode(2, true);  // Consistency preferred
  const apNode3 = new CAPNode(3, false); // Availability preferred
  const apNode4 = new CAPNode(4, false); // Availability preferred
  
  // Connect the nodes
  const allNodes = [cpNode1, cpNode2, apNode3, apNode4];
  allNodes.forEach(node => {
    allNodes.filter(n => n !== node).forEach(peer => {
      node.addPeer(peer);
    });
  });
  
  // Initial writes
  console.log("\nInitial writes to all nodes:");
  cpNode1.set("color", "red");
  
  // Check initial state
  console.log("\nInitial state:");
  allNodes.forEach(node => node.showState());
  
  // Simulate network partition
  console.log("\nSimulating network partition for Node 1 and Node 3:");
  cpNode1.simulatePartition();
  apNode3.simulatePartition();
  
  // Try writes during partition
  console.log("\nAttempting writes during partition:");
  const cpWriteResult = cpNode1.set("size", "large");
  const apWriteResult = apNode3.set("shape", "circle");
  
  console.log(`CP node write during partition: ${cpWriteResult ? "SUCCEEDED" : "FAILED"}`);
  console.log(`AP node write during partition: ${apWriteResult ? "SUCCEEDED" : "FAILED"}`);
  
  // Try reads during partition
  console.log("\nAttempting reads during partition:");
  const cpReadResult = cpNode1.get("color");
  const apReadResult = apNode3.get("color");
  
  console.log(`CP node read during partition: ${cpReadResult !== null ? "SUCCEEDED" : "FAILED"}`);
  console.log(`AP node read during partition: ${apReadResult !== null ? "SUCCEEDED" : "FAILED"}`);
  
  // Heal the partition
  console.log("\nHealing the network partition:");
  cpNode1.healPartition();
  apNode3.healPartition();
  
  // Check final state
  console.log("\nFinal state after partition healed:");
  allNodes.forEach(node => node.showState());
}

demonstrateCAP();
```

2. Copy the code into a JavaScript file and run it to observe the behavior.
3. Experiment with different scenarios:
   - Modify the code to create different partition scenarios
   - Change the consistency preferences of different nodes
   - Implement a conflict resolution strategy for when partitions heal

4. Implement a simple reconciliation mechanism:
   - Add a method to detect and resolve conflicts after a partition heals
   - Implement different reconciliation strategies (last-write-wins, merge values, etc.)
   - Compare how CP and AP nodes handle reconciliation differently

#### Analysis Questions
1. What are the observable differences between CP and AP nodes during a network partition?
2. What types of applications would benefit from a CP approach? What about an AP approach?
3. How do real-world distributed databases handle the CAP theorem trade-offs?
4. What strategies can be used to minimize the impact of network partitions?
5. How would you design a system that provides both strong consistency and high availability despite the CAP theorem?

### Connecting to Real-World Systems
For each activity, research and identify at least one real-world distributed system that implements similar concepts:

1. **Distributed Counter**: Google's Spanner (TrueTime), Apache Cassandra's counters
2. **Distributed Key-Value Store**: Redis, etcd, Amazon DynamoDB
3. **Heartbeat Failure Detection**: Apache ZooKeeper, Kubernetes node health checks
4. **Leader Election**: etcd's Raft implementation, Kafka's controller election
5. **CAP Theorem**: MongoDB (CP), Cassandra (AP), CockroachDB (CP with high availability)

Write a brief (1-2 paragraph) comparison of your implementation with the real-world system, focusing on similarities and differences in approach.


## Common Mistakes / Misconceptions

1. **Assuming network reliability**: In distributed systems, network partitions are inevitable. Always design with the assumption that the network will fail.
2. **Overlooking partial failures**: Unlike monolithic systems where components either work or don't, distributed systems often experience partial failures that are harder to detect and handle.
3. **Ignoring the CAP theorem**: Many developers try to achieve consistency, availability, and partition tolerance simultaneously, which is theoretically impossible.
4. **Treating distributed transactions like local ones**: Distributed transactions are fundamentally different and more complex than local transactions. Two-phase commit is not a silver bullet.
5. **Relying on synchronized clocks**: Physical clock synchronization across distributed systems is never perfect. Use logical clocks or hybrid approaches for event ordering.
6. **Neglecting idempotency**: In distributed systems, operations may be retried due to failures. Ensure your operations are idempotent (can be applied multiple times without changing the result).
7. **Underestimating testing complexity**: Testing distributed systems is challenging due to concurrency, timing, and partial failures. Use chaos engineering and fault injection techniques.
8. **Choosing consistency when availability is needed**: Many applications can function with eventual consistency and don't require the performance penalties of strong consistency.
9. **Overcomplicating the initial design**: Start with the simplest distributed architecture that meets your requirements, then evolve as needed.
10. **Ignoring operational complexity**: Distributed systems are more complex to deploy, monitor, and maintain. Factor in the operational overhead when choosing a distributed approach.
