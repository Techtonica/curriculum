# Adding Tests to your NodeJS project
[//]: # (TODO)
[//]: # (  - Still need slides)
[//]: # (  - This hasn't really been proofed yet and I'm _real bad_ about typos <3)
[x]: # (  - we should move all the @falun owned repl.it links to techtonica)
[//]: # (  - the backend snapshots should start move off my elephantsql.com account)
[//]: # (    at some point I'll delete the database it's using which will break the) 
[//]: # (    sample; when we _do_ rehome the sample change the following links:)
[backend-i]: https://repl.it/@techtonica/BackendTesting-I
[backend-ii]: https://glitch.com/edit/#!/zee-techtonica-backend-testing-ii?path=index.js:37:0
[backend-iii]: https://repl.it/@techtonica/BackendTesting-III

### Projected Time

XX minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD][tt-testing-intro]
- [Jasmine Testing][tt-testing-frameworks]

### Motivation

Up to now we've been talking about _unit testing_. Unit testing is about making
sure a function behaves as expected independent of other parts of the software 
system. 

In most code bases functions are called not just by other functions within 
the code base. They are also called by _user interfaces_ and sometimes even 
other programs!

When one program calls a function from within another program, that's an 
_API_! APIs, or "Application Programming Interfaces" are everywhere! 
Most APIs are distributed either as a library that you add to your 
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

As a bonus the skills and techniques we learn to help make our code easier to
test also aid readability and long term maintainability of projects.

This lesson discusses new tools and code patterns that help us to meet those
challenges.

### Objectives

**Participants will be able to:**

- Explain the purpose and specific challenges of backend testing
- Write code to test GET, PUT, POST and DELETE requests to your project
- Use mocks to mimic testing GET requests to an external API
- Understand how to test database interactions

### Specific Things To Teach

> **Note**: We've included links to guides on each of these when available for
> easy reference later. These are also included when applicable during the
> lesson.

- General testing tools
  - [Mocha][mocha-home] ([Intro To Testing][tt-testing-frameworks])
  - [Chai][chai-home] ([Intro To Testing][tt-testing-frameworks])
  - [Postman][postman-home] (guides to: [Navigating Postman][postman-nav], [Making GET requests][postman-get], [Making POST requests][postman-post])
- Testing external services
  - Mocking & abstractions
  - [Simple Mock][simplemock-home]
  - [Nock][nock-home] ([intro tutorial][nock-intro])
- Testing HTTP requests to your project
  - [Supertest][supertest-home] ([intro tutorial][supertest-intro])
- Testing your own database

[tt-testing-intro]: /testing-and-tdd/testing-and-tdd.md
[tt-testing-frameworks]: jasmine-testing.md
[mocha-home]: https://mochajs.org/
[chai-home]: https://www.chaijs.com/
[postman-home]: https://www.getpostman.com/
[simplemock-home]: https://www.npmjs.com/package/simple-mock
[supertest-home]: https://www.npmjs.com/package/supertest
[supertest-intro]: https://codeforgeek.com/2015/07/unit-testing-nodejs-application-using-mocha/
[nock-home]: https://github.com/nock/nock
[nock-intro]: https://scotch.io/tutorials/nodejs-tests-mocking-http-requests
[postman-nav]: https://www.toolsqa.com/postman/postman-navigation/
[postman-get]: https://www.toolsqa.com/postman/response-in-postman/
[postman-post]: https://www.toolsqa.com/postman/post-request-in-postman/


### Materials

In additional to the linked material above associated with specific
technologies that we'll be using there is some more general reading that will
help provide depth to your understanding of API testing.

- Slideshow &mdash; pending
- [7 HTTP methods every web developer should know and how to test them][testing-http-methods]

Code samples included in this lesson
- [Step 1][backend-i] &mdash; a snapshot of the TODO app that is works but is
  neither tested nor built to facilitate testing
- [Step 2][backend-ii] &mdash; the TODO app has gotten a basic set of unit
  tests that protect against functional regressions and demonstrates how to
  test an external service dependency
- [Step 3][backend-iii] &mdash; with one final structural change our sample app
  enables (and adds) testing for the code that interacts with our database

Optional reading that was useful while writing this lesson:
- [Testing a Database][db-testing-alt] &mdash; this discusses an alternate
  approach to DB testing than we'll take at a very high level.
- [`node-postgres` structure suggestion][postgres-structure]
- [The Express API][express-api]
- [superagent api][superagent-home] &mdash; this is the API underlying `supertest`
- [Using PostgreSQL with Node.js][nodejs-postgres] &mdash; A simple example of 
  using PostgreSQL within the context of a Node.js project (_not_ Express which
  does have some impact)


[testing-http-methods]: https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them
[db-testing-alt]: https://www.xaprb.com/blog/2008/08/19/how-to-unit-test-code-that-interacts-with-a-database/
[postgres-structure]:https://node-postgres.com/guides/project-structure
[express-api]: https://expressjs.com/en/4x/api.html
[superagent-home]: https://visionmedia.github.io/superagent/
[nodejs-postgres]: https://linuxhint.com/postgresql-nodejs-tutorial/
## Lesson

### Establishing some terminology

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

### Getting Started: Is API and backend/database testing special?

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

### Facing new challenges

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

### Key Concepts and New Tools

The plan here is to first discuss some key concepts and tooling that you'll
use while writing unit tests for your project and then dig into concrete
examples in a small node.js + express project and corresponding tests.

How you consume this will depend your learning style. My suggestion is to skim
over _Mocking_ and _Abstraction_ sections then work through the examples. It's
pretty normal for writing code with modularity and testing in mind so don't
fret if it takes more than a couple of passes for things to fall into place.

#### Mocking

The core of our tests will be built on the concept of providing mocked
responses to external service calls. This allows us to take control over much
of the complexity of interacting with other services that we discussed above in
items 1 & 2. It additionally helps address the potential time and money costs
that making actual calls to the service would introduce into our tests (item
3).

> The concept of **mocking** was covered in [Intro to Testing][tt-testing-intro].
>
> As a brief refresher: it is a technique of providing an implementation of an
> interface which allows you to specify exactly what the return value should be
> when a specific call is made. Additionally, it enables you to verify that the
> interface was called with the expected values.

In order to mock backend calls we'll be using a library called [`nock`][nock-home].
Nock works by intercepting HTTP requests that your code makes checking against
what you've instructed it to expect. If it finds a match it will return the
response you've configured, if not it will result in a test failure.

**An Example:**

```javascript
// A simple function that we want to test; it makes an HTTP request to GitHub
// to retrieve a user object. It returns the result in a Promise.
function getUser(username) {
    return axios
        .get(`https://api.github.com/users/${username}`)
        .then(res => res.data)
        .catch(error => console.log(error));
}

// We want to test that getUser calls GitHub and returns the user
describe('Get User tests', () => {
    it('should get a user by username', () => {
        // prepare the mocked response; this is what we're instructing the
        // HTTP GET to api.github.com/users to return
        const mockResponse = {
            id: 583231,
            login: 'octocat',
            name: 'The Octocat',
            company: 'GitHub',
            location: 'San Francisco',
        };

        // now tell nock that if it sees a request to the URL api.github.com/users/octocat
        nock('https://api.github.com')
            .get('/users/octocat')
            // then it should return a successful response (200) with the
            // content of mockResponse
            .reply(200, mockResponse);

        // we now make the call we want to test (getUser) and verify that the
        // response is as expected
        return getUser('octocat').then(response => {
            // expect an object back
            expect(typeof response).to.equal('object');

            // Test result of name, company and location for the response
            expect(response.name).to.equal('The Octocat')
            expect(response.company).to.equal('GitHub')
            expect(response.location).to.equal('San Francisco')
        });
    });
});
```

> The above example is taken from [scoth.io][nock-intro]; visit this page to
> see a more detailed example with additional explanation.

**Exercise**

1. What do you think would happen if you had called `getUser('not-octocat')`?
2. How do you think this would change if we changed `mockObject.id` to be `42`?
3. How do you think this would change if we changed `mockObject.name` to
   `Techtonica`?

#### Abstraction

Think back to [Eloquent Javascript Ch 5][ejs-5] when you learned about
_Abstraction_ and _Higher-order Functions_. Recall that these techniques are
used to wrap reptitive or complex behavior and then provide a more easily
understandable way to access that behavior. When thinking about how to unit
test your project we'll be making heavy use of these concepts. We do so to
create functions that are as simple as possible so that the tests we write
don't get too complex.

[ejs-5]: https://eloquentjavascript.net/05_higher_order.html

**An Example:**
Let's look at some places where abstraction can help us make our code easier
to understand and maintain.

In the following code snippet we're working in a basic express app that can
list and add items to a TODO list:

```javascript
// the default endpoint will just return a JSON representation of the TODO
// items that we know about
app.get('/', (req, res) => {
  dbPool.query('SELECT id, entry FROM todo_items', (err, queryResult) => {
    const result = {
      error: !!err,
      todo: queryResult.rows,
    }

    const respCode = result.error ? 503 : 200
    res.send(respCode, JSON.stringify(result))
  })
})

// To add a new TODO item we POST to /todo with a JSON object of the form:
// {"todo": "<new todo content>"}
app.post('/', (req, res) => {
  dbPool.query(
    'INSERT INTO todo_items(entry) VALUES($1)', [req.body.todo],
    (err, dbRes) => {
      if (err) {
        res.send(503, 'Unable to save new TODO item: ', req.body.todo)
        return
      }
      res.redirect('/')
    }
  )
})
```

Let's say that we want to add a new endpoint that provides the current TODO
items in a nice HTML format...

```javascript
app.get('/items', (req, res) => {
  dbPool.query('SELECT id, entry FROM todo_items', (err, queryResult) => {
    if (err) {
        res.send(503, '<b>Error getting TODO list</b>')
        return
    }

    let items = ''
    queryResult.rows.forEach(row => items += `<li>${row.entry}</li>`)
    res.send(`<b>TODO list:</b><br/><ul>${items}</ul>`)
  })
})
```

This isn't too bad but what happens if we change the schema of `todo_items` in
the future? Now we need to find and update every place where we're interacting
with that table. More places to change means more places we might miss or make
a typo and that's not great so how can we use abstraction to help us:

1. Start by capturing the work you don't want to repeat and giving it a
   descriptive function name
2. Then use that function instead

Simple in principle, right?

```javascript
// Step 1) pull out the common work
function getTodo(callbackFn) {
    return dbPool.query('SELECT id, entry FROM todo_items', callbackFn)
}

// Step 2) use that function instead
app.get('/items', (req, res) => {
  getTodo((err, todoResult) => {
    if (err) {
      res.send(503, '<b>Error getting TODO list</b>')
      return
    }

    let items = ''
    todoResult.rows.forEach(row => items += `<li>${row.entry}</li>`)
    res.send(`<b>TODO list:</b><br/><ul>${items}</ul>`)
  })
})

app.get('/', (req, res) => {
  getTodo((err, todoResult) => {
    const result = {
      error: !!err,
      todo: todoResult.rows,
    }

    const respCode = result.error ? 503 : 200
    res.send(respCode, JSON.stringify(result))
  })
})
```

But how do we test this? Well, it's tricky because `getTodo` is still making an
external call to the database which is difficult to handle. Let's hold off
getting into until the Guided Practice section but as a hint it's just more
layers of capturing behavior in a function and passing it around to our
endpoint's implementation.

#### New Tool: Postman

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

### Common Mistakes / Misconceptions

- I need to constantly test the external APIs I'm using to make sure my code
  still works.
  - Instead, write mock classes that return information in the format you
    expect it. In other words, assume that everything is okay on the external
    service's end. Use these mocks to test expected and unexpected behavior
    &mdash; this way you will be prepared for future unexpected external
    behavior without needing to hit an external API on every test.


### Guided Practice

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

#### Set up your project

1. `npm init` a project
2. Install your project's dependencies: `npm install --save body-parser express pg`
3. Install your project's test dependencies: `npm install --save-dev chai mocha nock supertest`
4. Set up your database and `todo_items` table:
   1. Create a new database on [ElephantSQL](https://elephantsql.com/); they have
      [a guide](https://www.elephantsql.com/docs/index.html) for this process.
   2. Using [pgAdmin](https://www.elephantsql.com/docs/pgadmin.html) or their
      "Browser" view to run the `CREATE TABLE` command on your database

**A quick summary of accessing a DB**

Your connection to most relational databases can be described in a
_connection string_. It bakes into it a lot of information:
`<dbtype>://<username>:<password>@<host>/<dbname>`. This is then passed
to the library you use to run queries (`SELECT`, `INSERT`, `DELETE`, etc).
We accomplish this with the following:

```javascript
const dbPool = new pg.Pool({ connectionString: dbConnString })
dbPool.on('error', (err, client) => {
  console.error('Unexpected error on client', err)
  process.exit(-1)
})
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

#### First steps

You know how to build Express apps and much of the code for implementing the
necessary paths (`GET /`, `GET /items`, and `POST /`) is available above in the
_Abstraction_ section. We also just talked about how to connect to a database.

If you put those three things together it's enough to get a simple project
running that connects to your database and gets you started managing and viewing
TODO items. Don't worry about tests just yet, we'll make some changes that make
it easier.

**Challenge**:  
Once you've got the three methods up and working look at how we
refactored the read methods to make DB accesses easier to read and maintain with
`getTodo`. Rewrite the `POST /` handler to use a similar approach so that the
handler doesn't have SQL directly inside it.

**Reference implementation**  
Once you have it working there is a reference
implementation on [repl.it][backend-i] if you want to see what some other
potential solutions look like.

#### Testing APIs with `supertest`

Read through [Testing Node.js with supertest][supertest-intro]. Much of this
will be familiar but it introduces a new library called `supertest`. At its
core this allows you to easily do in your unit tests what Postman was letting
you do to experiment.

#### Refactoring for API Tests

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
than a function call on `app`. So, if you start with:

```javascript
const name = 'Techtonica'

// We initially start out with a fixed way to modify the name
function capitalize(s) { return s.toUpperCase() }

app.get('/', (req, res) => {
  res.send('Hello, ' + capitalize(name))
})
```

then you can drop the whole thing into a parameterized function:

```javascript
const name = 'Techtonica'

function capitalize(s) { return s.toUpperCase() }
function lowercase(s) { return s.toLowerCase() }
function excited(s) { return s + '!' }

function registerRoute(nomeFn) {
  app.get('/', (req, res) => {
    res.send('Hello, ' + nameFn(name))
  })
}

// now you can register the route with any function to be applied to the name:
registerRoute(capitalize) // or...
registerRoute(lowercase)  // or...
registerRoute(excited)    // etc
```

Using this same principle you can rewrite the TODO project handlers to not rely
on the global `getTodo` function as well. Give it a shot, I've included a
version below:

<details>

```javascript
function constructRoutes(app, getTodo) {
  app.get('/items', (req, res) => {
    getTodo((err, todoResult) => { /* HTML TODO list implementation */ })
  })

  app.get('/', (req, res) => {
    getTodo((err, todoResult) => { /* JSON TODO list implementation */ })
  })
}

function getTodoDB(callbackFn) {
  return dbPool.query('SELECT id, entry FROM todo_items', callbackFn)
}

const app = express()
constructRoutes(app, getTodoDB)
```
</details>

Now that you have the ability construct routes with a custom implementation of
your database calls it's time to use mocked out versions of those calls to
write simple unit tests of your request handlers. This means you can focus just
on how you process the requset and not worry about the implementation of how
we get or save TODO items.

A simple test for `GET /` might look like:

```javascript
describe('GET /', () => {
  it('should return todo items as JSON on success', done => {
    app = express()

    const todoContents = [
      {id: 1, entry: 'Learn supertest'},
      {id: 2, entry: 'Learn abstraction patterns'},
    ]
    expectedResults = JSON.stringify({ error: false, todo: todoContents })

    const mockGetTodo = function(todoCallback) {
      todoCallback(false, { rows: todoContents })
    }

    // this builds the routes using our "database" function and attaches them
    // to the app
    setup.constructRoutes(app, mockGetTodo)

    // use supertest to make an HTTP GET request to /
    request(app).get('/')
      // and then verify the results are as we expect
      .expect(200, expectedResults, done)
  })
})
```

**Challenge:**  
Take some time to get a feeling of how this works. Once there
try to take the concepts in it and write unit tests for the case where the
database calls fail. Now write the `POST /` test.

What about things that aren't databases? How would you use the same principles
to build testable code that utilizes external services?

**Reference Implementation:**  
One possible way of doing this is up on
[glitch][backend-ii]. (Open the console and enter 'mocha' to run tests.)

#### Testing external services

To wrap things up we still want to make sure that our database code is tested.
Before jumping into code it's always a good idea to think about what your goals
are so let's start there.

Up to now we've been using the concept of abstraction to hide database
interactions behind a function that we pass around (like `saveTodo`). In that
case let's figure out what it means for `saveTodo` to work. Well, the unit of
functionality it's responsible for is taking any arguments that are passed in
and making sure that the correct SQL statements are executed. It's also
responsible for making sure that if the database returns an error or something
unexpected that it gets reported correctly to the calling code.

From this description it sounds like we want to treat the actual execution of
that query as kind of a black box -- we let the library we use to interact with
our database deal with that (in our case `pg`) and just make sure that we pass
the right input to `.query` and handle the output correctly. That sounds an
awful lot we might want to mock the actual database doesn't it?

Let's look at the current `saveTodo` implementation (taken from second stage
version of our [reference TODO project][backend-ii]):

```javascript
function saveTodoDB(todo, callbackFn) {
  return dbPool.query(
    'INSERT INTO todo_items (entry) VALUES($1)',
    [todo],
    callbackFn)
}
```

We can use the same principles of encapsulation and injection here to make the
`dbPool` a variable that gets passed in allowing us to provide a mocked
implementation for testing. This is applying the same pattern we used before
to make our API endpoint handlers testable. First we made the code parameterized
by the thing we wanted to replace:

```javascript
function mkSaveTodo(dbPool) {
  return function(todo, callback) {
    return dbPool.query(
      'INSERT INTO todo_items (entry) VALUES($1)',
      [todo],
      callbackFn)
  }
}
```

and then we can use this to get a version of `saveTodo` function that uses the
correct database backend for our API. We then pass that into the
`constructRoutes` call:

```javascript
// Note, while much of the code in this lesson omits a lot of context due to
// its nature this sample is omiting more than normal...
const dbPool = new pg.Pool({ connectionString: dbConnString })
const saveTodo = mkSaveTodo(dbPool)
setup.constructRoutes(app, ..., saveTodo)
```

> Note: There are two things worth calling out a about this example.
>
> First: A totally valid question is "why not have `mkSaveTodo` take in a
> `query` function instead of `dbPool`?
>
> The answer is one of mental framing: When deciding what to pull out I
> approached it as a problem of "How do I make the database a variable." Within
> that context it made more sense for `dbPool` to be passed in. This also means
> if I need to do other things with the database in the future it doesn't
> change. Even so if you wanted to just pass in a `query` function that is also
> totally fine.
>
> Second: Once you dig into the reference project provided for part three
> you'll notice the solution there is a bit different than the one above, why
> is that?
>
> Mostly it's just that there are a lot of ways to solve programming problems
> and often the same person will come up with different solutions. There isn't
> any deep reason. And ultimately the "best" solution is just a matter of
> preference anyway.

Now that we've abstracted out how the database gets provided to `saveTodo` the
same approach we utilized for testing our handlers early in this lesson can be
used to test our code that makes calls into the database. It turns out that
when we want to make complex verifications around how a mock is called doing
that all manually is a lot of work... that somebody else has done for us.

Now we introduce the last new library of this lession,
[simple-mock][simplemock-home]. At its most basic you can include the library
and create new objects that act as a proxy for a function that you want to test
your code's interactions with. As an example:

```javascript
// include the libraries
const expect = require('chai').expect
const simple = require('simple-mock')

// and we have a function we want to test
function functionToTest(functionToCall, callNTimes) {
  for (let i = 0; i < callNTimes; i++) {
    functionToCall(i)
  }
}

describe('functionToTest', () => {
  it('should call the passed-in function once', () => {
    // create a mock function to pass in to `functionToTest`
    const mockFn = simple.mock()
    functionToTest(mockFn, 1)

    // verify that mockFn was called once
    expect(mockFn.calls.length).to.equal(1)

    // grab the first call to mockFn
    const callArgs = mockFn.calls[0].args

    // verify that functionToTest only passed one parameter
    expect(callArgs.length).to.equal(1)
    // ...and that the parameter's value was 1
    expect(callArgs.length[0]).to.equal(1)
  })
})
```

This is enough for you to get a solid collection of tests going for the code
that calls your database but `simple-mock` is much more featureful and it's
worth looking into the different testing / validation modes it supports later.

**Challenge:**  
It's an interesting task to implement your own mocking and validation code by
hand and teaches you a lot of neat tricks. If you're feeling adventurous give
that a try!

**Reference implementation:**  
As normal we have a reference project that complets testing your database
interaction code available in a [repl.it][backend-iii].

### Independent Practice

- Deploy your own version of the sample TODO project to heroku, netlify, or
  similar
- Experiment with Postman to create new TODO item
- Add a test for `/items` to make sure that the HTML version displays as we
  expect; don't forget to include the case where your DB call fails

### Challenge

Try to expand the sample TODO app that we've written:
- Enable requests that get specific TODO items
- Support deleting a TODO item
- Add TODO lists that are specific to different users of the system
- Add an endpoint to implement marking an item as completed (and update the
  database schema, too)
- Use the principles we spoke about when testing an external Database to test
  an external HTTP service

And, of course, write unit tests for each of your new features!

### Check for Understanding

- Pair up with another apprentice and do a Q&A on backend testing; some example
  topics:
  - How API / backend testing is different from unit tests you've previously
    written
  - What are the benefits of not testing against live external services
  - Discuss the concepts of abstraction, mocks, and higher-order functions and
    how we apply them in testing
- Trade code with another apprentice and review their solution to find how they
  used the principles we discussed; are there any improvements you can find for
  better readability or maintainability?
