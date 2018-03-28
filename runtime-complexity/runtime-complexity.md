# Runtime Complexity

### Projected Time
About 2 hours
- 30 minutes for video walkthrough of slides
- 70 minutes for Independent Practice
- 20 minutes for Group Practice

### Prerequisites
- JavaScript I - VI lessons

### Motivation
Understanding runtime complexity is important for multiple reasons:
- It will help you write fast code
- It is a driving force when choosing which data structures to use in real-world coding
- You will be asked about it in technical interviews

### Objective
**Apprentices will be able to**:
- Understand the following runtimes: O(1), O(log n), O(n), O(n log n), O(n^2), and O(2^n)
- Know the runtime of array and object functions
- Determine time complexity for simple functions and algorithms
### Materials
- [Explanations of the different common runtimes](https://www.cpp.edu/~ftang/courses/CS240/lectures/analysis.htm)
- [Explanations and code examples of common runtimes](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
- [How is Big-O runtime used in industry?](https://softwareengineering.stackexchange.com/questions/20832/is-big-o-really-that-relevant-when-working-in-industry/20834)

### Mini Lesson
- [Runtime Complexity Lecture Slides](https://docs.google.com/presentation/d/1ZcOdekB_aP59huZdp4X0u6EfUJKgxzK7y8LqCmzSLC8)
- [Runtime Complexity Lecture Video Slides](https://drive.google.com/file/d/1ZoHxJMUiKOKPqu69vX3b_aeYGlDlRL6n/view)

### Things to know:

#### Runtimes to know:
There are several common runtimes that you should understand:
- Indexing into an array (e.g. `array[7]`) is `O(1)`

- Looking up a key in an object (e.g. `object["name"]`) is `O(1)`

- Sorting an array (with a fast algorithm) is `O(n log n)` -- this isn't simple to prove, but if you're curious you can read more about why [here](https://www.cs.cmu.edu/~15110-f12/Unit05PtC-handout.pdf) and [here](https://en.wikipedia.org/wiki/Comparison_sort)

#### Runtime details:
- Big-O/runtime describes the worst case scenario runtime. For example, if you're looking at each item in a list to find a specific element, the best case scenario is if it's the first element and you find it right away! But the worst case is if you look through every single item, and the one you are looking for is the last item in the list or not in the list at all. Runtime analysis focuses on the worst-case scenario.

- Only the largest/fastest-growing term matters. For example, if a function takes `n^2 + 3n` steps, the function is `O(n^2)`, because the runtime will be dominated by the `n^2` term

- When stating the runtime complexity, drop any constants. For example, if a function takes `4n` steps, we drop the `4` and call it `O(n)`. This is because runtime complexity describes how the time of the function grows with relation to the input -- not the exact time it takes to run.

- Runtime complexity goes by many names that are generally used interchangably. E.g:
  - Time complexity
  - Asymptotic time complexity
  - Runtime analysis
  - Big O runtime
  - Growth rate analysis
  - Computational complexity

### Things we'll cover later
These things are not covered in this lesson, but they are related and important to know.

- Different data structures let you do different things quickly. So far you've learned about two data structures: arrays and objects. Later, you'll learn about more data structures, including linked lists, trees, stacks, and queues. You'll learn about the runtime complexity of doing different operations with these data structures.

- Space complexity. Similar to time complexity, algorithms can use differing amounts of memory

- Runtime complexity is related to (but not the same!) as the total amount of time it takes to run a piece of code. A piece of O(n^2) code could run faster than a piece of O(n) code.

### Independent Practice

Techtonica staff will assign pairs.

**Runtime Complexity Exercise 1: Reading code and analyzing runtime**

Read the functions in [runtime1-analyzing.js](runtime1-analyzing.js).  For each function, figure out:
- What does the function do?
- What is the input size? Examples include the size of a list, the length of a string, or the integer passed into a function. This will be "n" in Big O notation. 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- When the input size doubles, what would happen to the time it takes to run?

**Runtime Complexity Exercise 2: Comparing code**

Compare multiple pieces of code that do the same thing, and figure out the runtime of each one. Which solution would be fastest for large input sizes?
[runtime2-comparisions.js](runtime2-comparisions.js)

**Runtime Complexity Exercise 3: Solving problems and writing code**

How would you solve these problems [runtime3-solving.txt](runtime3-solving.txt)? Can you think of an O(n^2), O(n log n), O(n) solution?

### Group Practice
Discuss with the group and an instructor:
- Which runtimes/concepts were the hardest to guess/understand?
- Which ones were the easiest?
- Do you still have things you don't understand?

### Challenge
- Try to implement the problems in [runtime3-solving.txt](runtime3-solving.txt). Run your solutions on multiple input sizes. Does it match your expectations?

### Check for Understanding

Make a cheat sheet about runtime complexity. For O(1), O(log(n)), O(n), and O(nlogn) and O(n^2), give an example of 1-3 algorithms/operations that have this runtime.
