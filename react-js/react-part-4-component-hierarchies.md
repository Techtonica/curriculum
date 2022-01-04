# React Part 4 - Components & Hierarchies

### Projected Time : 80-100 minutes

- Lesson: 30-40 min
- Guided Practice: 15-25 min
- Independent Practice: 15-25 min

### Prerequisites

- [Intro to React](./react-part-1-intro.md)
- [React Props](./react-part-2-props.md)
- [React State](./react-part-3-state.md)

### Motivation

React is a UI library. Building a React application involves breaking up your app into smaller pieces called “components.” This make your code more readable and maintainable. Usually we want these components to communicate with each other and pass data among with each other. For this we use props and state.

### Objectives

**Participants will be able to:**

- Understand the difference between Components and built-in JSX tags
- Understand how to pass data between components in react - using props and state
- Understand the use of `props.children`
- Understand how to use a 3rd-party library of components like [reactstrap](https://reactstrap.github.io/)

### Materials


### Lesson

#### What is the Difference Between Components and Built-in JSX tags like `<button>`?

Pre-defined JSX components are lowercase and match the HTML tags you already learned, see this [complete list](https://zhenyong.github.io/react/docs/tags-and-attributes.html#html-elements). Components have capitalized names and are created by your own code or other libraries.

Consider the following example

```javascript
const App = () => {
  return <h1>Hello World</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

In this example, App is a component while h1 is a built-in JSX tags.

#### How To Pass Data Between React Components

- From Parent to Child (props)
- From Child to Parent (Parent callback to retrieve Child state)
- Passing a React Component as data with `props.children`
- From a 3rd party React Component

##### From Parent to Child — Use a prop

One of the simplest and easiest ways to pass data to components is through props. Props are similar to a parameter in a function. If a parent component wants to feed data to a child component, it simply passes it via props.

_Example_

  ```javascript
    import React from "react";

    const MyName = props => <h2>I am {props.name}!</h2>;

    const Person = () => (
      <div>
        <h1>What is your name?</h1>
        <MyName name="Annu" />
      </div>
    );

    ReactDOM.render(<Person />, document.getElementById('root'));
  ```

Here we have created 2 components: `Person` and `MyName`. We send the "name" property from the Person component to the MyName component using the prop `name`.

#### From Child to Parent — Use a callback function

Props can only flow one direction: from Parent to Child.  So how can you send data from the Child to the Parent?

For example, you may need a list that keeps track of how many of the child list items are complete. The list needs to know about the state of every child, while each child is managing its own state: "complete" or "incomplete". How does the parent keep track of the child states?

For this we can use state and callback methods
Consider the 2 components - parent and child.

Watch 8 min video: [From Child to Parent Component](https://www.youtube.com/watch?v=UrpNtB61qyo)

Another 8 min video: [Send data child to parent](https://www.youtube.com/watch?v=-6tPkP89kWc)

In this next example, when a button inside a parent section is pressed, the child button component passes the message 'Data received' to its parent so the message can be displayed.

```javascript
// Parent.jsx
import React, {useState} from "react";
import Child from "./Child.jsx"

const Parent = props => {
  const [dataFromChild, setDataFromChild] = useState('empty');

  const updateFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div className="App">
      <h1>Parent Component </h1>
      <p>
        data coming from child<b>: {dataFromChild} </b>
      </p>
      <Child update={updateFromChild} />
    </div>
  );
}
```

```javascript
// Child.jsx
import React, {useState} from "react";

const Child = props => {
   const [data, setData] = useState('Data received');

    return (
      <div className="App">
        <h1>Child Component </h1>
        <button onClick={() => props.update(data)}>
          Click from Child
        </button>
      </div>
    );
}

export default Child;
```

You can run the code in this [codesandbox.io page](https://codesandbox.io/s/pass-data-from-child-to-parent-6tl0e?file=/src/Child.js:43-493).  Note that this is using React class syntax instead of the above functional syntax, but the rest is exactly the same.

**A note on siblings and mediators:**

Note that the above method is also how you would deal with **sibling communication**.  If there were a parent container with three buttons, and you want all to change color if one is clicked, you would manage this with child states communicated to the parent through callbacks.  The parent keeping track of all three could then pass the appropriate action to the buttons with props, such as which color to display. In this situation, the parent with the coordinating role is a **mediator**.

##### How to use `props.children`

1. Read [React This Props Children](https://learn.co/lessons/react-this-props-children)
1. Watch this 4 min video, [React Tutorial 13: `props.children`](https://www.youtube.com/watch?v=Sq0FoUPxj_c)
1. [Read the React Docs on Children](https://reactjs.org/docs/composition-vs-inheritance.html#children) (5 min read.  Just read the first section on Containment, but not about Specialization.)

The ability for components to receive and render child elements is one of the most important feature of React. This makes it really easy to create reusable components. All we need to do is include data between the opening and closing tags of a parent component, and it will automatically get passed as a prop called `children`.

```javascript
import React from "react";

const MyComponent = (props) => (
  <div>
    <h1>MyComponent JSX here</h1>
    {props.children}
  </div>
);

ReactDOM.render(
  <MyComponent>
    <p>understanding props.children </p>
  </MyComponent>,
  document.getElementById("root")
);
```

In the above example, whenever the MyComponent is invoked, `props.children` will be displayed under the `h1`.  Again, `props.children` is just a reference to what is between the opening and closing tags of its parent component.

[Run code](https://codepen.io/SupriyaRaj/pen/GRMdVKX?editors=1111)

Instead of invoking the component with a self-closing tag < MyComponent />; invoke it with full opening and closing tags `<MyComponent>*</MyComponent>`, placing your child code in between (*).

This de-couples the <MyComponent> component from its content and makes it more reusable.

### Check for Understanding
- Explain how you would structure passing data from a parent to a child component.
- Explain how you would structure passing data from a child to its parent component.
- Explain the difference between a React component and a JSX built-in component.
- If you aren't sure about any of these, write them down and figure it out with a peer before moving on.
