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
let secretNumber = Math.floor(Math.random() * 20);

// when clicked checking for correct answer
check.addEventListener('click', e => {
  let guess = Number(checkInput.value);

  if (!guess) {
    message.textContent = '⚠️ No number guessed!';
  } else if (guess === secretNumber) {
    // only reveals secret number after getting it right or wrong
    randomNumber.textContent = secretNumber;
    message.textContent = '🙌 Correct number!';
    randomNumber.style.backgroundColor = 'lightgreen';
    randomNumber.style.width = '15rem';
    highscore.textContent = score.textContent;
  } else if (guess > secretNumber) {
    //nested if statements to end game when score is 0
    if (score.textContent > 1) {
      message.textContent = '⬆️ Too high!';
      score.textContent -= 1;
    } else {
      message.textContent = 'You lost the game...😕';
      randomNumber.textContent = secretNumber;
      randomNumber.style.backgroundColor = 'red';
      randomNumber.style.width = '15rem';
      score.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score.textContent > 1) {
      message.textContent = '⬇️ Too low!';
      score.textContent -= 1;
    } else {
      message.textContent = 'You lost the game...😕';
      randomNumber.textContent = secretNumber;
      randomNumber.style.backgroundColor = 'red';
      randomNumber.style.width = '15rem';
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', e => {
  score.textContent = 20;
  message.textContent = 'Start guessing...';
  randomNumber.style.backgroundColor = '#ffffff';
  randomNumber.style.width = '200px';
  randomNumber.textContent = '?';
  secretNumber = Math.floor(Math.random() * 20);
  checkInput.value = ' ';
});
