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

```
arrayToString([“Hello”, “World”, “How”, “Are”, “You”]) → ”Hello World How Are You”
arrayToString([“l”, “Am”, “Learning”, “How”, “To”, “Code”]) → “I Am Learning How To Code”
arrayToString([“I”, “Love”, “Techtonica”]) → “I Love Techtonica”
```

Sample Solution:

``` javascript
function arrayToString(array) {
    return array.join(" ");
}
```

#### Problem 2 -

Store a set of words in an array and display the contents both forward and backward.

```
reverseArray([“Hello”, “World”, “How”, “Are”, “You”]) → [“You”, “Are”, “How”, “World”, “Hello”]
reverseArray([“l”, “Am”, “Learning”, “How”, “To”, “Code”]) → [“Code”, “To”, “How”, “Learning”, “Am”, “l”]
reverseArray([“I”, “Love”, “Techtonica”]) → [“Techtonica”, “Love”, “I”]
```

Sample Solution:

``` javascript
function reverseArray(array) {
    return array.reverse();
}
```

#### Problem 3 -

Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

```
array_front9([1, 2, 9, 3, 4]) → true
array_front9([1, 2, 3, 4, 9]) → false
array_front9([1, 2, 3, 4, 5]) → false
```

Sample Solution:

``` javascript
function array_front9(array) {
    return array.slice(0, 4).includes(9);
}
```

#### Problem 4 -

Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

```
array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
```

Sample Solution:

```
function array123(array) {
    return array.join("").includes("123");
}
```

#### Problem 5 -

Given an array of ints, return the number of 9's in the array.

```
array_count9([1, 2, 9]) → 1
array_count9([1, 9, 9]) → 2
array_count9([1, 9, 9, 3, 9]) → 3
```

Sample Solution:

``` javascript
function array_count9(array) {
    return array.filter((num) => num === 9).length;
};
```

#### Problem 6 -

Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

You must solve this in O(1) time, which means without looping through the array

```
first_last6([1, 2, 6]) → true
first_last6([6, 1, 2, 3]) → true
first_last6([13, 6, 1, 2, 3]) → false
```

Sample Solution:

``` javascript
function first_last6(array) {
    return array[0] == 6 || array[array.length -1] == 6;
}
```

#### Problem 7 -

Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

```
common_end([1, 2, 3], [7, 3]) → true
common_end([1, 2, 3], [7, 3, 2]) → false
common_end([1, 2, 3], [1, 3]) → true
```

Sample Solution: 

``` javascript
function common_end(array1, array2) {
    return array1[0] == array2[0] || array1[array1.length -1] == array2[array2.length -1];
}
```

#### Problem 8 -

Given an array of ints with a length of 3, return a new array with the elements in reverse order.

```
reverse3([1, 2, 3]) → [3, 2, 1]
reverse3([5, 11, 9]) → [9, 11, 5]
reverse3([7, 0, 0]) → [0, 0, 7]
```

``` javascript
function reverse3(array) {
    return array.reverse();
}
```

#### Problem 9 -

Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

```
middle_way([1, 2, 3], [4, 5, 6]) → [2, 5]
middle_way([7, 7, 7], [3, 8, 0]) → [7, 8]
middle_way([5, 2, 9], [1, 4, 5]) → [2, 4]
```

Sample Solution:

``` javascript
function middle_way(arr1, arr2) {
    return [arr1[1], arr2[1]];
}
```

#### Problem 10 -

Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

```
same_first_last([1, 2, 3]) → false
same_first_last([1, 2, 3, 1]) → true
same_first_last([1, 2, 1]) → true
```

Sample Solution:

``` javascript
function same_first_last(arr) {
    return arr.length >= 1 && arr[0] == arr[array.length -1];
}
```

#### Problem 11 - 

Given an array of ints, return a new array containing only the odd numbers in the same order that they appeared in the original array.

```
find_odds([1,2,3,4,5,6]) → [1,3,5]
find_odds([7,1,9,8,5,2,4,6]) → [7,1,9,5]
find_odds([2,4,6,7]) → [7]
```

Sample Solution: 

```javascript
function find_odds(arr) {
   return arr.filter((num) => num % 2 === 1);
}
```

#### Problem 12 - 

Given an array of ints, return the first number that is greater than 5. Assume that an element greater than 5 exists. 

```
greater_than_five([4,5,6]) → 6
greater_than_five([1,7,5,8,9]) → 7
greater_than_five([9,0,2]) → 9
```

Sample Solution: 

``` javascript
function greater_than_five(arr) {
   return arr.find((num) => num > 5);
}
```

#### Problem 13 - 

Given an array of ints, return true if every element in the array is even. 

```
even_elements([2,4,6,8]) → true
even_elements([1,2,3,4]) → false
even_elements([8,4,3,2]) → false
```

Sample Solution: 

``` javascript
function even_elements(arr) {
   return arr.every((num) => num % 2 === 0);
}
```

#### Problem 14 - 

Given an array of ints, return true if at least one element in the array is divisible by 3. 

```
elem_divisible_by_three([3,6,9]) → true
elem_divisible_by_three([1,2,4,5]) → false
elem_divisible_by_three([5,9,4,2]) → true
```

Sample Solution: 

``` javascript
function elem_divisible_by_three(arr) {
   return arr.some((num) => num % 3 === 0);
}
```

#### Problem 15 - 

Given an array of ints, return a new array where each value in the original array was incremented by 1. 

```
array_plus_one([4,8,2]) → [5,9,3]
array_plus_one([7,3,6,3,6,8,2]) → [8,4,7,4,7,9,3]
array_plus_one([1,2,3,4]) → [2,3,4,5]
```

Sample Solution: 

``` javascript
function array_plus_one(arr) {
   return arr.map((num) => num + 1);
}
```

#### Problem 16 - 

Given an array of ints, return a new array that includes only the first 3 elements of the original array. You can assume the original array has at least 3 elements. 

```
first_three([1,2,3,4]) → [1,2,3]
first_three([5,7,2,5,6]) → [5,7,2]
first_three([4,4,4]) → [4,4,4]
```

Sample Solution: 

``` javascript
function array_plus_one(arr) {
   return arr.slice(0,3);
}
```

#### Problem 17 - 

Given an array of ints, return true if the length of the array is odd.

```
odd_length([1,2,3]) → true
odd_length([5,7,2,4,7,4]) → false
odd_length([7,4,2,7,8]) → true
```

Sample Solution: 

``` javascript
function odd_length(arr) {
   return arr.length % 2 === 1
}
```

#### Problem 18 (Challenge) - 

Given an array of ints, return a new array that includes the even elements in the reverse order that they had in the original array. 

```
reversed_evens([4,6,2,8]) → [8,2,6,4]
reversed_evens([7,3,8,1,5,2]) → [2,8]
reversed_evens([6,9,8,3,4,6]) → [6,4,8,6]
```

Sample Solution: 

``` javascript
function reversed_evens(arr) {
   return arr.filter((num) => num % 2 === 0).reverse()
}
```

#### Problem 19 (Challenge) - 

Given an array of ints, return the quantity of odd numbers in the original array. These numbers do not need to be unique.  

```
count_odds([1,2,3,4]) → 2
count_odds([5,3,2,7,8,3]) → 4
count_odds([8,6,4]) → 0
```

Sample Solution: 

``` javascript
function count_odds(arr) {
   return arr.filter((num) => num % 2 === 1).length
}
```

#### Problem 20 (Challenge) - 

Given 2 arrays of ints, return one array that contains all elements from both arrays that are divisible by 5. The solution array should have elements in the same order as the original arrays with all of the first array's elements coming before the second array's elements.

```
combine_fives([5,11,15], [1,10,20,21]) → [5,15,10,20]
combine_fives([1,2,3], [5,10,15]) → [5,10,15]
combine_fives([10,16,5,25], [10,16,5,25]) → [10,5,25,10,5,25]
```

Sample Solution: 

``` javascript
function combine_fives(arr1, arr2) {
   return arr1.filter((num) => num % 5 ===0).concat(arr2.filter((num) => num % 5 ===0))
}
```
