class ProductListScreen {
  get productList() {
    return $('//*[@content-desc="test-PRODUCTS" or @name="test-PRODUCTS"]');
  }
  get menuButton() {
    return $('//*[@content-desc="test-Menu" or @name="test-Menu"]');
  }
  get testAllTheThings() {
    return $('//*[@text="Test.allTheThings() T-Shirt (Red)" or @label="Test.allTheThings() T-Shirt (Red)"]');
  }
}

module.exports = new ProductListScreen();
