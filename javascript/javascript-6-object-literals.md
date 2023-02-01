# JavaScript 6 - Object Literals

### Week 3 Keywords and Questions

- What is the syntax for declaring an Object?
- What are Complex Objects? Give an example.
- Explain some built-in Object Methods in JavaScript.
- What is a property of an Object?
- Differentiate between dot and bracket notation.
- How do you access nested object inside an array?


### Prerequisites

- [JavaScript 1 - Variables, Strings, Numbers Lesson](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions Lesson](/javascript/javascript-2-array-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans Lesson](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops Lesson](/javascript/javascript-4-loops.md)
- [JavaScript 5 - Switch Statements Lesson](/javascript/javascript-5-switch.md)

### Motivation

- Object Literals are important to object-oriented programming in JavaScript
- Object literals allow us to store related data, encapsulating it in a tidy package
- Using objects allows us to minimize global variables, which can cause issues when combining code

_What companies use object literals?_ Many companies need to enclose data into reusable packages.
An example would be Facebook, making an object to contain the information for a single user.

The object for a Facebook user may look something like this:

```
const person = {
  name: ['Sara', 'Crosby'],
  age: 35,
  gender: 'female',
  favoriteComment: function() {
    alert('Good morning!');
  };
}
```

For a more complex example, directly from Facebook, [check here](https://developers.facebook.com/docs/graph-api/reference/v5.0/object/likes)

### Objectives

**Participants will be able to:**

- Create Object Literals in JavaScript
- Understand property-value pairs
- Assign values to properties with both dot-notation and bracket-notation
- Change the value associated with a property
- Delete property-value pairs

### Specific Things to Learn

- JavaScript's Object Literal syntax
- The concept of unordered property-value pairs
- How to access an Object Literal's data
  - With dot-notation
  - With bracket notation
- `Object.hasOwnProperty()`

### Materials

- [JavaScript VI - Object Literals (slides)](https://docs.google.com/presentation/d/1N2eDw84BqmcqvNDjtQfNEF_7PO91z-IHTR44QXt3-oI/edit#slide=id.p)
- [JS 6 Walkthrough Video of Slides](https://drive.google.com/file/d/1mKQOeNQsUtiy3-X8tBk81e3vakqr7AMY/view?usp=sharing)
- [Interactive lesson on JavaScript Objects](https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/objects?action=resume_content_item)
- [Reference: JavaScript property names (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

### Lesson

#### What is an Object?

An object is a thing that has properties. This sounds simple, but it's actually very abstract! To help flesh this out, think of an example software application that keeps track of books, such as for a library. In this application, a book can be thought of as an _object_ that has certain properties like title and author.

For example:

```
let book = {
  "id": "827392838",
  "authorFirstName": "Jane",
  "authorLastName": "Doe",
  "title": "The Wonderful World of JavaScript",
};
```

In the same example software application, we might also want to keep track of people who will borrow library books:

```
let borrower = {
  "id": "9002",
  "firstName": "Syma",
  "middleInitial": "N",
  "lastName": "Tec",
  "phoneNumber": "(415) 123-1234",
};
```

To tie together a book and the borrower, we might want to have yet another object that represents the book loan:

```
let loan = {
  "bookId": "827392838",
  "borrowerId": "9002",
  "borrowedDate": "2018-08-26",
  "dueDate": "2018-09-26",
  "timesRenewed": 0,
}
```

### Things to Remember

- If a property name is composed of multiple words, the convention is to use camelCase.
- If a property name with spaces is absolutely required, then you'll only be able to use braket notation to access it's associated value. You won't be able to use dot-notation.
- Accessing the value of an Object Literal's properties with dot-notation makes the code easier to read and requires less typing. But bracket-notation allows for dynamic accessing, like what you do when you use a loop
- An Object Literal's values can be any data type, but its properties can only be strings
- Object Literals can be nested in complex ways
- All Object Literals come with some default methods, such as `.hasOwnProperty()`
- Never use reserved keywords for property names (like `function`, `var`, `switch`, etc.)

### Independent Practice

- Work through [this interactive lesson on JavaScript Objects](https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/objects?action=resume_content_item).

### Supplemental Materials

- [JavaScript Objects (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript property names (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [Code.org video tutorial](https://www.youtube.com/watch?v=ZunUF_WGMb4)
- [Eloquent JavaScript, The Secret Life of Objects ](https://eloquentjavascript.net/06_object.html)


