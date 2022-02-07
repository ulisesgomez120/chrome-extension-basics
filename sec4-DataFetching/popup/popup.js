const container = document.querySelector("body");

chrome.storage.local.get(["shows"], (res) => {
  if (res.shows) {
    res.shows.forEach((show) => {
      const showName = document.createElement("h2");
      showName.innerText = show.show.name;
      container.appendChild(showName);
    });
  }
});
