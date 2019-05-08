# Event Recommender System with Javascript


### Primary Goals
To build a modular system using Object Oriented Programming principles.

### Overview
In this project, you'll build an Event Recommender System that will
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
When you instantiate an Event recommender object, you should be able to do the following:

* Users:
    * Add a new User to the System
    * Update a User's Rating for an Event
    * Delete a User from the System
    * Delete a User's rating for an Event
* Event:
    * Add a new Event to the System
    * Update an Eventt's categories
    * Maintain a Event's "average" score every time a new user score is added.
    * Delete an Event from the System
* Category:
    * Add a new Category to the System
    * Update Events in a Category
    * Delete a Category from the System
* Filter:
    * All Events in a certain category (order does not matter)
    * All Events with an Average Score greater than "X" in decreasing order
    * Top "X" number of events in decreasing order in a certain category
    * Note: You can use three separate filter functions or _one_ if you'd like an extra challenge :)

#### Starter Code
Note:
* You will need to decide which arguments each function takes in.
* We recommend including additional classes for Event, User and Category
* Be sure to have a way of calculating the average score for each Event.
It can be calculated averaging all the user scores submitted for an event.
* Each user can only have _one_ score for an event and not more! Only the latest
score counts.

```javascript
class EventRecommender() {
    constructor() {
    // All main properties should go here.
    this.venue = [];
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

    addEventtoCategory(){
    // Adds Event to Category
    // Adds Category to Event
    }
    modifyEvent(){
    //Modify event record
    }
   addVenue(){
       //Add a new venue
   }
   deleteVenue(){
       //Deletes exixting venue
   }
   modifyVenue(){
    //Modifies the venue details
   }
   searchVenue(){
       //Search for the venue
   }
   searchEvent(){
    //Search for the event 
   }
   listUsersLocation(){
       //List a user's saved locations

   }
   addLocation(){
       //Add a locale to a user's saved locations

   }
   searchUser(){
       //Searches for users
   }

    deleteUser() {
    // Deletes a User from the system
    
    }
    addCommenttoVenue(){
        //Adds comment to the venue
    }
    addCommenttoEvent(){
    //Adds comment to the event

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


