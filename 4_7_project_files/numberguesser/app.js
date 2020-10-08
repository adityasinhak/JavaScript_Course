/* 
Game Function:
- Player must guess a number between min and max
- Player get a certain amount of guesses
- Notify player of the guesses remaining
- notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game Value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// Listen for guess
guessBtn.addEventListener('click', function(){
let guess = parseInt(guessInput.value);

  //validate input
  if(isNaN(guess) || guess <min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  //check if won

  if(guess === winningNum){
    // Gameover - Won
    gameOver(true, `${winningNum} is correct! YOU Win!` );
  } else {
    //Wrong number
    guessLeft -= 1;

    if(guessLeft === 0){
      //Game over -Lost
      gameOver(false, `Game over! YOU Lost! The winning number was ${winningNum}`);
    } else {
      guessInput.style.borderColor = 'red';

      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessLeft} Guesses left`, 'red')
    }
  }
});

//Game Over

function gameOver(won, msg){

  let color;
  won === true ? color = 'green' : color = 'red';

    //disable input
    guessInput.disable = true;
    //Change border color
    guessInput.style.borderColor = 'green';
    //Set Text color
    message.style.color = color;
    //set message
    setMessage(msg);

    //Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

//Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min)
}


//Set Message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
