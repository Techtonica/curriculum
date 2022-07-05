// In your JS file, write a function that changes the value of the variable `testBoolean` each time the button is clicked.
// Notice that I'm already giving you the connector `"onclick="toggle()"` inside the HTML of the button, so you don't need to worry about it.

// ## Bonus
// What do you need to do to change the name of the function?

let testBoolean = true;
console.log("Default value of your boolean is " + testBoolean);

function toggleValue() {
  if (testBoolean) {
    testBoolean = false;

    console.log("The value of your boolean is " + testBoolean);
  } else {
    testBoolean = true;

    console.log("The value of your boolean is " + testBoolean);
  }
}
