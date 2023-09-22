import express from "express";
import cors from "cors";
import db from "./db/db-connection.js";

const app = express();

app.use(cors());
app.use(express.json());

//Set the port that you want the server to run on
const PORT = 4000;

//creates an endpoint for the route /api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from ExpressJS" });
});

app.get("/api/users", async (req, res) => {
  try {
    const { rows: users } = await db.query("SELECT * FROM users");
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.post("/api/users", async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email
  };
  console.log(user);
  try {
    const createdUser = await db.query(
      "INSERT INTO users(name, email) VALUES($1, $2) RETURNING *",
      [user.name, user.email]
    );
    console.log(createdUser);
    res.json(createdUser.rows[0]);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.put("/api/users/:id", async (req, res) => {
  const userId = req.params.id;

  const user = {
    name: req.body.name,
    email: req.body.email
  };
  const query = `UPDATE users SET name = $1, email = $2 WHERE id = ${userId} RETURNING *`;

  const values = [user.name, user.email];
  try {
    const updatedUser = await db.query(query, values);
    console.log(updatedUser);
    res.json(updatedUser.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  // : acts as a placeholder
  const userId = req.params.id;
  try {
    await db.query("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
