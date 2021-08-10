# Eventonica Part 1 - Setup your React App

### Prerequisites

- [Full Apps using create-react-app](../../react-js/react-part-5-full-apps.md)

### Primary Goals

- Get experience writing your own React code

## Instructions

In this outline, you'll create a React frontend for your Eventonica API.

### Requirements

We will be working from the same set of [Eventonica Requirements](./README.md) as all parts of this project.

### Set up a new React App with API Support

We'll use `create-react-app` to set up a basic app, first covered in [React Full App](../../react-js/react-part4-full-apps.md) lesson.

For this project, we'll use create-react-app to set up the React frontend. There are many possible ways to set up React,
and we're going to describe one specific setup that will make it easy for you to deploy your project later.

- Use `create-react-app` to create a new React App, with `npx create-react-app eventonica-react`.
  If you haven't used create-react-app before, you can read more about what it sets up here: https://www.codecademy.com/articles/how-to-create-a-react-app

Here's an example of what `package.json` might look like now:

```json
{
  "name": "eventonica-react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-scripts": "2.1.5"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
}
```

- In your React app directory, run `npm install`.
- Make sure your React app works by running `npm start`. You should be able to go to `http://localhost:3000/` and see it running.

### Starter Code

// TODO

### Create Your First Component

Before this stage, ensure you have a commit in place with the working app.

Here is example code that might be similar to the way you displayed a list of users in your app. Depending on how you built Part 2, your code might not be in a function like this but hopefully you can translate the concept to your own code.

```js
// ----- USERS ----- //
// Display all users when app is loaded
function displayUsers() {
  let displayUserText = '';
  for (let user of eventonica.allUsers) {
    displayUserText += `<li>${user.userName}, ID: ${user.userID}</li>`;
  }
  document.querySelector('#all-users').innerHTML = displayUserText;
}
```

If you think about how React works, this can be represented by a component like this:

```jsx
// src/UsersList.js
class UsersList extends React.Component {
  render() {
    return (
      <div id="all-users">
        {eventonica.allUsers.map((user) => (
          <li>
            {user.userName}, ID: {user.userID}
          </li>
        ))}
      </div>
    );
  }
}
```

Try migrating your version of the users list and see if you can get it to display. Note you're still not using props yet, but we're trying to move in small increments to make our progress more manageable.

### Use React props to pass data

Instead of globally referencing `eventonica`, we want to make our app follow the React pattern of using props.

```jsx
// src/index.js - where <App> is created and mounted to the DOM
import Eventonica from './models.js';

const eventonica = new Eventonica();
eventonica.addUser('Lisa', 12345);
// ... any other starter data you want

ReactDOM.render(
  <React.StrictMode>
    <App eventonica={eventonica} />
  </React.StrictMode>,
  document.getElementById('root')
);

// src/App.js
class App extends React.Component {
  render() {
    const { eventonica } = this.props;
    return (
      <div>
        <UsersList users={eventonica.allUsers} />
      </div>
    );
  }
}
```

Now you will have to modify `UsersList.js` to accept this prop. If you change the seed data above, CRA should live reload with the changes.

### Event Handling

In your Part 2 version, you attached event handlers to the DOM. With React, you will use props like `onClick` to achieve the same result. Again, this example code may not be exactly how your code works but hopefully you can see how to apply the idea to yours.

#### JS DOM Example of Handling a User Delete Action

```js
document
  .querySelector('#delete-user-action')
  .addEventListener('click', (event) => {
    event.preventDefault();
    const idToDelete = parseInt(
      document.querySelector('#delete-user-id').value
    );
    eventonica.deleteEvent(idToDelete);
    displayEvents(); // refresh the DOM
  });
```

In React we would setup the event handler like this:

```jsx
// src/UserDeleteForm.js
class UserDeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { idToDelete: null };
  }

  onSubmit(event) {
      event.preventDefault();
      eventonica.deleteUser(this.state.idToDelete);
  }

  render() {
    const
    return (
      <form onSubmit={onSubmit}>
        <label>User ID:</label>
        <input
          id="delete-user-id"
          type="number"
          onChange={(e) => {
            this.setState({ idToDelete: e.target.value });
          }}
          placeholder="1234"
        />
        <input id="delete-user-action" type="submit" value="Delete User" />
      </form>
    );
  }
}
```

### Re-rendering the UI in Response to Changes

Now we want the UI to re-render when we delete the user. To do this we will have to call `this.setState` with updated data to ensure that React will re-render. Use the previous lessons you went through to figure out how to do this.

TODO: Link to the lesson created in [React App Arch lesson](https://github.com/Techtonica/curriculum/issues/1338)

### Troubleshooting

#### When trying to make an API request, I get a CORS error

You are making a request to your Express server directly. Because it's on a different port, browsers block this for security reasons. If you set up the proxy as above you should just make fetch requests to `/path` (no server/port listed) and it will proxy it correctly so you won't have issues.

#### My API request gets a 404

- Check the log of your Express API server - you enabled [morgan](https://www.npmjs.com/package/morgan) logging, right? 😇
- If the request is making it there, maybe the path is wrong
- If the request is not making it there, make sure you're calling fetch with an Accept header. If you don't, it will be handled by your React app server, which does not know about your Express routes
- Your fetch calls should look something like: `fetch('/data', { headers: { "Accept": "application/json" } })` will make be sent to the configured proxy, e.g. `http://localhost:3000/data`

#### Supplemental Materials

- Example of [calling API from React component using fetch](https://reactjs.org/docs/faq-ajax.html)

#### Challenges

- Once you have your app working, it might be helpful to put all the `fetch` code for calling your API in a dedicated module, perhaps called `eventonica-api.js` and then calling it from your component
