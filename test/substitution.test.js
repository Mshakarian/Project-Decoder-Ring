// Write your tests here!
const { expect } = require("chai").expect;
const { substitution } = require("../src/substitution");
describe("substitution", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "hello there";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is nto exactly 26 characters", () => {
      const message = "hello there";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "hello there";
      const alphabet = "abcabcabcabcabcabcabcabcyz";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "jedi";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "ukob";
      expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
      const message = "kenobi";
      const alphabet = "w.aeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "fsgy.x";
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const message = "Star Wars";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "rdpx spxr";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "ukob";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "jedi";
      expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
      const message = "fsgy.x";
      const alphabet = "w.aeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "kenobi";
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const message = "rdpx spxr";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "star wars";
      expect(actual).to.equal(expected);
    });
  });
});
