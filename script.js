let score = 0;
let clickValue = 1;
let upgradeCost = 10;

document.getElementById("clicker").addEventListener("click", function() {
    score += clickValue;
    document.getElementById("score").innerText = score;
});

document.getElementById("upgrade").addEventListener("click", function() {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickValue += 1;
        upgradeCost *= 2;
        document.getElementById("score").innerText = score;
        document.getElementById("upgrade").innerText = `Upgrade (Cost: ${upgradeCost})`;
    }
});
