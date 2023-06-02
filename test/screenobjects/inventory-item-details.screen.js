class inventoryItemDetailsScreen {
    get inventoryItem() {
        return $('//*[@content-desc="test-Inventory item page"]');
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
        return $('//*[@content-desc="test-Description"]/android.widget.TextView[1]')
    }
}