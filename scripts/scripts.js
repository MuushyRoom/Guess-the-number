let isVariableChanged = false;
let isNewGame = true;
let numberRandom = null;
let computerText1;
let computerText;
let snd = new Audio("correctAnswer.mp3");
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
    let numRandom = Math.floor(Math.random() * 5 + 1);
    
    if(numRandom == 1){
      computerText = document.getElementById("results").textContent =
    "YOUR GUESS IS WRONG! Guess Lower!";
      computerText1 = document.getElementById("results1").textContent =
      "Calm down, Bezos. It’s not that high. LOWER!";
    }else if(numRandom == 2){
      computerText = document.getElementById("results").textContent =
    "YOUR GUESS IS WRONG! Guess Lower!";
      computerText1 = document.getElementById("results1").textContent =
      "That’s so high, I got a nosebleed reading it. Down you go!";
    }else if(numRandom == 3){
      computerText = document.getElementById("results").textContent =
    "YOUR GUESS IS WRONG! Guess Lower!";
      computerText1 = document.getElementById("results1").textContent =
      "That’s so high, it’s making me dizzy. Try again!";
    }else if(numRandom == 4){
      computerText = document.getElementById("results").textContent =
   "YOUR GUESS IS WRONG! Guess Lower!";
      computerText1 = document.getElementById("results1").textContent =
      "Easy there, astronaut. We’re not aiming for the moon—go lower!";
    }else if(numRandom == 4){
      computerText = document.getElementById("results").textContent =
    "YOUR GUESS IS WRONG! Guess Lower!";
      computerText1 = document.getElementById("results1").textContent =
      "That’s so high, I think I just saw it in orbit. Try again!";
    }else if(numRandom == 5){
      computerText = document.getElementById("results").textContent =
    "YOUR GUESS IS WRONG! Guess Lower!";
      computerText1 = document.getElementById("results1").textContent =
      "You tryna beat snoop dog? guess lower!";
    }
   
    
  } else if (userGuess < compNumber) {
  
   
      let numRandom = Math.floor(Math.random() * 5 + 1);
      if(numRandom == 1){
        computerText = document.getElementById("results").textContent =
        "YOUR GUESS IS WRONG, HIGHER!";
        computerText1 = document.getElementById("results1").textContent =
        "Nope, that’s not it. Somewhere a worm is laughing at you";
        
      }else if(numRandom == 2){
        computerText = document.getElementById("results").textContent =
        "YOUR GUESS IS WRONG, HIGHER!";
        computerText1 = document.getElementById("results1").textContent =
        "Bro, did you just guess in the Stone Age? Go HIGHER!";
        
      }else if(numRandom == 3){
        computerText = document.getElementById("results").textContent =
        "YOUR GUESS IS WRONG, HIGHER!";
        computerText1 = document.getElementById("results1").textContent =
        "Is this a number game or a limbo contest? Higher!";
       
      }else if(numRandom == 4){
        computerText = document.getElementById("results").textContent =
        "YOUR GUESS IS WRONG, HIGHER!";
        computerText1 = document.getElementById("results1").textContent =
        "Bruh, aim higher! That number’s chilling in the basement";
       
      }else if(numRandom == 4){
        computerText = document.getElementById("results").textContent =
     "YOUR GUESS IS WRONG, HIGHER!";
        computerText1 = document.getElementById("results1").textContent =
        "You're getting closer, but aim a bit higher!";
      
      }else if(numRandom == 5){
        computerText = document.getElementById("results").textContent =
       "YOUR GUESS IS WRONG, HIGHER!";
        computerText1 = document.getElementById("results1").textContent =
        "Too low! Try guessing a higher number.";
      
      }



  } else if (userGuess == compNumber) {
  
    snd.play();
      let numRandom = Math.floor(Math.random() * 5 + 1);
      if(numRandom == 1){
        computerText = document.getElementById("results").textContent =
      "THAT IS CORRECT!!";
        computerText1 = document.getElementById("results1").textContent =
        "are you cheating?? Tell me or i'll explode!";
      }else if(numRandom == 2){
        computerText = document.getElementById("results").textContent =
      "You got it! Great job!!";
        computerText1 = document.getElementById("results1").textContent =
        "Sheeeesh";
      }else if(numRandom == 3){
        computerText = document.getElementById("results").textContent =
        "THAT IS CORRECT!!";
        computerText1 = document.getElementById("results1").textContent =
        "THE FBI's ARE SHAKING!";
      }else if(numRandom == 4){
        computerText = document.getElementById("results").textContent =
        "THAT IS CORRECT!!";
        computerText1 = document.getElementById("results1").textContent =
        "Congratulations! You guessed it right!";
      }else if(numRandom == 5){
        computerText = document.getElementById("results").textContent =
        "THAT IS CORRECT!!";
        computerText1 = document.getElementById("results1").textContent =
        "Your guess is correct, no cap!";
      }
      snd.currentTime=0;
    numberRandom = null;
  }
}
