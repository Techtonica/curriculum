# Working with Props

## Objective

Use the color prop to customize button's background color.
Create a ColorButton component used in the App component that accepts a color prop to dynamically change its background color. You will see a "handleClick" function which will log a message to the console when the button is clicked.

## Learning Goals

- onClick
- React passing props

#### Step 1: Create a New File for the Button Component

Create a new file in your React project, your button (for example, ColorButton.jsx). This file will contain the code for your button component.

#### Step 2: Write the Basic Structure of the Component

In ColorButton.jsx, start by importing React and defining the button component as a functional component. This component will accept children for the button text, color for the button's background color, and "onClick" which is used for for handling click events.

#### Step 3: Use the ColorButton Component in Your App

Once you have your button component, you can use it in other parts of your React app. Import the button component and use it like any other React component. You can pass a color prop with a string representing the desired color, and an onClick prop with a function that will be called when the button is clicked.

Create three different buttons, and change their color based on passed props.
