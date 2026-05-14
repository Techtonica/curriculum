# React Part 5 - Full Apps Using React and Vite

> **_NOTE:_** Create React App has been deprecated. This lesson uses Vite, which is the recommended local setup for Techtonica React projects.

## Projected Time

- 6 hours

### Prerequisites

- [Intro to React](./react-part-1-intro.md)
- [React Props](./react-part-2-props.md)
- [React State](./react-part-3-state.md)
- [React Components & Hierarchies](./react-part-4-component-hierarchies.md)
- [Starting Locally with React using Vite](https://github.com/Techtonica/curriculum/blob/main/react-js/react-local-vite.md)

### Motivation

Until now, we've been using simple React development setups that are good for learning. Real apps usually need a few more development features, so for your eventual final project you'll want to use React with Vite. Vite generates a starter React project so you can begin writing your own code without setting up every moving part by hand.

#### Benefits

- **👀 Live reload!** When you save a change to a file, it will almost instantly update in your browser. No more need to hit Cmd+R to reload the page
- You can organize your React components and CSS any way you want and consistently use `import` to refer to them (no more confusion about `require` vs `import`)
- Quickly add npm packages using `npm install`
- Lots of help available through the official Vite and React docs, plus community questions from other developers using the same toolchain.

### Objectives

The important areas you should leave this lesson knowing.

- How does React with Vite compare to what we've been using so far?
- Why do modern React projects use tools like Vite?
- The basic files generated and what each one does, e.g. `index.html`, `src/App.jsx`, and `src/App.css`
- How to add an npm package to an existing React + Vite app

### Lesson

Vite is a build tool and development server. It gives you a fast local workflow for modern frontend projects, including React apps.

```sh
npm create vite@latest my-fun-app -- --template react
cd my-fun-app
npm install
npm run dev
```

Since one of Vite's main benefits is that you do not need to configure a React build system yourself, we will focus on trying it out through guided practice. There are links below if you want to learn more about how it works.

### Why Vite?

Vite is fast, widely used, and works well with modern React projects. It gives you:

- A local development server that starts quickly
- Hot Module Replacement (HMR), so saved changes appear in the browser almost immediately
- A simple file structure for React components, styles, and assets
- A production build command you can use when you are ready to deploy

### Common Mistakes & Misconceptions

- React + Vite is only for toy apps and _real engineers_ set up React from scratch
  - Actually, many professional projects use Vite, Next.js, or another starting point template when beginning applications. Even if you customize the app later, a starter tool is a good beginning for many projects and **it will not make your portfolio project seem amateur to use it**.
- You **must** use Vite to build React apps
  - Not true, but it is strongly recommended you build experience using Vite first before trying to build React tooling yourself. Many companies create customized setups so they have full control over the application, but that is not the best first step for learning React.

## Guided Practice

Let's setup a small app.

- `npm create vite@latest todo-vite -- --template react`
- `cd todo-vite`
- `npm install`
- `npm run dev`

The terminal should print a local URL, usually `http://localhost:5173/`. Open that URL in your browser and you should see the Vite starter page.

- `code .` to open the generated project in your editor
- Find `App.jsx` in the `src` folder
- Change the contents to: `<p>Hello Techtonica!</p>` and save
- The browser should live update automatically 🥳

### Folder Structure

Review the existing files in the generated project.

The most important files are

1. `src/App.css` - all the styles for your React components
1. `index.html` - the HTML page Vite serves, including the `root` element where React mounts
1. `src/main.jsx` - connects React to the page
1. `src/App.jsx` - your root React component

#### `App.css`

Change the color of the "Learn React" link to `#b36ff6` or another color you like on https://colors.lol/. Changes to CSS will live update as well.

#### `index.html`

- Change the page title to "TODO"
- Find a nice favicon on https://www.flaticon.com/
- Make this the new favicon

Now let's add the main application logic to `App.jsx`. We'll keep everything in one file for now but as your app grows, you probably want to split components to their own files.

### Starter Components

```jsx
// App.jsx
import { useState } from 'react';

const App = () => {
  // Declare a new state variable, which we'll call "todo"
  const [todos, setTodos] = useState([
    { text: 'Walk dog' },
    { text: 'Feed cat' }
  ]);
  return (
   // ...
  );
};

export default App;
```

- First, import the `useState` Hook from React. _A Hook is a special function that lets you “hook into” React features_.
- Inside the `App` component, You declare a new state variable by calling `useState` Hook. it returns a pair of values, to which we give names. We’re calling our variable todos because it holds array of todos object. The second returned item is itself a function. It lets us update the `todos` so we’ll name it `setTodos`.

You will want to create a component that you can use later on in the return of the main `App` component. You will call that `Todo` and it will pass in the `todo` and show the `text` part of the todo `(todo.text)`.

```jsx
// Todo.js
const Todo = ({ todo }) => {
  return <div className="todo">{todo.text}</div>;
};

export default Todo;
```

In `App` component you need to map over the `todos` items from state and displaying them by index. Don't forget to import `Todo` component

```jsx
function App() {
  // ...

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
```

Open your application in a web browser. There will be two to-do items displayed.

#### Adding isCompleted

Since this is a task app you want to mark tasks as complete. So let's change the shape of the todo data to include an `isCompleted` boolean.

```jsx
const App = () => {
  // Declare a new state variable, which we'll call "todo"
  const [todos, setTodos] = useState([
    { text: "Walk dog", isCompleted: false },
    { text: "Feed cat", isCompleted: false },
  ]);

  // ...
```

You will need a function for completeTodo, let call it as `toggleTodo`. This function is fairly simple. What you want to do is that when a user clicks on a todo text, you want to change the state of complete to true if it’s false or vice versa. We will use the second variable in our deconstructed useState array to do this.

```jsx
const App = () => {
  //...

  // completeTodo function
  const toggleTodo = (index) => {
    // use spread operator to grab the current list of items
    const newTodos = [...todos];
    // toggle isComplete
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    // setTodos to update that state.
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h2>My todos:</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
};
```

Now let's update the `<Todo/>` component to render `isCompleted` as a checkbox. For attributes see [MDN Checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

```jsx
const Todo = ({ todo, toggleTodo, index }) => {
  return (
    <div>
      <label htmlFor={`todo-${index}`}>
        <input
          id={`todo-${index}`}
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(index)}
        />
        {todo.text}
      </label>
    </div>
  );
};

export default Todo;
```

In React, input elements have an `onChange` prop that accepts a function called when the user modifies the input. See [handling events](https://reactjs.org/docs/handling-events.html) in the official docs.

Click the checkbox a few times. Inspect code on console, you will see the output like this:

```
todo =>
(2) [{…}, {…}]
0: {text: 'Walk dog', isCompleted: true}
1: {text: 'Feed cat', isCompleted: false}
length: 2
[[Prototype]]: Array(0)
App.jsx:16 todo =>
(2) [{…}, {…}]
0: {text: 'Walk dog', isCompleted: true}
1: {text: 'Feed cat', isCompleted: true}
length: 2
[[Prototype]]: Array(0)
```

This is because, as you probably remember, **React only re-renders when state changes**. It assumes props are read-only and do not change, even though as the above shows, you can modify them since JavaScript doesn't stop you. So we need to change the state, but state lives one level above `Todo` in `App`. Like we learned in Part 3, passing functions down to child components is a good strategy for handling this situation.

#### Deleting To-Do Items

Let’s add the functionality to delete an item on your to-do list when they are removed.

You will build the removeTodo function so that when you click on an `delete` to delete an item, the item will be deleted. That function will be located by the others underneath the state of the App component;

Don't forget to add `deleteTodo` in the `Todo` part of returning the App component:

```jsx
function App() {
  // ...

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    // ...
  )
}
```

In this `deleteTodo` function, you will again use the spread operator, but once you grab that current list, you will be splicing the chosen index off of the array of items. Once that is removed, you will return the new state by setting it with setTodos to be newTodos.

In your Todo function, you will want to add in a button to remove the to-do item:

```jsx
const Todo = ({ todo, toggleTodo, index, deleteTodo }) => {
  return (
    <div>
      <label htmlFor={`todo-${index}`}>
        <input
          id={`todo-${index}`}
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo(index)}
        />
        {todo.text}
        <button onClick={() => deleteTodo(index)}>delete</button>
      </label>
    </div>
  );
};
```

You can check out the completed project on [codepen](https://codepen.io/SupriyaRaj/pen/rNYVgyg?editors=1010).

### Independent Practice

With your daily pair, review each other's code from above and see if you can explain how each part is working. Add some `console.log` statements to verify your understanding.

Next, pair program add these features: Create Todo, Sorting.

#### Create Todo items

To create new todos, add an input form to a new component and call it as `TodoForm.js`.

Create a basic form that will allow for a user to input a task name, hit enter or click on a button, and have a function fire to add the task. For a form to work correctly we have to keep track of the changes as we go, so logically we have to handle what happens as the input changes.

**Form Logic**

There are four main things that we need to have to make our forms work:

- Local state (so we will need to employ the `useState()` hook)
- Our form component with an input value that is assigned to the correct variable
- A function that handles the state’s changes
- A function to handle the form submission

#### Sorting

First you need something to sort by so let's add a `createdAt` property to each item that will be a `Date` object.

```jsx
{
  text: "Walk dog",
  isCompleted: false,
  createdAt: new Date(),
},
```

Let's support two sort options: newest first(descending) or oldest first(ascending).

You can use the [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method of Array, to sort according to time and date.

```jsx
const [sortBy, setSortBy] = useState('asc');
//toggle function
const sortByTime = () => {
  setSortBy(sortBy === 'asc' ? 'dsc' : 'asc');
  const sortedTodos = [...todos];
  sortedTodos.sort((a, b) => {
    if (sortBy === 'asc') {
      return a.createdAt - b.createdAt;
    } else {
      return b.createdAt - a.createdAt;
    }
  });
  setTodos(sortedTodos);
};

// ....

return (
  <div className="app">
    <h2 className="header">My todos:</h2>
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}

      <div className="add-todo">
        <TodoForm addTodo={addTodo} />
      </div>
      <div className="sort">
        <button onClick={sortByTime}>Sort toggle by time</button>
      </div>
    </div>
  </div>
);
```

You can take a look at the complete code [here](https://github.com/priyaraj7/Techtonica-projects/tree/main/Todo-app). If you use older examples online, translate any outdated setup commands to the Vite commands from this lesson.

### Challenges

#### Style the Todo Items

If they are complete, style them to indicate that, perhaps by graying them out or using strikethrough.

#### Add styling to your project

If you haven't yet reviewed it, review the lesson on [React Styling](./styling-react.md).

Timebox yourself to whatever time you have left to style your app.

### Deploy your Todo App using GitHub Pages Hosting

Review [Deploying and Production-Ready](../deploying/deploying-and-production-ready.md) for current deployment guidance.

### Bored with the TODO Domain?

Try creating a Twitter (or X) clone app using this [bonus challenge assignment](/projects/react-tweeter.md).

### Supplemental Materials

- [Official Vite docs](https://vite.dev/guide/)
- [Quick Start beta](https://beta.reactjs.org/learn)
- [React (Prop Drilling, Lifecycle, & Functional Components) & React Testing](https://www.dropbox.com/scl/fi/lbaillm5j6tew8vyf0pr6/GMT20231010-211002_Recording_gallery_1920x1200.mp4?rlkey=3znebutbv84pinjxvpaugytea&dl=0)
