# Project Based Mock Interview Prompts

The following 40 minute prompts are targetting to assist with project based interviewing for people weeks 14+ of the curriculum.

### Prompt 1: Book Library Management API
**Time Limit: 40 minutes**

#### Problem Statement
You're building a **Book Library Management API** for a public library system. Libraries need to track books, manage borrowing, and handle returns.

**Functional Requirements:**
- Add a book to library (title, author, ISBN, copies available)
- List all books in library with availability status
- Borrow a book (decrease available copies, track who borrowed it)
- Return a book (increase available copies)
- Get books by author name
- Get list of books that are currently out of stock
- View borrowing history for a specific book

**Validation Requirements:**
- ISBN must be unique
- ISBN must be 13 characters (format validation)
- Title cannot be empty
- Author cannot be empty
- Copies cannot be negative
- Cannot borrow if zero copies available
- Cannot return more copies than were borrowed

**Business Logic:**
- Track each borrow event with timestamp and borrower name
- A book is "out of stock" when available copies = 0
- A book is "low stock" when available copies ≤ 2
- Calculate total library value (all books: copies × estimated_value)

**Technical Requirements:**
- Node.js + Express
- In-memory storage (JavaScript array/object)
- Each book: id, title, author, isbn, copiesAvailable, totalCopies, status, borrowHistory[], createdAt
- Proper HTTP status codes and error messages
- Input validation on all endpoints
- Write 4 test cases covering core workflows

**Key Endpoints:**
- POST `/books` - Add new book
- GET `/books` - List all books
- GET `/books/out-of-stock` - Get out-of-stock books
- GET `/books/author?name=X` - Search by author
- POST `/books/:id/borrow` - Borrow a book
- POST `/books/:id/return` - Return a book
- GET `/books/:id/history` - View borrow history
- GET `/library/value` - Calculate total library value

### Prompt 2: Student Grade Management System
**Time Limit: 40 minutes**

#### Problem Statement
Build a **Student Grade Management API** for a school to track student grades, calculate GPA, and identify students needing academic support.

**Functional Requirements:**
- Add a student (name, student ID, major)
- Record grades for a student (subject, score, credits)
- Calculate student GPA (weighted average based on credits)
- List all students with their GPA
- Find students with GPA below 2.0 (at-risk students)
- Get grade history for a specific student
- Update a grade for a specific student
- Remove a student from system

**Validation Requirements:**
- Student ID must be unique
- Student ID must be numeric
- Name cannot be empty
- Score must be between 0-100
- Credits must be positive (1-4 typical range)
- Subject name cannot be empty

**Business Logic:**
- GPA calculation: sum(score × credits) / sum(credits)
- Letter grade: 90+ = A, 80-89 = B, 70-79 = C, 60-69 = D, <60 = F
- Status: "Good Standing" (GPA ≥ 2.0), "At Risk" (GPA < 2.0)
- Cannot delete student if they have grades recorded

**Technical Requirements:**
- Node.js + Express
- In-memory storage
- Each student: id, name, studentId, major, grades[], gpa, status, createdAt
- Each grade: subject, score, credits, letterGrade, dateRecorded
- Proper error handling
- Write 4 test cases

**Key Endpoints:**
- POST `/students` - Add student
- GET `/students` - List all students with GPA
- GET `/students/at-risk` - Get at-risk students
- POST `/students/:id/grades` - Record grade
- GET `/students/:id/grades` - View grade history
- PATCH `/students/:id/grades/:gradeId` - Update grade
- DELETE `/students/:id/grades/:gradeId` - Remove grade
- DELETE `/students/:id` - Remove student (only if no grades)

### Prompt 3: Restaurant Menu and Order System
**Time Limit: 40 minutes**

#### Problem Statement
Build a **Restaurant Menu and Order Management API** for a small restaurant to manage menu items, customer orders, and order status tracking.

**Functional Requirements:**
- Add menu items (name, description, price, category, availability)
- List all menu items (with ability to filter by category)
- Place an order with multiple items
- View order status
- Update order status (pending → preparing → ready → completed)
- Calculate order total
- Mark items as unavailable (out of stock)
- Get list of pending orders
- Cancel an order (only if status is pending)

**Validation Requirements:**
- Menu item name cannot be empty
- Price must be greater than zero
- Category must be one of: appetizer, main, dessert, beverage
- Quantity ordered cannot be negative or zero
- Cannot order unavailable items
- Cannot cancel completed or cancelled orders

**Business Logic:**
- Add 15% tax to order total
- Orders have status: pending, preparing, ready, completed, cancelled
- Item availability: available or unavailable
- Track order timestamp and estimated ready time (30 mins from order)
- Calculate average order value across all completed orders

**Technical Requirements:**
- Node.js + Express
- In-memory storage
- Menu item: id, name, description, price, category, available, createdAt
- Order: id, items[], subtotal, tax, total, status, createdAt, estimatedReadyTime
- Write 4 test cases covering workflows

**Key Endpoints:**
- POST `/menu` - Add menu item
- GET `/menu` - List menu items
- GET `/menu?category=main` - Filter by category
- POST `/menu/:id/unavailable` - Mark item unavailable
- POST `/orders` - Place order
- GET `/orders` - List all orders
- GET `/orders/pending` - Get pending orders
- GET `/orders/:id` - Get order details
- PATCH `/orders/:id/status` - Update order status
- DELETE `/orders/:id` - Cancel order
- GET `/analytics/average-order-value` - Get avg order value

### Prompt 4: Fitness Gym Membership System
**Time Limit: 40 minutes**

#### Problem Statement
Build a **Gym Membership Management API** for a fitness center to manage members, memberships, check-ins, and billing.

**Functional Requirements:**
- Register a new member (name, email, phone)
- Create membership plan (type, price, duration in months)
- Assign membership to member
- Check-in member (track gym visits)
- Get member's attendance history
- List all active members
- List members with expired memberships
- Calculate membership revenue (total paid)
- Renew membership for a member

**Validation Requirements:**
- Email must be unique
- Email format must be valid (contain @ and domain)
- Phone must be numeric and 10+ digits
- Name cannot be empty
- Membership price must be > 0
- Duration must be positive integer (months)
- Membership type: basic, standard, premium
- Cannot check-in a member without active membership

**Business Logic:**
- Membership status: active, expired, cancelled
- Membership expires after specified months
- Check-in records timestamp automatically
- Active members = those with active membership today
- Calculate revenue from all renewed and initial memberships
- Attendance stats: total visits, last visit date, visits this month

**Technical Requirements:**
- Node.js + Express
- In-memory storage
- Member: id, name, email, phone, joinDate, memberships[], createdAt
- Membership: id, type, price, startDate, endDate, status
- CheckIn: memberId, timestamp, duration
- Write 4 test cases

**Key Endpoints:**
- POST `/members` - Register member
- GET `/members` - List all members
- GET `/members/active` - Get active members
- GET `/members/expired` - Get expired memberships
- POST `/members/:id/memberships` - Assign membership
- GET `/members/:id/memberships` - View member's memberships
- POST `/members/:id/check-in` - Check in member
- GET `/members/:id/attendance` - View attendance history
- PATCH `/members/:id/memberships/:membershipId/renew` - Renew membership
- GET `/analytics/revenue` - Get total revenue
- GET `/members/:id/stats` - Get member stats

### Prompt 5: Blog Platform with Comments
**Time Limit: 40 minutes**

#### Problem Statement
Build a **Blog Platform API** where users can create blog posts, readers can leave comments, and posts can be published or drafted.

**Functional Requirements:**
- Create a blog post (title, content, author name, tags)
- Publish a post (change from draft to published)
- List all published posts (most recent first)
- Get detailed view of a post with all its comments
- Add a comment to a post
- Delete a comment (only by comment author)
- Search posts by title or tag
- Get all posts by a specific author
- Get list of draft posts for an author

**Validation Requirements:**
- Title cannot be empty or longer than 200 characters
- Content cannot be empty
- Author name cannot be empty
- Tags must be array of strings (max 5 tags per post)
- Comment text cannot be empty
- Comment author name cannot be empty
- Cannot comment on a draft post (only published posts)
- Cannot delete another user's comment

**Business Logic:**
- Post status: draft or published
- Draft posts only visible to their author
- Comments are always tied to author name (not user accounts)
- Timestamps for post creation, publish date, and comment creation
- Comment count on each post
- Search is case-insensitive for both title and tags

**Technical Requirements:**
- Node.js + Express
- In-memory storage
- Post: id, title, content, author, status, tags[], commentCount, createdAt, publishedAt
- Comment: id, text, authorName, postId, createdAt
- Write 4 test cases covering workflows

**Key Endpoints:**
- POST `/posts` - Create new post
- GET `/posts` - List published posts (ordered by recent)
- GET `/posts/drafts` - Get draft posts by author
- PATCH `/posts/:id/publish` - Publish a draft post
- GET `/posts/:id` - Get post with comments
- POST `/posts/:id/comments` - Add comment
- DELETE `/posts/:id/comments/:commentId` - Delete comment
- GET `/posts/search?q=title` - Search by title
- GET `/posts/tag/:tag` - Get posts by tag
- GET `/posts/author/:authorName` - Get posts by author
- GET `/analytics/post-count` - Get total published posts

### Suggested Interview Workflow

**Phase 1: Setup (5 mins)**
- Create directory and initialize git
- Create .gitignore
- Install dependencies
- Set up folder structure
- Make initial commit

**Phase 2: Planning (3 mins)**
- Write pseudocode or outline endpoints
- Identify data structures
- Explain approach

**Phase 3: Implementation (18 mins)**
- Build data structures and validation
- Implement all endpoints
- Handle errors properly

**Phase 4: Testing (5 mins)**
- Write 4 integration tests
- Cover main workflows
- All tests passing

**Phase 5: Git Workflow (5 mins)**
- Create feature branch
- Make 2-3 logical commits
- Clear commit messages

**Phase 6: Code Review (2 mins)**
- Walk through logic
- Discuss decisions

### Evaluation Criteria

**Terminal Proficiency:**
- Can they navigate with `cd`, `mkdir`, `touch`?
- Do they understand `npm init` and `npm install`?
- Can they use `git` commands without GUI?

**Code Organization:**
- Are functions separated by concern?
- Is validation centralized?
- Are route handlers clean?

**Validation Logic:**
- Do they validate all inputs?
- Are error messages helpful?
- Do they prevent invalid state?

**API Design:**
- Are HTTP methods used correctly?
- Are status codes appropriate?
- Are endpoints logical and RESTful?

**Git Discipline:**
- Are commits logical and not too large?
- Are commit messages clear?
- Do they understand branching?

**Testing:**
- Do tests cover workflows (not just functions)?
- Do they test validation failures?
- Can they articulate what each test verifies?

**Communication:**
- Can they explain their approach?
- Do they ask clarifying questions?
- Can they discuss trade-offs?
