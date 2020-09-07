# JavaScript and React Modularity

## Projected time

About 30-45 minutes
Lesson: 10 min
Guided Practice:15 min
Check for Understanding:20 min

## Prerequisites

There is not touch prerequisites for learning JavaScript. Here are some of the prerequisite for learning JavaScript:

+ Basic programming knowledge. Knowledge of core Java sufficient.

+ You should have knowledge of HTML. Check [HTML tutorials here.](https://github.com/Techtonica/curriculum/blob/main/web/html.md)

### Motivation

Why it is worth learning React Modularity?

+ React is scalable
+ React has an awesome community.
+  React is preferred by developers.
+ React is just cool.


## Objective of React Modularity

+ Understand why it's important to split up our code into smaller files
+ Learn how `import` and `export` support our ability to build modular code
+ Understand the different ways to import and export code

## Lesson
React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.
React works in declarative code.
[For more reference](https://github.com/Techtonica/curriculum/tree/main/react-js) 

### Modular Code
Modular code is code that is separated into segments (modules), where each file is responsible for a feature or specific functionality.

Developers separate their code into modules for many reasons:

1. Adhere to the single-responsiblity principle
+ Each module is responsible for accomplishing a certain piece of functionality, or adding a specific feature to the application
2. Easier to navigate
+ Modules that are separated and clearly named make code more readable for other developers
3. Easier to debug
+ Bugs have less room to hide in isolated, contained code
4. Produce clean and DRY code
+ Modules can be reused and repurposed throughout applications

##### Example
1. **React Component Example**
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Faisal Arkan" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
`name="Faisal Arkan"`will give value into `{props.name}` from `function Welcome(props)` and returning a component that has given value by `name="Faisal Arkan"`. After that React will render the element into html.

2. **Class Type Components**
```
class Cat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      humor: 'happy'
    }
  }
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>
          {this.props.color}
        </p>
      </div>
    );
  }
}
```

3. **Functional Components**
```
const Cat = props => {
  return (  
    <div>
      <h1>{props.name}</h1>
      <p>{props.color}</p>
    </div>;
  );
};
```
[For more reference](https://www.freecodecamp.org/news/react-examples-reactjs/ )



### Guided Practice
1. **Modularizing React Code:** React makes the modularization of code easy by introducing the component structure.
```
class Hogwarts extends React.Component {
    render() {
        return (
            <div className="Hogwarts">
                "Harry. Did you put your name in the Goblet of Fire?"
            </div>
        );
    }
}
```
It's standard practice to give each of these components their own file. It is not uncommon to see a React program file tree that looks something like this:
```
├── README.md
├── public
└── src
     ├── App.js
     ├── Hogwarts.js
     └── Houses.js
```
2. **Export Default:** We can only use export default once per module. The syntax allows us to disregard naming conventions when we want to import the given module.

**For example:**
```
// src/houses/HagridsHouse.js
import React from 'react';

function whoseHouse() {
    console.log(`HAGRID'S HOUSE!`);
}

export default whoseHouse;
```
[For more Reference](https://learn.co/lessons/react-modular-code)

### Independent Practice

[Create a Messaging App](https://www.freecodecamp.org/news/5-react-projects-you-need-in-your-portfolio/)

### Challenges

1. Build a social media app
2. Build an E-Commerce App
[To know more](https://www.freecodecamp.org/news/5-react-projects-you-need-in-your-portfolio/)


### Supplementary Materials

1. https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e
2. https://medium.com/@mjewell/designing-react-components-for-modularity-reusability-and-testability-edf4a68147e9
3. https://medium.com/@mjewell/designing-react-components-for-modularity-reusability-and-testability-edf4a68147e9
