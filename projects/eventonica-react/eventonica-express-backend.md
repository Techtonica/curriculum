# Eventonica - Express API

### Overview

Up until now in your Eventonica project, all the data is deleted every time you refresh the page (unless you've added localStorage) and you can't have multiple users of your app share data. That's because the data you're storing is stored in your web browser. In this part of the Eventonica project, we'll create an Express API to store the data and serve it to all users of your site.

#### Example API Endpoint

For example, in your code before, to get all the events, you might've had a function like `app.getAllEvents()`. Instead, we will create an API endpoint like `http://127.0.0.1:3000/events` that returns all the current events as a JSON response.

#### Why is this better?

- Before, each tab had it's own copy of events. Now they can be stored in one location so all users can see the same data and interact with it
- Centralizing the logic allows us to add a database so the data will live on even if the server is restarted or crashes
- Turning the logic of our system into a REST API makes it way more flexible

  - you could call it using a non-JavaScript client such as Postman or an app written in a different language (like an Android app in Java). All modern languages speak HTTP.

So let's get to it!

### Instructions

The following directions are an adaptation of [this freeCodeCamp tutorial](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/), but changed to suit our Eventonica project.

#### Create a new Express App

1. In your terminal, navigate to your `eventonica-react` project.  Start it with `npm start`.

1. You will need to create a second app for your Express backend.  In a second terminal window, navigate to your general Techtonica project folder.  Follow these commands to create a new project called `eventonica-api` and start it.  If it asks you if you want to download `express-generator`, choose `yes`.
    ```
    npx express-generator eventonica-api
    cd eventonica-api
    npm install
    npm start
    ```

1. Did you get a message that says?:
    ```
    ? Something is already running on port 3000. Probably:
      node ./bin/www (pid 13314)
      in /Users/al/projects/eventonica-api

    Would you like to run the app on another port instead? › (Y/n)
    ```
      Each app needs its own port if we want to run them on the same machine!  

1. To solve this problem, let's change the port for your frontend app. In `eventonica-react/package.json`, find the start script that says `    "start": "react-scripts start",`.  Change it to now say:
    `"start": "PORT=8888 react-scripts start",`
      Now start your eventonica-react project again.  Go to `http://localhost:8888/` and you should see your app running on its new port.  

1. To be thorough, you should also search your `eventonica-react` project and make sure you've replaced references to port 3000.  I had to change `http://localhost:3000` in the README.md to `http://localhost:8888` in a few spots.

1. In your second window, you should now be able to start `eventonica-api` on port 3000 without any problems.  Open a browser window and go to `http://localhost:3000/`.  If it's working, you should see a welcome message!

1. Open `eventonica-api/routes/index.js` and find line 6 that says:
    ```
    res.render('index', { title: 'Express' });
    ```
    Change the title so it says this instead:
    ```
    res.render('index', { title: 'Our express app is working properly' });
    ```

1. Stop your `eventonica-api` app and restart.  `http://localhost:3000` should now show your new message.

1. `.gitignore` your `node_modules`.  Push your project up to GitHub by creating a new repo there also called `eventonica-api`. Follow the directions on the page that include the first commit, etc.

#### Create a new Events route

1. Duplicate your `eventonica-api/routes/index.js` file and name it `eventonica-api/routes/events.js`. In this new file, change line 6 to say:
    ```
    res.render('index', { title: 'This is my events route.' });
    ```

1. In `eventonica-api/app.js`, add this to line 25:  `app.use("/events", eventsRouter);` You'll need to define `eventsRouter`, so add this to line 9: `var eventsRouter = require("./routes/events");`

1. Stop your `eventonica-api` app and restart.  `http://localhost:3000/events` should now show your new message: 'This is my events route.' You just made a new route!

> Note: Obviously, any other app calling `http://localhost:3000/events` would be doing it to get data, not to get a visual web page, but it's nice to have proof that things are working so far. Thanks [express-generator](http://expressjs.com/en/starter/generator.html)!

#### Returning data in the Users endpoint
1. Copy your list of mock users to the to of `users.js` into an array called `users`. 

2. Update the endpoint so it returns `res.json({users:[your mock users here]});`
**Check** Review the difference between `res.json` and `res.send`. Typically front-end apps to expect to receive responses as a JSON. 

Restart your server. Do you see the events list at `http://localhost:3000/users`?

**What shape should the response object be?**
The example response returns `{ users: [array of users] }` instead of just `res.json(users)`. This is because naming the user object `users` is a more clear way of presenting this information. Also, this endpoint could send other information in addition to the user array. For example, it is common to have pagination in GET endpoints. So the response could eventually be something like `res.json( { users:[user array], pagination: {pageSize: 10, page: 1 } });`
#### Testing in Postman
Testing in Postman (or a similar app) is a great way to test and understand your backend services. While you can test the URLs in Chrome, or test your endpoints by calling them in React, they offer less flexibility, and/or might have less context into the endpoint's behavior and errors. 

1. Testing the endpoint
Open Postman, and open a new tab called "Eventonica". "GET" should be automatically selected in the dropdown. Enter `http://localhost:3000/users` into the request URL and press send. You should see the same list of users in the response below. 

2. Testing sending information
Now the get users endpoint always returns all users. However, in the future we might want filtering. 

To test this, you can console log `console.log(req.body, 'the body')` before the `res.json` line. In Postman, now try adding a body. Click the "body" tab and select "raw". Then select "JSON" from the dropdown. Try sending a JSON of something that the API might send. For example, it could send `{"name": "nemo"}` for when you implement filtering. If you added the console log, do you see this information printed in your express server terminal? (Note that console logs will not show up in Postman).

#### Access your API from your React app

1. Back in your frontend, open `eventonica-react/src/Users.js`. Add this code to be the next line right after `const Users = () => {` so that it is inside your React code block:
    ```
    const [users, setUsers] = useState([]);

    console.log("users", users)

    const getUsers = () => {
      fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(res => setUsers(res.users))
    };

    useEffect(() => {
      getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    }, []);
    ```
**Check**
Why do we set `setUsers(res.users)` instead of `setUsers(res)`? Remember that `res` is an object with a key `users`, but it could also have other information. Try to keep states as specific as possible. ie if the `res` response did have other information such as pagination, we want to keep the `users` state as "specific" as possible, so that it only stores the users array part of the API response.

1. If you look at http://localhost:8888/ or your terminal, it will probably say that `useState` and `useEffect` are not defined.  You should import these React hooks from React like this on line 1:
    ```
    import React, {useEffect, useState} from 'react';
    ```

1.  On the line after `<ul id="users-list">`, add this line: `{JSON.stringify(users)}`.

1. If you visit http://localhost:8888/ and look in your User Management section.... you won't see it.  But if you look in your console, your console log should be working as expected and printing `apiResponse`.  You may be getting a `403 error: forbidden` or a `Access-Control-Allow-Origin` message. So what's the problem?

1. We need to allow cross-origin resource sharing.  By default, your Express app will block "localhost:8888" because it's not using the same domain as itself, "localhost:3000". But since you're working locally, we can disable this for now.

1. In your terminal navigate to the `eventonica-api` directory, stop your app, and install the CORS package:
`npm install --save cors`

1. In `eventonica-api/app.js`, require CORS on line 6:
  `var cors = require("cors");`
1. Now on line 22 have express use CORS:
  `app.use(cors());`

1. Restart `eventonica-api`.  If you refresh localhost:8888, you should see the response from your `/users` route!

#### Use your API data to render a users list in your React app
Now your challenge is to:
- Move your example users out of `eventonica-react/src/components/Users.jsx` and into `eventonica-api/routes/users.js` and make sure it is a single array of users.
- Have the users array be the response from http://localhost:3000/users, and make sure it renders in your frontend on localhost:8888
- Have your React Users component render users as HTML list items rather than plain text.

#### The real work

Add remaining REST API routes for `users` listed in the [project README](./README.md). Dont worry about `events` or `favorites` for now... you can add those after we get our database going.

`Users` now needs "add" and "delete" functionality.  For example, a frontend function called `addUser()` should make a POST request to http://localhost:3000/users/
and add a user by posting JSON with your API (which currently just saves to a variable since we have no DB), and the API would need a route like this:
```
router.post('/', function(req, res, next) {
  // save request data to a variable in routes/users.js

  res.send('some message about your data being saved, and a copy of that data');
});
```
**Tip** 
Did you declare your `users` variable with `var`, `const`, or `let`? You can review the differences [here](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
This could make a difference depending on how you implement your `addUser` functionality - how so?

-  Commit after every successful addition - that way if you get mixed up, you have a clean save point to return to.

- Use Postman or your preferred tool to test the API routes.

- Try refreshing the page and using it in multiple browser windows. Your data is persisted in memory in Express, and will only be cleared when the app is restarted. When can the data be saved across sessions? The solution is to add a Postgres database in the next outline.

### Express Tips & Resources

- You can use [body-parser middleware](https://expressjs.com/en/5x/api.html#req.body) to parse JSON request body data.

- If you run into a CORS error, you can use [cors middleware](https://expressjs.com/en/resources/middleware/cors.html) to sidestep the error for local development.

- [Handling Form Data in Express](https://www.hacksparrow.com/webdev/express/handling-processing-forms.html).

- [Express tutorial](../../express-js/express.md)

- [API Practice](../../api/http-request-practice.md)

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
