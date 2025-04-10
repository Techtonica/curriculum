# Redux for State Management

## Prerequisites
- [JavaScript Fundamentals](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-1-variables.md)
- [React Basics](https://github.com/Techtonica/curriculum/blob/main/react-js/react-part-1-intro.md)
- [ES6 Features](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-7-oop.md)
- [Asynchronous Programming](https://github.com/Techtonica/curriculum/blob/main/javascript/javascript-9-async.md)

## Table of Contents
- [Objectives](#objectives)
- [Motivation](#motivation)
- [Specific Things to Learn](#specific-things-to-learn)
- [Lesson Activities](#lesson-activities)
   - [Activity 1: Understanding Redux Core Concepts](#activity-1-understanding-redux-core-concepts-30-minutes)
   - [Activity 2: Building a Counter with Redux](#activity-2-building-a-counter-with-redux-45-minutes)
   - [Activity 3: Redux DevTools Exploration](#activity-3-redux-devtools-exploration-20-minutes)
   - [Activity 4: Todo App with Redux](#activity-4-todo-app-with-redux-60-minutes)
   - [Activity 5: Async Operations with Redux Thunk](#activity-5-async-operations-with-redux-thunk-45-minutes)
   - [Activity 6: Modern Redux with Redux Toolkit](#activity-6-modern-redux-with-redux-toolkit-60-minutes)
- [Common Mistakes / Misconceptions](#common-mistakes--misconceptions)

## Objectives

By the end of this lesson, you should be able to:
1. Understand the core concepts of Redux
2. Implement Redux in a React application
3. Manage complex application state using Redux
4. Debug Redux applications effectively
5. Use Redux Toolkit for modern Redux development


## Motivation

State management becomes increasingly complex as applications grow. Redux provides a predictable state container that makes state changes transparent and debuggable. Companies like Twitter, Instagram, and Airbnb use Redux to manage their application state.

### Real-world Application

- Single source of truth for large applications
- Predictable state updates
- Debugging capabilities with time-travel
- Middleware for handling side effects
- Consistent behavior across different environments


## Specific Things to Learn

1. **Redux Core Concepts**
   - Store
   - Actions
   - Reducers
   - Dispatch
   - Selectors

2. **Redux Flow**
   - One-way data flow
   - Immutability principles
   - Pure functions

3. **Redux with React**
   - React-Redux library
   - `useSelector` and `useDispatch` hooks
   - `Provider` component

4. **Redux Middleware**
   - Redux Thunk for async operations
   - Middleware chain

5. **Redux DevTools**
   - Time-travel debugging
   - Action inspection
   - State diff viewing

6. **Redux Toolkit**
   - `createSlice`
   - `configureStore`
   - `createAsyncThunk`

## Lesson Activities

### Activity 1: Understanding Redux Core Concepts (30 minutes)

Interactive diagram exploration of Redux flow with explanations of each component.

```javascript 
// Redux Flow Demonstration

// 1. Initial State
console.log("1. Initial State");
const initialState = {
  counter: 0,
  todos: []
};
console.log(initialState);

// 2. Action Creators
console.log("\n2. Action Creators");
const incrementAction = () => ({ type: 'INCREMENT' });
const addTodoAction = (text) => ({ 
  type: 'ADD_TODO', 
  payload: { id: Date.now(), text, completed: false } 
});

console.log("Increment Action:", incrementAction());
console.log("Add Todo Action:", addTodoAction("Learn Redux"));

// 3. Reducers (Pure Functions)
console.log("\n3. Reducers");
function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.payload 
          ? { ...todo, completed: !todo.completed } 
          : todo
      );
    default:
      return state;
  }
}

console.log("Counter after INCREMENT:", counterReducer(0, incrementAction()));
console.log("Todos after ADD_TODO:", todosReducer([], addTodoAction("Learn Redux")));

// 4. Store Simulation
console.log("\n4. Store Simulation");
let state = {
  counter: counterReducer(undefined, { type: '@@INIT' }),
  todos: todosReducer(undefined, { type: '@@INIT' })
};

console.log("Initial Store State:", state);

// 5. Dispatch Simulation
console.log("\n5. Dispatch Simulation");
function dispatch(action) {
  console.log("Dispatching action:", action);
  state = {
    counter: counterReducer(state.counter, action),
    todos: todosReducer(state.todos, action)
  };
  console.log("New state:", state);
  return action;
}

// Simulate dispatching actions
dispatch(incrementAction());
dispatch(incrementAction());
dispatch(addTodoAction("Learn Redux"));
dispatch(addTodoAction("Build a Redux App"));
dispatch({ type: 'TOGGLE_TODO', payload: state.todos[0].id });

console.log("\nFinal State:", state);
```

### Activity 2: Building a Counter with Redux (45 minutes)

Create a simple counter application using Redux and React.

```javascript
import React from 'react'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

// 1. Define the initial state
const initialState = { count: 0 }

// 2. Create a reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

// 3. Create the Redux store
const store = createStore(
  counterReducer,
  // Enable Redux DevTools Extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// 4. Counter component using hooks
function Counter() {
  // Get state from Redux store
  const count = useSelector(state => state.count)
  // Get the dispatch function
  const dispatch = useDispatch()

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Redux Counter</h1>
      <div className="text-6xl font-bold text-blue-500">{count}</div>
      <div className="flex space-x-3">
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Open Redux DevTools to see state changes
      </div>
    </div>
  )
}

// 5. App component with Provider
export default function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Counter />
      </div>
    </Provider>
  )
}
```

### Activity 3: Redux DevTools Exploration (20 minutes)

Learn how to use Redux DevTools for debugging and time-travel debugging.

❌ VISUAL HERE ❌

### Activity 4: Todo App with Redux (60 minutes)

Build a more complex todo application with filtering capabilities.

```javascript
import React, { useState } from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

// Action Types
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_FILTER = 'SET_FILTER'

// Filter Constants
const FILTERS = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED'
}

// Action Creators
const addTodo = text => ({
  type: ADD_TODO,
  payload: { id: Date.now(), text, completed: false }
})

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
})

const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
})

// Reducers
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

const filterReducer = (state = FILTERS.ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload
    default:
      return state
  }
}

// Root Reducer
const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})

// Store
const store = createStore(rootReducer)

// TodoItem Component
const TodoItem = ({ todo, onToggle }) => (
  <li 
    className={`p-3 border-b flex items-center ${todo.completed ? 'bg-gray-100' : ''}`}
    onClick={onToggle}
  >
    <input 
      type="checkbox" 
      checked={todo.completed} 
      onChange={onToggle}
      className="mr-3"
    />
    <span className={todo.completed ? 'line-through text-gray-500' : ''}>
      {todo.text}
    </span>
  </li>
)

// FilterButton Component
const FilterButton = ({ filter, currentFilter, onClick }) => (
  <button
    onClick={() => onClick(filter)}
    className={`px-3 py-1 rounded ${
      currentFilter === filter 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
  >
    {filter}
  </button>
)

// TodoApp Component
function TodoApp() {
  const [newTodo, setNewTodo] = useState('')
  const todos = useSelector(state => state.todos)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleAddTodo = e => {
    e.preventDefault()
    if (!newTodo.trim()) return
    dispatch(addTodo(newTodo))
    setNewTodo('')
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === FILTERS.ALL) return true
    if (filter === FILTERS.ACTIVE) return !todo.completed
    if (filter === FILTERS.COMPLETED) return todo.completed
    return true
  })

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Redux Todo App</h1>
      
      <form onSubmit={handleAddTodo} className="mb-6 flex">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      
      <div className="flex justify-center space-x-2 mb-4">
        {Object.values(FILTERS).map(filterValue => (
          <FilterButton
            key={filterValue}
            filter={filterValue}
            currentFilter={filter}
            onClick={filterValue => dispatch(setFilter(filterValue))}
          />
        ))}
      </div>
      
      <ul className="border rounded divide-y">
        {filteredTodos.length === 0 ? (
          <li className="p-4 text-center text-gray-500">No todos found</li>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => dispatch(toggleTodo(todo.id))}
            />
          ))
        )}
      </ul>
      
      <div className="mt-4 text-sm text-gray-600 text-center">
        {todos.length} total todos • {todos.filter(t => !t.completed).length} active
      </div>
    </div>
  )
}

// App Component with Provider
export default function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <TodoApp />
      </div>
    </Provider>
  )
}
```

### Activity 5: Async Operations with Redux Thunk (45 minutes)

Learn how to handle asynchronous operations in Redux using Redux Thunk middleware.

```javascript
import React, { useEffect } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import thunk from 'redux-thunk'

// Action Types
const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

// Initial State
const initialState = {
  posts: [],
  loading: false,
  error: null
}

// Action Creators
const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST })
const fetchPostsSuccess = posts => ({ type: FETCH_POSTS_SUCCESS, payload: posts })
const fetchPostsFailure = error => ({ type: FETCH_POSTS_FAILURE, payload: error })

// Thunk Action Creator
const fetchPosts = () => {
  return async dispatch => {
    dispatch(fetchPostsRequest())
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const data = await response.json()
      dispatch(fetchPostsSuccess(data))
    } catch (error) {
      dispatch(fetchPostsFailure(error.message))
    }
  }
}

// Reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload }
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

// Root Reducer
const rootReducer = combineReducers({
  posts: postsReducer
})

// Store with Thunk Middleware
const store = createStore(rootReducer, applyMiddleware(thunk))

// Posts Component
function Posts() {
  const { posts, loading, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>Error: {error}</p>
        <button 
          onClick={() => dispatch(fetchPosts())}
          className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts from API</h2>
      <button 
        onClick={() => dispatch(fetchPosts())}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Refresh Posts
      </button>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded shadow-sm">
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// App Component with Provider
export default function App() {
  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Redux Thunk Example</h1>
        <Posts />
      </div>
    </Provider>
  )
}
```

### Activity 6: Modern Redux with Redux Toolkit (60 minutes)

Learn how to use Redux Toolkit to simplify Redux development.

```javascript
import React, { useState, useEffect } from 'react'
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Provider, useSelector, useDispatch } from 'react-redux'

// Async thunk for fetching todos
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return response.json()
  }
)

// Create a slice for todos
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    // Standard reducer logic with auto-generated action creators
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload,
        completed: false
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add fetched todos to the state
        state.items = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// Extract action creators and reducer
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions

// Configure the store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
})

// TodoItem Component
const TodoItem = ({ todo, onToggle, onRemove }) => (
  <li className="flex items-center justify-between p-3 border-b">
    <div className="flex items-center">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={onToggle}
        className="mr-3"
      />
      <span className={todo.completed ? 'line-through text-gray-500' : ''}>
        {todo.title}
      </span>
    </div>
    <button 
      onClick={onRemove}
      className="text-red-500 hover:text-red-700"
    >
      ×
    </button>
  </li>
)

// TodoApp Component
function TodoApp() {
  const [newTodo, setNewTodo] = useState('')
  const { items: todos, status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos())
    }
  }, [status, dispatch])

  const handleAddTodo = e => {
    e.preventDefault()
    if (!newTodo.trim()) return
    dispatch(addTodo(newTodo))
    setNewTodo('')
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Redux Toolkit Todo App</h1>
      
      <form onSubmit={handleAddTodo} className="mb-6 flex">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      
      {status === 'loading' && (
        <div className="flex justify-center my-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {status === 'failed' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>Error: {error}</p>
          <button 
            onClick={() => dispatch(fetchTodos())}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      )}
      
      <ul className="border rounded divide-y">
        {todos.length === 0 && status !== 'loading' ? (
          <li className="p-4 text-center text-gray-500">No todos found</li>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => dispatch(toggleTodo(todo.id))}
              onRemove={() => dispatch(removeTodo(todo.id))}
            />
          ))
        )}
      </ul>
      
      <div className="mt-4 text-sm text-gray-600 text-center">
        {todos.length} total todos • {todos.filter(t => !t.completed).length} active
      </div>
    </div>
  )
}

// App Component with Provider
export default function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <TodoApp />
      </div>
    </Provider>
  )
}
```

## Common Mistakes / Misconceptions

### 1. Overusing Redux

**Misconception**: "I need Redux for every React application." \
**Reality**: Not every application needs Redux. For simpler applications, React's Context API and useReducer hook might be sufficient.

### 2. Mutating State

**Misconception**: "I can directly modify the state in reducers." \
**Reality**: Redux requires immutable state updates. Always create new objects/arrays instead of modifying existing ones.

```javascript
// WRONG
const reducer = (state, action) => {
  state.count += 1; // Mutating state directly!
  return state;
};

// CORRECT
const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1 // Creating a new state object
  };
};
```

### 3. Putting Everything in Redux

**Misconception**: "All state should go in Redux." \
**Reality**: Local component state is still useful for UI-specific state that doesn't need to be shared.

### 4. Complex Action Creators

**Misconception**: "Action creators need to be complex." \
**Reality**: Action creators should be simple functions that return action objects. Use middleware like Redux Thunk for complex logic.

### 5. Not Using Redux DevTools

**Misconception**: "console.log is enough for debugging Redux." \
**Reality**: Redux DevTools provides powerful debugging capabilities like time-travel debugging and action inspection.

### 6. Ignoring Selectors

**Misconception**: "I can access state directly in components." \
**Reality**: Selectors help encapsulate state structure and make components more maintainable.

```javascript
// BETTER APPROACH
// Define a selector
const selectCompletedTodos = state => state.todos.filter(todo => todo.completed);

// Use in component
const completedTodos = useSelector(selectCompletedTodos);
```

### 7. Not Using Redux Toolkit

**Misconception**: "Redux requires a lot of boilerplate code." \
**Reality**: Redux Toolkit significantly reduces boilerplate and follows best practices automatically.
