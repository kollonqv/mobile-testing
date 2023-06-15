class CheckoutInfoScreen {
    get firstName() {
        return $('//*[@content-desc="test-First Name"]');
    }
    get lastName() {
        return $('//*[@content-desc="test-Last Name"]');
    }
    get postalCode() {
        return $('//*[@content-desc="test-Zip/Postal Code"]');
    }
    get continueBtn() {
        return $('//*[@content-desc="test-CONTINUE"]');
    }
    get finishBtn() {
        return $('//*[@content-desc="test-FINISH"]');    
    }
    get thankYouMessage(){
        return $('//*[@text="THANK YOU FOR YOU ORDER"]');
    }
    get navigateToHomeBtn() {
        return $('//*[@content-desc="test-BACK HOME"]');
    }
}

module.exports = new CheckoutInfoScreen();