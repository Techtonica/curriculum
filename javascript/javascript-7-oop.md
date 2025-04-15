# JavaScript 7 - Object-Oriented Programming

### Week 4 Tip:

- There's a lot of content and links in this piece of curriculum. Don't get carried away reading every single link. Make sure you understand what's necessary, bookmark the ones that could be helpful later (or this whole curriculum page), and move forward.

### Prerequisites

- [JavaScript 1 - Variables, Strings, Numbers Lesson](/javascript/javascript-1-variables.md)
- [JavaScript 2 - Arrays, Functions Lesson](/javascript/javascript-2-array-functions.md)
- [JavaScript 3 - Conditionals, Comparisons, Booleans Lesson](/javascript/javascript-3-conditionals.md)
- [JavaScript 4 - Loops Lesson](/javascript/javascript-4-loops.md)
- [JavaScript 5 - Switch Statements Lesson](/javascript/javascript-5-switch.md)
- [JavaScript 6 - Object Literals Lesson](/javascript/javascript-6-object-literals.md)

### Motivation

- Principles of object-oriented programming (OOP) help developers organize their code. It's a way of thinking about how code and data interact, and how to write code to make it more reusable. It allows developers to organize code to put similar objects under the same category (called "classes"), in order to share code and logic. It also allows other parts of the code to know how to utilize objects by knowing what's available from that class.

Virtually all companies will use object-oriented programming in their code. For example, when you do a Yelp search for "burgers", each area on the screen that describes each recommended restaurant is an instance of a class. The information is probably abstracted into a class of "Restaurant", of which "Marlowe" and "Super Duper Burgers" are instances of that class.

### Benefits of OOP in JS

- JavaScript is mostly used as a functional programming language more than an object oriented language like C++ or Java. Functional programming in JS can be elegantly used to organize code. Learn more about the advantages of [Functional Programming in JS](https://blog.bitsrc.io/functional-programming-in-javascript-how-and-why-94e7a97343b).

- JavaScript has a unique, reliable OOP style, although it is less famous. JS frameworks like [React](https://stackoverflow.com/questions/35764800/reactjs-object-oriented), Angular and Vue rely on OOP and have recently increased in popularity amongst developers world wide.

- JavaScript and its frameworks have become must-have skills for any web developer to master. These skills are important for technical interviews. They also help in learning other frameworks or languages easily since many ideas are taken from JavaScript frameworks.

- The software development lifecycle has to go through many different stages. Writing clean, organized, reusable code is essential for developers to maintain projects. Hence, the five principles of SOLID applied in JavaScript are important to master the ability to write clean and professional code. Here are a few resources on SOLID principles and the importance of OOP in JS:

[SOLID - the first 5 principles of OOD with JS](https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa)

[SOLID principles in JS](https://dev.to/francescoxx/solid-principles-in-javascript-3pek)

### Materials

- [Video (4 min) - Why was OOP invented?](https://www.youtube.com/watch?v=AjR2Rc9wQ6s)

### Objectives

**Participants will be able to:**

- Understand some of the main concepts of object-oriented programming
- Start developing an understanding of objects and classes

### Specific Things to Learn

- Classes and objects
- OOP (Object-Oriented Programming)
- Inheritance
- Polymorphism
- Overriding

### Materials

- [OOP Lesson Slides](https://docs.google.com/presentation/d/1XKxBZIJ2gLknsyCBFm0jcq5Gk06d9uAyYTSW0QmQA10/edit?usp=sharing)
- [Video - Object Oriented Programming in 7 minutes](https://youtu.be/pTB0EiLXUC8)

### Lesson

Read through the [OOP slideshow](https://docs.google.com/presentation/d/1XKxBZIJ2gLknsyCBFm0jcq5Gk06d9uAyYTSW0QmQA10/edit?usp=sharing), then watch [this OOP video](https://youtu.be/pTB0EiLXUC8) before moving onto the lesson with code examples below. There are a lot of new concepts, so don't forget to take breaks!

#### Refresher: What is an Object?

If you recall from [JavaScript 6 - Object Literals](./javascript-6-object-literals.md)-

> An object is a thing that has properties. This sounds simple, but it's actually very abstract! To help flesh this out, think of an example software application that keeps track of books, such as for a library. In this application, a book can be thought of as an object that has certain properties like title and author.
>
> For example:

```js
const book = {
  id: '827392838',
  authorFirstName: 'Jane',
  authorLastName: 'Doe',
  title: 'The Wonderful World of JavaScript'
};
```

> In the same example software application, we might also want to keep track of people who will borrow library books:

```js
const borrower = {
  id: '9002',
  firstName: 'Syma',
  middleInitial: 'N',
  lastName: 'Tec',
  phoneNumber: '(415) 123-1234'
};
```

Properties on an object are sometimes also referred to as "key-value pairs." Every property has a name (aka the key), "firstName", and a value, "Jane".

#### What is a Class?

You can think of a class as a blueprint, or template, for creating an object. In the example above, the `book` object could be created from this class:

```js
class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
  }
  summary() {
    return (
      this.title +
      ' (' +
      this.authorLastName +
      ', ' +
      this.authorFirstName +
      ')'
    );
  }
}
```

And the Borrower class could look like:

```js
class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
```

A class is the set of properties that describe an item, properties that make sense belonging all together in a single object. In the example above, all the information about a book is contained in the `book` object and all the information about a borrower is contained in the `borrower` object. Properties about a book are not stored inside a `borrower` object, and vice versa.

Methods (aka functions) can be part of objects too, you can think of them as functions that are attached (or bound) to the object. For example, a method called `summary()` can return a one-line summary about a book. Or, a method called `checkOut()` would make sense on a `borrower` object. It would not be relevant for a `borrower` object to have a method `summary()`, because the `borrower` object does not contain any text that needs to be summarized.

This process of deciding what properties and methods belong to a particular class is sometimes called "abstraction" and is all part of the object-oriented programming experience. It is very similar to the thought process by which we decide the columns that go into a database table. A table called `books` would probably have very similar columns as the properties found in the `Book` class.

#### Creating objects from a class

When you _instantiate_ an object from a class, using the "new" keyword, that means you are creating a new object, using the class as a template, like this:

`let myBook = new Book(55234, "Principles of OO Design", "Barbara", "Liskov");`

Notice the function named "constructor" in the class definition, above? That is the function which is called when you use the "new" keyword with a class name. The values that you pass in parentheses become available as the named parameters list in the constructor function (id, title, authorFirstName, authorLastName).

After instantiating the Book as myBook, you can inspect it from the console-

```js
> console.log(myBook.authorLastName);
'Liskov'
```

#### The `this` keyword

`this` is a special keyword in JavaScript which refers to the current object instance. When you create an object with the `new` keyword, the code in your methods (functions) can refer to properties on the current instance using `this`. In the example above, in the `Book` class, the `constructor` method uses `this` to refer to the object being constructed (via `new`) and the `summary` method refers to the object that the code is currently working with.

Why this matters: you may have many `Book` objects, and want to print the summary for each one-

```js
> const books = [];
> books[0] = new Book(12345, "Why Didn't They Ask Evans?", "Agatha", "Christie");
> books[1] = new Book(12346, "The Long Goodbye", "Raymond", "Chandler");
> books[2] = new Book(12347, "Decline and Fall", "Evelyn", "Waugh");
```

Now, test the result-

```js
> console.log(books[0].summary());
'Why Didn\'t They Ask Evans? (Christie, Agatha)'
> for(let i=0; i<3; i++) {
...   console.log(books[i].summary());
... }
```

Because the `books` array contains three `Book` definitions, and we asked to refer to just one (`books[0]`), inside the `.summary()` method the `this` keyword "knows" to point to the correct instance of the `Book` class.

#### Concepts of Object-Oriented Programming

##### Encapsulation

_Encapsulation_ is the practice of keeping all of the things necessary to interact with a class in a single place. For instance, by providing a set of methods on an object, you are exposing the actions that somebody might take on it. This will make it easier for others to use your code and give you the ability to prevent others from misuse.

Encapsulation means that all the actions that we might take out on an object exist in one place. For instance, if a `Borrower` wanted to check out a book, we could use a `checkOut` method on that object to perform the action. In this example, each Borrower has an array of books they have checked out, and the `checkOut` function adds a new book to that list. As a user of this class, all we need to know is that this method takes a book and then the method will perform the necessary actions to check out our book. The actual implementation details are "encapsulated" within the Borrower class.

```js
class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.libraryBooks = []; // list of books checked out from library
  }

  checkOut(book) {
    this.libraryBooks.push(book);
  }
}
```

##### Abstraction

As stated above, because the `checkOut()` method is encapsulated in the borrower class, the rest of the program can just call the `checkOut()` method and know it will perform the necessary actions to check out our book without needing to know anything about the function.

```js
let MaryCrowley = new Borrower(
  '1234567',
  'Mary',
  'E',
  'Crowley',
  '(555)123-4567'
);
MaryCrowley.checkOut(myBook);
```

Any new instance of the borrower class will have a `checkOut()` method, too. Since `checkOut()` has been **abstracted** away from the rest of the program by encapsulating it in the Borrower class, just calling `MaryCrowley.checkOut(myBook)` will take care of it all using the specific details of that Borrower.

Another example is an iPhone. There's a whole lot going on inside, but all of the complexity of the actions is abstracted away so all the user has to understand is how to use the buttons and touchscreen interface to, say, call an openTheApp() method.

##### Inheritance

_Inheritance_ is a way for objects to inherit properties and methods from other objects.

For example, let's say that our library doesn't just have books, but they also have audiobooks on CD to loan out. It's possible we can create an `AudioBook` class, and this will have properties like `title`, `authorFirstName` and `authorLastName` just like the `Book` class:

```js
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

You'll see that the `AudioBook` class is exactly like the `Book` class but with a `lengthInMinutes` property added. Rather than constructing it this way, we can **reuse code** in the `Book` class instead by making `AudioBook` a _child_, or subclass, or `Book`:

```js
class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
  }
}

let myAudioBook = new AudioBook(
  55234,
  'Principles of OO Design',
  'Barbara',
  'Liskov',
  206
);
```

The relationship between `Book` as the parent class and `AudioBook` as the child class comprises a _class hierarchy_. A class hierarchy can go on for multiple levels of parents and children, and parents can have many children. For example the library might have e-books--an `ElectronicBook` class which is also a child of `Book`, making it a sibling of `AudioBook`.

And what if our library has special items, like telescopes, to lend out? We might want to add a parent above `Book`, called `LoanItem`. `Telescope` would be a subclass of `LoanItem`, at the same level as `Book`.

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

_Overriding_ happens when a subclass changes a value or behavior inherited from its parent class. For example, let's say that in our library application, every object that can be borrowed has a `renewalLimit` property, which is the maximum amount of times one borrower can renew a loan.

The `Book` class might look like this:

```js
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

```js
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

_Polymorphism_ is the ability to get different behaviors from objects even when **the same method is being called**. When we use polymorphism, we may not even know the subclass of the object we are accessing. This is because of inheritance: an object created from a subclass will have all the properties and methods inherited from any parent class in the hierarchy. And as long as we use a property or method that exists in a parent class, we don't need to actually know the subclass of the object.

To explore this, let's say that our `Borrower` class has a method called `checkOut()`. It takes a single argument, which is an object of type `Book` or any subclass of `Book`. The purpose of this method is to check out a book from the library and return the due date for returning the book to the library.

```js
class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.libraryBooks = []; // list of books checked out from library
  }

  checkOut(book) {
    this.libraryBooks.push(book);
    const borrowedDate = new Date();
    const dueDate = book.calculateDueDate(borrowedDate);
    return dueDate;
  }
}
```

Notice that the `dueDate` variable is populated by a method called `calculateDueDate()` which belongs to the `book` object. The `Book` class and its extension, `AudioBook`, both _implement_ this method. But let's say the calculation is different, because a book can be lent out for 3 weeks while an audiobook can be lent out for 2 weeks.

```js
class Book {
  ...

  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 21);  // 21 days is 3 weeks
  }
}

class AudioBook extends Book {
  ...

  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 14);  // 14 days is 2 weeks
  }
}
```

In this case, when the `checkout` function is called, the `checkout` function has **no idea what subclass is being passed in**. It could be an object from the `Book` class, or it could be an object from the `AudioBook` class. Yet it knows that whatever object is passed in has a `calculateDueDate()` method, because _all subclasses of `Book`_ will either inherit that method as is, or override it, as in the case of `AudioBook`.

The `checkout` function is using the `calculateDueDate()` method polymorphically. It's the same method name, regardless of the subclass. But the behavior differs: in the case of a `Book` object, the value returned will be 3 weeks from `borrowedDate`; in the case of an `AudioBook` object, the value return will be 2 weeks from `borrowedDate`.

#### Multiple ways to create objects in JS

There are multiple ways to create objects in JavaScript. As you do different tutorials, you might come across different syntax for creating objects. The good thing is that the concepts used are the same no matter which syntax you use to define the object.

Read this article to learn about 4 different ways to define an object in JS: https://dzone.com/articles/easy-javascript-part-13-four-ways-to-create-object

### Supplemental Resources

- [Video: What is Object-Oriented Programming? (19 mins - start at 0:37 to skip intro, and 2x video speed recommended)](https://youtu.be/rlLuL3jYLvA)
- [What is Object-Oriented Programming?](https://www.educative.io/courses/learn-object-oriented-programming-in-javascript/B19oGJg5JWo)- educative
- [Khan Academy: Play with Interactive Object Instances](https://www.khanacademy.org/computing/computer-programming/programming/object-oriented/pt/object-types)
- [Reference: JS Object Basics - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Chapter: Object-Oriented Programming - Eloquent JavaScript](http://eloquentjavascript.net/1st_edition/chapter8.html);
