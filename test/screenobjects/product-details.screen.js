class ProductDetailsScreen {
  get addToCard() {
    return $('//*[@content-desc="test-ADD TO CART" or @name="test-ADD TO CART"]');
  }
  get openCart() {
    return $('//*[@content-desc="test-Cart" or @name="test-Cart"]');
  }
}

module.exports = new ProductDetailsScreen();
