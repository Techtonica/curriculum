# Adding a React frontend to your Eventonica API

### Prerequisites
* Have a backend API for Eventonica written in Express
* This is a follow-up to the [Eventonica project](https://github.com/Techtonica/curriculum/blob/eventonica-react/projects/eventonica-project.md)

### Primary Goals
* Get experience writing your own React code 
* By the end of this project, you should have a full-stack app you wrote including the database, backend, and frontend, 
all working together.

### Overview/Instructions
In this project, you'll create a React frontend for your Eventonica API.

#### Step 1: Design
On paper, sketch out a frontend design for your Eventonica application. Make sure it includes the ability for users to:
- See all upcoming events
- See details of one event
- Create a new event
- Edit an event by ID
- Delete an event by ID

Your design can be simple -- don't worry about making a beautiful design at this point. Sketch the design on paper. 
Show it to another apprentice. Do both of your designs include the ability to do all 5 functions?

#### Step 2: Set up React
For this project, we'll use create-react-app to set up the React frontend. There are many possible ways to set up React, 
and we're going to describe one specific setup that will make it easy for you to deploy your project later.

1. Use `create-react-app` to create a new React App, with `npx create-react-app eventonica-react`.
If you haven't used create-react-app before, you can read more about what it sets up here: https://www.codecademy.com/articles/how-to-create-a-react-app
2. Now we'll set up your React app so it can talk to your existing Express app. 
`cd` into your new React app. Add a line to `package.json` that says `"proxy": "http://localhost:3000"`.
Note: if you access your Express app by going to a port other than 3000 (e.g. if you go to "http://localhost:5000"), update the line in package.json to match. What this line does is let your React app make API calls directly to your Express app by calling routes like "/events". You can read more about it here: https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
3. In package.json, update the line that says `"start": "react-scripts start",` to instead say `"start": "PORT=3001 react-scripts start",`. 
This will make sure your React app isn't trying to run on the same port as your Express app, because your React app will now run on port 3001. Each port can only be used by one app at a time.

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


4. In your React app directory, run `npm install`.
5. Make sure your React app works by running `npm start`. You should be able to go to `http://localhost:3001/` and see it running.
6. In another Terminal tab, run your Express app. Once they are both running, you're ready to code React! 

#### Step 3: Write the React code
Build out your UI! You should use React to make the UI look how you want it to. Take a look at `src/index.js` and `src/App.js` as starting points.

Then have your React code call the Eventonica API running on your Express app, to enable users to create/read/update/delete events through your React UI. If you've never used React to interact with an API before, you will need to learn how to have your React code call an API and display the results.

Here's a good starting point for how to interact with an API from React: https://reactjs.org/docs/faq-ajax.html

Here's a helpful page about the Fetch API, which is one good way to make API requests from the browser, including from React components: https://flaviocopes.com/fetch-api/


