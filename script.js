// creating the underlying algorithm for rock paper scissor game

// game start greeting message

function greeting() {
    // `` backticks can be used to formatted strings or multiline ones!!!
    // \n or backslash n create or omits a newline
    // \t or tab omits or add a tab 4 spaces 
    console.log("Hello, let's play a little game. Shall we?\nRock Paper Scissor a classic game!\nRules are simple, you have three choices rock, paper, and scissor choose which one you desire.\nBut choose wisely:\n\tRock beats scissor but paper beats it.\n\tPaper beats Rock but scissor beats it.\n\tScissor beats paper but rock beats it.");
}


// to generate a random integer less than given value -max 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getHumanChoice(){
    // default choice for human and computer is rock -draw!!!
    let userInput = prompt("Enter your desired choice:", 'rock');
    return userInput.toLowerCase();
}

function getComputerChoice(){
    // assigning numbers to choices
    let rock = 0;
    let paper = 1;
    let scissor = 2;
    choice = getRandomInt(3);
    // USING ternery operator for conditional 
    let computerChoice = (choice === 0) ? 'rock' : (choice === 1) ? 'paper' : (choice === 2) ? 'scissor' : 'rock';
    return computerChoice;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();