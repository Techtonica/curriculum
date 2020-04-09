# Eventonica: Object-Oriented Programming

### Projected Time

1-3 hours

### Primary Goals

To build a modular system using Object Oriented Programming principles.

### Overview

In this project, you'll build an event management system that will help you practice Object Oriented Programming using JavaScript.

### How to get Started

#### User Requirements

You need to build a program that lets users browse a list of events and save the ones they are interested in. For today's piece of the project, you'll write object-oriented JS code to manage users and events. In a later lesson, you'll add a UI for your users to use.

When you instantiate an EventRecommender object, you should be able to do the following:

- Users:
  - Add a new User to the System
  - Allow users to save events to a personal Events array
  - Delete a User from the System
- Event:
  - Add a new Event to the System
  - Delete an Event from the System
- Search:
  - Search for events by date
  - Search for events by category

#### Creating a plan of attack

Before you start coding, think about and write down the answers to these questions:

- What classes will you create?
- What properties should each class have? Think about: What properties are needed to complete the assignment? What other properties would be helpful to include as well?
- What methods should each class have?

You may change your answers as you write the code, but it's good to have a general plan worked out before you code.

#### Starter Code

Note:

- Create a JavaScript file for your class(es); we recommend making a User and Event class above and outside of your EventRecommender class.
- You will need to decide which arguments each function takes in.

Start with the following code:

```javascript
class EventRecommender {
  constructor() {
    // All main properties should go here.

    this.events = [];
    this.users = [];
  }

  addEvent() {
    // Adds a new Event to the System
  }

  addUser() {
    // Adds a new User to the System
  }

  saveUserEvent() {
    // Allow users to save events to a personal Events array.
  }

  deleteUser() {
    // Deletes a User from the system
  }

  deleteEvent() {
    // Deletes the Event from the system
  }

  findEventsByDate() {
    // Returns all events on a given date
  }

  findEventsbyCategory() {
    // Returns all events in a given category
  }
}
```

#### Good luck!
