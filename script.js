// User input/interaction
const para = document.getElementById('name-input');

para.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `Player 1: ${name}`;
}

// The button example
const button = document.getElementById('button1'); // get the button

button.addEventListener('click', createParagraph); // add the listener

function createParagraph() {
    const para = document.createElement('li');      // create a new element
    para.textContent = 'You clicked the button!';   // modify the new element
    const outputList = document.getElementById('click-me-output');  // get the element where the output goes
    outputList.appendChild(para);                   // add the new element where it goes
}

// The numbers game