// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (
      !alphabet ||
      !alphabet
        .toLowerCase()
        .split("")
        .sort()
        .every((char, index) => index === 0 || char !== alphabet[index - 1]) ||
      alphabet.length !== 26
    ) {
      return false;
    } else if (encode) {
      const charMap = englishAlphabet
        .split("")
        .reduce(
          (acc, char, index) => ({ ...acc, [char]: alphabet[index] }),
          {}
        );

      const inputChars = input.toLowerCase().split("");
      const substituted = inputChars.map((char) => {
        if (char == " ") {
          return char;
        } else {
          return charMap[char];
        }
      });
      return substituted.join("");
    } else if (encode === false) {
      const inverseCharMap = alphabet
        .split("")
        .reduce(
          (acc, char, index) => ({ ...acc, [char]: englishAlphabet[index] }),
          {}
        );
      const inputChars = input.toLowerCase().split("");
      const decoded = inputChars.map((char) => {
        if (char == " ") {
          return char;
        } else {
          return inverseCharMap[char];
        }
      });
      return decoded.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
