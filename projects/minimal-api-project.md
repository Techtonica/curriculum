# Week 7, Assessment #8 - Build a Minimal API Project

### Languages

- JS
- Git
- bash
- SQL

### Frameworks

- ExpressJS

### Libraries/Tools

- NodeJS version 8.13.0
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

What is this project checking for? 

1. 
1. Create a new table
1. Connect a db to your project using .env variables
1. Create a get route to fetch all your table data
1. Create a get route to fetch part of your data
1. Create put, post, and delete routes
1. Draw 2 data models and include them in the project ReadMe.md
1. Build a relational database

## Project Instructions

### Starter Code

0. Start with [Using SQL and Node.js with Sequelize](https://teamtreehouse.com/library/using-sql-and-nodejs-with-sequelize) on Treehouse (44 mins)

1. Port your code to your computer. Use a new project folder.

2. Initialize this project folder for git, and get a new remote GitHub repo ready so you can save and push as you make progress on your project.  You will be submitting your GitHub repo link once you finish.

3. Make sure you're using node v8.13.0.

```bash
nvm install 8.13.0
which node
node -v
```

-----

### Project

#### Part 1 - Swap out the database for Postgres

We won't be modifying app code (for the most part) in this section.

**Data Models**  
- Draw a clear data model digitally or by hand for the `articles` table from the Treehouse video, and add the picture to your project README.md. We'd like to see a representation of the types of columns in the table, not an example of data in rows of the table. Something like this:

articles

| column name | data type |
| --- | --- |
| id    | INTEGER |
| title | STRING  |

...and so on.

**SQL**  
Use the psql command-line program to:
- Create the 'articles' table anew in Postgres. 
- Add a few sample articles, just so you have data to play around with. 
- Print all articles. 
- Print one article. 
- Write those SQL commands out in your readme.

**Sequelize**
- Change your project's database from sqlite3 to PostgreSQL. This will involve changing your config for Sequelize. The point of doing this is to understand why we use ORMs as an abstraction layer between your database and your app! 

**.env**  
- Add `dotenv` to your project.
- Save all details from your database instance into your local project securely, making them into variables usable in your js files.

**Postman** 
Use Postman to perform CRUD operations on a single article through your existing API. 
- Create a new article. 
- Read the new article.
- Update an existing article.
- Destroy an article.

```PAUSE:  Take a lunch break, and then move onto part 2.```

-----

#### Part 2 - Relational Database & more CRUD Operations

In this stage, we will augment our project by adding comments. Don't worry about users yet! Let's say that articles and comments have a one-to-many relationships. 

- An article has many comments. 
- A comment belongs to one article.

**Data Models/Relational Databases**    
- Draw a clear data model digitally or by hand for a relational table for your `comments` model, and add the picture to your README.md. 
- Hint: your `articles` table does not need to change.

**Sequelize**
- Use the Sequelize CLI to add your `comments` table with the columns you have come up with.

**SQL, with JOIN queries this time**  
Using the `psql` command-line program, use SQL to:
- Add some sample comments
- Get all the comments that exist
- Get all the comments for a particular article
- Get a list of all articles with comments
- Get a list of all articles with zero comments
- Write these SQL commands in your README, too

**NodeJS & ExpressJS**
- Make a GET route that just returns a single comment, alone 
- Make a POST route that makes a new comment. Don't worry about URL schemes yet, we'll get to REST tomorrow! You'll have to send which Article it belongs to as part of the body.
- In your GET route for a single article, add its comments in the json returned
- There should also be an route to query just one field or one value from your table.
- Build routes for PUT, POST, and DELETE requests to your DB.

**Postman** 
Use Postman to manually test your API.

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
