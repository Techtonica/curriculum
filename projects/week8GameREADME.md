# Week 8 Build a Game fetching data for an API

### Frameworks

- Backend: ExpressJS
- Frontend: React (we suggest that you use create-react-app)

### Libraries/Tools

- NodeJS
- Express
- Postman
- Vite
- Fetch

### Primary Goals

1. Understand using callback functions to pass data from a child to a parent
2. Become more comfortable with forms in React
3. Using GET Request, ask for data from a 3rd party API
4. Parse and display JSON data
5. Create instances for components in React and use props and state to manage data
6. Practice using a template rather than starting a project from scratch

This assignment will check for proficiency in: NodeJS, ExpressJS, and how to connect your Backend with the frontend.

(We will cover Database, API testing, and CRUD in future assessments.)

### Overview

In this project, you will build a minimal Game connecting your Backend and your frontend.

##### Pre-Win

The game's existing code already grabs the user information and shows the user the questions that exist in the `fakedata.js` file

##### Win # 1

Grab the real information with the API and show it correctly in the FrontEnd.

##### Win #2

It should grab how many questions the user has an answer to and how many right/wrong questions.

##### Win #3

It should show the user a message in case they win/lost the game

### Context

- After learning Node, Express, and API concepts (Fetch), you will use them to connect with an external API in the Backend. - We recommend using the [TRIVIA APP](https://opentdb.com/api_config.php) for this project.

- You will use React to show the game to the user, and you will have to grab all the info for the game (how many questions, correctly answer or incorrectly answer) and send it to the Backend to show if the user won or not

# Project Instructions

## Part 0 - Starter Code

- [ ] Start by starting a new branch in your techtonica-assignments repo and forking the Techtonica template made with Vite. [Techtonica template here](https://github.com/Techtonica/curriculum/tree/main/projects/2023TemplateWithVite)

### For the Backend

- Make the GET request for real data to the API in the Backend

### For the Frontend

- Make the game functional

## Guide code

You can see a tutorial on how to create a game in react [here](https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/)
