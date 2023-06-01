const LoginScreen = require("../screenobjects/login.screen");
const Utils = require('../utils/utils');

describe('2_LOGIN_invalid_user', () => {

  it('2_LOGIN_invalid_user', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // LOGIN_invalid_user:
    // // 1. Insert 'invalid_username' to the Username field
    // // 2. Insert 'invalid_password' to the Password field
    // // 3. Press Login
    await Utils.signIn("invalid_username", "invalid_password", false);

    // 4. Error message is shown: "Username and password do not match any user in this service."
    await expect(LoginScreen.errorMessage).toBeDisplayed();
    await expect(LoginScreen.errorMessage).toHaveText('Username and password do not match any user in this service.');
  });
  
});