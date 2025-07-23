// filepath: week-6/expressjs-router/index.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

const app = express();

// Add a route for the root path ("/") that sends the index.html file.

// Add a route for "/about" that sends the about.html file.

app.listen(PORT, () => {
  console.log(`app is listening to port: ${PORT}`);
});