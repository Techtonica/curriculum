/*
 * Optional: run with 'node tryIt.js' to see the output of a getUserData() call before writing your test assertions.
 * It is NOT an example of a Jest test.
 */

const UserService = require("./userService");
const service = new UserService("https://jsonplaceholder.typicode.com");
service.getUserData(1).then((data) => console.log(data));
