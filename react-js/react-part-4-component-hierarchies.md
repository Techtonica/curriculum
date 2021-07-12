# React Part 3 - Components & Hierarchies

### Projected Time : 80-100 minutes

- Lesson: 30-40 min
- Guided Practice: 15-25 min
- Independent Practice: 15-25 min

### Prerequisites

- [React Part 2 - Component State](./react-part-2-component-state.md)

### Motivation

React is a UI library. Building a React application involves breaking up your app into smaller pieces called “components.” This make your code more readable and maintainable. Usually we want these components to communicate with each other and pass data among with each other. For this we use props and state.

### Objectives

**Participants will be able to:**

- Understand the difference between Components and built-in JSX tags
- Understand how to pass data between components in react - using props and state
- Understand the use of `props.children`
- Understand how to use a 3rd-party library of components like [reactstrap](https://reactstrap.github.io/)

### Materials

- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Passing Data to Components in React.js ](https://www.youtube.com/watch?v=ICmMVfKjEuo)
- [React: Communication Between Component](https://blog.bitsrc.io/react-communication-between-components-c0cfccfa996a)
- [Communicating Between Components in React](https://app.pluralsight.com/guides/react-communicating-between-components)
- [Introduction to props.children](https://hackernoon.com/introduction-to-props-children-in-react-661e1b6e45c3)
- [How to pass data to props.children](https://frontarm.com/james-k-nelson/passing-data-props-children/)
- [React Strap](https://reactstrap.github.io/)

### Lesson

#### What is the Difference Between Components and Built-in JSX tags like `<button>`?

Pre-defined JSX components are lowercase and match the HTML tags you already learned, see this [complete list](https://zhenyong.github.io/react/docs/tags-and-attributes.html#html-elements). Components have capitalized names and are created by your own code or other libraries.

Consider the following example

```js
class App extends React.Component {
  render() {
    return <h1> Hello World</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

In this example, App is a component while h1 is a built-in JSX tags

### How To Pass Data Between React Components

1. Read [Passing Data Between React Components](https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17)
1. Read [React: Communication Between Components](https://blog.bitsrc.io/react-communication-between-components-c0cfccfa996a)
1. Watch [React components communication tutorial ](https://www.youtube.com/watch?v=dyL99ACQfsM)
1. Watch [Pass data child to parent](https://www.youtube.com/watch?v=0FWrZF1qWfE)

#### From Parent to Child — Use a prop

One of the simplest and easiest ways to pass data to components is through props. Props are similar to a parameter in a function. If a parent component wants to feed data to a child component, it simply passes it via props

_Example_

  ```javascript
    const MyName = props => <h2>I am {props.name}!</h2>;

    const Person = () => (
      <div>
        <h1>What is your name?</h1>
        <MyName name="Annu" />
      </div>
    );

    ReactDOM.render(<Person />, document.getElementById('root'));
  ```

Here we have created 2 components: `Person` and `Name`. We send the "name" property from the Person component to the Name component using the prop `name`.

#### From Child to Parent — Use a callback function

You may also want to pass data from child to parent. For this we can use state and callback methods
Consider the 2 components - parent and child.

Here we wish the child to pass a message 'Data received' to its parent, when a button is pressed

```js
// Parent.js
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromChild: 'empty'
    };
  }

  update = (data) => {
    this.setState({ fromChild: data });
  };

  render() {
    return (
      <div className="App">
        <h1>Parent Component </h1>
        <p>
          data coming from child<b>: {this.state.fromChild} </b>
        </p>
        <Child update={this.update} />
      </div>
    );
  }
}
```

```js
// Child.js
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child: 'Data received'
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Child Component </h1>
        <button onClick={() => this.props.update(this.state.child)}>
          Click from Child
        </button>
      </div>
    );
  }
}

export default Child;
```

[Run code](https://codesandbox.io/s/pass-data-from-child-to-parent-6tl0e?file=/src/Child.js:43-493)

### props.children Example

1. Read [A quick intro to React’s props.children](https://medium.com/better-programming/passing-data-to-props-children-in-react-5399baea0356)
2. Read [React This Props Children](https://learn.co/lessons/react-this-props-children)
3. Watch [React Tutorial 13: props.children](https://www.youtube.com/watch?v=Sq0FoUPxj_c)

The ability for components to receive and render child elements is one of the most important feature of React. This makes it really easy to create reusable components. All we need to do is to wrap props.children with some markup or behavior props.children does is used to display whatever we include between the opening and closing tags when invoking a component.

```js
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>MyComponent JSX here</h1>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(
  <MyComponent>
    <p>understanding prop.children </p>
  </MyComponent>,
  document.getElementById('app')
);
```

Whenever the MyComponent is invoked {props.children} will also be displayed and this is just a reference to what is between the opening and closing tags of the component.

[Run code](https://codepen.io/annu12340/pen/wvKowmj?editors=1010)

Instead of invoking the component with a self-closing tag < MyComponent /> if you invoke it will full opening and closing tags <MyComponent> </MyComponent> you can then place more code between it.

This de-couples the <MyComponent> component from its content and makes it more reusable.

### Using Third-Party Components like Reactstrap

1. Read [React Strap](https://reactstrap.github.io/)
2. Read [Add Reactstrap Components In ReactJS](https://www.c-sharpcorner.com/article/reactstrap-in-reactjs/)

Reactstrap provides prebuilt Bootstrap 4 components that allow a great deal of flexibility and prebuilt validation. This allows us to quickly build beautiful forms that are guaranteed to impress and provide an intuitive user experience. It allows React developers to use various Bootstrap components such as grid system, navigation, icons, typography, forms, buttons, and table.

#### Installation of reactstrap

Reactstrap can be included in a CodePen by clicking on Settings -> JS and searching for an external CDN asset.

Please note you also need to go to Settings -> CSS and add the Twitter Bootstrap CSS, as the JS library only sets class names like `.btn` which only have a visual look with the matching CSS.

Now, we are all set to use reactstrap UI components in React app.

#### Using Reactstrap Buttons in React

Let’s check out how we can use reactstrap buttons in React app. First, we have to import Buttons component in src/App.js file and include the Buttons code from reactstrap site.

```js
const { Button } = Reactstrap;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="info">info</Button>
        <Button color="warning">warning</Button>
        <Button color="danger">danger</Button>
        <Button color="link">link</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#react'));
```

[Reactstrap Buttons CodePen](https://codepen.io/vegetabill/pen/QWKYPrY)



### Supplemental Materials


- [Component Communication between Sibling Components](https://medium.com/@haixiang6123/react-js-component-communication-between-sibling-components-1fdd21328c64)
- [Ways You Could Customize 3rd Party React Component](https://dev.to/jacobgoh101/3-ways-you-could-customize-3rd-party-react-component-3dpl)
