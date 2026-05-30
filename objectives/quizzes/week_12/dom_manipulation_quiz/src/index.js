import "./styles.css";

// SET THE VARIABLES
const one = document.getElementById("div1");
const two = document.getElementById("div2");
const three = document.getElementById("div3");
const four = document.getElementById("div4");
const five = document.getElementById("div5");
const six = document.getElementById("showMore");
//const seven
//const eight
//const nine

// SET THE EVENT LISTENERS
// variableName.addEventListener("event", functionName)
one.addEventListener( , generateRandomColor);
two.addEventListener( , changeBackgroundToRed);
two.addEventListener( , resetBackgroundColor);
three.addEventListener( , revealImage);
four.addEventListener( , invertBackgroundColor);
four.addEventListener( , resetBackgroundColor);
five.addEventListener( , moveAnimation);
six.addEventListener( , showMore);

// FUNCTIONS

// Pick a random color & set it as the background
function generateRandomColor() {
  const randomColorId = document.getElementById("randomColorId");
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);


}

// Change background color to red
function changeBackgroundToRed() {

}

// Reset background color
function resetBackgroundColor(e) {

  
}

// Append CSS class image1 to show the image
function revealImage() {
  
  
}

// Invert Colors
function invertBackgroundColor() {
  
  
}

// Animation
function moveAnimation() {
  const car = document.getElementById("animatedElement");
  let position = 0;
  let id = setInterval(frame, 30);
  function frame() {
    if (position === 100) {
      // clear the interval id
    } else {
      position = position + 20;
      // car icon is at position # left
      // car icon is at position # right
    }
  }
}

// If text is hidden, then show text when button is clicked
function showMore() {
  
  // if ( === "none") {
  //   // = "block";
  // } else {
  //   // = "none";
  // }
}
