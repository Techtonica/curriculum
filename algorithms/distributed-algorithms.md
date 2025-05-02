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
    - [Activity 1: Simulating Clock Synchronization](#activity-1-simulating-clock-synchronization)
    - [Activity 2: Implementing a Simple Consensus Protocol](#activity-2-implementing-a-simple-consensus-protocol)
    - [Activity 3: Analyzing CAP Theorem Trade-offs](#activity-3-analyzing-cap-theorem-trade-offs)
    - [Activity 4: Designing a Distributed Cache](#activity-4-designing-a-distributed-cache)
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

### Activity 1: Simulating Clock Synchronization

**Duration**: 45 minutes
In this activity, you'll implement a simple simulation of Lamport's logical clocks to understand how distributed systems maintain event ordering without perfect clock synchronization.

1. Create a simulation with 3-5 processes that send messages to each other
2. Implement Lamport's logical clock algorithm to timestamp each event
3. Visualize the resulting partial ordering of events
4. Answer analysis questions:
    - What happens when you increase the number of processes?
    - How does message frequency affect the clock values?
    - Can you identify concurrent events in your simulation?

```javascript
// Starter code for Lamport Clock simulation
class Process {
  constructor(id) {
    this.id = id;
    this.clock = 0;
    this.eventLog = [];
  }
  
  // Internal event
  executeEvent() {
    this.clock++;
    this.logEvent("internal", null);
    return this.clock;
  }
  
  // Send message to another process
  sendMessage(receiver) {
    this.clock++;
    const sentClock = this.clock;
    this.logEvent("send", receiver.id);
    
    // Simulate network delay
    setTimeout(() => {
      receiver.receiveMessage(this, sentClock);
    }, Math.random() * 100);
    
    return sentClock;
  }
  
  // Receive message from another process
  receiveMessage(sender, messageClock) {
    this.clock = Math.max(this.clock, messageClock) + 1;
    this.logEvent("receive", sender.id);
    return this.clock;
  }
  
  logEvent(type, targetId) {
    this.eventLog.push({
      type,
      clock: this.clock,
      targetId,
      realTime: Date.now()
    });
  }
}

// TODO: Create processes and simulate message passing
// TODO: Visualize the event logs and analyze the results
```

### Activity 2: Implementing a Simple Consensus Protocol
**Duration**: 60 minutes

In this activity, you'll implement a simplified version of the Raft consensus algorithm focusing on leader election.
1. Create a simulation with 5 nodes in a distributed system
2. Implement the leader election portion of the Raft algorithm
3. Simulate random node failures and observe re-elections
4. Answer analysis questions:
    - What happens when the leader fails?
    - How does network latency affect the election process?
    - What happens if multiple nodes call for an election simultaneously?


```javascript
// Starter code for Raft Leader Election
class RaftNode {
  constructor(id, nodes) {
    this.id = id;
    this.nodes = nodes;
    this.currentTerm = 0;
    this.votedFor = null;
    this.state = 'follower';
    this.electionTimeout = this.randomTimeout();
    this.votes = 0;
    this.active = true;
    
    setTimeout(() => this.startElectionTimer(), 0);
  }
  
  randomTimeout() {
    // Election timeout between 150-300ms
    return Math.floor(Math.random() * 150) + 150;
  }
  
  startElectionTimer() {
    if (!this.active) return;
    
    clearTimeout(this.electionTimer);
    this.electionTimer = setTimeout(() => {
      if (this.state !== 'leader') {
        this.startElection();
      }
    }, this.electionTimeout);
  }
  
  startElection() {
    if (!this.active) return;
    
    this.state = 'candidate';
    this.currentTerm++;
    this.votedFor = this.id;
    this.votes = 1; // Vote for self
    
    console.log(`Node ${this.id} started election for term ${this.currentTerm}`);
    
    // Request votes from all other nodes
    this.nodes.forEach(node => {
      if (node.id !== this.id && node.active) {
        node.requestVote(this.id, this.currentTerm);
      }
    });
    
    // Reset election timeout
    this.startElectionTimer();
  }
  
  requestVote(candidateId, term) {
    // TODO: Implement vote request handling
    // If term is greater and haven't voted yet, grant vote
  }
  
  receiveVote(term) {
    // TODO: Implement vote counting
    // If majority votes received, become leader
  }
  
  becomeLeader() {
    // TODO: Implement leader state transition
  }
  
  fail() {
    // Simulate node failure
    this.active = false;
    console.log(`Node ${this.id} has failed`);
  }
  
  recover() {
    // Simulate node recovery
    this.active = true;
    this.state = 'follower';
    this.startElectionTimer();
    console.log(`Node ${this.id} has recovered`);
  }
}

// TODO: Create nodes and simulate elections with failures
```

### Activity 3: Analyzing CAP Theorem Trade-offs

**Duration**: 45 minutes
In this activity, you'll analyze different distributed database systems and their CAP theorem trade-offs.

1. Research the following distributed databases:
    - MongoDB
    - Cassandra
    - Redis
    - CockroachDB
    - Amazon DynamoDB

2. For each database, identify:
    - Which CAP properties it prioritizes
    - Its consistency model
    - Common use cases
    - Failure handling mechanisms

3. Create a decision matrix to help choose the right database for different scenarios:
    - Global e-commerce platform
    - Financial transaction system
    - Social media application
    - IoT data collection system
    - Real-time analytics platform
4. Write a brief justification for each recommendation, explaining the trade-offs involved.

### Activity 4: Designing a Distributed Cache

**Duration**: 60 minutes
In this activity, you'll design a distributed caching system similar to Redis or Memcached.

1. Design a distributed cache with the following requirements:
    - Support for multiple cache nodes
    - Consistent hashing for data distribution
    - Basic replication for fault tolerance
    - Simple eviction policy (LRU)

2. Implement a simplified version of your design with:
    - A cache node class
    - A client interface
    - The consistent hashing algorithm
    - Basic operations (get, set, delete)

3. Test your implementation with various scenarios:
    - Adding/removing cache nodes
    - Node failures
    - Hot keys (frequently accessed items)

4. Answer analysis questions:
    - How does your system handle node failures?
    - What consistency guarantees does your cache provide?
    - How would you improve the design for production use?

```javascript
// Starter code for Distributed Cache
class ConsistentHash {
  constructor(replicas = 3, points = 100) {
    this.replicas = replicas;
    this.points = points;
    this.ring = {};
    this.keys = [];
    this.nodes = new Set();
  }
  
  addNode(node) {
    // TODO: Implement node addition to the hash ring
  }
  
  removeNode(node) {
    // TODO: Implement node removal from the hash ring
  }
  
  getNode(key) {
    // TODO: Implement key lookup to find responsible node
  }
}

class CacheNode {
  constructor(id, capacity = 100) {
    this.id = id;
    this.capacity = capacity;
    this.data = new Map();
    this.lruList = []; // Simple LRU implementation
  }
  
  get(key) {
    // TODO: Implement get with LRU update
  }
  
  set(key, value) {
    // TODO: Implement set with LRU eviction if needed
  }
  
  delete(key) {
    // TODO: Implement delete
  }
}

class DistributedCache {
  constructor(nodeCount = 3) {
    this.hashRing = new ConsistentHash();
    this.nodes = {};
    
    // Create initial nodes
    for (let i = 0; i < nodeCount; i++) {
      this.addNode(`node-${i}`);
    }
  }
  
  addNode(nodeId) {
    // TODO: Implement node addition
  }
  
  removeNode(nodeId) {
    // TODO: Implement node removal
  }
  
  get(key) {
    // TODO: Implement distributed get operation
  }
  
  set(key, value) {
    // TODO: Implement distributed set operation
  }
  
  delete(key) {
    // TODO: Implement distributed delete operation
  }
}

// TODO: Test the distributed cache with various scenarios
```

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
