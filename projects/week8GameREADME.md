# Week 8 Build a Game fetching data for an API

### Frameworks

- Backend: ExpressJS
- Frontend: React (we suggest that you use Vite)

### Libraries/Tools

- NodeJS
- Express
- Postman
- Vite
- Fetch

### Primary Goals

1. Understand using callback functions to pass data from a child to a parent or using useRef to control input forms
2. Become more comfortable with forms in React
3. Using GET Request, ask for data from your db!
4. Parse and display JSON data
5. Create instances for components in React and use props and state to manage data

This assignment will check for proficiency in NodeJS and ExpressJS and how to connect your Backend with the frontend.

### Overview

In this project, you will build a minimal Game connecting your Backend and your frontend.

[The game's existing code](https://github.com/Yosolita1978/week8Game) already grabs the user information and shows the user the questions that exist in the `fakedata.js` file.

##### Step # 1

Grab the real information with the API and show it correctly in the FrontEnd.

##### Step #2

It should grab how many questions the user has an answer to and how many right/wrong questions.

##### Step #3

It should show the user a message in case they win/lose the game.

### Context

- After learning Node, Express, and API concepts (Fetch), you will use them to connect with an external API in the Backend. - We recommend using the [TRIVIA APP](https://opentdb.com/api_config.php) for this project.

- You will use React to show the game to the user, and you will have to grab all the info for the game (how many questions, correctly answer or incorrectly answer) and send it to the Backend to show if the user won or not

# Project Instructions

## Part 0 - Starter Code

- [ ] Start by starting a full-stack project from scratch - in your root directory for your project, create a server directory and start an express server in it.  Using Vite, create a client directory [This lesson covers the front-end part if you want to review it](https://github.com/Techtonica/curriculum/blob/main/react-js/react-local-vite.md)

### For the Backend

- Make the GET request for real data to the API in the Backend

### For the Frontend

- Make the game functional

## Guide code

You can see a tutorial on how to create a game in React [here](https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/). Please note that this tutorial uses `create-react-app` as the initial framework for the Frontend, and you don't want to use it. 
