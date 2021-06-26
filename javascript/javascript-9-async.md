# JavaScript 9 - Async, Callbacks, Promises

### Projected Time

About 1 to 2 hours

- 15 minutes for Lesson
- 30 minutes for Demonstration
- 50 minutes for Independent Practice
- 10 minutes for Checking Understanding

### Prerequisites

- Know how to create a JavaScript function, named and anonymous.
- Know what Asynchronous means.

### Motivation

- Callbacks are an important part of JavaScript's (and any asynchronous language's) history. You will learn about "callback hell" and how promises help you "reach heaven" again.

### Objectives

**Participants will be able to:**

- Identify and write callbacks and promises.
- Know when to use a promise.

### Specific Things to Learn

- callback
- `new Promise(((resolve, reject) => {}))`
- `promise.then()`
- `Promise.all()`
- async / await
- done()

### Materials

- [Video on Callbacks, Promises, Async-Await (25min watch)](https://youtu.be/PoRJizFvM7s)
  - 2:31 - [Callbacks](https://youtu.be/PoRJizFvM7s?t=151)
  - 10:33 - [Promises](https://youtu.be/PoRJizFvM7s?t=633)
  - 19:58 - [Async-Await](https://youtu.be/PoRJizFvM7s?t=1199)
  - Short Article on Promises (https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/)

### Lesson

- Watch [this video on Callbacks, Promises, Async Await](https://youtu.be/PoRJizFvM7s). It's 24 minutes, but it's totally understandable at 2x speed.

### Things to Remember

- A callback is just a function that is called when another function is done.
- We have them because JavaScript is asynchronous.
- A promise is a class of object. Think of it as a literal promise. Like a task that you promise to finish _later_.
- It's built into most browsers (all but IE: [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)).
- It's different from the object return by jQuery's AJAX but similar.
- It's the object returned by [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (like AJAX but built into most browsers)

### Guided Practice

1. Open up dev console in browser.
2. Write a function name **counter** and pass in another function(the callback) named **cb** as parameter.

```js
function counter(cb) {
  console.log('inside counter function ');
  cb(); //here callback function gets called by counter()
}
counter(function () {
  console.log('inside callback function');
});
```

3. If we again call **counter()** inside **cb()** definition then we can see a pattern of deep nesting, known as callback hell.

```js
function counter(cb) {
  console.log('inside counter function ');
  cb();
}

counter(function () {
  console.log('inside callback function');
  counter(function () {
    console.log('inside callback function');
  });
});
```

There's got to be an easier way to write things that depend on each other, right? Promises.

4. Create a `Promise` and pass a callback to its `then` method. Create callback that uses `setTimeout` to mimic latency (network/database delay). The callback passed to `setTimeout` will resolve the promise (use the parameter).
5. Chain another `then` with a callback that console.logs something to show the flow of execution.

```js
// Create a variable boolean
const isPersonHappy = true;

// Create First Promise with the basic structure of a promise
const willIGetNewPhone = new Promise(
  // The function passed to new Promise is called the executor.
  // The arguments resolve and reject are callbacks functions provided by JavaScript itself.
  (resolve, reject) => {
    // Our code is only inside the executor.
    if (isPersonHappy) {
      const phone = {
        brand: 'Pixel',
        color: 'black'
      };
      resolve(phone);
    } else {
      const reason = new Error('The person is not happy');
      reject(reason);
    }
  }
);

// This a function that returns a Promise. That Promise is constructed using a static method.
const showOff = function (phone) {
  const message =
    'Hey friend, I have a new ' + phone.color + ' ' + phone.brand + ' phone';
  return Promise.resolve(message);

  // This is equivalent to using this constructor for the Promise Object
  // return new Promise ((resolve, reject) => {
  //   resolve(message);
  // });
};

// Inside this function we will chain our Promises.
const askPerson = function () {
  willIGetNewPhone
    .then(showOff)
    .then((fulfilled) => console.log(fulfilled))
    .catch((error) => console.log(error.message));
};
askPerson();
```

In general, you don't create promises. You work with promises while doing asynchronous tasks.

```js
// Imagine working with a function that has to check if a User is Valid from a URL
function checkWorker(url) {
  // You will need to use fecth to call the URL with the list of users
  fetch(url)
    // fetch return a promise object and you need to use then to process the response
    .then((response) => {
      // First: Ensure the status of the service
      if (response.status === 404) {
        // No service worker found. Probably a different app. Reload the page.
        window.location.reload();
      } else {
        // Service worker found. Proceed as normal.
        registerValid(Url);
      }
    })
    // The catch method allows you to manage errors inside Promise
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode'
      );
    });
}
```

- Watch [this 4 minute video with the explanation of the code example](https://www.youtube.com/watch?v=_4Y7ly8k0j4&ab_channel=CrissRodriguez).

### Independent Practice

Play around in your favorite browser's dev console using the fetch method to understand working with promises

### Challenge

- Create several promises, each with callbacks with different `setTimeout` times.
- Then call them in parallel, which promise method can you use for that?
- Chain a `catch` method (like how you did with `then`) to this promise, and pass another callback. Which promise parameter can you use to pass control from `then` to `catch`?
- Look at the object returned by creating a promise. What properties does it have? Look for its `status`.
- Check its `status` again, has it changed?

### Check for Understanding

- Why do we use callbacks?
- Define a promise in your own words.

### Supplemental Materials

- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Understanding Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [JavaScript Promises in 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)
- [Async/await reference](https://javascript.info/async-await)
- [Introduction to Promises](https://beta.observablehq.com/@mbostock/introduction-to-promises)
