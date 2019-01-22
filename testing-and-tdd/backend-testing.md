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
sure that a single function behaves as we expect. In a real project though
functions are often called by our users or rely on external services. We still
want to ensure that our code works as expected though but testing these things
introduce some new challenges.

This lesson introduces new tools and code patterns that help us to meet those
challenges.

As a bonus the patterns we learn about to help design our code to facilitate
its testing is also a good practice that will aid readability and long term
maintainability of our codebase.

### Objectives

**Participants will be able to:**

- Explain the purpose and specific challenges of backend testing
- Write code to test GET, PUT, POST and DELETE requests
- Use mocks to mimic testing GET requests to an external API

### Specific Things To Teach

- Review/introduce testing packages
	- Mocha
	- Chai
	- Nock
	- GUIs for testing HTTP requests (Postman)
- Testing external APIs
	- Mocking
- Testing your own database (&#x1F534; TODO: need additional information)

### Materials

[Link to slideshow](pending)

[Node.js Tests: Mocking HTTP Requests](https://scotch.io/tutorials/nodejs-tests-mocking-http-requests)

[7 HTTP methods every web developer should know and how to test them](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)

## Lesson

### Establishing some terminology

Before we get started let's set some ground rules about how we use terminology.
This lesson is called "backend testing" but without establishing what `backend`
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
expected.

### Getting Started: Is backend testing special?

We've already talked about testing and how it's important to verify that the
quality of its code remains high as you send it out into the world. Why then
is it worth discussing backend testing, isn't that just more of the same?

Well, kind of.

Backend testing is important for the same reason: We need to ensure that our
code works as expected and to protect correct behavior in the future as we
make changes. So framed as "is testing important," yes backend testing can be
pretty much thought of as just more of the same. However when you actually sit
down to write these tests the interactions with external callers and APIs
introduce interesting new difficulties.

### Facing new challenges

So what are some of these new challenges and how to we address them?

1. We are often consumers of an external API and don't control its behavior;
2. These APIs we use typically strive for uptime, given this how do we test our
   project's behavior when those APIs fail;
3. Making calls to external APIs or databases often requires network access (or
   use of them is costly), both of which incentivize writing less comprehensize
   tests;
4. Running an API means we need to test our processing of HTTP requests which is
  not necessarily technically obvious.

There are other issues but learning how to address these is a great start and
covers many of the foundational skills necessary to provide great test coverage
for your project.

### Key concepts

#### Mocking

The core of our backend tests will be built on the concept of providing mocked
responses to external API calls. This allows us to take control over much of
the complexity of interacting with other services that we discussed above in
items 1 & 2. It additionally helps address the potential time and money costs
that making actual calls to the service would introduce into our tests.

> The concept of **mocking** was covered in [Intro to Testing][intro-to-testing].
> As a brief refresher it is the act of providing a fake implementation of an
> interface that allows you to specify exactly what the return value should be.
> It additionally enables you to verify that the API was called with some
> expected values.

In order to mock the HTTP calls we'll be using a library called [`nock`][nock].
Nock works by intercepting HTTP requests that your

[nock]: https://github.com/nock/nock

#### Experimentation

TODO: discuss manually testing external APIs with postman

#### Abstraction

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
