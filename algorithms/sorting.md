# Sorting Algorithms

⚠️ **_This is intended to be a comprehensive advanced self-guided topic outline. You may come back to the various activities over the course of a week. See respective time estimates for each [learning area](#lesson) below._** ⚠️

## Prerequisites

- [Recursion](/recursion/recursion.md)
- [Searching](/algorithms/searching.md) (Particularly Binary Search)

## Table of Contents

- [Motivation](#motivation)
- [Objectives](#objectives)
- [Materials and Useful Videos](#materials-and-useful-videos)
- [Pre-Lesson Warm Up and Game](#pre-lesson-warm-up-and-game)
- [Lesson (7 hours)](#lesson-7-hours)
  - [BogoSort (10 minutes)](#bogosort-10-minutes)
  - [Bubble Sort (30 minutes)](#bubble-sort-30-minutes)
  - [Selection Sort (15 minutes)](#selection-sort-15-minutes)
  - [Merge Sort (2 hours)](#merge-sort-2-hours)
  - [Insertion Sort (1 hour)](#insertion-sort-1-hour)
  - [Topological Sort (1.5 hours)](#topological-sort-15-hours)
  - [Radix Sort (1.5 hours)](#radix-sort-15-hours)
- [Independent Practice](#independent-practice)
- [Check for Understanding](#check-for-understanding)
- [Supplemental Resources](#supplemental-resources)
- [Attribution](#attribution)

## Motivation

Sorting is important in programming for the same reason it is important in everyday life. It is easier and faster to locate items in a sorted list than unsorted. Sorting algorithms can be used in a program to sort an array for later searching or writing out to an ordered file or report.[(by Siddharth Khuntwal)](https://www.quora.com/Why-is-sorting-important-in-computer-science-and-programming)

For example bubble sort, quick sort, and selection sort all take the same input and produce the same output but at different speeds. This is a nice way to show how different approaches can yield more efficient algorithms using approaches such as divide and conquer. On top of that, sorting algorithms don't require advanced data structures knowledge to understand. If you can understand arrays you can understand sorting algorithm examples.

## Objectives

**Participants will be able to:**

- Understand what an algorithm is.
- Understand what a sorting algorithm is.
- Understand the mechanics of a few sorting algorithms including Bubble Sort, Merge Sort, and Quick Sort.
- Understand the Runtime Complexity of these algorithms.

## Materials and Useful Videos

- [Sorting Algorithms Visualized](https://www.toptal.com/developers/sorting-algorithms/)
- [Bubble Sort With Hungarian Folk Dance](https://www.youtube.com/watch?v=lyZQPjUT5B4)
- [Merge Sort With German Folk Dance](https://www.youtube.com/watch?v=XaqR3G_NVoo)
- A Deck of Cards

<a id="pre-lesson-warm-up-and-game"></a>

## Pre-Lesson Warm Up and Game (30 minutes)

- Discussion topic: What is an algorithm? Can you give us an example of an algorithm?
  - An algorithm is a way for describing automated processes.
- Discussion topic: What is a Sorting Algorithm? Can you give us an example of something that we sort in our day-to-day lives?
  - A Sorting Algorithm orders items in a group according to a specificed attribute. ie: Order a roster of students by name, Order cartons of milk by expiration date.
- Discussion topic: Why do we need sorting algorithms in Computer Science?
  - Let's do a Card-Sorting activity. Partner up in groups of two or three and order cards from lowest to highest (all of the same suit). Give student groups a deck of cards and give them each a suit of cards to sort.
  - After 10 minutes of sorting, let's reflect on how we accomplished it. Did we sort the cards differently from the people in our partner groups? Did we compare a few at a time? Did we look for the lowest first and then go from there? Do you think we could sort in fewer "moves"?
  - After this Card-Sorting activity it's clear there are a lot of different ways to sort cards! This translates right to how computer scientists sort Lists. As Computer Scientists we have lots of different algorithms to use that allow us to sort - from Bubble Sort, to Merge Sort, to Quick Sort! Some algorithms aren't as fast as others (Obama knows not to use the Bubble Sort: [Watch video](https://www.youtube.com/watch?v=k4RRi_ntQc8)), but there are many tradeoffs to different algorithms!
  - Why is sorting important? Remember Binary Search last lesson? Well, we need a sorted list to do Binary Searching!

## Lesson (7 hours)

Remember how we can sort cards lots of different ways? Let's talk about all the ways computers sort Lists.

Let's start with a Bad Way To Sort:

<a id="bogosort-10-minutes"></a>

### 1️⃣ BogoSort (10 minutes)

Say we want to sort a deck of cards:

1. Toss them in the air!
2. Pick them up one by one.
3. Are they sorted?
4. If not, repeat lines 1 - 3

Let's talk about the Complexity of BogoSort. Here's the pseudocode:

```JavaScript
while not Sorted(a)
   Shuffle(a)
```

_The best case?_

O(n) where n is the length of the list, because we have to check that the list is sorted.

_The worst case?_

O(????) because this could NEVER END if we get really unlucky.

Hopefully you can see why we never want to use this algorithm again.

<a id="bubble-sort-30-minutes"></a>

### 2️⃣ Bubble Sort (30 minutes)

[Thanks, Obama](https://www.youtube.com/watch?v=k4RRi_ntQc8)

How does it work?

1. Compare consecutive pairs of elements.
2. Swap elements in the pair so that the smaller one is first.
3. When we reach the end of the list, start over!
4. Stop when no more swaps have been made.

Demonstration video: [Watch this Video](https://www.youtube.com/watch?v=Cq7SMsQBEUw) (useful in slo-mo)

Let's watch a folk dance interpretation of Bubble Sort: [Watch this video, It is also available in the materials section](https://www.youtube.com/watch?v=lyZQPjUT5B4)

Let's break into groups again and try out the sorting algorithm on our own decks of cards!

What's the Complexity of Bubble Sort?

```JavaScript
function bubble_sort(a)
{
    let swap;
    let n = a.length-1;
    let x=a;
    do {
        swap = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
    return x;
}
```

We have nested loops: the while-loop and the for-loop! The outer loop passes until there are no more swaps. Thus the runtime is O(n^2).

Group question: what state would the list be in for Bubble Sort to have the worst possible performance?

- If the smallest element of the list is at the back, Bubble Sort will perform at the absolute worst. Because in each iteration only the largest unsorted element gets put in its proper location. When the smallest element is at the end it will have to be swapped each time through the list and it won't get to the front of the list until all n iterations have occurred.

<a id="selection-sort-15-minutes"></a>

### 3️⃣ Selection Sort (15 minutes)

How does it work?

1. First step:
   1. Extract the smallest element.
   2. Swap it with the element at index 0.
2. Next step:
   1. In the remaining unsorted sublist extract the smallest element.
   2. Swap it with the element at index 1.
3. At the i'th step, the first i elements of the list are guaranteed to be sorted.

Demonstration video: [Watch this video](https://www.youtube.com/watch?v=92BfuxHn2XE)

What's the Complexity of Selection Sort?

```JavaScript
function selection_sort(a){
  for( let i = 0; i < a.length; i++ ){
    let small = i;
    for( let j = i + 1; j < a.length; j++ ){
      if( a[j] < a[small]){
        small = j;
      }
    }
    if(i !== small){
      let temp = a[i];
      a[i] = a[small];
      a[small] = temp;
    }
  }
  return a;
}
```

Again, there's a nested loop, so worst-case runtime is O(n^2)!

#### Can we do better than O(n^2)?????

<a id="merge-sort-2-hours"></a>

### 4️⃣ Merge Sort (2 hours)

Merge Sort is a _divide and conquer_ algorithm. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.

What are we dividing and what are we conquering here?

Well, we divide the list into lots of sublists. In fact, we divide them into lists that are of size 1! At that point, we know a list of size 1 is sorted! This isn't intuitive, right? Let's dig in...

1. If a list is of length 0 or 1, it's already sorted!
2. If a list has more than one element, split it into two lists, and sort each.
3. Merge sorted sublists.
   - Look at the first element of each, move smaller to the end of the result.
   - When one list is empty, just copy the rest of the other list.

Let's review this video: [Watch this video, it is also available in the materials section](https://www.youtube.com/watch?v=KF2j-9iSf4Q)

This will be tough, but let's try implementing it ourselves!

Let's try just the merge (a, left, right, middle) function first.

```JavaScript
function merge (a, left, right, middle){
    n1 = middle - left +1;
    n2 = right - middle;
    let  L = [];
    let R = [];
    for(let i =0;i<n1;i++){
        L[i] = a[left + i ];
    }
    for(let j=0;j<n2;j++){
        R[j] = a[middle+j+1];
    }
    i = 0;
    j = 0 ;
    let k = left;
	while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
            a[k] = L[i++];
        else
	        a[k] = R[j++];
	    k++;
    }
	while (i < n1)
    {
	    a[k] = L[i];
	    i++;
	    k++;
	}
	while (j < n2)
	{
	    a[k] = R[j];
	    j++;
	    k++;
	}
}
```

Can we merge this with sample input? What if left = [1,3] and right = [2, 4]?

After an hour, let's complete the merge_sort function!

```JavaScript
function merge_sort (a, left, right){
    if(left < right){
        let middle = Math.floor((left +right)/2);
        merge_sort(a,left,middle);
        merge_sort(a,middle+1,right);
        merge(a,left,right,middle);
    }
}
```

Let's test it with this list: testList = [1,3,5,7,2,6,25,18,13]

<a id="insertion-sort-1-hour"></a>

#### 5️⃣ Insertion Sort (1 hour)

Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's much less efficient on large lists than more advanced algorithms like quicksort, heapsort, or merge sort, but it has advantages for small data sets.

<p align="center">
	<img width="468" alt="Visual Representation of Insertion Sort" src="https://github.com/user-attachments/assets/bdb13812-4463-43ed-81e4-a237f9ef724a" />
</p>

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements greater than current to one position ahead
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place current in its correct position
    arr[j + 1] = current;
  }
  return arr;
}
```

#### **How Insertion Sort Works**

Iterate through the array starting from the second element
Compare the current element with the previous elements
If the previous element is greater than the current element, move the previous element one position ahead
Repeat until the correct position for the current element is found
Insert the current element at the correct position
Repeat steps 1-5 until the array is sorted

#### **Complexity**

- Best time case: O(n) when the array is already sorted
- Average time complexity case: O(n²)
- Worst time complexity case: O(n²) when the array is sorted in reverse order
- Space Complexity: O(1)
- In-place sorting algorithm

#### **When to Use Insertion Sort**

- Small data sets
- Nearly sorted arrays
- Online algorithms (where new elements are continuously added)
- As a building block in more complex algorithms

<a id="topological-sort-15-hours"></a>

### 6️⃣ Topological Sort (1.5 hours)

Topological sorting is an algorithm for ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u comes before vertex v in the ordering. It's not a comparison-based sorting algorithm like others in this document, but rather a graph algorithm.

<p align="center">
	<img width="447" alt="Visual Representation of Topological Sort" src="https://github.com/user-attachments/assets/51b1b382-3f7a-4190-a796-ee434845e9e3" />
</p>

```javascript
function topologicalSort(graph) {
  const visited = new Set();
  const temp = new Set();
  const order = [];

  // For each unvisited vertex
  for (const node in graph) {
    if (!visited.has(node) && !temp.has(node)) {
      if (!dfs(node)) return []; // If cycle detected, return empty array
    }
  }

  return order.reverse();

  // DFS helper function
  function dfs(node) {
    // If node is in temp, we have a cycle
    if (temp.has(node)) return false;
    // If node is already visited, skip
    if (visited.has(node)) return true;

    temp.add(node);

    // Visit all neighbors
    for (const neighbor of graph[node]) {
      if (!dfs(neighbor)) return false;
    }

    // Remove from temp and add to visited
    temp.delete(node);
    visited.add(node);
    // Add to result
    order.push(node);

    return true;
  }
}
```

#### **How Topological Sort Works**

1. Identify a vertex with no incoming edges
2. Remove the vertex and its outgoing edges from the graph
3. Add the vertex to the result list
4. Repeat steps 1-3 until the graph is empty

#### **Complexity**

- **Time Complexity**: O(V + E) where V is the number of vertices and E is the number of edges
- **Space Complexity**: O(V)

#### **Applications of Topological Sort**

- Scheduling jobs or tasks with dependencies
- Course prerequisites in academic planning
- Package dependencies in software installation
- Circuit design evaluation
- Data serialization

<a id="radix-sort-15-hours"></a>

### 7️⃣ Radix Sort (1.5 hours)

Radix sort is a non-comparative sorting algorithm that sorts data with integer keys by grouping keys by individual digits which share the same significant position and value. It can sort integers, strings, and other data types that can be represented as integers.

<p align="center">
	<img width="558" alt="Visual Representation of Radix Sort by 1s" src="https://github.com/user-attachments/assets/ac54833a-9899-419d-b340-78f0fdf673aa" />
	<img width="554" alt="Visual Representation of Radix Sort by 10s" src="https://github.com/user-attachments/assets/4eac5fc1-4076-4abf-8834-f60a097ff339" />
	<img width="556" alt="Visual Representation of Radix Sort by 100s" src="https://github.com/user-attachments/assets/fc9291f8-63b5-492e-b76e-06b453e7a591" />
</p>

```javascript
function radixSort(arr) {
  // Find the maximum number to know number of digits
  const max = Math.max(...arr);

  // Do counting sort for every digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(arr, exp);
  }

  return arr;
}

function countingSortByDigit(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  // Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Change count[i] so that count[i] contains actual
  // position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the output array to arr[]
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
```

#### **How Radix Sort Works**

1. Find the maximum number to know the number of digits
2. For each digit position (starting from least significant digit):
   - Distribute the elements into buckets based on the current digit
   - Collect the elements from buckets, preserving their order
3. Repeat until all digit positions are processed

#### **Complexity**

- **Time Complexity**: O(d \* (n + k)) where d is the number of digits, n is the number of elements, and k is the range of input (often a constant like 10 for decimal)
- **Space Complexity**: O(n + k)

#### **When to Use Radix Sort**

- When dealing with fixed-length integers
- When the range of values is not significantly larger than the number of items
- When a stable sort is required
- For sorting strings lexicographically

## Independent Practice

Pick two or three algorithms to implement. Spend 45 minutes to 1 hour for each sort writing steps for yourself on how to go about writing each algorithm. Recall you learned about: Bubble, Selection, Merge, Insert, Topological, & Radix. For example:

**Name of Algorithm**

1. Create this function and a helper function.
2. Flesh out the first function by creating variables and then using them in these ways.
3. Call helper function.
4. Flesh out the helper function by creating these variables and then using them in these ways.
5. Return helper result to first function.
6. This is why it worked!

If you're curious to read more there are lots of good resources out there!

[MIT Intro to CS Slides on Sorting](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-slides-code/MIT6_0001F16_Lec12.pdf)

[Harvey Mudd Lesson Plan on Sorting](https://www.cs.hmc.edu/MyCS/MyCS_all_handouts/Unit%205/PDF%20Sorting%20Algorithms%20Lesson%20Plan.pdf)

https://www.toptal.com/developers/sorting-algorithms/

http://sorting.at/

<a id="check-for-understanding"></a>

## Check for Understanding

- What is a potential benefit of a Bubble Sort as compared to a Merge Sort?
- Which sort has the potential to be most positively influenced by initial ordering of the list?
- What is the benefit of recursion in sorting? Any drawbacks?

<a id="supplemental-resources"></a>

## Supplemental Resources

- [Sorting Algorithms Conceptually](https://code.likeagirl.io/sorting-algorithms-conceptually-2bfbb3968388)

## Attribution

Thanks to the MIT OpenCourseWare site for Sorting Algorithm Code Examples! https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/lecture-slides-code/lec12_sorting.py
