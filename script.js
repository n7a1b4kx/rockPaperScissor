// creating the underlying algorithm for rock paper scissor game

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
    // assigning numbers to choices
    let rock = 0;
    let paper = 1;
    let scissor = 2;
    choice = getRandomInt(3);
    // USING ternery operator for conditional 
    let computerChoice = (choice === 0) ? 'rock' : (choice === 1) ? 'paper' : (choice === 2) ? 'scissor' : 'rock'; // last rock is default choice
    return computerChoice;
}

function choiceResult(humanChoice, computerChoice) {
    console.log(`Human choosed ${humanChoice} / Computer Choosed ${computerChoice}.`);
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // checking for round winner and incrementing it's score!!!
    if ( (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "rock") ) {
        choiceResult(humanChoice, computerChoice);
        console.log("\tComputer Wins!");
        computerScore += 1;
    } else if ( (humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
        choiceResult(humanChoice, computerChoice);
        console.log("\tHuman Wins!");
        humanScore += 1;
    } else if (humanChoice === computerChoice) {
        choiceResult(humanChoice, computerChoice);
        console.log("\tDraw");
    }   
}

function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Human Scored: ${humanScore}\nComputer Scored: ${computerScore}`);
}

playGame();