# Week 7 Build a Minimal APP connecting backend and frontend  Project

### Frameworks

- Backend: ExpressJS
- Frontend: React (we suggest that you use create-react-app)

### Libraries/Tools

- NodeJS 
- Express
- Postman
- Create-React-APP
- Fetch

### Primary Goals

This assignment will check for proficiency in: NodeJS, ExpressJS, and how connect your backend with the frontend

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

- After learning Node, Express, and API concepts (Fetch),  you will use them to connect with a external API in the Backend. - We recommend that you use OpenWeather API ﻿https://openweathermap.org/api


  - Register for a student open weather map API account. Put Techtonica under institution and if they ask for documentation use your acceptance email. 
 
 <img width="856" alt="Open Weather Map Student" src="https://user-images.githubusercontent.com/102179075/221019420-14df523d-a7ed-4e6a-bdc6-e048bd7bb3fe.png">
  
  - You'll put N/A for student ID and a year from now for expiration is fine. 
  - A prompt should let you know that an email will come and the student registration should be applied in a few hours.
  
  <img width="470" alt="After submit Open Weather Map Student" src="https://user-images.githubusercontent.com/102179075/221019725-346c5d71-c1d4-43fc-b600-1b1fdf3cc46d.png">
  

- You will use React to show the results of the API fetch to your frontend 
# Project Instructions

## Part 0 - Starter Code
### For the Backend
- [ ] Create your main directory for this project. Initialize this project folder for git, and get a new remote GitHub repo ready so you can save and push as you make progress on your project. You will be submitting your GitHub repo link once you finish.
- [ ] Inside the main folder of your project create a server folder 
- [ ] Inside the server folder setup a basic express server

### For the Frontend
- [ ] Inside the main folder of your project create a folder called client
- [ ] Inside your client folder initialize a create-react-app server in React 

## Part 1 - Connecting the API in the backend
- [ ] Inside the server folder in your server.js file do a fetch request to the Weather API
![Code Example](https://raw.githubusercontent.com/Yosolita1978/screenshoots/836e1da625022b836f2aef42b3cace63563782a7/Week7/Screen%20Shot%202022-09-05%20at%206.15.14%20PM.png)

## Part 2 - Connecting the API in the frontend
- [ ] Inside the client folder in your script.js file do a fetch request to bring the data fron the backend
- [ ] Render the weather infomation inside a component

## Guide code
If you have problems following this project, you can see a guide code [here](https://github.com/priyaraj7/weather-forecast)
