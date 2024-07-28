const max = 100;
const min = 1 ;
const answer = Math.floor(Math.random()*(max-min+1)+min);
const submit = document.getElementById("submit");

let guess;
let attempts = 0;



submit.onclick = function() {
    guess = Number(document.getElementById("theGuessNum").value);
    console.log(guess ,answer)
if( isNaN(guess) || guess > 100 || guess < 1){
    document.getElementById("resualt").textContent
    = "pleas enter a number between 1 and 100"
    }
    else{
        attempts++;
        if(guess < answer){
            document.getElementById("resualt").textContent
            = "the answer is high than your guess";
        }
        else if(guess > answer){
            document.getElementById("resualt").textContent
            = "the answer is low than your guess";
        }
        else{
            document.getElementById("resualt").textContent
            = `greet  your guess is correct and your attempts is ${attempts} `;
        }
    }
}