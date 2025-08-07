// TODO: Step 2 - Create setup module for better testability
// This module will contain the route construction logic
// separated from the server setup

function constructRoutes(app, database) {
  // TODO: Move route handlers from server.js to here
  // This separation allows us to inject mock databases for testing
  
  // GET route for fetching todos
  app.get('/', (req, res) => {
    // TODO: Implement using the injected database parameter
    // HINT: database.getTodos((error, result) => { ... })
    
    // YOUR CODE HERE
    // Handle both success and error cases
    // Success response format: { error: false, todo: result.rows }
    // Error response format: { error: true, message: 'Error message' }
  });
  
  // POST route for creating todos
  app.post('/', (req, res) => {
    // TODO: Implement using the injected database parameter
    // HINT: Get entry from req.body.entry
    // HINT: database.createTodo(entry, (error, result) => { ... })
    
    // YOUR CODE HERE
    // Validate that entry exists in request body
    // Handle both success and error cases
  });
}

module.exports = {
  constructRoutes
};
