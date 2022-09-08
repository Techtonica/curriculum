// LOGIC
//Getting a random integer between two values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
  let randomNumber;
  
  let minNum = document.querySelector("#min");
  let maxNum = document.querySelector("#max");
  
  const generateNumberPage = document.querySelector(".generateNumber");
  const guessPage = document.querySelector(".guessPage");
  const restart = document.querySelector("#restart");
  
  const minimumNum = document.querySelector("#min-input");
  const maximumNum = document.querySelector("#max-input");
  const firstSubmitBtn = document.querySelector("#random-number");
  // input field
  const guessedNum = document.querySelector("#user-input");
  const secondSubmitBtn = document.getElementById("guess-btn");
  //result
  const guesses = document.querySelector(".guesses");
  const lastResult = document.querySelector(".congrats");
  const lowOrHi = document.querySelector(".lowOrHigh");
  
  let guessCount = 1;
  let resetButton;
  
  // getting minimum and maximum number
  firstSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    randomNumber = getRandomInt(
      Number(minimumNum.value),
      Number(maximumNum.value)
    );
    generateNumberPage.style.display = "none";
    guessPage.style.display = "block";
    minNum.textContent = Number(minimumNum.value);
    maxNum.textContent = Number(maximumNum.value);
  });
  
  // Playing game
  secondSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //   console.log("btn is clicked");
    //   console.log(randomNumber);
    const userGuess = parseInt(guessedNum.value);
  
    guesses.textContent += userGuess + " ";
  
    if (userGuess === randomNumber) {
      // debugger;
      lastResult.textContent = "Congradulation! You got the right Number";
      lastResult.style.color = "green";
      lowOrHi.textContent = "";
      setGameOver();
    } else if (
      userGuess < Number(minimumNum.value) ||
      userGuess > Number(maximumNum.value)
    ) {
      lowOrHi.textContent = "Please select the number within the range";
      lastResult.style.color = "orange";
    } else if (guessCount === 10) {
      lastResult.textContent = "GAME OVER";
      lastResult.style.backgroundColor = "orange";
      lowOrHi.textContent = "";
      setGameOver();
    } else if (userGuess < randomNumber) {
      lowOrHi.textContent = "Your Guess was too low";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Your Guess was too high";
    }
  
    guessCount++;
    guessedNum.value = "";
  });
  
  function setGameOver() {
    //disable the button if answer is correct
    secondSubmitBtn.disabled = true;
    restart.style.display = "block";
  }
  
  document.querySelector("#restart").addEventListener("click", function () {
    window.location.reload();
    return false;
  });