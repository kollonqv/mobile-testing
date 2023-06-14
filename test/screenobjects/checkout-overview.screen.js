
class CheckoutOverview {
  get finish() {
    return $('//*[@content-desc="test-FINISH" or @name="test-FINISH"]');
  }
}

module.exports = new CheckoutOverview();
