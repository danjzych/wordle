"use strict";

import { words } from "popular-english-words";
const possibleWordles = words.getMostPopularLength(3000, 5);

function randomWord() {
  return possibleWordles[Math.floor(Math.random() * possibleWordles.length)];
}

export default randomWord;
