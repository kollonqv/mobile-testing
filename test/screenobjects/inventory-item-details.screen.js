class InventoryItemScreen {
    get inventoryItem() {
        return $('//*[@content-desc="test-Inventory item page"]');
    }
    get backToProductScreenBtn() {
        return $('//*[@content-desc="test-BACK TO PRODUCTS"]');
    }
    get addToCart() {
        return $('//*[@content-desc="test-ADD TO CART"]');
    }
    get removeFromCart() {
        return $('//*[@content-desc="test-REMOVE"]');
    }
    get goToCart(){
        return $('//*[@content-desc="test-Cart"]');
    }
    get itemDescription(){
        return $('//*[@text="Test.allTheThings() T-Shirt (Red)"]');
    }
}

module.exports = new InventoryItemScreen();