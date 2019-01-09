# Adding Unit Tests to your NodeJS project

### Projected Time

Example: 30-45 minutes

### Prerequisites

Here are links to lessons that should be completed before this lesson:

- [Intro to Testing and TDD](testing-and-tdd.md)
- [Jasmine Testing](jasmine-testing.md)


### Motivation

Backend, or database, helps ensure that when your application makes an API call, the information sent and/or received behaves in the way you expect it to. This type of testing can be especially challenging, but crucial, if your application relies on an external API--say, gathering Yelp reviews--since the structure of the external database could change at any time.


### Objectives

**Participants will be able to:**

- Explain the purpose and specific challenges of database testing
- Write code to test GET, PUT, POST and DELETE requests
- Use mocks to mimic testing GET requests to an external API


### Specific Things To Teach

- Review/introduce testing packages
	- Mocha
	- Chai
	- Nock
	- GUIs for testing HTTP requests (Postman)
- Testing your own database
- Testing external APIs
	- Mocking


### Materials

[Link to slideshow](pending)

[Node.js Tests: Mocking HTTP Requests](https://scotch.io/tutorials/nodejs-tests-mocking-http-requests)

[7 HTTP methods every web developer should know and how to test them](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)

### Lesson

Ensure apprentices have completed the Jasmine Testing lesson and are comfortable using Mocha and Chai and review if necessary.



### Common Mistakes / Misconceptions

- I need to constantly test the external APIs I'm using to make sure my code still works.
	- Instead, write mock classes that return information in the format you expect it. In other words, assume that everything is okay on the external service's end. Use these mocks to test expected and unexpected behavior--this way you will be prepared for future unexpected external behavior without needing to hit an external API on every test.


### Guided Practice

Guided practice should follow along with the [Mocking HTTP requests](https://scotch.io/tutorials/nodejs-tests-mocking-http-requests) from Scotch.io.


### Independent Practice

Class does this thing themselves with specific additional items.
note: probably something with testing a put or post request


### Challenge

Apprentices can try to do this other thing.


### Check for Understanding

Some ideas: have apprentices summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.
