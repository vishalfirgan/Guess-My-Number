'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Answer 🎉"

// document.querySelector(".number").textContent = 13
// document.querySelector(".score").textContent =18

// document.querySelector(".guess").value = 19

// console.log(document.getElementsByClassName(".message"));
// console.log(document.querySelector(".message"));

// const number =Math.floor(Math.random() * 20) + 1;
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecretNumber);

let score = 20;

let highestScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 To High !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost ! Try again';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 To Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost ! Try again';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Answer !';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = SecretNumber;
    // document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.cssText =
      'width: 30rem; border-radius: 70px;';

    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  }
});

// again functinality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').style.borderRadius = '0';
  document.querySelector('.number').textContent = '?';
});
