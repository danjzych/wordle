"use strict";

import { randomWord, possibleWordles } from "./words.mjs";
const { playableWords } = require("./allPossible");

/**
 * Class containing the logic for a game of wordle.
 */
class Wordle {
  constructor() {
    // this.word = randomWord().toUpperCase();
    this.word = "ORGAN";
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

  guessWord() {
    const guess = this.gameboard[this.guessCount]
      .map((obj) => obj.letter)
      .join("");

    if (guess.length > 5) throw new Error("guess must be of length 5");
    if (!playableWords.includes(guess) && !possibleWordles.includes(guess))
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
        //FIXME: Account for 'GOGOS" how to not make first G yellow, when the middle green is green for the one G that is correct
        const currentGuessLetterCount = letters
          .slice(0, i + 1)
          .filter((l) => l === letters[i]).length;
        const wordleLetterCount = this.word
          .split("")
          .filter((l) => l === letters[i]).length;

        status =
          currentGuessLetterCount <= wordleLetterCount
            ? "partial"
            : "incorrect";
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
