const { Builder, By } = require("selenium-webdriver");

(async function scrapeWebsite() {
  // Step 1: بنحدد المتصفح 
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    // اللينك الي هيجيب منة البيانات 
        await driver.get("https://jamesclear.com/articles"); 

    const h2 = await driver.findElement(By.css("h2")); 
    const p = await driver.findElement(By.css("p")); 

    console.log("Title is :", await h2.getText());
    console.log("Description is :", await p.getText());

  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    await driver.quit();
  }
})();
