# Learning Context

### Understanding Promises

- A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.

### ⚙️ Creating a Promise

- To create a promise, you use the Promise constructor, which takes a function (the executor) as its argument. This function has two parameters: `resolve` and `reject`, which are functions used to settle the promise. The `resolve` function is called when the asynchronous operation completes successfully, while `reject` is called if the operation fails

```
const promise = new Promise((resolve, reject) => {
 // Asynchronous operation
 if (/* operation successful */) {
    resolve(value);
 } else {
    reject(error);
 }
});
```

### 👷🏾‍♀️ Using Promises

- Once a promise is created, you can attach callbacks to it using the `.then()` method for handling fulfilled promises and `.catch()` for handling rejected promises. The `.then()` method returns a new promise, allowing for chaining

```
promise
 .then(result => {
    // Handle fulfilled promise
 })
 .catch(error => {
    // Handle rejected promise
 });
```

### 🖇️ Chaining Promises

- You can chain promises to perform multiple asynchronous operations in sequence. Each `.then()` returns a new promise, allowing you to chain them together

```
fetch(url)
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error(error));
```

### ⛔️ Error Handling

- Promises provide a way to handle errors using `.catch()` or by chaining `.then()` with a rejection handler. This makes error handling more straightforward compared to traditional callback patterns

### ⏳ Async/Await

- The async and await keywords provide a more synchronous-looking way to work with promises. An async function always returns a promise, and await can be used to pause the execution of the function until the promise is resolved or rejected. This makes asynchronous code easier to read and understand

```
async function fetchData() {
 try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
 } catch (error) {
    console.error(error);
 }
}
```

# Tasks to Complete

### 1️⃣ Uppercase String Promise

Implement a function that takes a string and returns a promise. The promise should resolve with the uppercase version of the string, but reject if the string is null.

### 2️⃣ Simulated Data Fetching

Create a function that simulates fetching data from a server. This function should return a promise that resolves after a simulated delay, mimicking the asynchronous nature of fetching data.

### 3️⃣ [Bonus] Asynchronous Request Queue

Implement a queue system that manages the execution of tasks, ensuring that no more than a specified number of tasks run at the same time. The queue should execute tasks in the order they were added, and when a task completes, the next task in the queue should start.

1. Create a Queue Class: Define a class `AsyncQueu`e that takes a `concurrencyLimit` as a parameter. This class will manage the tasks.
2. Implement Queue Methods:
   - `enqueue(task)`: Adds a task to the queue.
   - `runNext()`: Executes the next task in the queue if the concurrency limit is not reached.
3. Manage Task Execution: Ensure that the queue only runs a maximum number of tasks concurrently, as specified by `concurrencyLimit`. When a task completes, check if there are more tasks in the queue and run the next one if possible.
4. Test the Queue: Create several tasks that simulate asynchronous operations with different durations. Add these tasks to the queue and observe if the queue correctly limits the concurrency and processes tasks in the order they were added.
