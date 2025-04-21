// JavaScript for interactive buttons

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainContent = document.getElementById('mainContent');
const resultContent = document.getElementById('resultContent');

// Function to create confetti animation
function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(confetti);

    // Remove confetti after the animation ends
    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
  mainContent.classList.add('hidden');
  resultContent.innerHTML = `
    <h1>Yay! 🎉 She said YES! 💍</h1>
    <p>I'm the happiest person in the world right now. Thank you for saying yes! Let's start our forever together. 💖</p>
  `;
  resultContent.classList.remove('hidden');
  createConfetti();
});

// Handle "No" button click
noButton.addEventListener('click', () => {
  mainContent.classList.add('hidden');
  resultContent.innerHTML = `
    <h1>Oh no! 😢</h1>
    <p>It breaks my heart, but I will always cherish the time we have shared. 💔</p>
  `;
  resultContent.classList.remove('hidden');
});
