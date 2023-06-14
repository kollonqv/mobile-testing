const utils = require("../utils/utils");

class ProductDetailsScreen {
  get addToCard() {
    return $('//*[@content-desc="test-ADD TO CART" or @name="test-ADD TO CART"]');
  }
  get openCart() {
    return $('//*[@content-desc="test-Cart" or @name="test-Cart"]');
  }
  get productName()
  {
      return $('//*[@content-desc="test-Description"]/android.widget.TextView[1]');
  }
  get productDetails()
  {
      return $('//*[@content-desc="test-Description"]/android.widget.TextView[2]');
  }
  get productImage()
  {
      return $('//*[@content-desc="test-Inventory item page"]//android.widget.ImageView');
  }
  get productPrice()
  {
      return $('//*[@content-desc="test-Price"]');
  }

  async verifyProductDetailsScreen()
    {
      // verifying product image displays
        utils.swipeUntilElementIsVisible(this.productImage,"DOWN");
        await expect(this.productImage).toBeDisplayed();
        console.log('Product image display');
        // Verifying product name displays
        utils.swipeUntilElementIsVisible(this.productName,"DOWN");
        await expect(this.productName).toBeDisplayed();
        console.log('Product Name display');
        // verifying product details displays
        utils.swipeUntilElementIsVisible(this.productDetails,"DOWN");
        await expect(this.productDetails).toBeDisplayed();
        console.log('Product Details display');
        // Verifying product price displays
        utils.swipeUntilElementIsVisible(this.productPrice,"DOWN");
        await expect(this.productPrice).toBeDisplayed();
        console.log('Product Price display');
        
    }
}

module.exports = new ProductDetailsScreen();
