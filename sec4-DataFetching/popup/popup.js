const tipranks = () => {
  fetch("https://www.tipranks.com")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
tipranks();
