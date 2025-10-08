let startTime;
let updatedTime;
let difference = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Format time as hh:mm:ss
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Start
startBtn.addEventListener("click", () => {
  if (!running) {
    startTime = new Date().getTime() - difference;
    timerInterval = setInterval(() => {
      updatedTime = new Date().getTime() - startTime;
      display.textContent = formatTime(updatedTime);
    }, 1000);
    running = true;
  }
});

// Pause
pauseBtn.addEventListener("click", () => {
  if (running) {
    clearInterval(timerInterval);
    difference = new Date().getTime() - startTime;
    running = false;
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  difference = 0;
  running = false;
});
