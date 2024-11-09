function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    return num === 0 ? 'rock' : num === 1 ? 'scissors' : 'paper';
}

function getHumanChoice(callback) {
    const rockButton = document.querySelector('#Rock');
    const paperButton = document.querySelector('#Paper');
    const scissorsButton = document.querySelector('#Scissors');
    let choice = ''
    rockButton.addEventListener('click', () => callback('rock'));
    paperButton.addEventListener('click', () => callback('paper'));
    scissorsButton.addEventListener('click', () => callback('scissors'));
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
    const result = document.querySelector('#result');
    function playRound(humanChoice, computerChoice) {
        const c = results[computerChoice];
        const h = results[humanChoice];
        const diff = (c - h + 3) % 3;
        if (diff === 0) {
            result.textContent = `You tied! You both played ${humanChoice}`;
        } else if (diff === 1) {
            result.textContent = `You won! ${capitalize(humanChoice)} beats ${computerChoice}.`;
            humanScore++;
        } else if (diff === 2) {
            result.textContent = `You lost! ${capitalize(computerChoice)} beats ${humanChoice}.`;
            computerScore++;
        }
    }
    /*for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }*/
    getHumanChoice((choice) => {
        playRound(choice, getComputerChoice())

    });

    /*if (humanScore > computerScore) {
        console.log(`You won the game! ${humanScore} to ${computerScore}.`);
    } else {
        console.log(`You lost the game! ${humanScore} to ${computerScore}.`);
    }*/
}
playGame();
