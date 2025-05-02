### Parallel Algorithms for Full Stack Engineers

## Prerequisites
- [Basic Data Structures](https://github.com/Techtonica/curriculum/tree/main/data-structures/linked-lists.md)
- [Algorithm Complexity and Big-O Notation](https://github.com/Techtonica/curriculum/tree/main/runtime-complexity/runtime-complexity.md)
- [Basic JavaScript or Python](https://github.com/Techtonica/curriculum/tree/main/javascript/javascript-1-variables.md)
- [Asynchronous Programming Concepts](https://github.com/Techtonica/curriculum/tree/main/javascript/javascript-7-oop.md)
- [Basic Computer Architecture](https://github.com/Techtonica/curriculum/tree/main/dev-tools/operating-systems.md)


## Table of Contents
- [Objectives](#objectives)
- [Motivation and Real-World Application](#motivation-and-real-world-application)
- [Specific Things to Learn](#specific-things-to-learn)
    - [Introduction to Parallel Computing](#introduction-to-parallel-computing)
    - [Types of Parallelism](#types-of-parallelism)
    - [Parallel Data Structures](#parallel-data-structures)
    - [Common Parallel Algorithms](#common-parallel-algorithms)
    - [Parallel Programming Models](#parallel-programming-models)
    - [Challenges in Parallel Computing](#challenges-in-parallel-computing)
    - [Parallel Computing in Web Development](#parallel-computing-in-web-development)
- [Lesson Activities](#lesson-activities)
    - [Activity 1: Visualizing Parallel vs. Sequential Processing](#activity-1-visualizing-parallel-vs-sequential-processing)
    - [Activity 2: Implementing Map-Reduce in JavaScript](#activity-2-implementing-map-reduce-in-javascript)
    - [Activity 3: Web Workers Performance Analysis](#activity-3-web-workers-performance-analysis)
    - [Activity 4: Parallel Algorithm Design Challenge](#activity-4-parallel-algorithm-design-challenge)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)


## Objectives

By the end of this lesson, you should be able to:
1. Understand the fundamental concepts of parallel algorithms and their importance in modern computing
2. Identify opportunities for parallelization in software applications
3. Implement basic parallel processing techniques in JavaScript/web environments
4. Analyze the performance benefits and trade-offs of parallel algorithms
5. Apply parallel computing concepts to full stack engineering challenges


## Motivation and Real-World Application
In today's computing landscape, the ability to process data in parallel is no longer a luxury—it's a necessity. As a full stack engineer, understanding parallel algorithms will allow you to:
- Build high-performance web applications that can handle thousands of concurrent users
- Process large datasets efficiently in both frontend and backend systems
- Leverage multi-core processors and distributed systems effectively
- Create responsive user interfaces that don't block during intensive operations
- Optimize database operations and API calls for maximum throughput


Real-world applications include:
- Image and video processing applications (like Instagram filters applied in real-time)
- Real-time data analytics dashboards processing millions of data points
- E-commerce platforms handling thousands of transactions simultaneously
- Collaborative editing tools (like Google Docs) managing concurrent edits
- AI/ML-powered features that need to process data quickly without blocking the UI


## Specific Things to Learn

### Introduction to Parallel Computing

Parallel computing is a type of computation where many calculations or processes are carried out simultaneously. The basic principle is to break down larger problems into smaller ones that can be solved concurrently.

**Key Concepts:**

- **Concurrency vs. Parallelism**: Concurrency is about dealing with multiple things at once (like handling multiple user requests), while parallelism is about doing multiple things at once (like using multiple CPU cores to process a single task faster).
- **Speedup and Amdahl's Law**: Theoretical limits to how much speedup can be achieved through parallelization. If only 50% of a program can be parallelized, the maximum speedup possible is 2x, regardless of how many processors you add.
- **Scalability**: How well a parallel solution performs as you add more computing resources. Strong scaling refers to how performance improves for a fixed problem size, while weak scaling refers to how performance holds as both the problem size and resources increase proportionally.


**JavaScript Implementation: Basic Web Worker**

```javascript
// main.js - Main thread
const worker = new Worker('worker.js');

// Send data to the worker
worker.postMessage({data: [1, 2, 3, 4, 5], operation: 'square'});

// Receive results from the worker
worker.onmessage = function(e) {
  console.log('Result from worker:', e.data);
};

// worker.js - Worker thread
self.onmessage = function(e) {
  const { data, operation } = e.data;
  
  let result;
  if (operation === 'square') {
    result = data.map(x => x * x);
  }
  
  // Send the result back to the main thread
  self.postMessage(result);
};
```

**Why This Matters**: Web Workers are the primary way to achieve true parallelism in browser-based JavaScript. They allow you to offload CPU-intensive tasks to background threads, keeping your UI responsive even during complex calculations. For full stack engineers, this is crucial for building performant web applications that handle computationally intensive tasks without freezing the user interface.

**Real-World Application**: Image processing tools, data visualization dashboards, and complex form validation can all benefit from moving processing to Web Workers.

### Types of Parallelism

**JavaScript Implementation: Task Parallelism with Promise.all**

```javascript
// Process multiple independent API requests in parallel
async function fetchUserData(userId) {
  const [profile, posts, followers] = await Promise.all([
    fetch(`/api/profile/${userId}`).then(res => res.json()),
    fetch(`/api/posts/${userId}`).then(res => res.json()),
    fetch(`/api/followers/${userId}`).then(res => res.json())
  ]);
  
  return { profile, posts, followers };
}

// Usage
fetchUserData(123).then(userData => {
  console.log('All user data loaded:', userData);
});
```

**Why This Matters**: While `Promise.all` doesn't use multiple CPU cores, it represents task parallelism by allowing multiple asynchronous operations to proceed concurrently. This pattern is essential for full stack engineers to optimize API calls and reduce loading times in web applications.

**Real-World Application**: Dashboard pages that need to load data from multiple sources, e-commerce product pages that need to fetch product details, inventory, reviews, and recommendations simultaneously.

### Parallel Data Structures

**JavaScript Implementation: Concurrent Map with SharedArrayBuffer**

```javascript
// This requires proper COOP/COEP headers for security reasons
const buffer = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(buffer);

// In main thread
const worker1 = new Worker('worker.js');
const worker2 = new Worker('worker.js');

worker1.postMessage({ array: sharedArray, start: 0, end: 500 });
worker2.postMessage({ array: sharedArray, start: 500, end: 1000 });

// In worker.js
self.onmessage = function(e) {
  const { array, start, end } = e.data;
  
  for (let i = start; i < end; i++) {
    // Use Atomic operations for thread safety
    Atomics.add(array, i, i);
  }
  
  self.postMessage('Done');
};
```

**Why This Matters**: SharedArrayBuffer allows true shared memory parallelism in JavaScript, which was previously impossible. This enables high-performance computing directly in the browser for data-intensive applications. Full stack engineers working on data visualization, real-time analytics, or browser-based games need to understand these concepts to maximize performance.

**Real-World Application**: Real-time collaborative editing tools, browser-based scientific computing, and high-performance data visualization.

### Common Parallel Algorithms

**JavaScript Implementation: Map-Reduce Pattern**

```javascript
// A simple map-reduce implementation in JavaScript
function mapReduce(data, mapFn, reduceFn) {
  // Map phase
  const mapped = data.map(mapFn);
  
  // Reduce phase
  return mapped.reduce(reduceFn);
}

// Example: Count word frequencies in an array of documents
const documents = [
  "hello world hello",
  "world hello",
  "hello hello hello world"
];

// Map function: Split document into words and count
function mapWords(doc) {
  const counts = {};
  const words = doc.split(' ');
  
  words.forEach(word => {
    counts[word] = (counts[word] || 0) + 1;
  });
  
  return counts;
}

// Reduce function: Combine word counts
function reduceWords(acc, curr) {
  Object.keys(curr).forEach(word => {
    acc[word] = (acc[word] || 0) + curr[word];
  });
  return acc;
}

const wordFrequencies = mapReduce(documents, mapWords, reduceWords);
console.log(wordFrequencies); // { hello: 7, world: 3 }
```

**Why This Matters**: The map-reduce pattern is fundamental to distributed computing and big data processing. Even in this simple form, it demonstrates how to break down data processing into parallelizable steps. Full stack engineers working with large datasets need to understand this pattern to design scalable data processing pipelines.

**Real-World Application**: Log analysis, data aggregation for analytics, and processing large datasets in chunks.

**Parallel Implementation with Web Workers**

```javascript
// main.js
function mapReduceParallel(data, numWorkers) {
  return new Promise((resolve) => {
    const chunkSize = Math.ceil(data.length / numWorkers);
    const workers = [];
    let completedWorkers = 0;
    const mappedResults = [];
    
    // Create workers and assign data chunks
    for (let i = 0; i < numWorkers; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, data.length);
      
      if (start >= data.length) break;
      
      const worker = new Worker('map-worker.js');
      workers.push(worker);
      
      worker.onmessage = function(e) {
        mappedResults.push(e.data);
        completedWorkers++;
        
        if (completedWorkers === workers.length) {
          // All mapping is done, perform reduce
          const result = mappedResults.reduce((acc, curr) => {
            Object.keys(curr).forEach(word => {
              acc[word] = (acc[word] || 0) + curr[word];
            });
            return acc;
          }, {});
          
          resolve(result);
        }
      };
      
      worker.postMessage({
        documents: data.slice(start, end)
      });
    }
  });
}

// map-worker.js
self.onmessage = function(e) {
  const { documents } = e.data;
  const counts = {};
  
  documents.forEach(doc => {
    const words = doc.split(' ');
    words.forEach(word => {
      counts[word] = (counts[word] || 0) + 1;
    });
  });
  
  self.postMessage(counts);
};
```

**Why This Matters**: This implementation shows how to distribute the map phase across multiple Web Workers, demonstrating true parallel processing in JavaScript. Understanding how to partition work and combine results is essential for building high-performance web applications.

### Parallel Programming Models

**JavaScript Implementation: Actor Model with Worker Threads**

```javascript
// A simplified actor model implementation
class Actor {
  constructor(scriptPath) {
    this.worker = new Worker(scriptPath);
    this.messageQueue = [];
    this.currentId = 0;
    this.callbacks = {};
    
    this.worker.onmessage = (e) => {
      const { id, result } = e.data;
      if (this.callbacks[id]) {
        this.callbacks[id](result);
        delete this.callbacks[id];
      }
    };
  }
  
  send(message) {
    return new Promise((resolve) => {
      const id = this.currentId++;
      this.callbacks[id] = resolve;
      this.worker.postMessage({ id, message });
    });
  }
  
  terminate() {
    this.worker.terminate();
  }
}

// Usage
const calculationActor = new Actor('calculator-worker.js');

// Send messages to the actor
async function performCalculations() {
  const result1 = await calculationActor.send({ operation: 'add', a: 5, b: 3 });
  console.log('5 + 3 =', result1);
  
  const result2 = await calculationActor.send({ operation: 'multiply', a: 4, b: 7 });
  console.log('4 * 7 =', result2);
}

// calculator-worker.js
self.onmessage = function(e) {
  const { id, message } = e.data;
  const { operation, a, b } = message;
  
  let result;
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'multiply':
      result = a * b;
      break;
    default:
      result = null;
  }
  
  self.postMessage({ id, result });
};
```

**Why This Matters**: The Actor Model is a powerful paradigm for concurrent programming that avoids many common pitfalls like race conditions and deadlocks. This implementation demonstrates how to create isolated workers that communicate only through message passing, a pattern that scales well to complex distributed systems.

**Real-World Application**: Background processing services, state management in complex applications, and systems that need to handle concurrent user actions.

### Parallel Computing in Web Development

**JavaScript Implementation: Service Worker for Parallel Resource Caching**

```javascript
// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/images/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return the response from the cached version
      if (response) {
        return response;
      }
      
      // Not in cache - fetch from network
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        // Clone the response
        const responseToCache = response.clone();
        
        caches.open('v1').then((cache) => {
          cache.put(event.request, responseToCache);
        });
        
        return response;
      });
    })
  );
});
```

**Why This Matters**: Service Workers operate in parallel to the main thread and can intercept network requests, enabling offline functionality and performance optimizations. This pattern is essential for building Progressive Web Apps (PWAs) that work reliably regardless of network conditions.

**Real-World Application**: Offline-capable web applications, improved loading performance through caching, and background synchronization of user data.

**JavaScript Implementation: Parallel API Requests with Timeout and Race Conditions**

```javascript
// Fetch from multiple API endpoints and use the fastest response
function fetchWithFallback(urls, timeout = 3000) {
  // Create a timeout promise
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request timed out')), timeout);
  });
  
  // Create fetch promises for each URL
  const fetchPromises = urls.map(url => 
    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        return response.json();
      })
  );
  
  // Add the timeout promise to the race
  const racingPromises = [...fetchPromises, timeoutPromise];
  
  // Return the first successful response
  return Promise.race(racingPromises);
}

// Usage
fetchWithFallback([
  'https://api1.example.com/data',
  'https://api2.example.com/data',
  'https://api3.example.com/data'
])
  .then(data => console.log('Data received:', data))
  .catch(error => console.error('All requests failed:', error));
```

**Why This Matters**: This pattern demonstrates how to implement redundancy and fault tolerance in web applications by making parallel requests to multiple endpoints. It's a practical application of the "race" pattern in Promise-based programming, which is valuable for improving reliability in distributed systems.

**Real-World Application**: Multi-region deployments, fallback mechanisms for critical API calls, and optimizing for the fastest data source.

### Challenges in Parallel Computing

**JavaScript Implementation: Handling Race Conditions with Atomic Operations**

```javascript
// Using Atomics to safely increment a counter across multiple workers
const sharedBuffer = new SharedArrayBuffer(4); // 4 bytes for one Int32
const counter = new Int32Array(sharedBuffer);

// In main thread
const numWorkers = 4;
let completedWorkers = 0;

for (let i = 0; i < numWorkers; i++) {
  const worker = new Worker('increment-worker.js');
  
  worker.onmessage = function() {
    completedWorkers++;
    if (completedWorkers === numWorkers) {
      console.log('Final counter value:', counter[0]);
      // Should be 4000 if each worker increments 1000 times
    }
  };
  
  worker.postMessage({ counter, iterations: 1000 });
}

// increment-worker.js
self.onmessage = function(e) {
  const { counter, iterations } = e.data;
  
  for (let i = 0; i < iterations; i++) {
    // Safely increment the counter using atomic operations
    Atomics.add(counter, 0, 1);
  }
  
  self.postMessage('Done');
};
```

**Why This Matters**: Race conditions are one of the most challenging aspects of parallel programming. This example demonstrates how to use atomic operations to safely modify shared data across multiple workers, a critical skill for building reliable concurrent systems.

**Real-World Application**: Shared counters, distributed locks, and any situation where multiple processes need to coordinate access to shared resources.

**JavaScript Implementation: Deadlock Prevention with Timeouts**

```javascript
// A simple resource manager with deadlock prevention
class ResourceManager {
  constructor() {
    this.resources = new Map();
    this.locks = new Map();
  }
  
  async acquireResource(resourceId, timeout = 5000) {
    if (this.locks.has(resourceId)) {
      // Resource is locked, wait for it with a timeout
      const startTime = Date.now();
      
      while (this.locks.has(resourceId)) {
        // Check for timeout
        if (Date.now() - startTime > timeout) {
          throw new Error(`Timeout acquiring resource ${resourceId}`);
        }
        
        // Wait a bit before checking again
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    // Lock the resource
    this.locks.set(resourceId, true);
    return this.resources.get(resourceId);
  }
  
  releaseResource(resourceId) {
    this.locks.delete(resourceId);
  }
  
  setResource(resourceId, value) {
    this.resources.set(resourceId, value);
  }
}

// Usage
const manager = new ResourceManager();
manager.setResource('database', { connection: 'example' });

async function worker1() {
  try {
    const resource = await manager.acquireResource('database', 2000);
    console.log('Worker 1 acquired resource:', resource);
    
    // Simulate work
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    manager.releaseResource('database');
    console.log('Worker 1 released resource');
  } catch (error) {
    console.error('Worker 1 error:', error.message);
  }
}

async function worker2() {
  try {
    // Try to acquire the same resource
    const resource = await manager.acquireResource('database', 2000);
    console.log('Worker 2 acquired resource:', resource);
    
    // Simulate work
    await new Promise(resolve => setTimeout(resolve, 500));
    
    manager.releaseResource('database');
    console.log('Worker 2 released resource');
  } catch (error) {
    console.error('Worker 2 error:', error.message);
  }
}

// Run both workers
worker1();
setTimeout(worker2, 200); // Start worker2 after a short delay
```

**Why This Matters**: Deadlocks occur when processes are waiting for resources held by each other. This implementation demonstrates a simple approach to deadlock prevention using timeouts, which is essential for building robust concurrent systems.

**Real-World Application**: Database connection pools, file access coordination, and any system where multiple processes compete for limited resources.


## Lesson Activities

### Activity 1: Visualizing Parallel vs. Sequential Processing

*Time: 30 minutes*
In this activity, you'll use a visualization tool to understand the performance differences between parallel and sequential processing.

1. Visit [https://parallel.browser-tools.net/](https://parallel.browser-tools.net/)
2. The tool simulates image processing with both sequential and parallel approaches
3. Experiment with different image sizes and number of workers
4. Answer the following questions:
    - At what problem size do you start seeing significant benefits from parallelization?
    - How does the speedup change as you add more workers?
    - Is there a point where adding more workers no longer helps? Why might this be?
5. Try to identify the overhead of creating and managing workers by looking at very small problem sizes


### Activity 2: Implementing Map-Reduce in JavaScript

*Time: 45 minutes*
In this activity, you'll implement a simple map-reduce framework in JavaScript and use it to analyze data.

```javascript
// Starter code
class MapReduce {
  constructor(numWorkers = 4) {
    this.numWorkers = numWorkers;
  }
  
  // TODO: Implement the map function that applies a mapper function to each item in the data array
  async map(data, mapperFn) {
    // Hint: Split the data into chunks and process each chunk in a separate worker
  }
  
  // TODO: Implement the reduce function that combines the mapped results using a reducer function
  async reduce(mappedData, reducerFn) {
    // Hint: The reducer should combine all the mapped results into a single result
  }
  
  // TODO: Implement the mapReduce function that performs the complete map-reduce operation
  async mapReduce(data, mapperFn, reducerFn) {
    // Hint: First map, then reduce
  }
}

// Example usage:
async function countWords() {
  const documents = [
    "the quick brown fox jumps over the lazy dog",
    "the five boxing wizards jump quickly",
    "how vexingly quick daft zebras jump"
  ];
  
  const mapReduce = new MapReduce();
  
  // Map function: Split each document into words and emit (word, 1) pairs
  const mapper = (doc) => {
    const words = doc.toLowerCase().split(/\s+/);
    const result = {};
    words.forEach(word => {
      result[word] = (result[word] || 0) + 1;
    });
    return result;
  };
  
  // Reduce function: Sum the counts for each word
  const reducer = (mappedResults) => {
    const wordCounts = {};
    mappedResults.forEach(result => {
      Object.keys(result).forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + result[word];
      });
    });
    return wordCounts;
  };
  
  const result = await mapReduce.mapReduce(documents, mapper, reducer);
  console.log(result);
}

countWords();
```

Tasks:
1. Complete the implementation of the MapReduce class
2. Test it with the word counting example
3. Modify the code to use actual Web Workers for true parallelism
4. Compare the performance with a sequential implementation for different input sizes
5. Extend your solution to handle another problem, such as finding the most frequent word in a collection of documents


### Activity 3: Web Workers Performance Analysis

*Time: 40 minutes*
In this activity, you'll analyze the performance characteristics of Web Workers for different types of tasks.

```javascript
// Starter code
function runSequential(data, operation) {
  const startTime = performance.now();
  const result = data.map(operation);
  const endTime = performance.now();
  return {
    result,
    time: endTime - startTime
  };
}

function runParallel(data, operation, numWorkers) {
  return new Promise((resolve) => {
    const startTime = performance.now();
    // TODO: Implement parallel processing using Web Workers
    // Hint: Split the data into chunks and assign each chunk to a worker
    // Don't forget to combine the results and measure the time
  });
}

// CPU-intensive operation
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memory-intensive operation
function sortLargeArray(arr) {
  return [...arr].sort((a, b) => a - b);
}

// I/O-bound operation simulation
async function simulateNetworkRequest(data) {
  await new Promise(resolve => setTimeout(resolve, 100));
  return data * 2;
}

// Test different operations
async function runTests() {
  // Generate test data
  const fibNumbers = Array(20).fill(0).map((_, i) => i + 25);
  const largeArrays = Array(10).fill(0).map(() => 
    Array(100000).fill(0).map(() => Math.random())
  );
  const networkData = Array(50).fill(0).map((_, i) => i);
  
  // TODO: Run tests for each operation type with both sequential and parallel approaches
  // TODO: Compare and analyze the results
}

runTests();
```

Tasks:
1. Complete the implementation of the `runParallel` function using Web Workers
2. Run performance tests for each type of operation (CPU-intensive, memory-intensive, I/O-bound)
3. Create a table or chart comparing sequential vs. parallel performance for each operation type
4. Analyze the results and answer:
    - Which types of operations benefit most from parallelization?
    - How does the optimal number of workers vary by operation type?
    - What overhead do you observe when using Web Workers?
5. Write a brief analysis of when you would and wouldn't use Web Workers in a real application

### Activity 4: Parallel Algorithm Design Challenge

*Time: 60 minutes*
In this activity, you'll design and implement a parallel algorithm for a real-world problem.

Problem: Image Processing Pipeline
You need to process a large batch of images through the following steps:

- Resize the image to a standard size
- Apply a filter (e.g., grayscale, sepia)
- Add a watermark
- Compress the image

Tasks:
1. Design a parallel processing pipeline for this workflow
2. Consider different approaches:
    - Process each image completely before moving to the next (task parallelism)
    - Process all images through each step before moving to the next step (pipeline parallelism)
    - A hybrid approach
3. Implement a simplified version of your design using JavaScript and Web Workers
4. Analyze the performance characteristics of your solution
5. Discuss how your solution would scale with:
    - More images
    - More complex operations
    - More available CPU cores

Starter code:

```javascript
// Simulated image processing functions
function resizeImage(imageData) {
  // Simulate processing time
  const startTime = performance.now();
  while (performance.now() - startTime < 50) {
    // Busy wait to simulate work
  }
  return { ...imageData, width: 800, height: 600, step: 'resized' };
}

function applyFilter(imageData) {
  const startTime = performance.now();
  while (performance.now() - startTime < 30) {
    // Busy wait to simulate work
  }
  return { ...imageData, filter: 'applied', step: 'filtered' };
}

function addWatermark(imageData) {
  const startTime = performance.now();
  while (performance.now() - startTime < 20) {
    // Busy wait to simulate work
  }
  return { ...imageData, watermark: true, step: 'watermarked' };
}

function compressImage(imageData) {
  const startTime = performance.now();
  while (performance.now() - startTime < 40) {
    // Busy wait to simulate work
  }
  return { ...imageData, size: imageData.size * 0.7, step: 'compressed' };
}

// TODO: Implement sequential processing pipeline
function processImagesSequentially(images) {
  // Process each image through all steps
}

// TODO: Implement parallel processing pipeline
function processImagesInParallel(images) {
  // Design and implement your parallel solution
}

// Test data
const testImages = Array(20).fill(0).map((_, i) => ({
  id: i,
  name: `image_${i}.jpg`,
  size: 1000000 + Math.random() * 1000000,
  width: 1920,
  height: 1080
}));

// TODO: Run and compare both approaches
async function runComparison() {
  console.log("Starting sequential processing...");
  const seqStartTime = performance.now();
  const seqResults = await processImagesSequentially(testImages);
  const seqEndTime = performance.now();
  console.log(`Sequential processing completed in ${seqEndTime - seqStartTime}ms`);
  
  console.log("Starting parallel processing...");
  const parStartTime = performance.now();
  const parResults = await processImagesInParallel(testImages);
  const parEndTime = performance.now();
  console.log(`Parallel processing completed in ${parEndTime - parStartTime}ms`);
  
  console.log(`Speedup: ${(seqEndTime - seqStartTime) / (parEndTime - parStartTime)}x`);
  
  // Verify results are correct
  // TODO: Add verification logic
}

runComparison();
```

## Common Mistakes / Misconceptions

1. **"Parallelism always improves performance"**
   - Not all problems can be effectively parallelized
   - The overhead of parallelization can outweigh benefits for small problems
   - Amdahl's Law limits the maximum possible speedup

2. **"More cores/workers always means better performance"**
   - There's a point of diminishing returns due to communication overhead
   - Some algorithms scale better than others with additional processors
   - Resource contention can actually slow things down with too many workers

3. **"Web Workers are the same as threads"**
   - Web Workers have a higher creation and communication overhead than traditional threads
   - They use message passing rather than shared memory (except for SharedArrayBuffer)
   - They're designed for coarse-grained rather than fine-grained parallelism

4. **"Asynchronous programming is the same as parallel programming"**
   - Async programming in JavaScript is still single-threaded (except with Workers)
   - It allows concurrency (handling multiple tasks) but not parallelism (executing multiple tasks simultaneously)
   - It's great for I/O-bound tasks but doesn't help with CPU-bound tasks

5. **"Race conditions are rare and not a big concern"**
   - Race conditions are common in parallel programs and extremely difficult to debug
   - They may only appear under specific timing conditions that are hard to reproduce
   - Always design parallel algorithms with careful consideration of shared state

6. **"Parallelism is only relevant for high-performance computing"**
   - Modern web applications frequently use parallelism (service workers, web workers)
   - Even mobile devices now have multiple cores that can be leveraged
   - Understanding parallelism helps you design more scalable and responsive applications

7. **"Debugging parallel code is just like debugging sequential code"**
   - Parallel bugs can be non-deterministic and timing-dependent
   - Traditional debugging techniques may alter the timing and hide the bug
   - Special tools and techniques are needed for effective parallel debugging
