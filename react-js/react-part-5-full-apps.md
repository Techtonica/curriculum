# React Part 5 - Full Apps using `create-react-app` (CRA)

## Projected Time

- 6 hours

### Prerequisites

- [Intro to React](./react-part-1-intro.md)
- [React Props](./react-part-2-props.md)
- [React State](./react-part-3-state.md)
- [React Components & Hierarchies](./react-part-4-component-hierarchies.md)

### Motivation

Until now, we've been using simple React development setups good for learning. But real apps usually need a bit more features available, so for your eventual final project you'll want to use `create-react-app` (which we'll call CRA in this lesson), a tool that generates a template empty React project so you can just starting writing your own code and not worry about how to setup all the moving parts.

#### Benefits

- **👀 Live reload!** When you save a change to a file, it will almost instantly update in your browser. No more need to hit Cmd+R to reload the page
- You can organize your React components and CSS any way you want and consistently use `import` to refer to them (no more confusion about `require` vs `import`)
- Quickly add npm packages using `yarn add`
- Easily deploy to the cloud. You can use the `build` command to package all your code up
- Lots of help available on Stack Overflow. Because many users, especially beginner engineers, are using CRA, they have probably encountered the same problem as you and are posting about it!

### Objectives

The important areas you should leave this lesson knowing.

- How does `create-react-app` compare to what we've been using so far?
- The basic files generated and what each one does, e.g. index.html, App.js, App.css
- How to add an npm package to an existing CRA app

### Lesson

Its official tagline is:

> Set up a modern web app by running one command

CRA is an officially supported command-line tool (CLI) that lets you create a new, empty React application that has many add-ons automatically set up for you so you can just begin coding.

```sh
create-react-app my-fun-app
```

Since the main benefit of CRA is that you don't need to worry about how it works, we're mainly going to focus on trying it out through guided practice but there are links below if you want to know more about how it works.

### Common Mistakes & Misconceptions

- CRA is only for toy apps and _real engineers_ setup React from scratch
  - Actually, many professional projects leverage CRA or another starting point template like [Next.js](https://nextjs.org/) when beginning applications. Even if you want to customize the app in some ways, the general setup is usually a good starting point for many types of projects and **it will not make your portfolio project seem amateur to use it**
- You **must** use CRA to build React apps
  - Not true, but it is strongly recommended you build experience using it first before trying to do it yourself without CRA. Although it's much easier, especially for a beginner, many companies have ofted to create a customized setup so they have full control over all aspects of the application

## Guided Practice

Let's setup a small app.

- `npx create-react-app todo-cra` - [npx](https://bambielli.com/til/2018-10-06-npx/) is the recommended way to run CRA, rather than installing globally
- _grab a coffee while it installs everything_
- `cd todo-cra`
- `npm start`

The app should open in a new browser tab automatically and show a spinning atom logo.

- `code .` to open the generated project in your editor
- Find `App.js` in the `src` folder
- Change the contents to: `<p>Hello Techtonica!</p>` and save
- The browser should live update automatically 🥳

### Folder Structure

Review the [existing files](https://create-react-app.dev/docs/folder-structure) of the project.

The most important files are

1. `src/App.css` - all the styles for your React components
1. `public/index.html` - the non-React content of your web pages, e.g. favicon, static footer, etc
1. `src/App.js` - mounts your root component

#### `App.css`

Change the color of the "Learn React" link to `#b36ff6` or another color you like on https://colors.lol/. Changes to CSS will live update as well.

#### `index.html`

- Change the page title to "TODO"
- Find a nice favicon on https://www.flaticon.com/
- Make this the new favicon

Now let's add the main application logic to `App.js`. We'll keep everything in one file for now but as your app grows, you probably want to split components to their own files.

### Starter Components

```jsx
// App.js
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
    // below code do the toggle
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
App.js:16 todo =>
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

Next, pair program to add a feature: Create Todo, sorting and try to do it on your own.

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

First we need something to sort by so let's add a `createdAt` property to each item that will be a `Date` object.

```jsx
{
  text: "Walk dog",
  isCompleted: false,
  createdAt: new Date(),
},
```

Let's support two sort options: newest first(descending) or oldest first(ascending).

In return part, you can use the [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method of Array, to sort according to time and date.

```jsx
const [sortBy, setSortBy] = useState('asc');
//toggle function
const sortByTime = () => {
  setSortBy(sortBy === 'asc' ? 'dsc' : 'asc');
};

// ....

return (
  <div className="app">
    <h2 className="header">My todos:</h2>
    <div className="todo-list">
      {todos
        .sort((a, b) => {
          if (sortBy === 'asc') {
            return a.createdAt - b.createdAt;
          } else {
            return b.createdAt - a.createdAt;
          }
        })
        .map((todo, index) => (
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

You can take a look on complete code [here](https://github.com/priyaraj7/Techtonica-projects/tree/main/Todo-app).

### Challenges

#### Style the Todo Items

If they are complete, style them to indicate that, perhaps by graying them out or using strikethrough.

#### Add styling to your CRA project

If you haven't yet reviewed it, review the lesson on [React Styling](./styling-react.md).

Timebox yourself to whatever time you have left to style your app.

### Deploy your Todo App using GitHub Pages Hosting

https://github.com/gitname/react-gh-pages

### Bored with the TODO Domain?

Try creating a Twitter clone app using this [bonus challenge assignment](/projects/react-tweeter.md).

### Supplemental Materials

- Official `create-react-app` docs: https://create-react-app.dev/
