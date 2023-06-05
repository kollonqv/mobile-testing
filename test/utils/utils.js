const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");

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
              { type: 'pause', duration: 150 },
              // e. Finger moves to end position                        
              //    We move our finger from the center of the element to the                        
              //    starting position of the element.                        
              //    Play with the duration to make the swipe go slower / faster                        
              { type: 'pointerMove', duration: 10000, x: end_x, y: end_y },
              // f. Finger gets up, off the screen                        
              { type: 'pointerUp', button: 0 },
            ],
          },
        ]);
    }

    // Sign in method. Takes username, password and a boolean flag to determine if login is succesfull
    async signIn(username, password, signInWorked) {
      await LoginScreen.usernameField.setValue(username);
      await LoginScreen.passwordField.setValue(password);
      await LoginScreen.loginButton.click();
      // Check if the product list screen is displayed after valid credentials are used
      if (signInWorked) {
        await expect(ProductListScreen.productList).toBeDisplayed();
        console.log('signed in!');
      }
    }
  }
  
  module.exports = new Utils();
  