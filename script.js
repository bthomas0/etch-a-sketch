/*
* TODO:
* Add buttons (which could look like the knobs on the sides)?
* Buttons: (1) User selects grid size | (2) Clear the board
*
*/ 


let userInput = 30;
let totalArea = 600;
let boxSize = totalArea / userInput;

function createGrid() {
  const board = document.getElementById('board');
  // vertical (rows)
  for (let i = 0; i < userInput; i++) {
    row = document.createElement('div');
    row.className = `row`;
    row.id = `row-${i}`;
    board.appendChild(row);
    // horizontal (boxes)
    for (let j = 0; j < userInput; j++) {
      box = document.createElement('div')
      box.className = `box`;
      box.id = `box-${i}-${j}`;
      // box sizes are based on totalArea and userInput values
      box.style.minHeight = `${boxSize}px`;
      box.style.minWidth = `${boxSize}px`;
      row.appendChild(box);
      box.addEventListener('mouseover', (e) => {
        e.target.classList.add('hovered');
      });
    }
  }
}

function clearBoard() {
  const clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', () => {
    const hovered = document.getElementsByClassName('box');
    for (let i = 0; i < hovered.length; i++) {
      hovered[i].classList.remove('hovered');
    }
  });
}

createGrid();
clearBoard();