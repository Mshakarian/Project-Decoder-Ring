// Write your tests here!
const { expect } = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "Hello There!";
      const shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
    it("should return false if the shift amount is above 25", () => {
      const message = "Hello There!";
      const shift = 66;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less than -25", () => {
      const message = "Hello There!";
      const shift = -33;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "Kenobi";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "nhqrel";
      expect(actual).to.equal(expected);
    });
    it("should leaves spaces and other symbols as is", () => {
      const message = "hello there!";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "khoor xkhuh!";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "Hello There!";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "khoor xkhuh!";
      expect(actual).to.equal(expected);
    });
    it("should properly handle letters at the end of the alphabet", () => {
      const message = "Yoda";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "brgd";
      expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
      const message = "Luke";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "irhb";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "nhqrel";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "kenobi";
      expect(actual).to.equal(expected);
    });
    it("should leave spaces and other symbols as is", () => {
      const message = "khoor xkhuh!";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "hello there!";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "Khoor Xkhuh!";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "hello there!";
      expect(actual).to.equal(expected);
    });
    it("should properly handle letters at the end of the alphabet", () => {
      const message = "brgd";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "yoda";
      expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift that will shift to the left", () => {
      const message = "irhb";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "luke";
      expect(actual).to.equal(expected);
    });
  });
});
