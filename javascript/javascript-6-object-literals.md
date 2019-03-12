# JavaScript 6 - Object Literals

### Projected Time
About 60 minutes
- 15 min - video walkthrough of slides
- 30 min - Independent Practice
- 15 min - Check for Understanding

### Prerequisites
- [Javascript Lesson 1](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-1.md)
- [Javascript Lesson 2](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-2.md)
- [Javascript Lesson 3](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-3.md)
- [Javascript Lesson 4](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-4.md)
- [Javascript Lesson 5](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-5.md)

### Motivation
- Object Literals are the most robust data type in JavaScript (and many other modern programming languages). Object literals allow us to store, look up, and change data efficiently.

### Objectives
**Participants will be able to:**
- Create Object Literals in Javascript
- Understand property-value pairs
- Assign values to properties with both dot-notation and bracket-notation
- Change the value associated with a property
- Delete property-value pairs

### Specific Things To Teach
- JavaScript's Object Literal syntax
- The concept of unordered property-value pairs
- How to access an Object Literal's data 
	- With dot-notation 
	- With bracket notation
- `Object.hasOwnProperty()`

### Supplemental Materials
- [Javascript Objects (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Javascript property names (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [Code.org video tutorial](https://www.youtube.com/watch?v=ZunUF_WGMb4)
- [Eloquent Javascript, The Secret Life of Objects ](https://eloquentjavascript.net/06_object.html)

### Lesson
[JavaScript VI (slides)](https://docs.google.com/presentation/d/1N2eDw84BqmcqvNDjtQfNEF_7PO91z-IHTR44QXt3-oI/edit#slide=id.p)
| [JS 6 Walkthrough Video of Slides](https://drive.google.com/file/d/1mKQOeNQsUtiy3-X8tBk81e3vakqr7AMY/view?usp=sharing)
#### What is an Object?
An object is a thing that has properties. This sounds simple, but it's actually very abstract!  To help flesh this out, think of an example software application that keeps track of books, such as for a library. In this application, a book can be thought of as an *object* that has certain properties like title and author.

For example:
```
var book = {
  "id": "827392838",
  "authorFirstName": "Jane",
  "authorLastName": "Doe",
  "title": "The Wonderful World of JavaScript",
};
```

In the same example software application, we might also want to keep track of people who will borrow library books:
```
var borrower = {
  "id": "9002",
  "firstName": "Syma",
  "middleInitial": "N",
  "lastName": "Tec",
  "phoneNumber": "(415) 123-1234",
};
```

To tie together a book and the borrower, we might want to have yet another object that represents the book loan:
```
var loan = {
  "bookId": "827392838",
  "borrowerId": "9002",
  "borrowedDate": "2018-08-26",
  "dueDate": "2018-09-26",
  "timesRenewed": 0,
}
```

### Things to Remember
- If a property name is composed of multiple words, the convention is to use CamelCase. 
- If a property name with spaces is absolutely required, then you'll only be able to use braket notation to access it's associated value. You won't be able to use dot-notation.
- Accessing the value of an Object Literal's properties with dot-notation makes the code easier to read and requires less typing. But bracket-notation allows for dynamic accessing, like what you do when you use a loop
- An Object Literal's values can be any data type, but its properties can only be strings
- Object Literals can be nested in complex ways
- All Object Literals come with some default methods, such as `.hasOwnProperty()`
- Never use reserved keywords for property names (like `function`, `var`, `switch`, etc.)

### Independent Practice 
- Work through [this interactive lesson on JavaScript Objects](https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/objects?action=resume_content_item).

### Check for Understanding
Explain your completed code from the above Codecademy lesson to a partner.
