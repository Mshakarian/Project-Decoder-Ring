// Write your tests here!
const { expect } = require("chai").expect;
const { polybius } = require("../src/polybius");
describe("polybius()", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "force";
      const acutal = polybius(message);
      const expected = "1243243151";
      expect(actual).to.equal(expected);
    });
    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jedi";
      const actual = polybius(message);
      const expected = "42514142";
      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const message = "Anakin Skywalker";
      const actual = polybius(message);
      const expected = "113311524233 345245251113525124";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "1243243151";
      const acutal = polybius(message, false);
      const expected = "force";
      expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "42514142";
      const actual = polybius(message, false);
      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });
    it("should leave spaces as is", () => {
      const message = "113311524233 345245251113525124";
      const actual = polybius(message, false);
      const expected = "anakin skywalker";
      expect(actual).to.equal(expected);
    });
    it("should return false if the length of all numbers is odd", () => {
      const message = "113311524233 3452452511135251247";
      const actual = polybius(message, false);
      expect(actual).to.be.false;
    });
  });
});
