# Advanced JavaScript Concepts: Closures, Prototypes, & ES6 Features

## Estimated Time
**Total Time:** 4-5 hours
- **Reading:** 1.5 hours
- **Hands-on Activities:** 2-3 hours
- **Discussion & Q&A:** 30 minutes

## Prerequisites
Before diving into these advanced concepts, you should be comfortable with:
- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md) - Variables, data types, and basic syntax
- [JavaScript Array Functions](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-2-array-functions.md) - Array methods and iteration
- [JavaScript Objects](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-6-object-literals.md) - Object creation, properties, and methods

## Motivation
As someone transitioning into tech, you might feel overwhelmed by JavaScript's seemingly magical behaviors. Why do some variables seem to "remember" things even after functions finish? How do objects inherit from each other without classes? These aren't mysteries—they're powerful features that, once understood, will make you a more confident developer.

These concepts form the backbone of modern JavaScript development. Whether you're debugging a tricky scope issue, understanding how a popular library works under the hood, or preparing for technical interviews, mastering closures, prototypes, and ES6+ features will set you apart. Many career changers find these topics challenging initially, but they're the key to writing professional-quality JavaScript and understanding the frameworks you'll use daily.

These concepts are frequently tested in technical interviews.

## Objectives
By the end of this topic outline, you will be able to:
- Explain how closures work and identify them in real code
- Create and use closures for practical programming patterns
- Understand JavaScript's prototype-based inheritance system
- Navigate the prototype chain to debug object behavior
- Write modern JavaScript using ES6+ features confidently
- Refactor older JavaScript code to use contemporary syntax
- Recognize these patterns in popular libraries and frameworks
- Apply these concepts to solve common programming challenges


## Specific Things to Learn

### Closures
- **Lexical Scoping:** How JavaScript determines variable access based on where variables are declared
- **Function Factories:** Creating functions that generate other functions with specific behaviors
- **Data Privacy:** Using closures to create private variables and methods
- **Memory Considerations:** Understanding when closures keep references to outer variables
- **Common Patterns:** Module pattern, callback functions, and event handlers

### Prototypes
- **Prototype Chain:** How JavaScript looks up properties and methods
- **Constructor Functions:** Creating objects with shared methods
- **Object.create():** Modern approach to prototype-based inheritance
- **Prototype vs **proto**:** Understanding the difference and when to use each
- **Method Inheritance:** How methods are shared between object instances

### ES6+ Features
- **Variable Declarations:** `let` and `const` vs `var` - block scope and hoisting
- **Arrow Functions:** Syntax, `this` binding, and when to use them
- **Template Literals:** String interpolation and multi-line strings
- **Destructuring:** Extracting values from arrays and objects elegantly
- **Modules:** `import`/`export` for organizing code across files
- **Classes:** Syntactic sugar over prototypes for familiar OOP patterns
- **Default Parameters:** Setting fallback values for function parameters
- **Rest/Spread Operators:** Working with variable numbers of arguments and array/object manipulation


## Activities

# Updated Activities for Advanced JavaScript Concepts

## Activities

### Activity 1: Closure Detective (30 minutes)

**Goal:** Identify and explain closures in existing code
You'll examine code snippets from popular JavaScript libraries and identify where closures are being used. This helps you recognize these patterns in real-world code you'll encounter on the job.

<details><summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: Pattern Recognition (10 min)**
- Read through each code example carefully
- Circle or highlight where you think closures are occurring
- Identify what variables are being "closed over"

**Phase 2: Analysis (15 min)**
- For each closure, explain what it's capturing
- Predict the output of each code snippet
- Identify the purpose of each closure pattern

**Phase 3: Validation (5 min)**
- Run code examples in browser console
- Compare actual output with your predictions
- Note any surprises or misconceptions

</details><details><summary><strong>🏗️ Code Examples to Analyze</strong></summary>

```javascript
// Example 1: Event Handler Pattern
function setupButton() {
  let clickCount = 0;
  
  document.getElementById('myButton').addEventListener('click', function() {
    clickCount++;
    console.log('Button clicked ' + clickCount + ' times');
  });
}

// Question: What is the closure here? What does it capture?

// Example 2: Module Pattern
const calculator = (function() {
  let result = 0;
  
  return {
    add: function(x) {
      result += x;
      return this;
    },
    multiply: function(x) {
      result *= x;
      return this;
    },
    getResult: function() {
      return result;
    }
  };
})();

// Question: How many closures are in this code? What do they share?

// Example 3: Function Factory
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

// Question: What happens when you call double(5) and triple(5)?

// Example 4: Loop with Closures (Common Interview Question)
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log('Loop value: ' + i);
  }, 100);
}

// Question: What will this print? Why? How would you fix it?

// Example 5: Private Methods Pattern
function createUser(name) {
  let userName = name;
  let isLoggedIn = false;
  
  function validateName(name) {
    return name && name.length > 0;
  }
  
  return {
    login: function() {
      if (validateName(userName)) {
        isLoggedIn = true;
        return 'Welcome, ' + userName;
      }
      return 'Invalid user';
    },
    logout: function() {
      isLoggedIn = false;
      return 'Goodbye, ' + userName;
    },
    isActive: function() {
      return isLoggedIn;
    }
  };
}

// Question: What's private here? What's public? How does it work?
```
</details>

<details><summary><strong>✅ Self-Check Questions</strong></summary>

For each example, ask yourself:
1. **Where is the closure?**
   - Which function is nested inside another?
   - What variables from the outer scope are being used?

2. **What is being captured?**
   - Which variables remain accessible after the outer function returns?
   - Are these variables shared or separate for each closure?

3. **Why use a closure here?**
   - What problem does the closure solve?
   - What would happen without the closure?

**Expected Insights:**
- Example 1: Event handler captures `clickCount` for persistent state
- Example 2: All methods share the same `result` variable
- Example 3: Each multiplier function remembers its own multiplier value
- Example 4: All timeouts share the same `i` (common gotcha!)
- Example 5: Private variables and methods are truly inaccessible from outside
</details>


### Activity 2: Build a Module with Closures (45 minutes)

**Goal:** Create a practical application using closure patterns
Design a simple shopping cart module that uses closures to maintain private state. This mirrors how you might structure code in a real application.

<details><summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: Basic Structure (10 min)**
- Create private variables for cart items and total
- Return object with public methods
- Test that private variables are inaccessible from outside

**Phase 2: Core Functionality (20 min)**
- Implement `addItem(name, price)` method
- Implement `removeItem(name)` method
- Implement `getTotal()` and `getItems()` methods
- Test each method individually

**Phase 3: Advanced Features (10 min)**
- Create `createDiscount(percentage)` function factory
- Apply discount functionality to cart
- Implement `clearCart()` method

**Phase 4: Validation (5 min)**
- Run comprehensive test suite
- Verify data privacy is maintained
- Test edge cases (removing non-existent items, etc.)
</details>

<details><summary><strong>🏗️ Starter Code</strong></summary>

```javascript
// shopping-cart.js
function createShoppingCart() {
  // TODO: Create private variables here
  let items = [];
  let total = 0;
  
  return {
    addItem: function(name, price) {
      // TODO: Add item to cart and update total
      // Hint: Push an object with name and price to items array
    },
    
    removeItem: function(name) {
      // TODO: Find item by name, remove it, and update total
      // Hint: Use findIndex() and splice()
    },
    
    getTotal: function() {
      // TODO: Return current total
    },
    
    getItems: function() {
      // TODO: Return a copy of items array (maintain privacy)
      // Hint: Use spread operator or Array.from()
    },
    
    clearCart: function() {
      // TODO: Reset items and total
    }
  };
}

// Function factory for discounts
function createDiscount(percentage) {
  // TODO: Return a function that calculates discounted price
  // The returned function should take a price and return discounted amount
}

// Test HTML structure
const testHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Shopping Cart Test</title>
</head>
<body>
    <h1>Shopping Cart Module Test</h1>
    <p>Open browser console to see results</p>
    <script src="shopping-cart.js"></script>
    <script>
        // Your test code will go here
    </script>
</body>
</html>
`;
```

</details>

<details><summary><strong>✅ Self-Check Tests</strong></summary>

```javascript
// Test Suite - Run these in your browser console
console.log('🛒 Testing Shopping Cart Module...\n');

// Test 1: Basic functionality
const cart = createShoppingCart();
cart.addItem('T-Shirt', 25);
cart.addItem('Jeans', 60);
console.assert(cart.getTotal() === 85, '❌ Test 1 Failed: Basic add functionality');
console.log('✅ Test 1 Passed: Basic add functionality');

// Test 2: Get items
const items = cart.getItems();
console.assert(items.length === 2, '❌ Test 2 Failed: Get items count');
console.assert(items[0].name === 'T-Shirt', '❌ Test 2 Failed: Item name');
console.log('✅ Test 2 Passed: Get items functionality');

// Test 3: Data privacy
console.assert(cart.items === undefined, '❌ Test 3 Failed: Items should be private');
console.assert(cart.total === undefined, '❌ Test 3 Failed: Total should be private');
console.log('✅ Test 3 Passed: Data privacy maintained');

// Test 4: Remove item
cart.removeItem('T-Shirt');
console.assert(cart.getTotal() === 60, '❌ Test 4 Failed: Remove item');
console.assert(cart.getItems().length === 1, '❌ Test 4 Failed: Item count after removal');
console.log('✅ Test 4 Passed: Remove item functionality');

// Test 5: Discount function factory
const tenPercentOff = createDiscount(10);
const discountedPrice = tenPercentOff(100);
console.assert(discountedPrice === 90, '❌ Test 5 Failed: Discount calculation');
console.log('✅ Test 5 Passed: Discount function factory');

// Test 6: Clear cart
cart.clearCart();
console.assert(cart.getTotal() === 0, '❌ Test 6 Failed: Clear cart total');
console.assert(cart.getItems().length === 0, '❌ Test 6 Failed: Clear cart items');
console.log('✅ Test 6 Passed: Clear cart functionality');

console.log('\n🎉 All tests completed!');
```

**Expected Console Output:**

```plaintext
🛒 Testing Shopping Cart Module...

✅ Test 1 Passed: Basic add functionality
✅ Test 2 Passed: Get items functionality  
✅ Test 3 Passed: Data privacy maintained
✅ Test 4 Passed: Remove item functionality
✅ Test 5 Passed: Discount function factory
✅ Test 6 Passed: Clear cart functionality

🎉 All tests completed!
```
</details>


### Activity 3: Prototype Playground (40 minutes)

**Goal:** Understand inheritance through hands-on experimentation

Build a simple inheritance hierarchy for different types of employees at a company, exploring how prototype-based inheritance works in practice.

<details><summary><strong>📋 Implementation Checklist</strong></summary>
**Phase 1: Base Constructor (10 min)**

- Create `Employee` constructor function
- Add shared methods to `Employee.prototype`
- Test creating basic employee instances


**Phase 2: Specialized Constructors (15 min)**

- Create `Developer` constructor that inherits from `Employee`
- Create `Manager` constructor that inherits from `Employee`
- Set up proper prototype chain for both


**Phase 3: Role-Specific Methods (10 min)**

- Add `code()` method to Developer prototype
- Add `manage()` method to Manager prototype
- Test that instances have access to both inherited and own methods


**Phase 4: ES6 Class Comparison (5 min)**

- Rewrite one constructor using ES6 class syntax
- Compare the two approaches
- Understand what classes are doing under the hood
</details>

<details><summary><strong>🏗️ Starter Code</strong></summary>

```javascript
// employee-system.js

// Base Employee constructor
function Employee(name, id, salary) {
  // TODO: Set instance properties
  this.name = name;
  this.id = id;
  this.salary = salary;
}

// TODO: Add shared methods to Employee prototype
Employee.prototype.introduce = function() {
  // TODO: Return introduction string
  // Example: "Hi, I'm John (ID: 123)"
};

Employee.prototype.getAnnualSalary = function() {
  // TODO: Return annual salary calculation
};

// Developer constructor
function Developer(name, id, salary, programmingLanguages) {
  // TODO: Call parent constructor
  // TODO: Set developer-specific properties
  this.programmingLanguages = programmingLanguages || [];
}

// TODO: Set up inheritance - Developer inherits from Employee
// Hint: Developer.prototype = Object.create(Employee.prototype);
// Don't forget: Developer.prototype.constructor = Developer;

// TODO: Add Developer-specific methods
Developer.prototype.code = function() {
  // TODO: Return coding activity string
  // Example: "John is coding in JavaScript, Python"
};

Developer.prototype.addLanguage = function(language) {
  // TODO: Add new programming language to the list
};

// Manager constructor  
function Manager(name, id, salary, teamSize) {
  // TODO: Call parent constructor
  // TODO: Set manager-specific properties
}

// TODO: Set up inheritance - Manager inherits from Employee

// TODO: Add Manager-specific methods
Manager.prototype.manage = function() {
  // TODO: Return management activity string
};

Manager.prototype.hire = function() {
  // TODO: Increase team size
};

// ES6 Class version for comparison
class ModernEmployee {
  constructor(name, id, salary) {
    // TODO: Implement using class syntax
  }
  
  introduce() {
    // TODO: Same functionality as prototype version
  }
}

// Test HTML
const testHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Prototype Inheritance Test</title>
</head>
<body>
    <h1>Employee Prototype System</h1>
    <p>Check console for test results</p>
    <script src="employee-system.js"></script>
</body>
</html>
`;
```
</details>

<details><summary><strong>✅ Self-Check Tests</strong></summary>

```javascript
// Prototype Inheritance Test Suite
console.log('👥 Testing Employee Prototype System...\n');

// Test 1: Basic Employee creation
const emp = new Employee('Alice', 101, 50000);
console.assert(emp.name === 'Alice', '❌ Test 1 Failed: Employee name');
console.assert(emp.introduce().includes('Alice'), '❌ Test 1 Failed: Employee introduce');
console.log('✅ Test 1 Passed: Basic Employee functionality');

// Test 2: Developer inheritance
const dev = new Developer('Bob', 102, 70000, ['JavaScript', 'Python']);
console.assert(dev.name === 'Bob', '❌ Test 2 Failed: Developer inherits name');
console.assert(dev.introduce().includes('Bob'), '❌ Test 2 Failed: Developer inherits introduce');
console.assert(dev.code().includes('JavaScript'), '❌ Test 2 Failed: Developer code method');
console.log('✅ Test 2 Passed: Developer inheritance and methods');

// Test 3: Manager inheritance
const mgr = new Manager('Carol', 103, 80000, 5);
console.assert(mgr.introduce().includes('Carol'), '❌ Test 3 Failed: Manager inherits introduce');
console.assert(mgr.manage().includes('team'), '❌ Test 3 Failed: Manager manage method');
console.log('✅ Test 3 Passed: Manager inheritance and methods');

// Test 4: Prototype chain verification
console.assert(dev instanceof Developer, '❌ Test 4 Failed: Developer instanceof');
console.assert(dev instanceof Employee, '❌ Test 4 Failed: Developer inherits from Employee');
console.assert(mgr instanceof Manager, '❌ Test 4 Failed: Manager instanceof');
console.assert(mgr instanceof Employee, '❌ Test 4 Failed: Manager inherits from Employee');
console.log('✅ Test 4 Passed: Prototype chain correctly established');

// Test 5: Method resolution
console.assert(dev.hasOwnProperty('programmingLanguages'), '❌ Test 5 Failed: Own property');
console.assert(!dev.hasOwnProperty('introduce'), '❌ Test 5 Failed: Inherited method');
console.assert(dev.__proto__ === Developer.prototype, '❌ Test 5 Failed: Prototype reference');
console.log('✅ Test 5 Passed: Method resolution and prototype chain');

// Test 6: Prototype exploration
console.log('\n🔍 Prototype Chain Exploration:');
console.log('Developer prototype chain:', Object.getPrototypeOf(dev).constructor.name);
console.log('Employee prototype chain:', Object.getPrototypeOf(Object.getPrototypeOf(dev)).constructor.name);
console.log('Object prototype chain:', Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(dev))).constructor.name);

console.log('\n🎉 All prototype tests completed!');
```

**Understanding Questions:**
1. What happens when you call `dev.introduce()`? Where does JavaScript find this method?
2. How is `Developer.prototype` connected to `Employee.prototype`?
3. What's the difference between `__proto__` and `prototype`?
4. How does the ES6 class syntax relate to what you built with functions?
</details>

### Activity 4: ES6+ Refactoring Challenge (45 minutes)

**Goal:** Modernize legacy JavaScript code
Take a piece of older JavaScript code and refactor it using modern ES6+ features. This simulates the type of code modernization you might do in a real job.

<details><summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: Variable Declarations (10 min)**
- Replace `var` with `let` and `const` appropriately
- Fix any scope-related issues that arise
- Understand block scoping differences

**Phase 2: Function Modernization (15 min)**
- Convert appropriate functions to arrow functions
- Use template literals instead of string concatenation
- Add default parameters where beneficial

**Phase 3: Object and Array Improvements (15 min)**
- Apply destructuring to simplify variable assignments
- Use spread operator for array/object operations
- Implement enhanced object literal syntax

**Phase 4: Module Organization (5 min)**
- Break code into modules with import/export
- Organize related functionality together
- Test that modules work correctly
</details>

<details><summary><strong>🏗️ Legacy Code to Refactor</strong></summary>

```javascript
// legacy-todo-app.js - BEFORE (ES5 Style)
var TodoApp = function() {
  var todos = [];
  var nextId = 1;
  var filter = 'all';
  
  var createTodo = function(text, priority) {
    if (!text) {
      text = 'New Todo';
    }
    if (!priority) {
      priority = 'medium';
    }
    
    var todo = {
      id: nextId++,
      text: text,
      completed: false,
      priority: priority,
      createdAt: new Date()
    };
    
    todos.push(todo);
    return todo;
  };
  
  var toggleTodo = function(id) {
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].completed = !todos[i].completed;
        break;
      }
    }
  };
  
  var deleteTodo = function(id) {
    var newTodos = [];
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        newTodos.push(todos[i]);
      }
    }
    todos = newTodos;
  };
  
  var getFilteredTodos = function() {
    var filtered = [];
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
      if (filter === 'all') {
        filtered.push(todo);
      } else if (filter === 'active' && !todo.completed) {
        filtered.push(todo);
      } else if (filter === 'completed' && todo.completed) {
        filtered.push(todo);
      }
    }
    return filtered;
  };
  
  var renderTodo = function(todo) {
    var status = todo.completed ? 'completed' : 'active';
    var priorityClass = 'priority-' + todo.priority;
    
    return '<div class="todo ' + status + ' ' + priorityClass + '">' +
           '<input type="checkbox" ' + (todo.completed ? 'checked' : '') + '>' +
           '<span>' + todo.text + '</span>' +
           '<button class="delete">Delete</button>' +
           '</div>';
  };
  
  var getStats = function() {
    var total = todos.length;
    var completed = 0;
    var active = 0;
    
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].completed) {
        completed++;
      } else {
        active++;
      }
    }
    
    return {
      total: total,
      completed: completed,
      active: active
    };
  };
  
  // Public API
  return {
    createTodo: createTodo,
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
    getFilteredTodos: getFilteredTodos,
    renderTodo: renderTodo,
    getStats: getStats,
    setFilter: function(newFilter) {
      filter = newFilter;
    }
  };
};

// Usage example (also needs refactoring)
var app = new TodoApp();
app.createTodo('Learn JavaScript', 'high');
app.createTodo('Build a project', 'medium');
var stats = app.getStats();
console.log('Total todos: ' + stats.total + ', Active: ' + stats.active);
```

**Your Mission:** Refactor this code using modern ES6+ features while maintaining the same functionality.
</details>

<details><summary><strong>✅ Refactoring Checklist & Examples</strong></summary>
  
**Variable Declarations:**

```javascript
// BEFORE
var todos = [];
var nextId = 1;

// AFTER  
const todos = [];
let nextId = 1;
```

**Arrow Functions & Template Literals:**

```javascript
// BEFORE
var renderTodo = function(todo) {
  return '<div class="todo">' + todo.text + '</div>';
};

// AFTER
const renderTodo = (todo) => {
  return `<div class="todo ${todo.completed ? 'completed' : 'active'}">
    ${todo.text}
  </div>`;
};
```

**Default Parameters:**

```javascript
// BEFORE
var createTodo = function(text, priority) {
  if (!text) text = 'New Todo';
  if (!priority) priority = 'medium';
};

// AFTER
const createTodo = (text = 'New Todo', priority = 'medium') => {
  // Implementation here
};
```

**Destructuring:**

```javascript
// BEFORE
var stats = app.getStats();
console.log('Total: ' + stats.total + ', Active: ' + stats.active);

// AFTER
const { total, active, completed } = app.getStats();
console.log(`Total: ${total}, Active: ${active}`);
```

**Array Methods Instead of Loops:**

```javascript
// BEFORE
var getFilteredTodos = function() {
  var filtered = [];
  for (var i = 0; i < todos.length; i++) {
    if (filter === 'active' && !todos[i].completed) {
      filtered.push(todos[i]);
    }
  }
  return filtered;
};

// AFTER
const getFilteredTodos = () => {
  return todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
  });
};
```

**Enhanced Object Literals:**

```javascript
// BEFORE
return {
  createTodo: createTodo,
  toggleTodo: toggleTodo,
  deleteTodo: deleteTodo
};

// AFTER
return {
  createTodo,
  toggleTodo,
  deleteTodo
};
```

**Success Criteria:**
- No `var` declarations remain
- String concatenation replaced with template literals
- At least 3 functions converted to arrow functions
- Default parameters used appropriately
- Destructuring applied in at least 2 places
- Array methods replace manual loops
- Enhanced object literal syntax used
- Code is more readable and concise

</details>

### Activity 5: Integration Challenge (30 minutes)

**Goal:** Combine all concepts in a mini-project
Build a small task management system that uses closures for data privacy, prototypes for inheritance, and ES6+ features for clean, modern code.

<details><summary><strong>📋 Implementation Checklist</strong></summary>

**Phase 1: Task System Design (10 min)**
- Create `TaskManager` using closure pattern for private data
- Implement basic task CRUD operations
- Use ES6+ features throughout

**Phase 2: Task Categories (10 min)**
- Create `Task` base constructor with prototype methods
- Create `WorkTask` and `PersonalTask` that inherit from `Task`
- Add category-specific behaviors

**Phase 3: Integration & Testing (10 min)**
- Combine TaskManager with Task inheritance
- Test all functionality works together
- Verify data privacy and inheritance work correctly

</details>

<details><summary><strong>🏗️ Project Starter</strong></summary>

```javascript
// task-management-system.js

// Task Manager using Closure Pattern
const createTaskManager = () => {
  // TODO: Private variables for tasks, categories, nextId
  let tasks = [];
  let nextId = 1;
  const categories = new Set(['work', 'personal', 'shopping']);
  
  return {
    // TODO: Implement these methods using ES6+ features
    addTask: (text, category = 'personal', priority = 'medium') => {
      // Use Task constructors, destructuring, default parameters
    },
    
    removeTask: (id) => {
      // Use array methods instead of loops
    },
    
    getTasksByCategory: (category) => {
      // Use filter and arrow functions
    },
    
    getTaskStats: () => {
      // Return object with destructuring-friendly format
    },
    
    // TODO: Add more methods as needed
  };
};

// Base Task Constructor (Prototype Pattern)
function Task(text, category, priority) {
  // TODO: Set instance properties
  this.id = null; // Will be set by TaskManager
  this.text = text;
  this.category = category;
  this.priority = priority;
  this.completed = false;
  this.createdAt = new Date();
}

// TODO: Add shared methods to Task prototype
Task.prototype.toggle = function() {
  // Toggle completion status
};

Task.prototype.getAge = function() {
  // Return how many days old the task is
};

Task.prototype.toString = function() {
  // Return formatted string representation
};

// Work Task (Inherits from Task)
function WorkTask(text, priority, project) {
  // TODO: Call parent constructor
  Task.call(this, text, 'work', priority);
  this.project = project || 'General';
}

// TODO: Set up inheritance
WorkTask.prototype = Object.create(Task.prototype);
WorkTask.prototype.constructor = WorkTask;

// TODO: Add work-specific methods
WorkTask.prototype.assignToProject = function(project) {
  // Assign task to a project
};

// Personal Task (Inherits from Task)  
function PersonalTask(text, priority, location) {
  // TODO: Call parent constructor and set location
}

// TODO: Set up inheritance for PersonalTask

// TODO: Add personal-specific methods

// ES6 Class version for comparison
class ModernTask {
  constructor(text, category = 'personal', priority = 'medium') {
    // TODO: Implement using class syntax
  }
  
  toggle() {
    // TODO: Same functionality as prototype version
  }
}

// Integration Example
const taskManager = createTaskManager();
// TODO: Create some tasks and test the system
```
</details>

<details><summary><strong>✅ Integration Tests</strong></summary>

```javascript
// Comprehensive Integration Test Suite
console.log('📋 Testing Task Management System Integration...\n');

// Test 1: Task Manager Creation (Closures)
const manager = createTaskManager();
console.assert(typeof manager.addTask === 'function', '❌ Test 1 Failed: TaskManager creation');
console.log('✅ Test 1 Passed: TaskManager created with closure pattern');

// Test 2: Basic Task Operations (ES6+ Features)
manager.addTask('Complete project', 'work', 'high');
manager.addTask('Buy groceries'); // Test default parameters
const stats = manager.getTaskStats();
console.assert(stats.total === 2, '❌ Test 2 Failed: Task addition');
console.log('✅ Test 2 Passed: Basic task operations with ES6+ features');

// Test 3: Task Inheritance (Prototypes)
const workTask = new WorkTask('Review code', 'high', 'WebApp');
const personalTask = new PersonalTask('Doctor appointment', 'medium', 'Downtown');

console.assert(workTask instanceof WorkTask, '❌ Test 3 Failed: WorkTask instanceof');
console.assert(workTask instanceof Task, '❌ Test 3 Failed: WorkTask inherits from Task');
console.assert(personalTask instanceof PersonalTask, '❌ Test 3 Failed: PersonalTask instanceof');
console.assert(personalTask instanceof Task, '❌ Test 3 Failed: PersonalTask inherits from Task');
console.log('✅ Test 3 Passed: Task inheritance working correctly');

// Test 4: Method Resolution (Prototype Chain)
workTask.toggle(); // Inherited method
console.assert(workTask.completed === true, '❌ Test 4 Failed: Inherited method call');
console.assert(workTask.project === 'WebApp', '❌ Test 4 Failed: Own property access');
console.log('✅ Test 4 Passed: Method resolution through prototype chain');

// Test 5: Data Privacy (Closures)
console.assert(manager.tasks === undefined, '❌ Test 5 Failed: Private data exposed');
console.assert(typeof manager.getTaskStats === 'function', '❌ Test 5 Failed: Public method missing');
console.log('✅ Test 5 Passed: Data privacy maintained with closures');

// Test 6: Modern JavaScript Features
const { total, completed, active } = manager.getTaskStats(); // Destructuring
console.assert(typeof total === 'number', '❌ Test 6 Failed: Destructuring support');

// Template literals test
const taskSummary = `Total: ${total}, Active: ${active}`;
console.assert(taskSummary.includes('Total:'), '❌ Test 6 Failed: Template literals');
console.log('✅ Test 6 Passed: Modern JavaScript features integrated');

// Test 7: Full Integration
manager.addTask('Learn React', 'work', 'high');
const workTasks = manager.getTasksByCategory('work');
console.assert(workTasks.length >= 1, '❌ Test 7 Failed: Category filtering');
console.log('✅ Test 7 Passed: Full system integration working');

console.log('\n🎉 All integration tests passed!');
console.log('\n📊 Final System State:');
console.log('Task Stats:', manager.getTaskStats());
console.log('Work Tasks:', manager.getTasksByCategory('work').length);
console.log('Personal Tasks:', manager.getTasksByCategory('personal').length);
```

**Challenge Extensions:**
1. Add task due dates with automatic overdue detection
2. Implement task search functionality using modern array methods
3. Create a `PriorityTask` class that extends the base Task
4. Add task dependencies (one task blocks another)
5. Implement task export/import using JSON and modern syntax
</details>

## Additional External Resources

### Closures Deep Dive
- [MDN Closures Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) - Comprehensive technical reference with examples
- [JavaScript.info Closures](https://javascript.info/closure) - Beginner-friendly explanations with interactive examples
- [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md) - Free online book chapter diving deep into closures

### Prototypes and Inheritance
- [MDN Object Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) - Clear explanation of prototype-based inheritance
- [JavaScript.info Prototypes](https://javascript.info/prototypes) - Step-by-step guide to understanding the prototype chain
- [Eloquent JavaScript - Objects](https://eloquentjavascript.net/06_object.html) - Chapter on objects and prototypes from this excellent free book

### ES6+ Features
- [ES6 Features Overview](http://es6-features.org/) - Interactive examples of all major ES6 features
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) - Complete reference for all JavaScript features
- [Babel Learn ES2015](https://babeljs.io/docs/en/learn) - Practical guide to ES6+ features with before/after examples
- [JavaScript.info Modern JavaScript](https://javascript.info/) - Comprehensive tutorial covering modern JavaScript from basics to advanced
- [Code this, not that](https://www.youtube.com/watch?v=Mus_vwhTCq0) - a 13min YouTube video containing some power tips, leveraging a lot of nice ES2015 features

### Practice and Challenges
- [JavaScript30](https://javascript30.com/) - 30 vanilla JavaScript projects to practice modern JavaScript
- [Exercism JavaScript Track](https://exercism.org/tracks/javascript) - Coding exercises with mentor feedback
- [Codewars JavaScript Katas](https://www.codewars.com/kata/search/javascript) - Programming challenges focusing on JavaScript-specific concepts

### Career-Focused Resources
- [Frontend Masters JavaScript Path](https://frontendmasters.com/learn/javascript/) - Professional-level courses on JavaScript fundamentals and advanced topics
- [JavaScript Interview Questions](https://github.com/sudheerj/javascript-interview-questions) - Common interview questions covering these advanced concepts
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) - Best practices for writing maintainable JavaScript code
