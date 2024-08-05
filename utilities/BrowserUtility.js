export class BrowserUtility {
  static async sleep(seconds) {
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }

  // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...

  /**
   * A custom function to verify expected and actual messages on the website are equal
   * and that function returns promise:
   */
  static async verifyMessages(actual, expected) {
    return new Promise((resolve) => {
      resolve(actual.toString() === expected.toString());
    });
  }
}
