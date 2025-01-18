// Counter functionality
const counterValue = document.getElementById('counter-value');
let count = 0;

// Update the counter display
const updateCounter = () => {
  counterValue.textContent = count;
};

// Buttons
const increaseByOne = document.getElementById('increaseByOne');
const increaseByTwo = document.getElementById('increaseByTwo');
const decreaseByOne = document.getElementById('decreaseByOne');
const decreaseByTwo = document.getElementById('decreaseByTwo');

// Add event listeners
increaseByOne.addEventListener('click', () => {
  count += 1;
  updateCounter();
});

increaseByTwo.addEventListener('click', () => {
  count += 2;
  updateCounter();
});

decreaseByOne.addEventListener('click', () => {
  count -= 1;
  updateCounter();
});

decreaseByTwo.addEventListener('click', () => {
  count -= 2;
  updateCounter();
});

// Initialize the counter
updateCounter();
