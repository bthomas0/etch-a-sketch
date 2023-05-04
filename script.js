const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
let userInput = 30;
let totalArea = 600;
let boxSize = totalArea / userInput;

function createGrid() {
  // vertical (rows)
  for (let i = 0; i < userInput; i++) {
    row = document.createElement('div');
    row.className = `row`;
    row.id = `row-${i}`;
    inner.appendChild(row);
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
        console.log(e.target.classList.add('hovered'));
      })
    }
  }
}

createGrid();