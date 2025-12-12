# Full-Stack PERN Project: Game App

You already know how to build a little game in React. Let's do something similar, but now you can keep track of scores and view the leaderboard. You need to create a full-stack project following the template from past projects.

😉 Little fun fact: You built your game in week 5! Do you remember week 5?!!

### Frontend

Your app could be any of these games:

- Your past react-game project (Feel free to use the same game)
- Guess my number
- Tic Tac Toe
- Word Guessing game (store words in the DB?!?!??)
- Something else similar to your past react-game project

### Backend

Use PostgreSQL and Express to connect your DB. Provide routes / endpoints for the following:

- Create a new player
- Update a player's score
- Remove a player
- Fetch a list (leaderboard) of top players (ranked by score)

Your DB should have a table "players" with at least the following columns:

- Player ID
- Player name
- Player score

### Functionality Required:

- Include a top-level `README.md`
- Don't commit your `node_modules` file
- Must be clean and only include files related to this project
- Include a `.gitignore`
- Make sure that you have inputs in your frontend to grab the player name
- When the user finishes the game, save the score in your DB
- Have a button to show a list with the top 10 scores (_**ranked by score**_)
- A test file to test your component(s)
  - See the [jest](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/jest.md), [vitest](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/vitest.md), and [RTL](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/react-testing-jest-and-RTL.md) topic outlines for more context.

### Extra Features - "Nice to Haves":

- Remove a player from the game
- When the user finishes the game, show them their last score and the new one
- Control actions with both mouse/trackpad and keyboard (think accessibility!)

---

Full Time Program Week 11: Third Game App Part 1 of 1
