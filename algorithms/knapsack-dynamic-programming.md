# 0-1 Knapsack Problem (Dynamic Programming)

> ⚠️ **Read [Fractional Knapsack](./fractional-knapsack-greedy.md) first!** This lesson builds directly on top of it same bakery, same items, but one new rule that changes everything.

The Fractional Knapsack showed us that Greedy works perfectly when items can be split. But what happens when they can't? That one restriction breaks Greedy completely and that's exactly where Dynamic Programming comes in. 💡

## Topic Outline Time

* Reading: 30 minutes
* Activities: 60 minutes
* Total: ~90 minutes

## Prerequisites

* Basic understanding of arrays and loops
* [Big O Notation / Runtime Complexity](/runtime-complexity/runtime-complexity.md)
* [Fractional Knapsack Problem](./fractional-knapsack-greedy.md)

## Table of Contents

1. [Motivation](#motivation)
2. [Objectives](#objectives)
3. [Materials and Useful Videos](#materials-and-useful-videos)
4. [Lesson](#lesson)
   * [What is the 0-1 Knapsack Problem?](#what-is-the-0-1-knapsack-problem)
   * [Why Greedy Fails](#why-greedy-fails)
   * [The Dynamic Programming Idea](#the-dynamic-programming-idea)
   * [Building the DP Table](#building-the-dp-table)
   * [JavaScript Implementation](#javascript-implementation)
   * [Complexity Analysis](#complexity-analysis)
5. [Guided Practice](#guided-practice)
6. [Independent Practice](#independent-practice)
7. [Check for Understanding](#check-for-understanding)

## Motivation

The Fractional Knapsack taught us that Greedy is elegant and efficient when it works. But many real-world problems don't allow fractions. You can't take half a laptop or split a camera.

The 0-1 Knapsack is one of the most classic problems in computer science precisely because it looks simple but requires a fundamentally different strategy. Learning it will help you:

* Recognize when Greedy is not enough
* Understand Dynamic Programming as a strategy to solve complex optimization problems
* Build intuition for breaking problems into smaller subproblems
* Tackle a problem that appears frequently in technical interviews

## Objectives

**Participants will be able to:**

* Explain why the Greedy approach fails for the 0-1 Knapsack Problem
* Define what "0-1" means in the context of this problem
* Formulate the decision for each item: take it or leave it
* Build a solution using Dynamic Programming
* Implement the solution in JavaScript
* Trace back through the DP table to identify which items were selected

## Materials and Useful Videos

**Videos:**
* [0/1 Knapsack Problem Explained Visually (YouTube)](https://www.youtube.com/watch?v=qxWu-SeAqe4)covers the DP table and traceback
* [Back to Back SWE: 0/1 Knapsack (YouTube)](https://www.youtube.com/watch?v=xCbYmUPvc2Q)

**Before you watch: if Dynamic Programming is new to you:**
* [Memoization and Dynamic Programming Explained (YouTube)](https://www.youtube.com/watch?v=P8Xa2BitN3I)great intro to DP concepts using Fibonacci and grid problems

**Reading:**
* [GeeksforGeeks: 0-1 Knapsack Problem](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/)

**Materials Needed:**
* Paper and pencil you'll need to draw a table ✏️
* Colored pens to fill in the DP table (optional) 🖊️

## Lesson

### What is the 0-1 Knapsack Problem?

The 0-1 Knapsack Problem is similar to the Fractional Knapsack you have a bag with a weight limit and a set of items, each with a weight and a value, and you want to maximize the total value you can carry.

The key difference is in the name: **0-1**. Each item can either be taken **(1)** or left behind **(0)** there is no in between. You cannot take half a cake or a quarter of a box of macarons.

This one restriction changes everything.


### Why Greedy Fails 🚨

Remember our bakery? 🦹‍♀️ You're back for another heist but this time all the items are in **sealed boxes**. You can't cut the cake or split the macarons. You must take each item whole or leave it behind.

Your bag still holds **15 lb** and the items are the same:

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

Greedy picks by ratio as usual:

| | 🍩 Cookies | 🥐 Croissant | 🍰 Cheesecake | 🎂 Cake | **Total** |
|---|---|---|---|---|---|
| Weight (lb) | 1 | 1 | 4 | 8 | **14 lb** |
| Value ($) | 6 | 5 | 18 | 35 | **$64** |

Only 1 lb remaining nothing else fits! 😬

But wait, is that really the best we can do? Let's think...

| | 🍩 Cookies | 🥐 Croissant | 🍰 Cheesecake | 🍪 Macarons | 🎂 Cake | **Total** |
|---|---|---|---|---|---|---|
| Weight (lb) | 1 | 1 | 4 | 2 | 8 | **16 lb** ❌ |
| Value ($) | 6 | 5 | 18 | 8 | 35 | **$72** |

Too heavy! Let's try another combination...

| | 🍩 Cookies | 🥐 Croissant | 🍰 Cheesecake | 🧁 Muffins | 🎂 Cake | **Total** |
|---|---|---|---|---|---|---|
| Weight (lb) | 1 | 1 | 4 | 3 | 8 | **17 lb** ❌ |
| Value ($) | 6 | 5 | 18 | 9 | 35 | **$73** |

Still too heavy! 🤔 Hmm wait...

| | 🎂 Cake | 🍰 Cheesecake | 🍩 Cookies | 🍪 Macarons | **Total** |
|---|---|---|---|---|---|
| Weight (lb) | 8 | 4 | 1 | 2 | **15 lb** ✅ |
| Value ($) | 35 | 18 | 6 | 8 | **$67** ✅ |

Greedy got **$64**, optimal is **$67** greedy left **$3 on the table** by blindly following the ratio without considering how items combine. And with only 8 items we already struggled to find the answer manually imagine doing this with 100 items! 🤯

This is exactly why we need **Dynamic Programming**. 💡


### The Dynamic Programming Idea 💡

Instead of guessing combinations, Dynamic Programming solves this systematically by breaking the problem into smaller subproblems and building up the answer step by step.

The key question DP asks for every item is:

> **"What is the maximum value I can carry with this capacity, considering only the items I've seen so far?"**

We answer this question for every item and every possible capacity from 0 to 15 lb, storing the results in a table. Each cell builds on the answers already computed we never recalculate the same subproblem twice.

For each item we have exactly two choices:

- **Leave it** the best value stays the same as without this item
- **Take it** we add its value and use up its weight

We pick whichever choice gives us more value.

By the time we fill the entire table, the answer to our original problem is sitting in the last cell. 🎯

### Building the DP Table 📊

> ✏️ **Grab your paper and pencil!** Draw this table as we fill it together it's the best way to understand what's happening.

To keep things clear, we'll work with **4 items** and a bag of **6 lb** first. Then you'll tackle the full problem on your own!

| Item | Weight (lb) | Value ($) |
|------|-------------|-----------|
| 🍩 Cookies (box of 8) | 1 | 6 |
| 🍪 Macarons (box of 4) | 2 | 8 |
| 🥐 Croissant | 1 | 5 |
| 🍰 Cheesecake | 4 | 18 |

We'll build a table where:
- **Rows** represent items considered so far
- **Columns** represent every possible capacity from 0 to 6 lb
- **Each cell** answers: *"What is the maximum value I can carry with this capacity, using only the items seen so far?"*

Start by drawing an empty table and filling the first row and column with zeros with no items or no capacity, the value is always 0:

| Item \ Capacity | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| 0 (none) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 🍩 Cookies (1lb, $6) | 0 | | | | | | |
| 2 🍪 Macarons (2lb, $8) | 0 | | | | | | |
| 3 🥐 Croissant (1lb, $5) | 0 | | | | | | |
| 4 🍰 Cheesecake (4lb, $18) | 0 | | | | | | |



**Row 1: 🍩 Cookies (1 lb, $6)**

For each capacity, we ask: *should we take the Cookies or leave them?*

- **Capacity 0** → bag is full, can't take anything → **0**
- **Capacity 1** → Cookies weigh 1 lb, they fit! Take them → **$6**
- **Capacity 2** → Cookies still weigh 1 lb, we only have one box → **$6**
- **Capacity 3, 4, 5, 6** → same, only one box of Cookies → **$6**

| Item \ Capacity | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| 0 (none) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 🍩 Cookies | 0 | **6** | **6** | **6** | **6** | **6** | **6** |
| 2 🍪 Macarons | 0 | | | | | | |
| 3 🥐 Croissant | 0 | | | | | | |
| 4 🍰 Cheesecake | 0 | | | | | | |



**Row 2: 🍪 Macarons (2 lb, $8)**

Now we consider both Cookies and Macarons. For each capacity:

- **Capacity 1** → Macarons weigh 2 lb, don't fit → best without them is **$6** (Cookies)
- **Capacity 2** → Take Macarons ($8) vs take Cookies ($6) → **$8**
- **Capacity 3** → Take Macarons ($8) + best with 1 lb remaining ($6 Cookies) = **$14**
- **Capacity 4, 5, 6** → Same as capacity 3, no more items to fill the extra space → **$14**

| Item \ Capacity | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| 0 (none) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 🍩 Cookies | 0 | 6 | 6 | 6 | 6 | 6 | 6 |
| 2 🍪 Macarons | 0 | **6** | **8** | **14** | **14** | **14** | **14** |
| 3 🥐 Croissant | 0 | | | | | | |
| 4 🍰 Cheesecake | 0 | | | | | | |



**Row 3: 🥐 Croissant (1 lb, $5)**

Now we consider Cookies, Macarons and Croissant:

- **Capacity 1** → Croissant ($5) vs Cookies ($6) → **$6**
- **Capacity 2** → Croissant + Cookies ($5+$6=$11) vs Macarons ($8) → **$11**
- **Capacity 3** → Croissant + Macarons ($5+$8=$13) vs Cookies + Macarons ($14) → **$14**
- **Capacity 4** → Croissant + Macarons + Cookies ($5+$8+$6=$19) → **$19**
- **Capacity 5, 6** → same, no more items → **$19**

| Item \ Capacity | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| 0 (none) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 🍩 Cookies | 0 | 6 | 6 | 6 | 6 | 6 | 6 |
| 2 🍪 Macarons | 0 | 6 | 8 | 14 | 14 | 14 | 14 |
| 3 🥐 Croissant | 0 | **6** | **11** | **14** | **19** | **19** | **19** |
| 4 🍰 Cheesecake | 0 | | | | | | |



**Row 4: 🍰 Cheesecake (4 lb, $18)**

This is the final row now we consider all 4 items:

- **Capacity 1, 2, 3** → Cheesecake weighs 4 lb, doesn't fit → same as row above: **$6, $11, $14**
- **Capacity 4** → Cheesecake ($18) vs best without it ($19) → **$19**
- **Capacity 5** → Cheesecake + best with 1 lb remaining ($18+$6=$24) vs $19 → **$24**
- **Capacity 6** → Cheesecake + best with 2 lb remaining ($18+$11=$29) vs $19 → **$29** 🎉

| Item \ Capacity | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| 0 (none) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 🍩 Cookies | 0 | 6 | 6 | 6 | 6 | 6 | 6 |
| 2 🍪 Macarons | 0 | 6 | 8 | 14 | 14 | 14 | 14 |
| 3 🥐 Croissant | 0 | 6 | 11 | 14 | 19 | 19 | 19 |
| 4 🍰 Cheesecake | 0 | 6 | 11 | 14 | 19 | 24 | **29** |

**Maximum value = $29** 🎉

The answer is in the bottom-right cell the best value achievable with all 4 items and the full 6 lb capacity.

**But which items did we actually take? 🤔**

The table tells us the maximum value but not which items to pick. For that we need to **traceback** through the table starting from the bottom-right and moving up:

**Step 1**: Start at [row 4, capacity 6]

| | Item \ Capacity | 0 | 1 | 2 | 3 | 4 | 5 | **6** |
|---|---|---|---|---|---|---|---|---|
| | 0 (none) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| | 1 🍩 Cookies | 0 | 6 | 6 | 6 | 6 | 6 | 6 |
| | 2 🍪 Macarons | 0 | 6 | 8 | 14 | 14 | 14 | 14 |
| 🔍 compare | 3 🥐 Croissant | 0 | 6 | 11 | 14 | 19 | 19 | **19** |
| 👉 here | 4 🍰 Cheesecake | 0 | 6 | 11 | 14 | 19 | 24 | **29** |

**29 vs 19 → changed!** ✅ Took 🍰 Cheesecake (4lb). Remaining: 6-4 = **2 lb**

**Step 2**: Move to [row 3, capacity 2]

| | Item \ Capacity | 0 | 1 | **2** | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|---|
| | 0 (none) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| | 1 🍩 Cookies | 0 | 6 | 6 | 6 | 6 | 6 | 6 |
| 🔍 compare | 2 🍪 Macarons | 0 | 6 | **8** | 14 | 14 | 14 | 14 |
| 👉 here | 3 🥐 Croissant | 0 | 6 | **11** | 14 | 19 | 19 | 19 |
| | 4 🍰 Cheesecake | 0 | 6 | 11 | 14 | 19 | 24 | 29 |

**11 vs 8 → changed!** ✅ Took 🥐 Croissant (1lb). Remaining: 2-1 = **1 lb**

**Step 3**: Move to [row 2, capacity 1]

| | Item \ Capacity | 0 | **1** | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|---|
| | 0 (none) | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 🔍 compare | 1 🍩 Cookies | 0 | **6** | 6 | 6 | 6 | 6 | 6 |
| 👉 here | 2 🍪 Macarons | 0 | **6** | 8 | 14 | 14 | 14 | 14 |
| | 3 🥐 Croissant | 0 | 6 | 11 | 14 | 19 | 19 | 19 |
| | 4 🍰 Cheesecake | 0 | 6 | 11 | 14 | 19 | 24 | 29 |

**6 vs 6 → no change!** ⏭️ Skipped 🍪 Macarons


**Step 4**: Move to [row 1, capacity 1]

| | Item \ Capacity | 0 | **1** | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|---|
| 🔍 compare | 0 (none) | 0 | **0** | 0 | 0 | 0 | 0 | 0 |
| 👉 here | 1 🍩 Cookies | 0 | **6** | 6 | 6 | 6 | 6 | 6 |
| | 2 🍪 Macarons | 0 | 6 | 8 | 14 | 14 | 14 | 14 |
| | 3 🥐 Croissant | 0 | 6 | 11 | 14 | 19 | 19 | 19 |
| | 4 🍰 Cheesecake | 0 | 6 | 11 | 14 | 19 | 24 | 29 |

**6 vs 0 → changed!** ✅ Took 🍩 Cookies (1lb). Remaining: **0 lb**

**Items taken: 🍰 + 🥐 + 🍩 = 6 lb → $29** ✅

### JavaScript Implementation 💻

```javascript
/**
 * 0-1 Knapsack Problem - Dynamic Programming
 *
 * @param {number} capacity - Max weight the bag can carry (in lb)
 * @param {Array}  items    - Array of objects with name, weight, and value
 * @returns {object}        - Maximum value and items taken
 */
function knapsack01(capacity, items) {
  const n = items.length;

  // Step 1: Build the DP table
  const dp = Array(n + 1)
    .fill(null)
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const item = items[i - 1];
    for (let w = 0; w <= capacity; w++) {
      // Option 1: Leave the item
      dp[i][w] = dp[i - 1][w];

      // Option 2: Take the item (only if it fits)
      if (item.weight <= w) {
        const takeIt = dp[i - 1][w - item.weight] + item.value;
        if (takeIt > dp[i][w]) dp[i][w] = takeIt;
      }
    }
  }

  // Step 2: Traceback to find which items were taken
  const taken = [];
  let w = capacity;
  for (let i = n; i >= 1; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      taken.push(items[i - 1]);
      w -= items[i - 1].weight;
    }
  }

  return {
    maxValue: dp[n][capacity],
    items: taken
  };
}

// --- Our bakery example ---
const items = [
  { name: '🍩 Cookies (box of 8)',  weight: 1, value: 6  },
  { name: '🍪 Macarons (box of 4)', weight: 2, value: 8  },
  { name: '🥐 Croissant',           weight: 1, value: 5  },
  { name: '🍰 Cheesecake',          weight: 4, value: 18 },
];

const result = knapsack01(6, items);
console.log(`Maximum value: $${result.maxValue}`);
console.log(`Items taken:`);
result.items.forEach(i => console.log(`  ${i.name} (${i.weight}lb, $${i.value})`));

// Expected output:
// Maximum value: $29
// Items taken:
//   🍰 Cheesecake (4lb, $18)
//   🥐 Croissant (1lb, $5)
//   🍩 Cookies (box of 8) (1lb, $6)
```


### Complexity Analysis 📊

| Operation | Complexity |
|-----------|------------|
| Build DP table | O(n × W) |
| Traceback | O(n) |
| **Total** | **O(n × W)** |

Where **n** is the number of items and **W** is the knapsack capacity.

Unlike the Fractional Knapsack where sorting dominated at O(n log n), here the bottleneck is filling the entire table we visit every combination of item and capacity exactly once.

**Space complexity: O(n × W)** we store the full DP table.

> 💡 Notice that the time complexity depends not only on the number of items but also on the capacity. If the capacity is very large, the table becomes huge. This is why the 0-1 Knapsack is classified as an **NP-complete** problem there is no known polynomial time solution.

## Guided Practice 🎯

Now it's your turn to build the table by hand! ✏️

Use the same 4 items but this time with a bag of **5 lb** instead of 6 lb:

| Item | Weight (lb) | Value ($) |
|------|-------------|-----------|
| 🍩 Cookies (box of 8) | 1 | 6 |
| 🍪 Macarons (box of 4) | 2 | 8 |
| 🥐 Croissant | 1 | 5 |
| 🍰 Cheesecake | 4 | 18 |

1. Draw the empty table on paper with rows for each item and columns for capacities 0 to 5
2. Fill in row 0 with zeros
3. Fill each row asking: *"Should I take this item or leave it?"*
4. Find the maximum value in the bottom-right cell
5. Traceback to find which items were selected

**Once you're done**, verify your answer with the JavaScript implementation from the lesson.

## Independent Practice 💪

You've graduated from the bakery time for a bigger heist! 💅

You snuck into a boutique store. Your bag holds **25 lb** and you spot these items:

| Item | Weight (lb) | Value ($) |
|------|-------------|-----------|
| 💻 Tablet | 15 | 850 |
| 📷 Instax Camera | 10 | 300 |
| 🎧 Headphones | 2 | 350 |
| 🌸 Perfume | 8 | 200 |
| 🕶️ Sunglasses | 7 | 400 |
| 💇 Hair Tool | 5 | 300 |
| 👛 Wallet | 1 | 250 |

1. Build the DP table on paper rows for each item, columns for capacities 0 to 25
2. Fill the table and find the maximum value
3. Traceback to find which items were selected
4. Verify your answer with the JavaScript implementation

> 💡 Hint: Would greedy give you the optimal answer here?

## Check for Understanding 🧠

1. What does the "0-1" in 0-1 Knapsack mean? How is it different from the Fractional Knapsack?

2. In our bakery example, greedy picked 🍩 + 🥐 + 🍰 + 🎂 = **$64**. Why did it miss the optimal solution of **$67**?

3. What does each cell in the DP table represent?

4. In the traceback, how do you know if an item was taken or skipped?

5. What is the time complexity of the 0-1 Knapsack DP solution and why does the capacity affect it?

6. Could you solve the 0-1 Knapsack with a greedy approach if you found a better way to sort the items? Why or why not?


> 📖 **Lost?** If the difference between Fractional and 0-1 Knapsack is still unclear, go back and review the [Fractional Knapsack Problem](./fractional-knapsack-greedy.md) same bakery, same items, but you can split them. Seeing both side by side will make it click! 🎯