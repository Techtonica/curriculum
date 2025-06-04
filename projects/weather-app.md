# Week 7: Build a Minimal Weather App Connecting Backend & Frontend Project

### Frameworks

- Backend: ExpressJS
- Frontend: React (using Vite)

### Libraries/Tools

- NodeJS
- Express
- Postman
- Vite
- Fetch

### Primary Learning Goals

This assignment will check for proficiency in: NodeJS, ExpressJS, and how connect your backend with the frontend, as well as the following:

- Connect to 3rd party API
- Showing data from an API call
- Create dynamic API requests with user input
- Parse JSON and display data using React
- Connecting data between Express and React
- Creating Express routes
- Creating React components and filling them with dynamic data
- Using callback functions to pass data from a child to parent component
- Learn how to use and modify code from a template

### Overview

In this project, you will build a minimal Weather App connecting your backend and your frontend. It should contain:

- 15+ commits
- 1+ PR
- README with a visual of the project (i.e. gif, images, deployed version) and setup instructions
- OpenWeatherMap API
- Connected frontend and backend
- Contain at minimum city name, current weather icon, temperature, humidity, and wind speed
- Display the icon images for weather conditions such as sunny, rainy, cloudy, and snowy
- Responsive design
- Showcase you can implement the primary learning goals

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

#### Part 0 - Starter Code

### For the Backend

- [ ] Create your main directory for this project. Initialize this project folder for git, and get a new remote GitHub repo ready so you can save and push as you make progress on your project. You will be submitting your GitHub repo link once you finish.
- [ ] Inside the main folder of your project create a server folder
- [ ] Inside the server folder setup a basic express server

### For the Frontend

#### Part 0.1 - Working with existing code

- [ ] Here is an app that is fully running using hard-coded data. Start by cloning this and get it running on your computer, make sure to start a new branch for your project [example Weather app with hard-coded data](https://github.com/Yosolita1978/HardCodeDataWeatherApi)

#### Part 1 - Connecting the API in the backend

The example code is getting the weather data from a file - you will be changing the code to get data from the open weather map API

- [ ] Obtain the API key from the OpenWeatherMap API and save it in a `.env` file. [Here](https://www.youtube.com/watch?v=17UVejOw3zA) is a short, 11-minute video explaining how to save your API key in a `.env` file.
- [ ] Change the Express connection from using a hard coded data file, to connecting to the live API
- [ ] Inside the server folder in your server.js file do a fetch request to the Weather API (note start off with the city hardcoded into the URL)
      ![Code Example](https://raw.githubusercontent.com/Yosolita1978/screenshoots/836e1da625022b836f2aef42b3cace63563782a7/Week7/Screen%20Shot%202022-09-05%20at%206.15.14%20PM.png)

#### Part 2 - Connecting the API in the frontend

When you press the submit button on the form you will get data from the API. Make sure you understand the JSON object and add a few more items to the page (such as wind speed)

- [ ] Choose at least 3 more pieces of information from the HTTP response to your React front end
- [ ] Render the weather information inside a component

#### Part 3 - Creating a form to dynamically change the city

- [ ] In the WeatherForm component create a form that will get a city from a user
- [ ] Inside the client folder in your script.js file, add the city to the Fetch request (think: how do you get data from a child to a parent?)
- [ ] Change the Express route to accept the city parameter and add it dynamically to your URL

## Guide Code

- You can see an example of working with hard-coded data [here](https://github.com/Yosolita1978/HardCodeDataWeatherApi).
- You can see an example of working with real data coming from the use of an API_KEY [here](https://github.com/Yosolita1978/RealDataWeatherAPI).

## Project Planning

**Use these project planning skills (below) to help you make your Weather App a more appealing addition to your portfolio of projects.**

Hot tip: you will also use some of these planning skills during your final projects, so get started in trying to implement the below **optional** points with this week’s app.

#### Presentation

- [ ] You can show that your DB / Third-Party API and endpoints work.
- [ ] You are able to demo event handling.
- [ ] You can show that your files have been deployed.

#### Code

- [ ] You have comments that explain each data call, event handler, and each function.
- [ ] You can show that you have event handling that manipulates data adequately across the frontend to the server and vice versa.
- [ ] Your state and updated state naming makes sense.
- [ ] Clean file structure with organization that makes sense according to best practice.

#### README

- [ ] Nice-to-have/secondary or stretch goals
- [ ] Technologies used
- [ ] Installation Instructions
- [ ] Project Objective
- [ ] Visuals
