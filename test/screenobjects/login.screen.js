
class LoginScreen {
  get usernameField() {
    return $('//*[@content-desc="test-Username" or @name="test-Username"]');
  }
  get passwordField() {
    return $('//*[@content-desc="test-Password" or @name="test-Password"]');
  }
  get loginButton() {
    return $('//*[@content-desc="test-LOGIN" or @name="test-LOGIN"]');
  }
  get loginError() {
    //return $('//*[@content-desc="test-Error message" or @text="Username and password do not match any user in this service."]');
    return $('//*[@content-desc="test-Error message"]');
  }
}

module.exports = new LoginScreen();
