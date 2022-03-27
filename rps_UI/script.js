let computerMove;
let playerMove;

function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    let play = plays[Math.floor(Math.random() * plays.length)];
    cM.textContent = `Computer has selected: ${play}`;
    return play;
    
}

function getPlay(button){
    playerMove=button.getAttribute("data-move");
    console.log(`you chose ${playerMove}`);
    pM.textContent = `You have Selected: ${playerMove}`;
    cM.textContent = "Push play for computer to make selection";
  }

let computer = 0;
let player = 0;

function playGame(playerMove, computerMove) {
    if ((playerMove == "rock" && computerMove == "scissors")
    || (playerMove == "paper" && computerMove == "rock")
    || (playerMove == "scissors" && computerMove == "paper"))
    { 
        player++; //add to player score
        result.textContent =  `Results: You win! ${playerMove} beats ${computerMove}`;
    } else if ((playerMove == "rock" && computerMove == "paper")
    || (playerMove == "paper" && computerMove == "scissors")
    || (playerMove == "scissors" && computerMove == "rock"))
    {
        computer++; //add to computer score
        result.textContent =  `Results: You Lose! ${computerMove} beats ${playerMove}`;
    } else {
        result.textContent = "Results: It's a tie!";
    }
}


function playRound(button){
  console.log(playGame(playerMove, computerPlay()));
  console.log(computer);
}

const container = document.querySelector('#container');

const pM = document.createElement('div');
pM.classList.add('pM');
pM.textContent = "Please Make a Selection...";
container.appendChild(pM);

const cM = document.createElement('div');
cM.classList.add('cM');
cM.textContent = "Push play for computer to make selection";
container.appendChild(cM);

const result = document.createElement('div');
result.classList.add('result');
result.textContent = "Results: ";
container.appendChild(result);