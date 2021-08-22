# Eventonica - Build a React UI

## Projected Time
4-6 Hours

## Primary Goal

To build a UI for a portfolio-ready client-side application.

## Overview

You'll build a web UI for the Eventonica app that will allow a user to interact with the code you already wrote in Part 1. This will be the basis of the subsequent parts as well.

### References

- [React Outlines](/react-js)

### Requirements

You'll use React and JavaScript to build functionality for all the features listed in the [main project README](./README.md#project-requirements).

By the end of this project, your project will also:

1. Have a README
2. Have CSS to customize the look

## UI Instructions

Remember to commit your code and push to GitHub frequently while working on this project. A good rule of thumb is whenever a new piece of functionality is working, commit with a descriptive message.

### Create Your First Subcomponents

Before we create some components from scratch, your first challenge is to abstract an existing element into a new file, then export it as a component.

It's typical for a React developer to start in one file, then begin to divide it into new files and components as things grow.  This keeps things organized and easy to read.  There seems to be a general agreement that files should not be over 200 or 300 lines long, but if course there are plenty of opinions.

1. Create a new folder in `eventonica-react/src` named `components`.  Create a file called `footer.jsx` within `components`.

Having a folder called `components` will be useful because in the future, we can have other folders such as `apis` or `utils`. Separating concerns in a project is a good practice because it makes the files and folders easier to read and navigate. 

2. Copy all the code from `<footer>` to `</footer>` in `App.js` and paste it into `components/footer.jsx`.

3.  Use your knowledge of React to convert this to a component named `Footer` that is exported from `components/footer.jsx` back to its original position in `App.js`. You can do it!


### Users Subcomponent

Before this stage, ensure you have a commit in place with the working app.

**All your data added via the UI will be gone when you refresh the page**, because all the JS files will be reloaded. In later weeks you'll learn how to save your data in databases instead of browser memory. Because of this, it's much easier to have some mock users and events so that every time you refresh, some data already exists.

### Display All Users

1. Copy the code in `App.js` in the `<section className="user-management">` section. Create a new file in the `components` file called `Users.jsx`, and paste the section code here.

Use this `Users` component in `App.js`, and check that the section is rendering correctly.

2. Try adding some mock users at the top of your `Users` file. For example,

```
const marlin = { name: "Marlin", email: "marlin@gmail.com", id:"5a" };
const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "1p" };
const dory = { name: "Dory", email: "dory@gmail.com" , id: "2x"};
```
Feel free to add more fields to these objects. Later on you will store these users in a database. 

### Displaying Users

1. Use `setState` to create `users` and `setUsers`. The default value for `users` can be a list of your mock users. For example,
 `const [users, setUsers] = React.useState([marlin, nemo, dory])`

2. Iterate through your user list and display their name and email in the list. Remember to have a key for each list item

### Event Handling

With JS DOM, you would attach event handlers to the DOM. In React, you should not be doing any direct DOM manipulation (ie `document.getElementById`, setting `innerHTML`, etc)

Instead, you will use props like `onClick` to achieve the same result. 

See the example code below to compare Vanilla JS vs React (this example code may not be exactly how your code works but hopefully you can see how to apply the idea to yours)

#### JS DOM Example of Handling a "Create User" Action

```js
let users = [];
document
  .querySelector('#add-user-action')
  .addEventListener('click', (event) => {
    event.preventDefault();
    const newId = parseInt(
      document.querySelector('#new-user-id').value
    );
    const newName = document.querySelector('#new-user-name').value;
    const newUser = {id: newId, name: newName };
    users.push(newUser);
    displayEvents(); // calls another function to refresh the DOM after users is updated
  });
```

#### In React we would setup the event handler like this:

```jsx
const Users = () => {
  const [users, setUsers] = React.useState([]);
  
  const [id, setId] = React.useState("");
  
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: 123, name: "new user name" };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>User ID:</label>
        <input
          id="add-user-id"
          type="number"
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="1234"
        />

        <input id="add-user-action" type="submit" value="Add User" />
      </form>

      <ul>
        {users.map((i) => (
          <li>{i.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

### Adding a User

1. Update the HTML form under "Add User" to accept all properties you defined in the User objects above. 

2. As the user types in the input fields, we will need to store what value is in each field. For now, we will have a different state for each field. For example, for storing what the user types in the name field, there can be a new state 
 `const [name, setName] = React.useState('')`

    How can these be used so that every time the user types a name in the name field, the `name` state is updated?

    Hint: Input elements have a `value` property that contains the current input, [see example at w3schools](https://www.w3schools.com/jsref/prop_text_value.asp).

    Do this for each of the form fields.  

3. When the user clicks the form submit submit, it should:
    - create a new user object with the values the user entered
    - add that new user to the list of users states to store Handle the submit event of the form so that a new user is created
    
   Notice `preventDefault` used in the sample code -- Comment it out and see what happens. Learn more about it from the [preventDefault MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

4. After creating a new user, you should see it appear in the list. How does this happen "automatically"?

5. Bonus: after creating a new user, you might see that the input fields still have the values filled in. How can you update the submit function so that the input values are reset after a new user is created?

### Delete User

The form should allow a user to be deleted from your list of users. For this functionality, we will also practice sending props. 

1. Create a `DeleteUser` component. Move the delete user div (the one with the `delete-user` form and "Delete User" `h3`).

2. To delete a user, you'll need a way to uniquely identify what user should be deleted. The form currently assume each user has an ID and asks for the ID of the user to be entered. Create a state to store what ID the user has typed. 

3. When a user is deleted, we want the object with that ID to be removed from the `users` list. How can you use the `setUsers` function to do that? Create a function in the `Users` component:
```
  const deleteUser = (deleteId) => {
    const newUsers = users.filter(i=>i.id !== deleteId)
    setUsers(newUsers)
  };
```

4. Pass this function as a prop to your `DeleteUser` component. Clicking submit in the delete form should call this function with the ID that the user entered. Check that the user is removed from the list in `Users`. 

Check for understanding: Even though `DeleteUser` doesn't have access to `User` state, it still updates it. Discuss with a partner how props and state work together for this to happen.  

### Add Remaining Functions

For all the features listed in the main [Eventonica README](./README.md), add code to setup event handlers so the actions change data and refresh the HTML for clear user feedback.

## Next Steps

Once all the behavior is fully working, move on to these enhancements.

1. Customize the CSS to style your page. [Google Fonts](https://fonts.google.com/) are a great place to find free fonts.

1. Add a README.md with screenshots of your project in your GitHub project repo. This [README Template](https://github.com/othneildrew/Best-README-Template) includes most key sections for an open-source app.

#### Challenges

Try to do at least one of these challenges to improve your site:

- Look up all available HTML attributes for `input` and see if you can customize the forms, make some fields required, turn the date search field into a date picker using `input type="date"`, etc
- Add a variable to save which user is currently "logged in", so saving an event for a user doesn't require typing in the user's ID every time.
- Use localStorage to store your data so it doesn't get deleted every time the page is refreshed. Learn about localStorage from the [MDN localStorage docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Change the UI. Draw up a design for how you'd like your app to look and then code your site to match. The changes could involve breaking the UI into multiple pages, adding more CSS, using a styling library such as Bootstrap, and/or adding more JS. Look at websites that have successful UIs for creating, retrieving, updating, deleting, and filtering data for inspiration. Consider designing a desktop and a mobile version and create a responsive UI.
- Deploy your site so you can share it with others. Deploying means putting your site on the internet where other people can access it. One easy way to deploy this site is to use GitHub pages. Follow this tutorial to deploy your site: https://www.codecademy.com/articles/f1-u3-github-pages.

### Good luck!

