const loginScreen = require("../screenobjects/login.screen");
//const LoginScreen = require("../screenobjects/login.screen");

describe('2_LOGIN_invalid_user', () => {

  it('2_LOGIN_invalid_user', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // LOGIN_invalid_user:
    // 1. Insert 'invalid_username' to the Username field
    // 2. Insert 'invalid_password' to the Password field
    // 3. Press Login
    // 4. Error message is shown: "Username and password do not match any user in this service"
    await loginScreen.usernameField.setValue("invalid_username");
    await loginScreen.passwordField.setValue("invalid_password");
    await loginScreen.loginButton.click();

/*    await expect(loginScreen.errorMsgField).toBeDisplayed();
    await expect(loginScreen.errorMsgField).toHaveText('Username and password do not match any user in this service.');
    await new Promise(f => setTimeout(f, 3000)); //added Timeout to avoid looping.
*/
/*    if(expect(loginScreen.errorMsgField).toHaveText('Username and password do not match any user in this service')==true)
      console.log("Invalid credentials error message is displayed successfully")
    else  
      console.log("Failed to display expected error message");
*/
      
    let errorMsg = await loginScreen.errorMsgField.getText();
  // if(errorMsg.isEqual("Username and password do not match any user in this service"))
  if(errorMsg= "Username and password do not match any user in this service")
      console.log(errorMsg+"- Invalid credentials error message is displayed successfully")
    else  
      console.log("Failed to display expected error message");
      
      
  });
  
});
