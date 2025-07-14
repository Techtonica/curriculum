# Advanced Node.js Topics

## Estimated Time
**Total Time:** 5-6 hours
- **Reading:** 2 hours
- **Hands-on Activities:** 3.5-4 hours
- **Discussion & Code Review:** 30 minutes

## Prerequisites
Before tackling advanced Node.js concepts, ensure you're comfortable with:
- [Node.js Fundamentals](https://github.com/Techtonica/curriculum/blob/main/node-js/node-js.md) - Basic Node.js concepts and npm
- [Express.js Basics](https://github.com/Techtonica/curriculum/blob/main/express-js/express.md) - Creating basic web servers and routes
- [JavaScript Promises and Async/Await](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-9-async.md) - Asynchronous JavaScript patterns
- [Database Basics](https://github.com/Techtonica/curriculum/blob/main/databases/database-intro.md) - Understanding of database concepts
- [Testing Basics](https://github.com/Techtonica/curriculum/blob/main/testing-and-tdd/testing-and-tdd.md) - Understanding of testing concepts

## Motivation
Moving from frontend development or another field into backend development can feel like learning a completely different language. Node.js isn't just JavaScript running on a server—it's a powerful platform for building scalable, real-time applications that serve millions of users.

Understanding advanced Node.js concepts will help you build production-ready applications, not just tutorial projects. These skills directly translate to job responsibilities: handling user authentication, managing database connections efficiently, building APIs that other developers will use, and ensuring your applications can handle real-world traffic. Companies need developers who can build robust backend systems, and these advanced concepts are what separate junior developers from those ready for mid-level and senior positions.

## Objectives
By the end of this topic outline, you will be able to:
- Build custom Express.js middleware for cross-cutting concerns
- Implement secure authentication and authorization systems
- Design and build RESTful APIs following industry best practices
- Handle errors gracefully and provide meaningful feedback to clients
- Optimize Node.js applications for performance and scalability
- Work with databases efficiently using connection pooling and query optimization
- Deploy Node.js applications with proper environment configuration
- Write comprehensive tests for backend applications
- Debug and profile Node.js applications to identify bottlenecks

## Specific Things to Learn

### Advanced Express.js Patterns
- **Custom Middleware:** Creating reusable middleware for logging, validation, and error handling
- **Error Handling:** Centralized error handling and custom error classes
- **Route Organization:** Structuring large applications with routers and controllers
- **Request Validation:** Input sanitization and validation using libraries like Joi
- **Response Formatting:** Consistent API response structures and status codes

### Authentication and Security
- **JWT Implementation:** Creating, signing, and verifying JSON Web Tokens
- **Password Security:** Hashing with bcrypt and salt rounds
- **Session Management:** Stateful vs stateless authentication approaches
- **Security Headers:** Using helmet.js and other security middleware
- **Rate Limiting:** Protecting APIs from abuse and DDoS attacks
- **CORS Configuration:** Managing cross-origin requests safely

### Database Integration and Optimization
- **Connection Pooling:** Managing database connections efficiently
- **Query Optimization:** Writing efficient database queries and using indexes
- **Transaction Management:** Ensuring data consistency with database transactions
- **ORM vs Query Builders:** When to use Sequelize, Mongoose, or raw queries
- **Database Migrations:** Managing schema changes in production environments

### Performance and Scalability
- **Caching Strategies:** Redis integration and in-memory caching
- **Asynchronous Patterns:** Streams, events, and worker threads
- **Memory Management:** Understanding garbage collection and memory leaks
- **Clustering:** Using the cluster module for multi-core utilization
- **Profiling and Monitoring:** Identifying performance bottlenecks

### API Design and Documentation
- **RESTful Principles:** Resource-based URLs and HTTP method usage
- **API Versioning:** Strategies for maintaining backward compatibility
- **Documentation:** Using tools like Swagger/OpenAPI for API documentation
- **Testing APIs:** Integration testing with supertest and Jest

## Activities

### Activity 1: Custom Middleware Workshop (45 minutes)

**Goal:** Build reusable middleware components for common application needs
Create a suite of custom middleware functions that you might use in a real application, understanding how middleware fits into the request-response cycle.

<details><summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: Request Logging Middleware (10 min)**
- Create middleware that logs request method, URL, and timestamp
- Add request duration tracking
- Test with sample routes

**Phase 2: Authentication Middleware (15 min)**
- Build JWT token validation middleware
- Handle missing or invalid tokens appropriately
- Attach user information to request object

**Phase 3: Rate Limiting Middleware (10 min)**
- Implement simple in-memory rate limiting
- Track requests per IP address
- Return appropriate HTTP status codes

**Phase 4: Validation Middleware (10 min)**
- Create reusable input validation middleware
- Support different validation schemas
- Provide clear error messages for invalid input

</details>

<details><summary><strong>🏗️ Starter Code</strong></summary>

```javascript
// middleware-workshop.js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// JWT Secret for demo
const JWT_SECRET = 'your-secret-key-change-in-production';

// 1. Request Logging Middleware
const requestLogger = (req, res, next) => {
  // TODO: Log request details
  const startTime = Date.now();
  
  // TODO: Log method, URL, timestamp
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
  // TODO: Track response time
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`Request completed in ${duration}ms`);
  });
  
  next();
};

// 2. Authentication Middleware
const authenticateToken = (req, res, next) => {
  // TODO: Get token from Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    // TODO: Return 401 if no token
    return res.status(401).json({ error: 'Access token required' });
  }
  
  // TODO: Verify JWT token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      // TODO: Return 403 if token invalid
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    
    // TODO: Attach user to request object
    req.user = user;
    next();
  });
};

// 3. Rate Limiting Middleware
const rateLimitStore = new Map(); // Simple in-memory store

const rateLimit = (maxRequests = 10, windowMs = 60000) => {
  return (req, res, next) => {
    // TODO: Get client IP
    const clientIP = req.ip || req.connection.remoteAddress;
    const now = Date.now();
    
    // TODO: Clean old entries
    // TODO: Check current request count
    // TODO: Update request count
    // TODO: Allow or deny request
    
    if (!rateLimitStore.has(clientIP)) {
      rateLimitStore.set(clientIP, { count: 1, resetTime: now + windowMs });
      return next();
    }
    
    const clientData = rateLimitStore.get(clientIP);
    
    if (now > clientData.resetTime) {
      // Reset window
      rateLimitStore.set(clientIP, { count: 1, resetTime: now + windowMs });
      return next();
    }
    
    if (clientData.count >= maxRequests) {
      return res.status(429).json({ 
        error: 'Too many requests',
        retryAfter: Math.ceil((clientData.resetTime - now) / 1000)
      });
    }
    
    clientData.count++;
    next();
  };
};

// 4. Validation Middleware
const validateInput = (schema) => {
  return (req, res, next) => {
    // TODO: Validate request body against schema
    const errors = [];
    
    for (const [field, rules] of Object.entries(schema)) {
      const value = req.body[field];
      
      // TODO: Check required fields
      if (rules.required && (!value || value.trim() === '')) {
        errors.push(`${field} is required`);
        continue;
      }
      
      // TODO: Check field types
      if (value && rules.type && typeof value !== rules.type) {
        errors.push(`${field} must be of type ${rules.type}`);
      }
      
      // TODO: Check string length
      if (value && rules.minLength && value.length < rules.minLength) {
        errors.push(`${field} must be at least ${rules.minLength} characters`);
      }
      
      // TODO: Check email format (basic)
      if (value && rules.email && !value.includes('@')) {
        errors.push(`${field} must be a valid email`);
      }
    }
    
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }
    
    next();
  };
};

// Test Routes
app.use(requestLogger); // Apply to all routes

// Public route
app.get('/public', (req, res) => {
  res.json({ message: 'This is a public endpoint' });
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ 
    message: 'This is a protected endpoint',
    user: req.user 
  });
});

// Rate limited route
app.get('/limited', rateLimit(5, 60000), (req, res) => {
  res.json({ message: 'This endpoint is rate limited' });
});

// Validation example
const userSchema = {
  name: { required: true, type: 'string', minLength: 2 },
  email: { required: true, type: 'string', email: true },
  age: { type: 'number' }
};

app.post('/users', validateInput(userSchema), (req, res) => {
  res.json({ 
    message: 'User created successfully',
    user: req.body 
  });
});

// Login route to get JWT token (for testing)
app.post('/login', (req, res) => {
  // Simple demo login - don't use in production!
  const { username, password } = req.body;
  
  if (username === 'demo' && password === 'password') {
    const token = jwt.sign(
      { username, id: 1 }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('\nTest the middleware:');
  console.log('1. GET /public - Public endpoint');
  console.log('2. POST /login - Get JWT token');
  console.log('3. GET /protected - Requires JWT token');
  console.log('4. GET /limited - Rate limited endpoint');
  console.log('5. POST /users - Input validation');
});
```
</details>

<details><summary><strong>✅ Testing Your Middleware</strong></summary>

**Test Commands (use curl or Postman):**

```shellscript
# 1. Test public endpoint
curl http://localhost:3000/public

# 2. Get JWT token
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"demo","password":"password"}'

# 3. Test protected endpoint (replace YOUR_TOKEN)
curl http://localhost:3000/protected \
  -H "Authorization: Bearer YOUR_TOKEN"

# 4. Test rate limiting (run multiple times quickly)
curl http://localhost:3000/limited

# 5. Test validation - valid data
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":30}'

# 6. Test validation - invalid data
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"","email":"invalid-email"}'
```

**Expected Behaviors:**

- ✅ All requests logged with timestamps and duration
- ✅ Protected routes require valid JWT token
- ✅ Rate limiting blocks excessive requests
- ✅ Validation catches invalid input
- ✅ Appropriate HTTP status codes returned
- ✅ Clear error messages provided


**Console Output Should Show:**

```plaintext
[2024-01-15T10:30:00.000Z] GET /public
Request completed in 5ms
[2024-01-15T10:30:05.000Z] POST /login  
Request completed in 12ms
[2024-01-15T10:30:10.000Z] GET /protected
Request completed in 8ms
```
</details>

### Activity 2: Secure Authentication System (60 minutes)

**Goal:** Implement a complete authentication flow with security best practices
Build a user authentication system that handles registration, login, password reset, and protected routes—skills you'll use in almost every web application.

<details><summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: User Registration (15 min)**
- Create user registration endpoint
- Hash passwords using bcrypt
- Validate input and check for existing users
- Return appropriate success/error responses

**Phase 2: User Login (15 min)**
- Create login endpoint
- Verify password against hash
- Generate JWT token on successful login
- Handle invalid credentials gracefully

**Phase 3: Protected Routes (15 min)**
- Create middleware to verify JWT tokens
- Implement user profile endpoint
- Add role-based access control
- Test token expiration handling

**Phase 4: Password Reset (15 min)**
- Generate secure reset tokens
- Create password reset endpoints
- Implement token validation and expiration
- Update password with new hash

</details>

<details><summary><strong>🏗️ Starter Code</strong></summary>

```javascript
// auth-system.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const app = express();
app.use(express.json());

// Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-in-production';
const SALT_ROUNDS = 12;

// In-memory storage (use database in production)
const users = [];
const resetTokens = new Map();

// Helper function to find user by email
const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

// Helper function to find user by ID
const findUserById = (id) => {
  return users.find(user => user.id === id);
};

// 1. User Registration
app.post('/register', async (req, res) => {
  try {
    const { name, email, password, role = 'user' } = req.body;
    
    // TODO: Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ 
        error: 'Name, email, and password are required' 
      });
    }
    
    // TODO: Check if user already exists
    if (findUserByEmail(email)) {
      return res.status(409).json({ 
        error: 'User with this email already exists' 
      });
    }
    
    // TODO: Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    
    // TODO: Create user object
    const user = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date()
    };
    
    // TODO: Save user
    users.push(user);
    
    // TODO: Return success (don't include password)
    const { password: _, ...userResponse } = user;
    res.status(201).json({ 
      message: 'User registered successfully',
      user: userResponse 
    });
    
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 2. User Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // TODO: Validate input
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required' 
      });
    }
    
    // TODO: Find user
    const user = findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // TODO: Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // TODO: Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // TODO: Return token and user info
    const { password: _, ...userResponse } = user;
    res.json({
      message: 'Login successful',
      token,
      user: userResponse
    });
    
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3. Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    
    req.user = decoded;
    next();
  });
};

// 4. Role-based Authorization Middleware
const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ 
        error: `Access denied. ${role} role required.` 
      });
    }
    next();
  };
};

// 5. Protected Routes
app.get('/profile', authenticateToken, (req, res) => {
  // TODO: Get user profile
  const user = findUserById(req.user.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const { password: _, ...userProfile } = user;
  res.json({ user: userProfile });
});

// Admin-only route
app.get('/admin/users', authenticateToken, requireRole('admin'), (req, res) => {
  // TODO: Return all users (admin only)
  const allUsers = users.map(({ password, ...user }) => user);
  res.json({ users: allUsers });
});

// 6. Password Reset Request
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  
  // TODO: Find user
  const user = findUserByEmail(email);
  if (!user) {
    // Don't reveal if email exists or not
    return res.json({ 
      message: 'If email exists, reset instructions have been sent' 
    });
  }
  
  // TODO: Generate reset token
  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetExpires = Date.now() + 3600000; // 1 hour
  
  // TODO: Store reset token
  resetTokens.set(resetToken, {
    userId: user.id,
    expires: resetExpires
  });
  
  // TODO: In production, send email with reset link
  console.log(`Password reset token for ${email}: ${resetToken}`);
  
  res.json({ 
    message: 'If email exists, reset instructions have been sent',
    // For demo purposes only - don't include in production
    resetToken: resetToken
  });
});

// 7. Password Reset
app.post('/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    
    // TODO: Validate input
    if (!token || !newPassword) {
      return res.status(400).json({ 
        error: 'Token and new password are required' 
      });
    }
    
    // TODO: Verify reset token
    const resetData = resetTokens.get(token);
    if (!resetData || Date.now() > resetData.expires) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }
    
    // TODO: Find user
    const user = findUserById(resetData.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // TODO: Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
    
    // TODO: Update user password
    user.password = hashedPassword;
    
    // TODO: Remove used token
    resetTokens.delete(token);
    
    res.json({ message: 'Password reset successful' });
    
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    users: users.length 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Auth server running on port ${PORT}`);
  console.log('\nAvailable endpoints:');
  console.log('POST /register - Register new user');
  console.log('POST /login - User login');
  console.log('GET /profile - Get user profile (protected)');
  console.log('GET /admin/users - Get all users (admin only)');
  console.log('POST /forgot-password - Request password reset');
  console.log('POST /reset-password - Reset password with token');
});
```
</details>

<details><summary><strong>✅ Authentication Flow Tests</strong></summary>

**Test the complete authentication flow:**

```shellscript
# 1. Register a new user
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com", 
    "password": "securePassword123"
  }'

# 2. Register an admin user
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "adminPassword123",
    "role": "admin"
  }'

# 3. Login and get token
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'

# 4. Access protected profile (replace YOUR_TOKEN)
curl http://localhost:3000/profile \
  -H "Authorization: Bearer YOUR_TOKEN"

# 5. Try admin endpoint with regular user token (should fail)
curl http://localhost:3000/admin/users \
  -H "Authorization: Bearer YOUR_TOKEN"

# 6. Request password reset
curl -X POST http://localhost:3000/forgot-password \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com"}'

# 7. Reset password (use token from step 6)
curl -X POST http://localhost:3000/reset-password \
  -H "Content-Type: application/json" \
  -d '{
    "token": "RESET_TOKEN_FROM_STEP_6",
    "newPassword": "newSecurePassword123"
  }'

# 8. Login with new password
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "newSecurePassword123"
  }'
```

**Security Checklist:**
- Passwords are hashed with bcrypt (never stored in plain text)
- JWT tokens have expiration times
- Invalid credentials don't reveal whether email exists
- Reset tokens expire after 1 hour
- Role-based access control works correctly
- Input validation prevents empty/missing fields
- Error messages don't leak sensitive information
- Used reset tokens are immediately invalidated

**Expected Response Examples:**

```json
// Successful registration
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}

// Successful login
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```
</details>

### Activity 3: RESTful API Design Challenge (75 minutes)

**Goal:** Design and implement a complete REST API following industry standards
Create a blog API that demonstrates proper REST principles, error handling, and documentation—similar to what you might build in your first backend role.

<details><summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: API Structure & Routes (20 min)**
- Design RESTful endpoints for posts, comments, and users
- Implement proper HTTP methods and status codes
- Set up basic Express server with route organization

**Phase 2: CRUD Operations (25 min)**
- Implement Create, Read, Update, Delete for posts
- Add input validation and error handling
- Include proper response formatting

**Phase 3: Advanced Features (20 min)**
- Add pagination and filtering capabilities
- Implement search functionality
- Add sortin
</details>


### Activity 4: Performance Optimization Lab (50 minutes)

**Goal:** Identify and fix performance issues in a Node.js application
Work with a deliberately slow application to practice the debugging and optimization skills you'll need when applications grow and performance becomes critical.

<details>

<summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: Performance Profiling (15 min)**
- Set up profiling tools and baseline measurements
- Identify slow endpoints and bottlenecks
- Document current performance metrics

**Phase 2: Database Optimization (15 min)**
- Implement connection pooling
- Add database query optimization
- Cache frequently accessed data

**Phase 3: Application-Level Optimization (15 min)**
- Add response compression
- Implement in-memory caching
- Optimize expensive operations

**Phase 4: Measurement & Validation (5 min)**
- Compare before/after performance metrics
- Validate optimizations work correctly
- Document improvements achieved
</details>

<details><summary><strong>🏗️ Slow Application to Optimize</strong></summary>

```javascript
// slow-blog-api.js - DELIBERATELY SLOW VERSION
const express = require('express');
const app = express();

app.use(express.json());

// Simulated database with intentional performance issues
let posts = [];
let users = [];
let views = new Map();

// Generate test data (intentionally inefficient)
function generateTestData() {
  console.log('Generating test data...');
  
  // Create users
  for (let i = 1; i <= 1000; i++) {
    users.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      bio: `This is a bio for user ${i}`.repeat(10) // Unnecessarily long
    });
  }
  
  // Create posts
  for (let i = 1; i <= 5000; i++) {
    posts.push({
      id: i,
      title: `Post ${i}`,
      content: `This is the content for post ${i}`.repeat(50), // Large content
      authorId: Math.floor(Math.random() * 1000) + 1,
      tags: [`tag${i % 10}`, `category${i % 5}`],
      createdAt: new Date(Date.now() - Math.random() * 10000000000),
      viewCount: Math.floor(Math.random() * 1000)
    });
  }
  
  console.log(`Generated ${users.length} users and ${posts.length} posts`);
}

generateTestData();

// SLOW: Linear search through all posts
function findPostById(id) {
  // Intentionally slow - searches entire array every time
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === parseInt(id)) {
      return posts[i];
    }
  }
  return null;
}

// SLOW: Linear search through all users
function findUserById(id) {
  // Intentionally slow - no indexing
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === parseInt(id)) {
      return users[i];
    }
  }
  return null;
}

// SLOW: Expensive calculation on every request
function calculatePopularityScore(post) {
  // Intentionally expensive calculation
  let score = 0;
  for (let i = 0; i < 10000; i++) {
    score += Math.sqrt(post.viewCount * Math.random());
  }
  return Math.floor(score);
}

// SLOW: No caching, recalculates everything
app.get('/posts', (req, res) => {
  console.time('GET /posts');
  
  // PROBLEM 1: No pagination - returns ALL posts
  let allPosts = [...posts];
  
  // PROBLEM 2: Expensive operations on every request
  const postsWithDetails = allPosts.map(post => {
    // PROBLEM 3: N+1 query problem - looks up user for each post
    const author = findUserById(post.authorId);
    
    // PROBLEM 4: Expensive calculation on every post
    const popularityScore = calculatePopularityScore(post);
    
    return {
      ...post,
      author: author ? { name: author.name, email: author.email } : null,
      popularityScore
    };
  });
  
  // PROBLEM 5: Sorting large arrays on every request
  postsWithDetails.sort((a, b) => b.createdAt - a.createdAt);
  
  console.timeEnd('GET /posts');
  res.json({ posts: postsWithDetails, count: postsWithDetails.length });
});

// SLOW: Individual post lookup with expensive operations
app.get('/posts/:id', (req, res) => {
  console.time(`GET /posts/${req.params.id}`);
  
  const post = findPostById(req.params.id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  
  // PROBLEM: Expensive operations on every single post request
  const author = findUserById(post.authorId);
  const popularityScore = calculatePopularityScore(post);
  
  // PROBLEM: Simulate slow database query
  setTimeout(() => {
    // Increment view count (simulate database write)
    post.viewCount++;
    
    console.timeEnd(`GET /posts/${req.params.id}`);
    res.json({
      post: {
        ...post,
        author: author ? { name: author.name, email: author.email } : null,
        popularityScore
      }
    });
  }, 100); // Artificial 100ms delay
});

// SLOW: Search without indexing
app.get('/search', (req, res) => {
  console.time('GET /search');
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Search query required' });
  }
  
  // PROBLEM: Linear search through all posts and users
  const matchingPosts = posts.filter(post => 
    post.title.toLowerCase().includes(q.toLowerCase()) ||
    post.content.toLowerCase().includes(q.toLowerCase())
  );
  
  const matchingUsers = users.filter(user =>
    user.name.toLowerCase().includes(q.toLowerCase()) ||
    user.email.toLowerCase().includes(q.toLowerCase())
  );
  
  // PROBLEM: Expensive operations on search results
  const postsWithDetails = matchingPosts.map(post => ({
    ...post,
    author: findUserById(post.authorId),
    popularityScore: calculatePopularityScore(post)
  }));
  
  console.timeEnd('GET /search');
  res.json({
    posts: postsWithDetails,
    users: matchingUsers,
    totalResults: matchingPosts.length + matchingUsers.length
  });
});

// Performance monitoring endpoint
app.get('/stats', (req, res) => {
  const memUsage = process.memoryUsage();
  res.json({
    memory: {
      rss: `${Math.round(memUsage.rss / 1024 / 1024)} MB`,
      heapTotal: `${Math.round(memUsage.heapTotal / 1024 / 1024)} MB`,
      heapUsed: `${Math.round(memUsage.heapUsed / 1024 / 1024)} MB`
    },
    uptime: `${Math.round(process.uptime())} seconds`,
    dataSize: {
      posts: posts.length,
      users: users.length
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Slow blog API running on port ${PORT}`);
  console.log('\nTest these slow endpoints:');
  console.log('GET /posts - Returns ALL posts (very slow)');
  console.log('GET /posts/1 - Single post with artificial delay');
  console.log('GET /search?q=post - Search without indexing');
  console.log('GET /stats - Performance statistics');
  console.log('\nYour job: Make this API fast!');
});
```

**Now create the optimized version:**

```javascript
// optimized-blog-api.js - YOUR OPTIMIZED VERSION
const express = require('express');
const app = express();

app.use(express.json());

// TODO: Add compression middleware
// const compression = require('compression');
// app.use(compression());

// TODO: Create indexes for fast lookups
const postIndex = new Map();
const userIndex = new Map();
const tagIndex = new Map();

// TODO: Add caching
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// TODO: Implement your optimizations here
// Hints:
// 1. Use Map for O(1) lookups instead of O(n) array searches
// 2. Implement pagination to limit data returned
// 3. Cache expensive calculations
// 4. Use compression middleware
// 5. Batch database operations
// 6. Pre-calculate popular posts
// 7. Implement proper indexing for search
```
</details>

<details><summary><strong>✅ Performance Testing & Optimization Guide</strong></summary>

**Step 1: Baseline Performance Testing**

```shellscript
# Install Apache Bench for load testing
# On macOS: brew install httpie
# On Ubuntu: sudo apt-get install apache2-utils

# Test current performance
ab -n 100 -c 10 http://localhost:3000/posts
ab -n 100 -c 10 http://localhost:3000/posts/1
ab -n 50 -c 5 http://localhost:3000/search?q=post

# Or use curl with timing
curl -w "@curl-format.txt" -o /dev/null -s http://localhost:3000/posts
```

**Create curl-format.txt:**

```plaintext
     time_namelookup:  %{time_namelookup}\n
        time_connect:  %{time_connect}\n
     time_appconnect:  %{time_appconnect}\n
    time_pretransfer:  %{time_pretransfer}\n
       time_redirect:  %{time_redirect}\n
  time_starttransfer:  %{time_starttransfer}\n
                     ----------\n
          time_total:  %{time_total}\n
```

**Step 2: Optimization Techniques**

```javascript
// 1. Create indexes for fast lookups
function buildIndexes() {
  console.log('Building indexes...');
  
  // Post index
  posts.forEach(post => {
    postIndex.set(post.id, post);
  });
  
  // User index
  users.forEach(user => {
    userIndex.set(user.id, user);
  });
  
  // Tag index for search
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (!tagIndex.has(tag)) {
        tagIndex.set(tag, []);
      }
      tagIndex.get(tag).push(post.id);
    });
  });
  
  console.log('Indexes built successfully');
}

// 2. Caching helper
function getCached(key, generator, ttl = CACHE_TTL) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < ttl) {
    return cached.data;
  }
  
  const data = generator();
  cache.set(key, { data, timestamp: Date.now() });
  return data;
}

// 3. Optimized post lookup
function findPostByIdFast(id) {
  return postIndex.get(parseInt(id));
}

// 4. Optimized user lookup
function findUserByIdFast(id) {
  return userIndex.get(parseInt(id));
}

// 5. Pre-calculated popularity scores
const popularityCache = new Map();
function getPopularityScore(postId) {
  if (!popularityCache.has(postId)) {
    const post = findPostByIdFast(postId);
    // Simplified calculation
    const score = Math.floor(post.viewCount * 1.5 + post.tags.length * 10);
    popularityCache.set(postId, score);
  }
  return popularityCache.get(postId);
}
```

**Step 3: Optimized Endpoints**

```javascript
// Optimized posts endpoint with pagination
app.get('/posts', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = Math.min(parseInt(req.query.limit) || 20, 100); // Max 100
  const cacheKey = `posts_${page}_${limit}`;
  
  const result = getCached(cacheKey, () => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    // Use pre-sorted array or sort once and cache
    const sortedPosts = posts
      .slice()
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(startIndex, endIndex);
    
    return sortedPosts.map(post => ({
      ...post,
      author: findUserByIdFast(post.authorId),
      popularityScore: getPopularityScore(post.id)
    }));
  });
  
  res.json({ 
    posts: result,
    pagination: {
      page,
      limit,
      total: posts.length,
      pages: Math.ceil(posts.length / limit)
    }
  });
});
```

**Performance Targets:**
- `/posts` endpoint: < 100ms response time
- `/posts/:id` endpoint: < 50ms response time
- Search endpoint: < 200ms response time
- Memory usage: < 200MB for test dataset
- Support 100+ concurrent requests

**Optimization Checklist:**
- Replace linear searches with Map lookups
- Implement pagination (max 100 items per page)
- Add response caching with TTL
- Use compression middleware
- Pre-calculate expensive operations
- Build search indexes
- Remove artificial delays
- Batch operations where possible

</details>

### Activity 5: Production Deployment Simulation (40 minutes)

**Goal:** Prepare a Node.js application for production deployment
Learn the configuration and deployment practices that separate development projects from production-ready applications.

<details><summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: Environment Configuration (10 min)**
- Set up environment variables for different stages
- Configure database connections and API keys
- Implement configuration validation

**Phase 2: Production Middleware (10 min)**
- Add security headers and CORS configuration
- Implement proper logging for production
- Set up health check endpoints

**Phase 3: Error Handling & Monitoring (10 min)**
- Implement centralized error handling
- Add request/response logging
- Create monitoring and alerting endpoints

**Phase 4: Deployment Preparation (10 min)**
- Create deployment scripts and documentation
- Set up process management configuration
- Validate production readiness checklist

</details>

<details><summary><strong>🏗️ Production-Ready Application Setup</strong></summary>

```javascript
// production-blog-api.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const winston = require('winston');

const app = express();

// Environment Configuration
const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DATABASE_URL,
  redisUrl: process.env.REDIS_URL,
  logLevel: process.env.LOG_LEVEL || 'info',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  rateLimitWindow: parseInt(process.env.RATE_LIMIT_WINDOW) || 900000 // 15 min
};

// Configuration Validation
function validateConfig() {
  const required = ['JWT_SECRET'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    process.exit(1);
  }
  
  console.log('✅ Configuration validated');
}

// Production Logging Setup
const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'blog-api' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// Add console logging in development
if (config.nodeEnv !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// CORS Configuration
const corsOptions = {
  origin: config.corsOrigin === '*' ? true : config.corsOrigin.split(','),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

// Compression
app.use(compression());

// Rate Limiting
const limiter = rateLimit({
  windowMs: config.rateLimitWindow,
  max: config.rateLimitMax,
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: Math.ceil(config.rateLimitWindow / 1000)
  },
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', limiter);

// Request Logging Middleware
app.use((req, res, next) => {
  const startTime = Date.now();
  
  // Log request
  logger.info('Request started', {
    method: req.method,
    url: req.url,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });
  
  // Log response
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    logger.info('Request completed', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip
    });
  });
  
  next();
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check Endpoints
app.get('/health', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
    version: process.env.npm_package_version || '1.0.0'
  };
  
  res.status(200).json(healthCheck);
});

// Detailed health check for load balancers
app.get('/health/detailed', (req, res) => {
  const memUsage = process.memoryUsage();
  
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.nodeEnv,
    version: process.env.npm_package_version || '1.0.0',
    memory: {
      rss: Math.round(memUsage.rss / 1024 / 1024),
      heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
      heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
      external: Math.round(memUsage.external / 1024 / 1024)
    },
    // TODO: Add database connectivity check
    // TODO: Add external service checks
  };
  
  res.status(200).json(healthCheck);
});

// Metrics endpoint for monitoring
app.get('/metrics', (req, res) => {
  // TODO: Implement metrics collection
  const metrics = {
    requests_total: 0, // TODO: Implement counter
    requests_duration_seconds: 0, // TODO: Implement histogram
    active_connections: 0, // TODO: Implement gauge
    memory_usage_bytes: process.memoryUsage().heapUsed,
    uptime_seconds: process.uptime()
  };
  
  res.json(metrics);
});

// API Routes (add your existing routes here)
app.use('/api/posts', require('./routes/posts')); // TODO: Create route files
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Global Error Handler
app.use((err, req, res, next) => {
  logger.error('Unhandled error', {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip
  });
  
  // Don't leak error details in production
  const message = config.nodeEnv === 'production' 
    ? 'Internal server error' 
    : err.message;
  
  res.status(err.status || 500).json({
    error: message,
    ...(config.nodeEnv !== 'production' && { stack: err.stack })
  });
});

// 404 Handler
app.use('*', (req, res) => {
  logger.warn('Route not found', {
    url: req.url,
    method: req.method,
    ip: req.ip
  });
  
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    logger.info('Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  server.close(() => {
    logger.info('Process terminated');
    process.exit(0);
  });
});

// Unhandled Promise Rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit in production, just log
  if (config.nodeEnv !== 'production') {
    process.exit(1);
  }
});

// Start Server
validateConfig();

const server = app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});

module.exports = app;
```

**Environment Configuration Files:**

```shellscript
# .env.development
NODE_ENV=development
PORT=3000
JWT_SECRET=dev-secret-key
LOG_LEVEL=debug
CORS_ORIGIN=http://localhost:3000,http://localhost:3001
RATE_LIMIT_MAX=1000
RATE_LIMIT_WINDOW=900000

# .env.production
NODE_ENV=production
PORT=8080
JWT_SECRET=your-super-secure-production-secret
DATABASE_URL=postgresql://user:pass@host:5432/dbname
REDIS_URL=redis://localhost:6379
LOG_LEVEL=info
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW=900000
```

**Package.json Scripts:**

```json
{
  "scripts": {
    "start": "node production-blog-api.js",
    "dev": "nodemon production-blog-api.js",
    "test": "jest",
    "lint": "eslint .",
    "build": "echo 'No build step required'",
    "logs": "tail -f logs/combined.log",
    "health": "curl http://localhost:3000/health"
  }
}
```
</details>

<details><summary><strong>✅ Production Deployment Checklist</strong></summary>

**Environment Setup:**
- All required environment variables are set
- Secrets are stored securely (not in code)
- Database connections are configured
- CORS origins are properly restricted
- Rate limiting is appropriate for expected traffic

**Security Configuration:**
- Helmet.js security headers are enabled
- HTTPS is enforced (handled by reverse proxy/load balancer)
- JWT secrets are cryptographically secure
- Input validation is implemented
- SQL injection protection is in place

**Logging & Monitoring:**
- Structured logging is implemented
- Log levels are appropriate for environment
- Error tracking is set up
- Health check endpoints respond correctly
- Metrics collection is implemented

**Performance & Reliability:**
- Response compression is enabled
- Database connection pooling is configured
- Caching strategies are implemented
- Graceful shutdown handlers are in place
- Process management (PM2) is configured


**Testing Production Setup:**

```shellscript
# 1. Test health endpoints
curl http://localhost:3000/health
curl http://localhost:3000/health/detailed

# 2. Test rate limiting
for i in {1..10}; do curl http://localhost:3000/api/posts; done

# 3. Test CORS
curl -H "Origin: https://unauthorized-domain.com" \
     -H "Access-Control-Request-Method: GET" \
     -X OPTIONS http://localhost:3000/api/posts

# 4. Test error handling
curl http://localhost:3000/nonexistent-route

# 5. Load test
ab -n 1000 -c 10 http://localhost:3000/health
```

**PM2 Configuration (ecosystem.config.js):**

```javascript
module.exports = {
  apps: [{
    name: 'blog-api',
    script: 'production-blog-api.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080
    },
    log_file: 'logs/combined.log',
    error_file: 'logs/error.log',
    out_file: 'logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    max_memory_restart: '1G',
    node_args: '--max-old-space-size=1024'
  }]
};
```

**Deployment Commands:**

```shellscript
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start ecosystem.config.js --env production

# Monitor application
pm2 monit

# View logs
pm2 logs blog-api

# Restart application
pm2 restart blog-api

# Save PM2 configuration
pm2 save
pm2 startup
```

**Success Criteria:**
- Application starts without errors
- Health checks return 200 status
- Logs are being written correctly
- Rate limiting works as expected
- Security headers are present in responses
- Graceful shutdown works properly
- Application survives load testing
- Memory usage remains stable over time

</details>

## Additional External Resources

### Express.js and Middleware
- [Express.js Official Guide](https://expressjs.com/en/guide/routing.html) - Comprehensive documentation with real-world examples
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-security.html) - Security and performance recommendations from the Express team
- [Helmet.js Documentation](https://helmetjs.github.io/) - Security middleware for Express applications

### Authentication and Security
- [JWT.io](https://jwt.io/) - Learn about JSON Web Tokens with interactive debugger
- [OWASP Node.js Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html) - Security best practices for Node.js applications
- [bcrypt Documentation](https://www.npmjs.com/package/bcrypt) - Password hashing library with usage examples
- [Passport.js Strategies](http://www.passportjs.org/docs/) - Authentication middleware with multiple strategy options

### Database Integration
- [Sequelize Documentation](https://sequelize.org/docs/v6/) - Popular ORM for SQL databases with Node.js
- [Mongoose Documentation](https://mongoosejs.com/docs/) - MongoDB object modeling for Node.js

### Performance and Monitoring
- [Node.js Performance Best Practices](https://nodejs.org/en/docs/guides/simple-profiling/) - Official Node.js performance guidance

### Testing and Quality Assurance
- [Jest Testing Framework](https://jestjs.io/docs/getting-started) - Popular testing framework with excellent Node.js support
- [Supertest Documentation](https://github.com/visionmedia/supertest) - HTTP assertion library for testing Express applications
- [Node.js Testing Best Practices](https://github.com/goldbergyoni/nodebestpractices#-6-testing-and-overall-quality-practices) - Comprehensive testing guidelines

### API Design and Documentation
- [REST API Design Best Practices](https://restfulapi.net/) - Comprehensive guide to RESTful API design principles
- [Swagger/OpenAPI Documentation](https://swagger.io/docs/) - API documentation and design tools
- [API Design Patterns](https://microservice-api-patterns.org/) - Advanced patterns for API design

### Career Development Resources
- [Node.js Developer Roadmap](https://roadmap.sh/nodejs) - Visual guide to Node.js learning path
- [Backend Developer Interview Questions](https://github.com/arialdomartini/Back-End-Developer-Interview-Questions) - Common interview questions for backend roles

### Additional External Resources
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/) - Production process manager
- [Winston Logging](https://github.com/winstonjs/winston) - Production logging library
- [Helmet.js Security](https://helmetjs.github.io/) - Security middleware
