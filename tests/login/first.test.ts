import { Builder, WebDriver, Capabilities, By, Key } from "selenium-webdriver";
import { LoginPage } from "../../pagesObject/login.po";
import { CalendarPage } from "../../pagesObject//calendar.po";
import { App } from "../../pagesObject/config.po";
import { SeleniumUtils } from "../../utils/se.utils";

interface IAssert {
  equal: (actual: Object, expected: Object) => void;
}

require("chromedriver");
const assert: IAssert = require("assert");

let capabilities = Capabilities.chrome();

capabilities.set("goog:chromeOptions", {
  args: ["--lang=en", "disable-infobars", "--disable-plugins"]
});

describe("Login form", function() {
  let driver: WebDriver;
  let page: LoginPage;
  let calendarPage: CalendarPage;
  let browser: SeleniumUtils;

  before(async function() {
    driver = await new Builder().withCapabilities(capabilities).build();
    page = new LoginPage(driver);
    calendarPage = new CalendarPage(driver);
    browser = new SeleniumUtils(driver);
  });

  it("Positive test", async function() {
    // browser.go(App.url);
    // await page.isLoad();

      driver.get('https://brunoyam.com/verify');
      await driver.sleep(1000);
      await driver.findElement(By.css('[name="fio"]')).sendKeys("Шарина Юлия Валерьевна")  ;
      await driver.sleep(1000);
      await driver.findElement(By.css('[name="number"]')).sendKeys("TE250-1725");
      await driver.sleep(1000);
      await driver.findElement(By.css('[type="submit"]')).click() ;
      await driver.sleep(1000);
      await driver.findElement(By.css('.list-group')) ;
      await driver.sleep(1000);
      


    // await browser.keys(page.email(), App.user.login);
    // await browser.keys(page.password(), App.user.password);
    // await browser.click(page.submit());
    // await calendarPage.isLoad();
    // await assert.equal(await calendarPage.isPage(), true);
  });

  it("Negative test", async function() {
    driver.get('https://brunoyam.com/verify');
    await driver.sleep(1000);
    await driver.findElement(By.css('[name="fio"]')).sendKeys("Шарина Юлия Валерьевна")  ;
    await driver.sleep(1000);
    await driver.findElement(By.css('[name="number"]')).sendKeys("TE250-172");
    await driver.sleep(1000);
    await driver.findElement(By.css('[type="submit"]')).click() ;
    await driver.sleep(1000);
    await driver.findElement(By.css('.alert-danger')) ;
    await driver.sleep(1000);
  });

  after(() => driver && driver.quit());
});
