chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({
    shows: [],
    test: "Test",
  });
  chrome.contextMenus.create({
    title: "Search",
    id: "search",
    contexts: ["page", "selection"],
  });
});
chrome.contextMenus.onClicked.addListener((menu) => {
  chrome.storage.local.get(["test"], (res) => console.log(res.test));
  fetch(`https://api.tvmaze.com/search/shows?q=marvel}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      chrome.storage.local.set({ shows: data });
    })
    .catch((err) => console.log(err));
  // tabs can search as well and has more options. search by url, creating tabs, seeing open window's tabs
  // chrome.tabs.create({
  //   url: "https://www.tipranks.com",
  // });
  // get tab data
  // chrome.tabs.query({
  //   currentWindow: true;
  // }, (tabs) => {
  //   console.log(tabs)
  // })
  // search - searches google (or set other default) based on value passed to text
  // chrome.search.query({
  //   disposition: "NEW_TAB",
  //   text: `${menu.selectionText}`,
  // });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  console.log(sendResponse);
});
