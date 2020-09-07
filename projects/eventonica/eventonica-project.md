# Eventonica Project

### Languages

- [SQL query](https://github.com/Techtonica/curriculum/blob/main/databases/sql.md)
- [JavaScript](https://github.com/Techtonica/curriculum/tree/main/javascript)

### Frameworks & Libraries

- [Inquirer](https://www.npmjs.com/package/inquirer)
- Working with [Eventful APIs](http://api.eventful.com/)

### Primary Goals

1. Learn to work with Node.js and PostgreSQL in order to set up a working back-end
2. Understand asynchronous functions and their callbacks
3. Understand SQL joins

### Overview

In this project you will create a Command-Line-Interface (CLI) app.

Phase 1 of the project involves making sure the proper tools are installed.

Phase 2 of the project involves making a basic CLI app that has a
"complete-the-sentence" function in Inquirer.

Phase 3 of the project involves adding an additional feature: the CLI app can
now create additional users and store that information in PostgreSQL.

Phase 4 of the project involves adding an additional feature: using
[eventful-node](https://www.npmjs.com/package/eventful-node) to perform AJAX
requests in order to pull data from the [Eventful API](http://api.eventful.com/),
and giving the user the option to save to your own PostgreSQL database.

Phase 5 of the project involves adding the final 3 features: matching a user
with an event, reading all the users of a particular event, and reading all
the events of a particular user. You'll work with an inner join (many-to-many
relationship junction) table.

### Context

This is a CLI because we are focusing on using an API to interact with a database.
We are specifically not implementing a graphical front end for Eventonica this week!
We'll get to that in a future week.

### Basic Requirements

1. Complete setup.
2. Finish writing out the functions.

## Setup Instructions

Follow [Setup Postgres](../../databases/installing-postgresql.md) if you haven't already.

## Lab Instructions

### Starter Code

You'll be making your own fork of this [starter code](https://github.com/Techtonica/curriculum/tree/main/projects/Eventful-API-test-page), and building on top of it.

### Lab Exercise

**Note:** In this project, the instructions to complete the project after the
installation & setup steps will be increasingly vague. This is done
intentionally to get you used to thinking like a software engineer.

#### Part 1 - Installation and Setup

1. Fork the starter code to your own GitHub account, then clone your fork to your local machine. Don't forget to `cd` into your new folder =)
1. Create a blank `keys.js` file in your project root.
1. Go to [Eventful's API page](http://api.eventful.com/), create an account, and apply for your own API key. The application process for an API key is instant. The API Key registration asks for a mailing address and phone number. These cannot be left blank, but typing "N/A" in the fields works.

1. Tell your app about your new Eventful API key as well as your PostgreSQL database by adding the following to your `keys.js` file:

`json module.exports = { "eventful": '<YOUR_OWN_EVENTFUL_API_KEY_HERE>', "dbPassword": '<YOUR_EVENTONICA_POSTGRES_PASSWORD_HERE>' }`

1. Run `npm start`, `yarn start` or `nodemon` in the terminal. Now uncomment the `dbConnect()` line.
     You should see the console produce some lines about Eventonica, YAY!

> **PAUSE.** Help your group members finish Part 1.

#### Part 2 - Basic CLI App

Try running `index.js` with Node/Nodemon to see how Inquirer works. Play with it;
once you feel comfortable, start looking at the starter code and also skim
through this [Inquirer.js tutorial](https://www.donsblog.pro/2018/02/node-inquirerjs-tutorial-interactive.html).
If you want to check out something a little more comprehensive, the project itself has [many examples](https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples) which demonstrate specific input methods that the library supports.

When you're composing your questions think about what information the user of the app will have, and how do you make it as easy as possible to "get the answers right".

- Make the questions (requests for data) unambiguous
- Where possible, give the user choices to make, rather than having to enter free-form text
- Validate as much as is reasonable at input time - the sooner you ask people to fix their input data, the less frustration they'll have with using your app.

Command Line Interfaces (CLIs) are a great place to use your regex skills to get the data right.

Now implement the first option: "Complete a sentence."
Use inquirer to ask users for 2 string inputs to console log a complete sentence.

Examples of a sentence to be completed (feel free to make up one on yourself):

- My favorite color is [COLOR], so my dream is to buy a [COLOR][item].
- I play [SPORT] professionally, and my position on the team is [POSITION].

So if you choose the first example, and the user enters "red" and "house", you
should see "My favorite color is red, so my dream is to buy a red house."

#### Part 3 - Adding User

Learn about pools and clients by reading the documentation for [node-postgres](https://node-postgres.com/api/pool).

Now implement the ability to create new users.
First create a database in Postgres (in your graphical client app or terminal) called "eventonica", and then create a
Users and an Events table.

Switching back to JavaScript in VSCode, using Inquirer, implement code in `app.createNewUser` to ask for a new fictitious users name and age, or some other attribute. Then, display this information and save it to your Postgres database.

Finally, using your database client, run a `SELECT` query against your Users table to verify that your users are successfully created.

#### Part 4 - Eventful API AJAX

Run the starter code in eventfulAPI.js and read about [eventful-node](https://www.npmjs.com/package/eventful-node) and [Eventful API](http://api.eventful.com/docs/events/search)
Once you feel comfortable about understanding what the code is doing, commenting out the example search code and implement your custom search code in `app.searchEventful`.

Use Inquier to:

1. Ask app user to input a keyword to search on Eventful, example: "dancing", "fashion", etc.
1. Display the first result that comes back from Eventful, and ask app user if they would like to save this to the Postgres database.
1. If app user chooses yes, then make that save.
1. If app user chooses no, then go back to step 1 of part 4

> Look at your console log UI and you should see new events.

**Examine Program flow**  
Our program is taking the following steps:

- asking user for input =>
      - retrieve data from API =>
          - display data and then ask user whether to save =>
              - saving or go back to step 1

Each of these steps requires the result of the previous. In order to implement
this, you'd have to use either callback chaining OR promises. Promises require
more setup but it creates cleaner-looking code. Part 4 should take the
majority of your project time as there are a lot of steps involved.

#### Part 5 - Creating and Reading a Junction Table

**Note** This step is shorter but is about leveling up your knowledge of SQL
by giving you experience using a junction table and JOINs. It can be tricky
so watch out for frustration!

Now that we have Users and Events, let's start to add the ability to create
relationships between them. One user can be marked as attending multiple
events, and one event can have multiple users attending it.
This is called a Many-to-Many relationship. Watch this [tutorial](https://www.youtube.com/watch?v=a-o0d_e9mW8) to learn more about them.

Using a junction (inner-join) table, complete the 3 remaining features/functions:

- app.matchUserWithEvent()
- app.seeEventsOfOneUser()
- app.seeUsersOfOneEvent()

#### Part 6 - Add tests to the Front End and Back End of your app

Make sure each endpoint and function has a simple passing test. Then add as
many as you can!
