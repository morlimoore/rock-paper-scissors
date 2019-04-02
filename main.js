var playCount = 1;
var playerScore = 0;
var computerScore = 0;
var computerSelection;

function computerPlay(){
    list = ['rock','paper','scissors'];
    computerSelection = list[Math.floor(Math.random() * list.length)];
}

const gameStats = document.getElementById("info0"),
    computerResult = document.getElementById("info1"),
    gameResult = document.getElementById("info2"),
    playerScoreDisplay = document.getElementById("player-scores"),
    computerScoreDisplay = document.getElementById("computer-scores");


function buttonRock(){
    if(playCount < 6){
        if(computerSelection == "scissors"){
            playerScore++;
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer chose scissors';
            gameResult.innerHTML = 'You win! Rock smashes scissors';
            playerScoreDisplay.innerHTML = playerScore;
            playCount++;
            computerPlay();
        }
        else if(computerSelection == "paper"){
            computerScore++;
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer chose paper';
            gameResult.innerHTML = 'You lose! Paper covers rock';
            computerScoreDisplay.innerHTML = computerScore;
            playCount++;
            computerPlay();
        }
        else{
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer also chose rock';
            gameResult.innerHTML = 'Break! Play again';
            computerPlay();
        }
    }
    else{
        gameStats.innerHTML = ' ';
        computerResult.innerHTML = ' ';
        if(playerScore > computerScore){
            gameStats.innerHTML = 'Congratulations! You win'
        }
        else{
            gameStats.innerHTML = 'Better luck next time'
        }
        gameResult.innerHTML = 'Game over! Reload page to start again';
    }
    return;
}

function buttonPaper(){
    if(playCount < 6){
        if(computerSelection == "rock"){
            playerScore++;
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer chose rock';
            gameResult.innerHTML = 'You win! Paper covers rock';
            playerScoreDisplay.innerHTML = playerScore;
            playCount++;
            computerPlay();
        }
        else if(computerSelection == "scissors"){
            computerScore++;
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer chose scissors';
            gameResult.innerHTML = 'You lose! Scissors cuts paper';
            computerScoreDisplay.innerHTML = computerScore;
            playCount++;
            computerPlay();
        }
        else{
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer also chose paper';
            gameResult.innerHTML = 'Break! Play again';
            computerPlay();
        }
    }
    else{
        gameStats.innerHTML = ' ';
        computerResult.innerHTML = ' ';
        if(playerScore > computerScore){
            gameStats.innerHTML = 'Congratulations! You win'
        }
        else{
            gameStats.innerHTML = 'Better luck next time'
        }
        gameResult.innerHTML = 'Game over! Reload page to start again';
    }
    return;
}

function buttonScissors(){
    if(playCount < 6){
        if(computerSelection == 'paper'){
            playerScore++;
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer chose paper';
            gameResult.innerHTML = 'You win! Scissors cuts paper';
            playerScoreDisplay.innerHTML = playerScore;
            playCount++;
            computerPlay();
        }
        else if(computerSelection == 'rock'){
            computerScore++;
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer chose rock';
            gameResult.innerHTML = 'You lose! Rock smashes scissors';
            computerScoreDisplay.innerHTML = computerScore;
            playCount++;
            computerPlay();
        }
        else{
            gameStats.innerHTML = 'Round' + ' ' + `${playCount}`;
            computerResult.innerHTML = 'Computer also chose scissors';
            gameResult.innerHTML = 'Break! Play again';
            computerPlay();
        }
    }
    else{
        gameStats.innerHTML = ' ';
        computerResult.innerHTML = ' ';
        if(playerScore > computerScore){
            gameStats.innerHTML = 'Congratulations! You win'
        }
        else{
            gameStats.innerHTML = 'Better luck next time'
        }
        gameResult.innerHTML = 'Game over! Reload page to start again';
    }
    return;
}