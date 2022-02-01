const nameInputEle = document.getElementById("input-name");
const saveBtnEle = document.getElementById("save-btn");

saveBtnEle.addEventListener("click", () => {
  const name = nameInputEle.value;
  chrome.storage.sync.set({ name }, () => {
    console.log(`name is ${name}`);
  });
});

chrome.storage.sync.get(["name"], (res) => {
  nameInputEle.value = `${res.name}`;
});
