const LoginScreen = require("../screenobjects/login.screen");

describe('2_LOGIN_invalid_user', () => {

  it('2_LOGIN_invalid_user', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // LOGIN_invalid_user:
    // 1. Insert 'invalid_username' to the Username field
    // 2. Insert 'invalid_password' to the Password field
    // 3. Press Login
    // 4. Error message is shown: "Username and password do not match any user in this service"
    await LoginScreen.usernameField.setValue("invalid_username");
    await LoginScreen.passwordField.setValue("invalid_password");
    await LoginScreen.loginButton.click();
    var errorObject = LoginScreen.loginErrorMessage;
    //toverify error message display
    await expect(errorObject).toBeDisplayed();
    //to verify the message
    await expect(errorObject).toHaveText('Username and password do not match any user in this service.');
        
  });
  
});
