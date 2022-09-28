# Eventonica - Build a React UI

## Projected Time

4-6 Hours

## Primary Goal

To build a UI for a portfolio-ready client-side application.

## Overview

You'll build a web UI for the Eventonica app that will allow a user to interact with the code you already wrote in Part 1. This will be the basis of the subsequent parts as well.

In this tutorial, we will create:

- a form for creating a user with an email
- callback function for deleting a user
- a list to display all users

### References

- [React Outlines](/react-js)

### Goals

You'll use React and JavaScript to build functionality for all the features listed in the [main project README](./README.md#project-requirements).

By the end of this lesson, your project will have:

1. A user list
2. A form to create a user
3. A callback function to delete a user

By the end of this project, your project will also:

1. Have a README
2. Have CSS to customize the look
3. All the features listed in the main [Eventonica README](./README.md)

## UI Instructions

Remember to commit your code and push to GitHub frequently while working on this project. A good rule of thumb is whenever a new piece of functionality is working, commit with a descriptive message.

### Create Your First Subcomponents

Before we create some components from scratch, your first challenge is to abstract an existing element into a new file, then export it as a component.

It's typical for a React developer to start in one file, then begin to divide it into new files and components as things grow. This keeps things organized and easy to read. There seems to be a general agreement that files should not be over 200 or 300 lines long, but of course there are plenty of opinions.

1. Create a new folder in `client/src` named `components`. Create a file called `Footer.jsx` within `components`.

Having a folder called `components` will be useful because in the future, we can have other folders such as `apis` or `utils`. Separating concerns in a project is a good practice because it makes the files and folders easier to read and navigate.

2. Copy all the code from `<footer>` to `</footer>` in `App.js` and paste it into `components/Footer.jsx`.

3. Use your knowledge of React to convert this to a component named `Footer` that is exported from `components/Footer.jsx` back to its original position in `App.js`. You can do it!

4. Follow the same step for creating `components/Header.jsx` file. Copy the header section code from `App.js` and paste it in `Header.jsx` file. Don't forget to import calendar icon.

### Users Subcomponent

Before this stage, ensure you have a commit in place with the working app.

### Display All Users

1. Copy the code in `App.js` in the `<section className="user-management">` section. Create a new file in the `components` file called `Users.jsx`, and paste the code in `Users.jsx`. This section should be deleted from `App.js` once it is in `Users.jsx`. Make sure your file looks like this:

```js
import React from 'react';

function Users() {
  return <section className="user-management">........</section>;
}

export default Users;
```

Use this `Users` component in `App.js` and check that the section is rendering correctly.

2. Lets create an array of mockUsers in `Users.jsx`

```js
const mockUsers = [
  { name: "Marlin", email: "marlin@gmail.com", id: "1" },
  { name: "Nemo", email: "nemo@gmail.com", id: "2" },
  { name: "Dory", email: "dory@gmail.com", id: "3" },
];

function Users() {
  ......
```

In the future, this list will come from a database. For now, we'll store hard-coded users inside our Users component. Note that we use `const`, not `let`. Remember that props are read-only and that we can't change them.

### Displaying Users

1. Use `useState` to create `users` and `setUsers`. The default value for `users` can be a list of your mock users.

```jsx
import { useState } from "react";

const mockUsers = [  { ... },...
];

function Users() {
 const [users, setUsers] = useState(mockUsers);
  ......
```

2. Next, we'll add a loop to list all users. In JSX, we use the map() function for loops.

```jsx
function Users() {
  const [users, setUsers] = useState(mockUsers);
  return (
    .......
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    .......
```

Note that we added a `key value` to each user. For more information, check out the ["Recursing on Children" section of the React Reconciliation Documentation](https://reactjs.org/docs/reconciliation.html#recursing-on-children).

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

#### Event Handling

With JS DOM, you would attach event handlers to the DOM. In React, you should not be doing any direct DOM manipulation (ie `document.getElementById`, setting `innerHTML`, etc)

See the example code below to compare Vanilla JS vs React (this example code may not be exactly how your code works but hopefully you can see how to apply the idea to yours)

**JS DOM Example of Handling a "Create User" Action**

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

**In React we would setup the event handler like this:**

```jsx
// id, name, and email are states that store what values the user types in those fields
// users is an array of user objects
// All of these states can be defined in the component
const handleSubmit = (e) => {
  // Prevent browser refreshing after form submission
  e.preventDefault();
  console.log('name:', name);
  console.log('email:', email);
  console.log('id:', id);
  const newUser = { id: id, name: name, email: email };
  setUsers([...users, newUser]);
};
```

Don't forget to add an event handler in the `onSubmit` attribute for the `<form>`.

Now if we run `npm start`, we will see that the fields from our form are properly logged in the console and the user data submitted successfully.

Bonus: after creating a new user, you might see that the input fields still have the values filled in. How can you update the submit function so that the input values are reset after pressing "submit"?

**JS Syntax Checks**:
Take a look at some of the object and array syntax in the code snippet above. Do you understand what `[...users, newUser]` represents?

`const newUser = {id: id, name: name, email: email}` can also be written as
`const newUser = {id, name, email}`
This is a ES2015 feature called [Object property shorthand](https://alligator.io/js/object-property-shorthand-es6/)
**Check** : try console logging your `name`, `id`, and `email` states. Do you see them changing as the user types?

### Delete User

Here we are going to create the function we want to fire on a button click to remove a user data from our users array.

```js

const deleteUser = (deleteId) => {
  // here we are filtering - the idea is remove user from the users array on a button click
  const removeUser = users.filter((user) => {
    // return the rest of the users that don't match the user we are deleting

   return user.id !== deleteId)};
   // removeUser returns a new array - so now we are setting the users to the new array
  setUsers(removeUser);
};
```

Finally add `onClick` event handler to a button. When the button is clicked, deleteUser(user.id) will be executed. Once again, we need to use () => in our JSX curly braces because our function has parens with an argument.

### Reusing Components:

We are almost ready to add update functionality to our application, but before we do, we have an opportunity to think about code reusability. Currently, our `Users` component uses a form. We will need to build an EditUserForm that will use a form with the exact same fields. In fact, we can potentially use almost the exact same form for both components. Instead of copying the code into both components (which isn't DRY), let's extract some of that code into a component called `UserForm`.

**Check for understanding:**

- Notice `preventDefault` used in the sample code -- Comment it out and see what happens. Learn more about it from the [preventDefault MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

**Note**: You can find the code on [Github](https://github.com/priyaraj7/Eventonica/tree/react-2)
