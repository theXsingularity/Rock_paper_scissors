
//DOM elements
const instruction = document.createElement('div');
instruction.classList.add('instruction');  //not actully needed ... not using class
instruction.textContent = "Please make a selection";
instructions.appendChild(instruction);

const ps = document.createElement('div');
ps.textContent = "Player:";
scores.appendChild(ps);

const cs = document.createElement('div');
cs.textContent = "Computer:";
scores.appendChild(cs);

const space = document.createElement('br');
scores.appendChild(space);

const result = document.createElement('div');
result.classList.add('result');  
result.textContent = "Results: (waiting for input) ";
scores.appendChild(result);

const space2= document.createElement('br');
scores.appendChild(space2);

const bestOf = document.createElement('div');
bestOf.classList.add('bestOf');
bestOf.textContent = "";
scores.appendChild(bestOf);

const playerText = "playerInput";
const computerText = "computerInput"

let computerMove;
let playerMove;
let round = 1;
let computer = 0;
let player = 0;

function computerSelect() {
    let plays = ["rock", "paper", "scissors"];
    computerMove = plays[Math.floor(Math.random() * plays.length)];
    document.getElementById(computerText).innerHTML =`Computer Move: ${computerMove}`;
    return computerMove;
}

function playGame(player1, player2) {
    if ((player1 == "rock" && player2 == "scissors")
    || (player1 == "paper" && player2 == "rock")
    || (player1 == "scissors" && player2 == "paper"))
    { 
        player++;
        round++ //add to player score
        result.textContent =  `Results: You win! ${player1} beats ${player2}`;
        ps.textContent = `Player: ${player}`;
        cs.textContent = `Computer: ${computer}`;
    } else if ((player1 == "rock" && player2 == "paper")
    || (player1 == "paper" && player2 == "scissors")
    || (player1 == "scissors" && player2 == "rock"))
    {
        computer++;
        round++ //add to computer score
        ps.textContent = `Player: ${player}`;
        cs.textContent = `Computer: ${computer}`;
        result.textContent =  `Results: You Lose! ${computerMove} beats ${playerMove}`;
        
    } else {
        result.textContent = "Results: It's a tie!";
        ps.textContent = `Player: ${player}`;
        cs.textContent = `Computer: ${computer}`;
    }
    best();
}

function best() {
    if(player == 3) {
        bestOf.textContent = `you win best of 5 rounds!`;
        instruction.textContent = "TRY AGAIN!";
        player = 0;
        computer = 0;
        round = 0
        
    } else if(computer >= 3) {
        bestOf.textContent = `computer wins best of 5`;
        instruction.textContent = "TRY AGAIN!";
        player = 0;
        computer = 0;
        round = 0;
    }
}

function getPlay(button){
    bestOf.textContent = ``
    playerMove=button.getAttribute("data-move");
    document.getElementById(playerText).innerHTML =`Player Move: ${playerMove}`;
    instruction.textContent = "Now make another selection";
    computerSelect();
    playGame(playerMove, computerMove);
    console.log(player, computer);
  }