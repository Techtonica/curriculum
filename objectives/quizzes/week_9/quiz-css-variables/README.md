# Dynamically-Update-React-and-Javascript-with-CSS-Custom-Properties

### To get started

```
git clone <repo>
npm i; npm audit fix --force
npm install ajv
export NODE_OPTIONS=--openssl-legacy-provider; npm run start
```

### Step 1 - Adding a custom variable to change the React logo color

Unlike text, SVG color property can’t be accessed using the `color` attribute. It is rather referenced by using the `fill` property

In the `index.css`` file. Define your CSS variables. Use the `root` element so that the variables may be visible in the entire application. For example, a variable to hold the color property

```
:root{
    --logo-color: red;
    }
```

In the `App.css` file, Set the app logo to rely on the set variable for `color` property. Be sure to include a fallback color after your variable.

### Step 2 - Getting property of a CSS custom property with JavaScript

Inside the `App()` function, add the `useEffect` hook, grab the variable, and run it for the first time by using `[]`. Since no behavior is added in the block quotes, it prevents the re-firing of the application in each render. That is due to lack of values passed to it:

```
useEffect(() => {
}, []);
```

Create a constant that uses the `getComputedStyle()` function to fetch the value of its style.
Pass the root element (`document.documentElement`) as an argument, along with the your color variable (i.e. `--logo-color`) variable.

```
const color = getComputedStyle(document.documentElement).getPropertyValue('--logo-color');
```

### Step 3 - Setting up the value of a CSS custom property with JavaScript

In the `App.js` file, under the `useEffect` function, create a function that sets the color of an element to the one passed as an argument. It will set the style property that is passed in the your color variable with the new one passed as an argument.

```
function setColor (newColor){
    document.documentElement.style.setProperty('--logo-color', newColor);
}
```

Creates three buttons that can instantly set the color of the app logo to the one defined in each.

### BONUS: Dynamically resizing the logo with a custom CSS Property

Create another variable in the `index.css` file. It will be named `--logo-size`, and it will hold the size of the logo. The `App.css` file defined the initial logo size as `40vmin` as seen in the file under the `App-logo` class.

Modify so that one may obtain the height of the logo from the variable set.

Create an input of the range type. It will have a range of `0` to `100`, and a `defaultValue` of `--logo-size`. Do this above the `p` tags holding the SVG.

Create a function that handles the change of the value of the input of the type range. It will then set the value of the current position of the range input dynamically per each change.

![Run GIF](run-app.gif "Run GIF")
