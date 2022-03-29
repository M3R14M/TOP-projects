const rpsArray = ["Rock", "Paper", "Scissors"];


function computerPlay() {

    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}
