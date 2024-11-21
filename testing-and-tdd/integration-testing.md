# Note

This lesson is too long and has significant issues. See its [#1216](https://github.com/Techtonica/curriculum/issues/1216)

# Adding Tests to your NodeJS project

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

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD][tt-testing-intro]
- [Jasmine Testing][tt-testing-frameworks]
- [Mocking and abstraction](./mocking-and-abstraction.md)

### Motivation

Up to now we've been talking about _unit testing_. Unit testing is about making
sure a function behaves as expected independent of other parts of the software
system.

In most code bases functions are called not just by other functions within
the code base. They are also called by _user interfaces_ and sometimes even
other programs!

When one program calls a function from within another program, that's an
_API_! APIs, or "Application Programming Interfaces" are everywhere!
Most APIs are distributed either as a library, that you add to your
package.json and start using right away, or are exposed over the web
via HTTP.

Unit testing is a powerful core skill for building maintainble software, and
the skills you're learning with jasmine or mocha or other testing frameworks
can be built upon to do _integration testing!_

Integration testing differes from unit testing in that it's about checking how
our code works when it's calling or being called by other programs.

Integration testing is _hard_, but _worth it_. As you develop your skills at
integration testing, you'll learn how to overcome the challenges posed by
writing testable code that talks to other systems.

As a bonus, the skills and techniques we learn, not only help make our code easier to
test but also aid readability and long term maintainability of projects.

This lesson discusses new tools and code patterns that help us to meet those
challenges.

### Objectives

**Participants will be able to:**

- Understand the basics of testing, APIs and backend ([Section 1](#1-Introduction-to-testing-and-backend))
- Use Postman (a testing tool) for testing your API/HTTP requests. ([Section 3](#3-New-Tool-Postman))
- Write code to test GET, PUT, POST and DELETE requests in your project ([Guided Practice](#Guided-Practice))
- Make a basic TODO app with unit testing to test database and other external services ([Guided Practice](#Guided-Practice))

### Specific Things to Learn

**Note**: We've included links to guides on each of these when available for
easy reference later. These are also included when applicable during the
lesson.

We do not expect you to do the tutorials linked in this "Specific Things to Learn" section today.

- General testing tools
  - [Mocha][mocha-home] ([Intro To Testing][tt-testing-frameworks])
  - [Chai][chai-home] ([Intro To Testing][tt-testing-frameworks])
  - [Postman][postman-home] (guides to: [Navigating Postman][postman-nav], [Making GET requests][postman-get], [Making POST requests][postman-post])
- Testing HTTP requests to your project
  - [Supertest][supertest-home] ([intro tutorial][[supertest-intro](https://www.npmjs.com/package/supertest)])
- Testing your own database

[tt-testing-intro]: /testing-and-tdd/testing-and-tdd.md
[tt-testing-frameworks]: jasmine-testing.md
[mocha-home]: https://mochajs.org/
[chai-home]: https://www.chaijs.com/
[postman-home]: https://www.getpostman.com/
[simplemock-home]: https://www.npmjs.com/package/simple-mock
[supertest-home]: https://www.npmjs.com/package/supertest
[nock-home]: https://github.com/nock/nock
[nock-intro]: https://scotch.io/tutorials/nodejs-tests-mocking-http-requests
[postman-nav]: https://www.toolsqa.com/postman/postman-navigation/
[postman-get]: https://www.toolsqa.com/postman/response-in-postman/
[postman-post]: https://www.toolsqa.com/postman/post-request-in-postman/

### Materials

In additional to the linked material above associated with specific
technologies that we'll be using there is some more general reading that will
help provide depth to your understanding of API testing.

- [Backend Testing Slides][tt-backend-testing-slides]
- [7 HTTP methods every web developer should know and how to test them][testing-http-methods]

[tt-backend-testing-slides]: https://docs.google.com/presentation/d/1no4BY2e74QoHJlkO7LIOV-qlcqQ2viQbyJlEDyptmeY/edit?usp=sharing
[testing-http-methods]: https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them

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

Before we get started let's set some ground rules about how we use terminology.
This module is called "backend testing"; but without establishing what `backend`
means, that can easily get confusing.

Within the context of this lesson a `backend` is an API that supports some
collection of features. It often, but not always, exposes its interface through
HTTP requests and returns JSON objects as a response.

A `backend` can be the service you're writing but it can also be something that
you depend on:

- a database may be a backend to your service
- your service could be the backend to your users
- the GitHub API may be a backend you depend upon

For this reason, it's important to provide sufficient context when talking about
using or testing a backend service.

With that in mind...

This lesson discusses backend testing in all of these frames: we will test your
service's interaction with its backend (database & external APIs) while also
writing tests to ensure your service, when used as a backend, performs as
expected. In the course of this write-up we'll use the following terms to mean
specific things:

- "your project"&mdash; this is your code; it's written for node.js
- "API" / "API testing"&mdash; this is also your code; the node.js project
  exposes its features to the world through an HTTP API, this term captures
  the testing needed to ensure how you handle those requests is correct
- "backend" / "service"&mdash; this is an API that you call via HTTP; it's
  called from your project
- "database"&mdash; this is a specific backend that your project uses to save
  data

#### 1.2 Getting Started: Is API and backend/database testing special?

We've already talked about testing and how it's important to verify code
quality over time / as you make changes. Why then is it worth discussing
API / backend testing, isn't that just more of the same?

Well, kind of; but not really...

These tests are important for the same reason: We need to ensure that our
code works as expected and to protect correct behavior. So framed as "is
testing important," yes it can be pretty much thought of as just more of the
same. However when you actually sit down to write these tests the interactions
with external requests (to your project) and APIs introduce interesting new
difficulties.

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

How you consume this will depend your learning style. My suggestion is to skim
over [_Mocking and Abstraction_][tt-mocking] lesson then work through the examples. It's
pretty normal for writing code with modularity and testing in mind so don't
fret if it takes more than a couple of passes for things to fall into place.

### 2. New Tool: Postman

At its core Postman is a UI that allows us to construct simple (or complex!)
HTTP requests and inspect the results. You can think of it as a browser that
enables you to customize every aspect of the HTTP calls that are made. ToolsQA
has good collection of Postman covering basic and enterprise uses. For now
you should skim the [navigation][postman-nav], [GET request][postman-get], and
[POST request][postman-post] tutorials.

**Why use Postman?**
When building an API it's often _much_ easier to wire up a test request in
Postman than to build an HTML form (or similar) to fire off some test requests
against your API. As an example: while verifying that the TODO post code used
in this lesson worked I used Postman to quickly create POST requests to
validate behavior of the project.

**Why not just use Postman?**
If Postman makes it super easy to test why shouldn't we just build all our API
tests using it? Postman primarily makes it simple to do blackbox integration
or end-to-end API testing. It's important to test this but recall that
[there are good reasons][e2e] to not rely on end-to-end testing.

[e2e]: https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html

## Guided Practice

In this practice we're going to combine all the things we've talked about above
to build a simple TODO app that allows you to read and create TODO items and is
unit tested. We'll also cover a few approaches to testing DB calls that we don't
provide sample code.

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

#### GP 0: Set up your project

0. Create a new folder for your project by following these sub-steps:
   1. `mkdir todo` or whatever you want to name this new folder (and project)
   2. `cd todo`
1. Once you're in your brand-new folder, use `npm init` to initialize a new node project.
   1. In your terminal, type `npm init` and press enter. This will start a new tiny command line program that helps you set up your new node project. (It will save your answers in package.json and set up some other config files for you.)
   2. The first thing it asks you is "what do you want the name to be?" (It asks for the package name because it's assuming you're making an npm package.) Notice that after the prompt, there is a _default value_ in parentheses. Whenever you see a default value in parentheses, go ahead and press "enter" to simply use the default value.
   3. Next it asks for a version, and supplies the default value (1.0.0). Go ahead and just press enter again.
   4. Continue until you get to "description" which doesn't have a default value. Write whatever short description you want, like `todo app with tests`. You can edit this later.
   5. Keep using the default value for prompts (like accept that the entry point will be `index.js`) until the tiny `npm init` program ends and you get back to your normal command line prompt.
1. Back on your normal command line prompt, install your project's dependencies: `npm install --save body-parser express pg`
1. Install your project's test dependencies: `npm install --save-dev chai mocha nock supertest`
1. Set up your database and `todo_items` table by following these steps:
   1. Create a new free database on [ElephantSQL](https://elephantsql.com/); they have
      [a guide](https://www.elephantsql.com/docs/index.html) for this process.
   2. Use [pgAdmin](https://www.elephantsql.com/docs/pgadmin.html) or their
      "Browser" view to run the `CREATE TABLE` command (above) on your database

##### GP 0: Set up your project / A quick summary of accessing a DB

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

After this we can make queries to the database by using `dbPool.query(...)`.
Its documentation is [here][pq-query] but the short version is that it takes
three arguments:

1. the query to be run, e.g., `SELECT * from todo_items`
2. (optional) any arguments that are passed into the query
3. a callback that will be made once the query is completed

This should be enough to get you running but if you want to read more about
connecting to a database I suggest the [connecting][pq-connecting] and
[polling][pq-pooling] docs.

[pq-query]: https://node-postgres.com/features/queries
[pq-connecting]: https://node-postgres.com/features/connecting
[pq-pooling]: https://node-postgres.com/features/pooling

#### GP 1: First steps

(GP 1 stands for "Guided Practice Step One" here.)

You know how to build Express apps and much of the code for implementing the
necessary paths (`GET /`, `GET /items`, and `POST /`) is available above in the
_Abstraction_ section. We also just talked about how to connect to a database.

If you put those three things together it's enough to get a simple project
running that connects to your database and gets you started managing and viewing
TODO items. Don't worry about tests just yet, we'll make some changes that make
it easier.

##### GP 1: First steps / Challenge

Once you've got the three methods up and working look at how we
refactored the read methods to make DB accesses easier to read and maintain with
`getTodo`. Rewrite the `POST /` handler to use a similar approach so that the
handler doesn't have SQL directly inside it.

##### GP 1: First steps / Reference implementation

Once you have it working there is a reference
implementation on [repl.it][backend-i] if you want to see what some other
potential solutions look like.

#### Interlude: Testing APIs with `supertest`

Read through [Testing Node.js with supertest][supertest-intro]. Much of this
will be familiar but it introduces a new library called `supertest`. At its
core this allows you to easily do in your unit tests what Postman was letting
you do to experiment.

#### GP 2: Refactoring for API Tests

Now that we've got the core features solid Let's start with adding tests to our
API endpoints so that if anything breaks in the future we'll catch it.

The first thing we'll need to do is get the fixed reference to `getTodo` out of
the route handlers. We need to do this because it's much easier when testing to
only worry about ensuring that our code does the right thing with the data it
gets back from the Database.

```javascript
app = express()
app.get('/', (req, res) => {
  getTodo(..., (err, todoResult) => {
    /* some handler using getTodo */
  })
})
```

What we want to accomplish is rewriting our handlers so that they don't use a
fixed implementation of `getTodo`. If we wanted to do the same thing in another
context we would wrap the behavior in a function and pass the desired
implementation in as a parameter. Further, registering a route is nothing more
than a function call on `app`.

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

> then you can drop the whole thing into a parameterized function:

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

##### Back to our TODO app now

Using this same principle you can rewrite the TODO project handlers to not rely
on the global `getTodo` function as well. Give it a shot, I've included a
version below:

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

Now that you have the ability to construct routes with a custom implementation of
your database calls, it's time to use **mocked-out versions of those calls** to
write simple unit tests of your request handlers. This means you can focus just
on how you process the requset and not worry about the implementation of how
we get or save TODO items.

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

##### GP 2: Refactoring for API Tests / Challenge

Take some time to get a feeling of how this works. Once there
try to take the concepts in it and write unit tests for the case where the
database calls fail. Now write the `POST /` test.

What about things that aren't databases? How would you use the same principles
to build testable code that utilizes external services?

##### GP 2: Refactoring for API Tests / Reference Implementation

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
  - How API / backend testing is different from unit tests you've previously
    written
  - What are the benefits of not testing against live external services
- Trade code with another participant and review their solution to find how they
  used the principles we discussed; are there any improvements you can find for
  better readability or maintainability?

## Supplemental Materials

- [MySQL and Node tutorial][mysql-node-tutorial] &mdash; A tutorial that walks through setting up a Node app that connects to MySQL database. While this isn't a PostgreSQL app, this step-by-step tutorial can provide different insight into building an app with a database.

[mysql-node-tutorial]: https://dev.to/achowba/build-a-simple-app-using-node-js-and-mysql-19me

Optional reading that was useful while writing this lesson:

- [Testing a Database][db-testing-alt] &mdash; this discusses an alternate
  approach to DB testing than we'll take at a very high level.
- [`node-postgres` structure suggestion][postgres-structure]
- [The Express API][express-api]
- [superagent api][superagent-home] &mdash; this is the API underlying `supertest`
- [Using PostgreSQL with Node.js][nodejs-postgres] &mdash; A simple example of
  using PostgreSQL within the context of a Node.js project (_not_ Express which
  does have some impact)
  [postgres-structure]: https://node-postgres.com/guides/project-structure
  [express-api]: https://expressjs.com/en/4x/api.html
  [nodejs-postgres]: https://linuxhint.com/postgresql-nodejs-tutorial/
