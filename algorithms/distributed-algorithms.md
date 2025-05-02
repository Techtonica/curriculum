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
