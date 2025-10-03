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
