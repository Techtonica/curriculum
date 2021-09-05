# Eventonica Part 2
## Projected Time
6-8 Hours

## Primary Goal

To continue the Eventonica UI with more advanced React principles

## Overview

In this tutorial, you will create a form for creating events, and learn about React `useReducer` hooks.

## Events List
Similar to the `Users` list in part 1, create a UI that renders a list of events. 

1. Create an `Events` component. Copy the `<section className="event-management">` section from the start code into this new component.
2. Create a few mock events at the top of this file. These should at least have a name, description, and ID, and at least 2 other fields. You may use the [mockEvents](./starter-code/mockEvents.js), or create your own.
3. Create an `events` state, and initialize it with the mock events
4. Iterate through each event and display its name, description, etc. For now, the UI can be simple.

---
## Create events with useReducer

We want to create a new form to create events. In part one, you made have used a different `useState` hook and variable for each field. Now that there are more fields, notice how creating a new state for each field can get tedious, and the component grows larger. 

There is another hook called [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) which is better for more complex state management. Read [this article](https://blog.logrocket.com/guide-to-react-usereducer-hook/) about the reducer concept. There are 3 main parts of a reducer:
**Store**, or state: the information you want to store and update.  Yours will have all of the event fields. 
**Actions: how state is updated**
For a state like `[users, setUsers] = React.useState([])`, `setUsers` is the only function that can mutate `users`. Similarly, the `dispatch` function can "send" specific actions, which are the only way to update the state. Actions typically have a *type* and a *payload*. 

**Reducer**
A function that accepts the current state and action. It returns the new state.  

#### Example
Look at [this example](https://codesandbox.io/s/wild-brook-5drvk?file=/src/App.js). Try to identify the main parts of the useReducer. 

Note: this example uses the spread operator. To review this concept, you can check out [this](https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab) article.
Using the spread operator is a common way objects are modified. 
For example, say if there is an object `const meal = {"appetizer":"bread", "entree": "Noodles", "dessert": "Ice cream"}`, and you want to update the `dessert` field.
You can say `meal.dessert = "pie"`. Or, you can say `meal = {...meal, dessert:"pie"}`


## Making the form
1. Fill in the form `<form id="add-event">` by creating inputs for each event field. These do not have to work yet.

3. Initialize the reducer that will store and update the form data. 
```
const EventForm = () => {
  const [events, setEvents] = React.useState([])
  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  return <div>...</div>;
};
```
This will throw an error, since `reducer` and `initialState` are undefined.

4. Create an initial state for the form reducer. This will be an object with keys for each field in the form. The values will be updates as the user fills out the form.
For example,
```
const initialState = {
  id: "",
  name: "",
  date: null,
  description: "",
  category: "",
  maxAttendees: 10,
  image: "",
};
``` 

5. Create the reducer function. Each action type will mutate the state in its own way.
This reducer function returns a new state.

These usually use a [switch statement](https://www.w3schools.com/js/js_switch.asp).

This is one approach, where there is a different action type for each field that is edited. For example, when an action is send with `type === "editCategory"`, the `category` field of state will be updated. The rest of the fields will remain the same.


There are some example console logs here in places that can help you debug.
```
const reducer = (state, action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "editName":
      console.log("Logged if the editName action is being dispatched")
      return { ...state, name: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editCategory":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
```
Add actions types for all of your form fields.


6. Dispatching an action

When connected to the reducer, the event name field could look like this:
 ```
<input
  type="text"
  value={state.name}
  onChange={(e) =>
    dispatch({
    type: "editName",
    payload: e.target.value
    })
  }
/>
 ```
 
When this input is changed, it will dispatch the `"editName"` action. The payload of this action (aka the data), will be the input field value. The reducer will "read" this action, and know to update `state.name`. Try testing this. If you console log the state, do you see how it changes?

Dispatch events for all fields in your form.


**Check**: you should have a form with all the fields needed to create a new event. The reducer `state` stores all of these values. When the user types in a field, this should dispatch an action to update the state. 

7. Adding an event
Now the `state` stores all the data the user entered, but the data doesn't go anywhere. When the user presses submit, it should  create a new event object from the field values, and add that event to the list of events using `setEvents`. That event should then appear in the Events list.

### Add Remaining Functions

For all the features listed in the main [Eventonica README](./README.md), add code to setup event handlers so the actions change data and refresh the HTML for clear user feedback.

## Next Steps

Once all the behavior is fully working, move on to these enhancements.

1. Customize the CSS to style your page. [Google Fonts](https://fonts.google.com/) are a great place to find free fonts.

2. Add a README.md with screenshots of your project in your GitHub project repo. This [README Template](https://github.com/othneildrew/Best-README-Template) includes most key sections for an open-source app.

**Using a Date formatting Library (optional)**

You may have noticed that manipulating Date objects and formatting them can be time consuming. There are JS libraries that specialize in this. Install the [date-fns](https://date-fns.org/) library to help easily format the event dates. Using external libraries that specialize in one thing can save you time as a developer, because you won't have to implement these yourself. 

Try using the `format` function to format the event dates. For example, `format(new Date(2021, 10, 1), 'MMM dd yyyy')`. 

Bonus: explore the documentation - there are many other helpful functions, like `isBefore`, `startOfWeek`, `addDays`, etc. How could you use this library to implement a "search events by date" function?

#### Challenges

Try to do at least one of these challenges to improve your site:

- Add a `resetForm` action in your reducer. This should clear all form values and set the form to its initial state

- Validate the form before submitting. For example, do not allow events to be created with dates that are in the past

- Look up all available HTML attributes for `input` and see if you can customize the forms, make some fields required, turn the date search field into a date picker using `input type="date"`, etc

- Add a variable to save which user is currently "logged in", so saving an event for a user doesn't require typing in the user's ID every time.

- Use localStorage to store your data so it doesn't get deleted every time the page is refreshed. Learn about localStorage from the [MDN localStorage docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

- Change the UI. Draw up a design for how you'd like your app to look and then code your site to match. The changes could involve breaking the UI into multiple pages, adding more CSS, using a styling library such as Bootstrap, and/or adding more JS. Look at websites that have successful UIs for creating, retrieving, updating, deleting, and filtering data for inspiration. Consider designing a desktop and a mobile version and create a responsive UI.

### Good luck!


