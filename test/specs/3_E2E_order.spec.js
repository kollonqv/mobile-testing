const Utils = require('../utils/utils');
const ProductListScreen = require("../screenobjects/product-list.screen");
const ProductDetailsScreen = require("../screenobjects/product-details.screen");

describe('3_E2E_order', () => {

  it('3_E2E_order', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // 1. Login to the app with valid credentials
    await Utils.signIn("standard_user", "secret_sauce", true);
    // 2. Scroll to the Test.allTheThings() T-Shirt (Red)
    await Utils.swipeDownUntilElementIsVisible(ProductListScreen.testAllTheThings);
    // 3. Open the T-Shirt item page
    await ProductListScreen.testAllTheThings.click();
    // 4. Add the T-Shirt to the cart
    await Utils.swipeDownUntilElementIsVisible(ProductDetailsScreen.addToCard);
    await ProductDetailsScreen.addToCard.click();
    // 5. Open Cart
    await ProductDetailsScreen.openCart.click();
    // 6. Verify that the item is in the Cart
    await expect(Utils.getElementWithText("Test.allTheThings() T-Shirt (Red)")).toBeExisting();
    // 7. Perform a swipe from left to right to navigate back to the product page
    // 8. Verify that product page was opened after the swipe
    // 9. Open Cart
    // 10. Click Checkout

    // 11. Insert first name, last name and postal code
    // 12. Click Continue
    // 13. Click Finish
    // 14. Verify that the THANK YOU FOR YOU ORDER message is displayed

    // CLEANUP:

    // Click back to home
    // Open the left side panel
    // Click log out
    // Verify that the user was signed out

  });
  
});
