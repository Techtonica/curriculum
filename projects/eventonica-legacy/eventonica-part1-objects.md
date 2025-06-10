# [LEGACY] Eventonica: Object-Oriented Programming

### Projected Time

1-3 hours

### Primary Goals

To build a modular system using Object Oriented Programming principles.

### Overview

In this project, you'll build an event management system that will help you practice Object Oriented Programming using JavaScript. In the vocabulary of the popular [Model-View-Controller pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), this is the **Model**.

### How to get Started

#### User Requirements

You need to build a program that lets users browse a list of events and save the ones they are interested in. For today's piece of the project, you'll write object-oriented JavaScript code to manage users and events. In a later lesson, you'll add a UI for your users to use.

As you remember from the project overview, we will need to build all the [project requirements](./README.md#project-requirements).

#### Creating a plan of attack

Before you start coding, think about and write down the answers to these questions:

- What classes will you create?
- What properties should each class have? Think about: What properties are needed to complete the assignment? What other properties would be helpful to include as well?
- What methods should each class have?

You will likely change your answers as you write the code, but it's good to have a general plan worked out before you code.

#### Starter Code

- Create a JavaScript file for your class(es); we recommend making a User and Event class above and outside of your main class.
- You will need to decide which arguments each function takes in.

Start with the following code:

```javascript
class Eventonica {
  constructor() {
    this.allUsers = [];
    this.allEvents = [];
  }

  addEvent(/* arguments you decide go here */) {
    // Adds a new Event
  }

  updateEvent() {
    // Update existing Event
  }

  deleteEvent() {
    // Deletes Event
  }

  findEventsByDate() {
    // Return Event object instances in this.allEvents with a specified date
  }

  findEventsbyCategory() {
    // Return Event object instances in this.allEvents with a specified category
  }

  addUser() {
    // Adds a new User
  }

  updateUser() {
    // Update existing User
  }

  deleteUser() {
    // Deletes User
  }
}

let _nextId = 1;
function generateId() {
  return _nextId++;
}

class Event {
  constructor(name) {
    this.name = name;
    this.id = generateId(); // name might not be unique so we want a way to find this later
  }
}
```

#### Good luck!
