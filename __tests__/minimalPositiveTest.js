const minimalPositive = require("../lib/minimalPositive");
describe("minimalPositive", () => {
  describe("only positive numbers", () => {
    it("should return the minimal positive number", () => {
      const result = minimalPositive([1, 3, 6, 4, 1, 2]);
      expect(result).toEqual(5);
    });
  });
  describe("with negative numbers", () => {
    it("should return the minimal positive number", () => {
      const result = minimalPositive([1, -3, 6, 4, 1, 2]);
      expect(result).toEqual(3);
    });
  });
  describe("all 0", () => {
    it("should return 0", () => {
      const result = minimalPositive([0, 0, 0, 0]);
      expect(result).toEqual(0);
    });
  });
  describe("all positive", () => {
    it("should return minimal positive number", () => {
      const result = minimalPositive([2, 2, 2, 2]);
      expect(result).toEqual(2);
    });
  });
  describe("all negative", () => {
    it("should return  0", () => {
      const result = minimalPositive([0, 0, 0, 0]);
      expect(result).toEqual(0);
    });
  });
  describe("not array", () => {
    it("should return 0", () => {
      const result = minimalPositive("hello");
      expect(result).toEqual(0);
    });
  });
  describe("all strings", () => {
    it("should return 0", () => {
      const result = minimalPositive(["helo", "lol"]);
      expect(result).toEqual(0);
    });
  });
  describe("some strings", () => {
    it("should return 0", () => {
      const result = minimalPositive([1, 2, "lol"]);
      expect(result).toEqual(0);
    });
  });
  describe("some strings", () => {
    it("should return 0", () => {
      const result = minimalPositive(["lol", 2, 1]);
      expect(result).toEqual(0);
    });
  });
});
