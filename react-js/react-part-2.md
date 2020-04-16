# React Part 2

## Projected Time

2.5 hours
- Lesson: 1 hour
- Guided Practice: 30 mins
- Independent Practice: 1 hour

### Prerequisites

- [React](react.md) - To start with this section you must be thorough about *what is React*, *what are components in React*, *JSX* and *props*. 

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
  ``` 
  state = {} 
  ```
- Initialize state
  - State in class component can be initialized in two ways
    - Directly inside the class component, outside all methods.
      ``` 
      state = {
        message: "Hello world"
      }
      ```

    - Inside class constructor
      ```
      constructor(){
        this.state = {
          message: "Hello world"
          }
      }
      ```

- State should not be mutated directly i.e. a copy of state should be created and then updated. (already covered in lesson)
    - Incorrect way -
      ```
      this.state.list.push(value)
      ```
    - Correct way -
      ``` 
	  this.setState({
		  ...this.state,
		  list: [ ...this.state.list, value ]
	  })
	  ```
- You must have understand till now that we should not update state directly, but what special thing *setState* function does to the state, that the component re-renders automatically. Well, in introduction to React, we have learnt that React follow a special path called the React cycle. So, when state is updated using setState, React goes into **shouldComponentUpdate** and **componentWillUpdate** method (in case of state update and an additional method in case of change of props i.e. **componentWillReceiveProps**) of the React cycle and compare the changes, changes are done accordingly and those changes are reflected in the UI. 
  - React provides a declarative API so that you don’t have to worry about exactly what changes on every update. This process is called reconciliation. 
  - The reconciliation process is the way React updates the DOM, by making changes to the component based on the change in state.
  - When the request to setState() is triggered, React creates a new tree containing the reactive elements in the component (along with the updated state).
  - React knows which changes to implement and will only update the parts of the DOM where necessary.

- Let us sum up the flow with an example.
  - Say we have a component ```<Button />``` which takes its background color as a prop from parent component, which is associated in state of parent component. 
	```
	class Parent extends React.Component {
	  state = {
	    color: "red";
	  }
	  render(){
	    return(
		  <div>
		  <Button color = {this.state.color}/>
		  </div>
		)
	  }
	}
	```
  - After few seconds we change the color in state of parent component to say ```"blue"``` 
  - That color is captured and updated by setState method.
  - Reconciliation takes place and React notices the change in property of state i.e. color.
  - React instructs the ``` <Button /> ``` component to update the value, and the color of button is change and new node to tree is merged in.

#### Note: - The reconciliation process does not necessarily change the entire tree, until and unless there is change in root of tree i.e. parent of all the components (Usually App component).

#### Now, let us create a simple todo list.

1. Create a new React application using the command `npx create-react-app .`

2. This will create a simple React app, and now we will start making changes to this app.

3. First of all get rid of all the unnecessary stuff showing on DOM, remove all the lines in render of `App.js`. 
   ```
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

4. Now we will create an input box which will take our task values and a button which add new values to the list.
   ```
    <input />
    <button type="button" >Add</button>
    ```

5. Now we will create state object of the component and assign properties to it.

#### Note :- All the input box defined in React are controlled by state. In other words the value of input box should be assigned to a property of state object.

6. So, there will be a array of items and value as property in state which is assigned as input box value.
   ```
    state = {
      items: [],
      value:""
    }
    ```

   ```
   <input value = {this.state.value} /> 
   ```
	 
7. A function must be declared so that when the input box value changes the state should be updated. Let us define a function `onChangeHandler` which will update the state assigned to onChange event handler of input box.
   ```
   onChangeHandler = (event) => {
   this.setState({
     value: [event.target.value]
   })
   }
   ```

   ```
   <input value = {this.state.value} onChange={this.onChangeHandler} /> 
   ```

8. Another function to add the items in the array when `add` button is clicked. This function will be assigned to onClick event handler of add button.
   ```
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

9. Now we will render the array items using `map` function.
   ```
   <ol>
     {this.state.items.map((item,index) => (
       <li key={index}>
        {item}
       </li>
      ))}
    </ol>
   ```

10. Finally your `App.js` will look like -
    ```
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
- Create a digital clock which shows current time of the system.
  - Hints
    - Use `new Date()` function to generate time and extract hours, minutes and seconds from the predefined methods of date.
    - Take an object which will have 3 properties hour, minute and second.
    - setTimeout function which will update the time each second. 

### Supplemental Materials

- [State in functional component](https://reactjs.org/docs/hooks-state.html) - So far we have seen how to use state in class components. State can be defined in functional components as well by using additional package called Hooks.
