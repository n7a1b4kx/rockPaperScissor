
let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

const HUMAN_SCORE = document.querySelector('.score #human');
const COMPUTER_SCORE = document.querySelector('.score #computer');

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
    console.log(`Human choosed ${humanChoice} / Computer Choosed ${computerChoice}.`);
}

function playRound(humanChoice, computerChoice) {
    // checking for round winner and incrementing it's score!!!
    if ( (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "rock") ) {
        choiceResult(humanChoice, computerChoice);
        computerScore += 1;
        COMPUTER_SCORE.textContent = `Computer Score: ${computerScore}`;
    } else if ( (humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
        choiceResult(humanChoice, computerChoice);
        humanScore += 1;
        HUMAN_SCORE.textContent = `Human Score: ${humanScore}`;
    } else if (humanChoice === computerChoice) {
        choiceResult(humanChoice, computerChoice);
    }   
}

function playGame() {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Human Scored: ${humanScore}\nComputer Scored: ${computerScore}`);
}