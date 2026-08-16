const stats = document.getElementById("stats__button");
const about = document.getElementById("about__button");
const achievment = document.getElementById("achievment__button");
const ending = document.getElementById("ending__button");
const ending2 = document.getElementById("ending__button-2");
const end = document.getElementById("ending__popup-confirm-button");
const statsPopup = document.getElementById("stats__popup");
const aboutPopup = document.getElementById("about__popup");
const achievmentPopup = document.getElementById("achievment__popup");
const endingPopup = document.getElementById("ending__popup-attention");
const endPopup = document.getElementById("end__popup")
const statsClose = document.getElementById("stats__popup-close-button");
const aboutClose = document.getElementById("about__popup-close-button");
const achievmentClose = document.getElementById("achievment__popup-close-button");
const endingClose = document.getElementById("ending__popup-close-button");
const mainScreen = document.getElementById("main");
const mainPosition = mainScreen.getBoundingClientRect();
const notificationImage = document.getElementById("achievment__notification-image");
const notificationText = document.getElementById("achievment__notification-text");
const notificationBlock = document.getElementById("achievment__notification");

let achievmentMarks = {
  achievmentMark1: {mark: document.getElementById("achievment__mark-1")},
  achievmentMark2: {mark: document.getElementById("achievment__mark-2")},
  achievmentMark3: {mark: document.getElementById("achievment__mark-3")},
  achievmentMark4: {mark: document.getElementById("achievment__mark-4")},
  achievmentMark5: {mark: document.getElementById("achievment__mark-5")},
  achievmentMark6: {mark: document.getElementById("achievment__mark-6")},
  achievmentMark7: {mark: document.getElementById("achievment__mark-7")},
  achievmentMark8: {mark: document.getElementById("achievment__mark-8")},
  achievmentMark9: {mark: document.getElementById("achievment__mark-9")},
  achievmentMark10: {mark: document.getElementById("achievment__mark-10")}

}
let achievments = {
  achievment1: {status: false},
  achievment2: {status: false},
  achievment3: {status: false},
  achievment4: {status: false},
  achievment5: {status: false},
  achievment6: {status: false},
  achievment7: {status: false},
  achievment8: {status: false},
  achievment9: {status: false},
  achievment10: {status: false}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateNotification(achievmentName, achievmentImage){
  notificationImage.src = "images/" + achievmentImage;
  notificationText.textContent = achievmentName;
  notificationBlock.classList.add("achievment__notification-open");
  await sleep(5000);
  notificationBlock.className = "achievment__notification";

}

function updateAchievments(achievmentMark){
  const achievment = achievmentMarks[achievmentMark];
  achievment.mark.src = "images/mark.png";



}

function checkClickAchievments(){
  if (totalClicks >= 100 && achievments.achievment1.status == false){
    achievments.achievment1.status = true;
    updateAchievments("achievmentMark1");
    updateNotification("Первые шаги", "cursor3.png");
  }
  else if (totalClicks >= 1000 && achievments.achievment2.status == false){
    achievments.achievment2.status = true;
    updateAchievments("achievmentMark2");
    updateNotification("Начинающий Кликер", "cursor3.png");
  }
  else if (totalClicks >= 5000 && achievments.achievment3.status == false){
    achievments.achievment3.status = true;
    updateAchievments("achievmentMark3");
    updateNotification("Заядлый Кликоман", "cursor3.png");
  }
  else if (clicks >= 1000000 && achievments.achievment4.status == false){
    achievments.achievment4.status = true;
    updateAchievments("achievmentMark4");
    updateNotification("Миллионер", "coin2.png");
  }
  else if (clicks >= 1000000000 && achievments.achievment5.status == false){
    achievments.achievment5.status = true;
    updateAchievments("achievmentMark5");
    updateNotification("Миллиардер", "coin2.png");
  }
  else if (clicks >= 100000000000 && achievments.achievment6.status == false){
    achievments.achievment6.status = true;
    updateAchievments("achievmentMark6");
    updateNotification("Недалеко от Илон Маска", "coin2.png");
  }
}

function checkUpgradeAchievments() {
  if (totalUpgrades >= 250 && achievments.achievment7.status == false){
    achievments.achievment7.status = true;
    updateAchievments("achievmentMark7");
    updateNotification("Шопоголик", "upgrade.png");
  }
  else if (catCounter >= 50 && achievments.achievment8.status == false){
    achievments.achievment8.status = true;
    updateAchievments("achievmentMark8");
    updateNotification("Кошатница", "cat.png");
  }
  else if (queenStatus == true && achievments.achievment9.status == false){
    achievments.achievment9.status = true;
    updateAchievments("achievmentMark9");
    updateNotification("Королева Кликов", "crown.png");
  }
  else if (gameStatus == true && achievments.achievment10.status == false){
    achievments.achievment10.status = true;
    updateAchievments("achievmentMark10");
    updateNotification("Это Ложь", "cake.png");
  }

}



stats.addEventListener("click", () => {

  statsPopup.classList.add("stats__popup-open");
  updateTimer();

})

statsClose.addEventListener("click", () => {

  statsPopup.className = "stats__popup";

})

about.addEventListener("click", () => {

  aboutPopup.classList.add("about__popup-open");

})

aboutClose.addEventListener("click", () => {

  aboutPopup.className = "about__popup";

})

achievment.addEventListener("click", () => {

  achievmentPopup.classList.add("achievment__popup-open");

})

achievmentClose.addEventListener("click", () => {

  achievmentPopup.className = "achievment__popup";

})

ending.addEventListener("click", () => {

  endingPopup.classList.add("ending__popup-attention-open");

})

endingClose.addEventListener("click", () => {

  endingPopup.className = "ending__popup-attention";

})

end.addEventListener("click", () => {

  endPopup.classList.add("end__popup-open");
  endingPopup.className = "ending__popup-attention";

})
