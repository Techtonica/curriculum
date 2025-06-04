[//]: # 'TODO'
[//]: # '  - Still need slides'
[//]: # "  - This hasn't really been proofed yet and I'm _real bad_ about typos <3"
[x]: # '  - we should move all the @falun owned repl.it links to techtonica'
[//]: # '  - the backend snapshots should start move off my elephantsql.com account'
[//]: # "    at some point I'll delete the database it's using which will break the"
[//]: # '    sample; when we _do_ rehome the sample change the following links:'
[backend-i]: https://repl.it/@techtonica/BackendTesting-I
[backend-ii]: https://glitch.com/edit/#!/zee-techtonica-backend-testing-ii?path=index.js:37:0
[backend-iii]: https://repl.it/@techtonica/BackendTesting-III

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

### Materials

In additional to the linked material above associated with specific
technologies that we'll be using there is some more general reading that will
help provide depth to your understanding of API testing.

- [Backend Testing Slides](https://docs.google.com/presentation/d/1no4BY2e74QoHJlkO7LIOV-qlcqQ2viQbyJlEDyptmeY/edit?usp=sharing) (Google Slides)

- [7 HTTP methods every web developer should know and how to test them](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them) (Article)

#### Code samples provided

We will get to these code samples during Guided Practice.

- [Step 1][backend-i] &mdash; a snapshot of the TODO app that is works but is
  neither tested nor built to facilitate testing
- [Step 2][backend-ii] &mdash; the TODO app has gotten a basic set of unit
  tests that protect against functional regressions and demonstrates how to
  test an external service dependency
- [Step 3][backend-iii] &mdash; with one final structural change our sample app
  enables (and adds) testing for the code that interacts with our database

## Lesson

### 1. Introduction to testing and backend

#### 1.1 Establishing some terminology

Before we get started, let's establish some ground rules for how we use terminology in this lesson.

Within the context of this lesson, a **`backend`** is an API that supports a collection of features. It often—but not always—exposes its interface through HTTP requests and returns JSON objects as responses.

A **`backend`** can refer to the service you're writing, but it can also be something your service depends on. For example:

- A database may act as a backend to your service.
- Your service could function as the backend for your users.
- The GitHub API might be a backend your project relies on.

### Key Terms

- **"Your project"**: This refers to the code you write for Node.js.
- **"API" / "API testing"**: This refers to your Node.js project that exposes its features to the world through an HTTP API. This term also includes the testing necessary to ensure proper handling of requests.
- **"Backend" / "Service"**: This refers to an API you call via HTTP, often from your project.
- **"Database"**: This is a specific backend your project uses to store and retrieve data.

#### 1.2 Getting Started: Is API and backend/database testing special?

We've already talked about testing and how it's important to verify code
quality over time / as you make changes. Why then is it worth discussing
API / backend testing, isn't that just more of the same?

Well, kind of; but not really...

These tests are important for the same reason: We need to ensure that our
code works as expected and to protect correct behavior. So framed as "is
testing important," yes it can be pretty much thought of as just more of the same. However when you actually sit down to write these tests the interactions with external requests (to your project) and APIs introduce interesting new difficulties.

#### 1.3 Facing new challenges

So what are some of these new challenges and how to we address them?

1. We are often consumers of an external backend and don't control its behavior;
2. The services we use typically strive for uptime, given this how do we test our
   project's behavior when those services fail;
3. Making calls to external services or databases often require network access (or
   use of them is costly), both of which incentivize writing less comprehensive
   tests;
4. Running an API means we need to test our processing of HTTP requests which is
   not necessarily technically obvious;
5. When handling HTTP requests our API needs to map from user input via query
   string into some format that our code expects.

There are other issues but learning how to address these is a great start and
covers the foundational skills necessary to provide great test coverage for
your project.

#### 1.4 Key Concepts and New Tools

The plan here is to first discuss some key concepts and tooling that you'll
use while writing unit tests for your project and then dig into concrete
examples in a small node.js + express project and corresponding tests.

How you consume this will depend your learning style. My suggestion is to skim over [_Mocking and Abstraction_](mocking-and-abstraction.md) lesson then work through the examples. It's
pretty normal for writing code with modularity and testing in mind so don't
fret if it takes more than a couple of passes for things to fall into place.

### 2. New Tool: Postman

Postman is a user interface that allows you to create and customize HTTP requests while inspecting their results. ToolsQA offers a helpful collection of Postman tutorials. You can start by skimming the following guides:

- [Postman's Navigation](https://www.toolsqa.com/postman/postman-navigation/) (Website)
- [Response in Postman](https://www.toolsqa.com/postman/response-in-postman/) (Website)
- [Postman Post Request](https://www.toolsqa.com/postman/post-request-in-postman/) (Website)

**Why use Postman?**

- When building an API it's often _much_ easier to wire up a test request in Postman than to build an HTML form (or similar) to fire off some test requests
  against your API.

**Why not just use Postman?**

- If Postman makes it super easy to test why shouldn't we just build all our API tests using it?

- Postman primarily makes it simple to do blackbox integration or end-to-end API testing. It's important to test this but recall that [there are good reasons](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)
  to not rely on end-to-end testing.

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

### GP 0: Set up your project

0. Create a new folder for your project by following these sub-steps:

   1. `mkdir todo` or whatever you want to name this new folder (and project)
   2. `cd todo`

1. Once you're in your brand-new folder, use `npm init` to initialize a new node project.

   1. In your terminal, type `npm init` and press enter. This will start a new tiny command line program that helps you set up your new node project. (It will save your answers in package.json and set up some other config files for you.)

   2. The first thing it asks you is "what do you want the name to be?" (It asks for the package name because it's assuming you're making an npm package.) Notice that after the prompt, there is a _default value_ in parentheses. Whenever you see a default value in parentheses, go ahead and press "enter" to simply use the default value.

   3. Next it asks for a version, and supplies the default value (1.0.0). Go ahead and just press enter again.

   4. Continue until you get to "description" which doesn't have a default value. Write whatever short description you want, like `todo app with tests`. You can edit this later.

   5. Keep using the default value for prompts (like accept that the entry point will be `index.js`) until the tiny `npm init` program ends and you get back to your normal command line prompt.

2. Back on your normal command line prompt, install your project's dependencies: `npm install --save body-parser express pg`

3. Install your project's test dependencies: `npm install --save-dev chai mocha nock supertest`

4. Set up your database and `todo_items` table by following these steps:

   1. Create a new free database on [ElephantSQL](https://elephantsql.com/); they have [a guide](https://www.elephantsql.com/docs/index.html) for this process.
   2. Use [pgAdmin](https://www.elephantsql.com/docs/pgadmin.html) or their
      "Browser" view to run the `CREATE TABLE` command (above) on your database

### GP 0: Set up your project / A quick summary of accessing a DB

Your connection to most relational databases can be described in a
_connection string_. It bakes into it a lot of information:
`<dbtype>://<username>:<password>@<host>/<dbname>`. This is then passed
to the library you use to run queries (`SELECT`, `INSERT`, `DELETE`, etc).
We accomplish this with the following:

```javascript
const dbPool = new pg.Pool({ connectionString: dbConnString });
dbPool.on('error', (err, client) => {
  console.error('Unexpected error on client', err);
  process.exit(-1);
});
```

After this we can make queries to the database by using `dbPool.query(...)`. Its documentation is [here](https://node-postgres.com/features/queries) but the short version is that it takes
three arguments:

1. the query to be run, e.g., `SELECT * from todo_items`
2. (optional) any arguments that are passed into the query
3. a callback that will be made once the query is completed

This should be enough to get you running but if you want to read more about
connecting to a database I suggest the [connecting](https://node-postgres.com/features/connecting) and [pooling](https://node-postgres.com/features/pooling) docs.

### GP 1: First steps

(GP 1 stands for "Guided Practice Step One" here.)

You know how to build Express apps and much of the code for implementing the necessary paths (`GET /`, `GET /items`, and `POST /`) is available above in the _Abstraction_ section. We also just talked about how to connect to a database.

If you put those three things together it's enough to get a simple project
running that connects to your database and gets you started managing and viewing TODO items. Don't worry about tests just yet, we'll make some changes that make it easier.

### GP 1: First steps / Challenge

Once you've got the three methods up and working look at how we
refactored the read methods to make DB accesses easier to read and maintain with `getTodo`. Rewrite the `POST /` handler to use a similar approach so that the handler doesn't have SQL directly inside it.

Once you have it working there is a reference implementation on [repl.it][backend-i].

#### Interlude: Testing APIs with `supertest`

Read through [Testing Node.js with supertest][supertest-intro]. Much of this will be familiar but it introduces a new library called `supertest`. At its core this allows you to easily do in your unit tests what Postman was letting you do to experiment.

### GP 2: Refactoring for API Tests

Now that we've got the core features solid Let's start with adding tests to our API endpoints so that if anything breaks in the future we'll catch it.

The first thing we'll need to do is get the fixed reference to `getTodo` out of the route handlers. We need to do this because it's much easier when testing to only worry about ensuring that our code does the right thing with the data it gets back from the Database.

```javascript
app = express()
app.get('/', (req, res) => {
  getTodo(..., (err, todoResult) => {
    /* some handler using getTodo */
  })
})
```

What we want to accomplish is rewriting our handlers so that they don't use a fixed implementation of `getTodo`. If we wanted to do the same thing in another context we would wrap the behavior in a function and pass the desired implementation in as a parameter. Further, registering a route is nothing more than a function call on `app`.

> Example (not part of our Todo app):
>
> So, if you start with:

```javascript
const name = 'Techtonica';

// We initially start out with a fixed way to modify the name
function capitalize(s) {
  return s.toUpperCase();
}

app.get('/', (req, res) => {
  res.send('Hello, ' + capitalize(name));
});
```

Then you can drop the whole thing into a parameterized function:

```javascript
const name = 'Techtonica';

function capitalize(s) {
  return s.toUpperCase();
}
function lowercase(s) {
  return s.toLowerCase();
}
function excited(s) {
  return s + '!';
}

function registerRoute(nomeFn) {
  app.get('/', (req, res) => {
    res.send('Hello, ' + nameFn(name));
  });
}

// now you can register the route with any function to be applied to the name:
registerRoute(capitalize); // or...
registerRoute(lowercase); // or...
registerRoute(excited); // etc
```

>

### Back to our TODO app now

Using this same principle you can rewrite the TODO project handlers to not rely on the global `getTodo` function as well. Give it a shot, I've included a version below:

<details>
  <summary>Code Sample (click to expand)</summary>

```javascript
function constructRoutes(app, getTodo) {
  app.get('/items', (req, res) => {
    getTodo((err, todoResult) => {
      /* HTML TODO list implementation */
    });
  });

  app.get('/', (req, res) => {
    getTodo((err, todoResult) => {
      /* JSON TODO list implementation */
    });
  });
}

function getTodoDB(callbackFn) {
  return dbPool.query('SELECT id, entry FROM todo_items', callbackFn);
}

const app = express();
constructRoutes(app, getTodoDB);
```

</details>

Now that you have the ability to construct routes with a custom implementation of your database calls, it's time to use **mocked-out versions of those calls** to write simple unit tests of your request handlers. This means you can focus just on how you process the requset and not worry about the implementation of how we get or save TODO items.

A simple test for `GET /` might look like:

```javascript
describe('GET /', () => {
  it('should return todo items as JSON on success', (done) => {
    app = express();

    const todoContents = [
      { id: 1, entry: 'Learn supertest' },
      { id: 2, entry: 'Learn abstraction patterns' }
    ];
    expectedResults = JSON.stringify({ error: false, todo: todoContents });

    const mockGetTodo = function (todoCallback) {
      todoCallback(false, { rows: todoContents });
    };

    // this builds the routes using our "database" function and attaches them
    // to the app
    setup.constructRoutes(app, mockGetTodo);

    // use supertest to make an HTTP GET request to /
    request(app)
      .get('/')
      // and then verify the results are as we expect
      .expect(200, expectedResults, done);
  });
});
```

### GP 2: Refactoring for API Tests / Challenge

Take some time to get a feeling of how this works. Once there
try to take the concepts in it and write unit tests for the case where the
database calls fail. Now write the `POST /` test.

What about things that aren't databases? How would you use the same principles
to build testable code that utilizes external services?

### GP 2: Refactoring for API Tests / Reference Implementation

One possible way of doing this is up on
[glitch][backend-ii]. (Open the console and enter 'mocha' to run tests.)

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
