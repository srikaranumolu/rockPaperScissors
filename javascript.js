function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'rock';
    } else if (num === 1) {
        return 'scissors';
    } else {
        return 'paper';
    }

}
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors.").toLowerCase();
    }
    return choice;
}

/* let nums = [];
for (let i = 0; i < 10000; i++) {
    nums.push(getComputerChoice());
}
let counts = {'paper':0,'rock':0,'scissors':0}
for (let num of nums) {
    counts[num]++;
}
console.log(counts); */

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let results = {'rock': 0, 'paper': 1, 'scissors': 2};

    function playRound(humanChoice, computerChoice) {
        const c = results[computerChoice];
        const h = results[humanChoice];
        const diff = (c - h + 3) % 3;
        if (diff === 0) {
            console.log(`You tied! You both played ${humanChoice}`);
        } else if (diff === 1) {
            console.log(`You won! ${capitalize(humanChoice)} beats ${computerChoice}.`);
            humanScore++;
        } else if (diff === 2) {
            console.log(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}.`);
            computerScore++;
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log(`You won the game! ${humanScore} to ${computerScore}.`);
    } else {
        console.log(`You lost the game! ${humanScore} to ${computerScore}.`);
    }
}
playGame();
