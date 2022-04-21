'use strict';

const againBtn = document.querySelector('.again');
const randomNumber = document.querySelector('.number');
const checkInput = document.querySelector('.input');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const changeBackground = document.querySelector('body');

// random number generator between 1 - 20
const secretNumber = Math.floor(Math.random() * 20);
randomNumber.textContent = secretNumber;

check.addEventListener('click', e => {
  let guess = Number(checkInput.value);

  if (!guess) {
    message.textContent = '⚠️ No number guessed!';
  } else if (guess === secretNumber) {
    message.textContent = '🙌 Correct number!';
    randomNumber.style.backgroundColor = 'lightred';
  } else if (guess > secretNumber) {
    if (score.textContent > 1) {
      message.textContent = '⬆️ Too high!';
      score.textContent -= 1;
    } else {
      message.textContent = 'You lost the game...😕';
      randomNumber.style.backgroundColor = 'lightred';
      score.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score.textContent > 1) {
      message.textContent = '⬇️ Too low!';
      score.textContent -= 1;
    } else {
      message.textContent = 'You lost the game...😕';
      randomNumber.style.backgroundColor = 'red';
      score.textContent = 0;
    }
  }
});
