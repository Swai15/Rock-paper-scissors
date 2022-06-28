let values = ["Rock", "paper", "Scissors"];

// Computer selects answer
function computerPlay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let compSelection = computerPlay(0, 2);
console.log(compSelection);

// Human inputs/selects answer
let playerSelect = prompt("Rock, Paper or Scissors?");
let playerSelection = playerSelect.toLowerCase();

//Shortened general answers
const compWins = "You loose, Your opponent wins";
const humanWins = "You win, Your opponent looses";
const tie = "It's a tie!";

// Comp vs Human round

function playRound(playerSelection, compSelection) {
  // Player choice vs Comp ROCK
  if ((playerSelection === "rock") & (compSelection === 0)) {
    console.log(tie);
  } else if ((playerSelection === "paper") & (compSelection === 0)) {
    console.log(humanWins);
  } else if ((playerSelection === "scissors") & (compSelection === 0)) {
    console.log(compWins);
  }

  // Player choice vs Comp PAPAER
  if ((playerSelection === "rock") & (compSelection === 1)) {
    console.log(compWins);
  } else if ((playerSelection === "paper") & (compSelection === 1)) {
    console.log(tie);
  } else if ((playerSelection === "scissors") & (compSelection === 1)) {
    console.log(humanWins);
  }

  // Player choice vs comp SCISSORS
  if ((playerSelection === "rock") & (compSelection === 2)) {
    console.log(humanWins);
  } else if ((playerSelection === "paper") & (compSelection === 2)) {
    console.log(compWins);
  } else if ((playerSelection === "scissors") & (compSelection === 2)) {
    console.log(tie);
  }
}

// playRound(playerSelection, compSelection)// Playerround
// function game() {
//   for (let i = 0; i < 5; i++) {
//     if (i < 5) {

//       playRound(playerSelection, compSelection);
//     } else {
//       console.log("Game");
//     }
//   }
// }
