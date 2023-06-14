
class CheckoutInformation {
  get firstNameField() {
    return $('//*[@content-desc="test-First Name" or @name="test-First Name"]');
  }
  get lastNameField() {
    return $('//*[@content-desc="test-Last Name" or @name="test-Last Name"]');
  }
  get zipField() {
    return $('//*[@content-desc="test-Zip/Postal Code" or @name="test-Zip/Postal Code"]');
  }
  get continue() {
    return $('//*[@content-desc="test-CONTINUE" or @name="test-CONTINUE"]');
  }
}

module.exports = new CheckoutInformation();
