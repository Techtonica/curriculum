# React Part 3 - Components & Hierarchies

### Projected Time : 80-100 minutes

- Lesson: 30-40 min
- Guided Practice: 15-25 min
- Independent Practice: 15-25 min

### Prerequisites

- [React Part 2 - Component State](./react-part-2-component-state.md)

### Motivation

React is a User Interface (UI) library. Building a React application involves breaking up your app into smaller pieces called “components.” This make your code more readabel, manageable and scalable, as an app grows it can become difficult to get a sense of your overall component hierarchy and how components relate to each other. Sometimes, we want these components to communicate with each other and pass data among with each other. For this we use props and states. Sometimes, we would have to use 3rd party components to improve the the functionality or customization capability of out project

### Objectives

**Participants will be able to:**

- Understand the difference between Components and built-in JSX tags
- Understand how to pass data between components in react - using props and state
- Understand what is props.children
- Understand how to use 3rd party component like reactstrap

### Materials

- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Passing Data to Components in React.js ](https://www.youtube.com/watch?v=ICmMVfKjEuo)
- [React: Communication Between Component](https://blog.bitsrc.io/react-communication-between-components-c0cfccfa996a)
- [Communicating Between Components in React](https://app.pluralsight.com/guides/react-communicating-between-components)
- [Introduction to props.children](https://hackernoon.com/introduction-to-props-children-in-react-661e1b6e45c3)
- [How to pass data to props.children](https://frontarm.com/james-k-nelson/passing-data-props-children/)
- [React Strap](https://reactstrap.github.io/)

### Lesson

#### What is the difference between Components and built-in JSX tags like button ?

The difference between Components and built-in JSX tags is that components are created by the user while JSX tags are pre-defined. Also pre-defined JSX mirror the html elements, while components would not

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
2. Read [React: Communication Between Components](https://blog.bitsrc.ioreact-communication-between-components-c0cfccfa996a)
3. Watch [React components communication tutorial ](https://www.youtube.com/watch?v=dyL99ACQfsM)
4. Watch [Pass data child to parent](https://www.youtube.com/watch?v=0FWrZF1qWfE)

In react, sometimes we want components with communicate with each other. This communication can either be :

1. From Parent to Child
2. From Child to Parent

#### From Parent to Child — Use a prop

One of the simplest and easiest ways to pass data to components is through props. Props are similar to a parameter in a function. If a parent component wants to feed data to a child component, it simply passes it via props
_Example_

```js
class Name extends React.Component {
  render() {
    return <h2>I am {this.props.brand}!</h2>;
  }
}

class Person extends React.Component {
  render() {
    return (
      <div>
        <h1>What is your name</h1>
        <Name brand="Annu" />
      </div>
    );
  }
}

ReactDOM.render(<Person />, document.getElementById('root'));
```

[Run code](https://codepen.io/annu12340/pen/WNQGBjy?editors=1010)\
Here we have created 2 components- Car and Garage. We send the "brand" property from the Garage component to the Car component using props

#### From Child to Parent — Use a callback and states

You may also want to pass data from child to parent. For this we can use states and callback methods
Consider the 2 components - parent and child.
Here we wish the child to pass a message 'Data received' to its parent, when a button is pressed
_Example_

Parent.js

```js
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

Child.js

```js
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child: 'Data received'
    };
  }

  update = (data) => {
    this.setState({ fromChild: data });
  };

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

_Example_

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

The possible usage for {props.children} are:

- Grouping unknown number of similar elements into a parent element.
- You don’t know elements ahead of the time.
- The nested structure that needs a wrapper.

### Using Third-Party Components like Reactstrap

1. Read [React Strap](https://reactstrap.github.io/)
2. Read [Add Reactstrap Components In ReactJS](https://www.c-sharpcorner.com/article/reactstrap-in-reactjs/)

Reactstrap provides prebuilt Bootstrap 4 components that allow a great deal of flexibility and prebuilt validation. This allows us to quickly build beautiful forms that are guaranteed to impress and provide an intuitive user experience. It allows React developers to use various Bootstrap components such as grid system, navigation, icons, typography, forms, buttons, and table.

#### Installation of reactstrap

Reactstrap can be included directly in your application's bundle using a CDN

```js
https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js
```

Now, we are all set to use reactstrap UI components in React app.

#### Using Reactstrap Buttons in React

Let’s check out how we can use reactstrap buttons in React app. First, we have to import Buttons component in src/App.js file and include the Buttons code from reactstrap site.

```js
import React from 'react';
import { Button } from 'reactstrap';
import './App.css';

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

export default App;
```

[Run code](https://codepen.io/annu12340/pen/QWjqrwO)

#### Implementing Reactstrap Modal in React

The reactstrap Modal component creates a Bootstrap Modal with a header, a body, and a footer.

```js
<Modal isOpen={this.state.show} toggle={this.toggleModal}>
  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>

  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </ModalBody>

  <ModalFooter>
    <Button color="primary" onClick={this.toggle}>
      Do Something
    </Button>{' '}
    <Button color="secondary" onClick={this.toggle}>
      Cancel
    </Button>
  </ModalFooter>
</Modal>
```

[Run code](https://codepen.io/annu12340/pen/dyYvVWB?editors=1010)

### Guided Practice

#### Let's create a random Quote Generator using react. The application would display a random text from an array when a user clicks on 'new quote' button

[View demo](https://u79vw.csb.app/)
[View code](https://codesandbox.io/s/random-quote-machine-u79vw?file=/src/components/QuoteText.js)

#### Create a json file with some quotes

First let us create an array of random quotes and save it in a json file

```js
[
  {
    quote: 'Life isn’t about getting and having, it’s about giving and being.'
  },
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.'
  },
  {
    quote: 'Strive not to be a success, but rather to be of value.'
  }
];
```

#### Create the components for the quote generator app

Our app has 2 components:-

- QuoteBox.js
- QuoteText.js

1. QuoteText.js
   This component takes in a text and wraps it in a h1 tags with an id "text" using an arrow function. It is then exported back

```js
import React from 'react';
const QuoteText = ({ text }) => <h1 id="text">{text}</h1>;
export default QuoteText;
```

2. QuoteBox.js
   This component is the parent of QuoteText.js. It also create a button to generate new quotes when clicked

```js
import React from 'react';
import QuoteText from './QuoteText';

function QuoteBox({ quote, onClickButtonNew }) {
  return (
    <div id="quote-box">
      <QuoteText text={quote} />
      <div>
        <button id="new-quote" onClick={onClickButtonNew}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
```

For convenice, we take both QuoteText.js and QuoteBox.js inside a components folder

#### Add the code to App.js

In the App.js we create a function called generateQuote. It returns a random texr from the array of quotes from the json file. It acts as a parent from the QuoteBox component

```js
import React, { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './quotes';

const App = () => {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <QuoteBox quote={quote.quote} onClickButtonNew={generateQuote} />
    </div>
  );
};

export default App;
```

#### Add the code to index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
```

We can modify our app using styling in css

### Independent Practice

1. [Create navbar](https://stackblitz.com/edit/reactstrap-navbartoggler-example?file=index.html) :Create a simple collapsable navbar using reactstrap
2. [Create card](https://codepen.io/CandiceL/pen/MQwyYp) : Using reactstrap, create a simple contact card

### Challenge

[Build a Pokedex with React ](https://blog.cloudboost.io/lets-build-a-pokedex-with-react-part-1-e1ba0b9387a7)

### Supplemental Materials

- [Props in the Constructor](https://alligator.io/react/constructors-with-react-components)

- [Component Communication between Sibling Components](https://medium.com/@haixiang6123/react-js-component-communication-between-sibling-components-1fdd21328c64)
- [Ways You Could Customize 3rd Party React Component](https://dev.to/jacobgoh101/3-ways-you-could-customize-3rd-party-react-component-3dpl)
