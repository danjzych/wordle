const englishWords = require("an-array-of-english-words");

const playableWords = englishWords
  .filter((word) => word.length === 5)
  .map((word) => word.toUpperCase());

module.exports = {
  playableWords,
};
