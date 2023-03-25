let playerScore = 0;
let computerScore = 0;
let roundCount = 0;
let lengthOfGame = gameLength();

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const restartButton = document.querySelector('#restartButton');

rockButton.addEventListener('click', () => { playRound("rock") });
paperButton.addEventListener('click', () => { playRound("paper") });
scissorsButton.addEventListener('click', () => { playRound("scissors") });
restartButton.addEventListener('click', () => { restart()});

function gameLength() {
    let numberOfRounds;
    while (true) {
        numberOfRounds = Number(prompt("How many rounds would you like to play? Please pick an odd number."));
        if (numberOfRounds <= 0) {
            prompt("OK! Loser!");
            return 0;
        } else if (numberOfRounds % 2 == 0) {
            alert("You have to pick an odd number!");
        } else if (numberOfRounds > 9) {
            alert("I dont have that much time! Pick a reasonable one!");
        } else {
            break;
        }
    }
    console.log(`Length of the game: ${numberOfRounds}`)
    return numberOfRounds;
}

function getComputerChoice() {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    if (a > b && a > c) {
        return rock;
    } else if (b > a && b > c) {
        return paper;
    } else if (c > a && c > b) {
        return scissors;
    } else {
        return getComputerChoice();
    }
}

function playRound(playersChoice) {
    computerSelection = getComputerChoice();
    playerSelection = playersChoice;
    console.log(`computer choose: ${computerSelection} \nplayer choose: ${playerSelection}`);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("Congrats, You won this round!");
        counter("player");
        return "player";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("Congrats, You won this round!");
        counter("player");
        return "player";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("Congrats, You won this round!");
        counter("player");
        return "player";
    } else if (playerSelection == computerSelection) {
        alert("It's a draw!");
        counter("draw");
        return "draw";
    } else {
        alert("Sorry, you have lost this round.");
        counter("computer");
        return "computer";
    }
}

function counter(winner) {
    let winnerOfLastRound = winner;
    if (winnerOfLastRound == "player") {
        roundCount++;
        playerScore++;
    } else if (winnerOfLastRound == "computer") {
        roundCount++;
        computerScore++;
    }
    console.log(`Score of player: ${playerScore}\nScore of computer: ${computerScore}`);
    checkScores();
}

function checkScores() {
    if (playerScore >= (lengthOfGame / 2) || computerScore >= (lengthOfGame / 2)) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        if (playerScore > computerScore) {
            alert("You won the game!");
            if (prompt("Would you like to play one more game?\n(Type yes/no)") == "yes") {
                restart();
                rockButton.disabled = false;
                paperButton.disabled = false;
                scissorsButton.disabled = false;
            }
        } else {
            alert("The computer won the game!");
            if (prompt("Would you like to play one more game?\n(Type yes/no)") == "yes") {
                restart();
                rockButton.disabled = false;
                paperButton.disabled = false;
                scissorsButton.disabled = false;
            }
        }
    }
}

function restart() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    lengthOfGame = gameLength();
    alert("The new game has started!");
}




