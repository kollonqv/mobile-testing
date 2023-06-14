
class CheckoutComplete {
  get backHome() {
    return $('//*[@content-desc="test-BACK HOME" or @name="test-BACK HOME"]');
  }
}

module.exports = new CheckoutComplete();
