### Full-Stack PERN Project: Contact List App

### Introduction

You've now learned how to create a full-stack app with a React frontend, Node/Express backend, and Postgres database (PERN). This project is to practice putting it all together by building a fairly simple app from start to finish.

### Instructions/Notes

- For this project, you can reference previous lessons and find your own resources online. This should be good practice finding resources and getting the help you need to make your code work without step-by-step instructions.
- You must use Express, React, and Postgres. You can choose what other technologies and libraries you want to use as well as part of the project.
- All code should be your own or _become your own_, i.e. you should understand what it's doing, even if it's a snippet from StackOverflow. If you get an idea from somewhere or someone, please add an attribution note in a comment.
- **Styling/CSS is not important for this assignment**, but once the behavior is working, please feel free to make it look nice.

# Overview

Let's make a contact list app. Use of the [Techtonica Template created with Vite](https://github.com/Techtonica/curriculum/tree/main/projects/2023TemplateWithVite) is required.

### Backend:

You need to use Postgres and Express to connect your DB.
Your DB should have a table "contacts" with at least this columns:

- Contact ID
- Name
- Email
- Phone
- Notes

### Front-End.

Please make sure that your components in the React app have this distribution.
![Screenshot](https://github.com/Yosolita1978/screenshoots/blob/main/week11/lo90b1.jpeg?raw=true)

- Home (App) - Parent
- contacts - Child - Renders a list with all your contacts.
- view-contact - child - Renders the info of ONE individual contact
- create-contact- child - Renders a form for the user to add a new contact

#### Features:

- A list with all your contacts
- A form so you can submit a new contact
- An "Edit" button in front of the name of your contact with the functionality to update the data
- A click option to see the individual contact detail page

#### Extra Features:

- A delete button to delete a an specific contact
- Error handling
  - Your form should use HTML input attributes to validate input and make entering data fast and easy
  - Show a user-visible error message to indicate what's wrong and how the user can fix it
- A test file to test your form component
