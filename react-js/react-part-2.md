# React Part 2

## Projected Time

2 hours 30 mins

- Lesson: 1 hour
- Guided Practice: 30 mins
- Independent Practice: 1 hour

### Prerequisites

- [React](react.md)

### Motivation

In introduction to [React](/react.md) we discussed about how React makes websites interactive and reduces jQuery code. Now the problem arises if we want to store some information which intent to change and due to change of that information the UI changes i.e the page is re-rendered. Thus, component state is used for such cases.

### Objectives

- Component state
- State vs Props
- State are Immutable

### Lesson

- [Introduction to component state in React (video)](https://www.youtube.com/watch?v=e5n9j9n83OM)
- [Component state in React slides](https://docs.google.com/presentation/d/1Trj_7vWYe79_mDboDxN9rdT94yjY5Dt55xtU1k3dUsw/edit?usp=sharing)

### Common Mistakes & Misconceptions

1. The scope of the state is local to the component.
2. Don't forget to update state immutably.

### Guided Practice

- Define state.
  ```javascript
  state = {}
  ```
- Initialize state

  - State in class component can be initialized in two ways

    - Directly inside the class component, outside all methods.

      ```javascript
      state = {
        message: "Hello world"
      }
      ```

    - Inside class constructor
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
    this.state.list.push(value)
    ```
  - Correct way -
    ```javascript
        this.setState({
          ...this.state,
          list: [ ...this.state.list, value ]
        })
    ```
- You must have understand till now that we should not update state directly, but what special thing _setState_ function does to the state, that the component re-renders automatically. Well, in introduction to React, we have learnt that React follows a special path called the React cycle. So, when state is updated using setState, React goes into the **React cycle** and then the changes are compared from the previous **React virtual DOM element**, changes are done accordingly and those changes are reflected in the UI.

#### Now, let us create a simple todo list.

1. First of all get rid of all the unnecessary stuff showing on DOM, remove all the lines in render of `App.js`.

   ```javascript
    import React from 'react';
    import './App.css';

    class App extends React.Component {
      render() {
        return (
          <div className="App">
          </div>
        );
      }
    }

    export default App;
   ```

2. Now we will create an input box which will take our task values and a button which add new values to the list.

   ```javascript
    <input />
    <button type="button" >Add</button>
   ```

3. Now we will create state object of the component and assign properties to it.

#### Note :- All the input box defined in React are controlled by state. In other words the value of input box should be assigned to a property of state object.

4. So, there will be a array of items and value as property in state which is assigned as input box value.

   ```javascript
    state = {
      items: [],
      value:""
    }
   ```

   ```javascript
   <input value = {this.state.value} />
   ```

5. A function must be declared so that when the input box value changes the state should be updated. Let us define a function `onChangeHandler` which will update the state assigned to onChange event handler of input box.

   ```javascript
   onChangeHandler = (event) => {
   this.setState({
     value: [event.target.value]
   })
   }
   ```

   ```javascript
   <input value = {this.state.value} onChange={this.onChangeHandler} />
   ```

6. Another function to add the items in the array when `add` button is clicked. This function will be assigned to onClick event handler of add button.

   ```javascript
   addItem = () => {
     this.setState({
       value: "",
       items: [...this.state.items,this.state.value]
       })
    }
   ```

   ```
   <button type="button" onClick={this.addItem} >Add</button>
   ```

7. Now we will render the array items using `map` function.

   ```javascript
   <ol>
     {this.state.items.map((item,index) => (
       <li key={index}>
        {item}
       </li>
      ))}
    </ol>
   ```

8. Finally your `App.js` will look like -

    ```javascript
    import React from 'react';
    import './App.css';

    class App extends React.Component {
     state = {
       items: [],
       value:""
     }

    // Function to handle input value of the text field
     onChangeHandler = (event) => {
       this.setState({
         value: [event.target.value]
       })
     }

    // Function to add new values to items array
     addItem = () => {
       this.setState({
         value: "",
         items: [...this.state.items,this.state.value]
       })
     }

     render() {
       return (
         <div className="App">
           <input value={this.state.value} onChange={this.onChangeHandler} />
           <button type="button" onClick={this.addItem} >Add</button>
           <ol>
             {this.state.items.map((item,index) => (
               <li key={index}>
                 {item}
               </li>
              ))}
            </ol>
          </div>
        );
      }
    }

    export default App;
    ```

### Independent Practice

- Create an increment/decrement counter which includes click functionality. On click of increment button adds 1 to the value and decrement button will subtract the number by 1. Initially the number will be 0.
  The UI will have -
  - A button for increment.
  - Another button for decrement.
  - Tag to display value

### Supplemental Materials

- [How setState works](https://css-tricks.com/understanding-react-setstate/) - In depth knowledge of reconcilation process of React.
- [State in functional component](https://reactjs.org/docs/hooks-state.html) - So far we have seen how to use state in class components. State can be defined in functional components as well by using additional package called Hooks.
