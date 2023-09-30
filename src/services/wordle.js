"use strict";

const { randomWord } = require("./words");

/**
 * Class containing the logic for a game of wordle.
 */
class Wordle {
  constructor() {
    this.word = randomWord();
    this.guesses = [];
    this.guessedLetters = {};
    this.isWon = null;
  }

  guessWord(guess) {
    this.guesses.push(guess);

    if (guess === this.word) {
      this.isWon = true;
    } else if (guess !== this.word && this.guesses.length === 6) {
      this.isWon = false;
    } else {
      this.handleGuessedLetters(guess);
    }
  }

  /**
   * Adds letters from guess to guessed letters along with whether or not they
   * were guess in the correct place.
   *
   * @param {string} guess
   */
  handleGuessedLetters(guess) {
    const letters = guess.split("");
  }
}

export default Wordle;
