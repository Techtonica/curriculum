# Week 6 Assessment

## Topics

### Advanced JS

- Object-Oriented style Programming (OOP)
  - Prototype & Class syntax
  - Inheritance
- Functional style Programming: Higher-Order Functions
  - Functions that take a function as an argument _or_ return a function
  - example accepting function as an argument: Array's `map` & `reduce`
  - example of functions that return functions: [Function Factories](https://medium.com/functional-javascript/higher-order-functions-78084829fff4)
  - If you like book learning, see [Chapters 1-4 of Mostly Adequate FP](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/)
- Recursion
  - A function that solves its problem by calling itself with different arguments
  - examples: Fibonacci, our CSS Selector Code Challenge
- Promises
  - You do not need to know all its complexity
  - You should know that a Promise object has a `then()` function on it and how to use it
- Jasmine testing
  - Pair Activity & Eventonica

### HTTP (Concepts Only)

You will not write code to make HTTP requests in JavaScript.

- Common response status codes:
  - 200 OK
  - 201 Created
  - 302 Found (commonly called a "Redirect")
  - 404 Not Found
  - 500 Internal Server Error
- Status code ranges, e.g. what are 4xx vs 2xx?
- What is a header? What is one use of them? (You don't have to memorize the exact names of any)
  - Example answer: one common header sent in a request is `User-Agent` that contains a description of the browser (or command line program like curl) that is making the request
- What are the similarities and differences of a `GET` request vs. a `POST` request?

## Definitely Not Included

- RegEx (at least creating them, you should still know what they are)
- CSS/jQuery/HTML
- No conceptual questions on JavaScript (i.e. no asking what closure is or what Promise is)
- All topics covered after Monday, 10 February 2020 are not included (e.g. Node, http.server, Express, JSON, REST, etc)


## Example Questions

### OOP

#### Create a class `Day`
- Attribute `date`, a JS `Date` object
- Method isTechtonicaDay
  - returns `true` if M-F, `false` otherwise

#### Create a subclass of `Day` called `Holiday`
- `isTechtonicaDay` should return `true` regardless of day of week

Create an array of these objects to represent the week beginning with Sunday, 16 Feburary 2020.

```javascript
const sun; // = something
const week = [sun, mon, tue, wed, thu, fri, sat];

console.log(week.map((day) => day.isTechtonicaDay()));
// [false, false, true, true, true, true, false]
```
 

### FP

Write a function that creates another function called `createPlucker` that is very similar to our `extractProp` method from the previous assessment but that always retrieves the same property name.

```javascript
function createPlucker(propName) {
  // returns a function that takes in an array and
  //   returns an array of the values of each item's property named propName
}

const lengthPlucker = createPlucker('length');
const array = ['a', 'aa', 'aaa'];
lengthPlucker(array);
// => [1, 2, 3]

const namePlucker = createPlucker('name');
const objsWithNames = [{ name: 'Osito', age: 14 }, { name: 'Bella', age: 8 }];
namePlucker(objsWithNames);
// => ['Osito', 'Bella']
```

### Recursion

Given data representing files and folders in a filesystem.

```
home/
  desktop/
    raccoon.jpg
  .profile
```

```javascript
// this represents your .profile file
//   since it's a file (not a folder) it doesn't have any contents
//   but it does have data with the file's data
const dotProfile = {
  name: '.profile',
  data: "alias git...",
  isFolder: false
};

const raccoonPic = {
  name: 'raccoon.jpg',
  data: "101010",
  isFolder: false
};

// this represents your desktop
//   since it's a folder, it has contents which is an array containing
//    either other folders or files
const desktop = {
  name: 'Desktop',
  isFolder: true,
  contents: [raccoonPic]
}

const home = {
  name: 'home',
  contents: [dotProfile, desktop],
  isFolder: true
};

function containsFileNamed(node, name) {
  //...
}
```

Write a function `containsFileNamed(folder, name)`

```javascript
containsFileNamed(home, '.profile')
// => true

containsFileNamed(desktop, '.profile')
// => false

containsFileNamed(desktop, 'raccoon.jpg')
// => true

containsFileNamed(home, 'Desktop')
// => false (because Desktop is a folder, not a file)

containsFileNamed(home, 'raccoon.jpg')
// => true
```


### Promises

The `fetch` function provided by the browser returns a `Promise`. Its API looks like:

`fetch(url)` => Promise that resolves with the `Response`

`Response` object has properties, one of which is `status` (e.g. 200)

- Write a function that takes an array of URLs
- the function should use `fetch` to request all these URL's immediately, not waiting for any to finish before requesting the next
- Print the status code of each response as soon as it is known

```javascript
const someUrls = [
  'http://osito.org/bonito', 
  'https://example.com/some/important/path',
  'https://twitter.com/TackToneEeka'
]

function fetchAllUrls(urls) { 
  // ....
}
```

### Jasmine Testing

Write Jasmine test cases for the function below. Think of all the possible cases you might need to test.

```javascript
function calculateAge(birthDate) {
    let msDiff = Date.now() - birthDate;
    let ageDate = new Date(msDiff);
    return Math.abs(ageDate.getFullYear() - 1970);
}

describe("calculateAge()", function() {

  it("should do something", function() {
    expect(true).toBe(true);
  });

});
```


### HTTP

- What is the difference between a GET request and a POST request?
- Describe why a server responds with 404?
- A server responds with 599, which you've never seen before. What can you tell about this response even if you don't remember its exact meaning?

