# Object-Oriented Programming

### Projected Time
3 hours

### Prerequisites
Basic understanding of JavaScript.

### Motivation
Principles of object-oriented programming (aka "OO") help developers to organize and abstract their code.  It's really a way of thinking about software, and how to write it to make it more reusable.

### Objective
**Apprentices will be able to**:
- Create an object
- Understand some of the basic concepts of object-oriented programming
- Start developing an understanding of objects and classes

### Materials
- [Object-oriented programming — the basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Classes in JavaScript](https://javascript.info/class)

### What is an Object?
An object is a thing that has properties.  This sounds simple, but it's actually very abstract!  To help flesh this out, think of an example software application that keeps track of books, such as for a library.  In this application, a book can be thought of as an *object* that has certain properties like title, author, and whether it's on the shelves.

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

### What is a Class?
You can think of a class as a blueprint for an object.  In the example above, the `book` object could be created from this class:

```
class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
  }
}
```

When you *instantiate* a class, that means you are creating an object from a class, like this:

`var myBook = new Book(55234, "Principles of OO Design", "Barbara", "Liskov");`

### Concepts of Object-Oriented Programming

#### Encapsulation
*Encapsulation* means that properties that make sense together are all together in a single object.  In the example above, all the information about a book are encapsulated in the `book` object and all the information about a borrower are encapsulated in the `borrower` object.  Properties about a book are not stored inside a `borrower` object, and vice versa.

#### Inheritance
*Inheritance* is a way for objects to inherit properties from other objects, using a class hierarchy.

For example, let's say that our library doesn't just have books, but they also have audiobooks on DVD to loan out.  It's possible we can create an `AudioBook` class, and this will have properties like `title`, `authorFirstName` and `authorLastName` just like the `Book` class:

```
class AudioBook {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.lengthInMinutes = 90;
  }
}
```

You'll see that the `AudioBook` class is exactly like the `Book` class but with a `lengthInMinutes` property added.  Rather than constructing it this way, we can reuse code in the `Book` class instead by making `AudioBook` a *type*, or subclass, or `Book`:

```
class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
  }
}

var myAudioBook = new AudioBook(55234, "Principles of OO Design", "Barbara", "Liskov", 206);
```

### Mini Lesson (JavaScript objects syntax)
[Slides](https://docs.google.com/presentation/d/1N2eDw84BqmcqvNDjtQfNEF_7PO91z-IHTR44QXt3-oI/edit#slide=id.p)
[Audio Slides](https://drive.google.com/file/d/14c7KrecyuHysmXEjzTCFixCVUE3aZMqh/view?usp=sharing)

### Independent Practice
Come up with an idea of a somewhat complex software application.  Brainstorm/diagram what class hierarchies you might use when writing the application.

### Challenge
Extend the "Independent Practice" exercise above by brainstorming the different properties and methods that might exist in your classes.  Write the code fo these classes.  Write some code that instantiates the classes.

### Check for Understanding
Explain the diagram of your classes to a partner.  Discuss if there are other classes that might make more sense.
