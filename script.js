let count = 0;
let clickPower = 1;
let autoClickerActive = false;

const countElem = document.getElementById('count');
const button = document.getElementById('clicker-button');
const upgradeButton = document.getElementById('upgrade-button');
const autoClickerButton = document.getElementById('auto-clicker-button');
const adsOffer = document.getElementById('ads-offer');

function updateDisplay() {
  countElem.textContent = count + ' рублей';
  if (count >= 1000) {
    adsOffer.style.display = 'block';
  }
}

button.addEventListener('click', () => {
  count += clickPower;
  updateDisplay();
});

upgradeButton.addEventListener('click', () => {
  if (count >= 50) {
    count -= 50;
    clickPower += 1;
    updateDisplay();
  } else {
    alert('Не хватает рублей!');
  }
});

autoClickerButton.addEventListener('click', () => {
  if (count >= 100 && !autoClickerActive) {
    count -= 100;
    autoClickerActive = true;
    setInterval(() => {
      count += clickPower;
      updateDisplay();
    }, 1000);
    updateDisplay();
  } else if (autoClickerActive) {
    alert('Автокликер уже активирован!');
  } else {
    alert('Не хватает рублей!');
  }
});
