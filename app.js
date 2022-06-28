const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(i);
  }
  document.querySelector(".button").textContent = "Play new game";
  logwins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
  // console.log(winner);
}

function playerChoice() {
  let input = prompt("Type Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);

  while (check == false) {
    input = prompt("Type rock, paper or scissors. Spelling needs to be exact");

    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP == choiceC) {
    return "tie";
  } else if ((choiceP == "rock" && choiceC == "scissors") || (choiceP == "paper" && choiceC == "rock") || (choiceP == "scissors" && choiceC == "paper")) {
    return "player";
  } else {
    return "computer";
  }
}

function logwins() {
  let playerWins = winners.filter((item) => item == "player").length;
  let computerWins = winners.filter((item) => item == "computer").length;
  let ties = winners.filter((item) => item == "tie").length;

  console.log("Results:");
  console.log("Player wins: ", playerWins);
  console.log("Computer wins: ", computerWins);
  console.log("Ties: ", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round: ", round);
  console.log("Player chose: ", playerChoice);
  console.log("Computer chose: ", computerChoice);
  console.log(`${winner} "won the round"`);
  console.log("--------------------------");
}
