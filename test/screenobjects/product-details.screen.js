class ProductDetailsScreen
{
    get productName()
    {
        return $('//*[@content-desc="test-Description"]/android.widget.TextView[1]');
    }
    get productDetails()
    {
        return $('//*[@content-desc="test-Description"]/android.widget.TextView[2]');
    }
    get productImage()
    {
        return $('//*[@content-desc="test-Inventory item page"]//android.widget.ImageView');
    }
    get productPrice()
    {
        return $('//*[@content-desc="test-Price"]');
    }
    get AddToCartButton()
    {
        return $('//*[@content-desc="test-ADD TO CART"]');
    }
}

module.exports = new ProductDetailsScreen();