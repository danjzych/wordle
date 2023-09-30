"use strict";

//eventually uninstall this library and find a list of easier words to use, some of these are crazy
const englishWords = require("an-array-of-english-words");
const fiveLetterWords = englishWords.filter((word) => word.length === 5);

function randomWord() {
  return fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
}

module.exports = {
  randomWord,
};
