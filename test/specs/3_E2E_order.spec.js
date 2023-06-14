const Utils = require('../utils/utils');
const ProductListScreen = require("../screenobjects/product-list.screen");
const ProductDetailsScreen = require("../screenobjects/product-details.screen");
const productDetailsScreen = require('../screenobjects/product-details.screen');
const cartScreen = require('../screenobjects/cart.screen');
const Checkout_InfoScreen = require('../screenobjects/Checkout_Info.screen');
const Checkout_overviewScreen = require('../screenobjects/Checkout_overview.screen');
const Checkout_CompleteScreen = require('../screenobjects/Checkout_Complete.screen');

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
    await Utils.swipeUntilElementIsVisible(ProductDetailsScreen.addToCard,"UP");
    await ProductDetailsScreen.addToCard.click();
    // 5. Open Cart
    await ProductDetailsScreen.openCart.click();
    // 6. Verify that the item is in the Cart
    await expect(Utils.getElementWithText("Test.allTheThings() T-Shirt (Red)")).toBeExisting();
    // 7. Perform a swipe from left to right to navigate back to the product page
    await Utils.swipeScreen("RIGHT");
    // 8. Verify that product page was opened after the swipe
    await productDetailsScreen.verifyProductDetailsScreen();
    // 9. Open Cart
    await productDetailsScreen.openCart.click();
    // 10. Click Checkout
    await cartScreen.CheckoutButton.click();


    // 11. Insert first name, last name and postal code
    await Checkout_InfoScreen.firstName.setValue("Balaram");
    await Checkout_InfoScreen.lastName.setValue("Meher");
    await Checkout_InfoScreen.postalCode.setValue("K1K1K1");
    

    // 12. Click Continue
    await Utils.swipeUntilElementIsVisible(Checkout_InfoScreen.continueButton,"UP");
    await Checkout_InfoScreen.continueButton.click();
    // 13. Click Finish
    await Utils.swipeUntilElementIsVisible(Checkout_overviewScreen.finishButton,"UP");
    await Checkout_overviewScreen.finishButton.click();
    // 14. Verify that the THANK YOU FOR YOU ORDER message is displayed
    await expect(Checkout_CompleteScreen.orderCompleteMessage).toBeDisplayed();
    await expect(Checkout_CompleteScreen.orderCompleteMessage).toHaveTextContaining("THANK YOU FOR YOU ORDER");

    // CLEANUP:

    // Click back to home
    // Open the left side panel
    // Click log out
    // Verify that the user was signed out

  });
  
});
