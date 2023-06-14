
class CheckoutInfo {
    get firstName() {
      return $('//*[@content-desc="test-First Name"]');
    }
    get lastName() {
      return $('//*[@content-desc="test-Last Name"]');
    }
    get postalCode() {
      return $('//*[@content-desc="test-Zip/Postal Code"]');
    }
    get continueButton()
    {
      return $('//*[@content-desc="test-CONTINUE"]');
    }
  }
  
  module.exports = new CheckoutInfo();