const board = document.querySelector('#board');
const colors = ['#e9ff88', '#fe0ab7', '#00aea5', '#fdffcc', '#fffa90', '#125446', '#76ae0a'];
// const colors = ['#012C4B', '#005395', '#C711A4', '#8A3D7B', '#5D0247', '#f79be6'];
const SQUARES_NUMBER = 899;

for (let i = 0; i < SQUARES_NUMBER; i++) {   
   const square = document.createElement('div');
   square.classList.add('square');

   square.addEventListener('mouseover', () => setColor(square))
   square.addEventListener('click', () => setColor(square))
   square.addEventListener('mouseleave', () => removeColor(square))

   board.append(square);
}

function setColor(element) {
   const color = getRandomColor();
   element.style.background = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}