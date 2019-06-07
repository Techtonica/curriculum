# Event Recommender System with Javascript - Part 2

### Primary Goals

To build UI and client-side tests for a portfolio-ready client-side application.

### Overview

You'll build an Event Recommender app that will
help you practice building a complete client-side Object Oriented application.

### Context

Now that you've finished Part 1 and your Event Recommender class is complete, you will create a UI that allows a user to implement your class methods in a tested, deployed website.

### Requirements

1. Your site must be responsive from 300px to at least 1400px window width.

2. Your app must pass an *aXe* accessibility test.

3. Your app must pass all tests in the [Facebook Sharing Debugger for meta tags](https://developers.facebook.com/tools/debug/).

4. You are required to *deploy* your completed project using Netlify or Github Pages. Send the links to your *Github repo* and *live site url*.

5. You are required to have a top-notch README.md with screenshots of your project in your Github project repo.

### UI Instructions

1. Create HTML and CSS files. In your HTML file, add a script tag that includes your existing javascript file that defines your EventRecommender and other classes. Then create a new file, `jQuery-scripts.js`, and add it via a script tag after your other script tag.

2. In this new `jQuery-scripts` file, create a User Interface with *jQuery* for *each* of the following methods:

* Users:
  * Add a new User to the System
  * Allow users to save events to a personal Events array
  * Delete a User from the System
* Event:
  * Add a new Event to the System
  * Delete an Event from the System
* Filter:
  * Note: You can use two separate filter functions or _one_ if you'd like an extra challenge :)

### Instructions for adding Tests

1. Go back to your original javascript file where you defined your EventRecommender, Event, and User classes. Refamiliarize yourself with what you did here. We will be adding *Jasmine Tests* for each function defined in your EventRecommender. In the bottom of this file, add the line: `module.exports = EventRecommender;`
2. Run `npm install jasmine -g`
3. In your project root, run `jasmine init`
4. In the new `spec` folder created after you ran `jasmine init`, make a new file called `EventRecommenderSpec.js` and copy the code from https://gist.github.com/judytuna/50e8a78629767cff988d5e767dc6449e into it. The only javascript file Jasmine should look at is your original javascript file. (You don't have to test your jQuery scripts in this exercise.)

### Tips

* Although your wireframe will not be assessed, we highly recommend looking at websites that have successful UIs for creating, retrieving, updating, deleting, and filtering data, and wireframe your design before starting to code with jQuery, HTML, or CSS.  Consider designing a desktop and a mobile version to make coding as straight-forward as possible.  It will be much easier overall!
* If you 'finish early', use your extra time to get user feedback and refine your app as much as you can.

### Good luck!
