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
  //iOS config
  {
    user: process.env.BROWSERSTACK_USERNAME || user,
    key: process.env.BROWSERSTACK_ACCESS_KEY || key,
    "platformName" : "android",
    "appium:platformVersion" : process.env.npm_config_osversion || "12.0",
    "appium:deviceName" : process.env.npm_config_device || "Samsung Galaxy S22 Ultra",
    "appium:app" : "bs://9d6072c53c0af842cee2d72c0c22284e75af7cc9",
  },
  //android config
  {
    user: process.env.BROWSERSTACK_USERNAME || user,
    key: process.env.BROWSERSTACK_ACCESS_KEY || key,
    "platformName" : "ios",
    "appium:platformVersion" : process.env.npm_config_osversion || "16.0",
    "appium:deviceName" : process.env.npm_config_device || "iPhone 14",
    "appium:app" : "bs://59821aec5c61ea1f33282a9bf2ee2c5770ee51d3",
  }
]

exports.config = config;
