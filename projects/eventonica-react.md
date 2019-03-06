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

1. Use `create-react-app` to create a new React App, with `npx create-react-app eventonica-react`
2. Now we'll set up your React app so it can talk to your existing Express app. 
`cd` into your new React app. Add a line to `package.json` that says `"proxy": "http://localhost:3000"`.
Note: if you access your Express app by going to a port other than 3000 (e.g. if you go to "http://localhost:5000"), update the line in package.json to match.
3. In package.json, update the line that says `"start": "react-scripts start",` to instead say `"start": "PORT=3001 react-scripts start",`. 
This will make sure your React app isn't trying to run on the same port as your Express app.

For reference, here's what package.json might look like after following these steps:


4. In your react app directory, run `npm install`.
5. Make sure your React app works by running `npm start`. If it works, you're ready to code! 

#### Step 3: Write the React code
Build out your UI!

