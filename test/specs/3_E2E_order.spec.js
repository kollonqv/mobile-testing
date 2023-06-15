const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");
const InventoryItemScreen = require("../screenobjects/inventory-item-details.screen");
const CartScreen = require("../screenobjects/cart-details.screen");
const CheckoutInfoScreen = require("../screenobjects/checkout-info.screen");
const Utils = require('../utils/utils');

describe('3_E2E_order', () => {

  it('3_E2E_order', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // 1. Login to the app with valid credentials
    await Utils.signIn("standard_user", "secret_sauce", true);
    // 2. Scroll to the Test.allTheThings() T-Shirt (Red)
    await Utils.swipeDownUntilElementIsVisible(ProductListScreen.tshirtRedItem);
    // 3. Open the T-Shirt item page
    await expect(ProductListScreen.tshirtRedItem).toHaveText("Test.allTheThings() T-Shirt (Red)");
    console.log("tshirt item is displayed..");
    await ProductListScreen.tshirtRedItem.click();
    await expect(InventoryItemScreen.inventoryItem).toBeDisplayed();
    console.log("Tshirt details page is opened..");
    // 4. Add the T-Shirt to the cart
    await Utils.swipeDownUntilElementIsVisible(InventoryItemScreen.addToCart);
    await InventoryItemScreen.addToCart.click();
    console.log("Item added to cart..");
    // validate the button changed to remove from cart
    await expect(InventoryItemScreen.removeFromCart).toBeDisplayed();
    console.log("Remove cart option is displayed..");

    // 5. Open Cart
    await InventoryItemScreen.goToCart.click();
    console.log("Navigate to the cart..");
    // 6. Verify that the item is in the Cart
    await expect(InventoryItemScreen.itemDescription).toBeExisting();
    console.log("Validated the item description..");
    await Utils.pauseFor(3000);
    // 7. Perform a swipe from left to right to navigate back to the product page
    await Utils.swipe("right");
    console.log("Swiped right to the Item details page..");
    await Utils.pauseFor(2000);
    // 8. Verify that product page was opened after the swipe
    await Utils.swipe("up");
    console.log("Swiped up..");
    await expect(InventoryItemScreen.itemDescription).toBeExisting();
    await expect(InventoryItemScreen.backToProductScreenBtn).toBeExisting();
    await Utils.pauseFor(2000);
    console.log("Verified that we are at Tshirt details page..");

    // 9. Open Cart
    await InventoryItemScreen.goToCart.click();
    await Utils.pauseFor(2000);
    console.log("Inside cart again..");
    // 10. Click Checkout
    await CartScreen.checkout.click();
    console.log("Navigated to Checkout screen..");
    // 11. Insert first name, last name and postal code
    await CheckoutInfoScreen.firstName.setValue("Jane");
    await CheckoutInfoScreen.lastName.setValue("Doe");
    await CheckoutInfoScreen.postalCode.setValue("V1V1V1");
    // 12. Click Continue
    await CheckoutInfoScreen.continueBtn.click();
    console.log("Navigated to Billing screen..");
    // 13. Click Finish
    await Utils.swipeDownUntilElementIsVisible(CheckoutInfoScreen.finishBtn);
    await CheckoutInfoScreen.finishBtn.click();
    console.log("Navigated to order confirmation screen..");
    // 14. Verify that the the THANK YOU FOR YOU ORDER is displayed
    await expect(CheckoutInfoScreen.thankYouMessage).toBeExisting();
    console.log("THANK YOU FOR YOU ORDER is displayed..")

    // CLEANUP:

    // Click back to home
    await CheckoutInfoScreen.navigateToHomeBtn.click();
    // Open the left side panel
    await ProductListScreen.menuButton.click();
    // Click log out
    await SidePanelScreen.logOutButton.click();
    // Verify that the user was signed out
    await expect(LoginScreen.usernameField).toBeDisplayed();
    await expect(LoginScreen.passwordField).toBeDisplayed();

  });
  
});
