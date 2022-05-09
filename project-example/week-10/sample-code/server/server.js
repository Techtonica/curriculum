const express = require("express");
const cors = require("cors");
require("dotenv").config();
const allRouter = require("./routes/routes");

const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My ExpressJS" });
});

// getting all routes
app.use("/", allRouter);

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
