# ReactJS Part 1

### Projected Time

8 Hours

- Lesson : 1 Hr
- Examples: 30-45 mins
- Guided Practice: 2 Hrs
- Independent Practice: 2 Hrs
- Challenge: 8 Hrs

### Prerequisites
* [HTML](../web/html.md)
* [JavaScript 6 - OOP or above](../javascript/javascript-7-oop.md)

### Motivation
React makes it easy to update your HTML as data changes and build complex apps out of simple, reusable components.

React is an open-source JavaScript library that is used for building user interfaces. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

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
- [Codepen - Hello World component](https://codepen.io/jamesjose03/pen/ExVjYBM)
- [Codepen - Component with a single prop](https://codepen.io/jamesjose03/pen/xxwGKvN)
- [Codepen - Component assigning a `className`](https://codepen.io/jamesjose03/pen/PoPqoqp)

### Common Mistakes / Misconceptions
1. In render functions, don't forget to return JSX. You can return null for an empty output. 
Try to not return JSX and see the error that shows up.
2. Don't forget that variables in JSX must be enclosed in brackets. Example: `<div>Hello {this.state.thing}</div>`
3. The event system in React uses attributes you are likely familiar with from HTML, but they are written using camelCase. Example: `<button onClick={function() { alert('hello!') }}>I am a button</button>`

### Guided Practice
- [Rendering a List using map](https://codepen.io/jamesjose03/pen/jOPRwVm)
  - View the above Codepen which renders an  Ordered List using React. Try to modify the code and work along with it.
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
  - Modify the props or components.
  - Play along with the code, modify it and see the changes it makes.


### Challenge

1. Remove from list
2. Putting two counters on the page
3. Append to list using React
