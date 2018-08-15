const characterCount = require("../lib/characterCount");

describe("characterCount", () => {
  describe("when string doesn't have repeats", () => {
    it("should return how many times the character has been repeated right after it", () => {
      const result = characterCount("help");
      expect(result).toEqual("h1e1l1p1");
    });
  });
  describe("when string has a repeat", () => {
    it("should return how many times the character has been repeated right after it", () => {
      const result = characterCount("hello");
      expect(result).toEqual("h1e1l1l2o1");
    });
  });
  describe("when string has a repeat", () => {
    it("should return how many times the character has been repeated right after it", () => {
      const result = characterCount("heeelloee");
      expect(result).toEqual("h1e1e2e3l1l2o1e4e5");
    });
  });
  describe("When string contains capitalization, punctuation and/or spaces...", () => {
    it("should ignore those and count the letters", () => {
      const result = characterCount("Hello World!");
      expect(result).toEqual("h1e1l1l2o1w1o2r1l3d1");
    });
  });
  describe("When called without argument", () => {
    it("return 0", () => {
      const result = characterCount();
      expect(result).toEqual(0);
    });
  });
});
