const axios = require("axios");
const cheerio = require("cheerio");

exports.handler = async function (event, context) {
  let text = "nothing";
  await axios
    .get("https://www.tipranks.com/stocks/amc/forecast", { timeout: 3500 })
    .then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      text = $("h1", html).text();
      console.log(text, "text");
    })
    .catch((err) => console.log(err));

  return { statusCode: 200, body: JSON.stringify({ text }) };
};
