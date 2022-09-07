// server/index.js

import express from "express";
import fetch from "node-fetch";

import { config } from "dotenv";
config();

console.log(`Your api key is ${process.env.API_KEY}`);

const app = express();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5000;

app.get("/weather", (req, res) => {
  const city = req.query.cityName;
  const apiKey = process.env.API_KEY;
  const params = new URLSearchParams({
    q: req.query.cityName,
    appid: process.env.API_KEY,
    units: "imperial",
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
