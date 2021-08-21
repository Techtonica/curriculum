# Eventonica Part 1 - Setup your React App

### Projected Time: ~ 1 hour

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

### Insert Starter Code

> Note: sorry the instructions and your new projects are both called `eventonica-react`.  When we mention the one in this curriculum repo, we'll use the path `curriculum/projects/eventonica-react`. Otherwise you can assume it's your new create-react-app project.

#### JSX Starter Code

1. Inside `eventonica-react/src/App.js`, collapse the entire div on line 6 and delete it completely along with its contents.  In its place, add all the code from [curriculum/projects/eventonica-react/starter-code/starter-jsx.js](./starter-code/starter-jsx.js).  You should see your UI update automatically on `localhost:3000` to an Eventonica form.  If there's an error, `ctrl + c` and `npm start` again.

2. Go to `eventonica-react/src/App.css` and delete the contents. You can also delete the file itself for `eventonica-react/src/index.css`. Replace the `App.css` contents with all the CSS code from [starter-jsx.js](./starter-code/index.css). You should see 2 columns on your form now on `localhost:3000`.

3. Delete the file `eventonica-react/src/logo.svg`. This is the React logo that you won't be needing. Drag and drop, or copy and paste, `curriculum/projects/eventonica-react/starter-code/calendar.png` in the logo file's place.  

Are you getting an error?  Your file is still trying to import the logo!  Deleting line 1 from `eventonica-react/src/App.js` should fix it. Refresh your `localhost:3000` page.

4. Is your calendar image still not working?  That's because React does not import images the same way as HTML. Because of the way Babel converts the code into regular HTML and CSS for the browser to use, the path ends up being different.
  - Add this to line 2 of `App.js`: `import calendarImg from './calendar.png'`
  - Change your `img` tag inside the `header` too look like this: `<img src={calendarImg} alt="Calendar Star Logo" />
`.

5.  Look at all the code that's now in your App component. Take 2 minutes to point out to yourself where repeated elements might be turned into a reusable component later.

> Note on Babel:  [Babel](https://medium.com/swlh/the-role-of-babel-in-react-dbcf78c69125) comes with the whole `create-react-app` project, and you don't really have to worry about it during Techtonica. However, if you're curious to see how much code React + Babel saves you from writing, you can glance at the files in `eventonica-react/node_modules/.cache/babel-loader/`.

/curriculum/issues/1338)
