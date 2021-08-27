# Week 6 Assessment

## Topics

### Advanced JS

- Object-Oriented style Programming (OOP)
  - Class syntax
  - Inheritance (`extends`, `super`)
- Functional style Programming: Higher-Order Functions
  - Functions that take a function as an argument _or_ return a function
  - example accepting function as an argument: Array's `map` & `reduce`
  - example of functions that return functions: [Function Factories](https://medium.com/functional-javascript/higher-order-functions-78084829fff4)
  - If you like book learning, see [Chapters 1-4 of Mostly Adequate FP](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/)
- Recursion
  - A function that solves its problem by calling itself with different arguments
  - This can be a standalone function, e.g. fibonacci
  - more commonly, it's used in a Class that holds hierarchical data (CSS Selector Code Challenge)
- Jest testing
  - You should be able to run existing Jest tests
  - You should be able to write a new Jest test using `describe`, `it`, and `expect` functions
  - this skill was practiced in the Pair Activity & Eventonica

### HTTP (Concepts Only)

**You will not have to write code to make HTTP requests in JavaScript.**

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

- Promises / async
- RegEx (at least the patterns of creating them, you should still know what they are)
- CSS/jQuery/HTML
- No conceptual questions on JavaScript (i.e. no asking what closure is or what Promise is)
- All topics covered after Friday, 19 February 2021 are not included (e.g. Node, http.server, Express, JSON, REST, etc)

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
const weekendDay = new Day('2020-02-16');
sun.isTechtonicaDay();
// => false

const weekDay = new Day('2020-02-17');
weekDay.isTechtonicaDay();
// => true

const holiday = new Holiday('2020-02-17');
holiday.isTechtonicaDay();
// => false
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
const objsWithNames = [
  { name: 'Osito', age: 14 },
  { name: 'Bella', age: 8 }
];
namePlucker(objsWithNames);
// => ['Osito', 'Bella']
```

### Recursion

Given classes representing files and folders in a filesystem.

```js
/**
 * Base class for any item on disk.
 * Every item (folder or file) has a name
 */
class FilesystemItem {
  constructor(name) {
    this.name = name;
  }

  isFile() {
    return false;
  }

}

class Folder extends FilesystemItem {
  constructor(name, parentFolder) {
    super(name);
    this.contents = [];
    if (parentFolder) {
      parentFolder.addItem(this);
    }
  }

  getContents() {
    return this.contents;
  }

  addItem(fileOrFolder) {
    this.contents.push(fileOrFolder);
  }

  containsFile(name) {
    // TODO: implement
  }
}

class File extends FilesystemItem {
  constructor(name, parentFolder) {
    super(name);
    parentFolder.addItem(this);
  }

  isFile() {
    return true;
  }
}

const homeFolder = new Folder('home');

const desktopFolder = new Folder('Desktop', homeFolder);
const dotProfile = new File('.profile', homeFolder);

const raccoonPic = new File('raccoon.jpg', desktopFolder);


homeFolder.containsFile('raccoon.jpg') // => true (since it's in desktop folder, which is part of home folder)
homeFolder.containsFile('nonexistent') // => false
desktopFolder.containsFile('raccoon.jpg') // => true
desktopFolder.containsFile('.profile') // => false (since it's not in desktop, only its parent)

```

Write a function `containsFileNamed(folder, name)`

```javascript
containsFileNamed(home, '.profile');
// => true

containsFileNamed(desktop, '.profile');
// => false

containsFileNamed(desktop, 'raccoon.jpg');
// => true

containsFileNamed(home, 'Desktop');
// => false (because Desktop is a folder, not a file)

containsFileNamed(home, 'raccoon.jpg');
// => true
```

### Jest Testing

Write Jest test cases for the function below. Think of all the possible cases you might need to test.

```javascript
function calculateAge(birthDate) {
  const msDiff = Date.now() - birthDate;
  const ageDate = new Date(msDiff);
  return Math.abs(ageDate.getFullYear() - 1970);
}

describe('calculateAge()', function () {
  it('should do something', function () {
    expect(true).toBe(true);
  });
});
```

### HTTP

- What is the difference between a GET request and a POST request?
- Describe why a server responds with 404?
- A server responds with 599, which you've never seen before. What can you tell about this response even if you don't remember its exact meaning?
