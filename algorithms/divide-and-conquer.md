# Divide & Conquer

## Projected Time
- **Reading Time:** 45-60 minutes
- **Activities Time:** 90-120 minutes
- **Total Time:** 2.5-3 hours

## Prerequisites
Before diving into Divide & Conquer, you should be comfortable with:
- [Recursion Fundamentals](https://github.com/Techtonica/curriculum/tree/main/recursion) - Understanding how functions can call themselves
- [Big O Notation](https://github.com/Techtonica/curriculum/tree/main/runtime-complexity) - Analyzing algorithm efficiency
- [Arrays and Array Methods](https://github.com/Techtonica/curriculum/tree/main/javascript/javascript-arrays) - Working with collections of data
- [Functions in JavaScript](https://github.com/Techtonica/curriculum/tree/main/javascript/javascript-functions) - Creating and using functions

## Motivation

Have you ever felt overwhelmed by a massive project at work or school? Maybe you needed to clean your entire house, or organize thousands of photos, or learn a completely new skill. The task felt so big that you didn't even know where to start.

This is exactly the problem that Divide & Conquer solves in programming. Instead of trying to tackle a huge problem all at once, we break it down into smaller, more manageable pieces. It's like the old saying: "How do you eat an elephant? One bite at a time."

In the real world, this approach shows up everywhere:
- **Project Management:** Breaking a website redesign into wireframes, design, frontend, backend, and testing phases
- **Cooking:** Preparing ingredients (mise en place) before cooking a complex meal
- **Learning:** Mastering small concepts before combining them into bigger understanding

As a developer, you'll encounter problems that seem impossibly complex at first glance. Divide & Conquer gives you a systematic way to break them down into pieces you can actually solve.

## Learning Objectives

By the end of this lesson, you will be able to:

1. **Identify** when a problem is suitable for the Divide & Conquer approach
2. **Explain** the three core steps of Divide & Conquer in your own words
3. **Implement** basic Divide & Conquer algorithms like merge sort and binary search
4. **Analyze** the time complexity benefits of dividing problems
5. **Apply** Divide & Conquer thinking to solve new problems you haven't seen before

<img width="549" alt="Screenshot 2025-06-09 at 8 07 21 PM" src="https://github.com/user-attachments/assets/130af5cd-0f9d-4965-b11d-1157eaaca79f" />

Image Credit: [Programiz](https://www.programiz.com/dsa/divide-and-conquer)

## Specific Things to Learn

### Core Concepts
- **The Three-Step Process:** Divide, Conquer, Combine
- **Base Cases:** When to stop dividing and start solving
- **Recursive Structure:** How the pieces fit back together
- **Problem Decomposition:** Breaking complex problems into simpler subproblems

### Key Algorithms
- **Binary Search:** Finding items in sorted lists efficiently
- **Merge Sort:** Sorting data by dividing and merging
- **Quick Sort:** Another sorting approach using partitioning
- **Maximum Subarray:** Finding the best contiguous sequence

### Analysis Skills
- **Time Complexity:** Understanding why dividing often leads to better performance
- **Space Complexity:** Tracking memory usage in recursive solutions
- **Trade-offs:** When Divide & Conquer helps and when it doesn't

### Problem-Solving Patterns
- **Recognizing Opportunities:** What makes a problem "dividable"
- **Choosing Division Points:** How to split problems effectively
- **Combining Results:** Putting solutions back together correctly

## Activities

### Activity 1: The Paper Folding Challenge (15 minutes)
**Goal:** Experience Divide & Conquer physically before coding

**Instructions:**
1. Take a piece of paper and fold it in half 8 times (if possible)
2. Count how many sections you created
3. Now imagine you need to write your name in each section
4. Compare writing in all sections at once vs. writing in one section, then copying to similar sections

**Reflection Questions:**
- How does folding relate to dividing a problem?
- When would the "copy" approach be more efficient?
- What happens if you can't fold evenly?

### Activity 2: Binary Search Detective (30 minutes)
**Goal:** Implement and understand binary search

**Setup:** You're helping a librarian find books in a sorted catalog

```javascript
// Start with this array of book IDs (sorted)
const bookCatalog = [101, 205, 312, 428, 501, 667, 789, 834, 901, 999];

// Your mission: Find book ID 667
// Rules: You can only check one book at a time
// Goal: Find it in the fewest checks possible
```

**Your Task:**
1. Write a binary search function step by step
2. Add console.log statements to track your progress
3. Count how many comparisons you make
4. Compare this to searching from the beginning

**Extension:** What happens when you search for a book that doesn't exist?

### Activity 3: Merge Sort Visualization (45 minutes)
**Goal:** Build merge sort from the ground up

**Scenario:** You're organizing a deck of cards, but you can only look at a few cards at a time

**Part A: The Merge Function (20 minutes)**
```javascript
// Two sorted piles of cards
const leftPile = [2, 5, 8, 12];
const rightPile = [1, 6, 9, 15];

// Your job: Combine them into one sorted pile
// Rule: You can only look at the top card of each pile
```

**Part B: The Full Sort (25 minutes)**
```javascript
// Unsorted deck
const messyCards = [64, 34, 25, 12, 22, 11, 90];

// Your mission: Sort them using only your merge function
// Hint: How small do you need to divide before merging?
```

**Reflection:** Draw out the division and merging process. What pattern do you notice?

### Activity 4: Real-World Problem Solving (30 minutes)
**Goal:** Apply Divide & Conquer thinking to everyday problems

**Choose one scenario:**

**Scenario A: Event Planning**
You're organizing a tech meetup for 200 people. Tasks include:
- Venue booking, catering, speaker coordination, marketing, registration, day-of logistics

**Scenario B: Code Review**
You need to review a 2000-line codebase for bugs. The code includes:
- Database queries, user interface, business logic, error handling, tests, documentation

**Your Task:**
1. Break your chosen problem into smaller subproblems
2. Identify which subproblems can be solved independently
3. Determine what information needs to be shared between subproblems
4. Create a plan for combining the solutions

**Discussion Points:**
- Which parts were easiest to divide?
- What dependencies did you discover?
- How would you handle unexpected complications?

### Activity 5: Algorithm Race (20 minutes)
**Goal:** Compare Divide & Conquer with other approaches

**The Challenge:** Find the maximum number in an array

**Method 1: Linear Search**
```javascript
const numbers = [3, 7, 1, 9, 4, 6, 8, 2, 5];
// Find the maximum by checking each number once
```

**Method 2: Divide & Conquer**
```javascript
// Split the array in half
// Find the maximum of each half
// Compare the two maximums
```

**Your Mission:**
1. Implement both approaches
2. Time them with larger arrays (try 1000, 10000 elements)
3. Count the number of comparisons each method makes

**Reflection:** When might the Divide & Conquer approach be worth the extra complexity?

## Wrap-Up Reflection

After completing these activities, take a few minutes to think about:

1. **What surprised you** about the Divide & Conquer approach?
2. **Which activity** helped you understand the concept best?
3. **What real-world problems** in your life could benefit from this thinking?
4. **What questions** do you still have about when and how to use these techniques?

Remember: Divide & Conquer isn't just about algorithms—it's a mindset for tackling complexity in any area of your life and career.
