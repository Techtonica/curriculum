const express = require("express");
const setup = require("./setup");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// TODO: Step 1 - Basic server setup
// This is a simple TODO server that works but has no tests
// and isn't structured to facilitate testing

// Mock database function - replace this with real database calls later
const mockDatabase = {
  // TODO: Implement getTodos function
  getTodos: function (callback) {
    // HINT: This should return mock data for now
    // Structure: callback(error, result)
    // where result has a 'rows' property with todo items
    // YOUR CODE HERE - return some sample todos
  },

  // TODO: Implement createTodo function
  createTodo: function (entry, callback) {
    // HINT: This should simulate creating a new todo
    // For now, just return a mock success response
    // YOUR CODE HERE - simulate creating a todo
  }
};

// TODO: Step 2 - Refactor to use setup module
// Uncomment the line below once you implement the setup module
// setup.constructRoutes(app, mockDatabase);

// Basic routes - these will be moved to setup.js in Step 2
app.get("/", (req, res) => {
  // TODO: Implement GET route for fetching all todos
  // HINT: Use mockDatabase.getTodos() and handle the callback

  // YOUR CODE HERE
  res.json({ message: "TODO: Implement GET route" });
});

app.post("/", (req, res) => {
  // TODO: Implement POST route for creating a new todo
  // HINT: Get entry from req.body, use mockDatabase.createTodo()

  // YOUR CODE HERE
  res.json({ message: "TODO: Implement POST route" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: true, message: "Something went wrong!" });
});

// Start server only if not in test environment
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
