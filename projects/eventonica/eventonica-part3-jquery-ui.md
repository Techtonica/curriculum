# Eventonica - Part 3 - jQuery UI

### Primary Goals

To build a UI for a portfolio-ready client-side application.

### Overview

You'll build an Event Recommender app that will help you practice building a complete client-side object-oriented application. In this project, that you've coded and tested object-oriented code for an event recommendation system. Now you will create a UI that allows a user to interact with your application.

### Requirements

You'll use HTML, JavaScript, and jQuery to build out functionality for the following features:

- Users:
  - Display all users
  - Add a new User to the System
  - Delete a User from the System
- Event:
  - Display all events
  - Add a new Event to the System
  - Delete an Event from the System
- Search:
  - Search for events by date
  - Search for events by category
- Save
  - Allow users to save events to a personal Events array

By the end of this project, your site will also:

1. Have a README
2. Have CSS to customize the look
3. Pass an _aXe_ accessibility test
4. Be deployed to GitHub pages

### UI Instructions

Remember to commit your code to GitHub throughout this project.

#### Setup

1. First you need to prepare your JS code to be usable in the browser. In your existing JS file that includes your classes, wrap the `module.exports` line in an `if` statement as shown below:

   ```js
   if (typeof module != 'undefined') {
     module.exports = { EventRecommender, User, Event };
   }
   ```

   We need to do this because web browsers do not use modules in the same way that Jasmine does, so this will stop the browser from trying to use modules and throwing an error.

1. Create a file called `index.html`. Copy and paste the HTML starter code from [this file](starter-code/index.html). This is just to get you started; throughout the exercise you can edit and add to the HTML.

1. Create a file called `jQuery-scripts.js`. Copy and paste the following JavaScript/jQuery starter code:

   ```js
   $(document).ready(() => {
     const eventRecommender = new EventRecommender();
     // Your code here
   });
   ```

1. In your `index.html`, update line 3 to match the name of your JS file that holds your classes.
   Also note the order of the `<script>` imports -- the jQuery source code and your classes must both be imported before `jQuery-scripts.js` because `jQuery-scripts.js` will use both of them and rely on them being imported.

1. Open your `index.html` file in the browser (Command-O in Chrome). Open the console and make sure there are no errors.

1. Read through `index.html` to understand what code is in there now and what you'll need to add.

#### Adding functionality

Now you're going to build out a web UI that lets users interact with the object-oriented code you wrote! This tutorial will walk you through the first few features, then you'll work on your own.

**Note**: All your data added via the UI (lists of users, events, etc) will be deleted when you refresh the page, because the data is just stored locally in the memory of your browser tab. In later weeks you'll learn how to save your data in databases instead of browser memory.

Steps:

1. **Display all users**: In your `jQuery-scripts.js` file, write code to loop through all users in your `eventRecommender` and display them under "All Users" on your HTML page. Since you don't have any users in the system yet, I recommend "hardcoding" some users into your `jQuery-scripts.js` file so you'll have something to display at first.

1. **Add a user**:

   1. Update the HTML form under "Add User" to accept all properties you defined on the User object.
   1. Use jQuery to make it so that when someone fills out the form and presses "Submit", a new user is created and added to the `EventRecommender` `users` array.

      Here are a few hints:

      - You can use `$("#element-id").val()` to get the text currently entered in a text field. To get the value from other type of form inputs, you can read [this blog post](https://medium.com/@bruce.sarah.a/getting-form-values-with-jquery-7d456cb82080).
      - If submitting the form is causing the page to refresh, you can use `preventDefault` to prevent that. Learn more about it from the [preventDefault MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

1. **Delete a user**: Allow a user to be deleted from your list of users. To do this, you'll need a way to uniquely identify what user should be deleted. The form currently assume each user has an ID and asks for the ID of the user to be entered. If your `User` objects don't currently have an ID, you can update the form or update your `User` class.
   Make sure deleting a user removes the user from the `EventRecommender` user array and from the list of users on the page.

1. **Show, Add, and Delete events**: Add these 3 functions in a similar way to how you coded these functions for User.

1. **Search by date, Search by category, and Save event for user**: Using what you learned so far, figure out how to add the final three features to the app. Edit the list of users to show the saved events for each of the users.

#### Next Steps

1. Add some CSS to spice up your page.

1. Add a README.md with screenshots of your project in your GitHub project repo. (Here is an example template for creating a great README.md: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

1. Deploy your site! Deploying means putting your site on the internet where other people can access it. One easy way to deploy this site is to use GitHub pages. Follow this tutorial to deploy your site: https://www.codecademy.com/articles/f1-u3-github-pages.

1. Accessibility is important when making any webpage to make your site usable to all. Download the aXe Chrome Extension if you don't already have it. Use the extension to analyze your page on GitHub pages (it doesn't work for local development but it does work on the deployed site). Fix the issues it tells you about.

#### Challenges

Try to do at least one of these challenges to improve your site:

- Add a variable to save which user is currently "logged in", so saving an event for a user doesn't require typing in the user's ID every time.
- Use localStorage to store your data so it doesn't get deleted every time the page is refreshed. Learn about localStorage from the [MDN localStorage docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Change the UI. Draw up a design for how you'd like your app to look and then code your site to match. The changes could involve breaking the UI into multiple pages, adding more CSS, using a styling library such as Bootstrap, and/or adding more JS. Look at websites that have successful UIs for creating, retrieving, updating, deleting, and filtering data for inspiration. Consider designing a desktop and a mobile version and create a responsive UI.

### Tips

- If you 'finish early', use your extra time to get user feedback and refine your app as much as you can.

### Good luck!
