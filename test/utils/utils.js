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

    async swipeDownUntilElementIsVisible(elementLocator) {
      var currentSwipes = 0;
      while(! await (elementLocator).isExisting() && currentSwipes < 5){
        console.log(`Element not visible, swiping down`);
        await this.swipeDown();
        currentSwipes++;
      }
    }

    getElementWithText(text) {
      return $(`//*[contains(@text,"${text}") or contains(@label,"${text}")]`);
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
    async swipeScreen(direction) 
     {
        var screenSize = await driver.getWindowRect();
        
        const height = screenSize['height'];
        const width = screenSize['width'];
        console.log('Screen size ' + width + 'x' + height);
        var startX,startY,endX,endY
        switch (direction.toUpperCase()) 
        {
          case "UP":
            startX = width * 0.5;
            startY = height * 0.8;
            endX = startX;
            endY = height * 0.1;
            break;
          case "DOWN":
            startX = width * 0.5;
            startY = height * 0.3;
            endX = startX;
            endY = height * 0.8
            break;
          case "RIGHT":
            startX = width * 0.05;
            startY = height * 0.5;
            endX = width * 0.7;
            endY = startY;
            break;
          case "LEFT":
            startX = width * 0.95;
            startY = height * 0.5;
            endX = width * 0.6;
            endY = startY;
            break; 
        }
        console.log( startX + ' ' + startY + '  ' + endX + '  ' +endY);
        await driver.performActions([
          {
            type: 'pointer',
            id: 'finger1',
            parameters: {pointerType: 'touch'},
            actions: [
              {type: 'pointerMove', duration: 0, x: startX, y: startY },
              {type: 'pointerDown', button: 0},
              {type: 'pause', duration: 100},
              {type: 'pointerMove', duration: 1000, x: endX, y: endY },
              {type: 'pointerUp', button: 0},

            ],
          },
        ]);
     }
     async swipeUntilElementIsVisible(elementLocator,swipeDirection) {
      var currentSwipes = 0;
      while(! await (elementLocator).isExisting() && currentSwipes < 5){
        console.log('Element not visible, swiping ' + swipeDirection);
        await this.swipeScreen(swipeDirection);
        currentSwipes++;
      }
     
    }
  }
  
  module.exports = new Utils();
  