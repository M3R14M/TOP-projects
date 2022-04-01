let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let playedRounds;
let rpsArray = ['rock', 'paper', 'scissors'];


function computerPlay() {
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}
// To solve for case sensitivity without losing capitalization on results.
function sentenceCase(text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}

function playerPlay() {
    let playerInput = prompt('Choose wisely: Rock, paper or scissors?');
    return playerInput.toLowerCase();
}


function game() {
    playedRounds = 0;
    let winnerScore = playerScore || computerScore;
    while (playedRounds < 5) {
        computerSelection = computerPlay();

        computerPlay();
        if (computerSelection === 'rock' || 'paper' || 'scissors') {
            playerSelection = playerPlay();

            if (playerSelection === 'rock' || 'paper' || 'scissors') {
                playRound(playerSelection, computerSelection);
            }
        }
        console.log(`Current score: Player: ${playerScore} Computer: ${computerScore}`);
        continue;
    }
    if (playerScore > computerScore) {
        alert(`You won! You scored ${playerScore}, computer scored ${computerScore}.`)
    } else if (computerScore > playerScore) {
        alert(`You lost! Computer scored ${computerScore}, you scored ${playerScore}.`)
    }
    console.log(`Final score: Player: ${playerScore} Computer: ${computerScore}`);
    return console.log("To play another game, type 'newGame()' in console");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        playedRounds += 1;
        loseRound();
        return;
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        playedRounds += 1;
        winRound();

    } else if (playerSelection === computerSelection) {
        tieRound();

    } else {
        alert(`Something went wrong. Oops. Your input was: "${playerSelection}"`);
    }
}

function tieRound() {
    console.log(`It's a tie! You both had ${sentenceCase(`${computerSelection}`)}`);
    return;
}

function winRound() {
    console.log(`You win! ${sentenceCase(`${playerSelection}`)} beats ${sentenceCase(`${computerSelection}`)}`);
    return;
}

function loseRound() {
    console.log(`You lose! ${sentenceCase(`${computerSelection}`)} beats ${sentenceCase(`${playerSelection}`)}`);
    return;
}
alert("This game's score is kept in console. Please make sure you have opened dev tools");
game();

// Start a new game
let newGame = function () {
    playedRounds = 0;
    playerScore = 0;
    computerScore = 0;
    game();
}
