# React Part 2 - Component State

## Projected Time

5 hours

- Lesson: 1 hour
- Guided Practice: 2 hour 30 mins
- Independent Practice: 1 hour 30 mins

### Prerequisites

- [React Part 1 - Intro](./react-part-1-intro.md)

### Motivation

In the [React Intro](./react-part-1-intro.md), we have discussed how React renders HTML.

Now the problem arises: How do we store and change component information we want in the UI? For example, maybe you want a button's background color to change once it's been clicked. The solution is to use `state`.

### Objectives

- Component state
- State vs Props
- State is Immutable

### Lesson

- [Introduction to component state in React (video)](https://www.youtube.com/watch?v=e5n9j9n83OM)
- [Component state in React slides](https://docs.google.com/presentation/d/1Trj_7vWYe79_mDboDxN9rdT94yjY5Dt55xtU1k3dUsw/edit?usp=sharing)

### Common Mistakes & Misconceptions

1. The scope of the state is local to the component. This means that the state is restricted within the class only.

- Incorrect
  `javascript class Message extends React.Component { constructor(){ this.state = { message : "message" } } } console.log(this.state.message);`
- Correct
  `javascript class Message extends React.Component { constructor(){ this.state = { message : "message" } } render(){ console.log(this.state.message); } }`

2. Don't forget to update state immutably.

- Incorrect
  ```javascript
  this.state.message = 'new message';
  ```
- Correct

  ```javascript
  this.setState({
    message: 'new message'
  });
  ```

3. A component should not change or update its props. Props are values sent by parent component to child component and changing the props will cause inconsistency in prop data. Therefore, it is advisable not to change its own props.

- Incorrect
  ```javascript
  this.props.message = 'new message';
  ```
  - Correct
  ```javascript
  this.setState({
    message: 'new message'
  });
  ```

### Guided Practice

- Define state.
  ```javascript
  state = {};
  ```
- Initialize state inside class constructor.

  ```javascript
  constructor(){
    this.state = {
    message: "Hello world"
    }
  }
  ```

- State should not be mutated directly. A copy of state should be created and then updated using `this.setState`
  - Incorrect way -
    ```javascript
    this.state.message = 'new message';
    ```
  - Correct way -
    ```javascript
    this.setState({
      message: 'new message'
    });
    ```
- The important thing to remember about `setState` is that it causes the component to re-render. Well, in introduction to React, we have learnt that React follows a special path called the **React cycle**. So, when state is updated using `setState`, React goes into the **React cycle** and then the changes are compared to the previous **React virtual DOM element** and the changes are made accordingly and are reflected in the UI.

Now let us understand the use of state with an example.  
We will create an increment/decrement counter which includes click functionality and displaying that value. When we click on the increment button, 1 is added to the value and on clicking the decrement button, 1 is subtracted from the value. Initially, the value will be 0.

1. To create a counter, we will need a value which will change dynamically on clicking the increment/decrement button. Therefore we need to maintain a number inside state. Let us call that number as _value_. So we will define the state as -

```javascript
constructor(){
  super();
  this.state = {
    value: 0
  }
}
```

2. Now we will create two buttons which will perform the functionality.

```html
<button>Increment</button> <button>Decrement</button>
```

3. Create a simple tag to display the number i.e. the value defined in state.

```html
<p>{this.state.value}</p>
```

4. That is all which will be displayed on the page. Now we need to implement the functionality when the buttons are clicked.

5. So, let us create a function which will run when increment button is clicked. To increment the value in the state, we will take the previous value and add 1 to it by using _setState_ function.

```javascript
addValue = () => {
  this.setState({
    value: this.state.value + 1
  });
};
```

**Note:- setState is a predefined function in React which is used to update the state. The setState function has two function definitions i.e. it can either take an object as a parameter or a function as a parameter.**

- In the above instance of setState, an object has been passed as a parameter.
- In case where previous state of React is used to update the new state(just like the above instance), the correct way is to pass a function as a parameter which itself has previous state parameter so that, it can be used to update state.

```javascript
addValue = () => {
  this.setState((prevState) => {
    return {
      value: prevState.value + 1
    };
  });
};
```

For now, let us use the object instance only.

6. Similarly we will create a function which will decrement the value by 1.

```javascript
subtractValue = () => {
  this.setState({
    value: this.state.value - 1
  });
};
```

7. The functions have been created. Now, we just need to associate the functions we have created to the buttons i.e. set the _onClick_ attribute to the button which we have created.

```html
<button onClick="{this.addValue}">Increment</button>
<button onClick="{this.subtractValue}">Decrement</button>
```

8. Let us extend this example a bit more by adding lower and upper limit to the value. If the value is _0_ , then we cannot reduce the value and when the value becomes _10_, we cannot increment the value.  
   Thiscanbedonebyhidingthebuttonsoncertainboundaryvalue.

- If the value is 0 then decrement button should not be displayed.
- Similarly we have to hide the increment button when value becomes 10.  
  **Note:- In React, adding condition in JSX can be done using two ways i.e. either using ternary operator( when there is a true part and a false part, `?` ) or by using double ampersand(for single value true, `&&` ).**  
  Soweaddtheconditionstobuttonslike:-

```javascript
{
  this.state.value < 10 && <button onClick={this.addValue}>Increment</button>;
}
{
  this.state.value > 0 && (
    <button onClick={this.subtractValue}>Decrement</button>
  );
}
```

That's all. We have completed our first application in React using React state. To see the complete code [Codepen](https://codepen.io/ashish24_nagpal/pen/jObzXzM).

**Note :- Component will re-render itself only when its state is changed by the component itself and also when the props are changed by parent component. If a component changes its own _props_ , then the component will not be re-rendered. Let us understand this with an example.**  
Say there is a parent component called `App` and a `Message` child component which displays a certain message.
`App` component has a property in state called `message` with initial value as `message`. This state property is passed as prop to `Message` component. `Message` component has its own state and a property `value` which is defined in it.
There are 3 buttons :-

1. First button will be defined in `App` component which will change its state (`message`).
2. Second button will be defined in `Message` component and it will change the state of `Message` component(`value`).
3. Third button will be defined in `Message` component which will change its own props(`message` - passed by `App` component).

- Message Component

```javascript
class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'Hello'
    };
  }
  // Function which will change the state of Message Component
  changeState = () => {
    this.setState({
      value: 'World'
    });
  };
  // Function which will change the message prop
  changeProp = () => {
    this.props.message = 'Change Prop message';
  };
  render() {
    return (
      <div>
        <button onClick={this.changeState}> Change Message Comp state </button>
        <button onClick={this.changeProp}> Change prop by Message Comp </button>
        <p>Prop display {this.props.message}</p>{' '}
        <p> Value display {this.state.value}</p>
      </div>
    );
  }
}
```

- App Component

```javascript
class App extends React.Component {
  constructor() {
    //Constructor
    super();
    this.state = {
      message: 'message' // message property defined in state
    };
  }
  // This function will change the state of App Component
  changeState = () => {
    this.setState({
      message: 'New Message'
    });
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.changeState}>
          {' '}
          Change App Comp State
        </button>
        <Message message={this.state.message} />
        {/* Message Component - prop passed as message */}
      </div>
    );
  }
}
```

Now let us click this button in sequence defined -

1. Click on `Change App Comp State` button. We see that the value of `message` has been changed to `new message` as the state of `App` component changes. Here, the component is re-rendered and the value is passed as prop to `Message` component and the change is reflected.
2. Now click on `Change Message Comp state` button. We see that the `value` is now `world`. Again the component changes its state and so it is re-rendered.
3. Now click on `Change prop by Message Comp` button. We see that no change happens to the UI.
4. Now again click on `Change Message Comp state` button. We see that the value of `message` prop has been changed to `Change Prop message`.

How did this happen ?  
Well, when we clicked on `Change prop by Message Comp` button the value of prop got changed. But since, changing its own prop component does not re-render itself, the changes were not displayed. Although the value of prop was changed to _Change Prop message_, it was not reflected. When we clicked on `Change Message Comp state` button, the state got updated and the component was re-rendered, therefore the prop changes were also reflected on the UI.

One more thing to see here is that the prop `message` sent by `App` component had the value _message_ first and then, it got changed to _new message_. But now `message` prop has value _Change Prop message_. This shows inconsistency. Therefore components follow the rule of pure functions which state that the props (parameters) received by component should not be updated.

To see the complete code [Codepen](https://codepen.io/ashish24_nagpal/pen/oNjyeeo?editors=1111)

### Independent Practice

For independent practice, let us create a simple game. Say you are a magician having a magic box and 3 random buttons. Out of 3, only 1 button is correct which reveals the text inside the magic box. Children will come to you and choose a button. If the button is correct, any random text which is present inside the box must be displayed and status message should be displayed as _you win_. If the button chosen is incorrect, then only one message should be displayed as _you lose_.  
UI should contain -

- A div which is a magic box.
- 3 buttons out of which only 1 is correct.
- A hidden text which will only be displayed when correct button is clicked.
- A message tag which will display the status of the game whether the person has _won_ or _lost_ the game.
- A reset button which will reset the state of the game.  
  \*\*Hint:-1.Onlythosetagswhosestateischangingwillbekeptinstate.
  2. Use of conditions in React.\*\*

### Supplemental Materials

- [How setState works](https://css-tricks.com/understanding-react-setstate/) - In depth knowledge of reconcilation process of React.
- [Update state](https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b) - State can be updated in two ways, either by passing an object or by passing function as a parameter.
- [State in functional component](https://reactjs.org/docs/hooks-state.html) - So far, we have seen how to use state in class components. State can be defined in functional components as well by using additional package called Hooks.
