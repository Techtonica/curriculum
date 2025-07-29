// Write a function that changes the value of the variable `testBoolean` each time the button is clicked.
// Notice that you have been given the `toggle()` which will need to be used inside the HTML of the button for your `onclick` event

// Consider the following to get started:

// What do you need to do to change the name of the function?
// Remember your validation rules are as follows:

// - The two inputted passwords must be identical.
// - The minimal password length is 6 characters.
// - The password must contain at least one digit.
// - The validation result must be shown on the page with an appropriate message in each case.

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