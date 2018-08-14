const palindrome = require("../lib/palindrome.js");
describe("palindrome", () => {
  describe("when it is a palindrome", () => {
    it("should return true", () => {
      const result = palindrome("racecar");
      expect(result).toEqual(true);
    });
  });
  describe("when it is a palindrom with spaces,capital letters, or symbols", () => {
    it("should return true", () => {
      const result = palindrome("never odd or even");
      expect(result).toEqual(true);
    });
    it("should return true", () => {
      const result = palindrome("Mom");
      expect(result).toEqual(true);
    });
    it("should return true", () => {
      const result = palindrome("m%om");
      expect(result).toEqual(true);
    });
  });
  describe("when it is not a palindrome", () => {
    it("should return false", () => {
      const result = palindrome("hello");
      expect(result).toEqual(false);
    });
    it("should return false", () => {
      const result = palindrome("helllo");
      expect(result).toEqual(false);
    });
  });
});
