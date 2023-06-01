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

    const errorMessage = 'Username and password do not match any user in this service.';
    await LoginScreen.usernameField.setValue("invalid_username");
    await LoginScreen.passwordField.setValue("invalid_password");
    await LoginScreen.loginButton.click();
    
    // Verify that the error message is displayed
    await expect(LoginScreen.errorMessageField).toBeDisplayed();
    //await LoginScreen.errorMessageField.getText();

    // Verify that the error message showing is as expected
    await expect(LoginScreen.errorMessageField).toHaveText(errorMessage);
    //await new Promise(f => setTimeout(f, 2000));


  });
  
});
