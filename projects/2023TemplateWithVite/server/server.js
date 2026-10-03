const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

// Get all students
app.get("/api/students", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM students");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get single student
app.get("/api/students/:studentId", async (req, res) => {
  const { studentId } = req.params;
  try {
    const result = await db.query(
      "SELECT * FROM students WHERE id = $1",
      [studentId]
    );
    if (result.rows.length === 0) {
      res.status(404).send("Student not found");
      return;
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Create a new student
app.post("/api/students", async (req, res) => {
  const { firstname, lastname, is_current } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO students (firstname, lastname, is_current) VALUES ($1, $2, $3) RETURNING *",
      [firstname, lastname, is_current]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Update a student
app.put("/api/students/:studentId", async (req, res) => {
  const { studentId } = req.params;
  const { firstname, lastname, is_current } = req.body;
  try {
    const result = await db.query(
      "UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=$4 RETURNING *",
      [firstname, lastname, is_current, studentId]
    );
    if (result.rows.length === 0) {
      res.status(404).send("Student not found");
      return;
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete a student
app.delete("/api/students/:studentId", async (req, res) => {
  const { studentId } = req.params;
  try {
    await db.query("DELETE FROM students WHERE id=$1", [studentId]);
    res.json({ message: "Student removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
