// filepath: week-6/nodejs-weather-app/server.mjs
import express from "express";
import fetch from "node-fetch";
import "dotenv/config";

const app = express();
const port = 5000;

// Set up your view engine and middleware here.

// Add a GET route for the root path ("/") to render the initial page.

// Add a POST route for the root path ("/") to handle the form submission.
// This is where you will fetch the weather data and render the page with the results.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});