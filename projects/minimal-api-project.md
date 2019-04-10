## Week 7 Assessment - Build a Minimal API Project

### Languages
- [JS](https://github.com/Techtonica/curriculum/tree/master/javascript)
- [Git](https://github.com/Techtonica/curriculum/tree/master/git-version-control)
- [bash](https://github.com/Techtonica/curriculum/blob/master/command-line/dot-profile.md)
- [SQL](https://github.com/Techtonica/curriculum/blob/master/databases/sql.md)

### Frameworks
- ExpressJS

### Libraries/Tools
- NodeJS
- [ElephantSQL](https://api.elephantsql.com/)
- [express-generator](https://github.com/expressjs/generator)
- [Chai](https://www.chaijs.com/)
- mySQL
- Mocha
- Nock
- Postman/ Other GUIs

### Primary Goals
This assessment will check for proficiency in: NodeJS, ExpressJS, Data Models, .env secrets, SQL, Relational Databases, Database Migrations, and Express Unit tests.

### Overview
In this project, you will build a minimal Express API to demonstrate your understanding of backend technologies. This should take about 8 hours, and is due by 5pm on Friday.

### Context
- After learning Node, Express, SQL, mySQL, and API concepts, you will use them to build your own API.

### Basic Requirements
1. Download a starter Express project
1. Create a new table on a elephantsql.com database
1. Connect cloud db to your project using .env variables
1. Create a get route to fetch all your table data
1. Create a get route to fetch part of your data
1. Create put, post, and delete routes
1. Draw 2 data models and include them in the project ReadMe.md
1. Build a relational database
1. Migrate a SQL database

## Project Instructions

### Starter Code
1. Start with an express app using the [express app generator](https://github.com/expressjs/generator).
  On your command line, navigate to your projects folder and enter:
  ```
  $ npm install -g express-generator
  $ express --no-view /minimal-express-api && cd /minimal-express-api
  $ npm install; open http://localhost:3000; npm start
  ```
  You should be able to see "Welcome to Express" at localhost:3000 in your browser. You already have a node/express app!

2. Initialize your new project folder for git, and get your GitHub upstream repo ready so you can save and push as you make progress on your project.  You will be submitting your GitHub repo link once you finish.

3. Think of an example of a **person** and their **work**.  This could be a user and their blog posts, an artist and their paintings, and author and their books, a coder and their projects, a baker and their pastries, etc.  Pick or come up with a set; this will help you think of names for your data.

-----

### Project

#### Part 1 - Create a complete minimal API with your Express App.

**NodeJS & ExpressJS**
- Add a route that allows users to retrieve the data from your database.
- There should also be an route to query just one field or one value from your table.

**Data Models**  
- Draw a clear data model digitally or by hand for the 'person' table you chose(user, artist, baker, etc), and add the picture to a project README.md

**SQL**  
- Create a new DB instance on elephantsql.com.
- Follow your data model to create a table in the "Browser" section of elephantsql.com.

**.env**  
- Save all details from your database instance into your local project securely, making them into variables usable in your js files.

**Unit Tests**  
- Create at least one passing unit test for each route.

```PAUSE:  Take a lunch break, and then move onto part 2.```

-----

#### Part 2 - Relational Database & CRUD Operations

**NodeJS & ExpressJS**
- Build routes for PUT, POST, and DELETE requests to your DB.

**Data Models/Relational Databases**    
- Draw a clear data model digitally or by hand for a relational table for your 'works', and add the picture to a project README.md

**Database Migrations**  
- Add a 'works' table (blogposts, paintings, pastries, or whatever you chose)
- Change your 'person' table so that it is related to the 'works' table.

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
