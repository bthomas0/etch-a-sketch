const outer = document.getElementById('outer');
const inner = document.createElement('div');
let userInput = 30;
let totalArea = 600;
let boxSize = totalArea / userInput;
inner.id = 'inner';
outer.appendChild(inner);

function createGrid() {
  // vertical
  for (let i = 0; i < userInput; i++) {
    row = document.createElement('div');
    row.className = `row`;
    row.id = `row-${i}`;
    inner.appendChild(row);
    // horizontal
    for (let j = 0; j < userInput; j++) {
      box = document.createElement('div')
      box.className = `box`;
      box.id = `box-${i}-${j}`;
      box.style.minHeight = `${boxSize}px`;
      box.style.minWidth = `${boxSize}px`;
      row.appendChild(box);
    }
  }
}

createGrid();