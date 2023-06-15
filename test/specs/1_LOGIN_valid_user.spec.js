const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");
const Utils = require('../utils/utils');

describe('Scenario_1', () => {

  it('1_LOGIN_valid_user', async () => {
    // 1. Insert 'standard_user' to the Username field
    // 2. Insert 'secret_sauce' to the Password field
    // 3. Press Login
    // 1. Press the Hamburger button
    // 2. Press Logout
    // 3. Validate that the home page with Username and Password fields opens

    await Utils.signIn("standard_user", "secret_sauce", true);

    // CLEANUP
    // 1. Press the Hamburger button
    // 2. Press Logout
    // 3. Validate that the home page with Username and Password fields opens
    await ProductListScreen.menuButton.click();
    await SidePanelScreen.logOutButton.click();
    await expect(LoginScreen.usernameField).toBeDisplayed();
    await expect(LoginScreen.passwordField).toBeDisplayed();
  });

});
