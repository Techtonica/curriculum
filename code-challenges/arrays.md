# Code Challenges about Arrays - JavaScript

## Resources:

- [Techtonica Lesson about Arrays](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-2-array-functions.md)

## Motivation

Techtonica's JavaScript lessons set a solid foundation in JavaScript basics so we can use the language in more robust ways in later studies. Nevertheless, you want to practice problems that use arrays as a preparation for your technical interview.

## Objectives

Participants will be able to:

- Work each problem as a code challenge
- Work their solutions using functions
- Test their solutions with several test cases

## Things to Remember

Make sure that you know the answer to this questions:

- What do the methods push() and pop() do?
- How would you access the first and last item in an array?
- What does arrayName.length do?
- How would you index into the following array to get Cookie? let dessertArray = [ ["Pie", 4], ["Cupcake”, 5], ["Cookie", 12] ];
- What's the difference and similarities between var, let and const?
- What's the difference between parameters and arguments? Show an example.
- What is the difference between local scope and global scope?

### Problem Sets

Question | Test Cases | Solutions

#### Problem 1 -

Write a function that takes in an array and joins all elements of the array into a string.

arrayToString([“Hello”, “World”, “How”, “Are”, “You”]) → ”Hello World How Are You”
arrayToString([“l”, “Am”, “Learning”, “How”, “To”, “Code”]) → “I Am Learning How To Code”
arrayToString([“I”, “Love”, “Techtonica”]) → “I Love Techtonica”

Sample Solution:

function arrayToString(array) {
    // Your code here
    return array.join(" ");
}
#### Problem 2 -

Store a set of words in an array and display the contents both forward and backward.

Needs test cases

Needs sample solution

#### Problem 3 -

Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

array_front9([1, 2, 9, 3, 4]) → true
array_front9([1, 2, 3, 4, 9]) → false
array_front9([1, 2, 3, 4, 5]) → false
Needs sample solution

#### Problem 4 -

Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
Needs sample solution

#### Problem 5 -

Given an array of ints, return the number of 9's in the array.

array_count9([1, 2, 9]) → 1
array_count9([1, 9, 9]) → 2
array_count9([1, 9, 9, 3, 9]) → 3

Needs sample solution

#### Problem 6 -

Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

You must solve this in O(1) time, which means without looping through the array

first_last6([1, 2, 6]) → true
first_last6([6, 1, 2, 3]) → true
first_last6([13, 6, 1, 2, 3]) → false

Needs sample solution

#### Problem 7 -

Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

common_end([1, 2, 3], [7, 3]) → true
common_end([1, 2, 3], [7, 3, 2]) → false
common_end([1, 2, 3], [1, 3]) → true

Needs sample solution

#### Problem 8 -

Given an array of ints with a length of 3, return a new array with the elements in reverse order.

reverse3([1, 2, 3]) → [3, 2, 1]
reverse3([5, 11, 9]) → [9, 11, 5]
reverse3([7, 0, 0]) → [0, 0, 7]
Needs sample solution

#### Problem 9 -

Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

middle_way([1, 2, 3], [4, 5, 6]) → [2, 5]
middle_way([7, 7, 7], [3, 8, 0]) → [7, 8]
middle_way([5, 2, 9], [1, 4, 5]) → [2, 4]

Needs sample solution

#### Problem 10 -

Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

same_first_last([1, 2, 3]) → false
same_first_last([1, 2, 3, 1]) → true
same_first_last([1, 2, 1]) → true

Needs sample solution
