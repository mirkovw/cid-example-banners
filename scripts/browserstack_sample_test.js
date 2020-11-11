var webdriver = require('selenium-webdriver');
      
var userName = "mirkovanwilligen1";
var accessKey = "zwtxTisFCVPB35UEV2Mk"
var browserstackURL = 'https://' +  userName + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub';

// Input capabilities
var capabilities = {
  
  'os' : 'Windows',
  'os_version' : '10',
  'browserName' : 'Chrome',
  'browser_version' : '80',
  
  'name' : "mirkovanwilligen1's First Test"

}

var driver = new webdriver.Builder().
  usingServer(browserstackURL).
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
    });
  });
});