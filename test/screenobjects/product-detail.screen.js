class ProductDetail {
    get productName(){
        return $('//*[@content-desc="test-Description"]/android.widget.TextView[1]');
    }

    get addToCartButton() {
        return $('//*[@content-desc="test-ADD TO CART"]');
    }

    get shoppingCart() {
        return $('//*[@content-desc="test-Cart"]/*');
    }
}

module.exports = new ProductDetail();