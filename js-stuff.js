// User input/interaction
const playerNameButton = document.querySelector('#name-input')

playerNameButton.addEventListener('click', () => {
    const name = prompt('Enter a new name');
    playerNameButton.textContent = `Player 1: ${name}`;
})

// The button example
document.getElementById('button1').addEventListener('click', () => {
    const para = document.createElement('li');
    para.textContent = 'You clicked the button!';
    document.getElementById('click-me-output').appendChild(para);
});