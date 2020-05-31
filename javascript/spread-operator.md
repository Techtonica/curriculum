# Spread Operator in JavaScript

## Projected time

About 40-50 minutes

- 15 min for spread operator
- 25 min for examples

## Spread operator
Spread operator allows an iterable such as strings, objects, array and sets to spread or expand individually inside a receiver.

The **syntax** of spread operator is `[...value]`.

## Why it is useful?
+ We can merge two objects together using spread operator.
Example:  
```
let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {d: 4, e: 5, f: 6}
let merge = {...obj1, ...obj2} 
```
**Output:** merge is {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

+ Spread operator with object is used to make copy of existing object or to make a new object with properties.

## Examples

### Simple object

Given this object we can use the object spread syntax.

```javaScript
const obj = {
    name: 'AppDividend',
    author: 'Krunal Lathiya'
};
const combined = {
    ...obj,
    age: 25
};
console.log(combined);
```
**Output:**{name: 'AppDividend', author: 'Krunal Lathiya' , age: 25}

### Arrays


#### normal array concat() method 

```javaScript
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = arr.concat(arr2); 
  
console.log(arr); // [ 1, 2, 3, 4, 5 ] 
```

#### spread operator doing the concat job 

```javaScript
let arr = [1,2,3]; 
let arr2 = [4,5]; 
  
arr = [...arr,...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5 ] 
```

#### spread operator for copying 

```javaScript 
let arr = ['a','b','c']; 
let arr2 = [...arr]; 
  
console.log(arr); // [ 'a', 'b', 'c' ] 
  
arr2.push('d'); //inserting an element at the end of arr2 
  
console.log(arr2); // [ 'a', 'b', 'c', 'd' ] 
console.log(arr); // [ 'a', 'b', 'c' ] 
```

#### copying without the spread operator 

```javaScript
let arr = ['a','b','c']; 
let arr2 = arr; 
  
console.log(arr2); // [ 'a', 'b', 'c' ] 
```
[From geeksforgeeks](https://www.geeksforgeeks.org/javascript-spread-operator/)

### Spread in object literals

The spread operator copies enumerable properties from a provided object onto a new object. In object literals, merging of objects is now possible using a shorter syntax than [Object.assign()]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)


```JavaScript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

## Array slice method

The `slice()` method returns the selected elements in an array, as a new array object. The `slice()` method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
The **syntax** of slice method is `array.slice(start, end)`.

### Example:

#### Add Element(s) to the Middle of an Array Using splice()
```
array.splice( start, deleteCount [, item1 [, item2 [, ...] ] ] )
```

### The Slice method takes 2 arguments.

**1st Argument:** Specifies from where the selection should be started.

For Example:

```
var arr1 = [1,5,8,9];
arr1.slice(1); // [5,8,9]
From the first index (5) it will return the elements.
```

**2nd Argument:** Specifies at which level the endpoint should be. If you didn’t put this in the parenthesis while calling the slice method, it will return the elements from the starting index to the end of the array.

```
var arr1 = [1,5,8,9];
console.log(arr1.slice(1,3));
//[ 5, 8 ]
```

If you put a negative number while calling, the selection will be selected from the end of the array.

```
var arr1 = [1,5,8,9];
console.log(arr1.slice(-2));
//[ 8, 9 ]
```

Note: Slice always returns the selected elements from the array.

Slice won’t change the array. The array remains intact. See the below Example:

```
var arr1 = [1,5,8,9];
arr1.slice(2);
console.log(arr1);
// [ 1, 5, 8, 9 ]
```

## Independent Practice

### Nested Object

Rewrite the following code using spread syntax.

```javaScript
const arr1 = ['a','b', 'c'];
const arr2 = ['a.foo', 'b.bar', 'c.baz'];

let result = {};

const insertAggs = (agg, result) => {

  while (result.aggs) {
    result = result.aggs
  }

  result.aggs = agg;
}

for (let i = 0; i < arr1.length; i++) {
  const aggName = arr1[i];
  const field = arr2[i];
  const agg = {
      [aggName]: {
        terms: {
          field
        }
      }
    };

  result.aggs ? insertAggs(agg, result) : result.aggs = agg;
}
}
```
[from freecodecamp](https://www.freecodecamp.org/forum/t/how-do-i-build-a-nested-object-in-javascript-dynamically/304543/3)

## Challenges
1. [Write a function that uses spread as the solution ?](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place)
2. [Write a function that uses slice as the solution ?](https://curt-park.github.io/2018-09-13/algorithm-max-slice-sum/) 
(**Note:**  The example code here is in python, but you should still follow the directions)

## Additional Materials

- [Spread-Operator Playground](https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun)



