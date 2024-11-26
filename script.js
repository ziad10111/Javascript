'use strict';

// Declare global variables for score and secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// 'Again' button listener - Resets the game
document.querySelector('.btn.again').addEventListener('click', function () {
  score = 20; // Reset the global score
  secretNumber = Math.trunc(Math.random() * 20) + 1; // Reset the global secretNumber
  displayMessage('Start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '16rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; // Clear the input field
  document.querySelector('.score').textContent = score;
});

// Function to display message in the .message element
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// 'Check' button listener - Processes the guess
document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If no guess is entered
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // If the guess is correct
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update highscore if necessary
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // If the guess is incorrect
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--; // Decrease the score by 1
      document.querySelector('.score').textContent = score;
    } else {
      // If the score reaches 0
      displayMessage('You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
