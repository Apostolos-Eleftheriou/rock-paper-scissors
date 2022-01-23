let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}