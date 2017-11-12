var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {
  //directConnect: true,
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "https://secure-random-ui.appspot.com",
  multiCapabilities:[
      {browserName: process.env.TEST_BROWSER_NAME || "chrome"},
      {browserName: process.env.TEST_BROWSER_NAME || "firefox"},
      {browserName: process.env.TEST_BROWSER_NAME || "internet explorer"}
  ],
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  exclude: "../features/database.feature",
  resultJsonOutputFile: "./reports/json/protractor_report.json",
  onPrepare: function() {
    browser.ignoreSynchronization = false;
    //browser.manage().window().maximize();
    global.expect = chai.expect;
  },
  cucumberOpts: {
    strict: true,
    format: ["pretty"],
    require: ["../stepDefinitions/*.js", "../support/*.js"],
    tags: "(@ProtractorScenario)"
  }
};
