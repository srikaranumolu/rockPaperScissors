//Function to get the computer's choice
function getComputerChoice() {
    //Get a random number between 0 and 2
    const num = Math.floor(Math.random() * 3);
    //Decide which choice the computer picked and return it based on the random number
    return num === 0 ? 'rock' : num === 1 ? 'scissors' : 'paper';
}
//Create function to play the game
function playGame() {
    //Make all the scores and rounds variables and set them to 0
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    //Define the variable results so that you can convert the computer's choice back to a number
    const results = {'rock': 0, 'paper': 1, 'scissors': 2};
    //Access the text elements from the HTML and store them in variables so they can be usde later
    const result = document.querySelector('#result');
    const score = document.querySelector('#score');
    const winner = document.querySelector('#winner');
    //Make a function to play 1 round of rock paper scissors
    function playRound(humanChoice, computerChoice) {
        //Create images for the computer and human choices
        const humanImg = document.createElement('img');
        const computerImg = document.createElement('img');
        //Set the source of the images to the correct image based on the choice
        humanImg.src = `images/${humanChoice}.png`;
        computerImg.src = `images/${computerChoice}.png`;
        //Set the alt text of the images to the choice
        humanImg.alt = humanChoice;
        computerImg.alt = computerChoice;
        //Set the size and alignment of the images
        humanImg.style.width = '35px';
        computerImg.style.width = '35px';
        humanImg.style.verticalAlign = 'middle';
        computerImg.style.verticalAlign = 'middle';
        //Clear the result text
        result.innerHTML = '';
        //Get the result of the round as a number
        const c = results[computerChoice];
        const h = results[humanChoice];
        //Find the difference between the numbers to calculate the winner
        const diff = (c - h + 3) % 3;
        //Make a variable to check if the round was a tie
        let tied = false;
        //Make a variable to check if the human lost
        let lose = false
        //Make a variable that stores the results of the round so that you can choose which message to display
        let outcome = '';
        //Check who the winner of the round is and update the scores and rounds
        if (diff === 0) {
            outcome = ` You tied! You both played `;
            //Set tied to true because the round was a tie
            tied = true;
        } else if (diff === 2) {
            outcome = ` You won! `;
            humanScore++;
        } else if (diff === 1) {
            outcome = ` You lost! `;
            lose = true;
            computerScore++;
        }
        //Check if the round was a tie and display the correct message
        if (tied) {
            //Make a piece of text saying what happened
            result.appendChild(document.createTextNode(outcome));
            //Add on the image after the text
            result.appendChild(humanImg);
        } else if(lose){ {
            //Make a piece of text saying the result
            result.appendChild(document.createTextNode(outcome));
            //Add the human image
            result.appendChild(computerImg);
            //Add the text beats
            result.appendChild(document.createTextNode(' beats '));
            //Add the computer image
            result.appendChild(humanImg);
            //Add a period at the end
            result.appendChild(document.createTextNode('.'));
        } else {
            //Make a piece of text saying the result
            result.appendChild(document.createTextNode(outcome));
            //Add the human image
            result.appendChild(humanImg);
            //Add the text beats
            result.appendChild(document.createTextNode(' beats '));
            //Add the computer image
            result.appendChild(computerImg);
            //Add a period at the end
            result.appendChild(document.createTextNode('.'));
        }
        }
        //Update the score text to show the new scores
        score.innerHTML = `🫵: <strong class="bold-score">${humanScore} &nbsp;&nbsp;</strong> 💻: <strong class="bold-score">${computerScore}</strong>`;
        //Add 1 to the rounds
        rounds++;
        //Check if the game has ended
        gameEnd();
    }
    //Function to get the human's choice
    function getHumanChoice() {
        //Make variables for each of the buttons
        const rockButton = document.querySelector('#Rock');
        const paperButton = document.querySelector('#Paper');
        const scissorsButton = document.querySelector('#Scissors');
        //Check if a button gets clicked then play the round giving the human's choice and the computer's choice as inputs
        rockButton.addEventListener('click', () => playRound('rock', getComputerChoice()));
        paperButton.addEventListener('click', () => playRound('paper', getComputerChoice()));
        scissorsButton.addEventListener('click', () => playRound('scissors', getComputerChoice()));
    }
    //Function to check if the game ended
    function gameEnd() {
        //Wait until you play 5 rounds
        if (rounds >= 5) {
            //Check who won the game and say message depending on winner
            if (humanScore > computerScore) {
                winner.innerHTML = `You won! <strong class="bold-score">${humanScore}</strong> to <strong class="bold-score">${computerScore}</strong>.`;
            } else if (humanScore < computerScore) {
                winner.innerHTML = `You lost! <strong class="bold-score">${humanScore}</strong> to <strong class="bold-score">${computerScore}</strong>.`;
            } else {
                winner.innerHTML = `It's a tie! <strong class="bold-score">${humanScore}</strong> to <strong class="bold-score">${computerScore}</strong>.`;
            }
            //Reset scores and rounds at end of game
            humanScore = 0;
            computerScore = 0;
            rounds = 0;
        } else {
            //If the game hasn't ended yet then don't display a winner
            winner.textContent = '';
        }

    }
    //Start the game by getting the human's choice
    getHumanChoice();
}
//Wait until the page is loaded to start the game
document.addEventListener('DOMContentLoaded', playGame);