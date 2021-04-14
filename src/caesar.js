// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift === undefined || shift < -25 || shift > 25) {
      return false;
    }
    if (encode === false) {
      const inputChars = input.toLowerCase().split("");
      const shiftedChars = inputChars.map((char) => {
        // ASCII char code
        if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) {
          return char;
        } else {
          let charCode = char.charCodeAt(0);
          let newCharCode = charCode - shift;
          if (newCharCode > 122) {
            newCharCode = 96 + (newCharCode - 122);
          }
          if (newCharCode < 97) {
            newCharCode = 123 - (97 - newCharCode);
          }
          const newChar = String.fromCharCode(newCharCode);
          return newChar;
        }
      });
      const result = shiftedChars.join("");
      return result;
    } else {
      const inputChars = input.toLowerCase().split("");
      const shiftedChars = inputChars.map((char) => {
        // ASCII char code
        if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) {
          return char;
        } else {
          let charCode = char.charCodeAt(0);
          let newCharCode = charCode + shift;
          if (newCharCode > 122) {
            newCharCode = 96 + (newCharCode - 122);
          }
          if (newCharCode < 97) {
            newCharCode = 123 - (97 - newCharCode);
          }
          const newChar = String.fromCharCode(newCharCode);
          return newChar;
        }
      });
      const result = shiftedChars.join("");
      return result;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
