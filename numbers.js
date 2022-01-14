let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;

document.querySelector('#submit-guess').addEventListener('click', () => {
    // the get guess part
    const userGuess = Number(document.getElementById('number-guess').value)

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
    document.getElementById('number-guess').value = ''
    document.getElementById('number-guess').focus()
    guessCount++

    if (userGuess === randomNumber || guessCount > 7) {
        // disable input & submit button
        document.getElementById('number-guess').disabled = true;
        document.getElementById('submit-guess').disabled = true;
        const element = document.createElement('li');

        if (userGuess === randomNumber) {
            document.getElementById('number-game-container').style.backgroundColor = 'green';
            element.textContent = `!!!You've WON!!!`
        } else if (guessCount > 7) {
            document.getElementById('number-game-container').style.backgroundColor = 'red';
            element.textContent = `!!!You've LOST!!!`
        }

        element.style.fontSize = '4rem'
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
})