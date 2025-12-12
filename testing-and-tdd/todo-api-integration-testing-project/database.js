// TODO: Step 3 - Database abstraction layer
// This file will contain the actual database interaction code

const { Pool } = require("pg");

// Database connection configuration
// TODO: Set up your database connection
const pool = new Pool({
  // HINT: You'll need to configure these based on your database
  // For now, these are placeholder values
  user: process.env.DB_USER || "your_username",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "todo_db",
  password: process.env.DB_PASSWORD || "your_password",
  port: process.env.DB_PORT || 5432
});

// Database schema (run this in your database):
/*
CREATE TABLE todo_items (
  id SERIAL,
  entry TEXT NOT NULL,
  PRIMARY KEY(id)
);
*/

const database = {
  // TODO: Implement real database getTodos function
  getTodos: function (callback) {
    // HINT: Use pool.query() to execute SQL
    // Query: 'SELECT * FROM todo_items ORDER BY id'
    // YOUR CODE HERE
    // Handle both success and error cases
    // Call callback(error, result) appropriately
  },

  // TODO: Implement real database createTodo function
  createTodo: function (entry, callback) {
    // HINT: Use pool.query() with parameterized query
    // Query: 'INSERT INTO todo_items (entry) VALUES ($1) RETURNING *'
    // YOUR CODE HERE
    // Handle both success and error cases
    // Call callback(error, result) appropriately
  }
};

module.exports = database;
