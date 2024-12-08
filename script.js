
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

const HUMAN_SCORE = document.querySelector('.score #human');
const COMPUTER_SCORE = document.querySelector('.score #computer');

const RESULT = document.querySelector('.result');
const WINNER = document.querySelector('.winner');

const ROCK_BUTTON = document.querySelector('#rock');
ROCK_BUTTON.addEventListener('click', () => {
    humanChoice = 'rock';
    playGame();
});

const PAPER_BUTTON = document.querySelector('#paper');
PAPER_BUTTON.addEventListener('click', () => {
    humanChoice = 'paper';
    playGame();
});

const SCISSOR_BUTTON = document.querySelector('#scissor');
SCISSOR_BUTTON.addEventListener('click', () => {
    humanChoice = 'scissor';
    playGame();
});

// to generate a random integer less than given value -max 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getHumanChoice(){
    // default choice for human and computer is rock -draw!!!
    let userInput = 'rock'; //prompt("Enter your desired choice:", 'rock');
    return userInput.toLowerCase();
}

function getComputerChoice(){
    const CHOICES = ['rock', 'paper', 'scissor'];
    return CHOICES[getRandomInt(3)];
}

function choiceResult(humanChoice, computerChoice) {
    RESULT.innerText = (`Human choosed ${humanChoice} / Computer Choosed ${computerChoice}.`);
}

function playRound(humanChoice, computerChoice) {
    // checking for round winner and incrementing it's score!!!
    if ( (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "rock") ) {
        choiceResult(humanChoice, computerChoice);
        WINNER.innerText = 'Computer Won!';
        computerScore += 1;
        COMPUTER_SCORE.textContent = `Computer Score: ${computerScore}`;
    } else if ( (humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
        choiceResult(humanChoice, computerChoice);
        WINNER.innerText = 'You Won!';
        humanScore += 1;
        HUMAN_SCORE.textContent = `Human Score: ${humanScore}`;
    } else if (humanChoice === computerChoice) {
        choiceResult(humanChoice, computerChoice);
        WINNER.innerText = 'DRAW!';
    }   
}

function playGame() {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}