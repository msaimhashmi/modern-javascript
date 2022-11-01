/* 
GAME FUNCTIONS
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessInput = document.querySelector('#guess-input'),
        guessBtn = document.querySelector('#guess-btn'),
        message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum){
        // Game over - won
        gameOver(true, `${winningNum} is correct, You win!`);
    }else{
        // wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over - lost
            gameOver(false, `Game over, You lost. The correct number was ${winningNum}`);
        }else{
            // game continues - answer wrong
            
            // Change border color
            guessInput.style.borderColor = 'red';
            // clear input
            guessInput.value = '';
            // set message
            setMessage(`${guess} is wrong, ${guessesLeft} guesses you left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true? color = 'green' : color = 'red';

    // disable input
    guessInput.disabled = true;
    // disable input
    message.style.color = color;
    // Change border color
    guessInput.style.borderColor = color;
    // Set message
    setMessage(msg);
}

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}