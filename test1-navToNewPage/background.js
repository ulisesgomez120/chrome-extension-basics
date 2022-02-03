chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({ ticker: "" });
  chrome.contextMenus.create({
    title: "Search",
    id: "search",
    contexts: ["page"],
    documentUrlPatterns: ["https://stockcharts.com/*"],
  });
});
chrome.contextMenus.onClicked.addListener((menu) => {
  chrome.storage.local.get(["ticker"], (res) => {
    const ticker = res.ticker;
    if (ticker && ticker[0] !== "$") {
      chrome.tabs.create({
        url: `https://www.tipranks.com/stocks/${ticker}/forecast`,
      });
    } else {
      chrome.tabs.create({
        url: "https://www.tipranks.com",
      });
    }
  });
});
