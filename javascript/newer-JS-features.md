# Modern Features of JavaScript

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

## Lesson

### Things to Remember

- **No browser fully supports ES6**, to check browser support [Can I Use](https://caniuse.com/) is a great resource.

### Default Params

The default param is a way to set default values when the function parameter has undefined values.

#### Example

Let's look at a function multiply, which takes a and b as parameters.
//old javascript

```javascript
function multiply(a, b) {
  return a * b;
}
multiply(5, 6); // 30
```

What if, we forget to pass value for b? We'll get NaN.
To avoid getting NaN, we can have a default value set for b.

```javascript
function multiply(a, b) {
  b = typeof b !== 'undefined' ? b : 2;
  return a * b;
}
multiply(5); // 10
```

Here, I've used JS ternary operator to check the condition for b. If b has an undefined value, then the default value of 2 is assigned to b. When we call the function with 5, we'll get 10.

##### Same Code With ES6

```javascript
const multiply = (a, b = 10) => {
  return a * b;
};
multiply(5); // 50.
```

In the example above, if no value is passed for b, i.e if b is undefined, it'll get a default value of 10. This is a much nicer and shorter syntax.

### Spread Operator

The Spread (...) operator is a useful and newer syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.
**Some scenarios where Spread is useful:**

- Copying an array
- Concatenating or combining arrays
- Merge two objects

#### Examples

##### Spread in Function Calls

We can use Math.max to get the greatest number from a list.

```javascript
Math.max(2, 3, 4, 5, 6); // 6
```

Here, Math.max is expecting separate arguments to be passed in and it'll give us the maximum value. But, what if we use Math.max on an array?

```javascript
Math.max([2, 3, 4, 5]); // Nan
```

Here, we got NaN because Math.max is expecting seperate values each one being a number. Luckily we have Spread to the rescue. Spread syntax uses three dots ... to spread the array as seperate arguments.

```javascript
Math.max(...[2, 3, 4]); // 4 (spread expands array into seperate arguments)
```

##### Spread with Arrays

Spread in array literals creates a new array using an existing array. It basically spreads the elements from one array into a new array.
Let's look an example -
Here, I've 2 arrays primaryColors and secondaryColors. allColors array contain all the elemnts from primaryColors and secondaryColors. ... spread the values into seperate arguments. allColors contains copy of primaryColors and secondarycolors but the original arrays remains unchanged!

```javascript
const primaryColors = ['red', 'green', 'blue'];
const secondaryColors = ['purple', 'pink', 'crimson'];
const allColors = [...primaryColors, ...secondaryColors]; // (6)["red", "green", "blue", "purple", "pink", "crimson"]
```

##### Spread with objects

Spread in object literal copies properties from one object into another object. In past, we've used Object.assign to copy properties from one object to another. Spread makes copying more easy!

```javascript
const personA = {
  favColor: 'pink'
};
const personB = {
  favFood: 'pasta'
};
const info = { ...personA, ...personB };
console.log(info); // {favColor: "pink", favFood: "pasta"}
```

In case of conflict where both objects have similar properties, order matters!

```javascript
const personC = {
  favColor: 'pink',
  favPet: 'cat'
};
const personD = {
  favFood: 'pasta',
  favPet: 'dog'
};
const anotherInfo = { ...personA, ...personB }; // {favColor: "pink", favPet: "dog", favFood: "pasta"}
```

### Rest parameters

`rest` parameters allows a function to accept an indefinite numbers of arguments as an array. `rest` looks like spread, but it’s NOT spread. Before taking a look at `rest`, let's take a look at [`arguments` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) which is an array like an object but it doesn't have access to array like methods like `map()` and `reduce()`. Also, it's not available with an _arrow function_. It automatically holds all the values passed to the function.

#### Examples

```javascript
function sum() {
  console.log(arguments); // collects all arguments passed to the function.
}
sum(2, 3, 4, 5); // Arguments(3) [2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

It contains all values that we passed into the function by order, but we can't use array like methods like `reduce`. Here, let's write a function that will give sum of all the elements in the array.

```javascript
function sum() {
  return arguments.reduce((total, acc) => total + acc);
}
sum(2, 3, 4, 5, 6); // arguments.reduce is not a function
```

This is where `rest` comes in. `rest` collects all remaining arguments, or the _rest_ of the arguments, and puts them into an array. The dots mean "gather the rest of the parameters into an array", so the `rest` parameters must be at the end. `rest` is the opposite of _spread_. In _spread_, we're spreading things out, but in `rest` we're collecting all things into a single parameter.

```javascript
function sumOfAllArray(...arr) {
  let total = 0;
  for (let i of arr) total += i;
  return total;
}
console.log('The sum of array is: ', sumOfAllArray(3, 4, 5)); // 12
```

### Destructuring Assignment

Destructuring assignment syntax allows us to unpack or extract or single out values from arrays, properties from objects into distinct variables. With array destructuring, we can copy items into variables without modifying the original array.

#### Examples

##### Array destructuring

Let's look at numbers array. Variable `max` contains the first element of the array and `secondMax` contains the second element of the array and so on. Old way of doing it would be:

```javascript
let numbers = [6, 5, 4, 3];
let max = numbers[0];
let secondMax = numbers[1];
```

With ES6 new syntax, extracting or singling out values becomes much easier. Instead of doing `arr[0]` or `arr[1]` we can do:

```javscript
const [max, secondMax, ...lowerNumbers] = numbers;
console.log(max); // Here max is holding the value of numbers[0];
console.log(secondMax); // 5
console.log(lowerNumbers); // We've used spread to singling out the remaining values [4,3]
console.log(numbers); // numbers is unchanged.
```

##### Object destructuring

Object destructuring is the most powerful and useful syntax as in object order doesn't matter but in array order matters.

```javascript
const user = {
  email: 'johndoe@gmail.com',
  password: '12345',
  firstName: 'John',
  lastName: 'Doe'
};
```

Here, I want to extract few properties from user object. Old way of doing it

```javascript
const email = user.email;
const lastName = user.lastName;
```

It is quite time consuming to do the same thing over and over again for all the properties. An easier way is to destructure is. Here we didn't change the original object in any ways, we just extracted the values from the user object.

```javascript
const { email, password } = user; //equivalent to saying const email = user.email;
console.log(email); // renunikhilp@gmail.com
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

**The Starter Code:**

```javascript
const fruits = ['apples', 'bananas', 'peach'];
const vegetables = ['corn', 'spinach', 'carrots'];
const produce = [];
console.log(produce);
```

### Temporal API Features

Temporal API provides better date and time handling capabilities in JavaScript. We'll look at the classes: `PlainDate`, `PlainTime`, and `ZonedDateTime`.

### **PlainDate**
`PlainDate` represents a calendar date without any associated time or time zone.

```javascript
const date = Temporal.PlainDate.from('2024-12-25');
console.log(date.year); // 2023
console.log(date.month); // 12
console.log(date.day); // 25
```

### **PlainTime**
`PlainTime` represents a time of day without any associated date or time zone.

```javascript
const time = Temporal.PlainTime.from('14:30:00');
console.log(time.hour); // 14
console.log(time.minute); // 30
console.log(time.second); // 0
```

### **ZoneDateTime**
`ZoneDateTime` combines date, time, and time zone information.

```javascript
const zdt = Temporal.ZonedDateTime.from('2023-12-25T14:30:00+01:00[Europe/Paris]');
console.log(zdt.timeZone); // Europe/Paris
console.log(zdt.toString()); // 2023-12-25T14:30:00+01:00[Europe/Paris]
```

### Pipe Operator

The Pipe Operator (|>) allows for more readable chaining of function calls. With this operator, the value before it gets sent as input to the function that follows. You simply arrange the functions in the order you want them to act on the input.

**As the Pipeline Operator is an experimental feature and currently in stage 1 proposal, there is no support for currently available browsers and therefore is also not included in Node. However, one can use Babel (JavaScript Compiler) to use it.**

```javascript
const double = x => x * 2;
const increment = x => x + 1;

const result = 5 |> double |> increment; // Equivalent to increment(double(5))
console.log(result); // Outputs: 11
```

### Records and Tuples

Records and Tuples are immutable data structures. A Record is like an Object, and a Tuple is like an Array. Unlike Objects and Arrays, Records and Tuples cannot be modified once created. This immutability helps you avoid unintended side effects and makes your code more predictable.

**Records**

```javascript
const record = #{ name: 'Alice', age: 30 };
console.log(record.name); // Alice
```

**Tuples**

```javascript
const tuple = #[1, 2, 3];
console.log(tuple[0]); // 1
```


## Supplemental Materials

- [MDN has tons of info](https://developer.mozilla.org/)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [ES6 Tutorial](https://www.youtube.com/watch?v=WZQc7RUAg18)
- Check browser support on ["Can I Use"](https://caniuse.com/)
- [5 Exciting New JavaScript Features in 2024](https://www.sitepoint.com/new-javascript-ecmascript/)
- [Immutable Data Structures: Records and Tuples in ECMA](https://dev.to/wendyver/immutable-data-structures-records-and-tuples-in-ecma-2024-1n39)
