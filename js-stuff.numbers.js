let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;

document.querySelector('#submit-guess').addEventListener('click', guessANumber)
document.querySelector('#number-guess').addEventListener('keypress', function (e) {
    console.log('number was entered')
    if (e.key === 'Enter') {
        guessANumber();
    }
});
function guessANumber() {
    console.log('function was called')
    // the get guess part
    const guessInputElement = document.getElementById('number-guess')
    const userGuess = Number(guessInputElement.value)

    // check guess
    const guessResult = (userGuess, randomNumber) => {
        if (userGuess < randomNumber) return 'is too low'
        if (userGuess > randomNumber) return 'is too high'
        return 'is CORRECT!'
    }

    const result = guessResult(userGuess, randomNumber);
    
    // the record guess part
    const newGuessElement = document.createElement('li');
    newGuessElement.textContent = `${userGuess} ${result}`
    document.getElementById('random-number-output').appendChild(newGuessElement)
    
    // reset for next guess
    guessInputElement.value = ''
    guessInputElement.focus()
    guessCount++

    if (userGuess === randomNumber || guessCount > 7) {
        // disable input & submit button
        guessInputElement.disabled = true;
        document.getElementById('submit-guess').disabled = true;
        const element = document.createElement('li');
        const gameBackgroundColor = document.getElementById('number-game-container');
        
        if (userGuess === randomNumber) {
            gameBackgroundColor.style.backgroundColor = 'green';
            element.textContent = `!!!You've WON!!!`
        } else if (guessCount > 7) {
            gameBackgroundColor.style.backgroundColor = 'red';
            element.textContent = `!!!You've LOST!!!`
        }

        element.style.fontSize = '2.5rem'
        element.style.listStyle = 'none'
        document.getElementById('random-number-output').appendChild(element)

        // add "play another round" button that resets the game
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Play another game'
        resetButton.id = 'resetButton'
        document.getElementById('number-game-container').appendChild(resetButton)
        document.getElementById('resetButton').addEventListener('click', () => {
            location.reload()
        })
    }
}