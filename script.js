let computerScore = 0;
let playerScore = 0;
let result = (document.createElement('div'));

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        result.classList.add('result');
        result.textContent = "It's a Tie!";
        container.appendChild(result);        
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        result.classList.add('result');
        result.textContent = 'You Win! Rock beats Scissors.';
        container.appendChild(result);        
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        result.classList.add('result');
        result.textContent = 'You Win! Paper beats Rock.';
        container.appendChild(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        result.classList.add('result');
        result.textContent = 'You Win! Scissors beats Paper.';
        container.appendChild(result);
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore++;
        result.classList.add('result');
        result.textContent = 'Computer Wins! Rock beats Scissors.';
        container.appendChild(result);        
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++;
        result.classList.add('result');
        result.textContent = 'Computer Wins! Paper beats Rock.';
        container.appendChild(result);
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++;
        result.classList.add('result');
        result.textContent = 'Computer Wins! Scissors beats Paper.';
        container.appendChild(result);
    } 
    
}

function gameRock() {
        let playerSelection = 'rock';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore; 
    gameOver();
}
function gamePaper() {
        let playerSelection = 'paper';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore;
    gameOver();
}
function gameScissors() {
        let playerSelection = 'scissors';
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore;   
    gameOver();
}

function gameOver() {
    if (playerScore === 5) {
        alert("Game Over! You Won!!")
        result.textContent = "You won, Congratulations!! You may click on the images to start again"
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("Game Over! You lost!!")
        result.textContent = "You lost, better luck next time. You may click on the images to start again"
        playerScore = 0;
        computerScore = 0;
    }
}

const rock = document.querySelector('#rock');

rock.addEventListener('click', gameRock);

const paper = document.querySelector('#paper');

paper.addEventListener('click', gamePaper);

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', gameScissors)

