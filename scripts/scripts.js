let isVariableChanged = false;


function getRand(){
    let customRange = parseInt(slider.value);
    const numberRandom = Math.floor((Math.random() * customRange) + 1);

   if(isVariableChanged = true){
  
    const numberRandom = Math.floor((Math.random() * customRange) + 1);
    isVariableChanged = false;
   }else if(isVariableChanged = false){
 
    const compNumber = numberRandom;
    checkGuess(compNumber);
   }
 
}

function isChanged(){
    isVariableChanged = true;
   alert("changed");
}



    function checkGuess(compNumber){
      
      
        let valueGet = document.getElementById("guessInput");
        let userGuess = parseInt(valueGet.value);
   

      

            if(userGuess > compNumber){
              alert(`User Guess: ${userGuess} is greater than Computer Number`); 
              alert("Guess Lower!");
             
              
                   

                  
            }else if(userGuess > compNumber){
              alert(`User Guess: ${userGuess} is less than Computer Number`); 
              alert("Guess Higher!");
              
              
          
          
                  
            }else if(userGuess == compNumber){
               alert(`User Guess: ${userGuess} is correct! Computer Number`); 
              alert("Your Guess is correct!");
               
                            }
                            alert(`User Guess: ${userGuess} && Computer Number${compNumber}`); 
    }

    
    