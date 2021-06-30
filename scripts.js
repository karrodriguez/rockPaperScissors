const ITEM_MAPPING = {
    "Rock": 0,
    "Scissors": 1,
    "Paper": 2,
    0: "Rock",
    1: "Scissors",
    2: "Paper"
};

const POSSIBLE_ITEMS = ["Rock", "Paper", "Scissors"];


function computerPlay() {
    let computerHand = Math.floor(Math.random()*3);

    return computerHand;
}

function userPlay() {
    let playerHand = prompt("Make your Play (Rock, Paper, or Scissors):");

    // Default string to only the first letter as capitalized 
    playerHand = playerHand.toLowerCase();
    playerHand = playerHand.replace(playerHand[0], playerHand[0].toUpperCase());
    
    // Verify if input is valid
    if (!(POSSIBLE_ITEMS.includes(playerHand))) {
        alert("Hmm... that's not a valid move. Pick again!");
        playerHand = userPlay();
    }

    // Convert to numeric value to match computerPlay()'s data type
    return ITEM_MAPPING[playerHand];
}

function playRound(playerSelection, computerSelection) {
    const PLAYER_WIN = ["01", "12", "20"];
    const COMPUTER_WIN = ["10", "21", "02"];

    const playResult = playerSelection.toString() + computerSelection.toString();

    if (computerSelection === playerSelection) {
        return [0, "Tie! Nobody Wins"];
    }

    else if (PLAYER_WIN.includes(playResult)) {
        return [1, `You Win! ${ITEM_MAPPING[playerSelection]} beats ${ITEM_MAPPING[computerSelection]}`];
    }

    else if (COMPUTER_WIN.includes(playResult)) {
        return [-1, `You Lose! ${ITEM_MAPPING[computerSelection]} beats ${ITEM_MAPPING[playerSelection]}`];
    }
}


function game() {
    let outcome;
    let tally = 0;

    for (let i=0; i<5; i++) {
        computerSelection = computerPlay();
        playerSelection = userPlay();

        outcome = playRound(playerSelection, computerSelection);
        tally += outcome[0];

        console.log(outcome[1]);
    }

    if (tally == 0) {
        return "Tie! Nobody Wins";
    }

    else if (tally > 0) {
        return "You Win!!";
    }

    else {
        return "You Lose!!";
    }
}