// server/index.js

import express from "express";

const app = express();

// Set the port that you want the server to run on.
// Not 5000: on macOS that port belongs to the AirPlay Receiver.
const PORT = process.env.PORT || 8080;

//creates an endpoint for the route /api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from ExpressJS" });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
