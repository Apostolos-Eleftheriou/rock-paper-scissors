let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return ("Its a Tie!")        
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return ("You Win! Rock beats Scissors.")        
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return ("You Win! Paper beats Rock.")
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return ("You Win! Scissors beats Paper.")
    } else if (computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') {
        computerScore++;
        return ("You Lose! Rock beats Scissors.")        
    } else if (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock') {
        computerScore++;
        return ("You Lose! Paper beats Rock.")
    } else if (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') {
        computerScore++;
        return ("You Lose! Scissors beats Paper.")
    }    
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please Type Your Choice", "Rock/Paper/Scissors" );
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your score = " + playerScore);
        console.log("Computer's score = " + computerScore);
    }     
}
        
game();
