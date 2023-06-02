const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const SidePanelScreen = require("../screenobjects/side-panel.screen");
const InventoryItemScreen = require("../screenobjects/inventory-item-details.screen");
const Utils = require('../utils/utils');

describe('3_E2E_order', () => {

  it('3_E2E_order', async () => {
    // CREATE A TEST CASE CONTAINING THE FOLLOWING STEPS:
    // 
    // 1. Login to the app with valid credentials
    await Utils.signIn("standard_user", "secret_sauce", true);
    // 2. Scroll to the Test.allTheThings() T-Shirt (Red)
    await ProductListScreen.tshirtRedItem.scrollIntoView();
    // 3. Open the T-Shirt item page
    await ProductListScreen.tshirtRedItem.click();
    await expect(InventoryItemScreen.inventoryItem).toBeDisplayed();
    // 4. Add the T-Shirt to the cart
    await InventoryItemScreen.addToCart.scrollIntoView();
    await InventoryItemScreen.addToCart.click();
    // validate the button changed to remove from cart
    await expect(InventoryItemScreen.removeFromCart).toBeDisplayed();


    // 5. Open Cart
    await InventoryItemScreen.goToCart.click();
    // 6. Verify that the item is in the Cart
    await expect(InventoryItemScreen.itemDescription).toHaveText("Test.allTheThings() T-Shirt (Red)");
    // 7. Perform a swipe from left to right to navigate back to the product page
    await Utils.swipeRight(InventoryItemScreen.inventoryItem);
    
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
