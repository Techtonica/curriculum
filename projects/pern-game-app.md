# Full-Stack PERN Project: Game App

### Overview

You already know how to build a little game in React. Let's do something similar, but know you can keep track of scores and view the leaderboard. You need to create a full-stack project following the template from past projects.

😉 Little fun fact: you built your game in week 5! Do you remember week 5?

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

Your DB should have a table "players" with at least this columns:

- player ID
- player name
- player score

### Functionality Required:

- Include a top-level README
- Don't commit your node_modules file
- Must be clean and only include files related to this project
- Include a .gitignore
- Make sure that you have inputs in your frontend to grab the player name
- When the user finishes the game, save the score in your DB
- Have a button to show a list with the top 10 scores (_**ranked by score**_)
- A test file to test your component(s)

### Extra Features - "Nice to Haves":

- Remove a player from the game
- When the user finishes the game, show them their last score and the new one
- Control actions with both mouse/trackpad and keyboard (think accessibility!)
