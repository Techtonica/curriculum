# Priority Queues and Heaps

### Projected Time

About 2 hours total:
- Lesson Materials: 60–90 minutes
- Independent Practic: +60 minutes

### Prerequisites

- [Intro to Data Structures](/data-structures/intro-to-data-structures.md)
- [Runtime Complexity](/runtime-complexity/runtime-complexity.md)
- [Queues](/data-structures/queues.md)
- [Trees](/data-structures/trees.md)

### Motivation

Imagine you're in a hospital emergency room. A patient with a sprained ankle arrives before a patient having a heart attack, but who should the doctor see first? In real life, **importance matters more than arrival time**. That's exactly the problem a priority queue solves in software.

Priority queues are everywhere in the real world of engineering:

- **Emergency room triage systems**: patients are treated by severity, not arrival order
- **GPS / Maps navigation**: apps like Google Maps use Dijkstra's algorithm with a priority queue to find the shortest path between two points
- **CPU task scheduling**: operating systems use priority queues to decide which process runs next
- **Game development**: AI events and pathfinding (A* algorithm) rely on priority queues to decide what to process first
- **Network routers**: packets are prioritized based on type and urgency

`It's not about time -> It's about importance`

A regular queue (FIFO) cannot solve this efficiently.

### Objectives

**Participants will be able to:**

- Explain what a priority queue is.
- Explain what a heap is.
- Understand the difference between a priority queue and a heap.
- Implement a basic priority queue in JavaScript and Python.

### Specific Things to Learn

- Abstract Data Type vs Concrete Data Structure
- Priority Queue operations:
  - insert (enqueue with priority)
  - remove (dequeue highest priority)
- Why a heap is more efficient than a sorted array
- How a binary tree can be stored as a plain array

### Materials

📖 Reading:
- [GeeksforGeeks – Priority Queue and Binary Heap articles](https://www.geeksforgeeks.org/dsa/priority-queue-set-1-introduction/)
- [GeeksforGeeks – Binary Heap](https://www.geeksforgeeks.org/binary-heap/)

📺 Video:
- [William Fiset – Priority Queue & Binary Heap](https://www.youtube.com/watch?v=wptevk0bshY) - 13 minutes
- [HackerRank - Data Structures: Heaps](https://www.youtube.com/watch?v=t0Cq6tVNRBA) - 10 minutes

🎮 Interactive:
- [VisuAlgo – Heap Visualization](https://visualgo.net/en/heap?slide=1-7) *(watch the heap re-sort in real time as you insert and remove)*

### Lesson

Work through the materials provided in 'Materials' above. This should take 60–90 minutes. Then read the sections below.

### What is a Priority Queue?

A **priority queue** is a special type of abstract data structure where each element has a **priority**, and elements are removed based on their priority, not the order they were added.

> **Core idea: the order of removal depends on priority, not insertion time.**

Think of it like a to-do list that always surfaces your most urgent task first, no matter when you added it.

**Key operations:**

- **insert / enqueue** add an element with a given priority
- **remove / dequeue** remove and return the highest-priority element
- **peek** look at the highest-priority element without removing it

A regular queue (FIFO) and a priority queue both let you add and remove items, but they answer the question "who goes next?" very differently.

### What is a Heap?

A **heap** is a concrete data structure used to efficiently implement a priority queue. It is a **complete binary tree** stored as a plain array, following one rule:

- **Min-Heap:** every parent is *smaller* than its children → smallest element is always at the root
- **Max-Heap:** every parent is *larger* than its children → largest element is always at the root

This guarantee means you can always access the most important element instantly in `O(1)`, while inserting or removing takes only `O(log n)`.

**Example: Min-Heap Tree**

```
        1          ← always the minimum at the root
       / \
      3   2
     / \
    5   4
```

**Same heap stored as a plain array:**

```
Index:  0   1   2   3   4
Value: [1,  3,  2,  5,  4]
```

The tree structure is not stored explicitly, it's calculated from the index using these formulas:

```
Parent of index i   →  (i - 1) // 2
Left child of i     →  2i + 1
Right child of i    →  2i + 2
```

So for index 3: parent = (3-1)//2 = index 1. For index 1: left child = 2(1)+1 = index 3, right child = 2(1)+2 = index 4.

### Priority Queue vs Heap: What's the Difference?

This is one of the most common points of confusion for beginners.

| | Priority Queue | Heap |
|---|---|---|
| What it is | Abstract concept / interface | Concrete data structure |
| Defines | *What behavior* you get | *How data is stored and shaped* |
| Operations | insert, remove, peek | heapify-up, heapify-down, swap |
| Analogy | The ER "treat most critical first" rule | The triage system engine that makes it efficient |
| Could use other structures? | Yes, sorted array, linked list… | - |

> **In short:** Priority Queue = *what it does*. Heap = *how it's usually implemented*.

A priority queue is the **concept**. A heap is the most efficient known **implementation** of that concept. You could build a priority queue with a sorted array,  it just wouldn't be as fast.

## Why a Heap is Faster Than a Sorted Array

A common beginner question: why not just sort the array every time you need the highest priority?

| Operation | Sorted Array | Heap |
|---|---|---|
| Insert | O(n) must shift all elements to maintain order | O(log n) bubble up |
| Get max / min | O(1) | O(1) |
| Remove max / min | O(n) must shift all elements | O(log n) sink down |

With 1,000,000 elements, a heap insert takes ~20 steps. A sorted array insert takes up to 1,000,000 steps. At scale, this difference is enormous.


## Lesson: "Last Stone Weight"

Now let's apply this. Here's a problem that shows exactly *why* we need a priority queue.

**Description:**

We have stones with different weights:

```
[2, 7, 4, 1, 8, 1]
```

**Rules:**

1. Pick the two heaviest stones.
2. Smash them together:
   - If equal → both are destroyed
   - If different → push the difference back
3. Repeat until ≤ 1 stone remains.
4. Return the final stone weight, or 0 if none remain.

> **Goal: always remove the two heaviest stones first.**

**Step-by-Step Walkthrough**

Initial:
```
[2, 7, 4, 1, 8, 1]
```

**Iteration 1**: sort descending, pick top 2:
```javascript
heavy1 = 8, heavy2 = 7
smash  = 8 - 7 = 1  → push 1 back
result: [4, 2, 1, 1, 1]
```

**Iteration 2**: sort descending, pick top 2:
```javascript
heavy1 = 4, heavy2 = 2
smash  = 4 - 2 = 2  → push 2 back
result: [2, 1, 1, 1]
```

**Iteration 3**: sort descending, pick top 2:
```javascript
heavy1 = 2, heavy2 = 1
smash  = 2 - 1 = 1  → push 1 back
result: [1, 1, 1]
```

**Iteration 4**: sort descending, pick top 2:
```javascript
heavy1 = 1, heavy2 = 1
smash  = 1 - 1 = 0  → equal, both destroyed
result: [1]
```

**Answer: 1** ✅

> ⚠️ **Important note on the solution below:** This naive solution sorts the array on every iteration, that's `O(n log n)` per step. It works, but it's inefficient. This is exactly the problem a **heap** solves: instead of re-sorting everything, a heap always knows the maximum in `O(1)` and can restore order in `O(log n)` after each removal.


### Heap Solution: "Last Stone Weight"

Now let's solve the same problem **the right way** using a max-heap. Instead of re-sorting the entire array on every iteration, the heap always keeps the largest stone at the root, ready to grab in `O(1)`.

**The key insight:** every time we need the two heaviest stones, we just call `pop` twice, `O(log n)` each. No full sort needed.


**Step-by-Step Heap Walkthrough**

Initial stones: `[2, 7, 4, 1, 8, 1]`

**Build the max-heap** insert all stones. After each insert, heapify-up restores the heap property:

```
Insert 2  → heap: [2]
Insert 7  → heap: [7, 2]          (7 bubbles up above 2)
Insert 4  → heap: [7, 2, 4]
Insert 1  → heap: [7, 2, 4, 1]
Insert 8  → heap: [8, 7, 4, 1, 2] (8 bubbles up to root)
Insert 1  → heap: [8, 7, 4, 1, 2, 1]
```

Max-heap tree after building:
```
        8          ← heaviest stone always at root
       / \
      7   4
     / \ /
    1  2 1
```

**Iteration 1** pop two heaviest, smash:

```
pop() → 8   heap after: [7, 2, 4, 1, 1]
pop() → 7   heap after: [4, 2, 1, 1]

smash = 8 - 7 = 1  → push 1 back
insert(1)   heap after: [4, 2, 1, 1, 1]
```

Heap tree:
```
      4
     / \
    2   1
   / \
  1   1
```

**Iteration 2** pop two heaviest, smash:

```
pop() → 4   heap after: [2, 1, 1, 1]
pop() → 2   heap after: [1, 1, 1]

smash = 4 - 2 = 2  → push 2 back
insert(2)   heap after: [2, 1, 1, 1]
```

Heap tree:
```
      2
     / \
    1   1
   /
  1
```

**Iteration 3** pop two heaviest, smash:

```
pop() → 2   heap after: [1, 1, 1]
pop() → 1   heap after: [1, 1]

smash = 2 - 1 = 1  → push 1 back
insert(1)   heap after: [1, 1, 1]
```
Heap tree:
```
      1
     / \
    1   1
```

**Iteration 4** pop two heaviest, smash:

```
pop() → 1   heap after: [1, 1]
pop() → 1   heap after: [1]

smash = 1 - 1 = 0  → equal, both destroyed, nothing pushed back
heap: [1]
```
Heap tree:
```
      1
```

**Answer: 1** ✅

### When to Use a Priority Queue vs Other Structures?

| Structure | Best For |
|---|---|
| **Priority Queue (Heap)** | Always need the min or max quickly; real-time scheduling; pathfinding algorithms (Dijkstra, A*) |
| **Sorted Array** | Small datasets; need full sorted access; rarely inserting |
| **Regular Queue** | Order matters strictly by arrival time; BFS traversal |
| **Stack** | Last-in, first-out problems; undo history; DFS traversal |


### Independent Practice

- **Visualize:** Use [VisuAlgo's Heap tool](https://visualgo.net/en/heap) to insert and remove elements and watch heapify-up and heapify-down happen in real time. This is one of the best ways to build intuition before writing any code.
- **Implement:** Build a min-heap from scratch in your language of choice. Focus on `insert`, `peek`, and `pop`. Test it by pushing items in random order and confirming they always come out smallest first.
- **Solve problems on LeetCode:**
  - [Relative Ranks](https://leetcode.com/problems/relative-ranks/) *(easy: good warm-up)*
  - [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) *(easy:try solving it with a heap instead of sorting)*
  - [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) *(medium: classic heap problem)*
  - [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) *(hard: classic two-heap problem)*
- **Explore:** Research how Python's `heapq` works and how to simulate a max-heap by negating values (`heapq.heappush(h, -val)`).


### Common Mistakes / Misconceptions

**1. "The heap array is fully sorted"**
It's not. A heap only guarantees the root is the min or max. The rest of the array is *partially* ordered. You cannot iterate the array in sorted order, for that, you'd need to pop repeatedly or use a different structure.

**2. "Min-heap and max-heap are interchangeable"**
They're opposites. A min-heap always surfaces the *smallest* element; a max-heap always surfaces the *largest*. Python's `heapq` is always a min-heap. The implementations in this lesson are max-heaps. Always check before using.

**3. "Priority queue = heap"**
A priority queue is the *concept* (always remove the most important element). A heap is one *implementation* of that concept. You could implement a priority queue with a sorted array or linked list (it just wouldn't be as efficient).

**4. "Elements with equal priority are handled automatically"**
Not always. When two elements share the same priority, the heap doesn't guarantee which one comes out first. If tie-breaking matters for your problem, use a tuple like `(priority, timestamp, item)` to give each element a unique ordering key.

**5. "Inserting into a heap re-sorts the whole array"**
It doesn't. Heapify-up only compares and swaps along a single path from the new element to the root, at most `O(log n)` swaps. The rest of the array is untouched.


### Challenge

Ask a mentor, volunteer, or fellow learner to review your heap implementation. Can they follow the logic of `shiftUp` and `shiftDown`? Are your variable names and comments clear enough for a complete beginner to understand?

**Bonus challenges:**
1. Solve [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/) using a heap, what is the time complexity improvement over the sorting approach?
2. Given a stream of numbers arriving one at a time, write a function that always returns the **median** after each new number is added. *(Hint: this is a classic two-heap problem, one min-heap and one max-heap working together.)*


### Supplemental Materials

- [GeeksforGeeks – Binary Heap](https://www.geeksforgeeks.org/binary-heap/)
- [Python heapq documentation](https://docs.python.org/3/library/heapq.html) *(min-heap by default, negate values for max-heap behavior)*
- [Dijkstra's Algorithm explained](https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/) *(real-world use of priority queues in GPS navigation)*


### Check for Understanding

**1. Answer in your own words**
- What is the difference between a priority queue and a heap?
- What rule must a min-heap always follow?
- A friend says "I'll just sort the array every time I need the max." How do you explain why a heap is better?

**2. Draw it out**

By hand, draw a **min-heap** built from inserting `5, 3, 8, 1, 4` in order. Show the final tree and write the array representation below it. Compare with a partner, if your results differ, use the index formulas to find where they diverged.

> 💡 *Tip: Share it with your cohort, teaching someone else is the fastest way to find gaps in your own understanding..*