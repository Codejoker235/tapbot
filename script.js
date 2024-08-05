document.addEventListener('DOMContentLoaded', () => {
    const tapButton = document.getElementById('tapButton');
    const moneyDisplay = document.getElementById('moneyDisplay');
    
    let moneyCount = 0;
    
    tapButton.addEventListener('click', () => {
        moneyCount += 10; // Increment money count by 1 for each tap
        moneyDisplay.textContent = `$${moneyCount}`; // Update the display
    });
});
// Variables to track the money and earnings per tap
let money = 0;
const earningsPerTap = 1;
const goal = 100.0; // Example goal amount to fill the progress bar

// Function to update the display of money
function updateMoneyDisplay() {
    const moneyDisplay = document.getElementById('moneyDisplay');
    moneyDisplay.textContent = `$${money.toFixed(2)}`;
}

// Function to update the progress bar
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressPercentage = Math.min((money / goal) * 100, 100); // Ensure it doesn’t exceed 100%
    progressBar.style.width = `${progressPercentage}%`;
}

// Event listener for the tap button (image)
document.getElementById('tapButton').addEventListener('click', () => {
    money += earningsPerTap;
    updateMoneyDisplay();
    updateProgressBar();
});

// Initialize the display and progress bar
updateMoneyDisplay();
updateProgressBar();
// Function to save the game state to localStorage
function saveGameState() {
    localStorage.setItem('money', money);
    localStorage.setItem('isGoalReached', isGoalReached);
}


// Function to show the floating text
function showFloatingText() {
    const floatingText = document.getElementById('floatingText');
    floatingText.style.opacity = '1';
    floatingText.style.transform = 'translate(-50%, -50px)';
    
    // After the animation ends, hide the floating text
    setTimeout(() => {
        floatingText.style.opacity = '0';
        floatingText.style.transform = 'translate(-50%, -30px)';
    }, 500); // Match this with the CSS transition duration
}
// Event listener for the tap button (image)
document.getElementById('tapButton').addEventListener('click', () => {
    money += earningsPerTap;
    updateMoneyDisplay();
    updateProgressBar();
    saveGameState();
});

// Initialize the display and progress bar

updateMoneyDisplay();
updateProgressBar();


// Event listener for the tap button (image)
document.getElementById('tapButton').addEventListener('click', () => {
    money += earningsPerTap;
    updateMoneyDisplay();
    updateProgressBar();
    showFloatingText();

});

// Initialize the display and progress bar
loadGameState();
updateMoneyDisplay();
updateProgressBar();
