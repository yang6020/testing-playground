const unique = require("../lib/firstUnique");
describe("unique", () => {
  describe("with one unique", () => {
    it("should return the first unique character with capital", () => {
      const result = unique("dDdeeefggghhh");
      expect(result).toEqual("f");
    });
  });
  describe("with two unique", () => {
    it("should return the first unique character", () => {
      const result = unique("frof");
      expect(result).toEqual("r");
    });
  });
  describe("with numbers as parameter", () => {
    it("should return 0", () => {
      const result = unique(1223);
      expect(result).toEqual(0);
    });
  });
  describe("with no unique", () => {
    it("should return 0", () => {
      const result = unique("ttttpppp");
      expect(result).toEqual(0);
    });
  });
  describe("with symbols", () => {
    it("should return first unique", () => {
      const result = unique("dddeeef%!!!pgg");
      expect(result).toEqual("f");
    });
  });
});
