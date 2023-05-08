function createBoard(userInput=40) {
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
      // box sizes
      box.style.minHeight = `${boxSize}px`;
      box.style.minWidth = `${boxSize}px`;
      row.appendChild(box);
      // mouseover event
      box.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue';
        // e.target.classList.add('hovered');
      });
    }
  }
}

function changeGrid() {
  const gridButton = document.getElementById('grid-btn');
  gridButton.addEventListener('click', () => {
    let userInput = prompt('Please enter a grid size (1-75):', 40);
    if (userInput > 0 && userInput <= 75) {
      // erase current board before creating new one
      document.getElementById('board').textContent = '';
      createBoard(userInput);
    }
    else {alert('Invalid input. Please try again.')}
  });
}

function clearBoard() {
  const clearButton = document.getElementById('clear-btn');
  clearButton.addEventListener('click', () => {
    // add 'animate' class
    document.getElementById('outer').classList.add('animate');
    // remove 'hovered' class from boxes
    const hovered = document.getElementsByClassName('box');
    for (let i = 0; i < hovered.length; i++) {
      hovered[i].style.backgroundColor = '#969696';
    }
    // remove 'animate' class
    clearButton.addEventListener('mouseout', () => {
      document.getElementById('outer').classList.remove('animate');
    })
  });
}

createBoard();
clearBoard();
changeGrid();