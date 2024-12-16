# Solving Coding Challenges

### Motivation

Solving coding challenges is an effective way to practice the concepts you learn.

While learning a new coding language, solving challenges in that language is helpful for learning syntax, how to represent data structures, and how to debug.

When learning a new algorithm, a new coding concept, or a data structure, applying it to a coding problem is a great way to apply what you've learned and check your understanding.

Solving coding challenges is an important skill for job hunting but 70% of the job is related to understanding the problem and being able to think of a solution for that prompt.

### Objectives

**Participants will be able to:**

- Learn to think logical about the necessary steps to solve a problem

### Specific Things To Learn

At the end of the lesson you will be able to:

- Understand how to solve problems: - Understanding the prompt - Think of a high-level approach -
- Understand why thinking a solution in pseudocode is a fundamental step for solving code challenges

- [Techtonica Recommedations for Code Challenges](https://docs.google.com/document/d/12g8GM7h21nMFctQi4G2_c0VQJjyCF6AVLV7r8vcJdes/edit) - High-level overview on how to approach solving code challenges that Techtonica's recommend

### Lesson

**Why is Pseudocode important?**

Pseudocode is a powerful tool that provides a structured approach to solving code challenges. It plays a crucial role in the development process by helping programmers plan and design their code before implementation. Here are some reasons why pseudocode is important in solving code challenges:

1. Clarity and Understanding: Pseudocode allows developers to express their solution in plain language, making it easier to understand and follow the logic of the code. It helps break down complex problems into smaller, more manageable steps.

2. Algorithm Design: Pseudocode helps in designing and refining the algorithmic approach to solving a problem. It enables developers to think through the logic and flow of the code, considering different scenarios and edge cases.

3. Collaboration and Communication: By presenting the solution in pseudocode, everyone involved can contribute and ensure that the implementation aligns with the intended logic.

4. Debugging and Error Detection: By visually walking through the steps outlined in pseudocode, programmers can spot any logical flaws or unexpected behaviors early on. This helps save time and effort, as fixing issues in pseudocode is generally easier compared to debugging actual code.

5. Efficiency and Optimization: By identifying potential bottlenecks or unnecessary steps in the pseudocode, developers can optimize the algorithm or fine-tune the logic to improve efficiency.

6. Language Agnostic: Pseudocode is not tied to any specific programming language. It uses simple, generic language constructs, making it easy for anyone with programming knowledge to understand

### Guided Practice

(note: you don't have to write this all out when you solve the problem. This represents an example inner thought process for solving the problem)

Here's an example of pseudocode for a simple sorting algorithm like bubble sort:

_Example Problem_

```
Pseudocode:
1. Initialize an array of numbers to be sorted.
2. Set a flag variable to track if any swaps are made during a pass.
3. Repeat the following steps until no swaps are made:
   4. Reset the flag variable to false.
   5. Iterate through the array from index 0 to n-1.
      6. If the current element is larger than the next element, swap them and set the flag to true.
7. Output the sorted array.

```

<details>
<summary>Click me</summary>

### Independent Practice

1. Let's consider a simple code challenge: "Write a function that takes a list of integers as input and returns the sum of all the even numbers in the list."
2. Try to come to a pseudocode approach to solve this problem.

Here's how you can use pseudocode to approach this problem:

1. Understanding the Problem:

Input: A list of integers
Output: The sum of all even numbers in the list

2. Pseudocode

```
1. We start by defining the function sumOfEvenNumbers that takes a single parameter, list, which represents the input list of integers.
2. We initialize a variable sum to 0. This variable will be used to store the sum of all even numbers.
3. Next, we iterate through each element in the list.
4. For each number in the list, we check if it is even (i.e., divisible by 2 with a remainder of 0).
    4.1 If the number is even, we add it to the sum variable.
5. After processing all the numbers in the list, we return the final value of sum.
```

```
function sumOfEvenNumbers(list):
    initialize sum = 0

    for each number in list:
        if number is even:
            add number to sum

    return sum
```

</details>

### Guided Practice

See Replit.com in your team for the cohort.

### Check for Understanding

- What are the steps to follow to solve a coding challenge? - What can you do if you are stuck? - How do you test?
- What skills do you gain from solving coding challenges?
