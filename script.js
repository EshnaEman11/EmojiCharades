const emojiSequences = [
  { emojis: "🎬🐶🏠", answer: "The Secret Life of Pets" },
  { emojis: "👑🦁", answer: "The Lion King" },
  { emojis: "🚀🌌", answer: "Interstellar" },
  { emojis: "🦸♂️🕷️", answer: "Spider-Man" },
  { emojis: "🧙♂️⚡", answer: "Harry Potter" },
  { emojis: "🐠🌊", answer: "Finding Nemo" },
  { emojis: "👽📞", answer: "E.T. the Extra-Terrestrial" },
  { emojis: "🦖🏞️", answer: "Jurassic Park" },
  { emojis: "🚗💨", answer: "Fast and Furious" },
  { emojis: "🧜♀️🌊", answer: "The Little Mermaid" },
];

let currentRound = 0;
let score = 0;

// DOM Elements
const emojiSequenceElement = document.getElementById("emoji-sequence");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-guess");
const resultElement = document.getElementById("result");
const nextRoundButton = document.getElementById("next-round");
const scoreElement = document.getElementById("score");

// Display Emoji Sequence
function displayEmojiSequence() {
  emojiSequenceElement.textContent = emojiSequences[currentRound].emojis;
  guessInput.value = "";
  resultElement.textContent = "";
  nextRoundButton.style.display = "none";
  guessInput.focus();
}

// Check Guess
function checkGuess() {
  const userGuess = guessInput.value.trim().toLowerCase().replace(/-/g, " ");
  const correctAnswer = emojiSequences[currentRound].answer.toLowerCase().replace(/-/g, " ");

  if (userGuess === correctAnswer) {
    score += 10;
    scoreElement.textContent = score;
    resultElement.innerHTML = "Correct! 🎉 <div class='party-popper'>🎉</div>";
    resultElement.style.color = "#4CAF50";
    setTimeout(() => resultElement.innerHTML = "Correct! 🎉", 1500);
  } else {
    resultElement.textContent = `Wrong! Answer: "${emojiSequences[currentRound].answer}"`;
    resultElement.style.color = "#FF4A3D";
  }
  nextRoundButton.style.display = "block";
}

// Next Round
function nextRound() {
  currentRound = (currentRound + 1) % emojiSequences.length;
  displayEmojiSequence();
}

// Event Listeners
submitButton.addEventListener("click", checkGuess);
nextRoundButton.addEventListener("click", nextRound);
guessInput.addEventListener("keypress", (e) => e.key === "Enter" && checkGuess());

// Start Game
displayEmojiSequence();