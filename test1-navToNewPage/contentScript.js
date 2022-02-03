const symbolInput = document.getElementById("symbol");
if (symbolInput) {
  chrome.storage.local.set({ ticker: symbolInput.value });
} else {
  chrome.storage.local.set({ ticker: "" });
}
