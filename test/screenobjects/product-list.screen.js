class ProductListScreen {
  get productList() {
    return $('//*[@content-desc="test-PRODUCTS" or @name="test-PRODUCTS"]');
  }
  get menuButton() {
    return $('//*[@content-desc="test-Menu" or @name="test-Menu"]');
  }
  get productItem() {
    return $('(//android.widget.TextView[@content-desc="test-Item title"])[2]');
    //return $('(//*[@content-desc="test-Item title"])[2]');

  }
}

module.exports = new ProductListScreen();
