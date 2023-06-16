const path = require('path');
const { config } = require('../wdio.shared.conf');
const user= 'yashshvimittal_dODRYg';
const key = '4mxThL7TcWipJwJTfb3y';


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
    "appium:app" : "bs://9d6072c53c0af842cee2d72c0c22284e75af7cc9",
    "appium:interactiveDebugging" : true,
    "appium:video" : true

  }
]

exports.config = config;
