const frogJumps = require("../../lib/myOwnStuff/frogjumps.js");
describe("frogJumps", () => {
  describe("when start is equal to end", () => {
    it("should return 0", () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });
  describe("when start is greater than end", () => {
    it("should return the number of jumps, rounded up", () => {
      const result = frogJumps(101, 10, 5);
      expect(result).toEqual(19);
    });
  });
  describe("when start is less than end", () => {
    it("should return the number of jumps, rounded up", () => {
      const result = frogJumps(10, 100, 5);
      expect(result).toEqual(18);
    });
  });
  describe("when jumplength is greater than 0", () => {
    it("should return the number of jumps, rounded up", () => {
      const result = frogJumps(100, 10, 10);
      expect(result).toEqual(9);
    });
  });
  describe("when jumplength is less than 0", () => {
    it("should return 0", () => {
      const result = frogJumps(100, 10, -1);
      expect(result).toEqual(undefined);
    });
  });
  describe("when jumplength is 0", () => {
    it("should return undefined", () => {
      const result = frogJumps(100, 10, 0);
      expect(result).toEqual(undefined);
    });
  });
});
