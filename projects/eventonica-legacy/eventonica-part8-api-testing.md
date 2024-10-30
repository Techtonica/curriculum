# [LEGACY] Eventonica - Part 8 - API Testing

### Primary Goals

- Practice writing tests with Jasmine and Supertest
- Catch any bugs in your project's API code

### Overview

Now that you've tested your model classes, you'll use Jasmine and Supertest to ensure your API's work as expected.

### Instructions for adding tests

1. Install `supertest` by running `npm install supertest --save-dev`
2. Install and setup `jasmine` if you have not yet done so, see previous lesson for instructions.
3. Supertest needs the express `app` that you create in your `index.js` file. We're going to move the `app` creation and setup to a `server.js` file so that your tests can access it easily. See this [blog](https://rahmanfadhil.com/test-express-with-supertest/#test-preparation) for an example.

```js
// server.js file
const express = require('express');
... all your imports

function createServer() {
    const app = express();
    // all your app.use setup and app routes
    return app
}
module.exports = createServer

// index.js file
const createServer = require("./server")

app = createServer()
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The application is running on localhost:${PORT}`);
})
```

4. In the `spec` folder you created in the previous exercise, create a file `apiSpec.js` and copy the sample code below:

```js
const createServer = require('../server');
const request = require('supertest');

describe('The application', function () {
  it('creates and deletes the event successfully', function (done) {
    const createParams = {
      eventDate: { year: 2020, month: 10, day: 11 },
      eventLocation: 'home',
      eventCategory: 'art',
      eventID: '1',
      eventName: 'paint by numbers'
    };
    const app = createServer();
    // create the event
    request(app)
      .post('/event')
      .send(createParams)
      .set('Accept', 'application/json')
      .expect(200, done);

    // now fetch the events
    request(app)
      .get('/events')
      .expect(200)
      .then((response) => {
        const events = response.json();
        assert(events.length, 1); // 1 event
        assert(events[0].id === '1');
        done();
      })
      .catch((err) => done(err));

    // now delete the event
    const deleteParams = { eventID: '1' };
    request(app)
      .delete('/event')
      .send(deleteParams)
      .set('Accept', 'application/json')
      .expect(200, done);

    // now fetch the events again
    request(app)
      .get('/events')
      .expect(200)
      .then((response) => {
        const events = response.json();
        assert(events.length, 0); // no events
        done();
      })
      .catch((err) => done(err));
  });
});
```

5. The sample test above checks that the event creation and deletion work as expected. Update it to match your API routes, expected parameters, and expected body format (the tested app expects JSON input, but your app may differ). Run `npm test` to run all your tests, or `npm test spec/apiSpec.js` to run only the API tests.
6. Add a test for your event search API.
7. Add at least one more test of your choice. What else could be useful to test in your code?
