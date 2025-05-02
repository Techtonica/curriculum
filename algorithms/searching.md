# Searching Algorithms

### Projected Time
About 2 hours
- 30 minutes for Lesson
- 30 minutes for Guided Practice
- 30 minutes for Independent Practice
- 30 minutes for Check for Understanding

### Prerequisites
- [Arrays](/data-structures/arrays.md)
- [Time Complexity](/runtime-complexity/runtime-complexity.md)

### Motivation
Searching for an item in an array is a common need in software development. Understanding which searching algorithm to use and when is crucial for writing efficient code. Different searching algorithms have different time complexities, and choosing the right one can significantly impact your application's performance.

For example, [Atari used Radix trees](https://en.wikipedia.org/wiki/Radix_tree) to optimize their IP address search engine - their efficiency went from O(n) (searching an array) to O(log n).

### Objectives
**Participants will be able to:**
- Understand what searching algorithms are and why they matter
- Implement and explain linear search
- Implement and explain binary search
- Compare the runtime complexity of linear and binary search
- Determine when to use linear search vs. binary search
- Recognize real-world applications of searching algorithms

### Materials
- [Linear Search - Video](https://www.youtube.com/watch?v=TwsgCHYmbbA)
- [Binary Search - Video](https://www.youtube.com/watch?v=P3YID7liBug)
- [Binary Search - Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
- [Depth-First and Breadth-First Searches](https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/)

## Lesson

### Linear Search

Linear search is the simplest searching algorithm. It works by examining each element in a collection one by one until the target element is found or the entire collection has been searched.

#### How Linear Search Works:
1. Start from the first element of the array
2. Compare each element with the target value
3. If the element matches the target, return its index
4. If the element doesn't match, move to the next element
5. If no match is found after checking all elements, return -1 (or another indicator that the element wasn't found)

#### Visual Walkthrough:

Let's search for the value 7 in this array: [3, 1, 4, 6, 7, 2, 9]

```
Step 1: Check if 3 equals 7? No, move to next element.
[3, 1, 4, 6, 7, 2, 9]
 ^
```

```
Step 2: Check if 1 equals 7? No, move to next element.
[3, 1, 4, 6, 7, 2, 9]
    ^
```

```
Step 3: Check if 4 equals 7? No, move to next element.
[3, 1, 4, 6, 7, 2, 9]
       ^
```

```
Step 4: Check if 6 equals 7? No, move to next element.
[3, 1, 4, 6, 7, 2, 9]
          ^
```

```
Step 5: Check if 7 equals 7? Yes! Return index 4.
[3, 1, 4, 6, 7, 2, 9]
             ^
```

#### JavaScript Implementation:

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i &lt; arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index where target is found
    }
  }
  return -1; // Return -1 if target is not found
}
```
#### Time Complexity:
- **Best case**: O(1) - when the target is the first element
- **Average case**: O(n/2) which simplifies to O(n)
- **Worst case**: O(n) - when the target is the last element or not present

#### Space Complexity:
- O(1) - constant space, regardless of input size

#### When to Use Linear Search:
- When the data is not sorted
- When the collection is small
- When you need to search through the entire collection regardless (e.g., finding all occurrences)
- When the collection is rarely searched, and the overhead of sorting for binary search isn't justified


### Binary Search
Binary search is a more efficient algorithm for searching in a sorted array. It works by repeatedly dividing the search interval in half.

#### Prerequisites for Binary Search:
- The array **must be sorted** before applying binary search

#### How Binary Search Works:
1. Find the middle element of the array
2. If the target equals the middle element, return the middle index
3. If the target is less than the middle element, search the left half
4. If the target is greater than the middle element, search the right half
5. Repeat steps 1-4 until the element is found or the search interval is empty


#### Visual Walkthrough:
Let's search for the value 7 in this sorted array: [1, 2, 3, 4, 6, 7, 9]

```plaintext
Step 1: Find the middle element (index 3): 4
Compare: 7 > 4, so search the right half.
[1, 2, 3, 4, 6, 7, 9]
          ^
```

```plaintext
Step 2: Find the middle of the right half (index 5): 7
Compare: 7 == 7, found at index 5!
[1, 2, 3, 4, 6, 7, 9]
                ^
```

#### JavaScript Implementation:

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left &lt;= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid; // Return the index where target is found
    }
    
    if (arr[mid] &lt; target) {
      left = mid + 1; // Search the right half
    } else {
      right = mid - 1; // Search the left half
    }
  }
  
  return -1; // Return -1 if target is not found
}
```

#### Time Complexity:
- **Best case**: O(1) - when the target is the middle element
- **Average and Worst case**: O(log n) - because the search interval is halved in each step

#### Space Complexity:
- **Iterative implementation**: O(1) - constant space
- **Recursive implementation**: O(log n) - due to the call stack

#### When to Use Binary Search:
- When the data is sorted
- When the collection is large
- When you need to search frequently in the same collection
- When the overhead of sorting is justified by multiple searches

### Comparison: Linear Search vs. Binary Search

| Aspect | Linear Search | Binary Search
|-----|-----|-----
| Time Complexity | O(n) | O(log n)
| Space Complexity | O(1) | O(1) iterative, O(log n) recursive
| Prerequisite | None | Array must be sorted
| Best for | Small or unsorted arrays | Large sorted arrays
| Implementation | Simpler | More complex


### Real-world Applications
1. **Linear Search**:
   - Finding an element in a small list
   - Searching in unsorted data
   - Finding all occurrences of an element

2. **Binary Search**:
   - Dictionary lookup
   - Phone book search
   - Database queries on indexed fields
   - Finding files in a sorted directory

3. **Other Search Algorithms**:
   - **Depth-First Search (DFS)**: Used for traversing or searching tree or graph data structures
   - **Breadth-First Search (BFS)**: Used for finding the shortest path in unweighted graphs

## Guided Practice
Let's work through some examples together:

### Example 1: Linear Search
Implement a function that finds the first occurrence of a number in an array and returns its index.

```javascript
function findFirstOccurrence(arr, target) {
  // Your code here
}

// Test cases
console.log(findFirstOccurrence([5, 3, 8, 3, 7, 3], 3)); // Should return 1
console.log(findFirstOccurrence([5, 3, 8, 3, 7, 3], 10)); // Should return -1
```

#### Solution

```javascript
function findFirstOccurrence(arr, target) {
  for (let i = 0; i &lt; arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

### Example 2: Binary Search
Implement a function that uses binary search to find a number in a sorted array.

```javascript
function binarySearchExample(sortedArr, target) {
  // Your code here
}

// Test cases
console.log(binarySearchExample([1, 3, 5, 7, 9, 11, 13], 7)); // Should return 3
console.log(binarySearchExample([1, 3, 5, 7, 9, 11, 13], 6)); // Should return -1
```

#### Solution

```javascript
function binarySearchExample(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  
  while (left &lt;= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (sortedArr[mid] === target) {
      return mid;
    }
    
    if (sortedArr[mid] &lt; target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}
```

## Independent Practice

### Challenge 1: Find Last Occurrence
Write a function that finds the index of the last occurrence of an element in an array using linear search.

```javascript
function findLastOccurrence(arr, target) {
  // Your code here
}

// Test cases
console.log(findLastOccurrence([5, 3, 8, 3, 7, 3], 3)); // Should return 5
console.log(findLastOccurrence([5, 3, 8, 3, 7, 3], 10)); // Should return -1
```

### Challenge 2: Binary Search Recursive
Implement binary search using recursion instead of iteration.

```javascript
function recursiveBinarySearch(sortedArr, target, left = 0, right = sortedArr.length - 1) {
  // Your code here
}

// Test cases
console.log(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13], 7)); // Should return 3
console.log(recursiveBinarySearch([1, 3, 5, 7, 9, 11, 13], 6)); // Should return -1
```

### Challenge 3: Find Range
Write a function that finds the range (first and last occurrence) of a given element in a sorted array using binary search.

```javascript
function findRange(sortedArr, target) {
  // Your code here - return [firstIndex, lastIndex] or [-1, -1] if not found
}

// Test cases
console.log(findRange([1, 2, 3, 3, 3, 4, 5], 3)); // Should return [2, 4]
console.log(findRange([1, 2, 3, 3, 3, 4, 5], 6)); // Should return [-1, -1]
```

## Check for Understanding
1. What is the key difference between linear search and binary search?
2. When would you choose linear search over binary search?
3. What is the time complexity of binary search, and why is it more efficient than linear search for large datasets?
4. Can you use binary search on an unsorted array? Why or why not?
5. How would you modify the binary search algorithm to find the first occurrence of a repeated element?


### Extension: Depth-First Search (DFS) and Breadth-First Search (BFS)
While linear and binary search are used for arrays, DFS and BFS are used for searching in trees and graphs.

#### Depth-First Search (DFS)
- Explores as far as possible along each branch before backtracking
- Uses a stack (or recursion) to keep track of nodes to visit
- Applications: Topological sorting, finding connected components, maze solving

#### Breadth-First Search (BFS)
- Explores all neighbors at the present depth before moving to nodes at the next depth level
- Uses a queue to keep track of nodes to visit
- Applications: Finding shortest path, social networking connections, web crawlers


For more on these topics, check out the [Depth-First and Breadth-First Searches](https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/) resource.

## Additional Resources
- [Visualgo - Sorting and Searching Visualization](https://visualgo.net/en/sorting)
- [Interactive Binary Search Visualization](https://www.cs.usfca.edu/~galles/visualization/Search.html)
- [GeeksforGeeks - Searching Algorithms](https://www.geeksforgeeks.org/searching-algorithms/)
- [JavaScript Algorithms - Search Algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search)
