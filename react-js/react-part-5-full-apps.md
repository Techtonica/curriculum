# React Part 5 - Full Apps using `create-react-app` (CRA)

## Projected Time

- 6 hours

### Prerequisites

- [Intro to React](./react-part-1-intro.md)
- [React Props](./react-part-2-props.md)
- [React State](./react-part-3-state.md)
- [React Components & Hierarchies](./react-part-3-component-hierarchies.md)
- APIs
- Express Servers

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
- `yarn start`

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

Create a new file.

```jsx
// Todo.js
import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    return <div>{todo.text}</div>;
  }
}
export default Todo;
```

```jsx
// App.js
import React from 'react';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ text: 'Walk dog' }, { text: 'Feed cat' }]
    };
  }
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <h1>Todos</h1>
        <div>
          {todos.length &&
            todos.map((todo, idx) => <Todo key={idx} todo={todo} />)}
        </div>
      </div>
    );
  }
}

export default App;
```

You should see the heading and 2 todos. If you do not, refresh the chrome tab.

#### Adding isCompleted

Since this is a task app we want to mark tasks as complete. So let's change the shape of the todo data to include an `isCompleted` boolean.

```js
state = {
  todos: [
    { text: 'Walk dog', isCompleted: false },
    { text: 'Feed cat', isCompleted: false }
  ]
};
```

Now let's update the `<Todo/>` component to render `isCompleted` as a checkbox. For attributes see [MDN Checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

```jsx
class Todo extends React.Component {
  render() {
    const { todo } = this.props;
    const { text, isCompleted } = todo;
    return (
      <div>
        <input type="checkbox" checked={isCompleted}></input>
        {text}
      </div>
    );
  }
}
```

Manually edit the data and add some completed and incompleted tasks to test.

#### Checkbox

Now let's allow the user to change `isCompleted` by checking the checkbox. In React, input elements have an `onChange` prop that accepts a function called when the user modifies the input. See [handling events](https://reactjs.org/docs/handling-events.html) in the official docs.

```jsx
class Todo extends React.Component {
  toggleCompletion(todo) {
    todo.isCompleted = !todo.isCompleted;
    console.log('todo =>', todo);
  }

  render() {
    const { todo } = this.props;
    const { text, isCompleted } = todo;
    return (
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={this.toggleCompletion.bind(this, todo)}
        ></input>
        {text}
      </div>
    );
  }
}
```

Click the checkbox a few times. Nothing seems to happen. But in the log the code is working:

```
todo => Object { text: "Walk dog", isCompleted: true }
todo => Object { text: "Walk dog", isCompleted: false }
todo => Object { text: "Walk dog", isCompleted: true }
```

This is because, as you probably remember, **React only re-renders when state changes**. It assumes props are read-only and do not change, even though as the above shows, you can modify them since JavaScript doesn't stop you. So we need to change the state, but state lives one level above `Todo` in `App`. Like we learned in Part 3, passing functions down to child components is a good strategy for handling this situation.

#### Create an Updater Function in App

```jsx
// New method
updateTodo(todo, changes) {
  this.setState({
    todos: this.state.todos.map((existing) => {
      if (todo === existing) {
        return { ...existing, ...changes };
      }
      return existing;
    }),
  });
}
// ...
// pass the method in as a prop, bound to this so it will work
todos.map((todo, idx) => (
              <Todo
                key={idx}
                todo={todo}
                updateTodo={this.updateTodo.bind(this)}
              />
            ))
```

This code is a little more complicated than you might've expected. This is because it's creating a whole new copy of the array (using `.map`) rather than finding the item and changing its data.

#### Rewrite `updateTodo` in your own coding style

You'll learn a lot more about different ways of managing state in React, but that is a whole big topic in itself. For now, you should rewrite the `updateTodo` function in a way that makes sense for you. There are many ways to accomplish the same logic.

Now test out clicking the checkbox. It should toggle correctly as expected.

### Independent Practice

With your daily pair, review each other's code from above and see if you can explain how each part is working, especially how you chose to rewrite the `updateTodo` function. Add some `console.log` statements to verify your understanding.

Next, pair program to add a feature: sorting.

#### Sorting

First we need something to sort by so let's add a `createdAt` property to each item that will be a `Date` object.

```js
{
  text: "Walk dog",
  isCompleted: false,
  createdAt: new Date(),
},
```

Let's support two sort options: newest first or oldest first.

Let's make newest first the default and add it to our starting state.

```js
state = {
  sort: 'oldest',
  todos: []
};
```

Then based on that value, we'll sort `state.todos`.

```js
const { todos, sort } = this.state;
if (sort === 'oldest first') {
  todos.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
}
```

Check the browser and make sure it's sorting correctly. You may have to give the todos specific dates to test it, e.g. `new Date("2021-01-15 00:00:00-0800")`

Now add another option to sort by `'newest'`.

```jsx
if (sort === 'oldest') {
  todos.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
} else if (sort === 'newest') {
  todos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}
```

Edit the starting state and make sure the sorting works as expected.

#### Sorting Toggle

Now add a button that switches the sorting from one option to the other.

```jsx
<div>
  <button
    onClick={() =>
      this.setState({ sort: sort === 'oldest' ? 'newest' : 'oldest' })
    }
  >
    ⬇️ Sort by {sort === 'oldest' ? 'newest' : 'oldest'} first
  </button>
</div>
```

Test out the button to make sure it works correctly.

### Challenges

#### Style the Todo Items

If they are complete, style them to indicate that, perhaps by graying them out or using strikethrough.

#### Add Input Form

To create new todos, add an input form that will create a new todo item and add it to the state so it shows up in the list.

#### Add styling to your CRA project

If you haven't yet reviewed it, review the lesson on [React Styling](./styling-react.md).

Timebox yourself to whatever time you have left to style your app.

### Deploy your Todo App using GitHub Pages Hosting

https://github.com/gitname/react-gh-pages

### Bored with the TODO Domain?

Try creating a Twitter clone app using this [bonus challenge assignment](/projects/react-tweeter.md).

### Supplemental Materials

- Official `create-react-app` docs: https://create-react-app.dev/
