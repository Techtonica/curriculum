# Create a React Website with an Express backend

### Projected Time

Example: 30-45 minutes

- Lesson: ? min
- Guided Practice: ?-? min
- Independent Practice: ? min
- Check for Understanding: ?-? min

### Prerequisites

Here are topics that should be understood before this topic:

- [Express.JS](/express-js/express.md)
- [React](/react-js)

### Motivation

React is a javascript library for building web apps and it doesn’t load itself in the browser. We need some kind of mechanism that loads the index.html (single page) of React application with all the dependencies(CSS and js files) in the browser. In this case, we are using node as the webserver which loads React assets and accepts any API calls from the React UI app.

![](react-express.png)

If you look at the above diagram all the web requests without the /api will go to React routing and the React Router kicks in and loads components based on the path. All the paths that contain /api will be handled by the Node server itself.
In this post, we are going to develop the React app with NodeJS and see how to build for production.[^1]

### Objectives

**Participants will be able to:**

- leave this lesson knowing this
- and how to do this on their own
- Even more things
- Even more things

### Specific Things To Learn

- Focus on this specific talking point
- and this - This is a sub-thing about the thing
- Even more things about the things
- Even more things about the things

### Materials

- [Example video (10 min)](https://google.com) - Write a very short description of this resource.
- [Other example article(20 min read)](https://google.com) - Answer the 3 questions at the end.
  (Be sure to explain how to use these materials in directions in one of the sections below (ie: lesson, guided practice). If you are not assigning them somehow, they should be placed under Supplemental Materials at the bottom.)

### Lesson

Here's text about introducing something and how it works.

- [Be sure to link the slideshow, video,](https://google.com)
- [or other materials you expect them to follow as part of the lesson.](https://google.com)

Build on the first information. Have participants make guesses, do an activity, etc.

Make sure to mention these things:

- Things - This is a sub-thing
- More things
- Even more things
- Even more things

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

Let't test it by clicking that button in react app. You will get the message **Hello from ExpressJS** from the server

### Independent Practice

### Challenge

### Check for Understanding

### Supplemental Materials

- [How to Create a React App with a Node Backend: The Complete Guide](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/) - This article contain the instruction for Deploying your app to the web with Heroku

[^1]: https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-react-app-with-nodejs-bc06fa1c18f3
