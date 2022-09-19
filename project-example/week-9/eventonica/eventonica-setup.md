# Eventonica Part 1 - Setup your React App

### Projected Time: ~ 30 min

### Prerequisites

- [Full Apps using create-react-app](https://github.com/Techtonica/curriculum/blob/f72b914117e0a6d7b98b75d2f0d59fa2e108c97c/react-js/react-part-5-full-apps.md)

### Primary Goals

- Get experience writing your own React code

## Instructions

In this outline, you'll create a React app for frontend Eventonica project.

### Requirements

We will be working from the same set of [Eventonica Goals](./README.md) as all parts of this project.

### Set up a new React App with API Support

First create a folder for your Eventonica project and move inside that directory.

```bash
mkdir Eventonica
cd Eventonica
```

To create a React app, you can use the tool `npx`. npx gives you the ability to use the `create-react-app` package without having to first install it on your computer, which is very convenient.

```bash
npx create-react-app client
cd client
npm start
```

Once you run this command, a folder named "client" will be created and all of the packages it requires will be automatically installed.

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.

### Insert Starter Code

#### JSX Starter Code

1. Inside `/src/App.js`, delete all the code. In its place, add code from [starter-code](./starter-code/starter-jsx.js). You should see your UI update automatically on `localhost:3000` to an Eventonica form. If there's an error, `ctrl + c` and `npm start` again.

2. Go to `client/src/App.css` and delete the contents. You can also delete the file itself for `client/src/index.css`. Replace the `App.css` contents with all the CSS code from [css-starter-code](./starter-code/index.css). You should see 2 columns on your form now on `localhost:3000`.

3. Drag and drop, or copy and paste, [calendar icon](./images/calendar.png) in the `src` folder.

   ![](./images/eventonica-setup.png)

   <sub><sub>Please ignore calender icon in this image</sub></sub>

4. Look at all the code that's now in your App component. Take 2 minutes to point out to yourself where repeated elements might be turned into a reusable component later.

> Note:<br> Remove `.git` folder from your react app before pushing into your github repo.<br>Navigate to your `client` folder in the terminal.<br> Remove the `.git` folder using `rm -rf .git` command. <br>Come out of client folder using `cd ..`. <br>Inside Eventonica directory, initialize Git repository and push all your code to Github.
