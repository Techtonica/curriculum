# Adding Tests to your Node.js project

## Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)
- [Jasmine Testing](jasmine-testing.md)
- [Mocking and abstraction](mocking-and-abstraction.md)

## Motivation

- Up to now, we've been talking about _unit testing_. Unit testing is about ensuring a function behaves as expected, independent of other parts of the software system.

  In most codebases, functions are not just called by other functions within the codebase. They are also called by _user interfaces_ and sometimes even by other programs!

- When one program calls a function from within another program, that's an **API**! APIs, or **"Application Programming Interfaces"**, are everywhere! Most APIs are distributed either as a library that you add to your `package.json` and start using right away or are exposed over the web via HTTP.

  Unit testing is a powerful core skill for building maintainable software. The skills you're learning with Jasmine, Mocha, or other testing frameworks can be built upon to do _integration testing_!

- Integration testing differs from unit testing in that it’s about checking how our code works when it’s calling or being called by other programs.

## Objectives

**Participants will be able to:**

- Understand the basics of testing, APIs and backend ([Section 1](#1-Introduction-to-testing-and-backend))
- Use Postman (a testing tool) for testing your API/HTTP requests. ([Section 3](#3-New-Tool-Postman))
- Write code to test GET, PUT, POST and DELETE requests in your project ([Guided Practice](#Guided-Practice))
- Make a basic TODO app with unit testing to test database and other external services ([Guided Practice](#Guided-Practice))

## Specific Things to Learn

**Note**: We've included links to guides on each of these when available for
easy reference later. These are also included when applicable during the
lesson.

We do not expect you to do the tutorials linked in this "Specific Things to Learn" section today.

### General testing tools:

- [Mocha](https://mochajs.org/) (Website)
- [Chai Assertion Library](https://www.chaijs.com/) (Website)
- [Guide to Postman Navigation](https://www.toolsqa.com/postman/postman-navigation/) (Website)
- [Guide to how to a response in Postman](https://www.toolsqa.com/postman/response-in-postman/) (Article)
- [Guide to how to make a POST Request](https://www.toolsqa.com/postman/post-request-in-postman/) (Website)
- [Supertest](https://www.npmjs.com/package/supertest) (Website)
- [Node.js Tests: Mocking HTTP Requests](https://www.digitalocean.com/community/tutorials/nodejs-tests-mocking-http-requests) (Article)
- [Guide to Nook](https://github.com/nock/nock) (Website)
- [Guide to simple-mock](https://www.npmjs.com/package/simple-mock) (Website)

In additional to the linked material above associated with specific technologies that we'll be using there is some more general reading that will help provide depth to your understanding of API testing.
- [Backend Testing Slides](https://docs.google.com/presentation/d/1no4BY2e74QoHJlkO7LIOV-qlcqQ2viQbyJlEDyptmeY/edit?usp=sharing) (Google Slides)
- [7 HTTP methods every web developer should know and how to test them](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them) (Article)


## Required Dependencies
This lesson uses the following key dependencies:
- `express` - Web framework
- `pg` - PostgreSQL client
- `mocha` - Testing framework
- `supertest` - HTTP assertion library

All dependencies are included in the provided package.json.

#### Code Samples Used During Guided Practice
- **Step 1** — a snapshot of the TODO app that works but is neither tested nor built to facilitate testing
- **Step 2** — the TODO app has gotten a basic set of unit tests that protect against functional regressions and demonstrates how to test an external service dependency
- **Step 3** — with one final structural change our sample app enables (and adds) testing for the code that interacts with our database

## Intro to Testing & Backend

#### Establishing Terminology
Within the context of this lesson, a **`backend`** is an API that supports a collection of features. It often (but not always) exposes its interface through HTTP requests and returns JSON objects as responses. A **`backend`** can refer to the service you're writing, but it can also be something your service depends on. For example:
- A database may act as a backend to your service.
- Your service could function as the backend for your users.
- The GitHub API might be a backend your project relies on.

1. **"Your project"**: This refers to the code you write for Node.js.
1. **"API" / "API testing"**: This refers to your Node.js project that exposes its features to the world through an HTTP API. This term also includes the testing necessary to ensure proper handling of requests.
1. **"Backend" / "Service"**: This refers to an API you call via HTTP, often from your project.
1. **"Database"**: This is a specific backend your project uses to store and retrieve data.

#### Getting Started: Is API and backend/database testing special?
We've already talked about testing and how it's important to verify code quality over time / as you make changes. Why then is it worth discussing API / backend testing, isn't that just more of the same?

_**Well, kind of; but not really...**_

These tests are important for the same reason: We need to ensure that our code works as expected and to protect correct behavior. So framed as "is testing important," yes it can be pretty much thought of as just more of the same. However when you actually sit down to write these tests the interactions with external requests (to your project) and APIs introduce interesting new difficulties.

#### Addressing New Challenges
So what are some of these new challenges and how to we address them?
1. We are often consumers of an external backend and don't control its behavior;
2. The services we use typically strive for uptime, given this how do we test our project's behavior when those services fail;
3. Making calls to external services or databases often require network access (or use of them is costly), both of which incentivize writing less comprehensive tests;
4. Running an API means we need to test our processing of HTTP requests which is not necessarily technically obvious;
5. When handling HTTP requests our API needs to map from user input via query string into some format that our code expects.

There are other issues but learning how to address these is a great start and covers the foundational skills necessary to provide great test coverage for your project.

#### Key Concepts & New Tools
The plan here is to first discuss some key concepts and tooling that you'll use while writing unit tests for your project and then dig into concrete examples in a small node.js + express project and corresponding tests.

How you consume this will depend your learning style. My suggestion is to skim over [*Mocking and Abstraction*](mocking-and-abstraction.md) lesson then work through the examples. It's pretty normal for writing code with modularity and testing in mind so don't fret if it takes more than a couple of passes for things to fall into place.

### New Tool: Postman
Postman is a user interface that allows you to create and customize HTTP requests while inspecting their results. ToolsQA offers a helpful collection of Postman tutorials. You can start by skimming the following guides:
- [Postman's Navigation](https://www.toolsqa.com/postman/postman-navigation/) (Website)
- [Response in Postman](https://www.toolsqa.com/postman/response-in-postman/) (Website)
- [Postman Post Request](https://www.toolsqa.com/postman/post-request-in-postman/) (Website)

**Why use Postman?**
When building an API it's often *much* easier to wire up a test request in Postman than to build an HTML form (or similar) to fire off some test requests against your API.

_**Q: If Postman makes it super easy to test why shouldn't we just build all our API tests using it?**_
A:  Postman primarily makes it simple to do blackbox integration or end-to-end API testing. It's important to test this but recall that [there are good reasons](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html) to not rely on end-to-end testing.


## Guided Practice
In this practice we're going to combine all the things we've talked about above to build a simple `TODO` app that allows you to read and create `TODO` items and is unit tested. We'll also cover a few approaches to testing DB calls that we don't provide sample code.

We'll be working with a database with the following schema:

```sql
-- ElephantSQL.com uses PostgreSQL so this is a PostgreSQL CREATE call; it
-- varies slightly from the MySQL equivalent.
CREATE TABLE todo_items (
-- If run against MySQL this would be `id INT(10) AUTO_INCREMENT`
  id SERIAL,
  entry TEXT NOT NULL,
PRIMARY KEY(id)
);
```


=======++DAAIMAH
Insert folder reference "api-testing-lesson" here
=======++DAAIMAH

### Set up your project
1. Download the provided starter code from the Code Project above
2. Run `npm install` to install dependencies
3. Review the TODO comments in each file to understand what needs to be implemented


### Basic Implementation
Start by implementing the basic functionality in `server.js`. This example shows the pattern you'll be implementing:

```javascript
// This example is now provided as starter code in test/api.test.js
// Students should complete the TODO comments to implement:
// 1. Mock database functions
// 2. Route construction with dependency injection
// 3. Supertest assertions
```

### Refactoring for API Tests / Challenge
1. Complete the TODO comments in `setup.js` to implement route handlers
2. Complete the TODO comments in `test/api.test.js` to implement:
    1. GET route tests with mocked database
    2. Error handling tests for database failures
    3. POST route tests with validation
3. Run `npm test` to verify your implementation

Take some time to get a feeling of how this works. Once there try to take the concepts in it and write unit tests for the case where the database calls fail. Now write the `POST /` test.

What about things that aren't databases? How would you use the same principles to build testable code that utilizes external services?

### Database Integration / Challenge
1. Set up a PostgreSQL database with the provided schema
2. Configure environment variables for database connection
3. Complete the TODO comments in `database.js` to implement:
      1. Real database connection using pg Pool
      2. getTodos function with proper error handling
      3. createTodo function with parameterized queries
4. Complete the TODO comments in `test/database.test.js` for database testing
5. Update `server.js` to use the real database instead of mock functions

### Refactoring for API Tests / Reference Implementation
The complete reference implementation is provided in the Code Project above with detailed TODO comments to guide your implementation.

## Independent Practice

- Deploy your own version of the sample TODO project to Netlify, Fly.io, or
  similar
- Experiment with Postman to create new TODO item
- Add a test for `/items` to make sure that the HTML version displays as we
  expect; don't forget to include the case where your DB call fails

#### Challenge

Try to expand the sample TODO app that we've written:

- Enable requests that get specific TODO items
- Support deleting a TODO item
- Add TODO lists that are specific to different users of the system
- Add an endpoint to implement marking an item as completed (and update the
  database schema, too)

And, of course, write unit tests for each of your new features!

## Check for Understanding

- Pair with your partner and do a Q&A on backend testing; some example
  topics:

  - How API / backend testing is different from unit tests you've previously written
  - What are the benefits of not testing against live external services

- Trade code with another participant and review their solution to find how they used the principles we discussed; are there any improvements you can find for better readability or maintainability?

## Supplemental Materials

- [Tutorial on how to build a simple app using Node JS and MySQL](https://dev.to/achowba/build-a-simple-app-using-node-js-and-mysql-19me) (Article)
- [Guide to Node-Postgres](https://node-postgres.com/guides/project-structure) (Website)
- [Guide to Express](https://expressjs.com/en/4x/api.html) (Website)
- [Guide to Superagent](https://github.com/ladjs/superagent) (Website)
- [Database Testing - Software Testing](https://www.geeksforgeeks.org/software-testing-database-testing/) (Article)
