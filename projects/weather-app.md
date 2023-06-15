# Week 7 Build a Minimal APP connecting backend and frontend Project

### Frameworks

- Backend: ExpressJS
- Frontend: React (using Vite)

### Libraries/Tools

- NodeJS
- Express
- Postman
- Vite
- Fetch

### Primary Goals

1. Connect to 3rd party API
2. Parse JSON and display data using React
3. Create dynamic API requests with user input
4. Learn how to use and modify code from a template

This assignment will check for proficiency in: NodeJS, ExpressJS, and how connect your backend with the frontend.

(We will cover Database, API testing, and CRUD in future assessments.)

### Overview

In this project, you will build a minimal Weather App connecting your backend and your frontend.

Win #1
The weather app should have all the basic functions including: city name, current weather icon, temperature, humidity, wind speed, etc.

Win #2
It should display the icon images for sunny/rainy/cloudy/snowy weather conditions.

Win #3
It should have a responsive design.

### Context

- After learning Node, Express, and API concepts (Fetch), you will use them to connect with a external API in the Backend. - We recommend that you use OpenWeather API ﻿https://openweathermap.org/api

  - Register for a student open weather map API account. Put Techtonica under institution and if they ask for documentation use your acceptance email.

 <img width="856" alt="Open Weather Map Student" src="https://user-images.githubusercontent.com/102179075/221019420-14df523d-a7ed-4e6a-bdc6-e048bd7bb3fe.png">
  
  - You'll put N/A for student ID and a year from now for expiration is fine. 
  - A prompt should let you know that an email will come and the student registration should be applied in a few hours.
  - Please note that for this project we using the APi 2.5 that allows you to fetch current weather data using the name of the city. If you want to read the documentation of the API please follow [this link](https://openweathermap.org/current#name)
  
  <img width="470" alt="After submit Open Weather Map Student" src="https://user-images.githubusercontent.com/102179075/221019725-346c5d71-c1d4-43fc-b600-1b1fdf3cc46d.png">

- You will use React to show the results of the API fetch to your frontend

# Project Instructions

## Part 0 - Starter Code

### For the Backend

- [ ] Create your main directory for this project. Initialize this project folder for git, and get a new remote GitHub repo ready so you can save and push as you make progress on your project. You will be submitting your GitHub repo link once you finish.
- [ ] Inside the main folder of your project create a server folder
- [ ] Inside the server folder setup a basic express server

### For the Frontend

## Part 0.1 - Working with existing code

- [ ] Here is an app that is fully running using hard-coded data. Start by cloning this and get it running on your computer, make sure to start a new branch for your project [Cristina's example Weather app with hard-coded data](https://github.com/Yosolita1978/HardCodeDataWeatherApi)

## Part 1 - Connecting the API in the backend

The example code is getting the weather data from a file - you will be changing the code to get data from the open weather map API

- [ ] Change the Express connection from using a hard coded data file, to connecting to the live API
- [ ] Inside the server folder in your server.js file do a fetch request to the Weather API (note start off with the city hardcoded into the URL)
      ![Code Example](https://raw.githubusercontent.com/Yosolita1978/screenshoots/836e1da625022b836f2aef42b3cace63563782a7/Week7/Screen%20Shot%202022-09-05%20at%206.15.14%20PM.png)

## Part 2 - Connecting the API in the frontend

When you press the submit button on the form you will get data from the API. Make sure you understand the JSON object and add a few more items to the page (such as wind speed)

- [ ] Choose at least 3 more pieces of information from the HTTP response to your React front end
- [ ] Render the weather information inside a component

## Part 3 - Creating a form to dynamically change the city

- [ ] In the WeatherForm component create a form that will get a city from a user
- [ ] Inside the client folder in your script.js file, add the city to the Fetch request (think: how do you get data from a child to a parent?)
- [ ] Change the Express route to accept the city parameter and add it dynamically to your URL

## Guide code

You can see a guide code from Cristina working with hard-code data [here](https://github.com/Yosolita1978/HardCodeDataWeatherApi)
You can see a guide code from Cristina working with real data with a API_KEY[here](https://github.com/Yosolita1978/RealDataWeatherAPI)
