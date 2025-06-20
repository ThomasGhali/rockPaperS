document.getElementById('rock').addEventListener('click', ()=> playRound('rock'));
document.getElementById('paper').addEventListener('click', ()=> playRound('paper'));
document.getElementById('scissors').addEventListener('click', ()=> playRound('scissors'));

let computerScore = 0;
let humanScore = 0;
let drawCount = 0;

function playRound(humanChoice){
  const buttonIds = ['rock', 'paper', 'scissors'];
  const computerChoice = getComputerChoice()
  if (humanChoice == "rock" && computerChoice == "paper" ||
      humanChoice == "paper" && computerChoice == "scissors" ||
      humanChoice == "scissors" && computerChoice == "rock")
  {
    document.getElementById('result').innerText=`you lose! as ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice === computerChoice) {
    document.getElementById('result').innerText=`draw! let's do it again`;
    drawCount++;
  } else {
    document.getElementById('result').innerText=`you win! as ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }
  
  document.getElementById('endResult').innerText= `you:  ${humanScore}  -  PC:  ${computerScore}  -- Draws: ${drawCount}`;
  
  if (humanScore == 5){
    for (let id of buttonIds) {
      const button = document.getElementById(id);
      if (button.style.display !== 'none') {
        button.style.display = 'none';
      }
    }
    document.getElementById('result').innerText='Congratulation! you won the game'
    document.getElementById('gif').innerHTML= '<img src ="you-won-this-time-delightfullydani.gif" alt="A funny GIF" style="width: auto; height: auto;">';
  } else if (computerScore == 5){
    for (let id of buttonIds) {
      const button = document.getElementById(id);
      if (button.style.display !== 'none') {
        button.style.display = 'none';
      }
    }
    document.getElementById('result').innerText='OoOops, game over'
    document.getElementById('gif').innerHTML= '<img src ="game-over-dwayne-johnson.gif" alt="A funny GIF" style="width: auto; height: auto;">';
  }
}

function getComputerChoice(){
  const Hand = ["rock", "paper", "scissors"];
  return Hand [Math.floor(Math.random()*3)];
}