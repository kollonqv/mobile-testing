const { default: waitUntil } = require("webdriverio/build/commands/browser/waitUntil");
const LoginScreen = require("../screenobjects/login.screen");
const ProductListScreen = require("../screenobjects/product-list.screen");

class Utils {
    /* async swipeDown() {
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
    } */

    async swipe(direction){
      const size = await driver.getWindowRect();
      let start_y, start_x, end_x, end_y;
      console.log(`SCREEN SIZE: ${size.width}x${size.height}`);
      switch (direction) {
        case "right":
          start_y = size['height'] * 0.8;
          start_x = size['width'] * 0.05;
          end_x = size['width'] * 0.7;
          end_y = size['height'] * 0.5;
          break;

        case "down":
          start_y = size['height'] * 0.8;
          start_x = size['width'] * 0.5;
          end_x = size['width'] * 0.5;
          end_y = size['height'] * 0.1;
          break;

        case "up":
          start_y = size['height'] * 0.3;
          start_x = size['width'] * 0.5;
          end_x = size['width'] * 0.5;
          end_y = size['height'] * 0.8;
          break;

        default:
          break;
      }
  
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

    async swipeDownUntilElementIsVisible(element) {
      let swipes = 0;
      while (swipes<5){
        console.log("Element not found.. swiping down..");
        this.swipe("down");
        if (element.isExisting()){
          console.log("Swiped down to the element..");
          break;
        }
        swipes++;
      }
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

    async pauseFor(timeInMs) {
      await driver.pause(timeInMs);
      console.log("Pausing execution for %d seconds",timeInMs/1000);
    }
  }
  
  module.exports = new Utils();
  