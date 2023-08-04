// Get references to the counter and buttons
const counterElement = document.getElementById("counter");
const subButton = document.querySelector(".lower");
const addButton = document.querySelector(".add");

// Initial counter value
let counterValue = 0;

// Function to update the counter and its styles
function updateCounter(value) {
  counterValue = value;
  counterElement.textContent = counterValue;
  
  // Change text color based on the counter value
  if (counterValue < 0) {
    counterElement.style.color = "red";
  } else if (counterValue > 0) {
    counterElement.style.color = "green";
  } else {
    // Set the default color specified in the CSS
    counterElement.style.color = "rgba(51, 163, 194, 0.977)";
  }
}

// Set the default color for the counter on page load
updateCounter(0);

// Event listener for the subtract button
subButton.addEventListener("click", () => {
  updateCounter(counterValue - 1);
});

// Event listener for the add button
addButton.addEventListener("click", () => {
  updateCounter(counterValue + 1);
});
