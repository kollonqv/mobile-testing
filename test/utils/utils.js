const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");
const ProductDetailsScreen = require("../screenobjects/product-details.screen");
class Utils {
    async swipeDown() {
        const size = await driver.getWindowRect();
        console.log(`SCREEN SIZE: ${size.width}x${size.height}`);
        const start_y = size['height'] * 0.8
        const start_x = size['width'] * 0.5
        const end_x = size['width'] * 0.5
        const end_y = size['height'] * 0.1
    
        await driver.performActions([
          {
            // a. Create the event                    
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
              // b. Move finger into start position                        
              { type: 'pointerMove', duration: 0, x: start_x, y: start_y },
              // c. Finger comes down into contact with screen                        
              { type: 'pointerDown', button: 0 },
              // d. Pause for a little bit                        
              { type: 'pause', duration: 100 },
              // e. Finger moves to end position                        
              //    We move our finger from the center of the element to the                        
              //    starting position of the element.                        
              //    Play with the duration to make the swipe go slower / faster                        
              { type: 'pointerMove', duration: 1000, x: end_x, y: end_y },
              // f. Finger gets up, off the screen                        
              { type: 'pointerUp', button: 0 },
            ],
          },
        ]);
    }


    async signIn(username, password, signInWorked) {
      await LoginScreen.usernameField.setValue(username);
      await LoginScreen.passwordField.setValue(password);
      await LoginScreen.loginButton.click();
      if (signInWorked) {
        await expect(ProductListScreen.productList).toBeDisplayed();
        console.log('signed in!');
      }
    }
    
    async verifyProductDetailsScreen()
    {
      // verifying product image displays
        await expect(ProductDetailsScreen.productImage).toBeDisplayed();
        console.log('Product image display');
        // Verifying product name displays
        await expect(ProductDetailsScreen.productName).toBeDisplayed();
        console.log('Product Name display');
        // verifying product details displays
        await expect(ProductDetailsScreen.productDetails).toBeDisplayed();
        console.log('Product Details display');
        // Verifying product price displays
        await expect(ProductDetailsScreen.productPrice).toBeDisplayed();
        console.log('Product Price display');
        
    }
  
    // Method is for scroll till the element to be displayed. Takes input as screen element and sroll max of 10 times
    async scrollToElement(obj)
    {
      var i=0;
      while(i<10)
      {
        try
        {
          console.log("finding object")
          await expect(obj).toBeDisplayed();
          break;
        }
        catch(exc)
        {
          console.log("object not found, scrolling more : i="+i);
          i++;
          this.swipeDown();
        }
      }
    }
  }
  
  module.exports = new Utils();
  