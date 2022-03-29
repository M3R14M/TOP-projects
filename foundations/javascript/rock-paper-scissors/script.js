let playerSelection = lowerCase("Paper");
const rpsArray = ["rock", "paper", "scissors"];
let computerSelection = computerPlay();

function computerPlay() {

    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

// To solve for case sensitivity without losing capitalization on results.
function lowerCase(text) {
    return text.toLowerCase();
}

function sentenceCase(text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        return loseRound();
    } else if (playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "rock" && computerSelection === "scissors") {
        return winRound();
    } else if (playerSelection === computerSelection) {
        return tieRound();
    } else {
        alert("Something went wrong. Oops.")
    }

}

function winRound() {
    return alert(`You win! ` + sentenceCase(`${playerSelection}`) + ` beats ` + sentenceCase(`${computerSelection}`));
}

function loseRound() {
    return alert(`You lose! ` + sentenceCase(`${computerSelection}`) + ` beats ` + sentenceCase(`${playerSelection}`));
}

function tieRound() {
    return alert(`It's a tie! You both had ` + sentenceCase(`${computerSelection}`));
}


// To play: console.log(playRound(playerSelection, computerSelection));
