
class SidePanelScreen {
  get logOutButton() {
    return $('//*[@content-desc="test-LOGOUT" or @name="test-LOGOUT"]');
  }

  get allItemsButton() {
    return $('//*[@content-desc="test-ALL ITEMS" or @name="test-ALL ITEMS"]');
  }
}

module.exports = new SidePanelScreen();
