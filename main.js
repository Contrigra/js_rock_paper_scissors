console.log('it works')


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * (2 + 1))]
}

function getPlayerChoice(playerSelection) {
    return playerSelection.className
}

function playRound(playerSelection) {
    playerSelection = getPlayerChoice(playerSelection)
    let computerSelection = getComputerChoice()

    if (playerSelection === computerSelection) {
        return 'It\'s a draw!'
    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                return `You Lose! Paper beats rock`
            } else {
                return 'You Win! Rock beats scissors'
            }
        case 'paper':
            if (computerSelection === 'scissors') {
                return 'You Lose! Scissors beat paper'
            } else {
                return 'You Win! Paper beats rock'
            }
        case 'scissors':
            if (computerSelection === 'rock') {
                return 'You Lose! Rock beats scissors'
            } else {
                return 'You Win! Scissors beat paper'
            }
    }
}

// TODO counting: add var variables to switch case?
// TODO winner declaration: if player.winCounter == declareWinner(player)
let buttons = document.querySelectorAll('button')
buttons.forEach(e => e.addEventListener('click', () => console.log(playRound(e))));
