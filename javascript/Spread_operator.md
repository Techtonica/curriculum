# Spread Operator in javascript

## Projected time

About 30-40 minutes

- 15 min for spread operator
- 25 min for examples

## Spread operator
Spread operator allows an iterable such as strings, array and sets to spread or expand individually inside a receiver.

The **syntax** of spread operator is `var variable  = [...value]`.

## Why it is useful?
+ We can merge two objects together using spread operator.
Example:
```
let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {d: 4, e: 5, f: 6}
let merge = {...obj1, ...obj2} // merge is {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```
+ Spread operator with object is used to make copy of existing object or to make a new object with properties.

## Examples

### Simple object

Given this ```todoApp``` object we can use the object spread syntax and its properties into variables.

```javaScript
function todoApp(state = initialState, action) {
 switch (action.type) {
   case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter }
   default:
   return state
  }
}
```

#### Code without using Spread operator

```javaScript 
function todoApp(state = initialState, action) {
switch (action.type) {
 case SET_VISIBILITY_FILTER:
 return Object.assign({}, state, {
   visibilityFilter: action.filter
    })
  default:
  return state
  }
}
```
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

It copies own enumerable properties from a provided object onto a new object.In object literals merging of objects is now possible using a shorter syntax than Object.assign().

```javaScript
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
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

## Additional Materials

- [Spread-Operator Quiz](https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun)



