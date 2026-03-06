# Fractional Knapsack Problem (Greedy Algorithm)

Greedy algorithms solve problems by making the best possible choice at each step. The Fractional Knapsack is a perfect example where this approach works beautifully, because we can take fractions of items, always grabbing the most valuable option first leads us straight to the optimal solution.

## Topic Outline Time

* Reading: 20 minutes
* Activities: 40 minutes
* Total: ~60 minutes

## Prerequisites

* [JavaScript 4 - Loops](/javascript/javascript-4-loops.md)
* [Big O Notation / Runtime Complexity](/runtime-complexity/runtime-complexity.md)

## Table of Contents

1. [Motivation](#motivation)
2. [Objectives](#objectives)
3. [Materials and Useful Videos](#materials-and-useful-videos)
4. [Lesson](#lesson)
   * [What is the Fractional Knapsack Problem?](#what-is-the-fractional-knapsack-problem)
   * [The Bakery Scenario](#the-bakery-scenario)
   * [The Greedy Insight](#the-greedy-insight)
   * [Step by Step Walkthrough](#step-by-step-walkthrough)
   * [JavaScript Implementation](#javascript-implementation)
   * [Complexity Analysis](#complexity-analysis)
5. [Guided Practice](#guided-practice)
6. [Independent Practice](#independent-practice)
7. [Check for Understanding](#check-for-understanding)

## Motivation

Greedy algorithms are one of the simplest and most efficient problem-solving strategies in computer science. However, not every problem can be solved with a greedy approach, knowing when to use it is a key skill for any developer.

The Fractional Knapsack Problem is a great example where greedy works perfectly. Learning it will help you:

* Recognize problems that have a greedy solution
* Understand **why** greedy works in some cases and fails in others
* Build intuition for choosing the right algorithm strategy

## Objectives

**Participants will be able to:**

* Explain what the Fractional Knapsack Problem is
* Identify the greedy strategy: sort by value/weight ratio and take the best items first
* Trace through the algorithm step by step
* Implement the solution in JavaScript
* Explain why this greedy approach does NOT work for the 0-1 Knapsack variant

## Materials and Useful Videos

**Videos:**
* [Greedy Algorithms: Abdul Bari (YouTube)](https://www.youtube.com/watch?v=ARvQcqJ_-NY)
* [Fractional Knapsack: Visual Explanation (YouTube)](https://www.youtube.com/watch?v=oTTzNMHM05I)

**Reading:**
* [GeeksforGeeks: Fractional Knapsack Problem](https://www.geeksforgeeks.org/fractional-knapsack-problem/)
* [TutorialsPoint: Fractional Knapsack Problem](https://www.tutorialspoint.com/data_structures_algorithms/fractional_knapsack_problem.htm)

**Materials Needed:**
* Paper and pencil to trace through the algorithm ✏️

## Lesson

### What is the Fractional Knapsack Problem?

Given a set of items, each with a **weight** and a **value**, and a knapsack with a maximum weight capacity, the goal is to maximize the total value you can carry. Unlike the 0-1 Knapsack Problem, here you can take **fractions of items** you don't have to take an item whole or leave it behind.


### The Thief Scenario 🦹‍♀️

You just snuck into a bakery after closing time. Your bag holds up to **15 lb** and you spot these items:

| Item | Weight (lb) | Value ($) |
|------|-------------|-----------|
| 🥖 Baguette | 2 | 4 |
| 🥐 Croissant | 1 | 5 |
| 🎂 Cake | 8 | 35 |
| 🍰 Cheesecake | 4 | 18 |
| 🧁 Muffins (box of 6) | 3 | 9 |
| 🍞 Sourdough | 3 | 8 |
| 🍩 Cookies (box of 8) | 1 | 6 |
| 🍪 Macarons (box of 4) | 2 | 8 |

The total weight is **24 lb** too heavy! You can't take everything. But here's the good news: you can take **fractions of items** like cutting half a cake or splitting a box of macarons.

So the question is `which items do you grab first to walk away with the most value? 🤔`

### The Greedy Insight 💡

The key is not to think about which item has the highest value, but which item gives you the most value **per pound**. We call this the **value/weight ratio**.

For example, for the 🎂 Cake:

```
Value / Weight = $35 / 8 lb = $4.4 per lb
```

So for every pound the Cake takes up in your bag, you get **$4.4** in value. The higher this number, the more efficient the item is to take. 🎯

Let's calculate it for each item:

| Item | Weight (lb) | Value ($) | Ratio ($/lb) |
|------|-------------|-----------|--------------|
| 🥖 Baguette | 2 | 4 | 2.0 |
| 🥐 Croissant | 1 | 5 | 5.0 |
| 🎂 Cake | 8 | 35 | 4.4 |
| 🍰 Cheesecake | 4 | 18 | 4.5 |
| 🧁 Muffins (box of 6) | 3 | 9 | 3.0 |
| 🍞 Sourdough | 3 | 8 | 2.7 |
| 🍩 Cookies (box of 8) | 1 | 6 | 6.0 |
| 🍪 Macarons (box of 4) | 2 | 8 | 4.0 |

The Greedy strategy is simple: **sort by ratio from highest to lowest and start grabbing** 🛍️


### Step by Step Walkthrough 👣


First, let's sort the items by ratio from highest to lowest:

| Item | Weight (lb) | Value ($) | Ratio ($/lb) |
|------|-------------|-----------|--------------|
| 🍩 Cookies (box of 8) | 1 | 6 | 6.0 |
| 🥐 Croissant | 1 | 5 | 5.0 |
| 🍰 Cheesecake | 4 | 18 | 4.5 |
| 🎂 Cake | 8 | 35 | 4.4 |
| 🍪 Macarons (box of 4) | 2 | 8 | 4.0 |
| 🧁 Muffins (box of 6) | 3 | 9 | 3.0 |
| 🍞 Sourdough | 3 | 8 | 2.7 |
| 🥖 Baguette | 2 | 4 | 2.0 |

Now let's fill the bag:

**Step 1: Grab the 🍩 Cookies (1 lb, $6)**
```
Bag: 🎒 [🍩]
Weight: 1/15 lb | Value: $6 | Remaining: 14 lb
```

**Step 2: Grab the 🥐 Croissant (1 lb, $5)**
```
Bag: 🎒 [🍩🥐]
Weight: 2/15 lb | Value: $11 | Remaining: 13 lb
```

**Step 3: Grab the 🍰 Cheesecake (4 lb, $18)**
```
Bag: 🎒 [🍩🥐🍰]
Weight: 6/15 lb | Value: $29 | Remaining: 9 lb
```

**Step 4: Grab the 🎂 Cake (8 lb, $35)**
```
Bag: 🎒 [🍩🥐🍰🎂]
Weight: 14/15 lb | Value: $64 | Remaining: 1 lb
```

**Step 5: Only 1 lb left but 🍪 Macarons weigh 2 lb take half!**

```
Took 50% of 🍪 Macarons (box of 4) | Value: $4
Bag: 🎒 [🍩🥐🍰🎂🍪]
Weight: 15/15 lb | Value: $68 | Remaining: 0 lb ✅
```

**The bag is full! Maximum value = $68** 🎉

> 🥖 The Baguette, Muffins and Sourdough get left behind they have the lowest ratios so they're the least efficient items to take.


### JavaScript Implementation 💻

```javascript
/**
 * Fractional Knapsack Problem - Greedy Algorithm
 *
 * @param {number} capacity - Max weight the bag can carry (in lb)
 * @param {Array}  items    - Array of objects with name, emoji, weight, and value
 * @returns {number}        - Maximum value achievable
 */
function fractionalKnapsack(capacity, items) {
  // Step 1: Calculate ratio for each item and sort by ratio descending
  const sortedItems = items
    .map(item => ({
      ...item,
      ratio: item.value / item.weight
    }))
    .sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  let remainingCapacity = capacity;
  let bag = [];

  // Step 2: Greedily fill the bag
  for (const item of sortedItems) {
    if (remainingCapacity === 0) break;

    if (item.weight <= remainingCapacity) {
      // Take the whole item
      totalValue += item.value;
      remainingCapacity -= item.weight;
      bag.push(item.emoji);
      console.log(`Took all of ${item.name} | Value: $${item.value} | Remaining: ${remainingCapacity} lb | Bag: [${bag.join('')}]`);
    } else {
      // Take only the fraction that fits
      const fraction = remainingCapacity / item.weight;
      totalValue += fraction * item.value;
      bag.push(item.emoji);
      console.log(`Took ${(fraction * 100).toFixed(1)}% of ${item.name} | Value: $${(fraction * item.value).toFixed(2)} | Remaining: 0 lb | Bag: [${bag.join('')}]`);
      remainingCapacity = 0;
    }
  }

  return totalValue;
}

// --- Our bakery example ---
const items = [
  { name: '🥖 Baguette',           emoji: '🥖', weight: 2, value: 4  },
  { name: '🥐 Croissant',          emoji: '🥐', weight: 1, value: 5  },
  { name: '🎂 Cake',               emoji: '🎂', weight: 8, value: 35 },
  { name: '🍰 Cheesecake',         emoji: '🍰', weight: 4, value: 18 },
  { name: '🧁 Muffins (box of 6)', emoji: '🧁', weight: 3, value: 9  },
  { name: '🍞 Sourdough',          emoji: '🍞', weight: 3, value: 8  },
  { name: '🍩 Cookies (box of 8)', emoji: '🍩', weight: 1, value: 6  },
  { name: '🍪 Macarons (box of 4)',emoji: '🍪', weight: 2, value: 8  },
];

console.log(`Maximum value: $${fractionalKnapsack(15, items)}`);
// Expected output: Maximum value: $68
```

### Complexity Analysis 📊

| Operation | Complexity |
|-----------|------------|
| Calculate ratios | O(n) |
| Sort by ratio | O(n log n) |
| Loop through items | O(n) |
| **Total** | **O(n log n)** |

The sorting step dominates the algorithm. No matter how many items there are, we only sort once and loop through once.

**Space complexity: O(n)**: we store the items array with their ratios.

## Guided Practice 🎯

Now that you understand the algorithm, let's put it to the test! Open the [Fractional Knapsack Visualizer](https://fractional-knapsack-visualizer.vercel.app) and enter our bakery example:

* Knapsack Capacity: **15**
* Number of Items: **8**

Then enter each item with its weight and value:

| Item | Weight (lb) | Value ($) |
|------|-------------|-----------|
| 🥖 Baguette | 2 | 4 |
| 🥐 Croissant | 1 | 5 |
| 🎂 Cake | 8 | 35 |
| 🍰 Cheesecake | 4 | 18 |
| 🧁 Muffins (box of 6) | 3 | 9 |
| 🍞 Sourdough | 3 | 8 |
| 🍩 Cookies (box of 8) | 1 | 6 |
| 🍪 Macarons (box of 4) | 2 | 8 |

Hit **"Visualize & Solve"** and observe:
* Which items get taken first and why?
* Which item gets partially taken?
* Does the result match our walkthrough?

## Independent Practice 💪

1. **Try a new scenario.** You snuck into a different bakery with a bag that holds **10 lb**. Calculate the ratios, sort them and find the maximum value:

| Item | Weight (lb) | Value ($) |
|------|-------------|-----------|
| 🍫 Chocolate bar | 1 | 7 |
| 🥧 Pie | 5 | 20 |
| 🍮 Flan | 2 | 6 |
| 🧇 Waffles | 3 | 12 |
| 🍬 Candy box | 1 | 5 |

2. **Modify the code.** Update the JavaScript implementation to also print the **total value collected** after each step.

3. **What if two items have the same ratio?** Design a test case where this happens. Does the order between them affect the final result? Test it and explain your findings.

4. **Think about it.** What would happen if you sorted by **value** instead of **value/weight ratio**? Would you still get the optimal result? Try it with our bakery example and see.


## Check for Understanding 🧠

1. What is the core greedy choice in the Fractional Knapsack algorithm and why is it always safe to make?

2. If you sort items by **value** instead of **value/weight ratio**, would you still get the optimal result? Give an example from our bakery scenario to support your answer.

3. What is the time complexity of the Fractional Knapsack algorithm and which step dominates it?

4. In our bakery example, why did we take only 50% of the Macarons instead of moving on to the next item?

5. Can you use this same greedy approach if items **cannot** be split? Why or why not?


> 💡 Ready for the next challenge? Check out the [0-1 Knapsack Problem](./knapsack-dynamic-programming.md) where items can't be split and Greedy no longer works!