const timerHeading = document.getElementById("timer-heading");

chrome.storage.local.get(["default-timer"], (res) => {
  let defaultTimer = res.default - timer ?? "25:00";
  timerHeading.innerText = defaultTimer;
});
