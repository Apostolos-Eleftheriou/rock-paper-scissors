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
        $("#player-win-lose").text("Tie!").removeClass("winner").removeClass("loser").addClass("tie");  
        $("#computer-win-lose").text("Tie!").removeClass("winner").removeClass("loser").addClass("tie");      
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') 
    || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerScore++;
        result.classList.add('result');
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
        $("#player-win-lose").text("Winner!").addClass("winner").removeClass("loser").removeClass("tie");
        $("#computer-win-lose").text("Loser!").removeClass("winner").addClass("loser").removeClass("tie");
        container.appendChild(result);        
    } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') || (computerSelection == 'Paper' && playerSelection == 'Rock')
    || (computerSelection == 'Scissors' && playerSelection == 'Paper')) {
        computerScore++;
        result.classList.add('result');
        result.textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}.`;
        $("#player-win-lose").text("Loser!").removeClass("winner").addClass("loser").removeClass("tie");
        $("#computer-win-lose").text("Winner!").addClass("winner").removeClass("loser").removeClass("tie");
        container.appendChild(result);        
    }
    
}
let rockIcon = '<img src="images/rock.jpg">';
let paperIcon = '<img src="images/paper.png">';
let scissorIcon = '<img src="images/scissors.jpg">';

function gameRock() {
        let playerSelection = 'Rock';
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore; 

        $("#player-choice-icon").html(rockIcon);
        if(computerSelection === 'Rock') {
            $("#computer-choice-icon").html(rockIcon)
        } else if (computerSelection === 'Scissors') {
            $("#computer-choice-icon").html(scissorIcon)
        } else {
            $("#computer-choice-icon").html(paperIcon)
        }
        gameOver();
}
function gamePaper() {
        let playerSelection = 'Paper';
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore;

        $("#player-choice-icon").html(paperIcon);
        if(computerSelection === 'Rock') {
            $("#computer-choice-icon").html(rockIcon)
        } else if (computerSelection === 'Scissors') {
            $("#computer-choice-icon").html(scissorIcon)
        } else {
            $("#computer-choice-icon").html(paperIcon)
        }
        gameOver();
}
function gameScissors() {
        let playerSelection = 'Scissors';
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById('player-score').innerText = "Your Score: " + playerScore;
        document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore; 

        $("#player-choice-icon").html(scissorIcon);
        if(computerSelection === 'Rock') {
            $("#computer-choice-icon").html(rockIcon)
        } else if (computerSelection === 'Scissors') {
            $("#computer-choice-icon").html(scissorIcon)
        } else {
            $("#computer-choice-icon").html(paperIcon)
        }
        gameOver();
}   

$("#close-modal").on("click", function() {
    $(".custom-modal").animate({"top": "-500px", "opacity": "0"});
    $(".wrapper").removeClass("modal_backdrop");
    $("#computer-choice-icon").html("");
    $("#player-choice-icon").html("");
    $("#player-win-lose").text("");
    $("#computer-win-lose").text("");
    $(".result").text("Click on the images to play again!");
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerText = "Your Score: " + playerScore;
    document.getElementById('computer-score').innerText = "Computer's Score: " + computerScore; 
})
function gameOver() {
    if (playerScore === 5) {
        $(".modal-title").text("Game Over!");
        $(".modal-content").text("Congratulations, you won!");
        $(".custom-modal").animate({"top": "30%", "opacity": "1"});
        $(".wrapper").addClass("modal_backdrop");
        $("#close-modal").text("HOORAY!");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        $(".modal-title").text("Game Over!");
        $(".wrapper").addClass("modal_backdrop");
        $(".modal-content").text("Bummer, you lost. Better luck next time.");
        $(".custom-modal").animate({"top": "30%", "opacity": "1"});
        $("#close-modal").text("I'll get him this time!");
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