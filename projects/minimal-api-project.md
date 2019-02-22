## Week 7, Assessment #8 - Build a Minimal API Project

### Languages

- JS
- Git
- bash
- SQL

### Frameworks

- ExpressJS

### Libraries/Tools

- NodeJS
- PostgreSQL
- Sequelize
- Postman

### Primary Goals

This assessment will check for proficiency in: NodeJS, ExpressJS, data modeling, .env secrets, SQL, relational databases, and CRUD. 

(We will cover Database Migrations, API testing, and REST in future assessments.)

### Overview

In this project, you will build a minimal Express API to demonstrate your understanding of backend technologies.

### Context

- After learning Node, Express, SQL, Postgres, and API concepts, you will use them to build your own API.
- We are only consuming our API with Postman for now. We'll get to front end technologies later.

### Basic Requirements

1. Start with [Using SQL and Node.js with Sequelize](https://teamtreehouse.com/library/using-sql-and-nodejs-with-sequelize) on Treehouse (44 mins)
1. Create a new table
1. Connect a db to your project using .env variables
1. Create a get route to fetch all your table data
1. Create a get route to fetch part of your data
1. Create put, post, and delete routes
1. Draw 2 data models and include them in the project ReadMe.md
1. Build a relational database

## Project Instructions

### Starter Code
1. Port your code to your computer.

2. Initialize your new project folder for git, and get a new remote GitHub repo ready so you can save and push as you make progress on your project.  You will be submitting your GitHub repo link once you finish.

-----

### Project

#### Part 1 - Create a complete minimal API with your Express App.

**Data Models**  
- Draw a clear data model digitally or by hand for the 'users' table, and add the picture to a project README.md.  Start with a user that looks like this:
{
name: "string"
}

**SQL**  
- Create a new DB instance on elephantsql.com.
- Follow your data model to create a table in the "Browser" section of elephantsql.com.

**.env**  
- Save all details from your database instance into your local project securely, making them into variables usable in your js files.

**NodeJS & ExpressJS**
- Add a route that allows users to retrieve the data from your database.

**Unit Tests**  
- Create at least one passing unit test for each route.

```PAUSE:  Take a lunch break, and then move onto part 2.```

-----

#### Part 2 - Relational Database & CRUD Operations

**Data Models/Relational Databases**    
- Draw a clear data model digitally or by hand for a relational table for your 'events', and add the picture to a project README.md. 
- Change your 'users' table data model so that it is related to the 'events' table. Hint: your user should be changed to look like this:
{
name: "string",
events: [event ids]
}

**Database Migrations**  
- Add an 'events' table
- Change your 'users' table so that it is related to the 'events' table.

**NodeJS & ExpressJS**
- There should also be an route to query just one field or one value from your table.
- Build routes for PUT, POST, and DELETE requests to your DB.

**Unit Tests**  
- Create at least one passing unit test for each PUT, POST, and DELETE route.
-----

#### Part 3 - Turn in your project
- Your project should run.  Be sure to add clear directions for starting your app in your readme.md
- Your Readme should have an example for each type of request someone could make to your API - you should have 5.
- A request with Postman or another GUI to any of your ReadMe examples should return a successful reponse.
- Push your final project up to your GitHub repo.  Be sure that your readme appears in the main repo page, your image(s) load successfully, and that your markdown notation is correct.
- Email your repo URL to your Program Manager.

-----

### Extensions
- If you've met all the criteria, practice by adding as many different types of passing tests as you can!
