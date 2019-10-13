# Event Recommender with JavaScript - Part 3 - UI

### Primary Goals

To build a UI for a portfolio-ready client-side application.

### Overview

You'll build an Event Recommender app that will help you practice building a complete client-side Object Oriented application.

### Context

Now that you've coded and tested your object-oriented code, you will create a UI that allows a user to interact with your application.

### Requirements

1. Your site must be responsive from 300px to at least 1400px window width.

2. Your app must pass an *aXe* accessibility test.

3. Your app must pass all tests in the [Facebook Sharing Debugger for meta tags](https://developers.facebook.com/tools/debug/).

4. You are required to *deploy* your completed project using Netlify or GitHub Pages. Turn in the links to your *GitHub repo* and *live site url*.

5. You are required to have a top-notch README.md with screenshots of your project in your Github project repo. (Here is an example template for creating a great README.md: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)


### UI Instructions

1. Create HTML and CSS files. In your HTML file, add a script tag that includes your existing JavaScript file that defines your EventRecommender and other classes. Then create a **new** file, `jQuery-scripts.js`, and add it via a script tag after your other script tag. (It is important that your classes and jQuery are seperate Javascript files, because your Jasmine tests should only import your classes, not your jQuery code.)

2. In this new `jQuery-scripts` file, create a user interface with *jQuery* for *each* of the following methods:

* Users:
  * Add a new User to the System
  * Allow users to save events to a personal Events array
  * Delete a User from the System
* Event:
  * Add a new Event to the System
  * Delete an Event from the System
* Search:
  * Search for events by date
  * Search for events by category


### Tips

* Although your wireframe will not be assessed, we highly recommend looking at websites that have successful UIs for creating, retrieving, updating, deleting, and filtering data, and wireframe your design before starting to code with jQuery, HTML, or CSS.  Consider designing a desktop and a mobile version to make coding as straight-forward as possible.  It will be much easier overall!
* If you 'finish early', use your extra time to get user feedback and refine your app as much as you can.

### Good luck!
