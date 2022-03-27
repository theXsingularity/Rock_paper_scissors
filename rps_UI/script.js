function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
}

let playerMove = "";
let computerMove = "";


function playGame(playerMove, computerMove) {
    if ((playerMove == "rock" && computerMove == "scissors")
    || (playerMove == "paper" && computerMove == "rock")
    || (playerMove == "scissors" && computerMove == "paper"))
    { 
        player++; //add to player score
        return `You win! ${playerMove} beats ${computerMove}`;
    } else if ((playerMove == "rock" && computerMove == "paper")
    || (playerMove == "paper" && computerMove == "scissors")
    || (playerMove == "scissors" && computerMove == "rock"))
    {
        computer++; //add to computer score
        return `You Lose! ${computerMove} beats ${playerMove}`;
    } else {
        return "It's a tie!";
    }
}

function getPlay(button){
  playerMove=button.getAttribute("data-move");
  console.log(`you chose ${playerMove}`);
}


function playRound(button){
  console.log(playerMove);
  console.log(computerPlay());
}

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = playerMove; // why doesnt this work...

container.appendChild(content);