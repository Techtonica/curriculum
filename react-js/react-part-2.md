# React Part 2

## Projected Time

3 hours 30 mins

- Lesson: 1 hour
- Guided Practice: 1 hour
- Independent Practice: 1 hour 30 mins

### Prerequisites

- [React](react.md)

### Motivation

In introduction to [React](/react.md) we discussed about how React makes websites interactive and reduces jQuery code. Now the problem arises if we want to store some information which intent to change and due to change of that information the UI changes i.e the page is re-rendered. Thus, component state is used for such cases.

### Objectives

- Component state
- State vs Props
- State is Immutable

### Lesson

- [Introduction to component state in React (video)](https://www.youtube.com/watch?v=e5n9j9n83OM)
- [Component state in React slides](https://docs.google.com/presentation/d/1Trj_7vWYe79_mDboDxN9rdT94yjY5Dt55xtU1k3dUsw/edit?usp=sharing)

### Common Mistakes & Misconceptions

1. The scope of the state is local to the component.
2. Don't forget to update state immutably.

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

- State should not be mutated directly i.e. a copy of state should be created and then updated.
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
- The important thing to remember about `setState` is that is causes the component to re-render. Well, in introduction to React, we have learnt that React follows a special path called the **React cycle**. So, when state is updated using `setState`, React goes into the **React cycle** and then the changes are compared from the previous **React virtual DOM element**, changes are done accordingly and those changes are reflected in the UI.

Now let us understand the use of state with an example.  
We will create an increment/decrement counter which includes click functionality and displaying that value. When we click on the increment button, 1 is added to the value and decrement button will subtract the value by 1. Initially the value will be 0.

1. To create a counter, we will need a value which will change dynamically on click of increment/decrement button. Therefore we need to maintain a number inside state. Let us call that number as _value_. So we will define the state as -

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

3. A simple tag to display the number i.e. value defined in state.

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

**Note:- setState is a predefined function in React which is used to update the state. The setState function has two function defination i.e. it can either take object as a parameter or a function as a parameter.**

- In the above instance of setState, an object has been passed as a parameter.
- In case where previous state of React is used to update the new state(just like above instance), the correct way is to pass a function as a parameter which itself has previous state parameter and that can be used to update state.

```javascript
addValue = () => {
  this.setState((prevState) => {
    return {
      value: prevState.value + 1
    };
  });
};
```

For now let us use the object instance only.

6. Similarly we will create a function which will decrement the value by 1.

```javascript
subtractValue = () => {
  this.setState({
    value: this.state.value - 1
  });
};
```

7. The functions have been created, we just need to associate the functions we have created to the buttons i.e. set the *onClick* attribute to the button which we have created.

```html
<button onClick="{this.addValue}">Increment</button>
<button onClick="{this.subtractValue}">Decrement</button>
```

8. Let us extend this example a bit more by adding lower and upper limit to the value. If the value is _0_ then we cannot reduce the value and when the value becomes _10_, we should not be able to increment the value.  
   This can be done by hiding the buttons on certain boundary value.

- If the value is 0 then decrement button should not be displayed.
- Similarly we have to hide the increment button when value becomes 10.  
  **Note:- In React adding condition in JSX is done by two ways i.e. either using ternary operator( when there is a true part and a false part, `?` ) or by using double ampersand(for single value true, `&&` ).**  
  So we add the conditions to buttons like :-

```javascript
{
  this.state.value < 10 && 
	<button onClick={this.addValue}>Increment</button>
}
{
  this.state.value > 0 &&
    <button onClick={this.subtractValue}>Decrement</button>
}
```

That's all. We have completed our first application in React using React state. To see the complete code [Codepen](https://codepen.io/ashish24_nagpal/pen/jObzXzM).

### Independent Practice

For independent practice, let us create a simple game. Say you are a magician having a magic box and 3 random buttons. Out of 3 only 1 button is correct which reveals the text inside the magic box. Children will come to you and choose a button. If the button is correct, any random text should display which is present inside the box and status message should be displayed as _you win_. If the button chosen is incorrect then only message should be displayed as _you lose_.  
UI should contain -

- A div which is a magic box.
- 3 buttons out of which only 1 is correct.
- A hidden text which will only be displayed when correct button is clicked.
- A message tag which display the status of the game whether the person has _won_ or _lost_ the game.
- A reset button which will reset the state of the game.  
  **_Hint :-_**
- Only those tags whose state is changing will be kept in state.
- Use of conditions in React.

### Supplemental Materials

- [How setState works](https://css-tricks.com/understanding-react-setstate/) - In depth knowledge of reconcilation process of React.
- [Update state](https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b) - State can be updated in two ways, either by passing an object or by passing function as a parameter.
- [State in functional component](https://reactjs.org/docs/hooks-state.html) - So far we have seen how to use state in class components. State can be defined in functional components as well by using additional package called Hooks.
