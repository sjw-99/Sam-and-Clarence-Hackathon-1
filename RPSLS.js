const cardContainer = document.querySelector("#cardContainer");

// Import Prompt Function
const prompt = require("prompt-sync")();

// Initialise game and start while loop so the game repeats until the use wants to stop
let keepPlaying = true;

while (keepPlaying) {
  // Log Rules to Console
  console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
  console.log("The rules are very simple:");
  console.log("Scissors --> Paper");
  console.log("Paper --> Rock");
  console.log("Rock --> Lizard");
  console.log("Lizard --> Spock");
  console.log("Spock --> Scissors");
  console.log("Scissors --> Lizard");
  console.log("Lizard --> Paper");
  console.log("Paper --> Spock");
  console.log("Spock --> Rock");
  console.log("Rock --> Scissors");

  // Accept & validate User's Choice
  function getUserInput() {
    choices = ["rock", "paper", "scissors", "lizard", "spock"];
    try {
      let userChoice = prompt("Choose your fighter: ").toLowerCase();

      if (!choices.includes(userChoice)) {
        throw new Error("Invalid choice! Try again.\n");
      }
      console.log("You have chosen " + userChoice.toUpperCase());
      return userChoice;
    } catch (error) {
      console.log(error.message);
      return getUserInput(); // Retry input safely
    }
  }
  let userInput = getUserInput();

  // Generate Computer's Choice
  function getComputerChoice() {
    choices = ["rock", "paper", "scissors", "lizard", "spock"];
    randomInt = Math.floor(Math.random() * 5);
    choice = choices[randomInt];
    return choice;
  }
  let computerChoice = getComputerChoice();
  console.log("The Computer chose " + computerChoice.toUpperCase());

  // Work out who wins & display appropriate message.
  function getWinner(userChoice, computerChoice) {
    if (
      userChoice.toLowerCase() === "rock" &&
      (computerChoice === "lizard" || computerChoice === "scissors")
    ) {
      console.log(
        userChoice.toUpperCase() +
          " beats " +
          computerChoice.toUpperCase() +
          ", YOU WIN!"
      );
    } else if (
      userChoice.toLowerCase() === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")
    ) {
      console.log(
        userChoice.toUpperCase() +
          " beats " +
          computerChoice.toUpperCase() +
          ", YOU WIN!"
      );
    } else if (
      userChoice.toLowerCase() === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")
    ) {
      console.log(
        userChoice.toUpperCase() +
          " beats " +
          computerChoice.toUpperCase() +
          ", YOU WIN!"
      );
    } else if (
      userChoice.toLowerCase() === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")
    ) {
      console.log(
        userChoice.toUpperCase() +
          " beats " +
          computerChoice.toUpperCase() +
          ", YOU WIN!"
      );
    } else if (
      userChoice.toLowerCase() === "spock" &&
      (computerChoice === "scissors" || computerChoice === "rock")
    ) {
      console.log(
        userChoice.toUpperCase() +
          " beats " +
          computerChoice.toUpperCase() +
          ", YOU WIN!"
      );
    } else if (computerChoice.toLowerCase() === userChoice.toLowerCase()) {
      console.log("It's a DRAW!");
    } else {
      console.log(
        computerChoice.toUpperCase() +
          " beats " +
          userChoice.toUpperCase() +
          ", YOU LOSE!"
      );
    }
  }
  getWinner(userInput, computerChoice);

  // Ask user if they want to play again and update keepPlaying accordingly.
  function getKeepPlaying() {
    enthusiasm = prompt(
      "Would you like to keep playing? (yes/no): "
    ).toLowerCase();
    if (enthusiasm === "yes") {
      keepPlaying = true;
    } else if (enthusiasm === "no") {
      keepPlaying = false;
    } else {
      console.log("Invalid input, please try again.");
      return getKeepPlaying();
    }
  }
  getKeepPlaying();
  addGameCard(userInput, computerChoice);
}

function addGameCard(userInput, computerChoice) {
  // Creates Elements
  const gameCard = document.createElement("div");
  const imageContainer = document.createElement("div");
  const imageUser = document.createElement("img");
  const imageComputer = document.createElement("img");
  const cardBody = document.createElement("div");
  const userText = document.createElement("p");
  const computerText = document.createElement("p");
  const resultText = document.createElement("p");

  // Assigns correct classes from CSS
  gameCard.className = "card";
  imageContainer.className = "imageBox";
  cardBody.className = "card-body";
  userText.className = "card-text";
  computerText.className = "card-text";
  resultText.className = "card-text-bold";

  //Add text to card body
  userText.textContent = "The user picked " + userInput;
  computerText.textContent = "The computer picked " + computerChoice;

  // Adds game card to page container
  cardContainer.appendChild(gameCard);

  // Adds image container and fills it with images
  gameCard.appendChild(imageContainer);
  imageContainer.appendChild(imageUser);
  imageContainer.appendChild(imageComputer);

  //Adds card body and fills it with game details.
  gameCard.appendChild(cardBody);
  cardBody.appendChild(userText);
  cardBody.appendChild(computerText);
  cardBody.appendChild(resultText);
}
