const gameboard = document.querySelector('.gameboard');
const info = document.querySelector('.info');
const startcells = ['', '', '', '', '', '', '', '', ''];
let go = 'circle';
info.textContent = `${go} go first`;
function move(e) {
  const mplay = document.createElement('div');
  mplay.classList.add(go);
  this.append(mplay);
  go = go === 'circle' ? 'cross' : 'circle';
  info.textContent = `its ${go} now`;
  e.target.removeEventListener('click', move);
  checkscore();
}

function checkscore() {
  const allsquer = document.querySelectorAll('.square');

  const winningplace = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [2, 5, 6],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5],
  ];
  winningplace.forEach((array) => {
    // eslint-disable-next-line array-callback-return
    const circlewins = array.every((cell) =>
      allsquer[cell].firstChild?.classList.contains('circle')
    );
    if (circlewins) {
      info.textContent = 'circle wins';
      allsquer.forEach((square) => square.replaceWith(square.cloneNode(true)));
    }
  });
  winningplace.forEach((array) => {
    // eslint-disable-next-line array-callback-return
    const crosswins = array.every((cell) =>
      allsquer[cell].firstChild?.classList.contains('cross')
    );
    if (crosswins) {
      info.textContent = 'cross wins';
      allsquer.forEach((square) => square.replaceWith(square.cloneNode(true)));
    }
  });
}
function creatboard() {
  startcells.forEach((cell, index) => {
    const cellsele = document.createElement('div');
    cellsele.classList.add('square');
    cellsele.id = index;
    gameboard.append(cellsele);
    cellsele.addEventListener('click', move);
  });
}

creatboard();
