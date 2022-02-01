const defaultTimerInput = document.getElementById("default-time-input");
const setDefaultBtn = document.getElementById("set-default-btn");

chrome.storage.local.get(["timer"], (res) => {
  let timer = res.timer ?? 25;
  defaultTimerInput.value = timer;
});

setDefaultBtn.addEventListener("click", () => {
  let timer = defaultTimerInput.value;
  chrome.storage.local.set({ timer }, () => {
    console.log(`timer set to ${timer}`);
  });
});
