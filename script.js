/*
* TODO:
* Add buttons (which could look like the knobs on the sides)?
* Buttons: (1) User selects grid size | (2) Clear the board
*
*/ 

function createBoard(userInput) {
  const board = document.getElementById('board');
  const totalArea = 600;
  const boxSize = totalArea / userInput;
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

function changeGrid() {
  const gridButton = document.getElementById('grid-btn');
  gridButton.addEventListener('click', () => {
    let userInput = prompt('Please enter a grid size (1-75):', 10);
    if (userInput > 0 && userInput <= 75) {
      // erase current board before creating new one
      document.getElementById('board').textContent = '';
      createBoard(userInput);
    }
  })  
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

createBoard(30);
clearBoard();
changeGrid();