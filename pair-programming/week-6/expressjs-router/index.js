import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log("directory-name 👉️", __dirname);

console.log(path.join(__dirname, "/dist", "index.html"));

const PORT = 8080;

const app = express();

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.listen(PORT, () => {
  console.log(`app is listening to port: ${PORT}`);
});