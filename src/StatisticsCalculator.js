import Statistics from "./Statistics";

function getGuessDistribution(word) {
  const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < word.length; i++) {
    distribution[word[i]]++;
  }

  return distribution;
}

function StatisticsCalculator({ record }) {
  const gamesPlayed = record.length;
  const winPercentage = Math.round(
    (record.filter((r) => r.won == true).length / gamesPlayed) * 100,
    2
  );
  // const currentStreak =
  // const maxStreak
  const guessDistribution = getGuessDistribution(record.map((r) => r.guesses));

  return (
    <Statistics
      gamesPlayed={gamesPlayed}
      winPercentage={winPercentage}
      guessDistribution={guessDistribution}
    />
  );
}

export default StatisticsCalculator;
