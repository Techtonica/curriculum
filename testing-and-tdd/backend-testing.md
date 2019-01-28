> TODO:
> - proofread
> - "Check for understanding" section
> - move all @falun repl.it to something owned by techtonica
> - collect and review all linked material
> - lol :sob: rewrite probably; at minimum revisit external service testing bit at the end
> - slides

# Adding Unit Tests to your NodeJS project

### Projected Time

XX minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD][intro-to-testing]
- [Jasmine Testing](jasmine-testing.md)

[intro-to-testing]: testing-and-tdd.md

### Motivation

Up to now we've been talking about unit testing within the context of making
sure that an isolated function behaves as we expect. In a real project though
functions are often called by our users or rely on external services. We still
want to ensure that our code works though but testing these things introduce
some new challenges.

This lesson discusses new tools and code patterns that help us to meet those
challenges.

As a bonus the patterns we learn about which help make our code easier to
test are also a good practice that will aid readability and long term
maintainability of our projects.

### Objectives

**Participants will be able to:**

- Explain the purpose and specific challenges of backend testing
- Write code to test GET, PUT, POST and DELETE requests to your project
- Use mocks to mimic testing GET requests to an external API
- Understand how to test database interactions

### Specific Things To Teach

- General testing tools
  - Mocha
  - Chai
  - Postman
- Testing external services
  - Mocking & abstractions
  - Simple Mock
  - Nock
- Testing HTTP requests to your project
  - Supertest
- Testing your own database

### Materials

[Link to slideshow](pending)

[Node.js Tests: Mocking HTTP Requests][scotch-nock]

[7 HTTP methods every web developer should know and how to test them](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)

[Testing a Database](https://www.xaprb.com/blog/2008/08/19/how-to-unit-test-code-that-interacts-with-a-database/)

## Lesson

### Establishing some terminology

Before we get started let's set some ground rules about how we use terminology.
This module is called "backend testing" but without establishing what `backend`
means that can easily get confusing.

Within the context of this lesson a `backend` is an API that supports some
collection of features. It often, but not always, exposes its interface through
HTTP requests and returns JSON objects as a responses.

A `backend` can be the service you're writing but it can also be something that
you depend on:
- a database may be a backend to your service
- your service could be the backend to your users
- the github API may be a backend you depend upon

For this reason it's important to provide sufficient context when talking about
using or testing a backend service.

With that in mind...

This lesson discusses backend testing in all of these frames: we will test your
service's interaction with its backend (database & external APIs) while also
writing tests to ensure your service, when used as a backend, performs as
expected. In the course of this writeup we'll use the following terms to mean
specific things:

- "your project"&mdash;this is your code; it's written for node.js
- "API" / "API testing"&mdash;this is also your code; the node.js project
  exposes its features to the world through an HTTP API, this term captures
  the testing needed to ensure how you handle those requests is correct
- "backend" / "service"&mdash;this is an API that you call via HTTP; it's
  called from your project
- "database"&mdash;this is a specific backend that your project uses to save
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

> The concept of **mocking** was covered in [Intro to Testing][intro-to-testing].
>
> As a brief refresher: it is a technique of providing an implementation of an
> interface which allows you to specify exactly what the return value should be
> when a specific call is made. Additionally, it enables you to verify that the
> interface was called with the expected values.

In order to mock backend calls we'll be using a library called [`nock`][nock].
Nock works by intercepting HTTP requests that your code makes checking against
what you've instructed it to expect. If it finds a match it will return the
response you've configured, if not it will result in a test failure.

**An Example:**

```javascript
// TODO: this example taken ~directly from the scotch.io page, should probably
// vary it -- it feels icky to just lift it

// A simple function that we want to test; it makes an HTTP request to github
// to retrieve a user object. It returns the result in a Promise.
function getUser(username) {
    return axios
        .get(`https://api.github.com/users/${username}`)
        .then(res => res.data)
        .catch(error => console.log(error));
}

// We want to test that getUser calls github and returns the user
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

> The above example is taken from [scoth.io][scotch-nock]; visit this page to
> see a more detailed example with additional explanation.

**Exercise**

1. What do you think would happen if you had called `getUser('not-octocat')`?
2. How do you think this would change if we changed `mockObject.id` to be `42`?
3. How do you think this would change if we changed `mockObject.name` to
   `Techtonica`?

[nock]: https://github.com/nock/nock
[scotch-nock]: https://scotch.io/tutorials/nodejs-tests-mocking-http-requests

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
Let's look at some places where abbstraction can help us make our code easier
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

[postman-nav]: https://www.toolsqa.com/postman/postman-navigation/
[postman-get]: https://www.toolsqa.com/postman/response-in-postman/
[postman-post]: https://www.toolsqa.com/postman/post-request-in-postman/

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
It's documentation is [here][pq-query] but the short is that it takes three
arguments:
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

**Challenge**: Once you've got the three methods up and working look at how we
refactored the read methods to make DB accesses easier to read and maintain with
`getTodo`. Rewrite the `POST /` handler to use a similar approach so that the
handler doesn't have SQL directly inside it.

**Reference implementation** Once you have it working there is a reference
implementation on [repl.it][backend-i] if you want to see what some other
potential solutions look like.

#### Testing APIs with `supertest`

Read through [Testing Node.js with supertest][supertest-intro]. Much of this
will be familiar but it introduces a new library called `supertest`. At its
core this allows you to easily do in your unit tests what Postman was letting
you do to experiment.

[supertest-intro]: https://codeforgeek.com/2015/07/unit-testing-nodejs-application-using-mocha/

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

**Challenge:** Take some time to get a feeling of how this works. Once there
try to take the concepts in it and write unit tests for the case where the
database calls fail. Now write the `POST /` test.

What about things that aren't databases? How would you use the same principles
to build testable code that utilizes external services?

**Reference Implementation:** One possible way of doing this is up on
[repl.it][backend-ii].

#### Testing external services

To wrap things up we still want to make sure that our database code is tested.
The solution here is actually very similar to the approach we took to make our
endpoint handlers testable: we parameterize our code and inject the parts that
we don't want to test. For the database that means the library responsible for
actually executing our SQL on the database:

```javascript
function init(dbPool) {
  return {
    getTodoDB: function(callbackFn) {
      return dbPool.query('SELECT id, entry FROM todo_items', callbackFn)
    }
  }
}

// In use this would look similar to:
const dbPool = ...        // connect to database
const data = init(dbPool) // set up the database API
const app = express()     // build the express app

// register the handles to app and tell them to use the real DB functions
constructRoutes(app, data.getTodoDB)
```

To test this we would call `init` and pass in a mock that allowed us to verify
`query` got called with the right arguments. The reference implementation
[simple-mock][simple-mock] to make validation simple. You can find it on
[repl.it][backend-iii].

[backend-i]: https://repl.it/@falun/BackendTesting-I
[backend-ii]: https://repl.it/@falun/BackendTesting-II
[backend-iii]: https://repl.it/@falun/BackendTesting-III
[simple-mock]: https://github.com/jupiter/simple-mock#mock

**Reference material**

I found these sites useful in the process of writing this lesson
- `node-postgres` structure suggestion - https://node-postgres.com/guides/project-structure
- Express API - https://expressjs.com/en/4x/api.html
- [supertest](https://github.com/visionmedia/supertest) and [superagent](https://visionmedia.github.io/superagent/) docs
- [Using PostgreSQL with Node.js](https://linuxhint.com/postgresql-nodejs-tutorial/) &mdash; note that this is not within the

### Independent Practice

- Deploy your own version of the sample TODO project to heroku
- Experiment with Postman to create new TODO item
- Add a test for `/items` to make sure that the HTML version displays as we
  expect; don't forget to include the case where your DB call fails

### Challenge

Try to expand the sample TODO app that we've written:
- Enable requests that get specific TODO items
- Support deleting a TODO item
- Add TODO lists that are specific to different users of the system
- Add an endpoint to implement marking an item as completed (and update the database schema, too)
- Use the principles we spoke about when testing an external Database to test an external HTTP service

And, of course, write unit tests for each of your new features!

### Check for Understanding

> Some ideas: have apprentices summarize to each other, make a cheat sheet, take
> a quiz, do an assignment, or something else that helps assess their
> understanding.

TODO
