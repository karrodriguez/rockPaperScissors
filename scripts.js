const PLAYER_WIN = ["01", "12", "20"];
const COMPUTER_WIN = ["10", "21", "02"];
const ITEM_MAPPING = {
    "Rock": 0,
    "Scissors": 1,
    "Paper": 2,
    0: "Rock",
    1: "Scissors",
    2: "Paper"
};

let roundResultDiv = document.querySelector("#roundResultMsg");

let userScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerHand = Math.floor(Math.random()*3);

    return computerHand;
}

function userSelect(event) {
    const objectClicked = event["path"][1];
    const classClicked = Array.from(objectClicked.classList);

    return userChoice = classClicked.includes("contentEnclosure") ? ITEM_MAPPING[objectClicked.id] : undefined;
}

function playRound(event) {
    let computerSelection = computerPlay();
    let playerSelection = userSelect(event);
    let result;

    // Ignore if user doesn't click within any of the three options 
    if (playerSelection === undefined) return;

    const playResult = playerSelection.toString() + computerSelection.toString();

    if (computerSelection === playerSelection) {
        roundResultDiv.textContent = "Tie! Nobody Wins";
        result = 0;
    }

    else if (PLAYER_WIN.includes(playResult)) {
        roundResultDiv.textContent = `You Win! ${ITEM_MAPPING[playerSelection]} beats ${ITEM_MAPPING[computerSelection]}`;
        userScore += 1;
        result = 1;
    }

    else if (COMPUTER_WIN.includes(playResult)) {
        roundResultDiv.textContent = `You Lose! ${ITEM_MAPPING[computerSelection]} beats ${ITEM_MAPPING[playerSelection]}`;
        computerScore += 1;
        result = -1;
    }

    else {
        alert("Oops... Try again!");
    }

    updateScore(userScore, computerScore);
    fullGame();

    return result

}

function updateScore(userScoreVal, compScoreVal) {
    let goalPostSVGElem = document.goalPostSVG.contentDocument.getElementsByTagName("svg")[0];
    const userScoreObj = goalPostSVGElem.getElementById("userScore");
    const computerScoreObj = goalPostSVGElem.getElementById("computerScore");

    userScoreObj.textContent = userScoreVal;
    computerScoreObj.textContent = compScoreVal;
}

function fullGame() {
    if ((userScore + computerScore) >= 5) {
        if (userScore === computerScore) {
            roundResultDiv.textContent = "Tie! Nobody Wins";
        }
        else if (userScore > computerScore) {
            roundResultDiv.textContent = "You Win!!";
        }
    
        else if (userScore < computerScore) {
            roundResultDiv.textContent = "You Lose!!";
        }
        userScore = 0;
        computerScore = 0;

        roundResultDiv.textContent = "Start New Game";
        updateScore(userScore, computerScore);
    }
}

document.addEventListener("click", playRound);