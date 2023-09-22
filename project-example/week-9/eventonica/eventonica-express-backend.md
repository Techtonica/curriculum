# Eventonica - Express API

### Overview

Up until now in your Eventonica project, all the data is deleted every time you refresh the page (unless you've added localStorage) and you can't have multiple users of your app share data. That's because the data you're storing is stored in your web browser. In this part of the Eventonica project, we'll create an Express API to store the data and serve it to all users of your site.

#### Example API Endpoint

For example, in your code before, to get all the events, you might've had a function like `app.getAllEvents()`. Instead, we will create an API endpoint like `http://127.0.0.1:4000/events` that returns all the current events as a JSON response.

#### Why is this better?

- Before, each tab had it's own copy of events. Now they can be stored in one location so all users can see the same data and interact with it
- Centralizing the logic allows us to add a database so the data will live on even if the server is restarted or crashes
- Turning the logic of our system into a REST API makes it way more flexible

  - you could call it using a non-JavaScript client such as Postman or an app written in a different language (like an Android app in Java). All modern languages speak HTTP.

So let's get to it!

### Instructions

#### Create a new Express App

1. In your terminal, navigate to your `eventonica/client` directory . Start it with `npm start`.

1. You will need to create a second app for your Express backend. In a second terminal window, navigate to your general `Eventonica` project folder. Follow these commands to create a new project called `server` and start it.

   ```
   mkdir server
   cd server
   npm init -y
   ```

1. Let’s install Express, nodemon and cors as a dependency to use it

   ```shell

   npm install express cors
   npm install --save-dev nodemon
   ```

   - Let’s take a quick look at the three packages:

     - express: Express is a fast and lightweight web framework for Node.js. Express is an essential part of the PERN stack.
     - cors: CORS is a node.js package for providing an Express middleware that can be used to enable CORS with various options. Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. In our case, we need cors because we're running the client and server apps on different domains (because the ports are different). If they were running on the same domain, we wouldn't need to use this.
     - nodemon: nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

1. Next, go into the package.json `scripts` and add this start script. This helps you to run the server with a simple command. Tell Node.js that all files are ES Modules by adding `"type": "module"`

   ```shell
   "type": "module",
   "scripts": {
     "start": "node index.js",
     "server": "nodemon index.js"
   },
   ```

1. Next, create a file called index.js. Fill the following code in it

   ```js
   import express from 'express';
   import cors from 'cors';

   const app = express();

   app.use(cors());

   //Set the port that you want the server to run on
   const PORT = 4000;

   //creates an endpoint for the route /api
   app.get('/api', (req, res) => {
     res.json({ message: 'Hello from ExpressJS' });
   });

   // console.log that your server is up and running
   app.listen(PORT, () => {
     console.log(`Server listening on ${PORT}`);
   });
   ```

1. Save the file. Run `npm run server` on your terminal. Go to http://localhost:4000/api in your browser, you will see {"message":"Hello from ExpressJS"} message.

1. `.gitignore` your `node_modules`. Push your project up to GitHub.

#### Create a new users route

- Copy your list of mock users from your client/src/components/Users.js file to the `index.js` into an array called `users`. Create an endpoint `/api/users`

  ```js
  let mockUsers = [
    { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
    { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
    { id: 3, name: 'Dory', email: 'dory@gmail.com' }
  ];

  app.get('/api/users', (req, res) => {
    console.log('api/users called!');
    res.json({ users: mockUsers });
  });
  ```

**Check** Review the difference between `res.json` and `res.send`. Typically front-end apps to expect to receive responses as a JSON.

Restart your server. Do you see the users list at `http://localhost:4000/api/users`?

**What shape should the response object be?**
The example response returns `{ users: [array of users] }` instead of just `res.json(users)`. This is because naming the user object `users` is a more clear way of presenting this information. Also, this endpoint could send other information in addition to the user array. For example, it is common to have pagination in GET endpoints. So the response could eventually be something like `res.json( { users:[user array], pagination: {pageSize: 10, page: 1 } });`

#### Testing in Postman

Testing in Postman (or a similar app) is a great way to test and understand your backend services. While you can test the URLs in Chrome, or test your endpoints by calling them in React, they offer less flexibility, and/or might have less context into the endpoint's behavior and errors.

1. Testing the endpoint
   Open Postman, and open a new tab called "Eventonica". "GET" should be automatically selected in the dropdown. Enter `http://localhost:4000/api/users` into the request URL and press send. You should see the same list of users in the response below.

2. Testing sending information
   Now the get users endpoint always returns all users. However, in the future we might want filtering.

To test this, you can console log `console.log(req.body, 'the body')` before the `res.json` line. In Postman, now try adding a body. Click the "body" tab and select "raw". Then select "JSON" from the dropdown. Try sending a JSON of something that the API might send. For example, it could send `{"name": "nemo"}` for when you implement filtering.
Right now you can see `undefined` in console. Add Express body parser `app.use(express.json());` in index.js. Now you can see `{"name": "nemo"}` in console.
Note: that console logs will not show up in Postman.

Your final code should look something like this:

```js
//server/index.js
import express from 'express';
import cors from 'cors';

const app = express();

const PORT = 4000;

app.use(cors());
// express.json() is a built in middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

//creates an endpoint for the route /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from ExpressJS' });
});

app.get('/api/users', (req, res) => {
  console.log(req.body);
  console.log('api/users called!');
  res.json({ users: mockUsers });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

#### Access your API from your React app

1.  Back in your frontend, open `client/src/Users.jsx`. Add the following code:

    ```jsx
    function Users() {
      const [users, setUsers] = useState([]);

      console.log('users', users);

      const getUsers = () => {
        fetch('http://localhost:4000/api/users')
          .then((res) => res.json())
          .then((res) => setUsers(res.users));
      };

      useEffect(() => {
        // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
        getUsers();
      }, []);
    ```

    **Check**
    Why do we set `setUsers(res.users)` instead of `setUsers(res)`? Remember that `res` is an object with a key `users`, but it could also have other information. Try to keep states as specific as possible. ie if the `res` response did have other information such as pagination, we want to keep the `users` state as "specific" as possible, so that it only stores the users array part of the API response.

1.  If you look at http://localhost:3000/ or your terminal, it will probably say that `useState` and `useEffect` are not defined. You should import these React hooks from React like this on line 1:

    ```js
    import React, { useEffect, useState } from 'react';
    ```

1.  If you visit localhost:3000, you should see the response from your `/api/users` route!

#### Use your API data to render a events list in your React app

Now your challenge is to:

- Move your example events out of `client/src/components/Events.jsx` and into `server/index.js` and make sure it is a single array of events.
- Have the events array be the response from http://localhost:4000/api/events, and make sure it renders in your frontend on localhost:3000
- Have your React Events component render events as HTML list items rather than plain text.

#### The real work

Add remaining REST API routes for `users` listed in the [project README](./README.md). Don't worry about `events` or `favorites` for now... you can add those after we get our database going.

`Users` now needs "add" and "delete" functionality. For example, a frontend function called `addUser()` should make a POST request to http://localhost:4000/api/users/
and add a user by posting JSON with your API (which currently just saves to a variable since we have no DB), and the API would need a route like this:

```js
app.post('/api/users', function (req, res, next) {
  // save request data to a variable in routes/users.js

  res.send('some message about your data being saved, and a copy of that data');
});
```

**Tip**
Did you declare your `users` variable with `var`, `const`, or `let`? You can review the differences [here](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
This could make a difference depending on how you implement your `addUser` functionality - how so?

- Commit after every successful addition - that way if you get mixed up, you have a clean save point to return to.

- Use Postman or your preferred tool to test the API routes.

- Try refreshing the page and using it in multiple browser windows. Your data is persisted in memory in Express, and will only be cleared when the app is restarted. When can the data be saved across sessions? The solution is to add a Postgres database in the next outline.

### Express Tips & Resources

- You can use [body-parser middleware](https://expressjs.com/en/5x/api.html#req.body) to parse JSON request body data.

- If you run into a CORS error, you can use [cors middleware](https://expressjs.com/en/resources/middleware/cors.html) to sidestep the error for local development.

- [Handling Form Data in Express](https://www.hacksparrow.com/webdev/express/handling-processing-forms.html).

- [Express tutorial](../../../express-js/express.md)

- [API Practice](../../../api/http-request-practice.md)

### Challenge

- Try adding [error handling](https://expressjs.com/en/guide/error-handling.html) to one or more of your Express API's. These are useful for returning errors when API calls have missing/malformed data.

### Troubleshooting

#### When trying to make an API request, I get a CORS error

See mention of CORS above.

#### My API request gets a 404

- Check the log of your Express API server - you enabled [morgan](https://www.npmjs.com/package/morgan) logging, right? 😇
- If the request is making it there, maybe the path is wrong
- If the request is not making it there, make sure you're calling fetch with an Accept header. If you don't, it will be handled by your React app server, which does not know about your Express routes
- Your fetch calls should look something like: `fetch('/data', { headers: { "Accept": "application/json" } })` will make be sent to the configured proxy, e.g. `http://localhost:3000/data`

#### Supplemental Materials

- Example of [calling API from React component using fetch](https://reactjs.org/docs/faq-ajax.html)

_Pro Tip_ - the [morgan middleware](https://www.npmjs.com/package/morgan) is nice to log all requests to your server

#### Challenges

- Once you have your app working, it might be helpful to put all the `fetch` code for calling your API in a dedicated module, perhaps called `eventonica-api.js` and then calling it from your component
