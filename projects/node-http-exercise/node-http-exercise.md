# Node HTTP exercise

## Primary Goal

- To build **an API with a given set of endpoints**.
- Working with APIs is the daily bread of any full stack developer. Although the Express module is highly used in the industry and makes things much easier, to learn how to build one from scratch will pay you back in spades, and can be really useful to you further down the road.

### Secondary Goals

- You will learn solely rely upon Node HTTP server, without using Express, learning to rely upon knowledge instead of dependencies.
- You will learn how to setup different routes.
- You will hone your skills in **Node**.

## Helpful Resources

- The entire [Week 6](https://github.com/Techtonica/curriculum#week-6---web-apis) lessons, except #9 which brings in Express. I would particularly revise #1-2-3-4 as they cover the core of the principles behind this assignment.
- The [official Node documentation](https://nodejs.org/api/http.html), which will be helpful in so many ways.

## Requirements

- Knowledge of HTTP, APIs, Node.
- Knowledge of Postman, although the tests are already handed out to you in the `node-http-exercise-postman-collection.json` file and the procedure to import it and run the tests detailed in the [Testing](#Testing) section.
- Knowledge of ES6 syntax, especially [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) can also help you produce cleaner code.
- When working with APIs, it is important to use the common status codes to build your response. As a reminder, here are the most common server responses:

| code | status                                    |
| ---- | ----------------------------------------- |
| 1XX  | Informational                             |
| 2XX  | Success                                   |
| 200  | OK                                        |
| 201  | OK created                                |
| 204  | No content, but the headers may be useful |
| 3XX  | Redirection                               |
| 301  | Moved to new URL                          |
| 302  | Found                                     |
| 304  | Not Modified (Cashed Version)             |
| 4XX  | Client Error                              |
| 400  | Bad Request                               |
| 401  | Unauthorized                              |
| 404  | Not Found                                 |
| 5XX  | Server Error                              |
| 500  | Internal server error                     |

_For a more comprehensive list, please refer to the [official MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)_

## Instructions

### Step 1 - Create HTTP server

1. Create a `server.js` file in the folder you wish to work in.
1. In this file, import, using `require()`, the core http module.
1. In this file, import also the core url module.
1. Create a server using the `createServer()` http method. This methode will take a callback function as parameter. In this callback function, use the `req` and `res` parameters, which are shortands representing the request and response objects you will be working with in your API.
1. Leave the server empty for now
1. Create a PORT constant and assign a port your server will listen to. Usually, port 5000 is good for development purposes.
1. Create a function to listen on your server, using the `listen()` method, with port as first parameter and callback as second. In that callback, insert a console log that will tell you your server is running properly upon running it. Ex: `Server running on port 5000...`.
1. Test your server by opening up a terminal in the directory your `server.js` file currently is in, then run:

```bash
node server.js
```

If all goes well, you should see your console log appear:

```bash
Listening on port 5000...
```

**Note that anytime you make a change in your server file, you will have to restart your server to see the changes being propagated. For this, simply click in the terminal and hit CTRL-C, then type in the above command to start the server again. In the [extensions](#extensions) below, you will see an alternate method that will be very useful if your build more APIs further down the road, but for now, it is not mandatory for the assignment.**

### Step 2 - Create the Server Logic

In order to fully test your API, you will be using Postman to test your routes. For now, what you will be doing is to create the shell of your API by establishing the logic used in your server. There are many ways to create a server. In this assignment, you will be guided in creating a certain type of server logic, but you could as easily use simple `if else` statements or even a `switch` method to render your data. However, since there are quite a few routes required in this API, let's have a structure that will simplify the code. You will have a cleaner API and it will be easily scalable for your own projects. The logic will be simple: we will construct an object containing the routes that will shape the response according to the API requirements, and a default response for routes that are not defined.

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

These are the parameters you will be using to build your API. Worthy of note are `pathname`, `path`, and `query`.

Back to creating the logic of your server, now. When the client makes a request to an endpoint, you want to examine what that endpoint is and then act according to what your API should do. So, for that, we will be creating a helper function that will parse the url to fetch only the pathname, then look into an object containing all your routes to see if this route exists, then build your response accordingly.

There are many ways to do this. Some developers use Regex, others use parsing libraries (such as `utils`), but for the purpose of this assignment, we will be using plain old JavaScript.

2. Within the server, create default status code as `404` (not found).

3. Then, still using any variable name you want, create default content-type as `application/json`.

4. Set a default response object as such:

```javascript
let response = {
  message: 'Not Found',
};
```

5. Set an empty header object:

```javascript
let header = {};
```

6. Refactor the writing header function to use the placeholders:

```javascript
res.writeHead(status, { 'Content-Type': contentType });
```

7. Use the `JSON.stringify()` function to parse the response object and send it back in your `.end()`:

```javascript
res.end(JSON.stringify(response));
```

Now if you test your API with the browser by going to the same url as above, you should get this as a response:

```text
{"message":"Not Found"}
```

8. Outside of the server, create your routes object, populating it with a test route that you will remove later on. I usually place it before the `server.listen()` function:

```javascript
const routes = {
  '/test': {
    status: 200,
    contentType: 'text/html',
    message: 'It Works!',
  },
};
```

9. Create the helper function to construct the response object depending on the endpoint.

```javascript
for (const currentRoute in routes) {
  if (pathname === currentRoute) {
    // pull out this route's response
    let routeResponse = routes[currentRoute];

    // set status to response's or to default
    status = routeResponse.status || status;

    // set contentType to response's or to default
    contentType = routeResponse.contentType || contentType;

    // if this route has a message, build response with it
    if (routeResponse.message) {
      response.message = routeResponse.message;
    }

    // if this route has a custom response, use it
    if (routeResponse.response) {
      response = routeResponse.response;
    }

    // if this route has custom headers, populate them for the response
    if (routeResponse.header) {
      header = { ...routeResponse.header };
    }
  }
}
```

When testing this by going to `http://localhost:5000/test`, you should get:

```text
{"message":"It Works!"}
```

### Step 3 - Create Your Routes

This is the core step of the assignment. Since you have a working structre, the endpoints creation should be easier.

Now, we will build the following routes requested in your API. If you get stuck and need some help in creating the routes, you can look in the [hints](#hints) section for help.

1. Create the `/spin` route, wich should make a GET request to the server and this one should respond with nothing, but keep on being open for connections.

2. Create the `/hangup` route, which should close the connection with no response. This one can be created in multiple ways. Think about maybe making a check for this route before the helper function. Remember that you are looking for the `pathname` for this check. See [hints](#hints) for more information about this.

3. Create the `/head` route, which should should respond with 204.

4. Create the `/hello` route, which should should respond with 200 and text body of "Hello".

5. Create the `/echo?message=xyz` route, which should respond with 200 and the message as the body. For this one, to help you out, you should start by console-logging the `req` object to find out how to pull out the message. Also, as a hint, the solution uses a check before the helper function also for that one.

6. Create the `/error` route, which should should respond with 500.

7. Create the `/time.json` route, which should should respond with 200, body with Content-Type of `application/json` and `{ "now": "Sat Feb 15 2020 14:29:20 GMT-0800" }` where it's the current time of the response.

8. Create the `/github` route, which should respond with 302 that redirects to [Techtonica GitHub page](https://github.com/Techtonica).

### Questions to Consider

- Why do you think it is better practice not to hard-code everything within the response object and header?
- How is this API construct different than a RESTful API?
- In terms of security, what do you think the implementation with the different checks for routes either in the object or earlier certain endpoints yield? Could this be improved?

### Hints

- You can abruptly end a connection by using `res.end()` and `server.close()`.
- If called as such, the `Date()` created will look like this: `Wed Oct 14 2020 21:22:50 GMT-0400 (Eastern Daylight Time)`, but for this exercise, we do not want what's in the parentheses at the end. For any more information, I invite you to check the [official Date documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
- If you want to make a check before going into the helper function, you can first create a variable with the route, including the slash, then check if the `pathname` triple-equals to that variable. Then you can either cut the connection shortly or do anything else before your regular routes checks. For example, you could use the `res.end()` and `server.close()` or inquire on the `path.query.message` to get more information on the url.

### Testing

1. If you haven't already done it, [download and install Postman](https://www.postman.com/product/api-client/).
1. Import the `node-http-server-assignment.postman_collection.json` file that is located in the `node-http-exercise` folder.
1. When your server is running, simply choose the route you want to test in the left pane and click on `SEND`. You should then see the response and the status code.

### Extensions

- If you want, instead of always restarting the server when you make a change, you can install `Nodemon` by doing `npm i nodemon` within your project folder. For this, you need to have `npm` installed and will be changing the start script in the `package.json`. If you are interested in doing so, here is a [very good tutorial](https://www.digitalocean.com/community/tutorials/workflow-nodemon).
- If you want cleaner code, use destructuring in the given helper function.

## Submission Requirements

**Always create a README.md file in the root of your folder to explain the project and link to these instructions.**

Please submit using the normal pull request submission process. If you are not 100% done by the deadline, submit what you have and note in the PR description what remains to be done. Ensure you've included any instructions, latest database dumps, etc so a volunteer reviewer without as much context can review it.

# Good luck!

```

```

```

```
