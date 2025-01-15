let isVariableChanged = false;
let isNewGame = true;
let numberRandom = null;

console.log("RANDOM NUMBER GENERATED "+numberRandom);

function getRand(){

    let customRange = parseInt(slider.value);
    console.log("CHECK FOR CUSTOM RANGE SLIDER "+customRange);
    alert("Computer is Thinking...");
   
if(numberRandom == null) {
    alert("Enter your guess");
         numberRandom = Math.floor((Math.random() * customRange) + 1);
        compNumber = numberRandom;
       console.log("RANDOM NUMBER GENERATED "+numberRandom);
    checkGuess(compNumber);
   

}else{
    checkGuess(compNumber);
}

}
//THANK GOD FOR CHATGPT

function isChanged(){
    alert("Computer is Thinking...");
  numberRandom = null;
  
}

    function checkGuess(compNumber){
      
        let valueGet = document.getElementById("guessInput");
        let userGuess = parseInt(valueGet.value);
   

        if(compNumber < 3){

            alert("Wong Guess!");
        }else if(userGuess > compNumber){
           //   alert(`User Guess: ${userGuess} is greater than Computer Number`); 
              alert("Guess Lower!");
            }else if(userGuess < compNumber){
             // alert(`User Guess: ${userGuess} is less than Computer Number`); 
              alert("Guess Higher!");
            }else if(userGuess == compNumber){
            //   alert(`User Guess: ${userGuess} is correct! Computer Number`); 
              alert("Your Guess is correct!");
              alert("Guess another number!!");
              numberRandom = null;
                 }
                          
    }


    