let computerScore = 0;
let playerScore = 0;
let result = (document.createElement('div'));

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        result.classList.add('result');
        result.textContent = "It's a Tie!";
        container.appendChild(result);        
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') 
    || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerScore++;
        result.classList.add('result');
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
        container.appendChild(result);        
    } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock')
    || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
        computerScore++;
        result.classList.add('result');
        result.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}.`;
        container.appendChild(result);        
    }
    
}

function gameRock() {
        let playerSelection = 'Rock';
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore; 
    gameOver();
}
function gamePaper() {
        let playerSelection = 'Paper';
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore;
    gameOver();
}
function gameScissors() {
        let playerSelection = 'Scissors';
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore;   
    gameOver();
}

function gameOver() {
    if (playerScore === 5) {
        alert("Game Over! You Won!!")
        result.textContent = "Congratulations, You Won! You may click on the images to start again."
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("Game Over! You Lost!!")
        result.textContent = "Bummer, You Lost. Better luck next time. You may click on the images to start again."
        playerScore = 0;
        computerScore = 0;
    }
}


function introMessage() {
    result.classList.add('result');
    result.textContent = 'Hello there! Welcome to my version of Rock Paper \
    Scissors. Click on the images to begin playing.';
    container.appendChild(result);
}

introMessage();

const rock = document.querySelector('#rock');

rock.addEventListener('click', gameRock);

const paper = document.querySelector('#paper');

paper.addEventListener('click', gamePaper);

const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', gameScissors)