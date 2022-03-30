function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
}

//counter variables for scores
let player = 0
let computer = 0

// starts round 
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper"))
    { 
        player++; //add to player score
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection == "rock" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "rock"))
    {
        computer++; //add to computer score
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "It's a tie!";
    }
    
}
    
function game() {
    computerSelection = computerPlay(); //computer selects move
    playerSelection = prompt("rock paper scissors"); //prompt player selection
    playerSelection = playerSelection.toLowerCase(); 
    //(verifies if player entered proper input)
    while ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")) {
        playerSelection = prompt(playerSelection + " is not valid. Please pick: rock or paper or scissors");
        playerSelection = playerSelection.toLowerCase()
        }

    //log winner of round    
    console.log(`Your play: ${playerSelection}`); //print player move
    console.log(`Computer play: ${computerSelection}`); //print computer move
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your score: ${player}`); //print players score
    console.log(`Computer score: ${computer}`); //print computer score

    //log final score
    if (player > computer) { // at the end the of 5 rounds if player has a higher score
        console.log("you win!");
    } else if (computer >player){ //otherwise if computer has higher score
        console.log("you lose");
    } else { // or if its a tie
        console.log("its a tie");
    }
}

game();