const editOneorTwo = require("../lib/editOneorTwo");
describe("editOneorTwo", () => {
  describe("one letter removed", () => {
    it("should return the first unique character with capital", () => {
      const result = editOneorTwo("pale", "ple");
      expect(result).toEqual(true);
    });
  });
  describe("1 letter removed", () => {
    it("return true", () => {
      const result = editOneorTwo("pales", "pale");
      expect(result).toEqual(true);
    });
  });
  describe("1 letter changedr", () => {
    it("return true", () => {
      const result = editOneorTwo("pale", "bale");
      expect(result).toEqual(true);
    });
  });
  describe("diff words", () => {
    it("return false", () => {
      const result = editOneorTwo("pale", "bake");
      expect(result).toEqual(false);
    });
  });
  describe("added one letter and edited one letter", () => {
    it("return false", () => {
      const result = editOneorTwo("face", "facts");
      expect(result).toEqual(false);
    });
  });
});
