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

- Review/introduce testing packages
  - Mocha
  - Chai
  - Nock
  - Supertest
  - Postman
- Testing external APIs
  - Mocking
- Testing HTTP requests to your project
  - Supertest
- Testing your own database

### Materials

[Link to slideshow](pending)

[Node.js Tests: Mocking HTTP Requests](https://scotch.io/tutorials/nodejs-tests-mocking-http-requests)

[7 HTTP methods every web developer should know and how to test them](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)

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

### Key concepts

We're going to discuss 

#### Mocking

The core of our tests will be built on the concept of providing mocked
responses to external API calls. This allows us to take control over much of
the complexity of interacting with other services that we discussed above in
items 1 & 2. It additionally helps address the potential time and money costs
that making actual calls to the service would introduce into our tests (item
3).

> The concept of **mocking** was covered in [Intro to Testing][intro-to-testing].
> 
> As a brief refresher: it is a technique of providing an implementation of an
> interface which allows you to specify exactly what the return value should be
> when a specific call is made.  
> Additionally, it enables you to verify that the interface was called with
> the expected values.

In order to mock backend calls we'll be using a library called [`nock`][nock].
Nock works by intercepting HTTP requests that your code makes checking against
what you've instructed it to expect. If it finds a match it will return the
response you've configured, if not it will result in a test failure.

Let's look at an example; for now don't worry about what files these live in
as we'll deal with that later.

```javascript
// TODO: this example taken directly from the scotch.io page, should probably
// vary it -- it feels icky to just lift it

// A simple function that we want to test; it makes an HTTP request to github
// to retrieve a user object. It returns the result in a Promise.
// TODO: have they covered promises by this point?
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

**Exercise**

1. What do you think would happen if you had called `getUser('not-octocat')`?
2. How do you think this would change if we changed `mockObject.id` to be `42`?

[nock]: https://github.com/nock/nock

#### Abstraction

Think back to [Eloquent Javascript Ch]

### Putting it all together

### Common Mistakes / Misconceptions

- I need to constantly test the external APIs I'm using to make sure my code
  still works.
	- Instead, write mock classes that return information in the format you
    expect it. In other words, assume that everything is okay on the external
		service's end. Use these mocks to test expected and unexpected behavior
		&mdash; this way you will be prepared for future unexpected external
		behavior without needing to hit an external API on every test.


### Guided Practice

Guided practice should follow along with the [Mocking HTTP requests](https://scotch.io/tutorials/nodejs-tests-mocking-http-requests) from Scotch.io.


### Independent Practice

Class does this thing themselves with specific additional items.
note: probably something with testing a put or post request


### Challenge

Apprentices can try to do this other thing.


### Check for Understanding

Some ideas: have apprentices summarize to each other, make a cheat sheet, take
a quiz, do an assignment, or something else that helps assess their
understanding.
