# Adding a React frontend to your Eventonica API

### Prerequisites
* Have a backend API for Eventonica written in Express/Postgres
* This is a follow-up to the [Eventonica project](https://github.com/Techtonica/curriculum/blob/eventonica-react/projects/eventonica-project.md)

### Primary Goals
* Get experience writing your own React code
* By the end of this project, you should have a full-stack app you wrote including the database, backend, and frontend, all working together.

### Overview/Instructions
In this project, you'll create a React frontend for your Eventonica API. You will have less than 2 days, so be aware of your pace.

#### Step 1: Design your UI

On paper, sketch out a frontend design for your Eventonica application. You will use the same backend from your existing Eventonica project; but feel free to make the design different than your jQuery/HTML version. The final result should be a polished UI, but keep it simple. Make sure it includes the ability for users to:

- Search for upcoming events through the *Eventful API* *
- Create a new user
- Save an event connected to a user
- Display the events a user is attending

> * Note: Instead of using Eventful's API for generating events, you may create seed data of your own design. However, if you create your own events, you should also include the ability to update and delete them as well. *

#### Step 2: Feedback

Show it to another apprentice. Do both of your designs include all of the user stories above?

#### Step 3: Set up React App

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


#### Step 4: Write the React code
* Build out your UI! You should use React to build the UI according to your design. Take a look at `src/index.js` and `src/App.js` as starting points.

* One of the advantages of React is reusability: think about what sorts of components you will need more than once - some examples could include styled buttons or an event info card.  These are the things that you should make into components. Then all you have to do is pass in the different text or functions as props, while the rest can simply be repeated.

* Keep an eye on the time - remember you are building an MVP (Minimum Viable Product), something clean and usable, with as few features as possible so you can pay more attention to a good user experience.

#### Supplemental Materials
Here's a good starting point for how to interact with an API from React: https://reactjs.org/docs/faq-ajax.html

Here's a helpful page about the Fetch API, which is one good way to make API requests from the browser, including from React components: https://flaviocopes.com/fetch-api/
