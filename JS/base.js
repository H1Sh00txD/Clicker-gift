const counter = document.getElementById("counter");
const clickButton = document.getElementById("button");
const buttonPosition = clickButton.getBoundingClientRect();
const totalClicksCounter = document.getElementById("total__clicks");
const totalCoinsCounter = document.getElementById("total__coins");
const totalUpgradesCounter = document.getElementById("total__upgrades");
const clickValueCounter = document.getElementById("click__value");
const timeInGameCounter = document.getElementById("time-in-game");

// Статистика

let totalClicks = 0;
let totalCoins = 0;
let totalUpgrades = 0;
let startTime = Date.now();
let catCounter = 0;
let queenStatus = false
let gameStatus = false

let clicks = 0;
let clickCount = 1;




function updateTimer() {

  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const hours = String(Math.floor(elapsed / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');
  const seconds = String(elapsed % 60).padStart(2, '0');
  timeInGameCounter.textContent = hours + ":" + minutes + ":" + seconds;
  requestAnimationFrame(updateTimer);

}

function floatText() {
  const floatingText = document.createElement("div");
  const randomX = Math.random() * 150 - 10;


  floatingText.className = "floating-text";
  floatingText.textContent = "+" + formatNumber(clickCount);

  floatingText.style.left = buttonPosition.left + randomX + "px";
  floatingText.style.top = buttonPosition.top + "px";

  document.body.appendChild(floatingText);

  floatingText.addEventListener("animationend", () => {

    floatingText.remove();

  })
}

function formatNumber(num) {
  if (num < 1000) {
    return num;
  } else if (num < 1000000) {
    if (num % 1000 < 100){
      return (num / 1000).toFixed(0) + "K";
    }
    else {
      return (num / 1000).toFixed(1) + "K";
    }
  }
  else if (num < 1000000000) {
    if (num % 1000000 < 100000){
      return (num / 1000000).toFixed(0) + "M";
    }
    else {
      return (num / 1000000).toFixed(1) + "M";
    }
  }
  else if (num < 1000000000000) {
    if (num % 1000000000 < 100000000){
      return (num / 1000000000).toFixed(0) + "B";
    }
    else {
      return (num / 1000000000).toFixed(1) + "B";
    }
  }
  else if (num < 1000000000000000) {
    if (num % 1000000000000 < 100000000000){
      return (num / 1000000000000).toFixed(0) + "T";
    }
    else {
      return (num / 1000000000000).toFixed(1) + "T";
    }
  }
  else if (num < 1000000000000000000) {
    if (num % 1000000000000000 < 100000000000000){
      return (num / 1000000000000000).toFixed(0) + "Qa";
    }
    else {
      return (num / 1000000000000000).toFixed(1) + "Qa";
    }
  }
  else if (num < 1000000000000000000000) {
    if (num % 1000000000000000000 < 100000000000000000){
      return (num / 1000000000000000000).toFixed(0) + "Qt";
    }
    else {
      return (num / 1000000000000000000).toFixed(1) + "Qt";
    }
  }
}

function updateCounters(){

  totalClicksCounter.textContent = totalClicks;
  totalCoinsCounter.textContent = formatNumber(totalCoins);
  counter.textContent = formatNumber(clicks);

}

clickButton.addEventListener("click", () => {

  floatText();
  clicks += clickCount;
  totalCoins += clickCount;
  totalClicks++;
  updateCounters();
  checkClickAchievments();

})
