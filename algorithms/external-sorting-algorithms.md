# External Sorting Algorithms

## Prerequisites

- [Data Structures](https://github.com/Techtonica/curriculum/tree/main/data-structures)
- [Runtime Complexity](https://github.com/Techtonica/curriculum/tree/main/runtime-complexity)
- [Sorting Algorithms](https://github.com/Techtonica/curriculum/tree/main/algorithms/sorting.md)
- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/tree/main/javascript)
- [Memory Management](https://github.com/Techtonica/curriculum/tree/main/runtime-complexity/memory.md)

## Table of Contents

- [Objectives](#objectives)
- [Motivation](#motivation)
- [Specific Things to Learn](#specific-things-to-learn)
  - [What is External Sorting?](#what-is-external-sorting)
  - [When to Use External Sorting](#when-to-use-external-sorting)
  - [External Merge Sort](#external-merge-sort)
  - [Polyphase Merge Sort](#polyphase-merge-sort)
  - [Replacement Selection](#replacement-selection)
  - [External Quicksort](#external-quicksort)
  - [Implementing External Sorting in JavaScript](#implementing-external-sorting-in-javascript)
  - [Performance Considerations](#performance-considerations)
- [Lesson Activities](#lesson-activities)
  - [Activity 1: External Merge Sort Implementation](#activity-1-external-merge-sort-implementation)
  - [Activity 2: Analyzing Real-World Data Sets](#activity-2-analyzing-real-world-data-sets)
  - [Activity 3: Optimizing External Sort Performance](#activity-3-optimizing-external-sort-performance)
  - [Activity 4: Comparing External Sorting Algorithms](#activity-4-comparing-external-sorting-algorithms)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)

## Objectives

By the end of this lesson, you should be able to:

- Understand when and why external sorting algorithms are necessary
- Explain the fundamental principles of external sorting
- Implement basic external sorting algorithms in JavaScript
- Analyze the performance characteristics of different external sorting approaches
- Apply external sorting techniques to solve real-world data processing problems

## Motivation

In the real world of software engineering, you'll frequently encounter datasets too large to fit into memory. External sorting algorithms are essential tools for handling these massive datasets efficiently. As a full stack engineer, understanding these algorithms will enable you to:

- Process large log files in backend systems
- Handle big data analytics tasks
- Optimize database operations
- Implement efficient file processing systems
- Build scalable applications that can handle growing datasets

Companies like Netflix, Amazon, and financial institutions regularly process terabytes of data that cannot fit into RAM, making external sorting a critical skill for modern engineers.

## Specific Things to Learn

### What is External Sorting?

External sorting algorithms are designed to sort data that doesn't fit into main memory (RAM) and must be stored in slower external storage like hard drives or SSDs. Unlike internal sorting algorithms (like quicksort or mergesort) that assume all data fits in memory, external sorting algorithms minimize disk I/O operations while efficiently sorting large datasets.

The key difference between internal and external sorting:

- **Internal sorting**: All data fits in memory, allowing for fast random access
- **External sorting**: Data must be read from and written to external storage in blocks or chunks

### When to Use External Sorting

External sorting becomes necessary when:

- The dataset is larger than available RAM
- You need to sort files that are several gigabytes or terabytes in size
- Memory constraints exist on your system
- You're working with distributed systems where data is spread across multiple storage devices

JavaScript example of determining if external sorting is needed:

```javascript
function isExternalSortingNeeded(fileSizeInBytes, availableMemoryInBytes) {
  // Rule of thumb: If file size is greater than ~70% of available memory,
  // external sorting is recommended
  const memoryThreshold = availableMemoryInBytes * 0.7;
  return fileSizeInBytes > memoryThreshold;
}

// Example usage
const largeFileSize = 8 * 1024 * 1024 * 1024; // 8GB file
const availableRAM = 16 * 1024 * 1024 * 1024; // 16GB RAM
console.log(isExternalSortingNeeded(largeFileSize, availableRAM)); // false

const veryLargeFileSize = 32 * 1024 * 1024 * 1024; // 32GB file
console.log(isExternalSortingNeeded(veryLargeFileSize, availableRAM)); // true
```

### External Merge Sort

External merge sort is the most common external sorting algorithm, based on the divide-and-conquer approach of the internal merge sort algorithm.

**Basic steps:**

1. **Split Phase**: Divide the large file into smaller chunks that fit in memory
2. **Sort Phase**: Sort each chunk in memory using an efficient internal sorting algorithm
3. **Merge Phase**: Merge the sorted chunks back together into a single sorted file

JavaScript implementation concept:

```javascript
async function externalMergeSort(inputFilePath, outputFilePath, memoryLimit) {
  // 1. Split the input file into smaller chunks
  const chunkPaths = await splitIntoChunks(inputFilePath, memoryLimit);

  // 2. Sort each chunk internally
  for (const chunkPath of chunkPaths) {
    await sortChunk(chunkPath);
  }

  // 3. Merge the sorted chunks
  await mergeChunks(chunkPaths, outputFilePath);

  // 4. Clean up temporary files
  await cleanupTempFiles(chunkPaths);
}

async function splitIntoChunks(filePath, memoryLimit) {
  // Read the file in chunks that fit in memory
  // Write each chunk to a temporary file
  // Return array of temporary file paths
}

async function sortChunk(chunkPath) {
  // Read the chunk into memory
  // Sort using an efficient internal algorithm (e.g., quicksort)
  // Write the sorted chunk back to disk
}

async function mergeChunks(chunkPaths, outputPath) {
  // Implement k-way merge of all sorted chunks
  // Write the final sorted data to the output file
}
```

### Polyphase Merge Sort

Polyphase merge sort is an optimization of external merge sort that reduces the number of passes needed when merging multiple files.

**Key concepts:**

- Uses a Fibonacci-like distribution of runs across tapes/files
- Minimizes the number of passes required for merging
- Particularly efficient when the number of available storage devices is limited

Real-world application: Polyphase merge sort was historically important for tape-based storage systems and is still relevant for systems with limited I/O channels.

### Replacement Selection

Replacement selection is a technique used to create initial runs that are, on average, twice the size of memory available. This reduces the number of runs and consequently the number of merge passes required.

**How it works:**

1. Fill available memory with as many records as possible
2. Build a min-heap with these records
3. Output the minimum element (root of the heap)
4. Read the next record from input
5. If the new record is larger than the last record output, add it to the heap; otherwise, set it aside for the next run
6. Repeat until the input is exhausted

Benefits:

- Creates runs that are typically 2× the size of available memory
- Reduces the number of merge passes required
- Improves overall performance for many real-world datasets

### External Quicksort

External quicksort adapts the internal quicksort algorithm for external memory. It's less common than external merge sort but can be effective in certain scenarios.

**Basic approach:**

1. Choose a pivot and partition the file into elements less than and greater than the pivot
2. Recursively sort each partition
3. Concatenate the sorted partitions

Tradeoffs:

- Potentially fewer passes than merge sort for some data distributions
- More random I/O operations, which can be inefficient on traditional hard drives
- Better suited for SSDs where random access is faster

### Implementing External Sorting in JavaScript

While JavaScript is primarily used for web development, Node.js enables file system operations that can be used to implement external sorting. Here's a simplified example of how you might implement the core of an external merge sort:

```javascript
const fs = require('fs').promises;
const readline = require('readline');
const { createReadStream, createWriteStream } = require('fs');

async function externalMergeSort(inputFile, outputFile, chunkSize = 100000) {
  // Step 1: Split the file into sorted chunks
  const tempFiles = await createSortedChunks(inputFile, chunkSize);

  // Step 2: Merge the sorted chunks
  await mergeChunks(tempFiles, outputFile);

  // Step 3: Clean up temporary files
  await Promise.all(tempFiles.map((file) => fs.unlink(file)));
}

async function createSortedChunks(inputFile, chunkSize) {
  const tempFiles = [];
  let chunk = [];
  let chunkIndex = 0;

  // Create a readline interface to read the file line by line
  const fileStream = createReadStream(inputFile);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  // Process each line
  for await (const line of rl) {
    chunk.push(Number(line.trim())); // Assuming numbers for simplicity

    if (chunk.length >= chunkSize) {
      // Sort the chunk and write to a temporary file
      const tempFile = `temp_chunk_${chunkIndex++}.txt`;
      await writeChunkToFile(
        chunk.sort((a, b) => a - b),
        tempFile
      );
      tempFiles.push(tempFile);
      chunk = [];
    }
  }

  // Handle the last chunk if it exists
  if (chunk.length > 0) {
    const tempFile = `temp_chunk_${chunkIndex}.txt`;
    await writeChunkToFile(
      chunk.sort((a, b) => a - b),
      tempFile
    );
    tempFiles.push(tempFile);
  }

  return tempFiles;
}

async function writeChunkToFile(chunk, filePath) {
  const data = chunk.join('\n') + '\n';
  await fs.writeFile(filePath, data);
}

async function mergeChunks(chunkFiles, outputFile) {
  // Implementation of k-way merge would go here
  // This is simplified for the example
  // ...
}
```

### Performance Considerations

When implementing external sorting algorithms, several factors affect performance:

1. **I/O Efficiency**: Minimizing disk reads/writes is crucial

   - Use buffered I/O
   - Read and write in large blocks
   - Sequential access is much faster than random access on HDDs

2. **Memory Management**:

   - Optimal chunk size depends on available memory
   - Larger chunks mean fewer merge passes but require more memory

3. **Algorithm Selection**:

   - External merge sort is generally preferred for most scenarios
   - Replacement selection creates larger initial runs
   - Consider the storage medium (HDD vs. SSD) when choosing

4. **Parallelization**:

   - Modern implementations can parallelize both the sorting and merging phases
   - Multi-threading can significantly improve performance on multi-core systems

5. **Data Characteristics**:
   - Partially sorted data can be processed more efficiently
   - Data type and record size affect optimal algorithm choice

JavaScript example of calculating optimal chunk size:

```javascript
function calculateOptimalChunkSize(availableMemory, recordSize) {
  // Use about 75% of available memory for the chunk
  // to leave room for the sorting algorithm's overhead
  const usableMemory = availableMemory * 0.75;
  return Math.floor(usableMemory / recordSize);
}

// Example: If we have 1GB of memory and each record is 100 bytes
const memoryInBytes = 1 * 1024 * 1024 * 1024;
const recordSizeInBytes = 100;
const optimalChunkSize = calculateOptimalChunkSize(
  memoryInBytes,
  recordSizeInBytes
);
console.log(`Optimal chunk size: ${optimalChunkSize} records`);
```

## Lesson Activities

### Activity 1: External Merge Sort Implementation

**Time: 90 minutes**

In this activity, you'll implement a basic external merge sort algorithm in JavaScript using Node.js.

**Starter Code:**

```javascript
const fs = require('fs').promises;
const readline = require('readline');
const { createReadStream, createWriteStream } = require('fs');

async function externalMergeSort(inputFile, outputFile, chunkSize = 100000) {
  // Step 1: Split the file into sorted chunks
  const tempFiles = await createSortedChunks(inputFile, chunkSize);

  // Step 2: Merge the sorted chunks
  await mergeChunks(tempFiles, outputFile);

  // Step 3: Clean up temporary files
  await Promise.all(tempFiles.map((file) => fs.unlink(file)));
}

// TODO: Implement this function
async function createSortedChunks(inputFile, chunkSize) {
  // Your implementation here
}

// TODO: Implement this function
async function mergeChunks(chunkFiles, outputFile) {
  // Your implementation here
}

// Helper function to write a chunk to a file
async function writeChunkToFile(chunk, filePath) {
  const data = chunk.join('\n') + '\n';
  await fs.writeFile(filePath, data);
}

// Generate a test file with random numbers
async function generateTestFile(fileName, numberOfLines) {
  const writeStream = createWriteStream(fileName);
  for (let i = 0; i < numberOfLines; i++) {
    writeStream.write(`${Math.floor(Math.random() * 1000000)}\n`);
  }
  return new Promise((resolve) => {
    writeStream.end(() => resolve());
  });
}

// Main function to run the test
async function runTest() {
  const testFile = 'test_data.txt';
  const outputFile = 'sorted_data.txt';
  const numberOfLines = 1000000; // 1 million lines

  console.time('Total execution time');

  console.log(`Generating test file with ${numberOfLines} random numbers...`);
  await generateTestFile(testFile, numberOfLines);

  console.log('Starting external merge sort...');
  await externalMergeSort(testFile, outputFile);

  console.log('Sorting complete!');
  console.timeEnd('Total execution time');
}

runTest().catch(console.error);
```

**Instructions:**

1. **Implement the `createSortedChunks` function:**

   - Read the input file line by line using the readline interface
   - Collect lines into a chunk until reaching the chunk size
   - Sort each chunk in memory (assuming numbers for simplicity)
   - Write each sorted chunk to a temporary file
   - Return an array of temporary file paths

2. **Implement the `mergeChunks` function:**

   - Create file readers for each chunk file
   - Implement a k-way merge algorithm:
     - Read the first line from each chunk
     - Find the smallest value among all chunks
     - Write the smallest value to the output file
     - Read the next line from the chunk that had the smallest value
     - Repeat until all chunks are processed

3. **Test with different data sizes:**

   - Modify the `numberOfLines` variable to test with different data sizes
   - Try with 100,000, 1,000,000, and 10,000,000 lines
   - Observe how execution time scales with data size

4. **Analyze memory usage:**

   - Add `console.log(process.memoryUsage())` at key points in your code
   - Observe how memory usage changes during execution
   - Experiment with different chunk sizes and analyze the impact

5. **Expected outcome:**

   - A working external merge sort implementation
   - Understanding of how the algorithm's performance scales with data size
   - Insights into memory usage patterns during external sorting

### Activity 2: Analyzing Real-World Data Sets

**Time: 60 minutes**

In this activity, you'll apply external sorting to analyze a large dataset of web server logs.

**Starter Code:**

```javascript
const fs = require('fs').promises;
const readline = require('readline');
const { createReadStream, createWriteStream } = require('fs');

// Parse a log line into a structured object
function parseLogLine(line) {
  // Example log format:
  // 192.168.1.1 - - [10/Oct/2023:13:55:36 -0700] "GET /index.html HTTP/1.1" 200 2326
  const regex = /^(\S+) \S+ \S+ \[([^\]]+)\] "([^"]*)" (\d+) (\d+)/;
  const match = line.match(regex);

  if (!match) return null;

  return {
    ip: match[1],
    timestamp: new Date(match[2].replace(':', ' ')),
    request: match[3],
    statusCode: parseInt(match[4]),
    bytes: parseInt(match[5]),
    originalLine: line
  };
}

// Generate a sample log file for testing
async function generateSampleLogFile(fileName, numberOfLines) {
  const ips = ['192.168.1.1', '10.0.0.1', '172.16.0.1', '8.8.8.8', '1.1.1.1'];
  const paths = [
    '/index.html',
    '/about.html',
    '/contact.html',
    '/api/data',
    '/images/logo.png'
  ];
  const statusCodes = [200, 200, 200, 200, 301, 404, 500];

  const writeStream = createWriteStream(fileName);

  const startDate = new Date('2023-10-10T00:00:00');

  for (let i = 0; i < numberOfLines; i++) {
    const ip = ips[Math.floor(Math.random() * ips.length)];
    const path = paths[Math.floor(Math.random() * paths.length)];
    const statusCode =
      statusCodes[Math.floor(Math.random() * statusCodes.length)];
    const bytes = Math.floor(Math.random() * 10000);

    // Add a random time increment (0-86400000 ms = 0-24 hours)
    const timestamp = new Date(
      startDate.getTime() + Math.floor(Math.random() * 86400000)
    );
    const formattedDate = timestamp
      .toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      })
      .replace(',', '')
      .replace(/(\d+)\/(\w+)\/(\d+)/, '$2/$1/$3');

    const logLine = `${ip} - - [${formattedDate} -0700] "GET ${path} HTTP/1.1" ${statusCode} ${bytes}\n`;
    writeStream.write(logLine);
  }

  return new Promise((resolve) => {
    writeStream.end(() => resolve());
  });
}

// TODO: Implement external sort by timestamp
async function sortLogsByTimestamp(inputFile, outputFile) {
  // Your implementation here
}

// TODO: Implement function to find peak traffic periods
async function findPeakTrafficPeriods(sortedLogFile, intervalMinutes = 60) {
  // Your implementation here
}

async function runAnalysis() {
  const logFile = 'server_logs.txt';
  const sortedLogFile = 'sorted_logs.txt';
  const numberOfLines = 1000000; // 1 million log entries

  console.log(`Generating sample log file with ${numberOfLines} entries...`);
  await generateSampleLogFile(logFile, numberOfLines);

  console.log('Sorting logs by timestamp...');
  await sortLogsByTimestamp(logFile, sortedLogFile);

  console.log('Finding peak traffic periods...');
  const peakPeriods = await findPeakTrafficPeriods(sortedLogFile);

  console.log('Analysis complete!');
  console.log('Peak traffic periods:');
  console.log(peakPeriods);
}

runAnalysis().catch(console.error);
```

**Instructions:**

1. **Implement the `sortLogsByTimestamp` function:**

   - Adapt your external merge sort implementation from Activity 1
   - Parse each log line using the provided `parseLogLine` function
   - Sort chunks based on the timestamp field
   - Merge the sorted chunks to create a time-ordered log file

2. **Implement the `findPeakTrafficPeriods` function:**

   - Read the sorted log file
   - Count requests in time intervals (default: 60 minutes)
   - Identify the intervals with the highest request counts
   - Return an array of peak periods with their request counts

3. **Analyze traffic patterns:**

   - Run the analysis on the generated log file
   - Identify the top 5 peak traffic periods
   - Calculate the average requests per hour
   - Determine if there are any patterns in the traffic distribution

4. **Extend the analysis:**

   - Modify the code to also track:
     - Most requested URLs during peak periods
     - Distribution of status codes (success vs. error rates)
     - IPs with the most requests (potential DDoS sources)

5. **Expected outcome:**

   - A working implementation that can sort and analyze large log files
   - Identification of peak traffic periods
   - Insights into traffic patterns and potential issues

### Activity 3: Optimizing External Sort Performance

**Time: 75 minutes**

In this activity, you'll implement advanced optimization techniques for external sorting.

**Starter Code:**

```javascript
const fs = require('fs').promises;
const readline = require('readline');
const { createReadStream, createWriteStream } = require('fs');
const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require('worker_threads');
const os = require('os');

// Basic external merge sort from Activity 1
async function basicExternalMergeSort(
  inputFile,
  outputFile,
  chunkSize = 100000
) {
  // Implementation from Activity 1
  // ...
}

// TODO: Implement replacement selection for run generation
class ReplacementSelectionSorter {
  constructor(memorySize) {
    this.memorySize = memorySize;
    this.heap = [];
    this.outputBuffer = [];
    this.nextRunBuffer = [];
  }

  // TODO: Implement the run generation algorithm
  async generateRuns(inputFile, outputPrefix) {
    // Your implementation here
  }
}

// TODO: Implement buffered I/O
class BufferedReader {
  constructor(filePath, bufferSize = 64 * 1024) {
    this.filePath = filePath;
    this.bufferSize = bufferSize;
    this.buffer = Buffer.alloc(0);
    this.position = 0;
    this.fileHandle = null;
    this.eof = false;
  }

  // TODO: Implement buffered reading
  async open() {
    // Your implementation here
  }

  async readLine() {
    // Your implementation here
  }

  async close() {
    // Your implementation here
  }
}

// TODO: Implement parallel chunk sorting
async function parallelSortChunks(
  inputFile,
  chunkSize,
  numWorkers = os.cpus().length
) {
  // Your implementation here
}

// Benchmark function
async function runBenchmark() {
  const testFile = 'benchmark_data.txt';
  const outputFile = 'sorted_data.txt';
  const numberOfLines = 5000000; // 5 million lines
  const chunkSizes = [10000, 100000, 1000000];

  console.log(`Generating test file with ${numberOfLines} random numbers...`);
  await generateTestFile(testFile, numberOfLines);

  // Benchmark basic external merge sort with different chunk sizes
  for (const chunkSize of chunkSizes) {
    console.log(
      `\nBenchmarking basic external merge sort with chunk size ${chunkSize}:`
    );
    console.time('Execution time');
    await basicExternalMergeSort(testFile, outputFile, chunkSize);
    console.timeEnd('Execution time');
  }

  // TODO: Benchmark your optimized implementations
  // ...
}

// Helper function to generate test data
async function generateTestFile(fileName, numberOfLines) {
  const writeStream = createWriteStream(fileName);
  for (let i = 0; i < numberOfLines; i++) {
    writeStream.write(`${Math.floor(Math.random() * 1000000)}\n`);
  }
  return new Promise((resolve) => {
    writeStream.end(() => resolve());
  });
}

runBenchmark().catch(console.error);
```

**Instructions:**

1. **Implement the Replacement Selection algorithm:**

   - Complete the `ReplacementSelectionSorter` class
   - Implement a min-heap data structure for efficient selection
   - Process input records according to the replacement selection algorithm:
     - Output the minimum element from the heap
     - If the next input record is ≥ the last output record, add it to the heap
     - Otherwise, add it to the buffer for the next run
   - Generate runs that are larger than memory size

2. **Implement buffered I/O:**

   - Complete the `BufferedReader` class
   - Implement buffered reading to reduce system calls
   - Read data in large blocks (e.g., 64KB)
   - Parse lines from the buffer
   - Refill the buffer when necessary

3. **Implement parallel chunk sorting:**

   - Complete the `parallelSortChunks` function
   - Use Node.js worker threads to sort chunks in parallel
   - Distribute chunks evenly among available CPU cores
   - Collect and merge the results

4. **Benchmark and analyze:**

   - Run benchmarks for each optimization:
     - Basic external merge sort (baseline)
     - External merge sort with replacement selection
     - External merge sort with buffered I/O
     - External merge sort with parallel chunk sorting
     - Combined optimizations

5. Measure and compare:

   - Execution time
   - Number of I/O operations
   - Memory usage
   - Run sizes (for replacement selection)

6. **Expected outcome:**

   - Working implementations of advanced external sorting optimizations
   - Comparative benchmark results
   - Understanding of which optimizations provide the most benefit
   - Insights into the tradeoffs between different optimization techniques

### Activity 4: Comparing External Sorting Algorithms

**Time: 60 minutes**

In this activity, you'll implement and compare different external sorting algorithms.

**Starter Code:**

```javascript
const fs = require('fs').promises;
const readline = require('readline');
const { createReadStream, createWriteStream } = require('fs');
const path = require('path');

// External Merge Sort (from previous activities)
async function externalMergeSort(inputFile, outputFile, chunkSize = 100000) {
  // Implementation from Activity 1
  // ...
}

// TODO: Implement External Quicksort
async function externalQuicksort(inputFile, outputFile, memoryLimit = 100000) {
  // Your implementation here
}

// TODO: Implement Polyphase Merge Sort
async function polyphaseMergeSort(
  inputFile,
  outputFile,
  numTapes = 3,
  chunkSize = 100000
) {
  // Your implementation here
}

// Function to generate test data with different distributions
async function generateTestData(baseFileName, size, distribution = 'random') {
  const fileName = `${baseFileName}_${distribution}_${size}.txt`;
  const writeStream = createWriteStream(fileName);

  switch (distribution) {
    case 'random':
      for (let i = 0; i < size; i++) {
        writeStream.write(`${Math.floor(Math.random() * 1000000)}\n`);
      }
      break;
    case 'nearly_sorted':
      for (let i = 0; i < size; i++) {
        // 90% chance the number is in order, 10% chance it's random
        const value =
          Math.random() < 0.9
            ? i + Math.floor(Math.random() * 10)
            : Math.floor(Math.random() * 1000000);
        writeStream.write(`${value}\n`);
      }
      break;
    case 'reverse_sorted':
      for (let i = size; i > 0; i--) {
        writeStream.write(`${i}\n`);
      }
      break;
  }

  return new Promise((resolve) => {
    writeStream.end(() => resolve(fileName));
  });
}

// Function to verify sorting correctness
async function verifySorting(fileName) {
  const rl = readline.createInterface({
    input: createReadStream(fileName),
    crlfDelay: Infinity
  });

  let previousValue = -1;
  let isCorrect = true;
  let lineCount = 0;

  for await (const line of rl) {
    const value = parseInt(line.trim());
    if (value < previousValue) {
      isCorrect = false;
      console.error(
        `Sorting error at line ${lineCount}: ${value} < ${previousValue}`
      );
      break;
    }
    previousValue = value;
    lineCount++;
  }

  return isCorrect;
}

// Benchmark function
async function runComparison() {
  const algorithms = [
    { name: 'External Merge Sort', fn: externalMergeSort },
    { name: 'External Quicksort', fn: externalQuicksort },
    { name: 'Polyphase Merge Sort', fn: polyphaseMergeSort }
  ];

  const distributions = ['random', 'nearly_sorted', 'reverse_sorted'];
  const sizes = [100000, 1000000];

  const results = [];

  // Generate test data
  const testFiles = [];
  for (const distribution of distributions) {
    for (const size of sizes) {
      const fileName = await generateTestData('test_data', size, distribution);
      testFiles.push({ fileName, distribution, size });
    }
  }

  // Run benchmarks
  for (const { fileName, distribution, size } of testFiles) {
    for (const algorithm of algorithms) {
      const outputFile = `sorted_${path.basename(fileName)}`;

      console.log(`Running ${algorithm.name} on ${fileName}...`);

      const startTime = process.hrtime.bigint();
      await algorithm.fn(fileName, outputFile);
      const endTime = process.hrtime.bigint();

      const executionTimeMs = Number(endTime - startTime) / 1000000;

      // Verify sorting correctness
      const isCorrect = await verifySorting(outputFile);

      results.push({
        algorithm: algorithm.name,
        distribution,
        size,
        executionTimeMs,
        isCorrect
      });

      console.log(
        `${
          algorithm.name
        } on ${distribution} data (size ${size}): ${executionTimeMs.toFixed(
          2
        )}ms, correct: ${isCorrect}`
      );
    }
  }

  // Print summary table
  console.log('\nResults Summary:');
  console.log('Algorithm | Distribution | Size | Time (ms) | Correct');
  console.log('----------|--------------|------|-----------|--------');

  for (const result of results) {
    console.log(
      `${result.algorithm.padEnd(10)} | ${result.distribution.padEnd(
        12
      )} | ${String(result.size).padEnd(4)} | ${result.executionTimeMs
        .toFixed(2)
        .padEnd(9)} | ${result.isCorrect}`
    );
  }

  // Clean up test files
  for (const { fileName } of testFiles) {
    await fs.unlink(fileName).catch(() => {});
    await fs.unlink(`sorted_${path.basename(fileName)}`).catch(() => {});
  }
}

runComparison().catch(console.error);
```

**Instructions:**

1. **Implement External Quicksort:**

   - Adapt the internal quicksort algorithm for external memory
   - Implement the partitioning step to work with files:
     - Choose a pivot (e.g., median of a sample)
     - Create two temporary files for elements < pivot and elements ≥ pivot
     - Read the input file in chunks and distribute records to the temporary files
     - Recursively sort each partition
     - Concatenate the sorted partitions

2. **Implement Polyphase Merge Sort:**

   - Create multiple "tape" files (at least 3)
   - Distribute initial sorted runs using a Fibonacci-like distribution
   - Implement the merge phase:
     - Merge from all but one tape into the empty tape
     - Repeat until all runs are merged
   - Track the distribution of runs across tapes

3. **Run the comparison:**

   - Execute each algorithm on different data distributions:
     - Random data
     - Nearly sorted data
     - Reverse sorted data
   - Test with different data sizes
   - Measure execution time
   - Verify sorting correctness

4. **Analyze the results:**

   - Compare the performance of each algorithm across different data distributions
   - Identify which algorithm performs best for each scenario
   - Analyze the strengths and weaknesses of each approach
   - Consider factors like:
     - Number of disk I/O operations
     - Sensitivity to data distribution
     - Memory efficiency
     - Algorithmic complexity

5. **Expected outcome:**
   - Working implementations of multiple external sorting algorithms
   - Comparative performance analysis
   - Understanding of which algorithm is best suited for different scenarios
   - Insights into the tradeoffs between different external sorting approaches

## Common Mistakes / Misconceptions

1. **Misconception: "I can just use regular sorting algorithms for all data sizes."**

   - Reality: Internal sorting algorithms fail when data doesn't fit in memory, causing system crashes or extreme slowdowns.

2. **Misconception: "External sorting is only relevant for mainframes or specialized systems."**

   - Reality: Even modern web applications frequently need to process datasets larger than available memory, especially in data analytics, log processing, and ETL operations.

3. **Mistake: Ignoring I/O costs in performance analysis**

   - Disk operations are orders of magnitude slower than memory operations. The number of disk reads/writes often dominates the overall performance more than computational complexity.

4. **Mistake: Using too small chunk sizes**

   - Using chunks that are too small leads to too many merge passes and excessive I/O operations. Optimal chunk size should utilize most of available memory.

5. **Misconception: "External sorting is obsolete with modern hardware."**

   - Reality: As data sizes grow exponentially, the need for external sorting remains relevant. Even with terabytes of RAM, there are still datasets too large to fit in memory.

6. **Mistake: Not considering the storage medium**

   - Different algorithms perform differently on HDDs vs. SSDs. HDDs favor sequential access patterns, while SSDs handle random access better.

7. **Misconception: "JavaScript can't handle serious data processing tasks."**

   - Reality: Modern JavaScript runtimes like Node.js are capable of handling significant data processing tasks, though they may not match the performance of systems languages for the most demanding scenarios.

8. **Mistake: Ignoring memory management**
   - Not properly managing memory during external sorting can lead to memory leaks or inefficient use of available resources, especially in garbage-collected languages like JavaScript.
