let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let playedRounds = 0;
let rpsArray = ['rock', 'paper', 'scissors'];



// == Button functions ==
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    if (playedRounds === 0) {
        game();
    } else {
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        winnerDeclaration();
    }
    return;
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    if (playedRounds === 0) {
        game();
    } else {
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        winnerDeclaration();
    }
    return;
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    if (playedRounds === 0) {
        game();
    } else {
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        winnerDeclaration();
    }
    return;
});

// ==  General User Interface ==

const pInput = document.getElementById('playerInput');
const nGame = document.getElementById('newGame');

// Scoreboard 
const pScore = document.getElementById('playerScore');
pScore.textContent = `0`;
const cScore =
    document.getElementById('computerScore');
cScore.textContent = `0`;

// Displaying results
const rResult = document.getElementById('roundResult');
const wResult = document.getElementById('winnerResult');

// To solve for case sensitivity without losing capitalization on results.
function sentenceCase(text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}

// == Game ==
function computerPlay() {
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

function game() {
    playerScore = 0;
    computerScore = 0;
    playedRounds = 0;
    if (playerScore <= 5 && computerScore <= 5) {
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        cScore.textContent = `${computerScore}`;
        playedRounds += 1;
        loseRound();
        return;
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        pScore.textContent = `${playerScore}`;
        playedRounds += 1;
        winRound();
    } else if (playerSelection === computerSelection) {
        playedRounds += 1;
        tieRound();
    } else {
        alert(`Something went wrong. Oops. Your input was: "${playerSelection}"`);
    }
}

function tieRound() {
    if (rResult.hasAttribute("class") == true) {
        rResult.removeAttribute("class");
    }
    rResult.textContent = `It's a tie! You both had ${sentenceCase(`${computerSelection}`)}`;
    return;
}

function winRound() {
    rResult.className = "win";
    rResult.textContent = `You win! ${sentenceCase(`${playerSelection}`)} beats ${sentenceCase(`${computerSelection}`)}`;
    return;
}

function loseRound() {
    rResult.className = "lose";
    rResult.textContent = `You lose! ${sentenceCase(`${computerSelection}`)} beats ${sentenceCase(`${playerSelection}`)}`;
    return;
}

function winnerDeclaration() {
    if (playerScore === 5) {
        wResult.className = "win";
        wResult.textContent = `Nailed it!`;
        pInput.style.display = "none";
        nGame.style.display = "block";
    } else if (computerScore === 5) {
        wResult.className = "lose";
        wResult.textContent = `Oh no, you failed!`;
        pInput.style.display = "none";
        nGame.style.display = "block";
    } else {
        return;
    }
}

// Start a new game
nGame.addEventListener("click", newGame);

function newGame() {
    window.location.reload();
}
