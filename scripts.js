const ITEM_MAPPING = {
    "Rock": 0,
    "Scissors": 1,
    "Paper": 2,
    0: "Rock",
    1: "Scissors",
    2: "Paper"
};

function computerPlay() {
    let computerHand = Math.floor(Math.random()*3);

    return computerHand;
}

function userSelect(event) {
    const objectClicked = event["path"][1];
    const classClicked = Array.from(objectClicked.classList);

    let userChoice = classClicked.includes("contentEnclosure") ? ITEM_MAPPING[objectClicked.id] : false;
    
    playRound(userChoice, computerPlay());
}

function playRound(playerSelection, computerSelection) {
    const PLAYER_WIN = ["01", "12", "20"];
    const COMPUTER_WIN = ["10", "21", "02"];

    const playResult = playerSelection.toString() + computerSelection.toString();

    if (computerSelection === playerSelection) {
        console.log( [0, "Tie! Nobody Wins"]);
    }

    else if (PLAYER_WIN.includes(playResult)) {
        console.log( [1, `You Win! ${ITEM_MAPPING[playerSelection]} beats ${ITEM_MAPPING[computerSelection]}`]);
    }

    else if (COMPUTER_WIN.includes(playResult)) {
        console.log( [-1, `You Lose! ${ITEM_MAPPING[computerSelection]} beats ${ITEM_MAPPING[playerSelection]}`]);
    }

    else {
        console.log("Something went wrong...");
    }
}

// function game() {
//     let outcome;
//     let tally = 0;

//     for (let i=0; i<5; i++) {
//         computerSelection = computerPlay();
//         playerSelection = userPlay();

//         outcome = playRound(playerSelection, computerSelection);
//         tally += outcome[0];

//         console.log(outcome[1]);
//     }

//     if (tally == 0) {
//         return "Tie! Nobody Wins";
//     }

//     else if (tally > 0) {
//         return "You Win!!";
//     }

//     else {
//         return "You Lose!!";
//     }
// }

document.addEventListener("click", userSelect);