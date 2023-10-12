"use strict";

// const { randomWord } = require("./words.mjs");
import randomWord from "./words.mjs";
const { playableWords } = require("./allPossible");

/**
 * Class containing the logic for a game of wordle.
 */
class Wordle {
  constructor() {
    this.word = randomWord();
    this.guessCount = 0;
    this.isWon = null;
    this.gameboard = [
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
    ];
  }

  guessWord(guess) {
    if (guess.length > 5) throw new Error("guess must be of length 5");
    if (!playableWords.includes(guess))
      throw new Error(`${guess} is not a valid English word.`);

    if (guess === this.word) {
      this.isWon = true;
    } else if (guess !== this.word && this.guessCount.length === 6) {
      this.isWon = false;
    }

    this.scoreWord(guess);
    this.guessCount++;
  }

  /**
   * Adds letters from guess to gameboard along with whether or not they
   * were guess in the correct place.
   *
   * @param {string} guess
   */
  scoreWord(guess) {
    const letters = guess.split("");

    for (let i = 0; i < 5; i++) {
      let status;
      if (this.word[i] === letters[i]) {
        status = "correct";
      } else if (this.word.includes(letters[i])) {
        status = "partial";
      } else {
        status = "incorrect";
      }

      this.gameboard[this.guessCount][i] = {
        letter: letters[i],
        status,
      };
    }
  }
}

export default Wordle;
