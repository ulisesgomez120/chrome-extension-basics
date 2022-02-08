chrome.storage.local.get(["ticker", "tickerData"], (res) => {
  let { ticker, tickerData } = res;
  if (ticker && ticker === tickerData.ticker) {
    createTempDom(ticker, tickerData);
  } else if (ticker) {
    fetch(`https://testext.netlify.app/api/getSite?ticker=${ticker}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        createTempDom(ticker, data);
        chrome.storage.local.set({ tickerData: data });
      })
      .catch((err) => console.log(err));
  } else {
    return;
  }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.ticker !== "") {
    const ticker = message.ticker;
    fetch(`https://testext.netlify.app/api/getSite?ticker=${ticker}`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        createTempDom(ticker, data);
        chrome.storage.local.set({ tickerData: data });
      })
      .catch((err) => console.log(err));
  }
});
function createTempDom(ticker, tickerData) {
  document.body.innerText = "";
  const header = document.createElement("h1");
  const header2 = document.createElement("h2");
  header.innerText = `${ticker}`;
  header2.innerText = tickerData.price;
  document.body.appendChild(header);
  document.body.appendChild(header2);
}
