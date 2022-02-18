# Create a React Website with an Express.js backend

### Projected Time

Example: 60 minutes

- Lesson: 5 min
- Guided Practice: 30 min
- Independent Practice: 10 min
- Check for Understanding: 10 min

### Prerequisites

- [Express.js](/express-js/express.md)
- [React](/react-js)

### Motivation

Creating React app using Express.js server is very useful if you are creating a full stack app using Express.js, React.js, Node.js and any database in Nodejs. So you can run your React.js and Node.js app on the same port, avoiding the need of running two separate commands to start Node.js and React.js app.

Walmart was among the first large companies that benefited from using React.js with Node.js. In 2015, the company migrated about 25 apps that powered their eCommerce website from Java to the React and Node technology bundle.[^1]

### Objectives

**Participants will be able to:**

- create Express.js for back-end
- create React app for front-end

### Specific Things To Learn

- how to integrate React with Express by proxying requests

- how to make the HTTP requests from React To Express.js

### Materials

- [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/) - Create React App doc

### Lesson

React is a javascript library for building web apps and it doesn’t load itself in the browser. We need some kind of mechanism that loads the index.html (single page) of React application with all the dependencies(CSS and js files) in the browser. In this case, we are using node as the webserver which loads React assets and accepts any API calls from the React UI app.

![](react-express.png)

If you look at the above diagram all the web requests without the /api will go to React routing and the React Router kicks in and loads components based on the path. All the paths that contain /api will be handled by the Node server itself.
In this post, we are going to develop the React app with NodeJS and see how to build for production.[^2]

### Common Mistakes & Misconceptions

List things that learners might not realize, might assume at first, or should avoid.

- Example
- Example

### Guided Practice

##### Step 1: Create your Node (Express) backend

First, create a directory called `react-express-app` and move inside that directory

```bash
mkdir react-express-app && cd react-express-app
```

To create our Node project, run the following command in your terminal. This creates the `package.json` file which will allow us to keep track of all our app scripts and manage any dependencies our Node app needs.

```bash
npm init -y
```

^leaving off the -y will allow you to manually enter that information^

Next, create a folder called `server` and a file inside of it called `index.js`.

```bash
mkdir server && cd server
touch index.js
```

Let’s install Express and nodemon as a dependency to use it

```bash
npm install express
npm install nodemon
```

Now inside of the index.js file, let's go ahead and fill it with this:

```js
// server/index.js

const express = require('express');

const app = express();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5000;

//creates an endpoint for the route /api
app.get('/api', (req, res) => {
  res.send('Hello from ExpressJS');
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

Next, go into the package.json `scripts` and add this start script. This help you to run server with a simple command.

```json
// package.json

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/index.js",
    "dev": "nodemon server/index.js"
  },
```

Let's run `npm run dev` on your terminal. You should see console output like this:

```bash
  server npm run dev

> react-express-app@1.0.0 dev
> nodemon server/index.js

[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server/index.js`
Server listening on 5000
```

Go to `http://localhost:5000/api` in your browser, you will see `{"message":"Hello from ExpressJS"}` message. Now lets move to the frontend.

##### Step 2: Create your React frontend

First, open another terminal tab and use create-react-app to create a new React project with the name `client`

```bash
npx create-react-app client
```

let's move inside the directory and start the server

```bash
cd client
npm start
```

Now go to`http://localhost:3000/` in your browser, you will see the react logo.

##### Step 3: Connecting frontend and

In the development phase, the React app is running on port 3000 with the help of a create-react-app and nodejs API running on port 5000.

There should be some interaction between these two. We can proxy all the API calls to nodejs API. Create-react-app provides some inbuilt functionality and to tell the development server to proxy any unknown requests to your API server in development, add a **proxy** field to your package.json of the React.

```json
// client/package.json

{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:5000", // add this code
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  ......
}
```

##### Step 4: Make HTTP Requests from React to Node

Now let's fetch data from the /api endpoint. To do so, you can head to the `App.js` component in our src folder and make an HTTP request.

Now make a simple GET request using the Fetch API to your backend and then the data returned as JSON.

Once you have the data returned, you will get the message property ({ message: "Hello from ExpressJS" })) and then put it in a state variable called data.

This will allow you to display that message in frontend.

```jsx
// client/src/App.js
import { useState } from 'react';

function App() {
  const [data, setData] = useState('');

  const connectToBackend = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };

  return (
    <div className="App">
      <h1>React Website with an Express backend</h1>

      <button onClick={connectToBackend}>Send Request to Backend</button>
      {/* Render the newly fetched data inside data */}
      <p>{data}</p>
    </div>
  );
}

export default App;
```

Let's test it by clicking the button in your react app. You will get the message **Hello from ExpressJS** from the server.

### Independent Practice

- Open your `index.js` file in server folder.
- Create an endpoint `/api/users'` with some JSON data to get all users from the API.

  ```js
  // server/index.js
  ...

  const users = [
    { name: 'Ram', email: 'Ram@gmail.com' },
    { name: 'Bob', email: 'bob@gmail.com' }
  ];

  app.get('/api/users', (req, res) => {
    console.log('api/users called!');
    res.json(users);
  });

  ...
  ```

- In React app fetch API to make the API calls and gets the user from the API

- To do so, you can head to the App.js component in our src folder and make an HTTP request using useEffect.
- Once you get the data/users from the API, set the state accordingly and renders the appropriate components again to pass the data down the component tree.

```jsx
// client/src/App.js
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");

  const [users, fetchUsers] = useState([]);

  const getData = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchUsers(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

 .....

  return (

 ......
  );
}

export default App;
```

```jsx
// Do it in different component or App.js. It's upto you

 <h2>React Fetch API From Backend</h2>
      <ul>
        {users.map((item, i) => {
          return (
            <li key={i}>
              Name: {item.name} Email: {item.email}
            </li>
          );
        })}
      </ul>
```

### Challenge

If you want to explore more try to run the server and client with one npm command concurrently

### Check for Understanding

- Why Using React and Node.js For Developing Full Stack Web App?
- Benefits of Using React with Node.js for Web App Development

> **_NOTE:_** You can find complete source code [HERE](https://github.com/priyaraj7/React-express-starter-code.git)

### Supplemental Materials

- [How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/) - This article contain the instruction for Deploying your app to the web with Heroku
- [How To Connect Node.JS BackEnd To A React.JS FrontEnd 2020 | NodeJs + React Tutorial For Beginners](https://www.youtube.com/watch?v=19CcxzZHwuI) - 12min video
- [Create a Full-Stack Web App Using React and Node.js](https://javascript.plainenglish.io/create-a-full-stack-web-app-using-react-and-node-js-b5149efd3629) - React and Node.js: Build a Full Stack Web App From Development to Deployment in 5 steps

  [^1]: https://proxify.io/articles/node-and-react
  [^2]: https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-react-app-with-nodejs-bc06fa1c18f3
