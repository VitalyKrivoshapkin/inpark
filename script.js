const matrixColumns = document.querySelectorAll('.matrix-column');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-`~[]{}\|:;"\'<,>.?/';

function createMatrixChar(column) {
  const char = document.createElement('span');
  char.classList.add('matrix-char');
  char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
  column.appendChild(char);
}

function animateMatrix() {
  matrixColumns.forEach(column => {
    const charCount = Math.floor(Math.random() * 30) + 10;
    for (let i = 0; i < charCount; i++) {
      createMatrixChar(column);
    }
  });
}

animateMatrix();

setInterval(() => {
  matrixColumns.forEach(column => {
    column.firstChild.remove();
  });
  animateMatrix();
}, 100);