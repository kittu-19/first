function checkAnswer() {
  const answer = document.getElementById("riddleAnswer").value.trim().toLowerCase();
  const feedback = document.getElementById("riddleFeedback");

  if (answer === "echo") {
    feedback.style.color = "green";
    feedback.textContent = "Correct! Unlocking your surprise... 💖";
    setTimeout(() => {
      document.getElementById("puzzleSection").classList.add("hidden");
      document.getElementById("mainContent").classList.remove("hidden");
    }, 2000);
  } else {
    feedback.style.color = "red";
    feedback.textContent = "Hmm... not quite. Try again!";
  }
}

document.getElementById("yesButton").onclick = () => {
  document.getElementById("resultContent").innerHTML = "<h2>Yay! 💍 I love you, Kittu! ❤️</h2>";
  document.getElementById("mainContent").classList.add("hidden");
  document.getElementById("resultContent").classList.remove("hidden");
};

document.getElementById("noButton").onclick = () => {
  document.getElementById("resultContent").innerHTML = "<h2>Oh no 😢 but I’ll still love you forever!</h2>";
  document.getElementById("mainContent").classList.add("hidden");
  document.getElementById("resultContent").classList.remove("hidden");
};


