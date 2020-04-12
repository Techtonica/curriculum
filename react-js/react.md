# ReactJS Part 1

### Projected Time

8 Hours

### Prerequisites
* [HTML](../web/html.md)
* [JavaScript 6 - OOP or above](../javascript/javascript-7-oop.md)

### Motivation
React.js is the most popular front-end framework for Web applications. 

React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.

### Objectives

**Participants will be able to:**

- Explain the Pros and Cons of using React instead of other tools, like jQuery.
- Create a simple React Component.

### Specific Things to Learn

- Why React?
- What is JSX and why is it different than HTML?
- Specifics about co-locating markup with logic in code.

### Lesson Materials

You will spend the day working through these materials.

1. [Introduction to React (video)](https://youtu.be/ycstRj2i66k)
1. [Learn React in 5 minutes (video)](https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4)
1. [Techtonica React slides](https://docs.google.com/presentation/d/1Bswkl7e1kGVav7KFabHrBgXhRi7mlINTbinxnUcGDy8/edit?usp=sharing)
1. [Building your first component in React.js | Pluralsight (video)](https://youtu.be/K_jS1anlVAM)
1. [Work through this React tutorial](https://facebook.github.io/react/index.html)
1. [CodePen for Hello World Example](http://codepen.io/marcacyr/pen/NAyqgX)
1. [CodePen Greeting with Input Example](http://codepen.io/marcacyr/pen/bZLVbj)
1. [CodePen for Counter Example](http://codepen.io/marcacyr/pen/rLJVqR)
1. [CodePen for List - Rendering using a loop in React](http://codepen.io/marcacyr/pen/KrQpYb)

### Topics to learn & Facilitate

- React lets you generate HTML using JavaScript
- The HTML can change over time, unlike regular HTML
- No jQuery needed

### Examples
- Hello World component
```
helloWorld.js

import ReactDOM from 'react-dom'

const HelloWorld = () => <h1>Hello, World!</h1>
      
ReactDOM.render(<HelloWorld />, document.getElementById('app'))

index.html (The rendering of the above React code will be done in this file)

<div id = "app"></div>

```

- Component with a single prop
``` 
welcome.js

import ReactDOM from 'react-dom'

function Welcome(props) {  
return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="ABC" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

index.html (The rendering of the above React code will be done in this file)

<div id = "root"> </div>

```

- Component assigning a `className`
```
// ParentComponent.js

import React from 'react';
import { ChildComponent } from '../child/ChildComponent';

export const ParentComponent = () =>
  <div className="parent-component">
    <ChildComponent className="parent-component__child">
      ...
    </ChildComponent>
  </div>

// ChildComponent.js

import React from 'react';

export const ChildComponent = ({ className, children }) =>
  <div className={`some-css-className ${className}`}>
    {children}
  </div>
  
```
will render as:
```
<div class="parent-component">
  <div class="some-css-className parent-component__child">
    ...
  </div>
</div>

```



### Common Mistakes / Misconceptions
1. In render functions, don't forget to return JSX.
2. Don't forget that variables in JSX must be enclosed in brackets. Example: `<div>Hello {this.state.thing}</div>`
3. The event system in React uses attributes you are likely familiar with from HTML, but they are written using camelCase. Example: `<button onClick={function() { alert('hello!') }}>I am a button</button>`

### Guided Practice
- [Importing & Exporting with React](https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac)
  - 5 minute read article.
- [Rendering a List using map](https://codepen.io/jamesjose03/pen/jOPRwVm)
  - Here, we are rendering an  Ordered List using React.
  - Use ES6 arrow function
    - Eg: `hello = () => {
           return "Hello World!";
          }`
  - Use semantic HTML, like `<ol>`
  - If the state of this react element in the virtual dom changes, React needs to quickly figure out which element changed and where in the real dom it needs to reflect that change. So, we have to set `key` attribute on the li of the list.
    - Eg: `<li key={value}>`
  - If the key property is not set, then the browser will give warning in the console.

### Independent Practice
- [CodePen for Hello World Example](https://codepen.io/jamesjose03/pen/gOpVeLQ)
- Other Requirements: 
  - Modify the state or components.
  - Play along with the code, modify it and see the changes it makes.


### Challenge

1. Remove from list
2. Putting two counters on the page
3. Append to list using React
