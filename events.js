// color change
document.querySelector('#color-change').addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});

function random(number) {
    return Math.floor(Math.random() * (number+1));
}