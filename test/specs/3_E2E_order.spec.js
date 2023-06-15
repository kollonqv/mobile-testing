const Utils = require('../utils/utils');
const ProductListScreen = require("../screenobjects/product-list.screen");
const ProductDetailsScreen = require("../screenobjects/product-details.screen");
const Cart = require("../screenobjects/cart.screen");
const CheckoutInformation = require("../screenobjects/checkout-information.screen");
const CheckoutOverview = require("../screenobjects/checkout-overview.screen");
const CheckoutComplete = require("../screenobjects/checkout-complete.screen");
const LoginScreen = require("../screenobjects/login.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");

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
    await Utils.swipe("right");
    // 8. Verify that product page was opened after the swipe
    await expect(Utils.getElementWithText("BACK TO PRODUCTS")).toBeExisting();
    // 9. Open Cart
    await ProductDetailsScreen.openCart.click();
    // 10. Click Checkout
    await Cart.checkout.click();
    // 11. Insert first name, last name and postal code
    await CheckoutInformation.firstNameField.setValue("Firstname");
    await CheckoutInformation.lastNameField.setValue("Lastname");
    await CheckoutInformation.zipField.setValue("123");
    // 12. Click Continue
    await CheckoutInformation.continue.click();
    // 13. Click Finish
    await Utils.swipeDownUntilElementIsVisible(CheckoutOverview.finish);
    await CheckoutOverview.finish.click();
    // 14. Verify that the THANK YOU FOR YOU ORDER message is displayed
    await expect(Utils.getElementWithText("THANK YOU FOR YOU ORDER")).toBeExisting();
  });

  afterEach(async function() {
    // CLEANUP:
    // Click back to home
    await CheckoutComplete.backHome.click();
    await expect(ProductListScreen.productList).toBeDisplayed();
    // Open the left side panel
    await ProductListScreen.menuButton.click();
    // Click log out
    await SidePanelScreen.logOutButton.click();
    // Verify that the user was signed out
    await expect(LoginScreen.usernameField).toBeDisplayed();
    await expect(LoginScreen.passwordField).toBeDisplayed();
  });
});
