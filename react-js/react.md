# ReactJS Part 1

### Projected Time
8 Hours

### Prerequisites
* Javascript I - V
* jQuery Topic Outline

### Motivation
I want to create interactive UIs more easily and with less code than jQuery.

### Objectives
**Participants will be able to:**
- Explain the Pros and Cons of using React instead of other tools, like jQuery.
- Create a simple React Component.
- Hook up user actions to state changes in the UI.

### Specific Things To Teach
- Why React?
- What is JSX and why is it different than HTML?
- Specifics about co-locating markup with logic in code.

### Supplemental Materials

- [ReactJS](https://facebook.github.io/react/index.html)
- [React JS & Tree Reconciliation](https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76)
- [CodePen for Hello World Example](http://codepen.io/marcacyr/pen/NAyqgX)
- [CodePen Greeting with Input Example](http://codepen.io/marcacyr/pen/bZLVbj)
- [CodePen for Counter Example](http://codepen.io/marcacyr/pen/rLJVqR)
- [CodePen for List - Rendering using a loop in React](http://codepen.io/marcacyr/pen/KrQpYb)
- [Learn React in 5 minutes](https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4)

### Topics to learn & Facilitate 

- What is React?
    - React is a library for creating User Interfaces.
    - This means it is used for creating what some refer to as the "view layer" of an application.
- JSX adds to our JavaScript to allow for HTML-like markup in JavaScript.
- Show Hello World example, plus expanded example.
- Example for appending to a list in jQuery vs. the same in React.


### Common Mistakes / Misconceptions

1. JSX tag names for components must match up with component names, both in spelling and case.
2. In render functions, don't forget to return JSX.
3. Don't forget to specify both arguments in ReactDOM.render function.
4. Don't forget `this` when working within a React class. Examples: `this.state.thing`
5. Don't forget that variables in JSX must be enclosed in brackets and don't forget number 4. Example: `<div>Hello {this.state.thing}</div>`
6. The event system in React uses attributes you are likely familiar with from HTML, but they are written using camelCase. Example: `<button onClick={function() { alert('hello!') }}>I am a button</button>`


### Guided Practice
-[Importing & Exporting with React](https://medium.com/@thejasonfile/a-simple-intro-to-javascript-imports-and-exports-389dd53c3fac)

### Independent Practice
-[Create-react-app](https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-1-a12e1833fdc)

### Challenge

1. Remove from list
2. Putting two counters on the page
3. Append to list using React

### Check for Understanding

Have apprentices summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.

1. Make sure everyone had an opportunity to complete the practice exercises.
2. Give ample opportunity for follow-up conversations.
3. Lead into "Why React?" by asking follow-up questions and checking for understanding of key concepts from the "Wrap Up" section.

### Wrap Up

1. It simplifies creating UIs, especially when compared to other libraries, such as jQuery.
2. It is easier to read, and as a result is also easier to maintain.
3. It encourages creating reusable components that you use everywhere, rather than recreating things everywhere.
4. While it is a bit of a departure from prior approaches, co-locating markup with JavaScript leads to more easily   understood code.
5. It cuts down on the amount of code you have to write. In some instances, things that once took hundreds of lines of code can now be written with only a few dozen lines or less.
