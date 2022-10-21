"use strict";

let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let number = document.querySelector(".inputNumber").value;
  if (number == random) {
    document.querySelector(".displayMsg").textContent = "Correct guess 🏆";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".middlePortion").style.width = "15rem";
    document.querySelector(".score").textContent = score;
    if (score > highscore) highscore = score;
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".number").textContent = random;
  } else if (number < random) {
    document.querySelector(".displayMsg").textContent = "Guess higher 📈";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (number > random) {
    document.querySelector(".displayMsg").textContent = "Guess lower 📉";
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".highscore").textContent = highscore;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".middlePortion").style.width = "7rem";
  document.querySelector(".displayMsg").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
});
