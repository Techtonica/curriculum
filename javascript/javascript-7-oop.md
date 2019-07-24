# Javascript 7 - Object-Oriented Programming

### Projected Time

2 - 2.5 hours total

40 min - Slideshow

10 min - Video

30 min - Lesson Text

40 min - Independent Practice

### Prerequisites
- [Javascript 1 Lesson](/javascript/javascript-1.md)
- [Javascript 2 Lesson](/javascript/javascript-2.md)
- [Javascript 3 Lesson](/javascript/javascript-3.md)
- [Javascript 4 Lesson](/javascript/javascript-4.md)
- [Javascript 5 Lesson](/javascript/javascript-5.md)
- [Javascript 6 - Object Literals Lesson](/javascript/javascript-6-object-literals.md)

### Motivation
- Principles of object-oriented programming (aka "OOP") help developers to organize their code. It's really a way of thinking, about how code and data can interact, and how to write code to make it more reusable. It allows developers to organize code to put similar objects under the same category (called "classes"), in order to share code and logic. It also allows other parts of the code to know how to utilize objects, by knowing what's available from that class. 

Virtually all companies will use object-oriented programming in their code. For example, when you do a Yelp search for "burgers", each area on the screen that describes each recommended restaurant is an instance of a class. The information is probably abstracted into a class of "Restaurant", of which "Marlowe" and "Super Duper Burgers" are instances of that class.

### Objectives
**Participants will be able to:**
- Understand some of the main concepts of object-oriented programming
- Start developing an understanding of objects and classes


### Specific Things To Teach
- Classes and objects
- OOP (Object-Oriented Programming)
- Inheritance
- Polymorphism
- Overriding

### Materials

- [OOP Lesson Slides](https://docs.google.com/presentation/d/1XKxBZIJ2gLknsyCBFm0jcq5Gk06d9uAyYTSW0QmQA10/edit?usp=sharing) | [Video Walk-through of slides](https://drive.google.com/file/d/1mKQOeNQsUtiy3-X8tBk81e3vakqr7AMY/view?usp=sharing)
- [Video - Object Oriented Programming in 7 minutes](https://youtu.be/pTB0EiLXUC8)

### Lesson

Read through the [OOP slideshow](https://docs.google.com/presentation/d/1XKxBZIJ2gLknsyCBFm0jcq5Gk06d9uAyYTSW0QmQA10/edit?usp=sharing), then watch [this OOP video](https://youtu.be/pTB0EiLXUC8) before moving onto the lesson with code examples below. There are a lot of new concepts, so don't forget to take breaks!

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

##### Abstraction

As stated above, because the checkOut() method is encapsulated in the borrower class, the rest of the program can just call the checkOut() method and know it will perform the necessary actions to check out our book without needing to know anything about the function. 

```
let MaryCrowley = new Borrower("1234567", "Mary", "E", "Crowley", "(555)123-4567");
MaryCrowley.checkOut(myBook);
```

Any new instance of the borrower class will have a checkOut() method, too. Since checkOut() has been **abstracted** away from the rest of the program by encapsulating it in the Borrower class, just calling MaryCrowley.checkOut(myBook) will take care of it all using the specific details of that Borrower.

Another example is an iPhone.  There's a whole lot going on inside, but all of the complexity of the actions is abstracted away so all the user has to understand is how to use the buttons and touchscreen interface to, say, call an openTheApp() method.

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

### Tutorial
Go through [this tutorial](https://docs.google.com/spreadsheets/d/1vIr3fiKa_jxzy7qtFsiE5hEJbiTXwc1LYxbfsHOYD6U/edit#gid=0). Start with the "Object Oriented JavaScript" tutorial, then hit "next" and do "Function Context" tutorial, then hit "next", and do "Inheritance" tutorial

### Independent Practice
* Work through [this interactive lesson on Advanced JavaScript Objects](https://www.codecademy.com/courses/introduction-to-javascript/lessons/advanced-objects/exercises/adv-intro?action=resume_content_item).

* Work through [this Introduction to Classes on CodeAcademy](https://www.codecademy.com/courses/learn-javascript-
classes/lessons/classes/exercises/introduction?course_redirect=introduction-to-javascript).

* Find definition of following terms on your own:
   * Namespace
   * Hoisting
   * Arity or function.prototype.length
   * Anonymous
   * Closure
   * Currying
   * Pragma

### Check for Understanding
* Explain your completed Codecademy lesson code to a partner.
* 39 Best Object Oriented JavaScript Interview [Questions and Answers](https://www.code-sample.com/2015/04/javascript-interview-questions-answers.html)

### Supplemental Resources

- [Video: What is Object-Oriented Programming? (19 mins - start at 0:37 to skip intro, and 2x video speed recommended)](https://youtu.be/rlLuL3jYLvA)

- [Khan Academy: Play with Interactive Object Instances](https://www.khanacademy.org/computing/computer-programming/programming/object-oriented/pt/object-types)

- [Reference: JS Object Basics - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

- [Chapter: Object-Oriented Programming - Eloquent JavaScript](http://eloquentjavascript.net/1st_edition/chapter8.html);

- [What the heck is Polymorphism? by Jan van Brugge](https://dev.to/jvanbruegge/what-the-heck-is-polymorphism-nmh)

- [Open source workshops that teach web software skills - NodeSchool](https://nodeschool.io/)

- [10 Interview Questions Every JavaScript Developer Should Know - Medium Blog](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95)

- [15 JavaScript interview Questions and Answers - UpWork](https://www.upwork.com/i/interview-questions/javascript/)
