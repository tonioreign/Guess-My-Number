'use strict';

const againBtn = document.querySelector('.again');
const randomNumber = document.querySelector('.number');
const checkInput = document.querySelector('.input');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const changeBackground = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const openHowTo = document.querySelector('.how-to');

// random number generator between 1 - 20
let secretNumber = Math.floor(Math.random() * 20);

// when clicked checking for correct answer
check.addEventListener('click', e => {
  let guess = Number(checkInput.value);

  if (!guess) {
    message.textContent = '⚠️ No number guessed!';
  }
  // when player wins
  else if (guess === secretNumber) {
    // only reveals secret number after getting it right or wrong
    randomNumber.textContent = secretNumber;
    message.textContent = '🙌 Correct number!';
    randomNumber.style.backgroundColor = 'lightgreen';
    randomNumber.style.width = '15rem';
    highscore.textContent = score.textContent;
  }
  // when guess is higher than number
  else if (guess > secretNumber) {
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
  }
  // when guess is lower than number
  else if (guess < secretNumber) {
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

// Play again function
againBtn.addEventListener('click', e => {
  score.textContent = 20;
  message.textContent = 'Start guessing...';
  randomNumber.style.backgroundColor = '#ffffff';
  randomNumber.style.width = '200px';
  randomNumber.textContent = '?';
  secretNumber = Math.floor(Math.random() * 20);
  checkInput.value = ' ';
});

//Open Modal Function
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//Close Modal Function
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Open Tab
openHowTo.addEventListener('click', openModal);

//Added function to Event Listener (Close tab)
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
