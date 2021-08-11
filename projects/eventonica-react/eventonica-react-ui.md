# Eventonica - Build a React UI

## Primary Goal

To build a UI for a portfolio-ready client-side application.

## Overview

You'll build a web UI for the Eventonica app that will allow a user to interact with the code you already wrote in Part 1. This will be the basis of the subsequent parts as well.

### References

- [React Outlines](/react-js)

### Requirements

You'll use React and JavaScript to build functionality for all the features listed in the [main project README](./README.md#project-requirements).

By the end of this project, your project will also:

1. Have a README
2. Have CSS to customize the look

## UI Instructions

Remember to commit your code and push to GitHub frequently while working on this project. A good rule of thumb is whenever a new piece of functionality is working, commit with a descriptive message.

### Create Your First Subcomponents

Before we create some components from scratch, your first challenge is to abstract an existing element into a new file, then export it as a component.

It's typical for a React developer to start in one file, then begin to divide it into new files and components as things grow.  This keeps things organized and easy to read.  There seems to be a general agreement that files should not be over 200 or 300 lines long, but if course there are plenty of opinions.

1. Create a new folder in `eventonica-react/src` named `components`.  Create a file called `footer.jsx` within `components`.

2. Copy all the code from `<footer>` to `</footer>` in `App.js` and paste it into `components/footer.jsx`.

3.  Use your knowledge of React to convert this to a component named `Footer` that is exported from `components/footer.jsx` back to its original position in `App.js`. You can do it!

## Adding Functionality to the UI

Now you're going to build out a web UI that lets users interact with your page! This tutorial will walk you through the first few features, then you'll work on your own.

### Refreshing the Page

**All your data added via the UI will be gone when you refresh the page**, because all the JS files will be reloaded. In later weeks you'll learn how to save your data in databases instead of browser memory. Because of this, it's much easier to have some users and events prepopulated so that every time you refresh, some data already exists.

```js
// At the bottom of model.js

new Event('Example event');
new User('Alex');
```

### Display All Users

In `main.js`, write code to loop through all users in `User.all` and display them in the element with `users-list` on your HTML page. There is already example code that does this for events.

### Add User

1. Update the HTML form under "Add User" to accept all properties you defined on the User object.
1. Handle the submit event of the form so that a new user is created
1. Input element's have a `value` property that contains the current input, [see example at w3schools](https://www.w3schools.com/jsref/prop_text_value.asp).
1. You'll notice `preventDefault` used in the sample code. Comment it out and see what happens. Learn more about it from the [preventDefault MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

### Delete User

Allow a user to be deleted from your list of users. To do this, you'll need a way to uniquely identify what user should be deleted. The form currently assume each user has an ID and asks for the ID of the user to be entered.

Make sure deleting a user removes the user from the model and also the HTML list of users on the page.

### Add Remaining Functions

For all the features lised in the main [Eventonica README](./README.md), add code to setup event handlers so the actions change data and refresh the HTML for clear user feedback.

## Next Steps

Once all the behavior is fully working, move on to these enhancements.

1. Customize the CSS to style your page. [Google Fonts](https://fonts.google.com/) are a great place to find free fonts.

1. Add a README.md with screenshots of your project in your GitHub project repo. This [README Template](https://github.com/othneildrew/Best-README-Template) includes most key sections for an open-source app.

#### Challenges

Try to do at least one of these challenges to improve your site:

- Look up all available HTML attributes for `input` and see if you can customize the forms, make some fields required, turn the date search field into a date picker using `input type="date"`, etc
- Add a variable to save which user is currently "logged in", so saving an event for a user doesn't require typing in the user's ID every time.
- Use localStorage to store your data so it doesn't get deleted every time the page is refreshed. Learn about localStorage from the [MDN localStorage docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Change the UI. Draw up a design for how you'd like your app to look and then code your site to match. The changes could involve breaking the UI into multiple pages, adding more CSS, using a styling library such as Bootstrap, and/or adding more JS. Look at websites that have successful UIs for creating, retrieving, updating, deleting, and filtering data for inspiration. Consider designing a desktop and a mobile version and create a responsive UI.
- Deploy your site so you can share it with others. Deploying means putting your site on the internet where other people can access it. One easy way to deploy this site is to use GitHub pages. Follow this tutorial to deploy your site: https://www.codecademy.com/articles/f1-u3-github-pages.

### Good luck!
