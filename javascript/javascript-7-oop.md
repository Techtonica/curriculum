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

Properties on an object are sometimes also referred to as "key-value pairs."  Every property has a name (aka the key) and a value.

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

Methods (aka functions) can be part of objects too, you can think of them as functions that are attached (or bound) to the object. For example, a method called `summary()` can return a one-line summary about a book.  Or, a method called `checkOut()` would make sense on a `borrower` object. It would not be relevant for a `book` object to have that method, because the `book` object would never check anything out of the library.

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

`this` is a special keyword in JavaScript which refers to the current object instance.  When you create an object with the `new` keyword, and after, the code in your methods (functions) can refer to properties on the current instance using `this`. In the example above, in the `Book` class, the `constructor`  method uses `this` to refer to the object being constructed (via `new`) and the `summary` method refers to the object that the code is currently working with.

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

*Encapsulation* is the practice of protecting, or hiding, some or all of the properties defined by a class.  We do this sometimes to prevent other code from changing properties on the objects our code provides, or because we want developers to only access or change properties through methods.

Protecting properties is one way that you can communicate to coworkers and other developers on open source projects the best way to use your source code.

The common JavaScript language, used in web browsers and Node.js, offers private properties through the constructor, but you need to define methods -which access such private variables- in the constructor itself.  In this example, the `summary()` method is defined using the `this` keyword, instead of as its own function-

```
class Book {
  constructor(id, title, authorFirstName, authorLastName, wholesalePrice, retailPrice) {
    let _wholesalePrice = wholesalePrice;
    let _retailPrice = retailPrice;
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.summary = function() {
      return this.title + " (" + this.authorLastName + ", " + 
             this.authorFirstName + "), price: " + _retailPrice;
    };
  }
}
```
Defining methods like `summary()` in the constructor grants them access to variables defined in the constructor with the `var` keyword.

`let` limits the visibility of the variable(s) you create with it to only the function, method or file it exists in.  However, those variables are *also visible* to functions or methods defined by that function, as you see above with `this.summary`.

Here's an example using our redefined class above-
```
> books = [];
> books[0] = new Book(12345, "Why Didn't They Ask Evans?", "Agatha", "Christie", 15.00, 23.95);
> books[0].summary();
'Why Didn\'t They Ask Evans? (Christie, Agatha), price: 23.95'
> books[0]._retailPrice
undefined
```

See how retail price is `undefined`?  _retailPrice is inaccessible from *outside* the constructor method.  That's encapsulation.  You decided that you wanted that value to have limited or no accessibility.  If you want to protect a property from being either accessed or modified by *outside code*, define it in the constructor method.

(Depending on the version of JavaScript you're programming with, there may be additional means by which properties can be protected, such as the `private` or `protected` access modifiers.  These become available in later versions of JavaScript (EcmaScript ), and spinoff languages such as TypeScript).

Note that private properties defined in this way are not inheritable by subclasses of your class (see next section), although they may be accessed if you provided a method that returns them.

Private read-only properties: inside a constructor function, you can declare a property to be both private and read-only by using the `const` statement-
```
class Book {
  constructor(id, title, authorFirstName, authorLastName, wholesalePrice, retailPrice) {
    const _wholesalePrice = wholesalePrice;
    const _retailPrice = retailPrice;
    ...
```  
This would allow functions defined within the constructor to access the values of _wholesalePrice and _retailPrice, but not to change them.

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
- If a property name is composed of multiple words, the convention is to use camelCase. 
- If a property name with spaces is absolutely required, then you'll only be able to use bracket notation to access it's associated value. You won't be able to use dot-notation.
- Accessing the value of an Object Literal's properties with dot-notation makes the code easier to read and requires less typing. But bracket-notation allows for dynamic accessing, like what you do when you use a loop
- An Object Literal's values can be any data type, but its properties can only be strings
- Object Literals can be nested in complex ways
- All Object Literals come with some default methods, such as `.hasOwnProperty()`
- Never use reserved keywords for property names (like `function`, `var`, `switch`, etc.)

### Demonstration
Instructor demonstrates in the video walkthrough how to work with a Class in JavaScript.

### Independent Practice
- Work through [this interactive lesson on JavaScript Objects](https://www.codecademy.com/courses/introduction-to-javascript/lessons/objects/exercises/objects?action=resume_content_item).
- Work through [this interactive lesson on Advanced JavaScript Objects](https://www.codecademy.com/courses/introduction-to-javascript/lessons/advanced-objects/exercises/adv-intro?action=resume_content_item).

### Challenge
Extend the "Independent Practice" exercise above by brainstorming the different properties and methods that might exist in your classes. Write the code fo these classes. Write some code that instantiates the classes.

### Check for Understanding
Explain the diagram of your classes to a partner. Discuss if there are other classes that might make more sense.
