# TODO API Testing Exercise
This is a hands-on exercise for learning backend API testing with Node.js, Express, and testing frameworks.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the server:
   ```bash
   npm start
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Exercise Steps

### Step 1: Basic Server Setup
- Complete the basic TODO server in `server.js`
- Implement mock database functions
- Test manually with Postman

### Step 2: Add Unit Tests
- Complete the `setup.js` module for better testability
- Implement API tests in `test/api.test.js`
- Learn about mocking external dependencies

### Step 3: Database Integration
- Complete the `database.js` module for real database interactions
- Implement database tests in `test/database.test.js`
- Learn about testing database operations

## Key Learning Objectives
- Understand API testing challenges
- Learn to mock external dependencies
- Practice writing testable code
- Implement comprehensive test coverage

## Database Schema

```sql
CREATE TABLE todo_items (
  id SERIAL,
  entry TEXT NOT NULL,
  PRIMARY KEY(id)
);
```

## Testing with Postman
Use Postman to manually test your API:
- GET `http://localhost:3000/` - Fetch all todos
- POST `http://localhost:3000/` - Create new todo
  - Body: `{"entry": "Your todo item"}`

## Common Issues
- Make sure to handle both success and error cases
- Remember to use callbacks properly in async operations
- Test both happy path and error scenarios
