let computerScore = 0;
let playerScore = 0;
// let playerSelection;
// let computerSelection = computerPlay();

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        let result = (document.createElement('div'));
        result.classList.add('result');
        result.textContent = "It's a Tie!";
        container.appendChild(result);        
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        let result = (document.createElement('div'));
        result.classList.add('result');
        result.textContent = 'You Win! Rock beats Scissors.';
        container.appendChild(result);        
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        let result = (document.createElement('div'));
        result.classList.add('result');
        result.textContent = 'You Win! Paper beats Rock.';
        container.appendChild(result);
        // result.classList.toggle('active');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        let result = (document.createElement('div'));
        result.classList.add('result');
        result.textContent = 'You Win! Scissors beats Paper.';
        container.appendChild(result);
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore++;
        let result = (document.createElement('div'));
        result.classList.add('result');
        result.textContent = 'You Lose! Rock beats Scissors.';
        container.appendChild(result);        
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++;
        let result = (document.createElement('div'));
        result.classList.add('result');
        result.textContent = 'You Lose! Paper beats Rock.';
        container.appendChild(result);
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++;
        let result = (document.createElement('div'));
        result.classList.add('result');
        result.textContent = 'You Lose! Scissors beats Paper.';
        container.appendChild(result);
    } 
    
}

function gameRock() {
        let playerSelection = 'rock';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        // console.log("Your score = " + playerScore);
        // console.log("Computer's score = " + computerScore);
    if (playerScore > computerScore) {
        console.log("You Win!")
    } else {
        console.log("You Lose!")
    }   
}
function gamePaper() {
        let playerSelection = 'paper';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        // console.log("Your score = " + playerScore);
        // console.log("Computer's score = " + computerScore);
    if (playerScore > computerScore) {
        console.log("You Win!")
    } else {
        console.log("You Lose!")
    }   
}
function gameScissors() {
        let playerSelection = 'scissors';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        // console.log("Your score = " + playerScore);
        // console.log("Computer's score = " + computerScore);
    if (playerScore > computerScore) {
        console.log("You Win!")
    } else {
        console.log("You Lose!")
    }   
}

const rock = document.querySelector('#rock');

rock.addEventListener('click', gameRock);

const paper = document.querySelector('#paper');

paper.addEventListener('click', gamePaper);

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', gameScissors)


// rock.addEventListener('click', () => {
//     playerSelection = 'rock'
//     console.log(playerSelection)
// });
