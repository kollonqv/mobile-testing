//const loginScreen = require("../screenobjects/login.screen");
const LoginScreen = require("../screenobjects/login.screen");

describe('2_LOGIN_invalid_user', () => {

  it('2_LOGIN_invalid_user', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // LOGIN_invalid_user:
    // 1. Insert 'invalid_username' to the Username field
    await LoginScreen.usernameField.setValue("invalid_username");
    // 2. Insert 'invalid_password' to the Password field
    await LoginScreen.passwordField.setValue("invalid_password");
    // 3. Press Login
    await LoginScreen.loginButton.click();
    // 4. Error message is shown: "Username and password do not match any user in this service"
    await expect(LoginScreen.loginError).toBeDisplayed();
    await expect(LoginScreen.loginError).toHaveText('Username and password do not match any user in this service.');
  });
  
});
