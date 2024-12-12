# [LEGACY] Eventonica Part 7 - React UI

### Prerequisites

- The API server with database from [Eventonica 6](./eventonica-part6-postgres.md)

### Primary Goals

- Get experience writing your own React code
- Compare and contrast the code when using React and not using React

## Instructions

In this project, you'll create a React frontend for your Eventonica API. We can base the HTML off of your Part 2 HTML, but you will need to turn your code into React components.

### Requirements

You will be using the same Express API from your existing Eventonica project. As always you will want to support the features covered in the main [Eventonica README](./README.md).
As always, we will be working from the same set of [Eventonica Requirements](./README.md) as all parts of this project.

### Set up a new React App with API Support

We'll use `create-react-app` to set up a basic app, first covered in [React Full App](../../react-js/react-part4-full-apps.md) lesson.

_Note: when following these steps you will now have **TWO SERVERS** running, one for your Express API and one to serve the live-reloaded React app._

1. The first one is your existing Express server that talks to the database and serves your API routes
1. The second will be a server that just serves React assets and enables hot reloading of changes - and it will proxy calls to your API server to avoid CORS isuses.

For this project, we'll use create-react-app to set up the React frontend. There are many possible ways to set up React,
and we're going to describe one specific setup that will make it easy for you to deploy your project later.

- Use `create-react-app` to create a new React App, with `npx create-react-app eventonica-react`.
  If you haven't used create-react-app before, you can read more about what it sets up here: https://www.codecademy.com/articles/how-to-create-a-react-app
- Now we'll set up your React app so it can talk to your existing Express app. Add a top-level config value to `package.json` that says `"proxy": "http://localhost:3000"`
  - Proxy will requests that set an "Accept" header of "application/json" to the server that is running at port 3000, which in our case is our Express API server
  - Other requests from the browser for assets like CSS will continue to be served by your port 3001 React app
- In package.json, update the line that says `"start": "react-scripts start",` to instead say `"start": "PORT=3001 react-scripts start",`.
  - This will make sure your React app isn't trying to run on the same port as your Express app, because your React app will now run on port 3001. Each port can only be used by one app at a time.

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
    "start": "PORT=3001 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"],
  "proxy": "http://localhost:3000"
}
```

**Note: the "proxy" key is _OUTSIDE_ "browerslist" as a top-level config. If you put it inside "browserslist" it will neither work nor complain that your config is wrong**

- In your React app directory, run `npm install`.
- Make sure your React app works by running `npm start`. You should be able to go to `http://localhost:3001/` and see it running.
- In another Terminal tab, run your Express app. Once they are both running, you're ready to code React!

### Migrate Your Existing HTML, CSS, and JS Code

We will return to the web UI code we worked on in [Part 2](./eventonica-part2-ui.md).

#### HTML & CSS

You will have to combine the CRA template index.html and the HTML code from your project.

#### JavaScript

You should be able to move any JavaScript files into the `public` folder and use them as-is. At this point your app should work but not really using React in any way. Make sure the basics work before proceeding.

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
