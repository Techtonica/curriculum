# Week 8: Build a Trivia Game with API Integration

This project involves building a trivia game with data fetched from an external API, using Express.js on the backend and React on the frontend. The game should be fully functional, allowing users to answer trivia questions with customizable settings for a personalized game experience.

## Frameworks and Tools

- **Backend**: ExpressJS
- **Frontend**: React (recommended setup with Vite)
- **Libraries/Tools**:
  - NodeJS
  - Express
  - Postman
  - Vite
  - Fetch API

## Primary Learning Goals

This assignment will test proficiency with Node.js, Express.js, and API integration, alongside practical experience in React. Specifically, it covers:

1. Using callback functions or `useRef` to control input forms.
2. Building and managing forms in React.
3. Executing GET requests and parsing/displaying JSON data.
4. Creating React components with props and state for data handling.
5. Integrating frontend and backend to fetch and display external API data.

## Game Overview

This game fetches trivia questions from an external API, displays them on the frontend, and allows users to answer them. At the end of the game, the backend determines if the user has won or lost based on their answers.

The game's existing code already includes functionality to fetch user information and display questions from the `fakedata.js` file. Your task will be to replace this with real API data and implement additional features. See [example game code](https://github.com/Yosolita1978/week8Game).

## Customization Features

To provide a personalized experience, add options allowing users to customize the game setup. Include the following settings:

- **Number of Questions**: Allow users to specify how many questions they want in the game.
- **Question Type**: Users can select the type of questions (e.g., multiple-choice, true/false).
- **Question Difficulty**: Provide options for question difficulty levels (easy, medium, hard).
- **Question Category**: Allow users to choose a category for the questions, customizing the quiz's topic.

These settings should be available as form options on the frontend, which will then be sent to the backend to customize the API request.

## Project Instructions

### Setting Up

- [ ] Create a full-stack project structure:
   - In the root directory, create a `server` folder for the Express server.
   - Using Vite, create a `client` folder for the React frontend. Follow [this guide](https://github.com/Techtonica/curriculum/blob/main/react-js/react-local-vite.md) for setup.

### Backend Instructions

- [ ] **API Request Setup**:
   - Set up a GET route in Express to fetch trivia questions from the external API (e.g., [Open Trivia Database](https://opentdb.com/api_config.php)).
   - Configure the API request based on the user’s customization settings (number of questions, type, difficulty, category).
   - Ensure that API responses are properly formatted and accessible to the frontend.

### Frontend Instructions

- [ ] **Game Setup Screen**:

   - Create a setup screen where users can select their preferences (number of questions, type, difficulty, category).
   - Use form controls to capture and manage the user’s input.

- [ ] **Game Interface**:

   - Display questions based on the user’s settings, fetched from the backend.
   - Track the user’s answers and keep a count of correct and incorrect answers.

3. **Result Display**:
   - Show a final message indicating whether the user won or lost based on their score.

### Step-by-Step Development Plan

1. **Frontend Initialization**:

   - Install dependencies and set up React with Vite.

   - Create initial components: GameSetup, GamePlay, and GameResult.

2. **Backend Initialization**:

   - Install dependencies and set up Express in the `server` directory.

   - Set up environment configuration for API keys (if needed).
   - Create an endpoint to handle API requests based on customization parameters.

3. **Frontend-Backend Integration**:

   - Use the Fetch API or Axios to send user preferences from the frontend to the backend.
   - Display API-fetched questions on the frontend and handle user interactions.

4. **Win/Loss Logic**:

   - Track the user's responses and send the score to the backend.
   - The backend determines if the user has won or lost, returning the result to the frontend.

5. **Testing and Debugging**:
   - Test each feature thoroughly to ensure data is correctly passed between the frontend and backend.
   - Debug any issues with API requests, data handling, or result calculation.

## Resources

- [Trivia API Documentation](https://opentdb.com/api_config.php)
- [React and Forms Guide](https://reactjs.org/docs/forms.html)

- [Express.js Documentation](https://expressjs.com/)
- [Vite Documentation](https://vitejs.dev/)

## Additional Resources

For an introduction to building a quiz game in React, check out this [freeCodeCamp tutorial](https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/). Note: The tutorial uses `create-react-app`, while this project uses Vite for the frontend.
