import { Doughnut } from "react-chartjs-2";
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
      "보광종합건설(주)",
      "(주)포스코이앤씨",
      "계룡건설산업(주)",
      "(주)시티건설",
      "(주)대우건설",
    ],
    datasets: [
      {
        data: [118, 92, 82, 76, 71, 59, 58, 57, 53, 51],
        backgroundColor: ["#E4E1D0"],
        barThickness: 17,
        barPercentage: 3,
        maxBarThickness: 20,
        minBarLength: 3,
        cutout: "85%",
        borderWidth: 0,
        spacing: 5,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
