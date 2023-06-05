const LoginScreen = require("../screenobjects/login.screen");
const Utils = require('../utils/utils');
const ProductListScreen = require("../screenobjects/product-list.screen");
const ProductDetail = require("../screenobjects/product-detail.screen");


describe('3_E2E_order', () => {

  it('3_E2E_order', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // 1. Login to the app with valid credentials
    await Utils.signIn("standard_user", "secret_sauce", true);

    // 2. Scroll to the Test.allTheThings() T-Shirt (Red)
    await Utils.swipeDown();

    // 3. Open the T-Shirt item page
    await expect(ProductListScreen.productItem).toBeDisplayed();
    let tshirt = await ProductListScreen.productItem.getText();
    let found = false;
    // Swipe down until the correct item is displayed and then click on it
    while (!found) {
      if (tshirt == "Test.allTheThings() T-Shirt (Red)") {
        found = true;
        await ProductListScreen.productItem.click();
      }
      else {
        await Utils.swipeDown();
        await expect(ProductListScreen.productItem).toBeDisplayed();
        tshirt = await ProductListScreen.productItem.getText();
      }
    }
 
    // 4. Add the T-Shirt to the cart
    // Swipe down until the button is visible
    await ProductDetail.productName.waitForExist();
    await Utils.swipeDown();
    await expect(ProductDetail.addToCartButton).toBeDisplayed();
    await ProductDetail.addToCartButton.click();

    // 5. Open Cart
    await ProductDetail.shoppingCart.waitForExist();
    await expect(ProductDetail.shoppingCart).toBeDisplayed();
    await ProductDetail.shoppingCart.click();

    // 6. Verify that the item is in the Cart
    // 7. Perform a swipe from left to right to navigate back to the product page
    // 8. Verify that product page was opened after the swipe

    // 9. Open Cart
    // 10. Click Checkout
    // 11. Insert first name, last name and postal code
    // 12. Click Continue
    // 13. Click Finish
    // 14. Verify that the the THANK YOU FOR YOU ORDER is displayed

    // CLEANUP:

    // Click back to home
    // Open the left side panel
    // Click log out
    // Verify that the user was signed out

  });
  
});
