const player1 = {
  score: 0,
  button: document.querySelector('#player1Button'),
  display: document.querySelector('#player1Display'),
};

const player2 = {
  score: 0,
  button: document.querySelector('#player2Button'),
  display: document.querySelector('#player2Display'),
};

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger ');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

player1Button.addEventListener('click', function () {
  updateScores(player1, player2);
});

player2Button.addEventListener('click', function () {
  updateScores(player2, player1);
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
  player1Display.classList.remove('has-text-success', 'has-text-danger');
  player2Display.classList.remove('has-text-success', 'has-text-danger');
  player1Button.disabled = false;
  player2Button.disabled = false;
}
