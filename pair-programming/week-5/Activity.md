# Activity : API Troubleshooting Workshop (Week 5-6)

**Duration:** 75 minutes  
**Focus:** Network errors, API debugging, asynchronous code issues, environment configuration

## Learning Objectives

- Debug fetch/API call failures
- Interpret HTTP status codes
- Use Network tab in Chrome DevTools
- Troubleshoot CORS issues
- Debug asynchronous code problems

## Setup

Provide participants with a partially working weather app that has multiple API-related issues.

## Exercise Structure

### Part 1: Network Debugging (25 min)

Participants receive code with various API issues:

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

### Part 2: Status Code Investigation (20 min)

Participants create a reference guide by intentionally triggering different HTTP errors:

- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 500 Internal Server Error

For each status code, document:

- What causes this error?
- How do you identify it?
- How do you fix it?

### Part 3: Troubleshooting Plan Creation (30 min)

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
Give participants a new broken API call. They must:

1. Use their flowchart to diagnose the issue
2. Document each step of their troubleshooting process
3. Explain their solution to another pair

## Deliverables

- Working weather app with proper error handling
- HTTP status code reference guide
- Personal API troubleshooting flowchart
- Documentation of troubleshooting process

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
