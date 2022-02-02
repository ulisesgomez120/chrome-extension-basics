chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Search",
    id: "search",
    contexts: ["selection"],
  });
});
chrome.contextMenus.onClicked.addListener((menu) => {
  // tabs can search as well and has more options. search by url, creating tabs, seeing open window's tabs
  chrome.tabs.create({
    url: "https://www.tipranks.com",
  });
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
