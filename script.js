const startBtn = document.querySelector(".start-btn");
const choices = document.querySelector(".choices");
const choiceOne = document.getElementById("choice1");
const choiceTwo = document.getElementById("choice2");
const displayResult = document.querySelector(".result");
const Body = document.querySelector("body");

const colors = ["purple", "#057c54", "#8b0e29"];
Body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

const playerChoices = () => {
  const randNum = Math.random();
  const choosen = prompt("Rock or Paper or Scissor").toUpperCase();
  return {
    playerOneChoice:
      choosen != "ROCK" && choosen != "PAPER" && choosen != "SCISSOR"
        ? "Invalid"
        : choosen,
    computerChoice:
      randNum < 0.34 ? "ROCK" : randNum < 0.67 ? "PAPER" : "SCISSOR",
  };
};

const startGame = () => {
  const choiceObject = playerChoices();
  let winOrLose = "";
  if (choiceObject.playerOneChoice === choiceObject.computerChoice) {
    winOrLose = "DRAW!";
  } else {
    if (
      choiceObject.playerOneChoice === "ROCK" &&
      choiceObject.computerChoice === "PAPER"
    ) {
      winOrLose = "COMPUTER WON!";
    } else if (
      choiceObject.playerOneChoice === "ROCK" &&
      choiceObject.computerChoice === "SCISSOR"
    ) {
      winOrLose = "PLAYER WON!";
    } else if (
      choiceObject.playerOneChoice === "PAPER" &&
      choiceObject.computerChoice === "ROCK"
    ) {
      winOrLose = "PLAYER WON!";
    } else if (
      choiceObject.playerOneChoice === "PAPER" &&
      choiceObject.computerChoice === "SCISSOR"
    ) {
      winOrLose = "COMPUTER WON!";
    } else if (
      choiceObject.playerOneChoice === "SCISSOR" &&
      choiceObject.computerChoice === "ROCK"
    ) {
      winOrLose = "COMPUTER WON!";
    } else if (
      choiceObject.playerOneChoice === "SCISSOR" &&
      choiceObject.computerChoice === "PAPER"
    ) {
      winOrLose = "PLAYER WON!";
    } else {
      winOrLose = "INVALID INPUTS!";
    }
  }
  Body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  choices.style.display = "flex";
  displayResult.style.display = "inline-block";
  displayResult.textContent = winOrLose;
  choiceOne.textContent = choiceObject.playerOneChoice;
  choiceTwo.textContent = choiceObject.computerChoice;
  console.log(winOrLose);
};

startBtn.addEventListener("click", startGame);
