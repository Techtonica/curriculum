# Event Recommender System with Javascript


### Primary Goals
To build a modular system using Object Oriented Programming principles.

### Overview
In this project, you'll build an EventRecommender System that will
help you practice Object Oriented Programming using Javascript. This should take
a maximum of 3 hours.

### Context
* Object Oriented Programming (OOP) is a popular style of programming that is oftentimes
adopted for Backend Code Organization.
* OOP enables
    * Readability (esp in a large code base)
    * Function abstraction
    * Easier testing
* Displaying Object Oriented Programming Skills in an interview is extremely impressive, and shows your ability to design and organize systems.


### How to get Started
#### User Requirements
When you instantiate an EventRecommender object, you should be able to do the following:

* Users:
    * Add a new User to the System
    * Save the Events that User wish to go
    * Delete a User from the System
* Event:
    * Add a new Event to the System
    * Update an Event's categories
    * Delete an Event from the System
* Category:
    * Add a new Category to the System
    * Update Events in a Category
    * Delete a Category from the System
* Filter:
    * All Events in a certain category (order does not matter)
    * Note: You can use three separate filter functions or _one_ if you'd like an extra challenge :)

#### Starter Code
Note:
* You will need to decide which arguments each function takes in.
* We recommend including additional classes for Event, User and Category


```javascript
class EventRecommender() {
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

    addCategory() {
    // Adds a new Category to the System
    }

    addEventToCategory(){
    // Adds Event to Category
    // Adds Category to Event
    }

   saveUserEvent(){
    //Save Events that Users wish to go.
   }

    deleteUser() {
    // Deletes a User from the system
    
    }
   
    deleteEvent() {
    // make sure to also delete a event from the categories.
    }

    deleteCategory() {
    // make sure to delete categories from a event that had them.
    }


    filter(){
    }
}

```

#### Good luck!


