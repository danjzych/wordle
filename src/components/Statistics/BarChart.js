import { useContext } from "react";
import PlayingContent from "../../contexts/playingContext";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import playingContext from "../../contexts/playingContext";

const displayOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
  // scales: {
  //   x: {
  //     grid: {
  //       display: false,
  //     },
  //   },
  //   y: {
  //     grid: {
  //       display: false,
  //     },
  //   },
  // },
};

const backgroundColor = [
  "#7c7c7c",
  "#7c7c7c",
  "#7c7c7c",
  "#7c7c7c",
  "#7c7c7c",
  "#7c7c7c",
];

function GuessDistributionChart({ guessDistribution }) {
  const { isPlaying, currentGuess } = useContext(playingContext);

  if (!isPlaying) backgroundColor[currentGuess] = "#6cac64";
  const chartData = {
    labels: Object.keys(guessDistribution),
    datasets: [
      {
        label: "Guess Distribution",
        data: Object.values(guessDistribution),
        backgroundColor,
        indexAxis: "y",
        scaleY: "reverse",
      },
    ],
  };

  return <Bar data={chartData} options={displayOptions} />;
}

export default GuessDistributionChart;
