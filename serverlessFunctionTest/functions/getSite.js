// const chromium = require("chrome-aws-lambda");
const axios = require("axios");
const cheerio = require("cheerio");
require("dotenv").config();

exports.handler = async function (event, context) {
  let title = "he";
  try {
    await axios
      .get(
        `https://api.webscrapingapi.com/v1?api_key=${process.env.API_KEY}&url=https%3A%2F%2Fwww.tipranks.com%2Fstocks%2Faapl%2Fforecast&device=desktop&proxy_type=datacenter&country=us&render_js=1&wait_until=domcontentloaded&wait_for=9000`
      )
      .then((res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        let tile = $("h1", html).text();
        console.log("res", tile);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    console.log("finally", title);
    return { statusCode: 200, body: JSON.stringify({ title }) };
  }

  // let text = "1000";
  // let browser;
  // try {
  //   browser = await chromium.puppeteer.launch({
  //     args: chromium.args,
  //     defaultViewport: chromium.defaultViewport,
  //     executablePath:
  //       process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
  //     headless: false,
  //     ignoreHTTPSErrors: true,
  //   });
  //   const page = await browser.newPage();
  //   // await page.setUserAgent(
  //   //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
  //   // );
  //   await page.goto("https://www.tipranks.com/stocks/snap/forecast");
  //   // await page
  //   //   .$eval("h1", (h1) => {
  //   //     h1.innerText;
  //   //   })
  //   //   .then((res) => console.log(res))
  //   //   .catch((err) => console.log(err));
  //   // await page.evaluate(() => {
  //   //   const img = document.querySelector("#hpLogo");
  //   //   console.log(img.src);
  //   //   text = img.src;
  //   // });
  //   await page
  //     .waitForSelector("h1")
  //     .then((ele) => {
  //       // ele.toElement();
  //       console.log("in eval");
  //     })
  //     .catch((err) => console.log(err, "wait"));
  // } catch (error) {
  //   console.log(error);
  //   return error;
  // } finally {
  //   if (browser !== null) {
  //     console.log("finally", text);
  //     await browser.close();
  //     return { statusCode: 200, body: JSON.stringify({ text }) };
  //   }
  // }
};
