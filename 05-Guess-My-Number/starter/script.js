'use strict';

const randomNum = function () {
  return Math.floor(Math.random() * 20) + 1;
};

let rightNum = randomNum();
let score = 20;
let highScore = 0;
let gameOver = false;

//DOM Selectors
const messageDom = document.querySelector('.message');
const scoreDom = document.querySelector('.score');
const highScoreDom = document.querySelector('.highscore');
const numberDom = document.querySelector('.number');
const bodyDom = document.querySelector('body');
const againDom = document.querySelector('.again');
const guessDom = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', function () {
  const inputValue = Number(guessDom.value);
  // when game is over
  if (gameOver) {
    messageDom.textContent = 'Game Over, Click Again';
    //when input value is invalid
  } else if (!inputValue) {
    messageDom.textContent = 'No/Invalid Number';
    //when player guesses right
  } else if (inputValue === rightNum) {
    messageDom.textContent = 'Correct, You Won!';

    //update highscore
    if (score > highScore) {
      highScore = score;
      highScoreDom.textContent = highScore;
    }
    //update CSS
    bodyDom.style.backgroundColor = '#60b347';
    numberDom.style.width = '30rem';

    //show hidden number
    numberDom.textContent = rightNum;

    gameOver = true;

    //when player guesses wrong
  } else if (inputValue !== rightNum) {
    if (score > 1) {
      messageDom.textContent = inputValue > rightNum ? 'Too high' : 'Too low';
      score--;
      scoreDom.textContent = score;
    } else {
      messageDom.textContent = 'You Lost';
      scoreDom.textContent = 0;
      gameOver = true;
    }
  }
});

againDom.addEventListener('click', function () {
  gameOver = false;
  messageDom.textContent = 'Start guessing...';
  score = 20;
  scoreDom.textContent = score;
  guessDom.value = '';
  bodyDom.style.backgroundColor = '#222';
  numberDom.style.width = '15rem';
  numberDom.textContent = '?';
  rightNum = randomNum();
});
