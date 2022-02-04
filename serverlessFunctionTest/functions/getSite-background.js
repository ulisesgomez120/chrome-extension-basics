const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

exports.handler = async function (event, context) {
  let text = "nothing";
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath),
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto("https://www.tipranks.com/stocks/amc/forecast", {
    waitUntil: "load",
  });
  await page.waitForTimeout(1000);

  await browser.close();

  return { statusCode: 200, body: JSON.stringify({ text }) };
};
