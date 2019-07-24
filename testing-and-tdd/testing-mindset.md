# Testing Mindset

When you write code, you're not done once you write the code -- you need to make sure it works! A big part of coding is testing -- making sure your code actually works how you think it will.

In a later lesson you'll learn about technologies specifically used for testing, but for now we'll go through some basic ways you can have a testing mindset and write basic tests whenever you write code.

How do you go about doing that?
At the most basic level, you need to run the code you wrote and make sure it does what you think it should. More specifically, you need to think about the domain of the problem and run your code with cases that cover all different situations you can think of.

Let's learn about this process by going through an example.
I'm trying to write a function that returns whether a number is positive, negative, or zero. Here's the code I wrote so far:

```
function isPositiveNegativeZero(number) {
  if (number > 0) {
    return "positive";  
  } else if (number <= 0) {
    return "negative";
  } else {
    return "zero";
  }
 }
 ```

Am I done? No! I need to run my code to test it.

So I run:
```
console.log(isPositiveNegativeZero(3));
```

It prints "positive". Yay, that's right! 
I tested my code and it worked. Am I done now?

No!

I know my code works when the input is the number 3, but how do I know if it will work for all numbers?

Let's think about the different situations that the code addresses. The code needs to do something different for positive numbers, negative numbers, and zero. So let's test at least one input for each case.

- For positive -- we already tested 3.
- For negative, let's test -5. (You could pick any negative number you want though). I run `console.log(isPositiveNegativeZero(-5))`. It prints "negative". Woohoo!
- For zero, we'll test 0! I run `console.log(isPositiveNegativeZero(0))`. It prints "negative". Hmm, that's not what we wanted!

Now I can go to my code and look for the bug. I look at my code and realize I used "number <= 0" instead of "number < 0". When I make that change, I run `console.log(isPositiveNegativeZero(0))`. It prints "zero" this time. Nice!

Now, we've tested cases that test all different possible cases that could occur in the code, and they all work. Now I feel pretty confident that my code works!

### Edge cases
People use "edge case" or "corner case" to mean a special case, an unusual case, or case that occurs at the boundary between conditions.

Some edge cases are specific to the domain of a problem. For example, let's say I want to write a function that returns whether a number is >= 4. I should make sure to test the number 4 itself. Since it's at the "boundary" between returning true and returning false, it's an input that's important to test.

Some edge cases are common across many problems. For example, for a function that takes array as input, the empty array is often an edge case to consider. For a function that takes a string, the empty string "". For functions that take in numbers: 0, negative numbers, and decimal numbers can be edge cases.
These are not the only edge cases, and they are often not the most important ones, but it's useful to think about what your code will do if it encounters these cases.


## Practice!

For each of the exercises below:
- Write the function
- Think about what different tests you would need to make sure your function is correct. Write calls to the function to exercise those cases. Next to each call, write a comment explaining why you tested that case.

1. A function that takes in two numbers and returns true if the first number is larger than the second number. Otherwise, it should return false.

2. A function that takes in an array of numbers, and returns the third number in the array.

3. A function that takes 3 numbers as parameters. The 3 parameters are called "min", "max", and "target". Return whether target number is between the min and the max (inclusive).

4. A function that takes in a number, and prints the word "Hello" that many times.

