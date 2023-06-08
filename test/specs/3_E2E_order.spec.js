const Utils = require("../utils/utils");
const ProductList = require("../screenobjects/product-list.screen");
const ProductDetailsScreen = require("../screenobjects/product-details.screen");

describe('3_E2E_order', () => {

  it('3_E2E_order', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // 1. Login to the app with valid credentials
    await Utils.signIn("standard_user", "secret_sauce", true);
    // 2. Scroll to the Test.allTheThings() T-Shirt (Red)
    
    await Utils.scrollToElement(ProductList.productTestAllThingsTShirt);
    // 3. Open the T-Shirt item page
    await ProductList.productTestAllThingsTShirt.click();
    await Utils.verifyProductDetailsScreen();//Verifying the screen elements
    // verifying product name text
    await expect(ProductDetailsScreen.productName).toHaveText("Test.allTheThings() T-Shirt (Red)");
    // 4. Add the T-Shirt to the cart
    // Scroll to Add to cart button
    await Utils.scrollToElement(productDetailsScreen.AddToCartButton);
    await ProductDetailsScreen.AddToCartButton.click();

    // 5. Open Cart

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
