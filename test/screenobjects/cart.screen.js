
class Cart {
  get checkout() {
    return $('//*[@content-desc="test-CHECKOUT" or @name="test-CHECKOUT"]');
  }
}

module.exports = new Cart();
