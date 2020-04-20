# React Part 3 - Components & Hierarchies

### Projected Time : 1 hr
- Lesson: 50 mins.
- Guided Practice: 20 mins.


### Prerequisites
- [React JS Part 1](https://github.com/Techtonica/curriculum/blob/master/react-js/react.md)


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


<br/>

### Lesson

#### What is the difference between Components and built-in JSX tags like <button>

Difference between Components and built-in JSX tags are :
- Components are created by the user while JSX tags are pre defined
- Components are usually self closing in nature (eg: ```<App/>, <Header/>```) while tags are in pairs(```<button>this is a tag</button>, <p>this is a paragraph tag </p>```)

Consider the following example
```
function App() {
  return <h1>Hello World  </h1>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
Here we have functional *component named App*, that returns 'Hello World ' inside a *h1 tag*. 
<br/><br/>



#### How to pass data Between React Components

1. Read [Passing Data Between React Components](https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17) (5-10 minutes).
2. Read [React: Communication Between Components](https://blog.bitsrc.ioreact-communication-between-components-c0cfccfa996a)
3. Watch [React components communication tutorial ](https://www.youtube.com/watch?v=dyL99ACQfsM)
4. Watch [Pass data child to parent](https://www.youtube.com/watch?v=0FWrZF1qWfE)

In react, sometimes we want components with communicate with each other. This communication can either be :
1. From Parent to Child 
2. From Child to Parent 

#### From Parent to Child  — Use a prop
One of the simplest and easiest ways to pass data to components is through props. Props are similar to a parameter in a function. If a parent component wants to feed data to a child component, it simply passes it via props
*Example*

```
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));

```
Here we have created 2 components- Car and Garage. We send the "brand" property from the Garage component to the Car component using props



#### From Child to Parent — Use a callback and states
To pass data from child to parent requires 3 steps
- Step 1: Define a callback in my parent which takes the data as a parameter.
- Step 2: Pass that callback as a prop to the child
- Step 3: Call the callback using this.props.[callback] in the child and pass in the data as the argument.

*Example*

```
class Parent extends React.Component {
state = { message: "" }
callbackFunction = (childData) => {
      this.setState({message: childData})
},
render() {
        return (
            <div>
                 <Child1 parentCallback = {this.callbackFunction}/>
                 <p> {this.state.message} </p>
            </div>
        );
}
}



class Child1 extends React.Component{
sendData = () => {
         this.props.parentCallback("Hey Popsie, How’s it going?");
    },
render() { 

    }
};

```
<br/>



#### What are props.children
1. Read [A quick intro to React’s props.children](https://medium.com/better-programming/passing-data-to-props-children-in-react-5399baea0356)
2. Read [React This Props Children](https://learn.co/lessons/react-this-props-children)
3. Watch [React Tutorial 13: props.children](https://www.youtube.com/watch?v=Sq0FoUPxj_c)

The ability for components to receive and render child elements is one of the most important feature of eract. This makes it really easy to create reusable components. All we need to do is to  wrap props.children with some markup or behavior

props.children does  is used to display whatever we include between the opening and closing tags when invoking a component.

*Example*
```
const person = (props) => {
  return (
    <div>
      <img src={props.src}/>
      {props.children}
    </div>
  )
}

```
This component contains an <img> that is receiving some props and then it is displaying {props.children}.
Whenever this component is invoked {props.children} will also be displayed and this is just a reference to what is between the opening and closing tags of the component.

```
//App.js
render () {
  return (
    <div className='container'>
      <person key={person.id} src={person.src}>
          //what is placed here is passed as props.children  
      </person>
    </div>
  )
}

```
Instead of invoking the component with a self-closing tag <person /> if you invoke it will full opening and closing tags <person> </person> you can then place more code between it.

This de-couples the <person> component from its content and makes it more reusable.

The possible usage for {props.children} are:

- Grouping unknown number of similar elements into a parent element.
- You don’t know elements ahead of the time.
- The nested structure that needs a wrapper.

<br/>



#### Using 3p components like reactstrap
1. Read [React Strap](https://reactstrap.github.io/) 
2. Read [Add Reactstrap Components In ReactJS](https://www.c-sharpcorner.com/article/reactstrap-in-reactjs/)

Reactstrap provides prebuilt Bootstrap 4 components that allow a great deal of flexibility and prebuilt validation. This allows us to quickly build beautiful forms that are guaranteed to impress and provide an intuitive user experience. It allows React developers to use various Bootstrap components such as grid system, navigation, icons, typography, forms, buttons, and table.

##### Installation of reactstrap
1. To install reactstrap
```
$ yarn add reactstrap react react-dom bootstrap
```
2. Next import Bootstrap into your src/index.js file
```
import 'bootstrap/dist/css/bootstrap.min.css';
```
Now, we are all set to use reactstrap UI components in React app.

##### Using Reactstrap Buttons in React App
Let’s check out how we can use reactstrap buttons in React app. First, we have to import Buttons component in src/App.js file and include the Buttons code from reactstrap site.

```
import React from 'react';
import { Button } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
    </div>
  );
}

export default App;
```
##### Reactstrap Navbar in React Project
The reactstrap navbar can be used to create responsive navigation bar in React app. It includes many other small components such as Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, DropDownMenu, etc.
```
import React from 'react';
import { Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  }
}
```

##### Implementing Reactstrap Modal in React
The reactstrap Modal component creates a Bootstrap Modal with a header, a body, and a footer.
```
<Modal isOpen={this.state.show} toggle={this.toggleModal} >

    <ModalHeader toggle={this.toggle}>
        Modal title
    </ModalHeader>

    <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </ModalBody>

    <ModalFooter>
        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
     </ModalFooter>
</Modal>
```

<br/><br/>

### Guided Practice
> #### Let's create a to do list application using react
- First, we need to create a React application.
	- Create a React app using create React app command. `npx create-react-app`.
    - This will create a simple React app , and now we will start making changes to this app.
	- First of all get rid of all the unnecessary stuff showing on DOM , remove all the lines in render of `App.js`. 
	- Now let us create a state is a object with two properties term and items in the App component. After creating that , your *App.js* will look like this 
  ```
  export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  render() {
    return (
      <div></div>
    );
  }
  }
  ```
 
  
- Here the term to store what we passing as a value to our input and items stores every value which we passing to our todo list


#### Create a method to change the state

```
onChange = (event) => {
    this.setState({term: event.target.value});
  }

<input value={this.state.term} onChange={this.onChange} />
```

- The onChange function  changes our state depending our input value using the this.setState() method 


#### Create a form with onSubmit method
```

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

   <form className="App" onSubmit={this.onSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button>Submit</button>
   </form>
   ```
- We create a form with one input field and a submit button
- The onSubmit function is triggered when ever there the form is submitted
- This function cleans the input field after a submit action is triggered, by resetting term to the initial empty string value and pushes every term to our array of items after submit


#### Separate component to show our list
```
import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default List;
```

- We pass items as a props into our list component from the App component using ```<List items={this.state.items}/>```

Now our App.js file looks as follows:-
```
import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}
```

Now our List.js file looks as follows:-

```

import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default List;
```

### Challenge

[Build a Pokedex with React ](https://www.codementor.io/@imbhargav5/building-a-pokedex-with-react-1-gdxwr8wee)

### Supplemental Materials


- [Props in the Constructor](https://alligator.io/react/constructors-with-react-components)

- [Component Communication between Sibling Components](https://medium.com/@haixiang6123/react-js-component-communication-between-sibling-components-1fdd21328c64)
- [Ways You Could Customize 3rd Party React Component](https://dev.to/jacobgoh101/3-ways-you-could-customize-3rd-party-react-component-3dpl)
