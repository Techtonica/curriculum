# Project Based Mock Interview Prompts
The following prompts are to assist with project based interviewing (ideal for curriculum weeks 11+ participants). Challenge yourself to see how much problem solving breakdown and implementation you can work through within the stated amount of time. [Evaluate your work](#evaluation-criteria) when done to determine what you can continue working towards. 

### Prompt List
- [1: Book Library Management API](#prompt-1-book-library-management-api)
- [2: Student Grade Management System](#prompt-2-student-grade-management-system)
- [3: Restaurant Menu and Order System](#prompt-3-restaurant-menu-and-order-system)
- [4: Fitness Gym Membership System](#prompt-4-fitness-gym-membership-system)
- [5: Blog Platform with Comments](#prompt-5-blog-platform-with-comments)
- [6: Todo List Application (Full-Stack)](#prompt-6-todo-list-application-full-stack)
- [7: Weather Dashboard (Full-Stack)](#prompt-7-weather-dashboard-full-stack)
- [8: Note-Taking App with Tags (Full-Stack)](#prompt-8-note-taking-app-with-tags-full-stack)

### Skill Progression
- **Prompts 1-2:** Foundation building - basic CRUD, validation, in-memory storage
- **Prompts 3-5:** Logic complexity - calculations, filtering, nested data structures
- **Prompts 6-7:** Full-stack integration - form handling, state management, async operations
- **Prompt 8:** Advanced full-stack - complex filtering, search, dynamic tag system

### Suggested Interview Schedule
**API-Only Track**
- Interview 1: Prompt 1 (Inventory)
- Interview 2: Prompt 2 (Book Library)
- Interview 3: Prompt 3 or 4 (Grades/Restaurant)

**Full-Stack Track**
- Interview 1: Prompt 6 (Todo List - simple)
- Interview 2: Prompt 7 or 8 (Weather or Notes - complex)

**Progressive Track**
- Interview 1: Prompt 1 (API-Only, foundation)
- Interview 2: Prompt 6 (Full-Stack, simple)
- Interview 3: Prompt 4 or 8 (Complex API or Full-Stack)

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

### Prompt 6: Todo List Application (Full-Stack)
**Time Limit: 40 minutes**

#### Problem Statement
Build a **Todo List Web Application** with a frontend UI and backend API. Users can create tasks, mark them complete, delete them, and filter by status. This tests full-stack fundamentals: frontend rendering, form handling, state management, and API integration.

**Frontend Requirements:**
- HTML form to add new todos (input field + submit button)
- Display list of all todos with checkboxes
- Each todo shows: title, status (complete/incomplete), delete button
- Mark todo as complete by clicking checkbox
- Delete todo by clicking delete button
- Filter todos: show all / show active / show completed
- Real-time UI updates without page reload
- Form validation: cannot submit empty todo
- Visual feedback for completed todos (strikethrough text)

**Backend Requirements:**
- POST `/api/todos` - Create new todo
- GET `/api/todos` - Get all todos
- PATCH `/api/todos/:id` - Mark complete/incomplete
- DELETE `/api/todos/:id` - Delete todo
- In-memory storage
- Proper error handling

**Validation Requirements:**
- Todo title cannot be empty
- Todo title cannot exceed 100 characters
- Cannot mark non-existent todo as complete
- Cannot delete non-existent todo

**Technical Requirements:**
- Node.js + Express (backend)
- HTML + CSS + Vanilla JavaScript or React
- Fetch API to communicate with backend
- Form submission without page reload
- CSS for styling (clean, readable design)
- Write 3 test cases for API endpoints
- Write 1 browser test (manual verification of UI interactions)

**Key Features:**
- Add todo with keyboard enter key
- Visual indicator for completed items
- Filter buttons update UI dynamically
- Empty list message when no todos
- Success/error messages for actions

### Prompt 7: Weather Dashboard (Full-Stack)
**Time Limit: 40 minutes**

#### Problem Statement
Build a **Weather Dashboard Application** where users can search for cities, view current weather, and save favorite cities. This tests full-stack skills: frontend form handling, API integration, dynamic UI rendering, and data persistence.

**Frontend Requirements:**
- Search input to enter city name
- Display current weather: temperature, condition, humidity, wind speed
- Show "Last Updated" timestamp
- Add city to favorites button
- Display list of saved favorite cities
- Click favorite city to view its weather
- Remove city from favorites
- Handle loading states (show spinner while fetching)
- Handle error states (show error message if city not found)
- Responsive layout (readable on different screen sizes)

**Backend Requirements:**
- POST `/api/weather/search` - Get weather for city (mock data)
- GET `/api/favorites` - Get saved favorite cities
- POST `/api/favorites` - Add city to favorites
- DELETE `/api/favorites/:cityId` - Remove from favorites
- In-memory storage for favorites
- Mock weather data (don't call real API)

**Mock Weather Data Structure:**

```javascript
{
  city: "New York",
  country: "USA",
  temperature: 72,
  condition: "Sunny",
  humidity: 65,
  windSpeed: 10,
  updatedAt: "2025-05-22T15:30:00Z"
}
```

**Validation Requirements:**
- City name cannot be empty
- City must exist in mock data (simple validation)
- Cannot add same city to favorites twice
- City name in search field must be at least 2 characters

**Technical Requirements:**
- Node.js + Express (backend)
- HTML + CSS + Vanilla JavaScript or React
- Fetch API for backend communication
- Dynamic HTML generation (no template engines)
- CSS Grid or Flexbox for layout
- Loading state UI handling
- Error handling and user feedback
- Write 3 API endpoint tests
- Manual UI verification (browser testing)

**Key Features:**
- Real-time search as user types or on submit
- Favorites persist during session (in-memory)
- Display weather data cards
- Search history (show last 5 searches)
- City not found error handling

### Prompt 8: Note-Taking App with Tags (Full-Stack)
**Time Limit: 40 minutes**

#### Problem Statement
Build a **Note-Taking Application** where users can create notes, assign tags, search notes, and delete them. This tests full-stack integration: form handling, filtering/search logic, state management, and UI rendering.

**Frontend Requirements:**
- Create note form (title, content, tags input)
- Display all notes in a card/list layout
- Each note card shows: title, preview of content, tags, delete button
- Search notes by title (real-time filtering)
- Filter notes by tag (click tag to filter)
- Edit note (click to expand, update fields)
- Delete note with confirmation
- Add multiple tags (comma-separated)
- Visual tag display (colored badges)
- Empty state message when no notes

**Backend Requirements:**
- POST `/api/notes` - Create note
- GET `/api/notes` - Get all notes
- GET `/api/notes?search=query` - Search notes by title
- GET `/api/notes/tag/:tagName` - Get notes by tag
- PATCH `/api/notes/:id` - Update note
- DELETE `/api/notes/:id` - Delete note
- In-memory storage
- Proper error handling

**Validation Requirements:**
- Note title cannot be empty
- Note content cannot be empty
- Title max 150 characters, content max 5000 characters
- Tags cannot be empty strings
- Maximum 10 tags per note
- Cannot edit/delete non-existent note

**Business Logic:**
- Tags are case-insensitive
- Extract unique tags across all notes for tag filter buttons
- Search is case-insensitive
- Notes ordered by creation date (newest first)
- Show tag count next to each tag name
- Confirmation dialog before deleting note

**Technical Requirements:**
- Node.js + Express (backend)
- HTML + CSS + Vanilla JavaScript (frontend)
- Fetch API for communication
- Event delegation for dynamic elements
- Form validation on frontend
- CSS for cards/tags styling
- Modal or expanded view for editing
- Write 4 API endpoint tests
- Browser verification of UI interactions

**Key Features:**
- Real-time search filtering
- Tag-based filtering with visual indicators
- Card-based note layout
- Edit mode with inline editing
- Color-coded tags
- Note count display
- Responsive grid layout

### Suggested Interview Workflow

#### Phase 0: Environment & Frontend Setup (2 mins)
**_Only for full-stack/frontend prompts (6, 7, 8):_**
- Create `public/` folder for frontend files
- Create `public/index.html` with basic structure
- Create `public/style.css` for styling
- Create `public/script.js` for frontend logic
- Verify folder structure from terminal: `ls -la public/`

#### Phase 1: Setup from Scratch (5 mins)
- Create new directory for project
- Initialize git repository
- Create `.gitignore` file
- Initialize npm project
- Install dependencies
- Create folder structure
- Make initial commit
- Verify with `git log`

#### Phase 2: Planning & Breaking Down (3 mins)
- Outline endpoints (backend)
- Sketch frontend components (if applicable)
- Identify data structures
- List validation rules
- Explain approach to interviewer

#### Phase 3: Implementation (18 mins)

**API-Only Prompts (1-5):**
- Build data structures and validation
- Implement all endpoints
- Handle errors properly

**Full-Stack Prompts (6-8):**

**3a: Backend Setup (6 mins)**
- Express app and middleware
- Data structures
- Validation functions

**3b: API Endpoints (6 mins)**
- All required endpoints
- Error handling

**3c: Frontend Implementation (6 mins)**
- HTML structure
- CSS styling
- JavaScript event handlers and fetch calls
- Form submission handling
- Dynamic UI updates

#### Phase 4: Testing (5 mins)

**API-Only Prompts (1-5):**
- Write integration tests
- Run tests from terminal

**Full-Stack Prompts (6-8):**
**4a: API Tests (3 mins)**
- Write integration tests for endpoints
- Run tests: `npm test`

**4b: Browser Verification (2 mins)**
- Start dev server: `npm start`
- Test form submission in browser
- Test filtering/search functionality
- Verify UI updates without page reload
- Test error handling (invalid inputs)

#### Phase 5: Git Workflow & Branching (5 mins)
- Check current branch
- Create feature branch
- Make logical commits:
  - First commit: setup and initial structure
  - Second commit: API implementation (backend)
  - Third commit: frontend implementation (if applicable)
  - Fourth commit: tests
- Write clear commit messages
- View commit history with `git log --oneline`

#### Phase 6: Code Review & Discussion (1 min)
- Walk through backend logic
- Explain frontend event handling (if applicable)
- Discuss validation approach
- Show test coverage

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

**Frontend HTML/CSS (Full-Stack Prompts 6, 7, 8 ONLY):**
- Semantic HTML structure (form, section, header, etc.)
- CSS properly organized (grid, flexbox used correctly)
- Responsive design (works on mobile and desktop)
- Visual feedback for user actions (hover, active states)
- Accessibility: proper labels, alt text, ARIA attributes
- No inline styles (CSS in external file)

**Frontend JavaScript (Full-Stack Prompts 6, 7, 8 ONLY):**
- Proper event handling (addEventListener, event delegation)
- Fetch API used correctly for backend communication
- Error handling in fetch calls (try-catch or .catch())
- Form validation before submission
- DOM manipulation is efficient (no unnecessary reflows)
- No console.log statements left in production code
- Variables have meaningful names
- Functions are modular and reusable

**State Management (Full-Stack Prompts 6, 7, 8 ONLY):**
- Frontend state is clear (what data is displayed?)
- State updates cause proper UI re-renders
- Filtered/searched data doesn't mutate original data
- Loading and error states handled visually

**Form Handling (Full-Stack Prompts 6, 7, 8 ONLY):**
- Form submission prevents default behavior
- Form clears after successful submission
- Validation messages shown to user
- Input fields have proper types and attributes
- Error messages are helpful

**User Experience (Full-Stack Prompts 6, 7, 8 ONLY):**
- Loading indicators while fetching data
- Error messages for failed operations
- Success feedback after successful actions
- Intuitive UI layout and flow
- Consistent styling throughout
- Accessible color contrast

### Evaluation Weight
**API-Only Prompts (1-5):**
- Backend logic: 40%
- API design: 25%
- Testing: 15%
- Git workflow: 15%
- Communication: 5%

**Full-Stack Prompts (6, 7, 8):**
- Backend logic: 25%
- API design: 20%
- Frontend implementation: 25%
- Testing (API + UI): 15%
- Git workflow: 10%
- Communication: 5%
