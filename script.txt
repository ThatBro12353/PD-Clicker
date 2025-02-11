let clickerCount = 0;
let clicksPerSecond = 0;
let rebirthCost = 10000;
let rebirthLevel = 0;

const clickerCountDisplay = document.getElementById("clicker-count");
const cpsDisplay = document.getElementById("cps");
const rebirthCostDisplay = document.getElementById("rebirth-cost");
const rebirthButton = document.getElementById("rebirth-button");

// Clicker logic
document.getElementById("diddy").addEventListener("click", () => {
  clickerCount++;
  clickerCountDisplay.textContent = clickerCount;
});

// Rebirth logic
rebirthButton.addEventListener("click", () => {
  if (clickerCount >= rebirthCost) {
    clickerCount -= rebirthCost;
    rebirthLevel++;

    // Apply rebirth boosts
    if (rebirthLevel === 1) {
      clicksPerSecond += 0.1;
    } else if (rebirthLevel === 2) {
      clicksPerSecond += 1;
    }

    // Update the display
    clickerCountDisplay.textContent = clickerCount;
    cpsDisplay.textContent = clicksPerSecond.toFixed(1);

    // Increase rebirth cost for the next rebirth
    rebirthCost = Math.floor(rebirthCost * 1.5);
    rebirthCostDisplay.textContent = rebirthCost;

    // Disable rebirth button if not enough clickers
    if (clickerCount < rebirthCost) {
      rebirthButton.disabled = true;
    } else {
      rebirthButton.disabled = false;
    }
  }
});

// Auto-clicker logic (clicks per second)
setInterval(() => {
  clickerCount += clicksPerSecond;
  clickerCountDisplay.textContent = clickerCount;
}, 1000);

// Enable rebirth button when enough clickers are gathered
setInterval(() => {
  if (clickerCount >= rebirthCost) {
    rebirthButton.disabled = false;
  }
}, 1000);
