const outer = document.getElementById('outer');
const inner = document.createElement('div');
let userInput = 10;
inner.id = 'inner';
outer.appendChild(inner);

function createGrid() {
  for (let i = 0; i < userInput; i++) {
    iterBox = document.createElement('div')
    iterBox.id = `box-${i}`;
    iterBox.textContent = i;
    inner.appendChild(iterBox);
  }
}

createGrid();