class CartScreen {
    get addToCart() {
        return $('//*[@content-desc="test-ADD TO CART"]');
    }
    get removeFromCart() {
        return $('//*[@content-desc="test-REMOVE"]');
    }
    get checkout() {
        return $('//*[@content-desc="test-CHECKOUT"]');
    }
}

module.exports = new CartScreen();