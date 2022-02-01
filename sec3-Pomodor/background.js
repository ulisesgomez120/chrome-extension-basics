chrome.alarms.create({
  periodInMinutes: 1,
});

chrome.alarms.onAlarm((alarm) => {
  chrome.storage.local.get(["default-timer"], (res) => {
    let defaultTimer = res.default - timer ?? "25:00";
  });
});
