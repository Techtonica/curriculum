/*
 * Optional: run with 'node tryIt.js' to see the output of a getUserData() call before writing your test assertions.
 * This optional example makes a real HTTP request. It is provided only to demonstrate what the service does.
 * It is NOT an example of a Jest test.
 * Do not use this approach inside your Jest unit tests.
 */

const UserService = require("./userService");
const service = new UserService("https://jsonplaceholder.typicode.com");
service.getUserData(1).then((data) => console.log(data));
