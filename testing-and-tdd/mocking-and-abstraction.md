# Mocking and Abstraction

### Projected Time

About 1 hour and 20 minutes

- Lesson: 30 min
- Guided Practice: 15 min
- Independent Practice: 25 min
- Check for Understanding: 10 min

[simplemock-home]: https://www.npmjs.com/package/simple-mock
[nock-home]: https://github.com/nock/nock
[nock-intro]: https://scotch.io/tutorials/nodejs-tests-mocking-http-requests
[backend-ii]: https://glitch.com/edit/#!/zee-techtonica-backend-testing-ii?path=index.js:37:0

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Introduction to Testing][tt-testing-intro]
- [Jasmine Testing][tt-testing-frameworks]
- [Integration Testing][tt-integration-testing]

[tt-testing-intro]: /testing-and-tdd/testing-and-tdd.md
[tt-testing-frameworks]: jest.md

### Motivation

Continuing with our testing lesson, we will explore here that the core of our tests will be built on the concept of providing mocked responses to external service calls. This allows us to take control over much of the complexity of interacting with other services. It additionally helps address the potential time and money costs that making actual calls to the service would introduce into our tests.

### Objectives

**Participants will be able to:**

- Use mocks to mimic testing GET requests to an external API.
- Use Abstraction to simplify testing.

### Specific Things To Learn

Testing external services

- Mocking & abstractions
- [Simple Mock][simplemock-home]
- [Nock][nock-home] ([intro tutorial][nock-intro])

### Materials

- [Example video (10 min)](https://google.com) - Write a very short description of this resource.
- [Other example article(20 min read)](https://google.com) - Answer the 3 questions at the end.
  (Be sure to explain how to use these materials in directions in one of the sections below (ie: lesson, guided practice). If you are not assigning them somehow, they should be placed under Supplemental Materials at the bottom.)

### Lesson

#### Mocking

The concept of **mocking** was covered in [Intro to Testing][tt-testing-intro].

> As a brief refresher: it is a technique of providing an implementation of an
> interface which allows you to specify exactly what the return value should be
> when a specific call is made. Additionally, it enables you to verify that the
> interface was called with the expected values.

In order to mock backend calls we'll be using a library called [`nock`][nock-home]. Nock works by intercepting HTTP requests that your code makes checking against what you've instructed it to expect. If it finds a match it will return the response you've configured, if not it will result in a test failure.

**An Example:**

```javascript
// A simple function that we want to test; it makes an HTTP request to GitHub
// to retrieve a user object. It returns the result in a Promise.
function getUser(username) {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
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
      location: 'San Francisco'
    };

    // now tell nock that if it sees a request to the URL api.github.com/users/octocat
    nock('https://api.github.com')
      .get('/users/octocat')
      // then it should return a successful response (200) with the
      // content of mockResponse
      .reply(200, mockResponse);

    // we now make the call we want to test (getUser) and verify that the
    // response is as expected
    return getUser('octocat').then((response) => {
      // expect an object back
      expect(typeof response).to.equal('object');

      // Test result of name, company and location for the response
      expect(response.name).to.equal('The Octocat');
      expect(response.company).to.equal('GitHub');
      expect(response.location).to.equal('San Francisco');
    });
  });
});
```

> The above example is taken from [scoth.io][nock-intro]; visit this page to
> see a more detailed example with additional explanation.

**Challenge**

Looking at the test code above, think about what would happen if we made any of the following changes.  Would the test pass?

- Change `return getUser('octocat')...` to `return getUser('not-octocat')...`
- In the `mockResponse` object:
  - Change `id` from `583231` to `42`
  - Change `name` from `The Octocat` to `Techtonica`

#### Abstraction

Think back to [Eloquent JavaScript Ch 5][ejs-5] when you learned about _Abstraction_ and _Higher-order Functions_. Recall that these techniques are used to wrap reptitive or complex behavior and then provide a more easily understandable way to access that behavior. When thinking about how to unit test your project we'll be making heavy use of these concepts. We do so to create functions that are as simple as possible so that the tests we write don't get too complex.

[ejs-5]: https://eloquentjavascript.net/05_higher_order.html

**An Example:**
Let's look at some places where abstraction can help us make our code easier to understand and maintain.

In the following code snippet we're working in a basic express app that can list and add items to a To Do list:

```javascript
// the default endpoint will just return a JSON representation of the TODO
// items that we know about
app.get('/', (req, res) => {
  dbPool.query('SELECT id, entry FROM todo_items', (err, queryResult) => {
    const result = {
      error: !!err,
      todo: queryResult.rows
    };

    const respCode = result.error ? 503 : 200;
    res.send(respCode, JSON.stringify(result));
  });
});

// To add a new TODO item we POST to /todo with a JSON object of the form:
// {"todo": "<new todo content>"}
app.post('/', (req, res) => {
  dbPool.query(
    'INSERT INTO todo_items(entry) VALUES($1)',
    [req.body.todo],
    (err, dbRes) => {
      if (err) {
        res.send(503, 'Unable to save new TODO item: ', req.body.todo);
        return;
      }
      res.redirect('/');
    }
  );
});
```

Let's say that we want to add a new endpoint that provides the current TODO
items in a nice HTML format...

```javascript
app.get('/items', (req, res) => {
  dbPool.query('SELECT id, entry FROM todo_items', (err, queryResult) => {
    if (err) {
      res.send(503, '<b>Error getting TODO list</b>');
      return;
    }

    let items = '';
    queryResult.rows.forEach((row) => (items += `<li>${row.entry}</li>`));
    res.send(`<b>TODO list:</b><br/><ul>${items}</ul>`);
  });
});
```

This isn't too bad but what happens if we change the schema of `todo_items` in the future? Now we need to find and update every place where we're interacting with that table. More places to change means more places we might miss or make a typo and that's not great so how can we use abstraction to help us:

1. Start by capturing the work you don't want to repeat and giving it a
   descriptive function name
2. Then use that function instead

Simple in principle, right?

```javascript
// Step 1) pull out the common work
function getTodo(callbackFn) {
  return dbPool.query('SELECT id, entry FROM todo_items', callbackFn);
}

// Step 2) use that function instead
app.get('/items', (req, res) => {
  getTodo((err, todoResult) => {
    if (err) {
      res.send(503, '<b>Error getting TODO list</b>');
      return;
    }

    let items = '';
    todoResult.rows.forEach((row) => (items += `<li>${row.entry}</li>`));
    res.send(`<b>TODO list:</b><br/><ul>${items}</ul>`);
  });
});

app.get('/', (req, res) => {
  getTodo((err, todoResult) => {
    const result = {
      error: !!err,
      todo: todoResult.rows
    };

    const respCode = result.error ? 503 : 200;
    res.send(respCode, JSON.stringify(result));
  });
});
```

How do we test this?  It's tricky because we're interacting with a database.  What happens if we run the test while the database isn't running?  Or if we use the same database in two different tests, and their saved information conflicts?  We'll cover how to deal with this in the Guided Practice section, but as a hint it is very similar to how we mocked our network call.

### Common Mistakes & Misconceptions

It's very common to test the external APIs I'm using to make sure my code still works. An easy way to do it is writing mock classes that return information in the format you expect it.

Also, it's a good practice to use these mocks to test expected and unexpected behavior, so you won't need to hit an external API on every test.

### Guided Practice

At this point, we are going to test external services working over our [reference TODO project][backend-ii]. In order to understand this practice, please, follow the [guided practice](https://github.com/Techtonica/curriculum/blob/8acd5068d6bcbfb4f4c71ef598340bb324793764/testing-and-tdd/integration-testing.md#guided-practice) of integration testing section.

Before jumping into code it's always a good idea to think about what your goals are so let's start there.

Up to now we've been using the concept of abstraction to hide database interactions behind a function that we pass around (like `saveTodo`). In that case let's figure out what it means for `saveTodo` to work. Well, the unit of functionality it's responsible for is taking any arguments that are passed in and making sure that the correct SQL statements are executed. It's also responsible for making sure that if the database returns an error or something unexpected that it gets reported correctly to the calling code.

From this description it sounds like we want to treat the actual execution of that query as kind of a black box -- we let the library we use to interact with our database deal with that (in our case `pg`) and just make sure that we pass the right input to `.query` and handle the output correctly. That sounds an awful lot we might want to mock the actual database doesn't it?

Let's look at the current `saveTodo` implementation (taken from second stage version of our [reference TODO project][backend-ii]):

```javascript
function saveTodoDB(todo, callbackFn) {
  return dbPool.query(
    'INSERT INTO todo_items (entry) VALUES($1)',
    [todo],
    callbackFn
  );
}
```

We can use the same principles of encapsulation and injection here to make the `dbPool` a variable that gets passed in allowing us to provide a mocked implementation for testing. This is applying the same pattern we used before to make our API endpoint handlers testable. First we made the code parameterized by the thing we wanted to replace:

```javascript
function mkSaveTodo(dbPool) {
  return function (todo, callback) {
    return dbPool.query(
      'INSERT INTO todo_items (entry) VALUES($1)',
      [todo],
      callbackFn
    );
  };
}
```

and then we can use this to get a version of `saveTodo` function that uses the correct database backend for our API. We then pass that into the `constructRoutes` call:

```javascript
// Note, while much of the code in this lesson omits a lot of context due to
// its nature this sample is omiting more than normal...
const dbPool = new pg.Pool({ connectionString: dbConnString })
const saveTodo = mkSaveTodo(dbPool)
setup.constructRoutes(app, ..., saveTodo)
```

> Note: There are two things worth calling out a about this example.
>
> First: A totally valid question is "why not have `mkSaveTodo` take in a `query` function instead of `dbPool`?
>
> The answer is one of mental framing: When deciding what to pull out I approached it as a problem of "How do I make the database a variable." Within that context it made more sense for `dbPool` to be passed in. This also means if I need to do other things with the database in the future it doesn't change. Even so if you wanted to just pass in a `query` function that is also totally fine.
>
> Second: Once you dig into the reference project provided for part three you'll notice the solution there is a bit different than the one above, why is that?
>
> Mostly it's just that there are a lot of ways to solve programming problems and often the same person will come up with different solutions. There isn't any deep reason. And ultimately the "best" solution is just a matter of preference anyway.

Now that we've abstracted out how the database gets provided to `saveTodo`, the same approach we utilized for testing our handlers early in this lesson can be used to test our code that makes calls into the database. Next we want to do some complex verification on that mock (checking how many times it was called, with which arguments, etc). Luckily we don't have to write a lot of code to do that, because someone else has already done that for us!

Now we introduce the last new library of this lession, [simple-mock][simplemock-home]. At its most basic you can include the library and create new objects that act as a proxy for a function that you want to test your code's interactions with. As an example:

```javascript
// include the libraries
const expect = require('chai').expect;
const simple = require('simple-mock');

// and we have a function we want to test
function functionToTest(functionToCall, callNTimes) {
  for (let i = 0; i < callNTimes; i++) {
    functionToCall(i);
  }
}

describe('functionToTest', () => {
  it('should call the passed-in function once', () => {
    // create a mock function to pass in to `functionToTest`
    const mockFn = simple.mock();
    functionToTest(mockFn, 1);

    // verify that mockFn was called once
    expect(mockFn.calls.length).to.equal(1);

    // grab the first call to mockFn
    const callArgs = mockFn.calls[0].args;

    // verify that functionToTest only passed one parameter
    expect(callArgs.length).to.equal(1);
    // ...and that the parameter's value was 1
    expect(callArgs.length[0]).to.equal(1);
  });
});
```

This is enough for you to get a solid collection of tests going for the code that calls your database but `simple-mock` is much more featureful and it's worth looking into the different testing/validation modes it supports later.

> As normal we have a reference project that complets testing your database interaction code available in a [repl.it][backend-iii].

#### Independent Practice

You can learn a lot about mocking (and programming in general!) by writing your own mocks. If you're feeling adventurous, try rewriting the code block above without using `simple-mock` by writing your own `mockFn`.

### Check for Understanding

- Discuss the concepts of abstraction and mocks and how we apply them in testing
- Use the principles we spoke about when testing an external Database to test an external HTTP service

### Supplemental Materials

- [Mocking External HTTP Requests in Node Tests with Nock](https://semaphoreci.com/community/tutorials/mocking-external-http-requests-in-node-tests-with-nock)
