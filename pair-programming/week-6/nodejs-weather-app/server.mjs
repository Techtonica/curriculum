import express from "express";
import fetch from "node-fetch";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

// Resolve paths against this file, so the server also works when you start it
// from a different folder.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Port 5000 is taken by the AirPlay Receiver on macOS, so default to 5173 --
// the same port Vite uses, which you already know from Week 5.
// Override with `PORT=4000 npm start` if 5173 is busy too.
const port = process.env.PORT || 5173;

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
    await ejs.renderFile(path.join(__dirname, "index.ejs"), {
      weather,
      error,
      cityName: req.query.cityName
    })
  );
});

app.listen(port, () => console.log(`Server is running on port-${port}`));
