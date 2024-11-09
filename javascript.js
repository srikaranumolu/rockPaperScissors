function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    return num === 0 ? 'rock' : num === 1 ? 'scissors' : 'paper';
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let results = {'rock': 0, 'paper': 1, 'scissors': 2};
    const result = document.querySelector('#result');
    const score = document.querySelector('#score');
    const winner = document.querySelector('#winner');
    let rounds = 0;

    function playRound(humanChoice, computerChoice) {
        const c = results[computerChoice];
        const h = results[humanChoice];
        const diff = (c-h+3) % 3;
        if (diff === 0) {
            result.textContent = `You tied! You both played ${humanChoice}`;
        } else if (diff === 2) {
            result.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        } else if (diff === 1) {
            result.textContent = `You lost! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
        score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
    }

    function getHumanChoice() {
        const rockButton = document.querySelector('#Rock');
        const paperButton = document.querySelector('#Paper');
        const scissorsButton = document.querySelector('#Scissors');
        rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
        paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
        scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));
    }

    function gameEnd() {
        rounds++;
        if (rounds >= 5) {
            if (humanScore > computerScore) {
                winner.textContent = `You won the game! ${humanScore} to ${computerScore}.`;
            } else if (humanScore < computerScore) {
                winner.textContent = `You lost the game! ${humanScore} to ${computerScore}.`;
            } else {
                winner.textContent = `It's a tie! ${humanScore} to ${computerScore}.`;
            }
        }
    }

    getHumanChoice()
    document.querySelector('#Rock').addEventListener('click', gameEnd);
    document.querySelector('#Paper').addEventListener('click', gameEnd);
    document.querySelector('#Scissors').addEventListener('click', gameEnd);
}
playGame();
