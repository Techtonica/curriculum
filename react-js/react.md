# ReactJS Part 1

### Projected Time
8 Hours

### Prerequisites
* [HTML](../web/html.md)
* [JavaScript 6 - OOP or above](../javascript/javascript-7-oop.md)

### Motivation
I want to create interactive UIs more easily and with less code than jQuery.

React is complex, but one reason it is awesome is that you can build a component with it's own html, css, and js characteristics - for example, a styled list item - and that's the only time you have to write it.  You can use it whenever you want by calling the component name you made up - <ListItem/> - anywhere you like in your project. Another reason is because you see changes instantly as you develop and as your app runs.  No more refreshing!

[Facebook](www.facebook.com) created React as a framework to create reusible components, like posts or comments, and allow the user see updates instantly. [Instagram](https://www.instagram.com/) and [Airbnb](https://www.airbnb.com/) use it too.

### Objectives
**Participants will be able to:**
- Explain the Pros and Cons of using React instead of other tools, like jQuery.
- Create a simple React Component.
- Hook up user actions to state changes in the UI.

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

- What is React?
    - React is a library for creating User Interfaces.
    - This means it is used for creating what some refer to as the "view layer" of an application.
- JSX adds to our JavaScript to allow for HTML-like markup in JavaScript.
- Show Hello World example, plus expanded example.
- Example for appending to a list in jQuery vs. the same in React.


### Common Mistakes / Misconceptions

1. In render functions, don't forget to return JSX.
2. Don't forget that variables in JSX must be enclosed in brackets and don't forget number 4. Example: `<div>Hello {this.state.thing}</div>`
3. The event system in React uses attributes you are likely familiar with from HTML, but they are written using camelCase. Example: `<button onClick={function() { alert('hello!') }}>I am a button</button>`

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
