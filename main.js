console.log('it works')


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * (2 + 1))]
}


function playRound(playerSelection, computerSelection) {
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


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt().toLowerCase(), getComputerChoice()))
    }

}

game()