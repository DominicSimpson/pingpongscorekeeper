const player1Button = document.querySelector('#player1Button');
const player2Button = document.querySelector('#player2Button');
const resetButton = document.querySelector('#reset');
const player1Display = document.querySelector('#player1Display');
const player2Display = document.querySelector('#player2Display');
const winningScoreSelect = document.querySelector('#playto');

let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let isGameOver = false;

player1Button.addEventListener('click', function () {
  if (!isGameOver) {
    player1Score += 1;
    if (player1Score === winningScore) {
      isGameOver = true;
      player1Display.classList.add('winner');
      player2Display.classList.add('loser');
    }
    player1Display.textContent = player1Score;
  }
});

player2Button.addEventListener('click', function () {
  if (!isGameOver) {
    player2Score += 1;
    if (player2Score === winningScore) {
      isGameOver = true;
      player2Display.classList.add('winner');
      player1Display.classList.add('loser');
    }
    player2Display.textContent = player2Score;
  }
});

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  player1Score = 0;
  player2Score = 0;
  player1Display.textContent = 0;
  player2Display.textContent = 0;
  player1Display.classList.remove('winner', 'loser');
  player2Display.classList.remove('winner', 'loser');
}
