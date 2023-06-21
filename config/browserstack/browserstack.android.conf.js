const path = require('path');
const { config } = require('../wdio.shared.conf');
const user= '';
const key = '';


config.hostname = ('hub.browserstack.com');
//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/**/*.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    user: process.env.BROWSERSTACK_USERNAME || user,
    key: process.env.BROWSERSTACK_ACCESS_KEY || key,
    "platformName" : "android",
    "appium:platformVersion" : process.env.npm_config_osversion || "12.0",
    "appium:deviceName" : process.env.npm_config_device || "Samsung Galaxy S22 Ultra",
    "appium:app" : "", // Put the BS url here which you get after uploading the app to BrowserStack
    "appium:interactiveDebugging" : true,
    "appium:video" : true

  }
]

exports.config = config;
