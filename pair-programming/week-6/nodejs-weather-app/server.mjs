import express from "express";
import fetch from "node-fetch";
import ejs from "ejs";
import "dotenv/config";

const port = 5000;

const app = express();
app.get("/", async (req, resp) => {
  let weather;
  let error;
  // console.log(req.query);
  if (req.query.cityName) {
    const params = new URLSearchParams({
      q: req.query.cityName,
      appid: process.env.API_KEY,
      units: "imperial"
    });

    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
    // console.log(url);
    try {
      const apiRequest = await fetch(url);
      weather = await apiRequest.json();
    } catch (err) {
      console.log(err);
      error = err;
    }
  }

  resp.send(
    await ejs.renderFile("./index.ejs", {
      weather,
      error,
      cityName: req.query.cityName
    })
  );
});

app.listen(port, () => console.log(`Server is running on port-${port}`));