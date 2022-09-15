import express from "express";
import cors from "cors";
import fetch from "node-fetch";

import mockdata from "./weather.mjs";

import { config } from "dotenv";
config();

// console.log(`Your api key is ${process.env.API_KEY}`);

const app = express();

// configuring cors middleware
app.use(cors());

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5000;

/* NOTE: 
If you using the mock data, comment out line 30-41
if you are using real weather api comment out line 25-27 */

// MOCK API
app.get("/api/weather", (req, res) => {
  res.json(mockdata);
});

// WEATHER API
// app.get("/api/weather", (req, res) => {
//   const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${process.env.API_KEY}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       res.send({ data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
