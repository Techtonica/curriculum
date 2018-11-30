# Javascript 7 - Object-Oriented Programming

### Projected Time
3.5 hours

### Prerequisites
- [Javascript Lesson 1](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-1.md)
- [Javascript Lesson 2](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-2.md)
- [Javascript Lesson 3](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-3.md)
- [Javascript Lesson 4](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-4.md)
- [Javascript Lesson 5](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-5.md)
- [Javascript Lesson 6 - Object Literals](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-6-object-literals.md)

### Motivation
- Principles of object-oriented programming (aka "OO") help developers to organize and abstract their code. It's really a way of thinking, about how code and data can interact, and how to write code to make it more reusable.

### Objectives
**Participants will be able to:**
- Understand some of the main concepts of object-oriented programming
- Start developing an understanding of objects and classes

### Specific Things To Teach
- Classes and objects
- OOP (Object-Oriented Programming)

### Materials
- [Lesson Slides](https://docs.google.com/presentation/d/1VaDfjxiYPZHRa7QFPMSX6M6KwR6V66HchHKAve9baTg/edit#slide=id.p)
- [Audio Slides](https://drive.google.com/file/d/14c7KrecyuHysmXEjzTCFixCVUE3aZMqh/view?usp=sharing)
- [Object-oriented programming — the basics - Mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [More about Classes in JavaScript](https://javascript.info/class)

### Lesson

#### Refresher: What is an Object?

If you recall from [Javascript 6 - Object Literals](https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-6-object-literals.md)-
> An object is a thing that has properties. This sounds simple, but it's actually very abstract! To help flesh this out, think of an example software application that keeps track of books, such as for a library. In this application, a book can be thought of as an object that has certain properties like title and author.
> 
> For example:
```
let book = {
  "id": "827392838",
  "authorFirstName": "Jane",
  "authorLastName": "Doe",
  "title": "The Wonderful World of JavaScript",
};
```

> In the same example software application, we might also want to keep track of people who will borrow library books:
```
let borrower = {
  "id": "9002",
  "firstName": "Syma",
  "middleInitial": "N",
  "lastName": "Tec",
  "phoneNumber": "(415) 123-1234",
};
```

Properties on an object are sometimes also referred to as "key-value pairs."  Every property has a name (aka the key), "firstName", and a value, "Jane".

#### What is a Class?
You can think of a class as a blueprint, or template, for creating an object. In the example above, the `book` object could be created from this class:

```
class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
  }
  summary() {
    return this.title + " ("+this.authorLastName+", "+this.authorFirstName+")";
  }
}
```

A class is the set of properties that describe an item, properties that make sense belonging all together in a single object. In the example above, all the information about a book is contained in the `book` object and all the information about a borrower is contained in the `borrower` object. Properties about a book are not stored inside a `borrower` object, and vice versa.

Methods (aka functions) can be part of objects too, you can think of them as functions that are attached (or bound) to the object. For example, a method called `summary()` can return a one-line summary about a book.  Or, a method called `checkOut()` would make sense on a `borrower` object. It would not be relevant for a `borrower` object to have a method `summary()`, because the `borrower` object does not contain any text that needs to be summarized.

This process of deciding what properties and methods belong to a particular class is sometimes called "abstraction" and is all part of the object-oriented programming experience.  It is very similar to the thought process by which we decide the columns that go into a database table.  A table called `books` would probably have very similar columns as the properties found in the `Book` class.

#### Creating objects from a class

When you *instantiate* an object from a class, using the "new" keyword, that means you are creating a new object, using the class as a template, like this:

`let myBook = new Book(55234, "Principles of OO Design", "Barbara", "Liskov");`

Notice the function named "constructor" in the class definition, above?  That is the function which is called when you use the "new" keyword with a class name. The values that you pass in parentheses become available as the named parameters list in the constructor function (id, title, authorFirstName, authorLastName).

After instantiating the Book as myBook, you can inspect it from the console-

```
> console.log(myBook.authorLastName);
'Liskov'
```

#### The `this` keyword

`this` is a special keyword in JavaScript which refers to the current object instance.  When you create an object with the `new` keyword, the code in your methods (functions) can refer to properties on the current instance using `this`. In the example above, in the `Book` class, the `constructor`  method uses `this` to refer to the object being constructed (via `new`) and the `summary` method refers to the object that the code is currently working with.

Why this matters: you may have an many `Book` objects, and want to print the summary for each one-

```
> let books = [];
> books[0] = new Book(12345, "Why Didn't They Ask Evans?", "Agatha", "Christie");
> books[1] = new Book(12346, "The Long Goodbye", "Raymond", "Chandler");
> books[2] = new Book(12347, "Decline and Fall", "Evelyn", "Waugh");
```

Now, test the result-
```
> console.log(books[0].summary());
'Why Didn\'t They Ask Evans? (Christie, Agatha)'
> for(let i=0; i<3; i++) {
...   console.log(books[i]);
... }
```

Because the `books` array contains three `Book` definitions, and we asked to refer to just one (`books[0]`), inside the `.summary()` method the `this` keyword "knows" to point to the correct instance of the `Book` class.


#### Concepts of Object-Oriented Programming

##### Encapsulation

*Encapsulation* is the practice of keeping all of the things necessary to interact with a class in a single place.  For instance, by providing a set of methods on an object, you are exposing the actions that somebody might take on it. This will make it easier for others to use your code and give you the ability to prevent others from misuse.

Encapsulation means that all the actions that we might take out on an object exist in one place. For instance, if a `Borrower` wanted to check out a book, we could use a `checkOut` method on that object to perform the action. As a user of this class, all we need to know is that this method takes a book and then the method will perform the necessary actions to check out our book.

```
class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

  checkOut(book) {
    // Does some stuff...
  }
}
```

##### Inheritance
*Inheritance* is a way for objects to inherit properties and methods from other objects.

For example, let's say that our library doesn't just have books, but they also have audiobooks on CD to loan out. It's possible we can create an `AudioBook` class, and this will have properties like `title`, `authorFirstName` and `authorLastName` just like the `Book` class:

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

You'll see that the `AudioBook` class is exactly like the `Book` class but with a `lengthInMinutes` property added. Rather than constructing it this way, we can __reuse code__ in the `Book` class instead by making `AudioBook` a *child*, or subclass, or `Book`:

```
class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
  }
}

let myAudioBook = new AudioBook(55234, "Principles of OO Design", "Barbara", "Liskov", 206);
```

The relationship between `AudioBook` as the parent class and `Book` as the child class comprises a *class hierarchy*. A class hierarchy can go on for multiple levels of parents and children, and parents can have many children. For example the library might have e-books--an `ElectronicBook` class which is also a child of `Book`, making it a sibling of `AudioBook`.

And what if our library has special items, like telescopes, to lend out?  We might want to add a parent above `Book`, called `LoanItem`. `Telescope` would be a subclass of `LoanItem`, at the same level as `Book`.

The entire class hierarchy would then look like this:

```
       LoanItem
         /\
        /  \
       /    \
      /      \
Telescope    Book
              /\
             /  \
            /    \
           /      \
     AudioBook   ElectronicBook
```

##### Overriding

*Overriding* happens when a subclass changes a value or behavior inherited from its parent class. For example, let's say that in our library application, every object that can be borrowed has a `renewalLimit` property, which is the maximum amount of times one borrower can renew a loan.

The `Book` class might look like this:

```
class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.renewalLimit = 5;
  }
}
```

Let's say that audiobooks, however, are in high demand and in short supply. So, the library might only want to let borrowers renew an audiobook loan once. In this case, the `AudioBook` class, which still `extends` (inherits from) the `Book` class, can look like this:

```
class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
    this.renewalLimit = 1;
  }
}
```

Here the `AudioBook` class is overriding the `renewalLimit` property that it inherited from `Book`. While `Book` objects have a `renewalLimit` value of 5, `AudioBook` objects have a `renewalLimit` of just 1.

##### Polymorphism

*Polymorphism* is the ability to get different behaviors from objects even when __the same method is being called__. When we use polymorphism, we may not even know the subclass of the object we are accessing. This is because of inheritance: an object created from a subclass will have all the properties and methods inherited from any parent class in the hierarchy. And as long as we use a property or method that exists in a parent class, we don't need to actually know the subclass of the object.

To explore this, let's say that our `Borrower` class has a method called `checkOut()`. It takes a single argument, which is an object of type `Book` or any subclass of `Book`. The purpose of this method is to check out a book from the library by creating a new `loan` object.

```
class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

  checkOut(book) {
    let loan = new Loan(this, book);
  }
}
```

Here is the `Loan` class:

```
class Loan {
  constructor(borrower, book) {
    this.id = autoincrement();  // autoincrement is a method we defined elsewhere in the application
    this.bookId = book.id;
    this.borrowerId = borrower.id;
    this.borrowedDate = new Date();
    this.dueDate = book.calculateDueDate(borrowedDate);
  }
}
```

Notice that the loan's `dueDate` property is populated by a method called `calculateDueDate()` which belongs to the `book` object. The `Book` and `AudioBook` classes both *implement* this method. But let's say the calculation is different, because a book can be lent out for 3 weeks while an audiobook can be lent out for 2 weeks.

```
class Book {
  ...
  
  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 21);  // 21 days is 3 weeks
  }
}

class AudioBook {
  ...
  
  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 14);  // 14 days is 2 weeks
  }
}
```

In this case, when the `loan` object is being created, the `Loan` class constructor has __no idea what subclass is being passed in__. It could be an object from the `Book` class, or it could be an object from the `AudioBook` class. Yet the `Loan` constructor knows that whatever object is passed in has a `calculateDueDate()` method, because *all subclasses of `Book`* will either inherit that method as is, or override it, as in the case of `AudioBook`.

The `Loan` constructor is using the `calculateDueDate()` method polymorphically. It's the same method name, regardless of the subclass. But the behavior differs: in the case of a `Book` object, the value returned will be 3 weeks from `borrowedDate`; in the case of an `AudioBook` object, the value return will be 2 weeks from `borrowedDate`.

### Demonstration
Instructor demonstrates in the video walkthrough how to work with a Class in JavaScript.

### Independent Practice
Come up with an idea of a somewhat complex software application. Brainstorm/diagram what class hierarchies you might use when writing the application.

### Challenge
Extend the "Independent Practice" exercise above by brainstorming the different properties and methods that might exist in your classes. Write the code fo these classes. Write some code that instantiates the classes.

### Check for Understanding
Explain the diagram of your classes to a partner. Discuss if there are other classes that might make more sense.
