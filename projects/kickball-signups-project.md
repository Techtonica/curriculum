## Assessment #9: Kickball Signup Sheet

### Languages

- JS
- MongoDB

### Frameworks

- React

### Libraries/ Tools

- Jest
- Enzyme
- Auth0
- Mongoose

### Primary Goals

Demonstrate understanding of React, Enzyme, Jest, MongoDB, Mongoose, and Auth0 by creating a simple sign-up app.

### Overview

In this project, you will build a log-in page and a sign-up page for a fictional kickball tournament happening whatever date you like, using the technologies listed above.

### Basic Requirements

1. You can do online research, but do not share knowledge with other participants today.
2. Your project is due at the end of the day.

## Setup Instructions

1. Since you already installed create-react-app during the React topic, navigate to your projects folder on the command line and enter:
   `create-react-app kickball-signup`

2. Initialize a git repo in your new kickball-signup folder and track it using git. You will be turning your repo in at the end of the day.

## Project Instructions

---

#### Part 1 - React

- [ ] You must route the app so it has 2 pages - an initial page with a sign-in button, and a kickball sign-ups page. After clicking the log-in button, you user should be taken to the Kickball sign-ups page.
- [ ] Create a form with 1 input. It should be labelled 'Enter your name' or something similar. Make sure the input value is reflected in the state.
- [ ] There should be a submit button labeled something like "sign me up!". Design it so that when the submit button is clicked, it calls a function that makes an ajax or fetch request to your server.
- [ ] After submitting, a list under the form should contain the new name.

---

#### Part 2 - MongoDB

- [ ] Create a new mongoDB environment and user on mLab, and create a document to start with a few dummy names on your sign-up list.
- [ ] Install a Nodejs/ExpressJS backend.
- [ ] Create working get and post methods for your app using Mongoose.
- [ ] Remember to save all your mLab and Auth0 secrets in an .env file.

---

#### Part 3 - Auth0

- [ ] Add Auth0 authentication
- [ ] have the sign-in button on your initial landing page redirect the user to the Auth0 log-in.
- [ ] Show the sign-in page when the user is not logged in; otherwise show the kickball sign-ups form page.
- [ ] Create a sign-out button on the Kickball signups page that erases the auth token from the client's local storage.

---

#### Part 4 - Enzyme

- [ ] Add shallow and mount testing with Enzyme and Jest to all of your React components.

---

#### Part 4 - Submit your project

- [ ] Send the URL of your GitHub repo to your Program Manager. You will learn how to deploy your finished app on Monday.
