# Intro to React

### Projected Time

7 Hours 30 Minutes

- Lesson : 1 Hr
- Examples: 30-45 mins
- Guided Practice: 2 Hrs
- Independent Practice: 30-45 mins
- Challenge: 3 Hrs

### Prerequisites

- [HTML](../web/html.md)
- [JavaScript 6 - OOP or above](../javascript/javascript-7-oop.md)

### Motivation

React makes it easy to update your HTML as data changes and build complex apps out of simple, reusable components.

React is an open-source JavaScript library that is used for building user interfaces. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple.

[Facebook](https://www.facebook.com) created React as a framework to create reuseable components, like posts or comments, and allow the user see updates instantly. [Instagram](https://www.instagram.com/) and [Airbnb](https://www.airbnb.com/) use it too.

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
1. [Learn React in 5 minutes (article)](https://medium.freecodecamp.org/learn-react-js-in-5-minutes-526472d292f4)
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

#### CodePen - Hello World component

In this CodePen, a basic Hello World component is rendered.  
Try modifying line 5 of the JS file to see the changes made to the file rendered.  
[CodePen of Example 1](https://codepen.io/jamesjose03/pen/ExVjYBM)

#### CodePen - Component with a single prop

Properties are values that are passed to the component for various uses. Here, the component has a prop called name.  
Try modifying line 12 of the JS file by changing the value ABC and view the changes made.  
[CodePen of Example 2](https://codepen.io/jamesjose03/pen/xxwGKvN)

#### CodePen - Component assigning a `className`

React uses className instead of class for CSS styling and other purposes.  
Here, the component has a className heading. Try applying various styles for the component by modifying the CSS file.  
[CodePen of Example 3](https://codepen.io/jamesjose03/pen/PoPqoqp)

### Common Mistakes / Misconceptions

1. In render functions, don't forget to return JSX. You can return null for an empty output.
   Remove the return from a component in one of the CodePens and take note of the error message shown.
2. Don't forget that variables in JSX must be enclosed in brackets. Example: `<div>Hello {this.state.thing}</div>`
3. The event system in React uses attributes you are likely familiar with from HTML, but they are written using camelCase. Example: `<button onClick={function() { alert('hello!') }}>I am a button</button>`
4. Many of these tutorials have used a class to define a component, although it is now more popular to use functions. 


### Guided Practice

- [Rendering a List using map](https://codepen.io/jamesjose03/pen/jOPRwVm)
  - View the [Codepen](https://codepen.io/jamesjose03/pen/jOPRwVm) which renders an Ordered List using React. Try to modify the code and work along with it.
  - Here, a class component named `FriendsContainer` is declared from the lines 1 - 19.
  - Every class component has a render function which returns the code to be rendered.
  - A few variables are declared such as name, friends, listItem.
  - `name` is just a string. `friends` is a list of Strings. `listItem` maps each element of the friends list as `li` tags.
  - Inside return, the list is rendered by using `{ variableName }` this helps React understand that it has to render the value of the variable there.
  - `ReactDOM.render()` is used to render the component at the div which has the id `app` in the HTML file.
  - Use ES6 arrow function
  - Use semantic HTML, like `<ol>`
  - If something is modified or updated, React needs to quickly figure out which element changed and where it needs to reflect that change. So, we have to set `key` attribute on the li of the list.
    - Eg: `<li key={value}>`
  - If the key property is not set, then the browser will give warning in the console.

### Independent Practice

- [Rendering a List using map](https://codepen.io/jamesjose03/pen/jOPRwVm)
- Try rendering the List by using declaring another component and passing the list to it for rendering it there.
- Or try rendering the List in a different order by sorting it.

### Alternatives

- Modify the props or components.
- Play along with the code, modify it and see the changes it makes.
- Try rendering a basic calculator which does only the basic operations.

### Challenge

1. Remove from list
2. Putting two counters on the page
3. Append to list using React
