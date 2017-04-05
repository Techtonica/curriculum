# ReactJS Part 1

### Projected Time
30-45 minutes

### Prerequisites


### Motivation
I want to create interactive UIs more easily and with less code than jQuery.

### Objective
**Students will be able to**:
- Explain the Pros and Cons of using React vs. other tools, like jQuery
- Create a simple React Component.
- Hook up user actions to state changes in the UI.

### Specific Things To Teach
- Why React?
- What is JSX and why is it different?
	- Specifics about co-locating markup with logic in code.

### Materials

- [ReactJS](https://facebook.github.io/react/index.html)
- [CodePen for Hello World Example](http://codepen.io/marcacyr/pen/NAyqgX)
- [CodePen for Counter Example](http://codepen.io/marcacyr/pen/rLJVqR)
- [CodePen for List (rendering using a loop in React)](http://codepen.io/marcacyr/pen/KrQpYb)
- [CodePen Greeting with Input Example](http://codepen.io/marcacyr/pen/bZLVbj)

### Mini Lesson

Outline of lecture:
- What is React?
    - React is a library for creating User Interfaces.
    - This means it is used for creating what some refer to as the "view layer" of an application.
- JSX adds to our JavaScript to allow for HTML-like markup in JavaScript.
- Show Hello World example, plus expanded example.


Make sure to mention these things:
- Example for appending to a list in jQuery vs. the same in React.


### Common Mistakes / Misconceptions

1. JSX tag names for components must match up with component names, both in spelling and case.
2. In render functions, don't forget to return JSX.
3. Don't forget to specify both arguments in ReactDOM.render function.
4. Don't forget `this` when working within a React class. Examples: `this.state.thing`
5. Don't forget that variables in JSX must be enclosed in brackets and don't forget number 4. Example: `<div>Hello {this.state.thing}</div>`
6. The event system in React uses attributes you are likely familiar with from HTML, but they are written using camelCase. Example: `<button onClick={function() { alert('hello!') }}>I am a button</button>`


### Guided Practice

- Counter Example Increment
- [CodePen for Counter Example](http://codepen.io/marcacyr/pen/rLJVqR)


### Independent Practice

- Counter decrement
- [CodePen for Counter Example](http://codepen.io/marcacyr/pen/rLJVqR)

### Mini Lesson

- Render using a loop in React
- [CodePen for List (rendering using a loop in React)](http://codepen.io/marcacyr/pen/KrQpYb)

### Independent Practice

Append to list using React

### Challenge

1. Remove from list
2. Putting two counters on the page


### Check for Understanding

Have students summarize to each other, make a cheat sheet, take a quiz, do an assignment, or something else that helps assess their understanding.

1. Make sure everyone had an opportunity to complete the practice exercises.
2. Give ample opportunity for follow-up conversations.
3. Lead into "Why React?" by asking follow-up questions and checking for understanding of key concepts from the "Wrap Up" section.

### Wrap Up

- Why React? (This could be the closing comments)
    1. It simplifies creating UI, especially when compared to prior libraries, such as jQuery.
    2. It is easier to read, and as a result is also easier to maintain.
    3. It encourages creating reusable components that you use everywhere, rather than recreating things everywhere.
    4. While it is a bit of a departure from prior approaches, co-locating markup with JavaScript leads to more easily understood code.
    5. It cuts down on the amount of code you have to write! In some instances, things that once took hundreds of lines of code can now be written with only a few dozen lines or less.
