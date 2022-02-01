const timeElement = document.getElementById("time");
const nameHeading = document.getElementById("name-heading");
const timeHeading = document.getElementById("time-heading");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is ${currentTime}`;

chrome.storage.local.get(["timer"], (res) => {
  const timer = res.timer ?? 0;
  timeHeading.innerText = `the timer is at ${timer}`;
});

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("finished");
  }
);

chrome.storage.sync.get(["name"], (res) => {
  nameHeading.innerText = `Name is ${res.name}`;
});
