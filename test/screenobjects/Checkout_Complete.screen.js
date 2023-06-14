
class CheckoutComplete {
    get orderCompleteMessage()
    {
      return $('//*[@content-desc="test-CHECKOUT: COMPLETE!"]/android.view.ViewGroup/android.widget.TextView[1]');
    }
  }
  
  module.exports = new CheckoutComplete();