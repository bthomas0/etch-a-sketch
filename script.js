const outer = document.getElementById('outer');
const inner = document.createElement('div');
let userInput = 10;
inner.id = 'inner';
outer.appendChild(inner);

function createGrid() {
  // vertical
  for (let i = 0; i < userInput; i++) {
    iBox = document.createElement('div');
    iBox.className = `row`;
    iBox.id = `row-${i}`;
    inner.appendChild(iBox);
    for (let j = 0; j < userInput; j++) {
      jBox = document.createElement('div')
      jBox.className = `box`;
      jBox.id = `box-${i}-${j}`;
      jBox.textContent = j;
      iBox.appendChild(jBox);
    }
  }
}

createGrid();