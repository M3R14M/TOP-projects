let playerSelection = "Paper";
const rpsArray = ["Rock", "Paper", "Scissors"];
let computerSelection = computerPlay();

function computerPlay() {

    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return loseRound();
    } else if (playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Rock" && computerSelection === "Scissors") {
        return winRound();
    } else if (playerSelection === computerSelection) {
        return tieRound();
    } else {
        alert("Something went wrong. Oops.")
    }

}

function winRound() {
    return alert(`You win! ` + `${playerSelection} beats ${computerSelection}`);
}

function loseRound() {
    return alert(`You lose! ` + `${computerSelection} beats ${playerSelection}`);
}

function tieRound() {
    return alert(`It's a tie! You both had ${computerSelection}`);
}

// To play: console.log(playRound(playerSelection, computerSelection));
