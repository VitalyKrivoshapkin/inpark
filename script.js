const matrixContainer = document.querySelector('.matrix-container');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-`~[]{};\':"\\|,.<>/?';

function createMatrixColumn() {
  const column = document.createElement('div');
  column.classList.add('matrix-column');
  for (let i = 0; i < 20; i++) {
    const char = document.createElement('span');
    char.classList.add('matrix-char');
    char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
    column.appendChild(char);
  }
  return column;
}

function animateMatrixChar(char) {
  char.classList.add('show');
  setTimeout(() => {
    char.classList.remove('show');
    setTimeout(() => {
      char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
      animateMatrixChar(char);
    }, Math.random() * 1000);
  }, Math.random() * 1000);
}

for (let i = 0; i < 50; i++) {
  const column = createMatrixColumn();
  matrixContainer.appendChild(column);

  const chars = column.querySelectorAll('.matrix-char');
  chars.forEach(char => {
    animateMatrixChar(char);
  });
}