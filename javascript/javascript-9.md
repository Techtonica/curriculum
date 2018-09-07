# Javascript 9 - Callbacks and Promises

### Projected Time
About 1.1 hours
- 30 minutes for Demonstration
- 30 minutes for Independent Practice
- 10 minutes for Checking Understanding

### Prerequisites
- Know how to create a Javascript function, named and anonymous.
- Know what Asynchronous means.

### Motivation
- Callbacks are an important part of Javascript's history, any asynchronous language's actually. You will learn about "callback hell" and how Promises help you reach heaven again.

### Objectives
**Apprentices will be able to:**
- Identify and write callbacks and Promises.
- Know when to use a Promise.

### Specific Things To Teach
- callback
- `new Promise(((resolve, reject) => {}))`
- `promise.then()`
- `Promise.all()`

### Supplemental Materials
- [Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

### Lesson
- Non-existent, jump to Demonstration.

### Things to Remember
- A callback is just a function that is called when another function is done. 
- We have them because Javascript is asynchronous.
- Promise is a class of object. Think of it as a literal promise. Like a task that you promise to finish _later_.
- It's built into most browsers(all but ie: [Browser Support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Browser_compatibility)).
- It's different than the object return by jQuery's AJAX, but similar.
- It's the object returned by [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (like AJAX but built into most browsers)

### Demonstration
1. Open up dev console in browser.
2. Write a function and pass in another function(the callback) that gets called inside the first function.
3. Show "callback hell" but passing in functions as parameters like 4 levels deep. There's got to be an easier way to write things that depend on eachother, right?
4. Create a `Promise` and pass a callback to its `then` method. Create callback that uses `setTimeout` to mimic latency (network/database delay). The callback passed to `setTimeout` will resolve the promise (use the parameter).
5. Chain another `then` with a callback that console.logs something to show the flow of execution.

### Independent Practice
- Play around in your favorite browser's dev console.

### Challenge
- Create several Promises, each with callbacks with different `setTimeout` times.
- Then call them in parallel, which Promise method can you use for that?
- Chain a `catch` method (like how you did with `then`) to this promise, and pass another callback. Which Promise parameter can you use to pass control from `then` to `catch`?
- Look at the object returned by creating a Promise. What properties does it have? Look for its `status`.
- Check its `status` again, has it changed?

### Check for Understanding
- Why do we use callbacks?
- Define a Promise in your own words.