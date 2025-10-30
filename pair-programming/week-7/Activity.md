# Activity: Database & Backend Debugging (Week 7-8)

**Duration:** 90 minutes  
**Focus:** SQL errors, Express routing issues, database connection problems, debugging across the stack

## Learning Objectives

- Debug SQL query errors
- Troubleshoot Express route issues
- Diagnose database connection problems
- Use console logging effectively in backend code
- Understand error propagation from database to frontend

## Setup

Provide a broken full-stack todo app with frontend, Express backend, and PostgreSQL database.

## Exercise Structure

### Part 1: SQL Query Debugging (30 min)

Participants receive broken SQL queries to fix:

```sql
-- Broken queries to debug

-- Query 1: Syntax error
SELECT name, description, due_date, completed
FROM todos
WHERE user_id = 1
ORDER BY due_date DESC
LIMIT 10;  -- Missing semicolon is not the issue
-- Actual issue: 'completed' column doesn't exist, should be 'is_completed'

-- Query 2: Logic error
SELECT * FROM todos
WHERE is_completed = true
AND due_date > CURRENT_DATE;
-- Issue: This finds completed tasks due in the future (incorrect logic)

-- Query 3: Join error
SELECT users.name, todos.title, todos.due_date
FROM users
INNER JOIN todos ON users.id = todos.userid;
-- Issue: Column name is 'user_id' not 'userid'

-- Query 4: Aggregation issue
SELECT user_id, COUNT(*)
FROM todos
WHERE is_completed = false
GROUP BY user_id
HAVING COUNT > 5;
-- Issue: Should be COUNT(*) in HAVING clause
```

**Tasks:**

1. Run each query and document the error
2. Identify the issue
3. Fix the query
4. Test with sample data
5. Explain what was wrong

### Part 2: Express Route Troubleshooting (35 min)

Participants debug a broken Express API:

```javascript
// Broken Express routes

const express = require('express');
const router = express.Router();
const db = require('./db');

// Route 1: Missing async/await
router.get('/todos', (req, res) => {
  const todos = db.query('SELECT * FROM todos'); // Missing await
  res.json(todos);
});

// Route 2: Incorrect error handling
router.post('/todos', async (req, res) => {
  const { title, description, due_date } = req.body;

  const result = await db.query(
    'INSERT INTO todos (title, description, due_date) VALUES ($1, $2, $3) RETURNING *',
    [title, description, due_date]
  );

  res.json(result); // Should be result.rows[0]
});

// Route 3: Missing parameter validation
router.get('/todos/:id', async (req, res) => {
  const result = await db.query('SELECT * FROM todos WHERE id = $1', [
    req.params.id
  ]);

  res.json(result.rows[0]); // Doesn't handle missing todo
});

// Route 4: SQL injection vulnerability
router.delete('/todos/:id', async (req, res) => {
  const query = `DELETE FROM todos WHERE id = ${req.params.id}`; // Not parameterized
  await db.query(query);
  res.json({ message: 'Deleted' });
});

module.exports = router;
```

**Debugging Process:**

1. Test each route with Postman or curl
2. Document unexpected behaviors
3. Add console logging to trace execution
4. Fix issues one at a time
5. Add proper error handling

### Part 3: Full-Stack Debugging Scenario (25 min)

Participants receive a complete app where clicking "Add Todo" does nothing.

**Systematic Investigation:**

1. **Frontend:** Check browser console for errors
2. **Network:** Use DevTools Network tab to see if request is sent
3. **Backend:** Check Express server logs
4. **Database:** Verify database connection and query execution
5. **Response:** Trace the response back to the frontend

**Common Issues to Find:**

- Frontend not sending correct data format
- Express route not matching the request
- Database query failing silently
- Response not being handled in frontend
- CORS blocking the request

**Unblocking Strategy Practice:**
Participants must:

1. Identify where they're stuck
2. List 3 things they can try to get unstuck
3. Implement one strategy
4. Seek help with specific information about what they've tried

## Deliverables

- Fixed SQL queries with explanations
- Working Express API with error handling
- Full-stack debugging report documenting:
  - Issues found at each layer
  - Troubleshooting steps taken
  - Solutions implemented
- Personal "getting unstuck" strategy list

## General Facilitation Notes

### Pair Programming Roles

- **Driver:** Types and implements fixes
- **Navigator:** Reads errors, suggests strategies, documents process

Switch roles every 15-20 minutes.

### Assessment Criteria

Participants demonstrate proficiency by:

- Reading error messages accurately
- Following systematic debugging steps
- Using appropriate tools (console, DevTools, logs)
- Explaining problems clearly
- Knowing when and how to ask for help

### Extension Challenges

For pairs who finish early:

1. Add comprehensive error handling to the code
2. Create test cases that would have caught these bugs
3. Write a debugging guide for future participants
4. Intentionally break the code in new ways for other pairs to fix

### Reflection Questions

After the activity:

1. What was the most challenging error to debug? Why?
2. What tools or strategies were most helpful?
3. How did you know when you needed help?
4. What would you do differently next time?
5. What error have you seen before that makes more sense now?