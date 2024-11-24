"use strict";

let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".btn.again").addEventListener("click", function () {
  let score = 20;
  let secertNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "16rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".score").textContent = score;
});

document.querySelector(".btn.check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess === secertNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secertNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secertNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You LOst";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secertNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost";
      document.querySelector(".score").textContent = 0;
    }
  }
});
