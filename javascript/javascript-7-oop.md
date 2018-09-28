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
- Principles of object-oriented programming (aka "OO") help developers to organize and abstract their code. It's really a way of thinking about software, and how to write it to make it more reusable.

### Objectives
**Participants will be able to:**
- Understand some of the main concepts of object-oriented programming
- Start developing an understanding of objects and classes

### Specific Things To Teach
- Class and OOP

### Materials
- [Lesson Slides](https://docs.google.com/presentation/d/1VaDfjxiYPZHRa7QFPMSX6M6KwR6V66HchHKAve9baTg/edit#slide=id.p)
- [Audio Slides](https://drive.google.com/file/d/14c7KrecyuHysmXEjzTCFixCVUE3aZMqh/view?usp=sharing)
- [Object-oriented programming — the basics - Mozilla.org](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [More about Classes in JavaScript](https://javascript.info/class)

### Lesson

#### What is a Class?
You can think of a class as a blueprint, or template, for an object. In the example above, the `book` object could be created from this class:

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

#### Concepts of Object-Oriented Programming

##### Encapsulation
*Encapsulation* means that properties that make sense together are all together in a single object. In the example above, all the information about a book are encapsulated in the `book` object and all the information about a borrower are encapsulated in the `borrower` object. Properties about a book are not stored inside a `borrower` object, and vice versa.

Methods can be part of objects too, and the principle of encapsulation also applies to methods. For example, a method called `checkOut()` would make sense inside a `borrower` object. It would not be relevant for a `book` object to have that method, because the `book` object would never check anything out of the library.

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

var myAudioBook = new AudioBook(55234, "Principles of OO Design", "Barbara", "Liskov", 206);
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
    var loan = new Loan(this, book);
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

Notice that the loan's `dueDate` property is populated by a method called `calculateDueDate()` which belongs to the `book` object. The `Book` and `AudioBook` classes both *implement* this method. But let's say the calculation is different, because a book can be lent out for 3 weeks while an audiobook can be lent out for two weeks.

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

### Things to Remember
- If a property name is composed of multiple words, the convention is to use CamelCase. 
- If a property name with spaces is absolutely required, then you'll only be able to use braket notation to access it's associated value. You won't be able to use dot-notation.
- Accessing the value of an Object Literal's properties with dot-notation makes the code easier to read and requires less typing. But bracket-notation allows for dynamic accessing, like what you do when you use a loop
- An Object Literal's values can be any data type, but its properties can only be strings
- Object Literals can be nested in complex ways
- All Object Literals come with some default methods, such as `.hasOwnProperty()`
- Never use reserved keywords for property names (like `function`, `var`, `switch`, etc.)

### Demonstration
Instructor demonstrates in the video walkthrough how to work with a Class in JavaScript.

### Independent Practice
Come up with an idea of a somewhat complex software application. Brainstorm/diagram what class hierarchies you might use when writing the application.

### Challenge
Extend the "Independent Practice" exercise above by brainstorming the different properties and methods that might exist in your classes. Write the code fo these classes. Write some code that instantiates the classes.

### Check for Understanding
Explain the diagram of your classes to a partner. Discuss if there are other classes that might make more sense.
