# Full-Stack Web App Using React and Express

### Projected Time

Total: 60 minutes

- Lesson: 5 min
- Guided Practice: 30 min
- Independent Practice: 10 min
- Check for Understanding: 10 min

### Prerequisites

- [Express.js](/express-js/express.md)
- [React](/react-js)

### Motivation

Creating React app using ExpressJs server is very useful if you are creating a full stack app using Express, React, Node with any database. So you can run your React and Node app on the same port, avoiding the need of running two separate commands to start Node.js and React.js app.

Walmart was among the first large companies that benefited from using React with Node.js. In 2015, the company migrated about 25 apps that powered their eCommerce website from Java to the React and Node technology bundle.[^1]

### Objectives

**Participants will be able to:**

- create Express.js for back-end
- create React app for front-end

### Specific Things To Learn

- to integrate React with Express by proxying requests
- to make the HTTP requests from React To Express

### Materials

- [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/) - Create React App doc

### Lesson

React is a javascript library for building web apps, and it doesn’t load itself in the browser. We need some kind of mechanism that loads the index.html (single page) of React application with all the dependencies(CSS and js files) in the browser. In this case, we are using node as the webserver which loads React assets and accepts any API calls from the React UI app.

![](react-express.png)

If you look at the above diagram all the web requests without the /api will go to React routing and the React Router kicks in and loads components based on the path. All the paths that contain /api will be handled by the Node server itself.[^2]

## Guided Practice

### Step 1: Creating a Backend using Node.js (Express Framework)

First, create a directory called `react-express-app` and move inside that directory

```bash
mkdir react-express-app && cd react-express-app
```

Next, create a folder called `server` and a file inside of it called `index.js`.

```bash
mkdir server && cd server
touch index.js
```

To create our Node project, run the following command in your terminal. This creates the `package.json` file which will allow us to keep track of all our app scripts and manage any dependencies our Node app needs.

```bash
npm init -y
```

> [!NOTE]
> Leaving off the `-y` will allow you to manually enter that information

To use ES6 import in Node.js, add `"type": "module"` in your `package.json` file. For more information checkout [Node.js docs](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling),

```json
{
  "type": "module"
}
```

Let’s install Express and nodemon as a dependency to use it

```bash
npm install express
npm install nodemon
```

Let's go ahead and fill it with this in index.js file,

```js
// server/index.js

import express from 'express';

const app = express();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5000;

//creates an endpoint for the route /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from ExpressJS' });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
```

Next, go into the package.json `scripts` and add this start script. This help you to run server with a simple command.

```json
// package.json
 "type": "module",
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

Go to `http://localhost:5000/api` in your browser, you will see `{"message":"Hello from ExpressJS"}` message. Now let's move to the frontend.

### Step 2: Create An App Frontend With React using Vite

1. Go back to the main folder of your project

```bash
cd ../react-express-app
```

2. Make sure that the project that you're creating is called client

```bash
npm create vite@latest client
```

3. Follow the prompt instructions selecting the option REACT as a working framework and JavaScript as language

```bash
Need to install the following packages:
  create-vite@4.4.1
Ok to proceed? (y) y
✔ Select a framework: › React
✔ Select a variant: › JavaScript
```

4. Follow the instruction from the terminal to go to your directory and install the node package for the initial setup

```bash
Done. Now run:

  cd client
  npm install
  npm run dev
```

Now go to`http://localhost:5173/` in your browser, you will see the react logo.

### Step 3: Connecting frontend and backend

In the development phase, the React app is running on port 5173 with the help of vite and nodejs API running on port 5000.

There should be some interaction between these two. You can proxy all the API calls to nodejs API. Vite provides some inbuilt functionality and to tell the development server to proxy any unknown requests to your API server in development, add a **proxy** field to your package.json of the React.

The vite.config.js file in the provided code serves as the configuration file for Vite and here is the setting for the proxy:

```js
// client/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    // add this code
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
```

### Step 4: Make HTTP Requests from React to Node

Now let's fetch data from the /api endpoint. To do so, you can navigate to the `App.js` component in the src folder and make an HTTP request.

Now make a simple GET request using the Fetch API to your backend and then the data returned as JSON.

Once you have the data returned, you will get the message property (`{ message: "Hello from ExpressJS" }`) and then put it in a state variable called data.

This will allow you to display that message in frontend.

```jsx
// client/src/App.jsx
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

Test it by clicking the button in your react app. You will get the message **Hello from ExpressJS** from the server.

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

- Once you get the data/users from the API, set the state accordingly and renders the appropriate components again to pass the data down the component tree.

```jsx
// client/src/App.jsx
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
// Do it in different component

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

If you would like to explore more try to run the server and client with one npm command concurrently

Hint: [Concurrently](https://www.npmjs.com/package/concurrently)

### Check for Understanding

- Why Using React and Node.js For Developing Full Stack Web App?
- Benefits of Using React with Node.js for Web App Development

> **_NOTE:_** You can find complete source code [HERE](./starter-code/React-express-starter-code)

### Supplemental Materials

- [How To Connect Node.JS BackEnd To A React.JS FrontEnd 2020 | NodeJs + React Tutorial For Beginners](https://www.youtube.com/watch?v=PPjpHaLkV7A) - 12min video -[React Proxy | Easiest Fix to CORS Errors](https://www.youtube.com/watch?v=N4yUiQiTvwU)- 15min video
- [Create a Full-Stack Web App Using React and Node.js](https://javascript.plainenglish.io/create-a-full-stack-web-app-using-react-and-node-js-b5149efd3629) - React and Node.js: Build a Full Stack Web App From Development to Deployment in 5 steps
