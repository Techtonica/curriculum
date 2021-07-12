# Intro to React

### Projected Time

Total: 1 - 1.5 hour

- Introductions: 5 mins
- Guided Practice: 45 mins
- Tips: 10 mins
- Check for understanding: 15 min

### Prerequisites

- [HTML](../web/html.md)
- [JavaScript 6 - OOP or above](../javascript/javascript-7-oop.md)

### Motivation

React makes it easy to update your HTML as data changes and build complex apps out of simple, reusable components. True to its name, apps written in React “react” to user actions very quickly.

React is an open-source JavaScript library that is used for building user interfaces. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.

[Facebook](https://www.facebook.com) created React as a framework to create reuseable components, like posts or comments, and allow the user see updates instantly. [Instagram](https://www.instagram.com/) and [Airbnb](https://www.airbnb.com/) use it too.

### Objectives

**Participants will be able to:**

- Explain the Pros and Cons of using React instead of other tools, like JS DOM methods.
- Create a simple React Component.

### Specific Things to Learn

- Why React?
- What is JSX and why is it different than HTML?
- Specifics about co-locating markup with logic in code.

## Lesson

### Guided Practice

1. Watch [Introduction to React (12 min video)](https://youtu.be/ycstRj2i66k)
    - Note that "MVC" stands for Model, View, Control.
1. Spend just 5 minutes on this CodePen example of multiple instances of the same React component: a blue box. Press the "fork" button at the bottom to make a copy for yourself.  Try adding a 4th box.  Try making a new component called GreenBox that is green instead of blue.  https://codepen.io/alodahl/pen/xxgoeqL
1.  You can use any HTML element in React.  Spend 5 minutes adding a new element like "button" or "a" in the same CodePen.
1. Look through these [Techtonica React slides](https://docs.google.com/presentation/d/186ONPMPm54yVqtD0ZBR-c0KR4z7R9PCr3x_J1HmXeOU/edit?usp=sharing)(20 min read)
1. Read [React Docs:  Introducing JSX](https://reactjs.org/docs/introducing-jsx.html) up to the "Specifying Children with JSX" section (15 min read). Don't worry if it doesn't quite make sense yet.

### Tips

- React lets you generate HTML using JavaScript
- The React can change or update the element as needed, unlike regular HTML
- No JS DOM methods are needed.  In fact they are discouraged, since React has its own way of interacting with the DOM that isn't compatible with JS DOM methods.
- There are syntactic differences between HTML and JSX:
    - JSX avoids reserved JavaScript words like `class`, `for`, etc
    - `class` -> `className` ; `for` -> `htmlFor`
    - You can use HTML Elements, but they won't be exactly the same. The event system in React uses attributes you are likely familiar with from HTML, but they are written using camelCase. One example is that an HTML button's `onclick` is written `onClick` in JSX: `<button onClick={function() { alert('hello!') }}>I am a button</button>`
    - You feed an object instead of a string into `style`: `style='color: red'`  -> `style={{color: “red”}}`
- Many projects use a class to define a component, although it is now more popular to use functions.


### Check for Understanding

Open one of your CodePens from the lesson.  
Pretend you are in an interview, and the interviewer is asking you to point out different parts of the code.  Point to it and say a few things you notice about [the previous CodePen](https://codepen.io/alodahl/pen/xxgoeqL), like if it reminds you of something in JS, HTML or CSS.
- [ ] Which function renders your webpage?
- [ ] Where in the HTML does the React component render?
- [ ] Which function declarations are actually React components?
- [ ] Once you declare a React component, how do you use it? What is the syntax?
- [ ] How can you add styles?
- [ ] What are some advantages of React over HTML?
- [ ] If you aren't sure about any of these, write them down and figure it out with a peer before moving on.
- [ ] Take a short break! Nice work.
