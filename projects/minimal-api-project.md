# Week 7, Review Assignment #8 - Build a Minimal API Project

### Languages

- [JavaScript](https://github.com/Techtonica/curriculum/tree/main/javascript)
- [Git](../git/git-version-control.md)
- [bash](../dev-tools/dot-profile.md)
- [SQL](../databases/sql.md)

### Frameworks

- ExpressJS

### Libraries/Tools

- NodeJS version 8.13.0
- PostgreSQL
- Sequelize
- Postman

### Primary Goals

This assignment will check for proficiency in: NodeJS, ExpressJS, data modeling, .env secrets, SQL, relational databases, and CRUD.

(We will cover Database Migrations, API testing, and REST in future assessments.)

### Overview

In this project, you will build a minimal Express API to demonstrate your understanding of backend technologies.

### Context

- After learning Node, Express, SQL, Postgres, and API concepts, you will use them to build your own API.
- We are only consuming our API with Postman for now. We'll get to frontend technologies later.

### Basic Requirements

What is this project checking for?

1. Understanding of CRUD
1. Create a new table (using a database migration)
1. Connect a db to your project using .env variables
1. Create a get route to fetch all your table data
1. Create a get route to fetch part of your data
1. Create put, post, and delete routes
1. Draw 2 data models and include them in the project README.md
1. Build functionality that makes use of a relational database
1. Experience changing database technologies with the help of an ORM

# Project Instructions

## Part 0 - Starter Code

- [ ] Follow the [Steps and Guidance](https://teamtreehouse.com/community/an-updated-guide-for-the-outdated-using-sql-and-nodejs-with-sequelize-workshop) for [using SQL and Node.js with Sequelize](https://teamtreehouse.com/library/using-sql-and-nodejs-with-sequelize) on Treehouse (44 minutes of video).

- [ ] Port your code to your computer. You may use the last code sample from the above tutorial.

- [ ] Initialize this project folder for git, and get a new remote GitHub repo ready so you can save and push as you make progress on your project. You will be submitting your GitHub repo link once you finish.

- [ ] Make sure you're using node v8.13.0.

```bash
nvm install 8.13.0
which node
node -v
```

## Part 1 - Swap out the database for Postgres

We won't be modifying app code (for the most part) in this section.

#### Data Models

- [ ] Draw a clear data model digitally or by hand for the `articles` table from the Treehouse video, and add the picture to your project README.md. We'd like to see a representation of the types of columns in the table, not an example of data in rows of the table. Something like this:

articles

| column name | data type |
| ----------- | --------- |
| id          | INTEGER   |
| title       | STRING    |

...and so on.

#### SQL

Use the psql command-line program to:

- [ ] Add a few sample articles, just so you have data to play around with.
- [ ] Print all articles.
- [ ] Print one article.
- [ ] Write those SQL commands out in your readme (there should be at least three).

#### Sequelize

- [ ] Change your project's database from sqlite3 to PostgreSQL. This will involve changing your config for Sequelize. The point of doing this is to understand why we use ORMs as an abstraction layer between your database and your app!

#### .env

- [ ] Add `dotenv` to your project.
  - Hint: `npm install --save dotenv`
- [ ] Save all details from your database instance into your local project securely, making them into variables usable in your js files.

#### Postman

Use Postman to hit each of your API's endpoints that perform CRUD operations.

- [ ] Perform a POST request that **creates** a new article. Record an example of the request body in your readme.
- [ ] Perform a GET request that **reads** a single article.
- [ ] Perform a PUT request that **updates** an existing article. Record an example of the request body in your readme.
- [ ] Perform a DELETE request that **destroys** an article. Record an example of the request body in your readme.

Use Postman to get all articles.

- [ ] Perform a GET request that returns all articles.

`PAUSE: Take a lunch break, and then move onto part 2.`

## Part 2 - Relational Database & more CRUD Operations

In this stage, we will augment our project by adding comments. Don't worry about users yet! Let's say that articles and comments have a one-to-many relationship.

- An article has many comments.
- A comment belongs to one article.

The comment should store some text.

#### Data Models/Relational Databases

- [ ] Draw a clear data model digitally or by hand for a relational table for your `comments` model, and add the picture to your README.md.
  - Hint: your existing `articles` table will not change.

#### Sequelize

- [ ] Use the Sequelize CLI (or create a database migration, up to you) to add your `comments` table with the columns you have come up with.

#### SQL, with JOIN queries this time

Using the `psql` command-line program, use SQL to:

- [ ] Add some sample comments
- [ ] Get all the comments that exist
- [ ] Get all the comments for a particular article
- [ ] Get a list of all articles with comments
- [ ] Get a list of all articles with zero comments
- [ ] Write these SQL commands in your README, too (five more, at least)

#### NodeJS & ExpressJS

You do not need to make HTML or PUG templates for any of these new actions. Just use Postman to test them.

- [ ] Make a GET route to `/comments/:id` that just returns a single comment, alone. Note that in this line, `:id` will refer to the id column of the `comments` table!
- [ ] Make a POST route to `/comments/` that makes a new comment. Don't worry about URL schemes yet, we'll get to REST soon! Today, you'll just have to manually send its article_id as part of the request body.
- [ ] In your GET route to `/:id` for a single article, add comment data.

#### Postman

Use Postman to manually test your API.

- [ ] Get a single comment by comment id
- [ ] Make a new comment. In your readme, put an example of the json body you're sending along with the POST request to achieve this.
- [ ] Get a single article by article id and see its comments, too

## Part 3 - Turn in your project

- Your project should run. Be sure to add clear directions for starting your app in your readme.
- Your readme should have an example for each type of request someone could make to your API that results in a CRUD action - you should have 7, at least.
  1. POST "/" to **create** a new article
  2. GET "/:id" to **read** a single article (and its comments)
  3. PUT "/:id" to **update** an existing article
  4. DELETE "/:id" to **delete** an article
  5. GET "/" to read all articles (without comments)
  6. POST "/comments" to **create** a new comment
  7. GET "/comments/:id" to **read** a single comment (without its article)
- A request with Postman or another GUI to any of your readme examples should return a successful response.
- Push your final project up to your GitHub repo. Be sure that your readme appears in the main repo page, your image(s) load successfully, and that your markdown notation is correct.
- Email your repo URL to your Program Manager.

## Extensions

If you've met all the criteria, here are some ways you can continue!

- Make the GET "/" route return all posts and their content, plus the number of comments per post
- Add as many different types of passing tests as you can!
