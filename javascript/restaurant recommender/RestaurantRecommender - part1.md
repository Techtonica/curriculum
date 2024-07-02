# Restaurant Recommender System with JavaScript

### Primary Goals

To build a modular system using Object Oriented Programming principles.

### Overview

In this project, you'll develop a Restaurant Recommender System to sharpen your Object-Oriented Programming skills in JavaScript. You should allocate no more than 3 hours to complete this task.

### Context

- Object Oriented Programming (OOP) is a popular style of programming that is oftentimes
  adopted for Backend Code Organization.
- OOP enables
  - Readability (especially in a large code base)
  - Function abstraction
  - Easier testing
- Displaying Object Oriented Programming Skills in an interview is extremely impressive, and shows your ability to design and organize systems.

### How to get Started

#### User Requirements

When you instantiate a restaurant recommender object, you should be able to do the following:

- Users:
  - Add a new User to the System
  - Update a User's Rating for a Restaurant
  - Delete a User from the System
  - Delete a User's rating for a Restaurant
- Restaurant:
  - Add a new Restaurant to the System
  - Update a Restaurant's categories
  - Maintain a Restaurant's "average" score every time a new user score is added.
  - Delete a Restaurant from the System
- Category:
  - Add a new Category to the System
  - Update Restaurants in a Category
  - Delete a Category from the System
- Filter:
  - All Restaurants in a certain category (order does not matter)
  - All Restaurants with an Average Score greater than "X" in decreasing order
  - Top "X" number of restaurants in decreasing order in a certain category
  - Note: You can use three separate filter functions or _one_ if you'd like an extra challenge :)

#### Starter Code

Note:

- You will need to decide which arguments each function takes in.
- We recommend including additional classes for Restaurant, User and Category
- Ensure there is a method to calculate the average score for each restaurant, which can be determined by averaging all the user scores submitted for that restaurant.
- Each user can only have _one_ score for a restaurant and not more! Only the latest
  score counts.

```javascript
class RestaurantRecommender() {
    constructor() {
    // All main properties should go here.
    this.ratings = [];
    this.restaurants = [];
    this.users = [];
    }

    addRestaurant() {
    // Adds a new Restaurant to the System
    }

    addUser() {
    // Adds a new User to the System
    }

    addCategory() {
    // Adds a new Category to the System
    }

    addRating(){
    // Adds a user rating for a restaurant
    }

    addRestauranttoCategory(){
    // Adds Restaurant to Category
    // Adds Category to Restaurant
    }


    deleteUser() {
    // Deletes a User from the system
    // Deletes User ratings for a restaurant.
    }

    deleteRestaurant() {
    // make sure to also delete a restaurant from the categories.
    }

    deleteCategory() {
    // make sure to delete categories from a restaurant that had them.
    }

    filter(){
    }
}

```

#### Good luck!
