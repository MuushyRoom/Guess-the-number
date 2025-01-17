let isVariableChanged = false;
let isNewGame = true;
let numberRandom = null;
let computerText1;
let computerText;

console.log("RANDOM NUMBER GENERATED " + numberRandom);

function getRand() {
  let customRange = parseInt(slider.value);
  console.log("CHECK FOR CUSTOM RANGE SLIDER " + customRange);
  computerText1 = document.getElementById("results").textContent =
      "Random Number Generated";

  if (numberRandom == null) {
    computerText = document.getElementById("results1").textContent =
    "You can now enter your guess!";
    numberRandom = Math.floor(Math.random() * customRange + 1);
    compNumber = numberRandom;
    console.log("RANDOM NUMBER GENERATED " + numberRandom);
    checkGuess(compNumber);
  } else {
    checkGuess(compNumber);
  }
}

function isChanged() {
  //   alert("Computer is Thinking...");
 
  computerText1 = document.getElementById("results").textContent =
    " Welcome to the Guess the Number";
    computerText = document.getElementById("results1").textContent =
    "New Number Generated!";
  numberRandom = null;
}

function checkGuess(compNumber) {
  let valueGet = document.getElementById("guessInput");
  let userGuess = parseInt(valueGet.value);

  if (userGuess > compNumber) {
    computerText = document.getElementById("results").textContent =
    "YOUR GUESS IS WRONG!";
    computerText1 = document.getElementById("results1").textContent =
      "Guess Lower!";
    
  } else if (userGuess < compNumber) {
    computerText = document.getElementById("results").textContent =
      "YOUR GUESS IS WRONG!";
    computerText1 = document.getElementById("results1").textContent =
    "Guess Higher!";
  } else if (userGuess == compNumber) {
    computerText = document.getElementById("results").textContent =
      "That is correct!!";
      let numRandom = Math.floor(Math.random() * 3 + 1);
      if(numRandom == 1){
        computerText1 = document.getElementById("results1").textContent =
        "are you cheating?";
      }else if(numRandom == 2){
        computerText1 = document.getElementById("results1").textContent =
        "Sheeeesh";
      }else if(numRandom == 3){
        computerText1 = document.getElementById("results1").textContent =
        "THE FBI's ARE SHAKING!";
      }
 
    numberRandom = null;
  }
}
