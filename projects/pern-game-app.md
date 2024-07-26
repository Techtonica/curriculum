# Full-Stack PERN Project: Game App

### Introduction

You already know how to build a little game in React. Let's do something similar, but know you can keep track of scores and view the leaderboard.
Little fun fact: you build your game in week 5! Do you remember week 5?

### Overview

You would have to create a full-stack project following the template from past projects.

In the front-end, your app could be any of these three games:

- Your past react-game project (Feel free to use the same game)
- Guess my number
- Tic Tac Toe

In the back-end, your scheme should provide routes/endpoints to:

- Create a new player
- Update a player's score
- Remove a player
- Fetch a list (leaderboard) of top players (ranked by score)

#### Back-end:

You need to use Postgres and Express to connect your DB. Your DB should have a table "players" with at least this columns:

- player ID
- player name
- player score

#### Front-end:

Make sure that you have inputs in your front-end to grab the player name
When the user finishes the game, save the score in your DB
If the user selected it, show a list with the top 10 scores (ranked by score)

#### Extra Features:

- When the user finishes the game, show them their last score and the new one
- A test file to test your form component
