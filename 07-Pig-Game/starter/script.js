'use strict';

// Selectors
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//game data
let scores, currentScore, activePlayer, gameOver;
const init = function () {
  gameOver = false;

  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  activePlayer = 0;
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--active', 'player--winner');
};
init();

//functions
const diceRoll = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const displayDice = function (num) {
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${num}.png`;
};

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const updateTotalScore = function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
};

const resetCurrentScore = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
};

const displayWinner = function () {
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
  document.getElementById(`score--${activePlayer}`).textContent = 'Winner';
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  gameOver = true;
};

// EVENTS
//Rolling the dice
btnRoll.addEventListener('click', function () {
  if (!gameOver) {
    //1. generate random dice roll
    const diceValue = diceRoll();

    //2. display dice
    displayDice(diceValue);

    //3. if dice is 1 switch player else update the current score
    if (diceValue === 1) {
      resetCurrentScore();
      switchPlayer();
    } else {
      currentScore += diceValue;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    }
  }
});

//Holding the chance
btnHold.addEventListener('click', function () {
  updateTotalScore();
  resetCurrentScore();
  if (scores[activePlayer] >= 10) {
    displayWinner();
  } else {
    switchPlayer();
  }
});

//Starting new game (RESET)
btnNew.addEventListener('click', init);
