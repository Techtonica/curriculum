# Runtime Complexity

### Projected Time
2 hours
- 30 minute lecture
- 70 minutes exercises 
- 20 minute group discussion

Note: Could use more time for exercises if there's more than 2 hours available.

### Prerequisite
Here are links to lessons that should be completed before this lesson.
- JS lessons 1-6. Should be comfortable coding in Javascript, and know how to use loops, arrays, and dictionaries.


### Motivation
Understanding runtime complexity is important for multiple reasons:
- It is a driving force when choosing which data structures to use in real-world coding
- It will help you write fast code
- You will be asked about it in technical interviews

### Objective
**Students will be able to**:
- Understand the following runtimes: O(1), O(log n), O(n), O(n log n), O(n^2), and O(2^n)
- Know the runtime of array and dictionary functions
- Determine time complexity for simple functions and algorithms
- Understand the difference between time complexity and real-world runtime


### Specific Things To Teach
(TODO)

### Materials

- [Explanations of the different common runtimes](https://www.cpp.edu/~ftang/courses/CS240/lectures/analysis.htm)
- [Explanations and code examples of common runtimes](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
- [How is Big-O runtime used in industry?](https://softwareengineering.stackexchange.com/questions/20832/is-big-o-really-that-relevant-when-working-in-industry/20834)

### Mini Lesson
(TODO)
Here's text about introducing something and how it works.

Build on the first information. Have students guess things, do an activity, etc.

Make sure to mention these things:
- Things
	- This is a sub-thing
- More things
- Even more things
- Even more things

### Runtimes to know:
- Indexing into an array (e.g. `array[7]`) is `O(1)`
- Looking up a key in a dictionary (e.g. `object["name"]`) or a Set is `O(1)`
- Sorting an array (with a fast algorithm) is `O(n log n)` -- this isn't simple to prove, but if you're curious you can read more about why [here](https://www.cs.cmu.edu/~15110-f12/Unit05PtC-handout.pdf) and [here](https://en.wikipedia.org/wiki/Comparison_sort)

### Common Mistakes / Misconceptions

- Big-O/runtime describes the worst case scenario runtime. For example, if you're looking at each item in a list to find a specific element, the best case scenario is if it's the first element and you find it right away! But the worst case is if you look through every single item, and the one you are looking for is the last item in the list or not in the list at all. Runtime analysis focuses on the worst-case scenario.

- Only the largest/fastest-growing term matters. For example, if a function take `n^2 + 3n` steps, the function is `O(n^2)`, because the runtime will be dominated by the `n^2` term

- When stating the runtime complexity, drop any constants. For example, if a function takes `4n` steps, it is `O(n)`. This is because runtime complexity describes how the time of the function grows with relation to the input -- not the exact time it takes to run.

### Things to learn in the future
These things are not currently covered in this lesson, but they are related and important to know.

Note to self: Make sure these things are covered in this lesson or a future one

- Different data structures let you do different things quickly. So far you've learned about two data structures: arrays and dictionaries. Later, you'll learn about more data structures, including linked lists, trees, stacks, and queues. You'll learn about the runtime complexity of doing different operations with these data structures.

- Space complexity. Similar to time complexity, algorithms can use differing amounts of memory

- Other optimizations (caching, using memory vs. disk, etc) -- Mentioned in the lecture notes, will be added to this lesson or a related one.

### Guided Practice
(TODO)

Have the students work with you as you do something.


### Independent Practice

Do the following exercises in pairs:

**Runtime Complexity Exercise 1: Reading code and analyzing runtime**

Read the functions in [runtime1-analyzing.js](runtime1-analyzing.js).  For each function, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run it with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
- Which graph line does it align to?

**Runtime Complexity Exercise 2: Comparing code**

Compare mulptiple pieces of code that do the same thing, and figure out the runtime of each one. Which solution would be fastest for large input sizes?
[runtime2-comparisions.js](runtime2-comparisions.js)

**Runtime Complexity Exercise 3: Solving problems and writing code**

How would you solve these problems [runtime3-solving.txt](runtime3-solving.txt)? Can you think of an O(n^2), O(n log n), O(n) solution?

### Challenge
(TODO)

Students can try to do this other thing.


### Check for Understanding
Discuss with the group and an instructor:
- Which problems were the hardest to guess/understand?
- Which ones were the easiest?

(TODO - what else?)

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.

