# Yes, another Weather App

### Overview

You already have a frontend weather app. Let's reuse that connection with the OpenWeather API and create a simple app. You need to create a full-stack project following the template from past projects or enhancing your existing weather application.

😉 Little fun fact: you built this in week 7! Do you remember week 7?

#### Frontend

Make sure that when the user searches for a city, that value goes to two places:

- Your API call
- If the user selected it, to your db as the favorite city for the user

## Backend

You need to use PostgreSQL and Express to connect your DB. Your DB should have a table "users" with at least this columns:

- Users ID
- User name
- Favorite City

### Required Features:

- Include a top-level README
- Don't commit your node_modules file
- Must be clean and only include files related to this project
- Include a .gitignore
- A DB that stores the user’s favorite city
- A button to save the user’s favorite city
- An update button to update the user’s favorite city
- Display ONE day forecast for the user using the info collected from the [OpenWeather API](https://openweathermap.org/api).
- Error handling
  - show a user-visible error message to indicate what's wrong and how the user can fix it
  - HTML input attributes to validate input and make entering data fast and easy
- A test file to test your component(s)

### Extra Features - "Nice to Haves":

- Ask the user for an email and register it to your DB
- An input to search for a city with error handling if the city isn’t recognized
- You could do a full 5-day or a week view (using the one call API )
- You could have multiple cities at the same time!
