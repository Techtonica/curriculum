# Memoization

### Projected Time

About 90 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Runtime Complexity](/runtime-complexity/runtime-complexity.md)

### Motivation

- Learning memoization will help improve the runtime of your code which is a win for you and a win for your work.
- The simple goal of memoization is to not waste time having your code do something it has already done. You can simply re-use the part of the code that was already run!

### Objectives

**Participants will be able to:**

- Understand memoization
- Recognize the benefit in runtime complexity when using memoization
- Write code that uses memoization
- Explain the differences in runtime with memoization, tabulation, and regular recursion

### Specific Things to Learn

- What is memoization
- How does memoization improve Runtime Complexity
- How does memoization compare to recursion

### Implementation of memoization

Writing memoization into code can be very simple:-

- create a hash table
- add any results in the hash table
- when new results are derived check to see if those results are in the hash table;
- if so, call on the results from the hash table to save time, if not, add the new results to the hash table

### Materials

- [Memoization Slideshow](https://docs.google.com/presentation/d/1BipDMgjZd3u-QsrPNCljH-Wv2l3tYRAUz8LWnxzt4s8/edit#slide=id.p)
- [Memoization (1D, 2D and 3D)](https://www.geeksforgeeks.org/memoization-1d-2d-and-3d/)

### Lesson

- This lesson follows the [Memoization Slideshow](https://docs.google.com/presentation/d/1BipDMgjZd3u-QsrPNCljH-Wv2l3tYRAUz8LWnxzt4s8/edit#slide=id.p).

- Read through the history of Memoization and 'What is memoization' slideshow and get familiar with the new vocabulary.

- Before we read about Memoization, we need to understand that it is a part of Dynamic Programming. **Dynamic Programming** is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions using a memory-based data structure (array, map, etc). Dynamic programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for the same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems so that we do not have to re-compute them when needed later. Memoization (top-down approach), along with its “sibling” tabulation (bottom-up approach), are the two main Dynamic Programming techniques.

- Memoization is when your code has a function that returns the same results every time given the same input. The result is stored in a cache in order to be used again without needing to take time to re-run the function. Remember that memoization is all about saving time.

- Memoization and tabulation are two strategies used in dynamic programming. Memoization solves the top problem and stores the answer to be used later. Memoization is useful when you do not need to solve all the problems to get to the answer. Tabulation solves all problems starting at the bottom and stores the results in a matrix to be called on later.

- Take a minute to ask yourself if the bolded vocabulary on the first three slides is known or unknown. Take a minute to understand the new vocabulary by talking to a peer or searching online for examples and definitions.

- On slide 5, determine if the functions are pure functions. Discuss and select the functions that are pure functions.

- On slide 6 reveal the results. State why the other functions are impure functions.

- The Fibonacci Sequence problem is a well-known example of recursion and provides a great way to see many different options for solving the problem and determining the best runtime. The Fibonacci Sequence is created so that each number is the sum of the two preceding numbers.

- Pause on slide 9 and write the code to implement the Fibonacci Sequence with a while loop.

- View the solution on slide 10 and compare to your own code.

- Next, try to implement the Fibonacci Sequence using recursion. Really do this before looking at the solution on slide 12!

- Notice the difference in Time Complexity between using recursion and a while loop.

- Finally, look at the example code of the Fibonacci Sequence using memoization on slide 13 and again notice the Time Complexity and Space Complexity.

- Take a look at the comparison chart showing runtime complexity and space complexity for different sample size. What is your biggest take away from slides 17 and 18?

- Use the resources on the next few slides to solidify your understanding. Go back and review any of the vocabularies that you were unsure about at first after you watch the video and go to the links provided.

### Common Mistakes / Misconceptions

List things that apprentices might not realize, might assume at first, or should avoid.

- Remember: It’s best to implement memoization on functions that are pure and have repetitive calculations.

### Guided Practice

Work step by step to change a recursion of Fibonacci Sequence to a memoization version:

### Recursion

```
function fibonacci(num) {

if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);

}
```

### Memoization

1. How do we need to change the function definition?
   Change this line to include 'memo' as an argument in the function definition:
   `function fibonacci(num)`
   What would it look like?

   Ans:
   `function fibonacci(num, memo)`

2) How do we define 'memo' in the function which was not defined when we used recursion?
   What would you add to the function?

   Ans: Create a hash table to store the data to be used again when called upon.
   `memo = memo || {};`

3) When passed an argument, check to see if the result is stored in the memo:
   `if (memo[num]) return memo[num]`

4) Write the rest of the function checking for 0 and then calling the memo if it exists.

```
if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

}
```

Complete solution using memoization:

```
function fibonacci(num, memo) {

memo = memo || {};

  if (memo[num]) {
    return memo[num];
   }

  if (num <= 1){
    return 1;
  }
return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
```

### Independent Practice

Try this problem from [Interview Cake](https://www.interviewcake.com/question/java/coin)

### Check for Understanding

Explain the benefits of using memoization including the differences in Time Complexity and Space Complexity.

### Supplemental Resources

- [Codeburst.io: Understanding JavaScript Memoization (3 min read)](https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19)
- [HackerRank Video: Memoization and Dynamic Programming (11 min watch)](https://youtu.be/P8Xa2BitN3I)
- [Geeks for Geeks: Understanding dynamic programming and it's two types (5 min read)](https://www.geeksforgeeks.org/tabulation-vs-memoizatation/)
