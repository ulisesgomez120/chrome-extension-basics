const timerHeading = document.getElementById("timer-heading");
const addTaskBtn = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const deleteTaskBtn = document.getElementById("delete-task-btn");
const toggleTimerBtn = document.getElementById("toggle-timer");

chrome.storage.local.get(["timer"], (res) => {
  let defaultTimer = res.timer ?? "25:00";
  timerHeading.innerText = `${defaultTimer}:00`;
});
toggleTimerBtn.addEventListener("click", function () {
  if (this.innerText === "Start Timer") {
    this.innerText = "Pause Timer";
  } else {
    this.innerText = "Start Timer";
  }
});
