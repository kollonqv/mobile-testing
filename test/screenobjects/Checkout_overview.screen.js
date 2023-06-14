
class CheckoutOverview {
    get finishButton()
    {
      return $('//*[@content-desc="test-FINISH"]');
    }
  }
  
  module.exports = new CheckoutOverview();