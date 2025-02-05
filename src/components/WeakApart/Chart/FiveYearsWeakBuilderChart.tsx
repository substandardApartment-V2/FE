import { Bar, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js";

export default function FiveYearsWeakBuilderChart() {
  const data = {
    labels: [
      "현대엔지니어링(주)",
      "재형건설산업(주)",
      "지브이종합건설",
      "라임종합건설",
      "삼도종합건설(주)",
    ],
    datasets: [
      {
        data: [118, 92, 82, 76, 71],
        backgroundColor: ["#E4E1D0"],
        barThickness: 12,
        maxBarThickness: 20,
        minBarLength: 3,
        borderWidth: 0,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
