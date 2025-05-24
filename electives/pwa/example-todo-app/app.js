// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Initialize todos from localStorage or empty array
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <div class="todo-actions">
                <button onclick="toggleTodo(${index})" class="toggle-btn">
                    ${todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button onclick="deleteTodo(${index})" class="delete-btn">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
    saveTodos();
}

// Add new todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push({
            text: todoText,
            completed: false
        });
        todoInput.value = '';
        renderTodos();
    }
});

// Toggle todo completion
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Delete todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Request notification permission
function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission();
    }
}

// Show notification
function showNotification(title, options = {}) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, options);
    }
}

// Initialize
renderTodos();
requestNotificationPermission(); 