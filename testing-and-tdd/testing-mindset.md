# Testing Mindset

### Week 3 Keywords and Questions

- What test cases do you need?
- What are the edge cases?
- When does one create the tests in TDD?

### Prerequisites

📽️ Watch this video of [TDD & Debugging with Russ Harmon](https://www.dropbox.com/scl/fi/0tm0hobs3a0gpnstm5un9/GMT20231013-210435_Recording_gallery_2560x1440.mp4?rlkey=vquxs6lust77ggzw6imidtu6e&dl=0)

### Motivation

When you write code, you're not done once you write the code -- you need to make sure it works! A big part of coding is testing -- making sure your code actually works how you think it will.

In a later lesson you'll learn about technologies specifically used for testing, but for now we'll go through some basic ways you can have a testing mindset and write basic tests whenever you write code.

### Lesson

How do you go about making sure the code you wrote actually works?

At the most basic level, you need to run the code you wrote and make sure it does what you think it should. More specifically, you need to think about the specific problem you're solving and run your code with multiple cases that cover all different cases that can occur in your problem.

Let's learn about this process by going through an example.
I'm trying to write a function that returns whether a number is positive, negative, or zero. Here's the code I wrote so far:

```javascript
function isPositiveNegativeZero(number) {
  if (number > 0) {
    return 'positive';
  } else if (number <= 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}
```

Am I done? No! I need to run my code to test it.

So I run:

```javascript
console.log(isPositiveNegativeZero(3));
```

It prints "positive". Yay, that's right!
I tested my code and it worked. Am I done now?

Nope!

I know my code works when the input is the number 3, but how do I know if it will work for all numbers?

Let's think about the different situations that the code addresses. The code needs to do something different for positive numbers, negative numbers, and zero. So let's test at least one input for each case.

- For positive -- we already tested 3.
- For negative, let's test -5. (You could pick any negative number you want though). I run `console.log(isPositiveNegativeZero(-5))`. It prints "negative". Woohoo!
- For zero, we'll test 0! I run `console.log(isPositiveNegativeZero(0))`. It prints "negative". Hmm, that's not what we wanted!

Now I can go to my code and look for the bug. I look at my code and realize I wrote `number <= 0` instead of `number < 0`. When I make that change, I run `console.log(isPositiveNegativeZero(0))`. It prints "zero" this time. Nice!

Now, we've tested inputs that cover all different possible cases that could occur in the code, and they all work. Now I feel pretty confident that my code works!

#### Edge cases

When we talk about testing, we often talk about "edge cases" as part of it. People use the phrases "edge case" or "corner case" to mean a special case, an unusual case, or case that occurs at the boundary between conditions.

Some edge cases are specific to the domain of a problem. For example, let's say I want to write a function that returns whether a number is >= 4. I should make sure to test the number 4 itself. Since it's at the "boundary" between returning true and returning false, it's an input that's important to test.

Some edge cases are common across many problems. For example, for a function that takes array as input, the empty array is often an edge case to consider. For a function that takes a string, the empty string "" may be one to consider. For functions that take in numbers: 0, negative numbers, and decimal numbers can be edge cases.

These are not the only edge cases that exist for any given problem, and they are often not the most important ones, but it's useful to think about what your code will do if it encounters these common cases.

#### How to write and run tests

Later in the course you'll learn about more specific technologies for writing tests, but for now we'll keep it simple.
Here are the important things to do:

- Keep your tests along with your code -- don't just run them once and consider it done. This way, as you change your code, you can keep running your tests and make sure you didn't break anything that used to work. (Side note: In coding, breaking something that used to work is called a "regression"). You can also demonstrate to anyone reading the code that you've tested your code.
- Know what you expect from each test. If you just run your code without knowing what you expect, you won't know if you have a bug. A very simple way to do this is to write a comment with the expected output and manually check if the actual outputs are the same.

So, when I'm done, my code file might look like:

```javascript
function isPositiveNegativeZero(number) {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

console.log(isPositiveNegativeZero(3)); // Expected: "positive"
console.log(isPositiveNegativeZero(-5)); // Expected: "negative"
console.log(isPositiveNegativeZero(0)); // Expected: "zero"
```

A slightly fancier way to write tests is to have the computer do the checking for you. For example, I could change my tests to look like:

```javascript
console.log(isPositiveNegativeZero(3) === 'positive');
console.log(isPositiveNegativeZero(-5) === 'negative');
console.log(isPositiveNegativeZero(0) === 'zero');
```

Now if I run it and see all `true`s print out, I know my code does what is expected. If I see a `false`, I know something went wrong. Now instead of checking each value that prints out against my expectation, I just have to look for the word `false` -- much easier!

**Note: you cannot test arrays with this fancier method**

If your code outputs an array and you write your test to check if the output equals an array, it will fail because two arrays are never considered equal to each other.

Example:

```js
const gimmeFive = () => {
  const arrayOfFiveThings = [];
  for (let i = 1; i <= 5; i++) {
    arrayOfFiveThings.push(i);
  }
  return arrayOfFiveThings;
};
console.log(gimmeFive());
// results in [1, 2, 3, 4, 5]

console.log(gimmeFive() === [1, 2, 3, 4, 5]);
// results in false
```

- As you can see in the example above, logging the output of the function results in the expected array, but logging whether the output of the function equals an array with the same elements results in false. An an array or an object can never equal any object that is not _itself_, even if it is identical.
- As you get deeper into testing, you will find ways to test the inner contents, rather than the whole object or array.

### Extra Practice if time permits

For each of the exercises below:

- Write the function
- Think about what different tests you would need to make sure your function is correct. Write calls to the function to exercise those cases. Next to each call, write a comment explaining why you tested that case.

Exercises:

1. A function that takes in two numbers and returns `true` if the first number is larger than the second number. Otherwise, it should return `false`.

2. A function that takes in an array of numbers, and returns the third number in the array.

3. A function that takes 3 numbers as parameters. The 3 parameters are called `min`, `max`, and `target`. Return whether target number is between the min and the max (inclusive).

4. A function that takes in a number, and prints the word "Hello" that many times.
