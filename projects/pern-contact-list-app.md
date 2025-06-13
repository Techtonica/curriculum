# Full-Stack PERN Project: Contact List App

### Introduction

Let's make a contact list app! You've now learned how to create a full-stack app with a React frontend, Node/Express backend, and Postgres database (PERN). This project is to practice putting it all together by building a fairly simple app from start to finish.

For this project, you can reference previous lessons and find your own resources online. This should be good practice finding resources and getting the help you need to make your code work without step-by-step instructions.

You must use Express, React, and PostgreSQL. You can choose what other technologies and libraries you want to use as well as part of the project.

All code should be your own or _become your own_, i.e. you should understand what it's doing, even if it's a snippet from Stack Overflow. If you get an idea from somewhere or someone, please add an attribution note in a comment.

Styling/CSS is not important for this assignment, but once the behavior is working, please feel free to make it look nice.

⚠️⚠️⚠️ _**Avoid searching “tutorial for how to make a contact list app” and following step-by-step instructions. Your final project will NOT have any tutorials, so get familiar with how things work together now!**_

### This project should show the following:

|                                     Capable of...                                      |                                                   Comfortable with...                                                    |                                                  Skilled at Using...                                                  |
| :------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
| - creating tables<br>- joining tables<br>- searching for data in tables<br>- using CSS | - Prop<br>- State<br>- Callback functions<br>- CRUD operations<br>- .map()<br>- Creating routes<br>- Saving data to a DB | - Vite<br>- React<br>- JavaScript / NodeJs<br>- Express<br>- SQL<br>- PostgreSQL<br>- Jest<br>- React Testing Library |

#### Backend

- Use SQL to add some initial data to your database - a minimum of 3 contacts should be initially populated in your app.
- Your DB should have a table "contacts" with at least these columns:
  - Contact ID
  - Name
  - Email
  - Phone
  - Notes

#### Frontend

Please make sure that your components in the React app have the following distribution:

- Home (App) - Parent
- contacts - Child - Renders a list with all your contacts
- view-contact - Child - Renders the info of ONE individual contact
- create-contact- child - Renders a form for the user to add a new contact

![Screenshoot](https://github.com/Yosolita1978/screenshoots/blob/main/week11/lo90b1.jpeg?raw=true)

#### Required Features:

- [ ] Include a top-level README
- [ ] Don't commit your node_modules file
- [ ] Must be clean and only include files related to this project
- [ ] Include a .gitignore
- [ ] A list with all your contacts
- [ ] A form so you can submit a new contact
  - [ ] A couple of **required** fields
  - [ ] A couple fields that **aren't required**
- [ ] An “edit” button in front of the contact name; with the functionality to update data
- [ ] A click option to see the individual contact detail page
- [ ] A test file to test your form component
  - See the [jest](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/jest.md), [vitest](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/vitest.md), and [RTL](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/react-testing-jest-and-RTL.md) topic outlines for more context.
- [ ] A delete button to delete an specific contact
- [ ] Error handling
  - [ ] Your form should use HTML input attributes to validate input and make entering data fast and easy
  - [ ] Show a user-visible error message to indicate what's wrong and how the user can fix it

---

Full Time Program Week 11: Contact App Part 1 of 1
