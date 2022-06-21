let values = ["Rock", "paper", "Scissors"];

// Computer selects answer
function computerPlay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let compSelection = computerPlay(0, 2);
console.log(compSelection);

// Human inputs answer
let playerSelect = prompt("Rock, Paper or Scissors?");
let playerSelection = playerSelect.toLowerCase();

// Comp vs Human round

function playRound(playerSelection, compSelection) {
  // Player choice vs Comp ROCK
  if ((playerSelection === "rock") & (compSelection === 0)) {
    console.log("That's a tie");
  } else if ((playerSelection === "paper") & (compSelection === 0)) {
    console.log("Rock beats paper, you loose");
  } else if ((playerSelection === "scissors") & (compSelection === 0)) {
    console.log("Rock beats scissors, you loose");
  }

  // Player choice vs Comp PAPAER
  if ((playerSelection === "rock") & (compSelection === 1)) {
    console.log("You Loose, Paper beats Rock");
  } else if ((playerSelection === "paper") & (compSelection === 1)) {
    console.log("Thats a tie, paper vs paper");
  } else if ((playerSelection === "scissors") & (compSelection === 1)) {
    console.log("You win, scissors beat paper");
  }

  // Player choice vs comp SCISSORS
  if ((playerSelection === "rock") & (compSelection === 2)) {
    console.log("You win, Rock beats Scissors");
  } else if ((playerSelection === "paper") & (compSelection === 2)) {
    console.log("You loose, scissors beat paper");
  } else if ((playerSelection === "scissors") & (compSelection === 2)) {
    console.log("Tie, Scissors vs Scissors");
  }
}
playRound(playerSelection, compSelection);
