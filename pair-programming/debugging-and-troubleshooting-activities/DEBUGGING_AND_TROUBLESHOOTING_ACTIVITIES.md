# Debugging & Troubleshooting Pair Programming Activities

## Activity 1: Error Detective (Week 3-4)

**Duration:** 60 minutes  
**Focus:** Understanding error messages, reading stack traces, systematic debugging

### Learning Objectives

- Read and interpret browser console errors
- Understand common JavaScript error types (TypeError, ReferenceError, SyntaxError)
- Practice systematic debugging approaches
- Learn to use `console.log()` strategically

### Setup

Provide students with intentionally broken code containing 5-8 different types of errors.

### Exercise Structure

#### Part 1: Error Identification (20 min)

Students receive broken code with multiple errors:

```javascript
// Broken Shopping Cart Code
let cart = {
  items: [],
  total: 0
};

function addItem(name, price, quantity) {
  let item = {
    name: name,
    price: price,
    quantity: quantiy // Typo error
  };

  cart.items.push(item);
  updateTotal();
}

function updateTotal() {
  cart.total = 0;
  for (let i = 0; i <= cart.items.length; i++) {
    // Off-by-one error
    cart.total += cart.items[i].price * cart.items[i].quantity;
  }
}

function removeItem(itemName) {
  cart.items = cart.items.filter((item) => (item.name = itemName)); // Assignment instead of comparison
}

function applyDiscount(discountPercent) {
  cart.total = cart.total * (1 - discountPercent / 100);
  return cart.total.toFixed(2);
}

// Test calls
addItem('Apple', 1.5, 3);
addItem('Banana', 0.75, 5);
console.log(calculateTax()); // Function doesn't exist
removeItem('Apple');
console.log(cart.totle); // Typo
```

**Task:**

1. Run the code and document each error message
2. Categorize errors (syntax, reference, type, logic)
3. Explain what each error means in plain English

#### Part 2: Debugging Process (25 min)

Students work through a systematic debugging checklist:

1. **Read the error** - What is it telling you?
2. **Locate the line** - Where is the problem?
3. **Understand the context** - What should happen vs. what is happening?
4. **Form a hypothesis** - What do you think is wrong?
5. **Test the fix** - Make one change and test

Students must document their process for each error:

- Error message received
- Hypothesis about the cause
- Fix applied
- Result of the fix

#### Part 3: Strategic Console Logging (15 min)

Students add strategic `console.log()` statements to debug logic errors that don't throw exceptions.

**Checkpoint Questions:**

- What should you log before a calculation?
- How do you verify data structure contents?
- When should you log function parameters?

### Deliverables

- Debugging journal documenting each error and fix
- Working, corrected code
- List of 5 debugging strategies learned

---

## Activity 2: API Troubleshooting Workshop (Week 5-6)

**Duration:** 75 minutes  
**Focus:** Network errors, API debugging, asynchronous code issues, environment configuration

### Learning Objectives

- Debug fetch/API call failures
- Interpret HTTP status codes
- Use Network tab in Chrome DevTools
- Troubleshoot CORS issues
- Debug asynchronous code problems

### Setup

Provide students with a partially working weather app that has multiple API-related issues.

### Exercise Structure

#### Part 1: Network Debugging (25 min)

Students receive code with various API issues:

```javascript
// Broken Weather App
const API_KEY = ''; // Empty API key

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

  const response = fetch(url); // Missing await
  const data = response.json(); // Missing await

  return data;
}

function displayWeather(data) {
  document.getElementById('temperature').textContent = data.main.temp; // Element doesn't exist
  document.getElementById('description').textContent = data.weather.description; // Wrong path
  document.getElementById('humidity').textContent = data.main.humidity;
}

// Event listener with issues
document.getElementById('search-btn').addEventListener('click', () => {
  const city = document.getElementById('city-input').value;
  const weather = getWeather(city); // Not handling promise
  displayWeather(weather);
});
```

**Debugging Tasks:**

1. Use Chrome DevTools Network tab to observe failed requests
2. Identify missing API key issue
3. Fix async/await problems
4. Correct data access paths
5. Add proper error handling

#### Part 2: Status Code Investigation (20 min)

Students create a reference guide by intentionally triggering different HTTP errors:

- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 500 Internal Server Error

For each status code, document:

- What causes this error?
- How do you identify it?
- How do you fix it?

#### Part 3: Troubleshooting Plan Creation (30 min)

Pairs develop a systematic troubleshooting flowchart for API issues:

```
API Call Not Working
    ↓
Is the request reaching the API?
    → No: Check URL, network connectivity
    → Yes: ↓
Did you get a response?
    → No: Check CORS, network timeout
    → Yes: ↓
What's the status code?
    → 4xx: Check request parameters, auth
    → 5xx: Server issue, try again later
    → 2xx: ↓
Is the response structure what you expected?
    → No: Log response, check API docs
    → Yes: Check data parsing and display logic
```

**Checkpoint Exercise:**
Give students a new broken API call. They must:

1. Use their flowchart to diagnose the issue
2. Document each step of their troubleshooting process
3. Explain their solution to another pair

### Deliverables

- Working weather app with proper error handling
- HTTP status code reference guide
- Personal API troubleshooting flowchart
- Documentation of troubleshooting process

---

## Activity 3: Database & Backend Debugging (Week 7-8)

**Duration:** 90 minutes  
**Focus:** SQL errors, Express routing issues, database connection problems, debugging across the stack

### Learning Objectives

- Debug SQL query errors
- Troubleshoot Express route issues
- Diagnose database connection problems
- Use console logging effectively in backend code
- Understand error propagation from database to frontend

### Setup

Provide a broken full-stack todo app with frontend, Express backend, and PostgreSQL database.

### Exercise Structure

#### Part 1: SQL Query Debugging (30 min)

Students receive broken SQL queries to fix:

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

#### Part 2: Express Route Troubleshooting (35 min)

Students debug a broken Express API:

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

#### Part 3: Full-Stack Debugging Scenario (25 min)

Students receive a complete app where clicking "Add Todo" does nothing.

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
Students must:

1. Identify where they're stuck
2. List 3 things they can try to get unstuck
3. Implement one strategy
4. Seek help with specific information about what they've tried

### Deliverables

- Fixed SQL queries with explanations
- Working Express API with error handling
- Full-stack debugging report documenting:
  - Issues found at each layer
  - Troubleshooting steps taken
  - Solutions implemented
- Personal "getting unstuck" strategy list

---

## General Facilitation Notes

### Pair Programming Roles

- **Driver:** Types and implements fixes
- **Navigator:** Reads errors, suggests strategies, documents process

Switch roles every 15-20 minutes.

### Assessment Criteria

Students demonstrate proficiency by:

- Reading error messages accurately
- Following systematic debugging steps
- Using appropriate tools (console, DevTools, logs)
- Explaining problems clearly
- Knowing when and how to ask for help

### Extension Challenges

For pairs who finish early:

1. Add comprehensive error handling to the code
2. Create test cases that would have caught these bugs
3. Write a debugging guide for future students
4. Intentionally break the code in new ways for other pairs to fix

### Reflection Questions

After each activity:

1. What was the most challenging error to debug? Why?
2. What tools or strategies were most helpful?
3. How did you know when you needed help?
4. What would you do differently next time?
5. What error have you seen before that makes more sense now?
