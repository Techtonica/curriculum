# Yes, another Weather App

### Introduction

You already have a frontend weather app. Let's reuse that connection with the OpenWeather API and create a simple app.
Little fun fact: you build this in week 7! Do you remember week 7?

### Overview

You would have to create a full-stack project following the template from past projects.
In the front-end, your app will display ONE day forecast for the user using the info collected from the OpenWeather API ﻿https://openweathermap.org/api

## Backend:

You need to use Postgres and Express to connect your DB. Your DB should have a table "users" with at least this columns:

- Users ID
- User name
- Favorite City

## Frontend.

Make sure that when the user searches for a city, that value goes to two places:

- Your API call
- If the user selected it, to your db as the favorite city for the user

### Features:

- Any button that allows the user to save a city as their favorite
- A db that store the favorite city of the user
- A view of one day of the location that the user is searching.

### Extra Features:

- An Update button to update the favorite city from the user
- Ask the user for an email and register this camp in your DB too
- Error handling
  - Your form should use HTML input attributes to validate input and make entering data fast and easy
  - Show a user-visible error message to indicate what's wrong and how the user can fix it
- A test file to test your form component
