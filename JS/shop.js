const buyButton1 = document.getElementById("buyButton1");
const buyButton2 = document.getElementById("buyButton2");
const buyButton3 = document.getElementById("buyButton3");
const buyButton4 = document.getElementById("buyButton4");
const buyButton5 = document.getElementById("buyButton5");
const buyButton6 = document.getElementById("buyButton6");
const buyButton7 = document.getElementById("buyButton7");
const buyButton8 = document.getElementById("buyButton8");
const buyButton9 = document.getElementById("buyButton9");
const buyButton10 = document.getElementById("buyButton10");
const buyButton11 = document.getElementById("buyButton11");
const buyButton12 = document.getElementById("buyButton12");
const buyButton13 = document.getElementById("buyButton13");
const buyButton14 = document.getElementById("buyButton14");

const items = {
  item1: { price: 100, buff: 1 },
  item2: { price: 500, buff: 5 },
  item3: { price: 3000, buff: 25 },
  item4: { price: 10000, buff: 100 },
  item5: { price: 50000, buff: 500 },
  item6: { price: 150000, buff: 1500 },
  item7: { price: 500000, buff: 5000 },
  item8: { price: 3000000, buff: 15000 },
  item9: { price: 10000000, buff: 50000 },
  item10: { price: 25000000, buff: 100000 },
  item11: { price: 75000000, buff: 250000 },
  item12: { price: 150000000, buff: 500000 },
  item13: { price: 400000000, buff: 1000000 },
  item14: { price: 1000000000, buff: 5000000 }
};



function buyItem(itemKey, button) {
  const item = items[itemKey];
  if (clicks >= item.price) {
    clicks -= item.price;
    clickCount += item.buff;
    item.price = Math.trunc(item.price * 1.25);
    button.textContent = formatNumber(item.price);
    updateCounters();
    totalUpgrades++;
    totalUpgradesCounter.textContent = totalUpgrades;
    clickValueCounter.textContent = formatNumber(clickCount);
    if (itemKey == "item5"){
      catCounter++
    }
    else if (itemKey == "item13"){
      queenStatus = true;
    }
    else if (itemKey == "item14"){
      gameStatus = true;
    }
    checkUpgradeAchievments();
    return item.price;
  }
}



buyButton1.addEventListener("click", () => {

  buyItem('item1', buyButton1);

})

buyButton2.addEventListener("click", () => {

  buyItem('item2', buyButton2);

})

buyButton3.addEventListener("click", () => {

  buyItem('item3', buyButton3);

})

buyButton4.addEventListener("click", () => {

  buyItem('item4', buyButton4);

})

buyButton5.addEventListener("click", () => {

  buyItem('item5', buyButton5);

})

buyButton6.addEventListener("click", () => {

  buyItem('item6', buyButton6);

})

buyButton7.addEventListener("click", () => {

  buyItem('item7', buyButton7);

})

buyButton8.addEventListener("click", () => {

  buyItem('item8', buyButton8);

})

buyButton9.addEventListener("click", () => {

  buyItem('item9', buyButton9);

})

buyButton10.addEventListener("click", () => {

  buyItem('item10', buyButton10);

})

buyButton11.addEventListener("click", () => {

  buyItem('item11', buyButton11);

})

buyButton12.addEventListener("click", () => {

  buyItem('item12', buyButton12);

})

buyButton13.addEventListener("click", () => {

  buyItem('item13', buyButton13);

})

buyButton14.addEventListener("click", () => {

  buyItem('item14', buyButton14);
  ending2.classList.add("ending__button-2-open");
})
