// Import Prompt Function
const prompt = require("prompt-sync")();

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
function userInput() {
  choices = ["rock", "paper", "scissors", "lizard", "spock"];
  let userChoice = prompt("Choose your fighter:");
  if (choices.includes(userChoice.toLowerCase())) {
    console.log("You have chosen " + userChoice.toUpperCase());
  } else {
    console.log("Your choice was not one of the allowed options, try again.");
    userInput();
  }
  return userChoice;
}
userInput();

// Generate Computer's Choice
function getComputerChoice() {
  choices = ["rock", "paper", "scissors", "lizard", "spock"];
  randomInt = Math.floor(Math.random() * 5);
  computerChoice = choices[randomInt];
  return computerChoice;
}
console.log("The Computer chose " + getComputerChoice().toUpperCase());
