# Refactoring

### Projected Time

About 1 hour 15 mins:

- 15 mins Refactoring slide deck
- 15 mins Guided Practice
- 45 mins Independent Practice & Group Practice

### Prerequisites

- Basic understanding of [JavaScript](../javascript).
- [Writing Readable Code lesson](../writing-readable-code/writing-readable-code.md)
- [Debugging lesson](../debugging/debugging.md)

### Motivation

To encourage quality code practices and being able to identify improvements that can be made to existing code.

### Objectives

**Participants will be able to:**:

- Understand the intent of refactoring
- Know when to refactor and when not to
- Know the potential impacts of refactoring

### Materials

- [Refactoring Slides](https://docs.google.com/presentation/d/1Dcu1q3W3hZIkk0Wa1mG3KBK75vzY2peFel5WNgNyqN0/edit#slide=id.p)

### Lesson

- Read through lesson slides [Refactoring](https://docs.google.com/presentation/d/1Dcu1q3W3hZIkk0Wa1mG3KBK75vzY2peFel5WNgNyqN0/edit#slide=id.p)

- Introduction to Refactoring
  1. Purpose
  2. Impact in a corporate code base (importance of managing "technical debt", working in "legacy code")
  3. Funky code to look for (ex: magic numbers, unhelpful variable names, etc.)
  4. Leveraging functions
  5. Using libraries
  6. Keeping code DRY (Don't Repeat Yourself)
  7. Test your code to make sure you didn't break any functionality

### Common Mistakes / Misconceptions

This is something people might not realize or might assume at first.

- Importance of testing to ensure that refactoring doesn't break anything
- Knowing when refactoring is worth the investment (sometimes it may not be)

### Guided Practice

How would you refactor this?

```js
const legs = function (numOfSpiders) {
  let eyes = 2;
  let totalEyes = numOfSpiders * eyes;
  return numOfSpiders * 8;
};
```

- Is there unnecessary information?
- Is it clear what the code is doing?
- Is it clear what the variables are for?

A possible solution:

1. The number `8` is a "magic number" - let's declare it as a constant
   (eg: `let NUM_OF_SPIDER_LEGS = 8`)
   Using all caps is a good way to indicate to someone else that this variable is a magic number.

2. Make let `legs` more descriptive
   (eg: let `getTotalNumOfSpiderLegs`)
   This variable name makes it very clear that we are talking about both spider legs and trying to get the number. The variable name may be a bit long, but better to be long and clear, than short and confusing.)

3. Remove any dead code since it isn’t used in the function
   (eg: let `eyes` & let `totalEyes`)
   It can be tempting to save code for "one day". You might think "What if maybe one day I want to calculate the total number of spider eyes?". It's better to just add that code back once you actually use it, rather than leave confusing code and having someone else spend time trying to figure out why `eyes` is important to this function.

Your refactored code may look like this (but doesn't have to!):

```js
const getTotalNumOfSpiderLegs = function (numOfSpiders) {
  const NUM_OF_SPIDER_LEGS = 8;
  return numOfSpiders * NUM_OF_SPIDER_LEGS;
};
```

### Independent Practice

1. Read this [blog post](https://ronjeffries.com/xprog/articles/refactoring-not-on-the-backlog/) on visualizing refactoring.
2. Read about the different [code smells](https://refactoring.guru/refactoring/smells) to look for.
3. Pick any exercise you completed early in the program. Find at least 2 places that your code can be refactored, and refactor it.

Ideas to help kickstart your refactoring:

- Are there library functions that can be used instead?
  - Try https://lodash.com/docs/ for JavaScript
- Are you writing the same block of code over and over? Consider a function.
- Are you calling a similar function over and over? Consider a class.
- Can you come up with more descriptive variable names?
- Share your code with a classmate. Can they easily understand what your code is trying to do?

### Group Practice

Ask a partner to review your original code. Don't tell them what 2 places you chose to refactor yet.
Ask your partner to find at least 2 places that your code can be refactored. Have them refactor it.
Compare the 2 places that your partner found with what you picked during your Independent Practice. Are they the same? Are they different? If they are different, try refactoring your own code based on your partner's suggestion. What do you think? Do you think your original code has improved from both you and your partner's refactoring efforts?
Now do the same and review your partner's code.
Congratulations! Not only did you just learn to refactor, but you also just completed a code review!

### Challenge

Can you find other pieces of code you wrote to refactor?

### Supplemental Materials

- [Sandi Metz: All the Little Things](https://www.youtube.com/watch?v=8bZh5LMaSmE) - covers the famous Gilded Rose kata (38min)
- [JavaScript Refactoring exercise](https://github.com/yearofthedan/refactoring-exercise)
- [Client-side Refactoring exercise](https://gist.github.com/davemo/949361)
- [Visual example of the importance of refactoring](http://ronjeffries.com/xprog/articles/refactoring-not-on-the-backlog/)
- [Refactoring lesson plan](https://refactoring.guru/refactoring/what-is-refactoring)
