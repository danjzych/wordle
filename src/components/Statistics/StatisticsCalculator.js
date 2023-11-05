import Statistics from "./Statistics";

//TODO: Instead of making this a component, move the functions somewhere else
//and drop this component entirely

function StatisticsCalculator({ record, toggleModal }) {
  /**
   * Takes array of scores and returns distribution of scores as object.
   * @param {array} arr
   * @returns object
   */
  function getGuessDistribution(arr) {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    for (let i = 0; i < arr.length; i++) {
      distribution[arr[i]]++;
    }

    return distribution;
  }

  /**
   * Takes array of Booleans and returns first streak of true.
   * @param {array} arr
   * @returns number
   */
  function getStreak(arr) {
    let streak = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        streak++;
      } else {
        return streak;
      }
    }

    return streak;
  }

  /**
   * Takes array of booleans and returns longest streak in array.
   * @param {array} arr
   * @returns number
   */
  function getMaxStreak(arr) {
    let maxStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        currentStreak++;

        if (currentStreak > maxStreak) {
          maxStreak = currentStreak;
        }
      } else {
        currentStreak = 0;
      }
    }

    return maxStreak;
  }

  const gamesPlayed = record.length;
  const winPercentage =
    Math.round(
      (record.filter((r) => r.won == true).length / gamesPlayed) * 100,
      2
    ) || 0;
  const currentStreak = getStreak(record.map((r) => r.won).reverse());
  const maxStreak = getMaxStreak(record.map((r) => r.won).reverse());
  const guessDistribution = getGuessDistribution(record.map((r) => r.guesses));

  return (
    <Statistics
      gamesPlayed={gamesPlayed}
      winPercentage={winPercentage}
      currentStreak={currentStreak}
      maxStreak={maxStreak}
      guessDistribution={guessDistribution}
      toggleModal={toggleModal}
    />
  );
}

export default StatisticsCalculator;
