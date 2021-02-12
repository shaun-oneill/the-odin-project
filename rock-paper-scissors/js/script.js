function computerPlay() {
    let computerChoice = null;
    let chance = Math.random();

    if (chance <= 0.33) {
        computerChoice = "ROCK";
    } else if (chance <= 0.66) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let message = playerSelection + " vs " + computerSelection;
    
    if (playerSelection === computerSelection) {
        return message + " is a tie!";
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") || 
               (playerSelection === "PAPER" && computerSelection === "SCISSORS") || 
               (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
                   return message + ", computer wins!";
               } else {
                   return message + ", player wins!";
               }
}

console.log(playRound("rock", computerPlay()));

function game() {

}