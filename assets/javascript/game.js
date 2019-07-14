let brands = ["ford","toyota","honda"];

let guessedLetters = [];

let letterToGuess = null;

let guessesLeft = 9;

let wins = 0;

let losses =0;


const updatedGuessLeft = () => {
    document.querySelector(".guessleft").innerHTML = guessesLeft;
}

const updatedLeterToGuest = () => {
    letterToGuess = brands[Math.floor(Math.random() * brands.length)];
}

const updatedGuessesSoFar = () => {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
}

const updateDash = () => {
    let brandLength = brands[1].length;
    console.log(brandLength);
    
    document.querySelector('.dash').innerHTML = brands[1].split("_");

}
    
const reset = () => {
    guessesLeft = 9;
    guessedLetters = [];
    updatedLeterToGuest (); 
    updatedGuessLeft(); 
    // updatedGuessesSoFar();
   if(losses == 5){
       losses=0;
   }
   if(wins == 3){
       wins=0;
   }
}

updatedLeterToGuest();
updatedGuessLeft();

document.onkeydown = () => {
    guessesLeft--;
    let letter = event.key.toLowerCase();
    //Then its going to add the guess into the array
    guessedLetters.push(letter);

    updatedGuessLeft();
    // updatedGuessesSoFar();
    updateDash();

    if(letter === letterToGuess){
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }

    // if(guessesLeft ===0){
    //     losses++;
    //     document.querySelector("#losses").innerHTML = losses;
    //     reset();
    // } 
}