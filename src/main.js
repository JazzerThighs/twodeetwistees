const { invoke } = window.__TAURI__.tauri;

import melindas_physical_2x2x2x2 from "./puzzles/puz_melindas_physical_2x2x2x2";
import rubiks_junior_2x2x2 from "./puzzles/puz_2x2x2";
import rubiks_cube_3x3x3 from "./puzzles/puz_3x3x3";

const puzzles = [
  rubiks_junior_2x2x2,
  rubiks_cube_3x3x3,
  melindas_physical_2x2x2x2,
];

let stopwatchInterval;
let startTime;
let ready = false;
let isStopwatchRunning = false;
let successfulSolve = false;

function startStopwatch() {
  successfulSolve = false;
  startTime = Date.now();
  stopwatchInterval = setInterval(updateStopwatch, 17);
  isStopwatchRunning = true;
}
function generateStopwatchString() {
  const elapsedTime = Date.now() - startTime;
  const milliseconds = Math.floor(elapsedTime);
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const displayMilliseconds = milliseconds % 1000;
  const displaySeconds = seconds % 60;
  const displayMinutes = minutes % 60;
  const displayHours = hours % 24;
  return `${String(displayHours).padStart(2, "0")}:${String(
    displayMinutes
  ).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}:${String(
    displayMilliseconds
  ).padStart(3, "0")}`;
}
function updateStopwatch() {
  const elapsedTime = Date.now() - startTime;
  const milliseconds = Math.floor(elapsedTime);
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const displayMilliseconds = milliseconds % 1000;
  const displaySeconds = seconds % 60;
  const displayMinutes = minutes % 60;
  const displayHours = hours % 24;
  document.getElementById("stopwatch").textContent = `${String(
    displayHours
  ).padStart(2, "0")}:${String(displayMinutes).padStart(2, "0")}:${String(
    displaySeconds
  ).padStart(2, "0")}:${String(displayMilliseconds).padStart(3, "0")}`;
}
function stopAndResetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  document.getElementById("stopwatch").textContent = "00:00:00:000";
  isStopwatchRunning = false;
  successfulSolve = false;
}
function handleKeydown(event) {
  if (event.repeat === true) { return; }
  // to do
}
function checkSolved(input) {
  let stopwatchstring = generateStopwatchString();
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length - 1; j++) {
      if (
        document.getElementById(input[i][j + 1]).getAttribute("fill") !==
        document.getElementById(input[i][j]).getAttribute("fill")
      ) {
        return false;
      }
    }
  }
  document.getElementById(
    "solvetime"
  ).textContent = `Solved in ${stopwatchstring}`;
  stopAndResetStopwatch();
  ready = false;
  successfulSolve = true;
}
function resetStrokes(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let tri = document.getElementById(input[i][j]);
      tri.setAttribute("stroke-width", "1");
    }
  }
}

document.getElementById("scramble").addEventListener("click", scramble);
document.getElementById("reset").addEventListener("click", reset);
document.addEventListener("keydown", handleKeydown);

// let greetInputEl;
// let greetMsgEl;

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }

// window.addEventListener("DOMContentLoaded", () => {
//   greetInputEl = document.querySelector("#greet-input");
//   greetMsgEl = document.querySelector("#greet-msg");
//   document.querySelector("#greet-form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     greet();
//   });
// });
