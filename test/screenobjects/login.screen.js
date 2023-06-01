
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
  get errorMsgField() {
    //return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
    return $('//*[@content-desc="test-Error message"]/*');
  }
}

module.exports = new LoginScreen();
