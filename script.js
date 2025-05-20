function getComputerChoice() {
  let computerChoice;
  // generates a random number between 1 and 3 to decide computer's move
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  // assign each number to a specific choice
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  // prompt the user to enter a choice
  let humanChoice = prompt('Enter "rock", "paper" or "scissors');
  return humanChoice;
}

function playGame() {
  // track scores for both players
  let HumanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // converts human input to lowercase for consistency
    humanChoice = humanChoice.toLowerCase();

    // determine the winner of the round
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      HumanScore++;
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
      computerScore++;
    } else {
      console.log("Invalid input");
    }
  }

  // play 5 rounds of the game
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // display the score after 5 rounds
  console.log("Final score:");
  console.log("You: " + HumanScore);
  console.log("Computer: " + computerScore);
}

// Start the game
playGame();
