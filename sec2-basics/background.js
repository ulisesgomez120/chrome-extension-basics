chrome.alarms.create({
  periodInMinutes: 1,
});

chrome.alarms.onAlarm.addListener((a) => {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    chrome.storage.local.set({
      timer: time + 1,
    });
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });
    console.log(this);
    this.registration.showNotification("Chrome Timer Extension", {
      body: "1 minute has passed",
    });
  });
});
