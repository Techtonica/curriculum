# Node HTTP exercise

## Primary Goal

- To build **an HTTP server using Node with a given set of endpoints**.
- Working with servers is the daily bread of any full stack developer. Although the Express module is highly used in the industry and makes things much easier when building a server in production, to learn how to build one from scratch will pay you back in spades, and can be really useful to you further down the road.

### Secondary Goals

- You will learn solely to use Node HTTP server, without using Express; to rely upon knowledge instead of dependencies.
- You will learn how to setup different routes.
- You will hone your skills in **Node**.

## Helpful Resources

- The entire [Week 6](https://github.com/Techtonica/curriculum#week-6---web-apis) lessons, except #9 which brings in Express. I would particularly revise #1-2-3-4 as they cover the core of the principles behind this assignment.
- A nice beginner-friendly tutorial by Trager Winn: [How to setup a Node.js web server from scratch](https://medium.com/swlh/how-to-build-a-javascript-web-server-from-scratch-using-only-node-js-a4e21a9abc88).
- Also, for the more advanced, this guide by Node offers some good options to help you create your solution: [Anatomy of an HTTP Transation](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/).

## Requirements

- Knowledge of HTTP, Node.
- Knowledge of Postman, although the tests are already handed out to you in the `node-http-exercise-postman-collection.json` file and the procedure to import it and run the tests detailed in the [Testing](#Testing) section.
- Knowledge of ES6 syntax, especially [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) can also help you produce cleaner code.
- When working with servers, it is important to use the common status codes to build your response. As a reminder, here are the most common server responses:

| code | status                                    |
| ---- | ----------------------------------------- |
| 1XX  | Informational                             |
| 2XX  | Success                                   |
| 200  | OK                                        |
| 201  | OK created                                |
| 204  | No content, but the headers may be useful |
| 3XX  | Redirection                               |
| 301  | Moved permanently                         |
| 302  | Found                                     |
| 304  | Not Modified (Cached Version)             |
| 4XX  | Client Error                              |
| 400  | Bad Request                               |
| 401  | Unauthorized                              |
| 404  | Not Found                                 |
| 5XX  | Server Error                              |
| 500  | Internal server error                     |

_For a more comprehensive list, please refer to the [official MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)_

## Instructions

### Step 1 - Create HTTP server

1. Create a `server.js` file in the folder you wish to work in and use this starter code:

```javascript
// require core http module
const http = require('http')
// require core url module
const url = require('url)
```

2. Create a server using the `createServer()` http method:

```javascript
const server = http.createServer((req, res) => {
  // The server code will go here, but leave this empty for now.
}
```

3. Create a function to listen on your server, using the `listen()` method, with the port as first parameter and callback as second. In that callback, insert a console log that will tell you your server is running properly upon running it. Ex: `Server running on port 5000...`.
4. Test your server by opening up a terminal in the directory your `server.js` file currently is in, then run:

```bash
node server.js
```

If all goes well, you should see your console log appear:

```bash
Listening on port 5000...
```

**Note that anytime you make a change in your server file, you will have to restart your server to see the changes being propagated. For this, simply click in the terminal and hit CTRL-C, then type in the above command to start the server again.**

### Step 2 - Create the Server Logic

For now, what you will be doing is to create the shell of your server by establishing the logic used. There are many ways to create a server. In this assignment, you will be guided in creating a certain type of server logic, but you could as easily find other ways, either from your own or by going through the [Helpful Resources](#helpful_resources).

1. The first thing you should do is to observe the `req.url` object. For this, we will be using the `parse()` method in the _url_ module you required at the top. I invite you to type in this code in your server function:

```javascript
let path = url.parse(req.url, true);
console.log(path);
res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });
res.end();
```

and then run the server and simply open a browser window and go to `http://localhost:5000`. When you come back to your terminal, you should see something that looks like this:

```bash
Listening on port 5000...
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/',
  path: '/',
  href: '/'
}
```

These are the parameters you will be using to build your server. Worthy of note are `pathname`, `path`, and `query`.

Back to creating the logic of your server, now. When the client makes a request to an endpoint, you want to examine what that endpoint is and then act according to what its requirements are. So, for that, we will first be creating a helper function that will parse the url to fetch only the pathname. Then, if this route exists, we will build the response accordingly.

2. Within the server, create default status code as `404` (not found).

3. Then, still using any variable name you want, create default content-type as `application/json`.

4. Set a default response object as such:

```javascript
let response = {
  message: 'Not Found'
};
```

5. Set an empty header object:

```javascript
let header = {};
```

6. Refactor the `writeHead()` function to use the placeholders:

```javascript
res.writeHead(status, { 'Content-Type': contentType });
```

If you test your server with the browser by going to the same url as above, what do you get?

How would you solve this in order to get the following:

```text
{"message":"Not Found"}
```

(See [hints](#hints) for the solution.)

7. Finally, create a test route:

```javascript
if (pathname === '/test') {
  status = 200;
  response.message = 'It Works!';
}
```

When testing this by going to `http://localhost:5000/test`, you should get:

```text
{"message":"It Works!"}
```

### Step 3 - Create Your Routes

This is the core step of the assignment. Since you have a working structure, the endpoints creation should be easier. Create each route's response by following the structure shown in the `/test` route:

- First, check the `pathname`;
- Second, set the status;
- Third, populate the response object accoding to the requirements for that route.

If you get stuck and need some help in creating the routes, you can look in the [hints](#hints) section for help.

1. Create the `/spin` route, wich should respond with nothing but keep on being open for connections.

2. Create the `/hangup` route, which should set the status to 200 and then close the connection.

3. Create the `/head` route, which should should respond with 204.

4. Create the `/hello` route, which should should respond with 200 and text body of "Hello".

5. Create the `/echo?message=xyz` route, which should respond with 200 and the message as the body. For this one, to help you out, you should start by console-logging the `req` object to find out how to pull out the message. Again, don't hesitate to check the [hints](#hints) if you get stuck.

6. Create the `/error` route, which should should respond with 500.

7. Create the `/time.json` route, which should should respond with 200, body with Content-Type of `application/json` and `{ "now": "Sat Feb 15 2020 14:29:20 GMT-0800" }` where it's the current time of the response.

8. Create the `/github` route, which should respond with 302 that redirects to [Techtonica GitHub page](https://github.com/Techtonica).

### Questions to Consider

- Why do you think it is better practice to use variables and not to hard-code everything within the response object and header?
- Why is it preferable to define default values for the response? Why not just code the responses for the given endpoints?
- How might you use one handler function and a way to lookup the correct response for each route? (see [extensions](#extensions) for guidance on how to implement this).

### Hints

- In step 2, point 6, you should be using the `JSON.stringify()` function to parse the response object and send it back in your `.end()`:

```javascript
res.end(JSON.stringify(response));
```

- In step 3, point 5, you can pull some data of the `req` object by using the `parse()` module.

```javascript
let path = url.parse(req.url, true);
response = path.query.message;
```

- You can abruptly end a connection by using `res.end()` with nothing inside of it.

### Testing

1. If you haven't already done it, download and install Postman. ([see HTTP request practice lesson for a refresher](/api/http-request-practice.md)).
2. Import the [node-http-server-assignment.postman_collection.json](/node-http-server-assignment.postman_collection.json) file that is located in the `node-http-exercise` folder.
3. When your server is running, simply choose the route you want to test in the left pane and click on `SEND`. You should then see the response and the status code.

### Extensions

#### 1 - Handler Function and Correct Response Lookup

If you want to have a more scalable solution, you can refactor your code by constructing an object containing the routes that will shape the response according to the requirements, still setting a default response for routes that are not defined. To do so:

- Outside of the server, create your routes object, populating it with the test route that you can remove later on. I usually place it before the `server.listen()` function:

```javascript
const routes = {
  '/test': {
    status: 200,
    contentType: 'text/html',
    message: 'It Works!'
  }
  // create your other routes here
};
```

- Create a helper function to construct the response object depending on the endpoint. Here is a structure you can use, with some pre-filled areas:

```javascript
for (const currentRoute in routes) {
  if (pathname === currentRoute) {
    // pull out this route's response
    let routeResponse = routes[currentRoute];

    // set status to response's or to default one
    // <TO COMPLETE ...>

    // set contentType to response's or to default one
    // <TO COMPLETE ...>

    // if this route has a message, build response with it
    if (routeResponse.message) {
      response.message = routeResponse.message;
    }

    // if this route has a custom response, use it
    // <TO COMPLETE ...>

    // if this route has custom headers, populate them for the response
    if (routeResponse.header) {
      // using [ES6 destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
      header = { ...routeResponse.header };
    }
  }
}
```

#### 2 - Browser Testing

You should try out the routes in a browser, to see the responses you get. Try with different browsers. Do you notice any differences? Open the console and try to locate the status codes.
Here are some routes and links worthy to check out. The links point to localhost:5000, so if you have chosen a different port, copy-paste the link and change the port to the one you used in your server.

| route                      | link                                            |
| -------------------------- | ----------------------------------------------- |
| /                          | http://localhost:5000/                          |
| /test                      | http://localhost:5000/test                      |
| /spin                      | http://localhost:5000/spin                      |
| /hangup                    | http://localhost:5000/hangup                    |
| /head                      | http://localhost:5000/head                      |
| /hello                     | http://localhost:5000/hello                     |
| /echo?message=Node_is_cool | http://localhost:5000/echo?message=Node_is_cool |
| /error                     | http://localhost:5000/error                     |
| /time.json                 | http://localhost:5000/time.json                 |
| /github                    | http://localhost:5000/github                    |
| /anything_else             | http://localhost:5000/anything_else             |

## Submission Requirements

**Always create a README.md file in the root of your folder to explain the project and link to these instructions.**

Please submit using the normal pull request submission process. If you are not 100% done by the deadline, submit what you have and note in the PR description what remains to be done. Ensure you've included any instructions, latest database dumps, etc so a volunteer reviewer without as much context can review it.

**Good luck!**
