
class CartScreen {
    get CheckoutButton() {
      return $('//*[@content-desc="test-CHECKOUT"]');
    }
  }
  
  module.exports = new CartScreen();