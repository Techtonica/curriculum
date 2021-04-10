# Modern Features of JavaScript

### Projected Time

About 2 hours

- 45 minutes for the video walkthrough of the slides
- 20 minutes for the Group Practice
- 10 minutes for Check for Understanding

### Prerequisites

- Techtonica's JS workshop
- [Basic JS practice](https://github.com/Techtonica/curriculum/blob/main/javascript/basic-js-practice.md)


### Motivation

ECMAScript 2015, or ES6 introduced many important and useful features that modernized the JavaScript language and helps us to speed the development process. 

### Objectives

**Participants will be able to:**

- Take advantage of ES6's new default params.
- Use spread operator with arrays, functions and objects.
- Know the difference between spread and rest operator. 
- Use of Destructuring Assignment

### Supplemental Materials

- [MDN has tons of info](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [ES6 Tutorial](https://www.youtube.com/watch?v=WZQc7RUAg18)


### Lesson

[Modern JS Features slides](https://docs.google.com/presentation/d/138TkIVXTaRS3ciGYZ8A62q1QVaoA0ACcTmqVDjFv8-4/edit#slide=id.gced263eb5d_0_167)
### Things to Remember

- **No browser fully supports ES6**, to check browser support [Can I Use](https://caniuse.com/) is a great resource. 


## Default Params
The default param is a way to set default values when function parameter has no or undefined values. 

## Example
Let's look at a function multiply, which takes a and b as parameters.
//old javascript
```javascript
function multiply(a,b) {
    return a * b;
}
multiply(5, 6) // 30
```
What if, we forget to pass value for b? We'll get NaN.
To avoid getting NaN, we can have a default value set for b. 
```javascript
function multiply(a,b) {
    b = typeof b !== 'undefined' ? b:2;
    return a * b;
}
multiply(5) // 10 
```
Here, I've used JS ternary operator to check the condition for b. If b has an undefined value, then the default value of 2 is assigned to b. When we call the function with 5, we'll get 10. 

#### Same Code With ES6 
```javascript
const multiply = (a, b = 10) => {
    return a * b;
}
multiply(5) // 50.
```
In the example above, if no value is passed for b, i.e if b is undefined, it'll get a default value of 10. This is a much nicer and shorter syntax. 

## Spread Operator
The Spread (...) operator is a useful and newer syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.
## Some scenarios where Spread is useful:
- Copying an array
- Concatenating or combining arrays
- Merge two Objects.

## Examples
### Spread in Function Calls
We can use Math.max to get the greatest number from a list.
```javascript
Math.max(2,3,4,5,6) // 6
```
Here, Math.max is expecting separate arguments to be passed in and it'll give us the maximum value. But, what if we use Math.max on an array?
```javascript
Math.max([2,3,4,5]); // Nan
```
Here, we got NaN because Math.max is expecting seperate values each one being a number. Luckily we have Spread to the rescue. Spread syntax uses three dots ... to spread the array as seperate arguments.

```javascript
Math.max(...[2,3,4]); // 4 (spread expands array into seperate arguments)
```
### Spread with Arrays
Spread in array literals creates a new array using an existing array. It basically spreads the elements from one array into a new array.
Let's look an example -
Here, I've 2 arrays primaryColors and secondaryColors. allColors array contain all the elemnts from primaryColors and secondaryColors. ... spread the values into seperate arguments. allColors contains copy of primaryColors and secondarycolors but the original arrays remains unchanged! 
```javascript
const primaryColors = ['red', 'green', 'blue'];
const secondaryColors = ['purple','pink', 'crimson'];
const allColors = [...primaryColors, ...secondaryColors] // (6)["red", "green", "blue", "purple", "pink", "crimson"]
```
### Spread with Objects
Spread in object literal copies properties from one object into another object. In past, we've used Object.assign to copy properties from one object to another. Spread makes copying more easy!
```javascript
const personA = {
    favColor:"pink"
}
const personB = {
    favFood:"pasta"
}
const info = {...personA, ...personB}
console.log(info); // {favColor: "pink", favFood: "pasta"}
```
In case of conflict where both objects have similar properties, order matters! 
```javascript
const personC = {
    favColor:"pink",
    favPet:"cat"
}
const personD = {
    favFood:"pasta",
    favPet:"dog"
}
const anotherInfo = {...personA, ...personB } // {favColor: "pink", favPet: "dog", favFood: "pasta"}
```
## Rest parameters...
Rest parameters allows a function to accept an indefinite numbers of arguments as an array. Rest looks like spread, but it’s NOT spread. Before taking a look at Rest, let's take a look at **Arguments Object** which  is an array like object but it doesn't have access to array like methods like map, reduce. Also, it's not available with arrow function. It automatically hold all the values passed to the function.
## Examples
```javascript
function sum() {
    console.log(arguments) // collects all arguments passed to the function. 
}
sum(2,3,4,5) // Arguments(3) [2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```
It contains all values that we passed into the function by order, but we can't use array like methods like `reduce`. Here, let's write a function that will give sum of all the elements in the array.
```javascript
function sum() {
    return arguments.reduce((total, acc) => total + acc);
} 
sum(2,3,4,5,6) // arguments.reduce is not a function
```
This is where Rest comes in. Rest  collects all remaining arguments or rest of the arguments and puts them into an array. The dots means gather the rest of the parameters into an array, so the rest parameters must be at the end. Rest is the opposite of Spread. In spread we're spreading things out, but in Rest we're collecting all things into a single parameter. 

```javascript
function sumOfAllArray (...arr) {
    let total = 0;
    for (let i of arr) total +=i;
    return total;
}
console.log("The sum of array is: ", sumOfAllArray(3,4,5));  // 12
```

## Array Destructuring Assignment
Destructuring assignment syntax allows us to unpack or extract or single out values from arrays, properties from objects into distinct variables. With array destructuring, we can copy items into variables without modifying the original array.

## Examples
### Array Destructuring
Let's look at numbers array. variable max contains the first element of the array and secondMax contains the second element of the array and so on. Old way of doing it would be: 
```javascript
let numbers = [6, 5, 4, 3]; 
let max = numbers[0];
let secondMax = numbers[1];
```
With ES6 new syntax, extracting or sinling out values became much easier. Instead of doing arr[0] or arr[1] we can do:
```javscript
const [max, secondMax, ...lowerNumbers] = numbers;
console.log(max); // Here max is holding the value of numbers[0];
console.log(secondMax); // 5
console.log(lowerNumbers); // We've used spread to singling out the remaining values [4,3]
console.log(numbers); // numbers is unchanged.
```
### Object Destructuring
Object destructuring is the most powerful and useful syntax as in object order doesn't matter but in array order matters. 
```javascript
const user = {
    email:"renunikhilp@gmail.com",
    password:"12345",
    firstName:"Renu",
    lastName:"Shinde"
}
```
Here, I want to extract few properties from user object. Old way of doing it
```javascript
const email = user.email;
const lastName = user.lastName;
```
It is quite time consuming to do the same thing over and over again for all the properties. An easier way is to destructure is. Here we didn't change the original object in any ways, we just extracted the values from the user object.
```javascript
const {email, password} = user; //equivalent to saying const email = user.email;
console.log(email) // renunikhilp@gmail.com
```
## Test your knowledge
What do you expect to be the value of `second` after running the following code?

```javascript
let students = ['Tom', 'Jerry', 'Goofy', 'Felix'];
let [first, second, third] = students;
```
1. Tom
2. Goofy
3. **Jerry** 
4. Felix


**Instructions:** Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.

**The Start Code:**
```javascript
const fruits = ["apples", "bananas", "peach"];
const vegetables = ["corn", "spinach", "carrots"];
const produce = [];
console.log(produce);
```
