console.log('it works')


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * (2 + 1))]
}

function getPlayerChoice(playerSelection) {
    return playerSelection.className
}

function playRound() {
    let playerSelection = getPlayerChoice(this)
    let computerSelection = getComputerChoice()
    let resultContainer = document.querySelector('.winner-result')

    if (playerSelection === computerSelection) {
        resultContainer.textContent = 'It is a draw!';
    } else {
        switch (playerSelection) {
            case 'rock':
                if (computerSelection === 'paper') {
                    computerCounter += 1
                    resultContainer.textContent = '`You Lose! Paper beats rock`'
                } else {
                    humanCounter += 1
                    resultContainer.textContent = 'You Win! Rock beats scissors'
                }
                break;
            case 'paper':
                if (computerSelection === 'scissors') {
                    computerCounter += 1
                    resultContainer.textContent = 'You Lose! Scissors beat paper'
                } else {
                    humanCounter += 1
                    resultContainer.textContent = 'You Win! Paper beats rock'
                }
                break;
            case 'scissors':
                if (computerSelection === 'rock') {
                    computerCounter += 1
                    resultContainer.textContent = 'You Lose! Rock beats scissors'
                } else {
                    humanCounter += 1
                    resultContainer.textContent = 'You Win! Scissors beat paper'
                }
                break;
        }
    }
}

var humanCounter = 0
var computerCounter = 0

function updateDivCounter() {
    const humanNumber = document.querySelector('.player-victories')
    const computerNumber = document.querySelector('.computer-victories')

    humanNumber.textContent = humanCounter
    computerNumber.textContent = computerCounter
}

function checkWinner() {

    let e = document.querySelector('.winner-result')

    if (humanCounter >= 5) {
        updateDivCounter()
        e.textContent = 'You Won!'
        e.classList.add('rainbow')
    } else if (computerCounter >= 5) {
        updateDivCounter()
        e.textContent = 'AI Won!'
        e.classList.add('rainbow')
    }
}



let buttons = document.querySelectorAll('button');

buttons.forEach(e => e.addEventListener('click', playRound));

buttons.forEach(e => e.addEventListener('click', () => {
    (humanCounter < 5 && computerCounter < 5) ? updateDivCounter() : checkWinner()
}));

