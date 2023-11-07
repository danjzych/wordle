"use strict";

import { randomWord, possibleWordles } from "./words.mjs";
const { playableWords } = require("./allPossible");

/**
 * Class containing the logic for a game of wordle.
 */
class Wordle {
  constructor(prev = null) {
    this.word = prev?.word || randomWord().toUpperCase();
    this.guessCount = prev?.guessCount || 0;
    this.isWon = prev?.isWon || null;
    this.gameboard = prev?.gameboard || [
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}],
    ];
  }

  /**
   * Creates frequency counter for word.
   * @param {string} word
   * @returns object
   */
  getFrequencyCounter(word) {
    const frequency = {};

    for (let i = 0; i < word.length; i++) {
      const val = frequency[word[i]] || 0;
      frequency[word[i]] = val + 1;
    }

    return frequency;
  }

  /**
   * Handles the guessing of a possible wordle on the gameboard. Validates word
   * as playable word, check for win or lose, and then scores word.
   */
  guessWord() {
    const guess = this.gameboard[this.guessCount]
      .map((obj) => obj.letter)
      .join("");

    if (guess.length > 5) throw new Error("guess must be of length 5");
    //TODO: create one list of words myself
    if (!playableWords.includes(guess) && !possibleWordles.includes(guess))
      throw new Error(`${guess} is not in word list`);

    if (guess === this.word) {
      this.isWon = true;
    } else if (guess !== this.word && this.guessCount === 5) {
      this.isWon = false;
    }

    this.scoreWord(guess);
    this.guessCount++;
  }

  /**
   * Adds letters from guess to gameboard along with whether or not they
   * were guessed in the correct place.
   *
   * @param {string} guess
   */
  scoreWord(guess) {
    const letters = guess.split("");
    const frequencies = this.getFrequencyCounter(this.word);
    const currentRow = this.gameboard[this.guessCount];

    for (let i = 0; i < 5; i++) {
      if (letters[i] === this.word[i]) {
        currentRow[i] = {
          letter: letters[i],
          status: "correct",
        };

        frequencies[letters[i]]--;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (frequencies[letters[i]] && currentRow[i].status !== "correct") {
        currentRow[i] = {
          letter: letters[i],
          status: "partial",
        };

        frequencies[letters[i]]--;
      }

      if (currentRow[i].status === "pending") {
        currentRow[i] = {
          letter: letters[i],
          status: "incorrect",
        };
      }
    }
  }
}

export default Wordle;
