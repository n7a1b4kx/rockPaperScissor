// creating the underlying algorithm for rock paper scissor game

// game start greeting message

function greeting() {
    // `` backticks can be used to formatted strings or multiline ones!!!
    // \n or backslash n create or omits a newline
    // \t or tab omits or add a tab 4 spaces 
    console.log("Hello, let's play a little game. Shall we?\nRock Paper Scissor a classic game!\nRules are simple, you have three choices rock, paper, and scissor choose which one you desire.\nBut choose wisely:\n\tRock beats scissor but paper beats it.\n\tPaper beats Rock but scissor beats it.\n\tScissor beats paper but rock beats it.");
}

function getHumanChoice(){
    let userInput = prompt("Enter your desired choice:");
    return userInput.toLowerCase();
}

function getComputerChoice(){
    let computerOutput;
}