# Eventonica - Build a React UI

## Projected Time

4-6 Hours

## Primary Goal

To build a UI for a portfolio-ready client-side application.

## Overview

You'll build a web UI for the Eventonica app that will allow a user to interact with the code you already wrote in Part 1. This will be the basis of the subsequent parts as well.

In this tutorial, we will create:

- a form for creating a user with an email
- a form for deleting a user ID
- a list to display all users

### References

- [React Outlines](/react-js)

### Goals

You'll use React and JavaScript to build functionality for all the features listed in the [main project README](./README.md#project-requirements).

By the end of this lesson, your project will have:

1. A user list
2. A form to create a user and delete a user

By the end of this project, your project will also:

1. Have a README
2. Have CSS to customize the look
3. All the features listed in the main [Eventonica README](./README.md)

## UI Instructions

Remember to commit your code and push to GitHub frequently while working on this project. A good rule of thumb is whenever a new piece of functionality is working, commit with a descriptive message.

### Create Your First Subcomponents

Before we create some components from scratch, your first challenge is to abstract an existing element into a new file, then export it as a component.

It's typical for a React developer to start in one file, then begin to divide it into new files and components as things grow. This keeps things organized and easy to read. There seems to be a general agreement that files should not be over 200 or 300 lines long, but of course there are plenty of opinions.

1. Create a new folder in `client/src` named `components`. Create a file called `footer.jsx` within `components`.

Having a folder called `components` will be useful because in the future, we can have other folders such as `apis` or `utils`. Separating concerns in a project is a good practice because it makes the files and folders easier to read and navigate.

2. Copy all the code from `<footer>` to `</footer>` in `App.js` and paste it into `components/footer.jsx`.

3. Use your knowledge of React to convert this to a component named `Footer` that is exported from `components/footer.jsx` back to its original position in `App.js`. You can do it!

### Users Subcomponent

Before this stage, ensure you have a commit in place with the working app.

**All your data added via the UI will be gone when you refresh the page**, because all the JS files will be reloaded. In later weeks you'll learn how to save your data in databases instead of browser memory. Because of this, it's much easier to have some mock users and events at the top of your files. This way, every time you refresh, some data already exists.

### Display All Users

1. Copy the code in `App.js` in the `<section className="user-management">` section. Create a new file in the `components` file called `Users.jsx`, and paste the section code here. This section should be deleted from `App.js` once it is in `Users.jsx`. Make sure your file looks like this:

```js
import React from 'react';

const Users = () => {
  return <section className="user-management">...</section>;
};

export default Users;
```

Use this `Users` component in `App.js`, and check that the section is rendering correctly.

2. Add some mock users at the top of your `Users` file. For example,

```js
const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };
```

Later on you will add more fields to this form, and eventually store these users in a database.

### Displaying Users

1. Use `useState` to create `users` and `setUsers`. The default value for `users` can be a list of your mock users. For example,
   `const [users, setUsers] = useState([marlin, nemo, dory])`

2. Iterate through your user list and display their name and email in the list. Remember to have a key for each list item

### Event Handling

With JS DOM, you would attach event handlers to the DOM. In React, you should not be doing any direct DOM manipulation (ie `document.getElementById`, setting `innerHTML`, etc)

See the example code below to compare Vanilla JS vs React (this example code may not be exactly how your code works but hopefully you can see how to apply the idea to yours)

#### JS DOM Example of Handling a "Create User" Action

```js
let users = [];
document
  .querySelector('#add-user-action')
  .addEventListener('click', (event) => {
    event.preventDefault();
    const newId = parseInt(document.querySelector('#new-user-id').value);
    const newName = document.querySelector('#new-user-name').value;
    const newUser = { id: newId, name: newName };
    users.push(newUser);
    displayEvents(); // calls another function to refresh the DOM after users is updated
  });
```

#### In React we would setup the event handler like this:

```jsx
// id, name, and email are states that store what values the user types in those fields
// users is an array of user objects
// All of these states can be defined in the component
const handleSubmit = (e) => {
  e.preventDefault();
  const newUser = { id: id, name: name, email: email };
  setUsers([...users, newUser]);
};
```

**JS Syntax Checks**:
Take a look at some of the object and array syntax in the code snippet above. Do you understand what `[...users, newUser]` represents?

`const newUser = {id: id, name: name, email: email}` can also be written as
`const newUser = {id, name, email}`
This is a ES2015 feature called [Object property shorthand](https://alligator.io/js/object-property-shorthand-es6/)

### Adding a User

1. Update the HTML form under "Add User" to have an ID field and an email field.

2. As the user types in the input fields, we will need to store what value is in each field. For now, we will have a different state for each field. For example, for storing what the user types in the name field, there can be a new state
   `const [name, setName] = useState('')`

   Every time the user types a name in the name field, the `name` state is updated. How can we achieve this?

   Hint: Input elements have a `value` property that contains the current input, [see example at w3schools](https://www.w3schools.com/jsref/prop_text_value.asp).

Your input field could look something like this:

```js
<input
  type="text"
  id="add-user-name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Do the same thing for the ID and email fields.
**Check** : try console logging your `name`, `id`, and `email` states. Do you see them changing as the user types?

3. When the user clicks submit, it should:

   - create a new user with the ID, email, and name that the user entered
   - add that new user to the list of users

   Notice `preventDefault` used in the sample code -- Comment it out and see what happens. Learn more about it from the [preventDefault MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

4. After creating a new user, you should see it appear in the list. How does this happen "automatically"?

5. Bonus: after creating a new user, you might see that the input fields still have the values filled in. How can you update the submit function so that the input values are reset after pressing "submit"?

### Delete User

The form should allow a user to be deleted from your list of users. For this functionality, we will also practice sending props.

1. Create a `DeleteUser` component. Move the delete user div into this file. (the `div` with the `delete-user` form and "Delete User" `h3`).

2. To delete a user, you'll need a way to uniquely identify what user should be deleted. We will ask the user for an ID, and delete the user with that ID. Create a state to store what `deleteId` the user has typed.

3. When a user is deleted, we want the user object with that ID to be removed from the `users` list. How can you use the `setUsers` function to do that? Create a function in the `Users` component:

```js
const deleteUser = (deleteId) => {
  const newUsers = users.filter((i) => i.id !== deleteId);
  setUsers(newUsers);
};
```

4. Pass this function as a prop to your `DeleteUser` component.

5. Clicking submit in the delete form should call this function with the ID that the user entered. Don't forget `preventDefault()`.
   After `deleteUser` is called, a user should be removed from the `users` list in `Users.jsx`. Check this by looking at your `<ul>` list of users, or by console logging `users` state.

**Check for understanding:**

- Why do we define `deleteUser` in `Users.jsx` instead of `DeleteUser.jsx`?
- Discuss with a partner how props and state work together for the delete functionality.

**Note**: You can find the code on [Github](https://github.com/priyaraj7/Eventonica/tree/react-2)
