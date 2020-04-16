# Adding a React frontend to your Eventonica API

### Prerequisites

- The API server with database from [Eventonica 6](./eventonica-part6-postgres.md)

### Primary Goals

- Get experience writing your own React code
- By the end of this project, you should have a full-stack app you wrote including the database, backend, and frontend, all working together.

### Overview/Instructions

In this project, you'll create a React frontend for your Eventonica API. You will have less than 2 days, so be aware of your pace.

#### Step 1: Requirements

You will be using the same Express API from your existing Eventonica project. You can use the same styling or make it better, but it does not have to support all the features of Part 6. Here are the features that must be included:

- Events
  - list
  - add (from a form, not Ticketmaster)
  - delete
- Users
  - list
  - add
  - delete

If you want to implement the rest of them, consider it an optional bonus.

#### Step 2: Set up React App

##### Note: when following these steps you will now have **TWO SERVERS** running:

1. The first one is your existing Express server that talks to the database and serves your API routes
1. The second will be a server that just serves React assets and enables hot reloading of changes - and it will proxy calls to your API server to avoid CORS isuses.

For this project, we'll use create-react-app to set up the React frontend. There are many possible ways to set up React,
and we're going to describe one specific setup that will make it easy for you to deploy your project later.

- Use `create-react-app` to create a new React App, with `npx create-react-app eventonica-react`.
  If you haven't used create-react-app before, you can read more about what it sets up here: https://www.codecademy.com/articles/how-to-create-a-react-app
- Now we'll set up your React app so it can talk to your existing Express app. Add a top-level config value to `package.json` that says `"proxy": "http://localhost:3000"`
  - Proxy will requests that set an "Accept" header of "application/json" to the server that is running at port 3000, which in our case is our Express API server
  - Other requests from the browser for assets like CSS will continue to be served by your port 3001 React app
- In package.json, update the line that says `"start": "react-scripts start",` to instead say `"start": "PORT=3001 react-scripts start",`.
  - This will make sure your React app isn't trying to run on the same port as your Express app, because your React app will now run on port 3001. Each port can only be used by one app at a time.

Here's an example of what `package.json` might look like now:

```
{
  "name": "eventonica-react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-scripts": "2.1.5"
  },
  "scripts": {
    "start": "PORT=3001 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "proxy": "http://localhost:3000"
}
```

**Note: the "proxy" key is _OUTSIDE_ "browerslist" as a top-level config. If you put it inside "browserslist" it will neither work nor complain that your config is wrong**

- In your React app directory, run `npm install`.
- Make sure your React app works by running `npm start`. You should be able to go to `http://localhost:3001/` and see it running.
- In another Terminal tab, run your Express app. Once they are both running, you're ready to code React!

#### Step 3: Write the React code

- Build out your UI! You should use React to build the UI according to your design. Take a look at `src/index.js` and `src/App.js` as starting points.
- One of the advantages of React is reusability: think about what sorts of components you will need more than once - some examples could include styled buttons or an event info card. These are the things that you should make into components. Then all you have to do is pass in the different text or functions as props, while the rest can simply be repeated.

### Troubleshooting

#### When trying to make an API request, I get a CORS error

You are making a request to your Express server directly. Because it's on a different port, browsers block this for security reasons. If you set up the proxy as above you should just make fetch requests to `/path` (no server/port listed) and it will proxy it correctly so you won't have issues.

#### My API request gets a 404

- Check the log of your Express API server - you enabled [morgan](https://www.npmjs.com/package/morgan) logging, right? 😇
- If the request is making it there, maybe the path is wrong
- If the request is not making it there, make sure you're calling fetch with an Accept header. If you don't, it will be handled by your React app server, which does not know about your Express routes
- Your fetch calls should look something like: `fetch('/data', { headers: { "Accept": "application/json" } })` will make be sent to the configured proxy, e.g. `http://localhost:3000/data`

#### Supplemental Materials

- Example of [calling API from React component using fetch](https://reactjs.org/docs/faq-ajax.html)

#### Challenges

- Once you have your app working, it might be helpful to put all the code for calling your API in a dedicated module, perhaps called `eventonica-api.js` and then calling it from your component
- Add some Enzyme tests
