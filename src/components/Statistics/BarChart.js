import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function GuessDistributionChart({ guessDistribution }) {
  const chartData = {
    labels: Object.keys(guessDistribution),
    datasets: [
      {
        label: "Guess Distribution",
        data: Object.values(guessDistribution),
        backgroundColor: ["#7c7c7c"],
        indexAxis: "y",
        scaleY: "reverse",
      },
    ],
  };

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
  return <Bar data={chartData} options={displayOptions} />;
}

export default GuessDistributionChart;
